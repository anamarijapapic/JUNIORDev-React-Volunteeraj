const Mission = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our mission
          </h2>
          <p className="mb-4">
            At Volunteeraj we believe that everyone can make a difference by
            starting small. All it takes is a little bit of time and effort -
            and together, we can make a big impact.
          </p>
          <p className="mb-4">
            The act of volunteering is a gift that keeps on giving. It not only
            helps others but also helps you grow as a person. It is a win-win
            situation for everyone involved.
          </p>
          <p>
            So why not start your journey with Volunteeraj today? It's easy,
            fun, and rewarding.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="./images/content/mission-1.png"
            alt="Gardening, Jonathan Kemper on Unsplash"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="./images/content/mission-2.png"
            alt="Pet shelter, Cynthia Smith on Unsplash"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
