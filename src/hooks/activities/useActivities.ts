import { useCallback, useEffect, useState } from 'react';
import {
  DocumentData,
  collection,
  getDocs,
  getDoc,
  query,
  where,
  orderBy,
  OrderByDirection,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

const useActivities = () => {
  const [activities, setActivities] = useState<DocumentData[]>([]);

  const fetchActivities = useCallback(
    async ({
      city = '',
      sortOrder,
    }: {
      city?: string;
      sortOrder: OrderByDirection;
    }) => {
      const conditions = [];

      if (city) {
        conditions.push(where('zip', '==', city));
      }

      conditions.push(orderBy('date', sortOrder), orderBy('time', sortOrder));

      const activitiesQuery = query(
        collection(db, 'activities'),
        ...conditions
      );

      const activitiesSnapshot = await getDocs(activitiesQuery);

      const activitiesData = await Promise.all(
        activitiesSnapshot.docs.map(async (doc) => {
          const activityData = doc.data();
          const organizationRef = activityData.organization;
          const organizationDoc = await getDoc(organizationRef);
          const organizationData = organizationDoc.data();

          return {
            id: doc.id,
            ...activityData,
            organization: organizationData,
          };
        })
      );

      setActivities(activitiesData);
    },
    []
  );

  useEffect(() => {
    fetchActivities({ city: '', sortOrder: 'asc' });
  }, [fetchActivities]);

  return { activities, refreshActivities: fetchActivities };
};

export default useActivities;
