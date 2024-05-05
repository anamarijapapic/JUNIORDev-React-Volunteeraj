const Hero = () => (
  <section className="bg-white dark:bg-gray-900">
    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
      <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          Volunteers
        </h2>
        <p className="mb-4">
          Volunteers are the backbone of each community. They are the ones who
          make a difference by giving their time and energy to help others.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-4 mt-8">
        <img
          className="w-full rounded-lg"
          src="./images/content/volunteers-1.png"
          alt="Street mural, Andrea Bucceli on Unsplash"
        />
        <img
          className="mt-4 w-full lg:mt-10 rounded-lg"
          src="./images/content/volunteers-2.png"
          alt="Saving the ocean, OCG Saving the Ocean on Unsplash"
        />
        <img
          className="w-full rounded-lg"
          src="./images/content/volunteers-3.png"
          alt="Girl planting, Kenny Eliason on Unsplash"
        />
      </div>
    </div>
  </section>
);

export default Hero;
