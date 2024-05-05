import { useState, useContext } from 'react';
import AdminContext from '../context/AdminContext';
import Hero from './organizations/Hero';
import SubmitOrganization from './organizations/SubmitOrganization';
import OrganizationList from './organizations/OrganizationsList';
import OrganizationsWaitlist from './organizations/OrganizationsWaitlist';
import useAcceptedOrganizations from '../hooks/organizations/useAcceptedOrganizations';
import useNonAcceptedOrganizations from '../hooks/organizations/useNonAcceptedOrganizations';

const Organizations = () => {
  const { isAdmin } = useContext(AdminContext);
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const { organizations, refreshOrganizations } =
    useAcceptedOrganizations(sortOrder);
  const { waitlist, refreshWaitlist } = useNonAcceptedOrganizations(sortOrder);

  return (
    <>
      <Hero />

      <SubmitOrganization onOrganizationAdded={refreshWaitlist} />

      <OrganizationList
        organizations={organizations}
        onOrganizationDeleted={refreshOrganizations}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      {isAdmin && (
        <OrganizationsWaitlist
          waitlist={waitlist}
          onOrganizationDeleted={refreshWaitlist}
          onOrganizationAccepted={() => {
            refreshWaitlist();
            refreshOrganizations();
          }}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
        />
      )}
    </>
  );
};

export default Organizations;
