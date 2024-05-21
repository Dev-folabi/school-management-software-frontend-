import Nav from "./pages/Nav/nav";

import { Outlet } from "react-router-dom";
import "./index";

function App() {
  return (
    <div>
      <Nav />
      
      <Outlet/>
    </div>
  );
}

export default App;
