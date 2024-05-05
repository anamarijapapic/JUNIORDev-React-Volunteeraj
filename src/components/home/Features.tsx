import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Features = ({
  exploreRef,
}: {
  exploreRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section ref={exploreRef} className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            What our platform offers
          </h2>
          <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
            Start your journey with Volunteeraj and give back to the community.
          </p>
        </div>

        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Activities
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              A variety of activities to choose from - from planting trees to
              helping out at a local shelter. Find an activity that interests
              you.
            </p>
            <Link
              to="/activities"
              title=""
              className="text-white bg-cyan-700 justify-center hover:bg-cyan-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              role="button"
            >
              View activities
              <BsArrowRight className="w-5 h-5 ml-2 -mr-1" />
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Organizations
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              Find organizations that are looking for volunteers. Connect with
              them and help them with their activities.
            </p>
            <Link
              to="/organizations"
              title=""
              className="text-white bg-cyan-700 justify-center hover:bg-cyan-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              role="button"
            >
              View organizations
              <BsArrowRight className="w-5 h-5 ml-2 -mr-1" />
            </Link>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
              Volunteers
            </h3>
            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
              The heart of Volunteeraj - volunteers. Not all heroes wear capes,
              some just volunteer.
            </p>
            <Link
              to="/volunteers"
              title=""
              className="text-white bg-cyan-700 justify-center hover:bg-cyan-800 inline-flex items-center focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              role="button"
            >
              View volunteers
              <BsArrowRight className="w-5 h-5 ml-2 -mr-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
