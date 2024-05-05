import { doc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { useCallback } from 'react';
import { db } from '../../config/firebase';

const useUpdateParticipants = () => {
  const handleAddParticipant = useCallback(
    async (activityId: string, newParticipant: string) => {
      const activityRef = doc(db, 'activities', activityId);
      await updateDoc(activityRef, {
        participants: arrayUnion(newParticipant),
      });
    },
    []
  );

  const handleDeleteParticipant = useCallback(
    async (activityId: string, participant: string) => {
      const activityRef = doc(db, 'activities', activityId);
      await updateDoc(activityRef, {
        participants: arrayRemove(participant),
      });
    },
    []
  );

  return { handleAddParticipant, handleDeleteParticipant };
};

export default useUpdateParticipants;
