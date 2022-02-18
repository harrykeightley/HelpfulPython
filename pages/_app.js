import "../styles/globals.css";
import MainLayout from "../layouts/mainLayout";

function MyApp({ Component, pageProps }) {
  const getLayout =
    Component.layout || ((page) => <MainLayout>{page}</MainLayout>);
  return getLayout(<Component {...pageProps} />);
}

export default MyApp;
