import SignUpForm from "./component/auth/signUp";
import LoginForm from "./component/auth/login";
import Nav from "./pages/Nav/nav";
import Code from "./component/game/code";
import { Outlet } from "react-router-dom";
import "./index";

function App() {
  return (
    <div>
      <Nav />
      <Code />
      <Outlet/>
    </div>
  );
}

export default App;
