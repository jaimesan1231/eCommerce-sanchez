import Layout from "../components/Layout";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { store, persistor } from "../store/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
