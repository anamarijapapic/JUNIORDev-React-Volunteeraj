import { useContext } from 'react';
import { DarkThemeToggle, Navbar, ToggleSwitch } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import AdminContext from '../../context/AdminContext';

export function CustomNavbar() {
  const { isAdmin, toggleAdmin } = useContext(AdminContext);

  return (
    <Navbar fluid>
      <Navbar.Brand as={NavLink} to="/">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-8" alt="Volunteeraj" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Volunteeraj
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <ToggleSwitch
          className="mr-4"
          label="Admin"
          checked={isAdmin}
          onChange={() => toggleAdmin(!isAdmin)}
        />
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={NavLink} to="/">
          Home
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/activities">
          Activities
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/organizations">
          Organizations
        </Navbar.Link>
        <Navbar.Link as={NavLink} to="/volunteers">
          Volunteers
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
