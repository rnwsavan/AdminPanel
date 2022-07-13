import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Containers/Doctors/Doctor";
import Medicine from "./Containers/Medicine/Medicine";
import {Provider} from 'react-redux';
import { configureStore } from "./Redux/Store";
import Counter from "./Containers/Counter/Counter";
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  const {store,persistor} = configureStore();
  return (
    <>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Layout>
        <Switch>
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
          <Route exact path={"/counter"} component={Counter} />
        </Switch>
      </Layout>
      </PersistGate>
      </Provider>
    </>
  );
}

export default App;
