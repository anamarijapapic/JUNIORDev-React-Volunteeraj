import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storageBucket } from '../../config/firebase';

const useFileUpload = () => {
  const uploadFile = async (file: File) => {
    const storageRef = ref(storageBucket, `uploads/${Date.now()}-${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  return { uploadFile };
};

export default useFileUpload;
