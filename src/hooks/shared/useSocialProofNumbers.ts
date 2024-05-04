import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useSocialProofNumbers = () => {
  const [statistics, setStatistics] = useState({
    activities: 0,
    organizations: 0,
    volunteers: 0,
  });

  useEffect(() => {
    const fetchSocialProofNumbers = async () => {
      const activitiesQuery = await getDocs(collection(db, 'activities'));
      const organizationsQuery = await getDocs(
        query(collection(db, 'organizations'), where('accepted', '==', true))
      );
      const volunteersQuery = await getDocs(collection(db, 'volunteers'));

      setStatistics({
        activities: activitiesQuery.size,
        organizations: organizationsQuery.size,
        volunteers: volunteersQuery.size,
      });
    };
    fetchSocialProofNumbers();
  }, []);

  return statistics;
};
