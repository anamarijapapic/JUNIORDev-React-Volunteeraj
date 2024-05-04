import { useCallback, useEffect, useState } from 'react';
import {
  DocumentData,
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

export const useAcceptedOrganizations = (sortOrder: 'asc' | 'desc') => {
  const [organizations, setOrganizations] = useState<DocumentData[]>([]);

  const fetchOrganizations = useCallback(async () => {
    // Get organizations that accepted = true
    const organizationsQuery = query(
      collection(db, 'organizations'),
      where('accepted', '==', true),
      orderBy('name', sortOrder)
    );
    const organizationsSnapshot = await getDocs(organizationsQuery);
    const organizationsData = organizationsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setOrganizations(organizationsData);
  }, [sortOrder]);

  useEffect(() => {
    fetchOrganizations();
  }, [fetchOrganizations]);

  return { organizations, refreshOrganizations: fetchOrganizations };
};

export default useAcceptedOrganizations;
