import { useState } from 'react';
import {
  Modal,
  Button,
  Label,
  TextInput,
  Textarea,
  Select,
  Datepicker,
} from 'flowbite-react';
import { HiHome } from 'react-icons/hi';
import useCreateActivity from '../../hooks/activities/useCreateActivity';
import useAcceptedOrganizations from '../../hooks/organizations/useAcceptedOrganizations';

const CreateModal = ({
  openModal,
  setOpenModal,
  onActivityAdded,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  onActivityAdded: () => void;
}) => {
  const { handleCreate } = useCreateActivity();
  const { organizations } = useAcceptedOrganizations('asc');
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    description: '',
    date: '',
    time: '',
    street: '',
    city: '',
    zip: '',
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await handleCreate(formData);
    onActivityAdded();
    setOpenModal(false);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      name: '',
      organization: '',
      description: '',
      date: '',
      time: '',
      street: '',
      city: '',
      zip: '',
    });
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg" popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Fill in the details of the new activity.
          </h3>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Name" />
              <span className="text-red-500">*</span>
            </div>
            <TextInput
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="organization" value="Organization" />
              <span className="text-red-500">*</span>
            </div>
            <Select
              id="organization"
              value={formData.organization}
              onChange={(e) =>
                setFormData({ ...formData, organization: e.target.value })
              }
              required
            >
              <option value="">Select organization</option>
              {organizations.map((organization) => (
                <option key={organization.id} value={organization.id}>
                  {organization.name}
                </option>
              ))}
            </Select>
          </div>
          <div>
            <Label htmlFor="description" value="Description" />
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="date" value="Date" />
              <span className="text-red-500">*</span>
            </div>
            <Datepicker
              id="date"
              name="date"
              minDate={new Date(new Date().setDate(new Date().getDate() + 1))}
              value={formData.date}
              onSelectedDateChanged={(date) =>
                setFormData({ ...formData, date: date.toLocaleDateString() })
              }
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="time" value="Time" />
              <span className="text-red-500">*</span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 end-0 top-0 flex items-center pe-3.5 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm11-4a1 1 0 1 0-2 0v4a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V8Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="time"
                id="time"
                className="bg-gray-50 border leading-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={formData.time}
                onChange={(e) =>
                  setFormData({ ...formData, time: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="street" value="Street" />
              <span className="text-red-500">*</span>
            </div>
            <TextInput
              id="street"
              type="text"
              icon={HiHome}
              placeholder="Ruđera Boškovića 32"
              value={formData.street}
              onChange={(e) =>
                setFormData({ ...formData, street: e.target.value })
              }
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="city" value="City" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput
                id="city"
                type="text"
                placeholder="Split"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="zip" value="ZIP" />
                <span className="text-red-500">*</span>
              </div>
              <TextInput
                id="zip"
                type="text"
                placeholder="21000"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div className="flex justify-end gap-4">
            <Button color="success" type="submit">
              Create
            </Button>
            <Button color="gray" onClick={() => setOpenModal(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default CreateModal;
