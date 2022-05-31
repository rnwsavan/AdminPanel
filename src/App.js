import { Route, Switch } from "react-router-dom";
import Lauout from "./Components/Layout/Lauout";
import Doctor from "./Containers/Doctors/Doctor";
import Medicine from "./Containers/Medicine/Medicine";

function App() {
  return (
    <>
      <Lauout>
        <Switch>
          <Route exact path={"/Medicine"} component={Medicine} />
          <Route exact path={"/Doctor"} component={Doctor} />
        </Switch>
      </Lauout>
    </>
  );
}

export default App;
