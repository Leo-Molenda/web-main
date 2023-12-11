import { ComponentType, useCallback } from 'react';
import { Routes as Switch, Route, Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import { SignUp } from '../pages/SignUp';
import { SignIn } from '../pages/SignIn';
import { ForgotPassword } from '../pages/ForgotPassword';
import { ResetPassword } from '../pages/ResetPassword';
import { Profile } from '../pages/Profile';
import { CreateProject } from '../pages/CreateProject';
import { TaskList } from '../pages/TaskList';
import { AddTask } from '../pages/AddTask';
import { AddUserToProject } from '../pages/AddUserToProject';
import { UsersInProject } from '../pages/UsersInProject';
import { MakeUserAdmin } from '../pages/MakeUserAdmin';
import { TaskDetail } from '../pages/TaskDetail';
import { Dashboard } from '../pages/Dashboard';
import { UserSelectedInProject } from '../pages/UserSelectedInProject';
import {SearchTask} from '../pages/SearchTask';

export function Routes() {
  const { user } = useAuth();

  const element = useCallback(
    (Component: ComponentType, isPrivate = false) => {
      return isPrivate === !!user ? (
        <Component />
      ) : (
        <Navigate to={isPrivate ? '/signin' : '/dashboard'} />
      );
    },
    [user],
  );

  return (
    <Switch>
      <Route path="/signup" element={element(SignUp)} />
      <Route path="/signin" element={element(SignIn)} />
      <Route path="/forgot-password" element={element(ForgotPassword)} />
      <Route path="/reset-password" element={element(ResetPassword)} />

      <Route path="/dashboard" element={element(Dashboard, true)} />
      <Route path="/profile" element={element(Profile, true)} />
      <Route path="/create-project" element={element(CreateProject, true)} />
      <Route path="/task-list" element={element(TaskList, true)} />
      <Route path="/add-task" element={element(AddTask, true)} />
      <Route
        path="/add-user-to-project"
        element={element(AddUserToProject, true)}
      />
      <Route path="/users-in-project" element={element(UsersInProject, true)} />
      <Route path="/make-user-admin" element={element(MakeUserAdmin, true)} />
      <Route path="/task-detail" element={element(TaskDetail, true)} />
      <Route
        path="/user-in-project"
        element={element(UserSelectedInProject, true)}
      />
      <Route
        path="/search-task"
        element={element(SearchTask, true)}
      />

      <Route path="*" element={<Navigate to="/dashboard" replace />} />
    </Switch>
  );
}
