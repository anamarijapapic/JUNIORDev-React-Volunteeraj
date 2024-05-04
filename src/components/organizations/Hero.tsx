const Hero = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <img
        className="w-full rounded-lg"
        src="./images/content/organizations-hero.png"
        alt="Hands piled together, Hannah Busing on Unsplash"
      />
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Organizations
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          Find organizations that are looking for volunteers. Connect with them
          and help them with their activities.
        </p>
      </div>
    </div>
  </section>
);

export default Hero;
