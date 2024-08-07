/* eslint-disable no-unused-vars */
import { Outlet, useNavigation } from 'react-router-dom';
import Header from './Header';

function AppLayout() {
  const navigation = useNavigation();
  return (
    <div className="grid h-[500px] h-screen grid-rows-[auto_1fr_auto]">
      <Header />

      <div className="overflow-scroll">
        <main className="mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
