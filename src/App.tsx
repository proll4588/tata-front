import { Layout } from './shared/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PhotoProccesPage } from './pages/PhotoProccesPage';
import { LoveStoryPage } from './pages/LoveStoryPage';
import { PortretPage } from './pages/PortretPage';
import { ReportagPage } from './pages/ReportagPage';
import { MainPage } from './pages/MainPage';
import { useAuth } from './shared/context/AuthContext/AuthContext';
import { UserRequestsPage } from './pages/UserRequestsPage/UserRequestsPage';
import { AdminPage } from './pages/AdminPage/AdminPage';

export const App = () => {
  const { isLogin } = useAuth();

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={<MainPage />}
          />
          <Route
            path='/photo-process'
            element={<PhotoProccesPage />}
          />
          <Route
            path='/love-story'
            element={<LoveStoryPage />}
          />
          <Route
            path='/portret'
            element={<PortretPage />}
          />
          <Route
            path='/reportage'
            element={<ReportagPage />}
          />
          <Route
            path='/admin'
            element={<AdminPage />}
          />

          {isLogin && (
            <>
              <Route
                path='/user-requests'
                element={<UserRequestsPage />}
              />
            </>
          )}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
