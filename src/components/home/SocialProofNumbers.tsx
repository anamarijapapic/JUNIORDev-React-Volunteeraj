const SocialProofNumbers = ({
  activities,
  organizations,
  volunteers,
}: {
  activities: number;
  organizations: number;
  volunteers: number;
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
        <dl className="grid max-w-screen-md gap-8 mx-auto text-gray-900 sm:grid-cols-3 dark:text-white">
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {activities}
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              activities
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {organizations}
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              organizations
            </dd>
          </div>
          <div className="flex flex-col items-center justify-center">
            <dt className="mb-2 text-3xl md:text-4xl font-extrabold">
              {volunteers}
            </dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              volunteers
            </dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default SocialProofNumbers;