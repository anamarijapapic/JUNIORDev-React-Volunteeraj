import { useCallback, useEffect, useState } from 'react';
import {
  DocumentData,
  collection,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { db } from '../../config/firebase';

const useVolunteers = () => {
  const [volunteers, setVolunteers] = useState<DocumentData[]>([]);

  const fetchVolunteers = useCallback(async ({ city = '', skill = '' }) => {
    const conditions = [];

    if (city) {
      conditions.push(where('zip', '==', city));
    }

    if (skill) {
      conditions.push(where('skills', 'array-contains', skill));
    }

    const volunteersQuery = query(collection(db, 'volunteers'), ...conditions);

    const volunteersSnapshot = await getDocs(volunteersQuery);

    const volunteersData = volunteersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    setVolunteers(volunteersData);
  }, []);

  useEffect(() => {
    fetchVolunteers({});
  }, [fetchVolunteers]);

  return { volunteers, refreshVolunteers: fetchVolunteers };
};

export default useVolunteers;
