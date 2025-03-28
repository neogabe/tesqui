import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PrivateRoute } from "./routes";
import {
  Login,
  SignUp,
  UserDashboard,
  MyTasks,
  Dashboard,
  ViewTaskDetails,
  ManageTasks,
  CreateTask,
  ManageUsers,
} from "./pages/index.js";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        {/* Rota apenas para admin */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/tasks' element={<ManageTasks />} />
          <Route path='/admin/create-task' element={<CreateTask />} />
          <Route path='/admin/users' element={<ManageUsers />} />
        </Route>

        {/* Rota apenas para usuários */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/tasks' element={<MyTasks />} />
          <Route path='/user/tasks-details/:id' element={<ViewTaskDetails />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
