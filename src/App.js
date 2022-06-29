import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Containers/Doctors/Doctor";
import Medicine from "./Containers/Medicine/Medicine";
import {Provider} from 'react-redux';
import { configureStore } from "./Redux/Store";
import Counter from "./Containers/Counter/Counter";

function App() {
  const store = configureStore();
  return (
    <>
    <Provider store={store}>
      <Layout>
        <Switch>
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
          <Route exact path={"/counter"} component={Counter} />
        </Switch>
      </Layout>
      </Provider>
    </>
  );
}

export default App;
