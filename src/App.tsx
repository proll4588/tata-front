import { Layout } from './shared/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PhotoProccesPage } from './pages/PhotoProccesPage';
import { LoveStoryPage } from './pages/LoveStoryPage';
import { PortretPage } from './pages/PortretPage';
import { ReportagPage } from './pages/ReportagPage';
import { MainPage } from './pages/MainPage';

export const App = () => {
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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
