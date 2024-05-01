import { Footer } from 'flowbite-react';
import { BsGithub } from 'react-icons/bs';

export function CustomFooter() {
  return (
    <Footer container className="rounded-none">
      <Footer.Copyright href="#" by="Volunteeraj" year={2024} />
      <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
        <Footer.Icon
          href="https://github.com/anamarijapapic/JUNIORDev-React-Volunteeraj"
          icon={BsGithub}
        />
      </div>
    </Footer>
  );
}
