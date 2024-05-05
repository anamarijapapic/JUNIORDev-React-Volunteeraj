import { useContext } from 'react';
import { DocumentData } from 'firebase/firestore';
import { Button, Table } from 'flowbite-react';
import AdminContext from '../../context/AdminContext';

const Activity = ({
  activity,
  handleOpenDetailsModal,
  handleOpenDeleteModal,
}: {
  activity: DocumentData;
  handleOpenDetailsModal: (id: string) => void;
  handleOpenDeleteModal: (id: string) => void;
}) => {
  const { isAdmin } = useContext(AdminContext);
  return (
    <>
      <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
          {activity.name}
        </Table.Cell>
        <Table.Cell>{activity.organization.name}</Table.Cell>
        <Table.Cell>
          {activity.date} {activity.time}
        </Table.Cell>
        <Table.Cell>
          {activity.street}, {activity.city}, {activity.zip}
        </Table.Cell>
        <Table.Cell>
          <div className="flex items-center space-x-2">
            <Button
              color="gray"
              onClick={() => handleOpenDetailsModal(activity.id)}
            >
              Details
            </Button>
            {isAdmin && (
              <Button
                color="failure"
                onClick={() => handleOpenDeleteModal(activity.id)}
              >
                Delete
              </Button>
            )}
          </div>
        </Table.Cell>
      </Table.Row>
    </>
  );
};

export default Activity;
