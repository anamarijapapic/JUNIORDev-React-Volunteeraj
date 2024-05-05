import { useState } from 'react';
import {
  Modal,
  Button,
  Label,
  FileInput,
  TextInput,
  Checkbox,
} from 'flowbite-react';
import useCreateVolunteer from '../../hooks/volunteers/useCreateVolunteer';

const CreateModal = ({
  skills,
  openModal,
  setOpenModal,
  onVolunteerAdded,
}: {
  cities: Record<string, string>;
  skills: string[];
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  onVolunteerAdded: () => void;
}) => {
  const { handleCreate } = useCreateVolunteer();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    avatar: null as File | null,
    bio: '',
    email: '',
    city: '',
    zip: '',
    skills: [] as string[],
  });

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const { skills, ...rest } = formData;
    if (skills.length === 0) {
      skills.push('Other');
    }

    try {
      await handleCreate({ ...rest, skills });
      onVolunteerAdded();
      setOpenModal(false);
      resetForm();
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  const resetForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      avatar: null,
      bio: '',
      email: '',
      city: '',
      zip: '',
      skills: [] as string[],
    });
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg" popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Fill in the details of the new volunteer.
          </h3>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label htmlFor="firstName" value="First name" />
              <TextInput
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                required
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="lastName" value="Last name" />
              <TextInput
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                required
              />
            </div>
          </div>
          <div>
            <Label htmlFor="avatar" value="Avatar" />
            <FileInput
              id="avatar"
              onChange={(e) =>
                setFormData({
                  ...formData,
                  avatar: e.target.files ? e.target.files[0] : null,
                })
              }
            />
          </div>
          <div>
            <Label htmlFor="bio" value="Bio" />
            <TextInput
              id="bio"
              type="text"
              value={formData.bio}
              onChange={(e) =>
                setFormData({ ...formData, bio: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="email" value="Email" />
            <TextInput
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Label htmlFor="city" value="City" />
              <TextInput
                id="city"
                type="text"
                value={formData.city}
                onChange={(e) =>
                  setFormData({ ...formData, city: e.target.value })
                }
                required
              />
            </div>
            <div className="w-1/2">
              <Label htmlFor="zip" value="ZIP" />
              <TextInput
                id="zip"
                type="text"
                value={formData.zip}
                onChange={(e) =>
                  setFormData({ ...formData, zip: e.target.value })
                }
                required
              />
            </div>
          </div>
          <fieldset className="flex flex-col gap-4">
            <legend className="text-sm font-medium dark:text-white mb-4">
              Skills
            </legend>
            {skills.map((skill) => (
              <div key={skill} className="flex items-center gap-2">
                <Checkbox
                  id={`create-${skill}`}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setFormData({
                        ...formData,
                        skills: [...formData.skills, skill],
                      });
                    } else {
                      setFormData({
                        ...formData,
                        skills: formData.skills.filter(
                          (volunteerSkill) => volunteerSkill !== skill
                        ),
                      });
                    }
                  }}
                />
                <Label htmlFor={`create-${skill}`}>{skill}</Label>
              </div>
            ))}
          </fieldset>
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
