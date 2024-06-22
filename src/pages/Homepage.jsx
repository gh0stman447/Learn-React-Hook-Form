import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HookFormProvider from '../providers/FormNameProvider';

const Homepage = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default Homepage;
