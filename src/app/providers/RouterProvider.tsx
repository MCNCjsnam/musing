import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../../app/';
import HomePage from '../../pages/Home/index';
import ProfilePage from '@pages/ProfilePage';
import NotFoundPage from '@pages/NotFoundPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.PROFILE.ROOT} element={<ProfilePage />} />
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  );
};