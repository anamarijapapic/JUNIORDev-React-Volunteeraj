import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useAcceptOrganization = () => {
  const updateOrganization = async (id: string) => {
    await updateDoc(doc(db, 'organizations', id), {
      accepted: true,
    });
  };

  return { updateOrganization };
};

export default useAcceptOrganization;
