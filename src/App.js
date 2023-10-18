import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import constants from "./components/router.constants";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Employees from "./routes/Employees";
import Base from "./components/Base";
import Login from "./routes/Login";
import { useSelector } from "react-redux";
import Register from "./routes/Register";
import EmployeeDetails from "./routes/EmployeeDetails";
import Logout from "./routes/Logout"

function App() {
  const login = useSelector((state) => state.login.loginState);
  const logout = useSelector((state) => state.login.logout);
  return (
    <div className="outer-wrapper">
      {login ? (
        <Router>
          <Header />
          <NavBar />
          <Routes>
            <Route
              exact
              path={constants.paths.employee}
              element={<Employees />}
            ></Route>
            <Route
              exact
              path={constants.paths.dashboard}
              element={<Base input="Dashboard" />}
            ></Route>
            <Route
              exact
              path={constants.paths.clients}
              element={<Base input="Clients" />}
            ></Route>
            <Route
              exact
              path={constants.paths.project}
              element={<Base input="Project" />}
            ></Route>
            <Route
              exact
              path={constants.paths.tasks}
              element={<Base input="Tasks" />}
            ></Route>
            <Route
              exact
              path={constants.paths.calls}
              element={<Base input="Calls" />}
            ></Route>
            <Route
              exact
              path={constants.paths.contacts}
              element={<Base input="Contacts" />}
            ></Route>
            <Route
              exact
              path={constants.paths.settings}
              element={<Base input="Settings" />}
            ></Route>
            <Route
              exact
              path={constants.paths.details}
              element={<EmployeeDetails/>}
            ></Route>
            <Route
              path="*"
              element={<Navigate replace to={constants.paths.employee} />}
            ></Route>
          </Routes>
        </Router>
      ) : (
        <Router>
          <Header />
          <Routes>
            
            <Route
              path={constants.paths.register}
              element={<Register />}
            ></Route>
            <Route
              path={constants.paths.forgetPassword}
              element={<Base input="Work In Progress..." />}
            ></Route>
            {logout?
            <Route
              path={constants.paths.logout}
              element={<Logout/>}
            ></Route>:
            <Route path={constants.paths.login} element={<Login />}></Route>
            }
            <Route
              path="*"
              element={<Navigate replace to={constants.paths.login} />}
            ></Route>
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
