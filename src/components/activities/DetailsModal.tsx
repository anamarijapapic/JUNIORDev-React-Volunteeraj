import { useContext, useEffect, useState } from 'react';
import { DocumentData } from 'firebase/firestore';
import { Button, Modal, TextInput } from 'flowbite-react';
import { BsTrash } from 'react-icons/bs';
import AdminContext from '../../context/AdminContext';
import useUpdateParticipants from '../../hooks/activities/useUpdateParticipants';

const DetailsModal = ({
  openModal,
  setOpenModal,
  activity,
}: {
  openModal: boolean;
  setOpenModal: (value: boolean) => void;
  activity: DocumentData;
}) => {
  const { isAdmin } = useContext(AdminContext);
  const { handleAddParticipant, handleDeleteParticipant } =
    useUpdateParticipants();
  const [participants, setParticipants] = useState(activity.participants || []);
  const [newParticipant, setNewParticipant] = useState('');

  useEffect(() => {
    setParticipants(activity.participants || []);
  }, [activity.participants]);

  const handleAddParticipantAction = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (newParticipant.trim() !== '') {
      handleAddParticipant(activity.id, newParticipant);
      setParticipants((prevParticipants: []) => [
        ...prevParticipants,
        newParticipant,
      ]);
      setNewParticipant('');
    }
  };

  const handleDeleteParticipantAction = (participant: string) => {
    handleDeleteParticipant(activity.id, participant);
    setParticipants((prevParticipants: []) =>
      prevParticipants.filter((p: string) => p !== participant)
    );
  };

  return (
    <Modal show={openModal} onClose={() => setOpenModal(false)} size="lg" popup>
      <Modal.Header />
      <Modal.Body>
        <div className="text-center dark:text-white">
          <h3 className="mb-5 text-2xl font-bold uppercase">{activity.name}</h3>
          <p className="mb-5 text-lg">
            <b>Organized by:</b> {activity.organization?.name}
            {activity.organization?.imageUrl && (
              <img
                className="w-full rounded-lg max-h-48 object-cover"
                src={activity.organization?.imageUrl}
                alt={activity.organization?.name}
              />
            )}
          </p>
          <p className="mb-5">{activity.description}</p>
          <p>
            <b>Date and time:</b> {activity.date} {activity.time}
          </p>
          <p>
            <b>Location:</b> {activity.street}, {activity.city}, {activity.zip}
          </p>
        </div>
        <h4 className="my-5 text-lg dark:text-white font-bold">Participants</h4>
        <div className="flow-root mb-5">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {participants.length > 0 ? (
              participants.map((participant: string, i: number) => (
                <li key={i} className="py-2 sm:py-3">
                  <div className="flex items-center space-x-4">
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {participant}
                      </p>
                    </div>
                    {isAdmin && (
                      <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                        <Button
                          color="failure"
                          size="sm"
                          onClick={() =>
                            handleDeleteParticipantAction(participant)
                          }
                        >
                          <BsTrash />
                        </Button>
                      </div>
                    )}
                  </div>
                </li>
              ))
            ) : (
              <li className="pb-2 sm:pb-3">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  No participants yet.
                </p>
              </li>
            )}
          </ul>
        </div>

        <form onSubmit={handleAddParticipantAction}>
          <div className="flex flex-col gap-4">
            <TextInput
              id="participant"
              type="text"
              placeholder="Add participant"
              value={newParticipant}
              onChange={(e) => setNewParticipant(e.target.value)}
              required
            />
            <Button color="success" type="submit">
              Add participant
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default DetailsModal;
