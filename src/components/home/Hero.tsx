import { BsArrowRight } from 'react-icons/bs';

const Hero = ({
  exploreRef,
}: {
  exploreRef: React.RefObject<HTMLDivElement>;
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Volunteeraj - a platform that connects volunteers and organizations
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Volunteeraj is a platform that connects volunteers and
            organizations. It is a place where volunteers can find activities to
            participate in and organizations can find volunteers to help them
            with their activities.
          </p>
          <button
            onClick={() =>
              exploreRef.current?.scrollIntoView({ behavior: 'smooth' })
            }
            className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
          >
            Explore our platform
            <BsArrowRight className="w-5 h-5 ml-2 -mr-1" />
          </button>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <img
            src="./images/content/hero.png"
            alt="Hands imprint showing love, Rod Long on Unsplash"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
