import { useEffect, useState } from 'react';
import {
  collection,
  getCountFromServer,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useSocialProofNumbers = () => {
  const [statistics, setStatistics] = useState({
    activities: 0,
    organizations: 0,
    volunteers: 0,
  });

  useEffect(() => {
    const fetchSocialProofNumbers = async () => {
      const activitiesSnapshot = await getCountFromServer(
        collection(db, 'activities')
      );
      const organizationsSnapshot = await getCountFromServer(
        query(collection(db, 'organizations'), where('accepted', '==', true))
      );
      const volunteersSnapshot = await getCountFromServer(
        collection(db, 'volunteers')
      );

      setStatistics({
        activities: activitiesSnapshot.data().count,
        organizations: organizationsSnapshot.data().count,
        volunteers: volunteersSnapshot.data().count,
      });
    };
    fetchSocialProofNumbers();
  }, []);

  return statistics;
};
