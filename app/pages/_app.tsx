import GlobalStyles from '../components/styled/Global';
import '../styles/globals.scss';
import { ThemeProvider } from 'styled-components';
import { AppProps } from 'next/app';
import { Layout } from 'containers';
import { Head } from 'components';

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
      <Head />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default MyApp;
