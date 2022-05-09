import type { NextPage } from 'next';
import PrimaryLayout from 'layout/primary-layout';
import Home from 'components/home';

const HomeManager: NextPage = () => {
  return (
    <PrimaryLayout>
      <Home />
    </PrimaryLayout>
  );
};

export default HomeManager;
