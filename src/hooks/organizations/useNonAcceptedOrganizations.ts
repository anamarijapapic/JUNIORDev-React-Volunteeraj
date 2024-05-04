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

export const useNonAcceptedOrganizations = (sortOrder: 'asc' | 'desc') => {
  const [waitlist, setWaitlist] = useState<DocumentData[]>([]);

  const fetchOrganizations = useCallback(async () => {
    // Get organizations that accepted = false
    const waitlistQuery = query(
      collection(db, 'organizations'),
      where('accepted', '==', false),
      orderBy('name', sortOrder)
    );
    const waitlistSnapshot = await getDocs(waitlistQuery);
    const waitlistData = waitlistSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setWaitlist(waitlistData);
  }, [sortOrder]);

  useEffect(() => {
    fetchOrganizations();
  }, [fetchOrganizations]);

  return { waitlist, refreshWaitlist: fetchOrganizations };
};

export default useNonAcceptedOrganizations;
