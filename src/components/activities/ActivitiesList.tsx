import { useContext, useEffect, useState } from 'react';
import { OrderByDirection } from 'firebase/firestore';
import { Table, Select, Label } from 'flowbite-react';
import { BsFillCalendarPlusFill } from 'react-icons/bs';
import AdminContext from '../../context/AdminContext';
import useActivities from '../../hooks/activities/useActivities';
import useDeleteActivity from '../../hooks/activities/useDeleteActivity';
import useCities from '../../hooks/activities/useCities';
import Activity from './Activity';
import CreateModal from './CreateModal';
import DetailsModal from './DetailsModal';
import DeleteModal from '../shared/Modals/DeleteModal';

const ActivitiesList = () => {
  const { isAdmin } = useContext(AdminContext);
  const [sortOrder, setSortOrder] = useState('asc');
  const { activities: initialActivities, refreshActivities } = useActivities();
  const { cities, refreshCities } = useCities();
  const { deleteActivity } = useDeleteActivity();
  const [activities, setActivities] = useState(initialActivities);
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [isOpenDetailsModal, setIsOpenDetailsModal] = useState(false);
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [id, setId] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    setActivities(initialActivities);
  }, [initialActivities]);

  useEffect(() => {
    refreshActivities({
      city: selectedCity,
      sortOrder: sortOrder as OrderByDirection,
    });
  }, [sortOrder, selectedCity, refreshActivities]);

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value); // ZIP code
  };

  const handleSortOrderChange = () => {
    setSortOrder((prevSortOrder) => (prevSortOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleDelete = async (id: string) => {
    await deleteActivity(id);
    refreshActivities({
      city: selectedCity,
      sortOrder: sortOrder as OrderByDirection,
    });
    setIsOpenDeleteModal(false);
  };

  const handleOpenDetailsModal = (id: string) => {
    setId(id);
    setIsOpenDetailsModal(true);
  };

  const handleOpenDeleteModal = (id: string) => {
    setId(id);
    setIsOpenDeleteModal(true);
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-lg px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              Current activities
            </h2>
            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
              Activities that are currently looking for volunteers.
            </p>
          </div>
        </div>
        <div className="w-full px-4 mx-auto lg:px-6 pb-16">
          <div className="grid grid-cols-6 gap-4 mb-3 text-left items-end">
            <div className="col-span-3 lg:col-span-2">
              <div className="flex justify-end items-center mt-8">
                <button
                  onClick={() => setIsOpenCreateModal(true)}
                  className="group block max-w-xs mx-auto rounded-lg p-6 bg-cyan-100 ring-1 ring-cyan-800/5 shadow-sm space-y-3 hover:bg-cyan-500 hover:ring-cyan-500"
                >
                  <div className="flex items-center space-x-3">
                    <BsFillCalendarPlusFill className="w-6 h-6 text-cyan-800 group-hover:text-white" />
                    <h3 className="text-cyan-800 group-hover:text-white text-sm font-semibold">
                      Add a new activity
                    </h3>
                  </div>
                  <p className="text-cyan-800 group-hover:text-white text-sm text-left">
                    Add a new activity to the platform.
                  </p>
                </button>
              </div>
            </div>
            <div className="col-start-5 col-span-2">
              <div className="mb-2 block">
                <Label htmlFor="city" value="Filter by city:" />
              </div>
              <Select
                id="city"
                value={selectedCity}
                onChange={handleCityChange}
              >
                <option value="">All</option>
                {Object.entries(cities).map(([key, value]) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <div className="overflow-x-auto">
            <Table hoverable>
              <Table.Head>
                <Table.HeadCell>Activity</Table.HeadCell>
                <Table.HeadCell>Organization</Table.HeadCell>
                <Table.HeadCell>
                  Datetime
                  <button onClick={handleSortOrderChange}>
                    <svg
                      className="w-3 h-3 ms-1.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </button>
                </Table.HeadCell>
                <Table.HeadCell>Location</Table.HeadCell>
                <Table.HeadCell>
                  <span className="sr-only">Edit</span>
                </Table.HeadCell>
              </Table.Head>
              <Table.Body className="divide-y">
                {activities.map((activity) => (
                  <Activity
                    key={activity.id}
                    activity={activity}
                    handleOpenDetailsModal={handleOpenDetailsModal}
                    handleOpenDeleteModal={handleOpenDeleteModal}
                  />
                ))}
              </Table.Body>
            </Table>
          </div>
        </div>
      </section>
      <CreateModal
        openModal={isOpenCreateModal}
        setOpenModal={setIsOpenCreateModal}
        onActivityAdded={() => {
          refreshActivities({
            city: selectedCity,
            sortOrder: sortOrder as OrderByDirection,
          });
          refreshCities();
        }}
      />
      <DetailsModal
        openModal={isOpenDetailsModal}
        setOpenModal={setIsOpenDetailsModal}
        activity={activities.find((activity) => activity.id === id) || {}}
      />
      {isAdmin && (
        <DeleteModal
          openModal={isOpenDeleteModal}
          setOpenModal={setIsOpenDeleteModal}
          onConfirm={() => handleDelete(id)}
        />
      )}
    </>
  );
};

export default ActivitiesList;
