import { useState } from 'react';
import { Toast } from 'flowbite-react';
import { FaTelegramPlane } from 'react-icons/fa';
import InputForm from './InputForm';
import useCreateOrganization from '../../hooks/organizations/useCreateOrganization';

const SubmitOrganization = ({
  onOrganizationAdded,
}: {
  onOrganizationAdded: () => void;
}) => {
  const { handleCreate } = useCreateOrganization();
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    file: null as File | null,
    website: '',
    email: '',
    street: '',
    city: '',
    zip: '',
  });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    await handleCreate(formData);
    onOrganizationAdded();
    resetForm();

    setMessage(
      'The request has been sent - the organization will be added to the list after approval by one of the administrators.'
    );

    setTimeout(() => setMessage(''), 10000); // Clear the message after 10 seconds
  };

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      file: null,
      website: '',
      email: '',
      street: '',
      city: '',
      zip: '',
    });
  };

  return (
    <section className="bg-gray-200 dark:bg-gray-800">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Submit a new organization
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Let volunteers know about your organization.
          </p>
        </div>
        <InputForm
          onSubmit={handleSubmit}
          formData={formData}
          setFormData={setFormData}
        />
        {message && (
          <Toast className="mt-8 max-w-md mx-auto shadow-lg">
            <FaTelegramPlane className="h-10 w-10 text-cyan-600 dark:text-cyan-500" />
            <div className="pl-4 text-md font-normal">{message}</div>
          </Toast>
        )}
      </div>
    </section>
  );
};

export default SubmitOrganization;