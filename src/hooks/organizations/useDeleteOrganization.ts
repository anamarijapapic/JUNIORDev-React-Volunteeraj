import {
  deleteDoc,
  doc,
  query,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useDeleteOrganization = () => {
  const deleteOrganization = async (id: string) => {
    // Create a reference to the organization document
    const orgRef = doc(db, 'organizations', id);

    // Check if there are any activities that reference this organization
    const activitiesQuery = query(
      collection(db, 'activities'),
      where('organization', '==', orgRef)
    );
    const activitiesSnapshot = await getDocs(activitiesQuery);

    if (!activitiesSnapshot.empty) {
      // If there are activities that reference this organization, throw an error
      throw new Error(
        'Cannot delete organization because there are activities that reference it'
      );
    }

    // If there are no activities that reference this organization, proceed with deletion
    await deleteDoc(orgRef);
  };

  return { deleteOrganization };
};

export default useDeleteOrganization;
