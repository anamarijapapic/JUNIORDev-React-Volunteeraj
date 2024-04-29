// import { db, storageBucket } from './config/firebase';
import { Button } from 'flowbite-react';

function App() {
  // Firestore database
  // console.log(db);
  // Storage bucket
  // console.log(storageBucket);

  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Button>Click me</Button>
    </>
  );
}

export default App;
