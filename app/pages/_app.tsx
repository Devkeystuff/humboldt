import GlobalStyles from '../components/styled/Global';
import '../styles/globals.scss';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { Layout } from 'containers';
import Head from 'next/head';
import { images } from 'consts';

const theme = {
  colors: {
    primary: '',
    secondary: '',
    accent: '#AAD725',
    accentShadow: 'rgba(170, 215, 37, 0.226)',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />
        <link rel="manifest" href="/manifest.json" />
        <link href={images.logoIcon} rel="icon" type="image/png" sizes="32x32" />
        {/* <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
          integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
          crossOrigin=""
        /> */}
        <title>Humboldt.</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
