import { addDoc, doc, collection } from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '../../config/firebase';

const useCreateActivity = () => {
  const handleCreate = useCallback(
    async (activity: {
      name: string;
      description: string;
      date: string;
      time: string;
      organization: string;
    }) => {
      const activitiesCollection = collection(db, 'activities');
      const organizationRef = doc(db, 'organizations', activity.organization);
      const newActivity = {
        ...activity,
        organization: organizationRef,
        participants: [],
      };
      await addDoc(activitiesCollection, newActivity);
    },
    []
  );

  return { handleCreate };
};

export default useCreateActivity;
