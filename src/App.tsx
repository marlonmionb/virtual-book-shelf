import { Fragment } from "react/jsx-runtime";
import UserBar from "./components/UserBar/UserBar";
import path from "./Images/example.png";

function App() {
  return (
    <Fragment>
      <UserBar path={path} alternative='User Profile'>Lucas</UserBar>
    </Fragment>
  );
}

export default App;
