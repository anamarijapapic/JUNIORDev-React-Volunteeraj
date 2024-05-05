import { useContext, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { Badge, Card, Dropdown } from 'flowbite-react';
import AdminContext from '../../context/AdminContext';
import DeleteModal from '../shared/Modals/DeleteModal';
import useDeleteVolunteer from '../../hooks/volunteers/useDeleteVolunteer';

const Volunteer = ({
  volunteer,
  onVolunteerDeleted,
}: {
  volunteer: DocumentData;
  onVolunteerDeleted: (id: string) => void;
}) => {
  const { isAdmin } = useContext(AdminContext);
  const { deleteVolunteer } = useDeleteVolunteer();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [id, setId] = useState('');

  const handleDelete = async (id: string) => {
    await deleteVolunteer(id);
    onVolunteerDeleted(id);
    setIsDeleteModalOpen(false);
  };

  const handleOpenDeleteModal = (id: string) => {
    setId(id);
    setIsDeleteModalOpen(true);
  };

  return (
    <Card className="max-w-sm w-full mx-auto">
      {isAdmin && (
        <>
          <div className="flex justify-end px-4 pt-4">
            <Dropdown inline label="">
              <Dropdown.Item>
                <a
                  onClick={() => handleOpenDeleteModal(volunteer.id)}
                  className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  Delete
                </a>
              </Dropdown.Item>
            </Dropdown>
          </div>
          <DeleteModal
            openModal={isDeleteModalOpen}
            setOpenModal={setIsDeleteModalOpen}
            onConfirm={() => handleDelete(id)}
          />
        </>
      )}
      <div className="flex flex-col items-center pb-10">
        {volunteer.avatarUrl ? (
          <img
            alt={volunteer.firstName + ' ' + volunteer.lastName}
            src={volunteer.avatarUrl}
            className="mb-3 rounded-full shadow-lg w-20 h-20"
          />
        ) : (
          <div className="mb-3 rounded-full shadow-lg relative inline-flex items-center justify-center w-20 h-20 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="text-2xl font-medium text-gray-600 dark:text-gray-300">
              {volunteer.firstName.charAt(0)}
              {volunteer.lastName.charAt(0)}
            </span>
          </div>
        )}
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {volunteer.firstName} {volunteer.lastName}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400 text-center mb-2">
          {volunteer.bio}
        </span>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-bold">
          {volunteer.city}, {volunteer.zip}
        </span>
        <a
          href={`mailto:${volunteer.email}`}
          className="mt-2 text-sm text-blue-500 hover:underline"
        >
          {volunteer.email}
        </a>
        <div className="mt-4">
          {volunteer.skills && (
            <div className="flex flex-wrap justify-center">
              {volunteer.skills.map((skill: string) => (
                <Badge key={skill} className="mr-2 mb-2">
                  {skill}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default Volunteer;
