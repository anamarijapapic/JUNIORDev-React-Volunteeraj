import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useDeleteActivity = () => {
  const deleteActivity = async (id: string) => {
    await deleteDoc(doc(db, 'activities', id));
  };

  return { deleteActivity };
};

export default useDeleteActivity;
