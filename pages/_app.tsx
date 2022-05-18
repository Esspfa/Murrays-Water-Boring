import type { AppProps } from 'next/app';
import '../styles/globals.scss';
import 'react-multi-carousel/lib/styles.css';
import PrimaryLayout from 'components/layout/primary-layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PrimaryLayout>
      <Component {...pageProps} />
    </PrimaryLayout>
  );
}

export default MyApp;
