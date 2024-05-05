import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useDeleteVolunteer = () => {
  const deleteVolunteer = async (id: string) => {
    await deleteDoc(doc(db, 'volunteers', id));
  };

  return { deleteVolunteer };
};

export default useDeleteVolunteer;
