import { Dispatch, SetStateAction, useState } from 'react';
import { DocumentData } from '@firebase/firestore-types';
import { Button, Label, Select } from 'flowbite-react';
import { BsCheck, BsTrash } from 'react-icons/bs';
import Organization from './Organization';
import DeleteModal from '../shared/Modals/DeleteModal';
import useDeleteOrganization from '../../hooks/organizations/useDeleteOrganization';
import useAcceptOrganization from '../../hooks/organizations/useAcceptOrganization';

interface OrganizationsWaitlistProps {
  waitlist: DocumentData[];
  onOrganizationDeleted: (id: string) => void;
  onOrganizationAccepted: (id: string) => void;
  sortOrder: 'asc' | 'desc';
  setSortOrder: Dispatch<SetStateAction<'asc' | 'desc'>>;
}

const OrganizationsWaitlist: React.FC<OrganizationsWaitlistProps> = ({
  waitlist,
  onOrganizationDeleted,
  onOrganizationAccepted,
  sortOrder,
  setSortOrder,
}) => {
  const { deleteOrganization } = useDeleteOrganization();
  const { updateOrganization } = useAcceptOrganization();

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [id, setId] = useState('');

  const handleDelete = async (id: string) => {
    try {
      await deleteOrganization(id);
      onOrganizationDeleted(id);
      setIsDeleteModalOpen(false);
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  const handleOpenDeleteModal = (id: string) => {
    setId(id);
    setIsDeleteModalOpen(true);
  };

  const handleAccept = async (id: string) => {
    try {
      await updateOrganization(id);
      onOrganizationAccepted(id);
    } catch (error) {
      console.error(error);
      alert((error as Error).message);
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-lg px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Organizations on the waitlist
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Organizations that are waiting to be accepted.
            </p>
          </div>

          <div className="flex justify-end items-center mt-8">
            <Label className="mr-4" htmlFor="sortOrder">
              Sort by:
            </Label>
            <Select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
            >
              <option value="asc">A-Z</option>
              <option value="desc">Z-A</option>
            </Select>
          </div>

          <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-6">
            {waitlist.map((organization: DocumentData) => (
              <Organization key={organization.id} organization={organization}>
                <Button
                  color="success"
                  className="self-start ml-4 py-2 px-4"
                  onClick={() => handleAccept(organization.id)}
                >
                  <BsCheck className="w-10 h-10" />
                </Button>
                <Button
                  color="failure"
                  className="self-start ml-4 py-2 px-4"
                  onClick={() => handleOpenDeleteModal(organization.id)}
                >
                  <BsTrash className="w-10 h-10" />
                </Button>
              </Organization>
            ))}
          </div>
        </div>
      </section>
      <DeleteModal
        openModal={isDeleteModalOpen}
        setOpenModal={setIsDeleteModalOpen}
        onConfirm={() => handleDelete(id)}
      />
    </>
  );
};

export default OrganizationsWaitlist;
