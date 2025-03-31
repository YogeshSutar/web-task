import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import { Provider } from "react-redux";
import { persistor, store } from "./Redux/store/store";
import { PersistGate } from "redux-persist/integration/react";

const Login = React.lazy(() => import("./pages/Login"));
const Register = React.lazy(() => import("./pages/Signup"));
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Profile = React.lazy(() => import("./pages/Profile"));

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Suspense fallback={<>Loading ........</>}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="profile" element={<Profile />} />{" "}
              </Route>
            </Routes>
          </Suspense>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
