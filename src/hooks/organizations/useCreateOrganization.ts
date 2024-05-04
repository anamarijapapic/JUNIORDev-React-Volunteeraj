import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useFileUpload from '../shared/useFileUpload';

export const useCreateOrganization = () => {
  const { uploadFile } = useFileUpload();

  const [data, setData] = useState({
    name: '',
    description: '',
    file: null as File | null,
    website: '',
    email: '',
    street: '',
    city: '',
    zip: '',
  });

  const handleCreate = async (data: {
    name: string;
    description: string;
    website: string;
    email: string;
    street: string;
    city: string;
    zip: string;
    file: File | null;
  }) => {
    const organization = {
      name: data.name,
      description: data.description,
      imageUrl: '',
      website: data.website,
      email: data.email,
      street: data.street,
      city: data.city,
      zip: data.zip,
      accepted: false,
    };

    try {
      if (data.file) {
        organization.imageUrl = await uploadFile(data.file);
      }
      await addDoc(collection(db, 'organizations'), organization);
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the organization.');
    }
  };

  return { handleCreate, data, setData };
};

export default useCreateOrganization;
