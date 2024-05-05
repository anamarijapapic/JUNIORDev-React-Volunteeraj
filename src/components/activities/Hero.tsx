const Hero = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Activities
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Find activities that you can volunteer for. Lend an extra hand and
          invest your time in helping others.
        </p>
      </div>
      <img
        className="w-full rounded-lg"
        src="./images/content/activities-hero.png"
        alt="Planing, Patrick Perkins on Unsplash"
      />
    </div>
  </section>
);

export default Hero;
