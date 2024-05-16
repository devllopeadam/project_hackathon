import { Outlet } from "react-router-dom";
import { DataInputsProvider } from "../contexts/DataInputsContext";
import Login from "./Login";

const Layout = () => {
  return (
    <DataInputsProvider>
      <Outlet />
    </DataInputsProvider>
  );
};

export default Layout;
