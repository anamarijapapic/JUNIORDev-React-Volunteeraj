import { useCallback, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../config/firebase';

const useCities = () => {
  const [cities, setCities] = useState<Record<string, string>>({});

  const fetchCities = useCallback(async () => {
    const activitiesCollection = collection(db, 'activities');
    const activitiesSnapshot = await getDocs(activitiesCollection);

    const citiesObj: Record<string, string> = {};
    activitiesSnapshot.docs.forEach((doc) => {
      const city = doc.data().city;
      const zip = doc.data().zip;
      if (city && zip) {
        citiesObj[zip] = city;
      }
    });

    setCities(citiesObj);
  }, []);

  useEffect(() => {
    fetchCities();
  }, [fetchCities]);

  return { cities, refreshCities: fetchCities };
};

export default useCities;
