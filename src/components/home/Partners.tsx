import DigitalnaDalmacijaLogo from '/images/content/digitalna-dalmacija.svg';
import JuniorDevLogo from '/images/content/junior-dev.svg';

const Partners = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 lg:py-16 mx-auto max-w-screen-xl px-4">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
          Powered by the
          <span className="text-primary-600 dark:text-primary-500">
            {' '}
            Split IT community
          </span>
        </h2>
        <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 dark:text-gray-400">
          <a
            href="https://digitalnadalmacija.hr/"
            className="flex justify-end items-center"
          >
            <img
              src={DigitalnaDalmacijaLogo}
              alt="Digitalna Dalmacija"
              className="h-24"
            />
          </a>
          <a
            href="https://digitalnadalmacija.hr/juniordev"
            className="flex justify-start items-center"
          >
            <img
              src={JuniorDevLogo}
              alt="EDIT JUNIORDev React"
              className="h-20"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Partners;
