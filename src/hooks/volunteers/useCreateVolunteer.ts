import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import useFileUpload from '../shared/useFileUpload';

export const useCreateVolunteer = () => {
  const { uploadFile } = useFileUpload();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    bio: '',
    avatar: null as File | null,
    email: '',
    city: '',
    zip: '',
    skills: [] as string[],
  });

  const handleCreate = async (data: {
    firstName: string;
    lastName: string;
    bio: string;
    avatar: File | null;
    email: string;
    city: string;
    zip: string;
    skills: string[];
  }) => {
    const volunteer = {
      firstName: data.firstName,
      lastName: data.lastName,
      bio: data.bio,
      avatarUrl: '',
      email: data.email,
      city: data.city,
      zip: data.zip,
      skills: data.skills,
    };

    try {
      if (data.avatar) {
        volunteer.avatarUrl = await uploadFile(data.avatar);
      }
      await addDoc(collection(db, 'volunteers'), volunteer);
    } catch (error) {
      console.error(error);
      alert('An error occurred while creating the volunteer.');
    }
  };

  return { handleCreate, data, setData };
};

export default useCreateVolunteer;
