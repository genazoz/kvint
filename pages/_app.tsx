import type {AppProps} from 'next/app'
import {NextIntlProvider} from 'next-intl';
import {Router, useRouter} from "next/router";
import Head from "next/head";
import {useEffect} from "react";
import {ThemeProvider} from "styled-components";
import nProgress from "nprogress";

import GlobalStyles from "../styles/GlobalStyles";
import {wrapper} from "../app/store";
import {setLoading} from "../features/settings/settingsSlice";
import {useAppDispatch, useAppSelector} from "../app/hooks";
import Transition from '../components/Transition';
import {themeSelector} from "../features/theme/themeSlice";

Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({Component, pageProps}: AppProps) {
  const {theme} = useAppSelector(themeSelector)
  const router = useRouter()
  const dispatch = useAppDispatch();

  useEffect(() => {
    const start = () => {
      dispatch(setLoading(true));
    };
    const end = () => {
      dispatch(setLoading(false));
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kvint</title>
      </Head>
      <GlobalStyles/>
      <ThemeProvider theme={theme}>
        <NextIntlProvider messages={pageProps.messages}>
          <Transition location={router.pathname}>
            <Component {...pageProps} />
          </Transition>
        </NextIntlProvider>
      </ThemeProvider>
    </>
  )
}

export default wrapper.withRedux(MyApp);
