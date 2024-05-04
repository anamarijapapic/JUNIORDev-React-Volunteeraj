import { createContext } from 'react';

type AdminContextType = {
  isAdmin: boolean;
  toggleAdmin: (isAdmin: boolean) => void;
};

const AdminContext = createContext<AdminContextType>({
  isAdmin: false,
  toggleAdmin: () => {},
});

export default AdminContext;
