import { DocumentData } from '@firebase/firestore-types';
import { Accordion } from 'flowbite-react';

interface OrganizationProps {
  organization: DocumentData;
}

interface OrganizationProps {
  organization: DocumentData;
  children: React.ReactNode;
}

const Organization: React.FC<OrganizationProps> = ({
  organization,
  children,
}) => (
  <div className="flex justify-between">
    <Accordion className="w-full" collapseAll>
      <Accordion.Panel>
        <Accordion.Title className="font-extrabold text-gray-900 dark:text-white md:text-2xl">
          {organization.name}
        </Accordion.Title>
        <Accordion.Content className="text-left text-gray-500 dark:text-gray-400">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {organization.imageUrl && (
              <img
                className="w-full rounded-lg max-h-48 object-cover"
                src={organization.imageUrl}
                alt={organization.name}
              />
            )}
            <div>
              {organization.description && (
                <p className="mb-4">{organization.description}</p>
              )}
              <p>
                <strong>Address:</strong> {organization.street},{' '}
                {organization.city}, {organization.zip}
              </p>
              <p>
                <strong>Email:</strong>{' '}
                <a
                  className="text-blue-500 hover:underline"
                  href={`mailto:${organization.email}`}
                >
                  {organization.email}
                </a>
              </p>
              {organization.website && (
                <p>
                  <strong>Website:</strong>{' '}
                  <a
                    className="text-blue-500 hover:underline"
                    href={organization.website}
                  >
                    {organization.website}
                  </a>
                </p>
              )}
            </div>
          </div>
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
    {children}
  </div>
);

export default Organization;
