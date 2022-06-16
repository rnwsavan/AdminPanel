import { Route, Switch } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Doctor from "./Containers/Doctors/Doctor";
import Medicine from "./Containers/Medicine/Medicine";

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
        </Switch>
       
      </Layout>
     
    </>
  );
}

export default App;
