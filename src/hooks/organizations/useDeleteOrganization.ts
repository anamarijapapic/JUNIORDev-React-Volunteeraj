import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useDeleteOrganization = () => {
  const deleteOrganization = async (id: string) => {
    await deleteDoc(doc(db, 'organizations', id));
  };

  return { deleteOrganization };
};

export default useDeleteOrganization;
