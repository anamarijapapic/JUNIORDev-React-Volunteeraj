import { useContext, useEffect, useState } from 'react';
import { Button, Card, Label, Select, Radio } from 'flowbite-react';
import { BsPersonAdd } from 'react-icons/bs';
import AdminContext from '../../context/AdminContext';
import Volunteer from './Volunteer';
import CreateModal from './CreateModal';
import useCities from '../../hooks/volunteers/useCities';
import useVolunteers from '../../hooks/volunteers/useVolunteers';

const VolunteersList = () => {
  const { isAdmin } = useContext(AdminContext);
  const skills = [
    'Culture',
    'Ecology',
    'Education',
    'Health',
    'Human Rights',
    'Technology',
    'Other',
  ];
  const { cities, refreshCities } = useCities();
  const { volunteers, refreshVolunteers } = useVolunteers();
  const [isOpenCreateModal, setIsOpenCreateModal] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedSkill, setSelectedSkill] = useState<string>('');

  const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value); // ZIP code
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSkill(event.target.value);
  };

  const handleResetFilters = () => {
    setSelectedCity('');
    setSelectedSkill('');
  };

  useEffect(() => {
    refreshVolunteers({ city: selectedCity, skill: selectedSkill });
  }, [refreshVolunteers, selectedCity, selectedSkill]);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-lg px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Our volunteers
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Meet some of Volunteeraj volunteers and learn about their stories.
          </p>
        </div>
      </div>
      <div className="grid max-w-screen-lg gap-8 px-4 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:px-6 pb-16">
        <Card className="row-span-2 max-w-sm w-full mx-auto">
          {isAdmin && (
            <>
              <div className="flex justify-end items-center mt-8">
                <button
                  onClick={() => setIsOpenCreateModal(true)}
                  className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
                >
                  <div className="flex items-center space-x-3">
                    <BsPersonAdd className="w-6 h-6 text-slate-900 group-hover:text-white" />
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
                      Add a volunteer
                    </h3>
                  </div>
                  <p className="text-slate-500 group-hover:text-white text-sm text-left">
                    Add a new volunteer to the platform.
                  </p>
                </button>
              </div>
              <CreateModal
                openModal={isOpenCreateModal}
                setOpenModal={setIsOpenCreateModal}
                cities={cities}
                skills={skills}
                onVolunteerAdded={() => {
                  refreshVolunteers({
                    city: selectedCity,
                    skill: selectedSkill,
                  });
                  refreshCities();
                }}
              />
            </>
          )}
          <div className="flex flex-col gap-4 p-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Use the filters to find the right volunteer for your organization.
              <span className="block mt-2">
                There are <b>{volunteers.length}</b> volunteers in total that
                suit your criteria.
              </span>
            </p>
            <Label className="mr-4" htmlFor="city">
              Filter by city:
            </Label>
            <Select id="city" value={selectedCity} onChange={handleCityChange}>
              <option value="">All cities</option>
              {Object.entries(cities).map(([key, value]) => (
                <option key={key} value={key}>
                  {value}
                </option>
              ))}
            </Select>
            <fieldset className="flex max-w-md flex-col gap-4">
              <legend className="mb-4 text-sm font-medium dark:text-white">
                Filter by skills:
              </legend>
              {skills.map((skill) => (
                <div key={skill} className="flex items-center gap-2">
                  <Radio
                    id={skill}
                    name="skills"
                    value={skill}
                    checked={selectedSkill === skill}
                    onChange={handleSkillChange}
                  />
                  <Label htmlFor={skill}>{skill}</Label>
                </div>
              ))}
            </fieldset>
          </div>
          <Button onClick={handleResetFilters}>Reset filters</Button>
        </Card>

        {volunteers.map((volunteer) => (
          <Volunteer
            key={volunteer.id}
            volunteer={volunteer}
            onVolunteerDeleted={() => {
              refreshVolunteers({ city: selectedCity, skill: selectedSkill });
              refreshCities();
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default VolunteersList;
