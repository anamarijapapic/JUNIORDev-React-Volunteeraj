import { useCallback, useEffect, useState } from 'react';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useAcceptedOrganizations = () => {
  const [organizations, setOrganizations] = useState<DocumentData[]>([]);

  const fetchOrganizations = useCallback(async () => {
    // Get organizations that accepted = true
    const organizationsQuery = query(
      collection(db, 'organizations'),
      where('accepted', '==', true)
    );
    const organizationsSnapshot = await getDocs(organizationsQuery);
    const organizationsData = organizationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOrganizations(organizationsData);
  }, []);

  useEffect(() => {
    fetchOrganizations();
  }, [fetchOrganizations]);

  return { organizations, refreshOrganizations: fetchOrganizations };
};

export default useAcceptedOrganizations;
