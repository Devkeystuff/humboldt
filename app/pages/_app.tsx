import GlobalStyles from '../components/styled/Global';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { Layout } from 'containers';
import Head from 'next/head';
import { images } from 'consts';
import { StyledLayout } from 'containers/Layout/Layout.styled';
import { Navbar } from 'components';

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
        <link href={'/images/logo/logo-favicon.ico'} rel="icon" type="image/png" sizes="32x32" />
        <title>Humboldt.</title>
      </Head>
      <StyledLayout>
        <Navbar />
        <Component {...pageProps} />
      </StyledLayout>
    </ThemeProvider>
  );
}
export default MyApp;
