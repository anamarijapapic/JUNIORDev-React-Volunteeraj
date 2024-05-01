import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Team = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
        <div className="mx-auto max-w-screen-sm text-center mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Team
          </h2>
          <p className="font-light text-gray-500 lg:mb-16 sm:text-xl dark:text-gray-400">
            Meet the people behind Volunteeraj.
          </p>
        </div>
        <div className="grid gap-8">
          <div className="items-center bg-gray-50 rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
            <img
              className="w-full lg:w-72 rounded-lg sm:rounded-none sm:rounded-l-lg"
              src="./images/content/anamarija.png"
              alt="Anamarija Papić"
            />
            <div className="p-5">
              <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                Anamarija Papić
              </h3>
              <span className="text-gray-500 dark:text-gray-400">
                Web Developer
              </span>
              <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">
                Anamarija developed Volunteeraj as a final project for Digitalna
                Dalmacija EDIT JUNIORDev React training program.
              </p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="https://github.com/anamarijapapic">
                    <BsGithub className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/anamarijapapic">
                    <BsLinkedin className="w-6 h-6 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
