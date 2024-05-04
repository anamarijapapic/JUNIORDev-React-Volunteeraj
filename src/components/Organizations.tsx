import Hero from './organizations/Hero';
import SubmitOrganization from './organizations/SubmitOrganization';
import OrganizationList from './organizations/OrganizationsList';
import OrganizationsWaitlist from './organizations/OrganizationsWaitlist';
import useAcceptedOrganizations from '../hooks/organizations/useAcceptedOrganizations';
import useNonAcceptedOrganizations from '../hooks/organizations/useNonAcceptedOrganizations';

const Organizations = () => {
  const { organizations, refreshOrganizations } = useAcceptedOrganizations();
  const { waitlist, refreshWaitlist } = useNonAcceptedOrganizations();

  return (
    <>
      <Hero />

      <SubmitOrganization onOrganizationAdded={refreshWaitlist} />

      <OrganizationList
        organizations={organizations}
        onOrganizationDeleted={refreshOrganizations}
      />

      <OrganizationsWaitlist
        waitlist={waitlist}
        onOrganizationDeleted={refreshWaitlist}
        onOrganizationAccepted={() => {
          refreshWaitlist();
          refreshOrganizations();
        }}
      />
    </>
  );
};

export default Organizations;
