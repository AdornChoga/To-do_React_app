import { Routes, Route, Outlet } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import Author from './pages/Author';
import NotMatch from './pages/NotMatch';

const Views = () => {
  const aboutView = (
    <div className="about-container">
      <About />
      <Outlet />
    </div>
  );
  return (
    <Routes>
      <Route index element={<TodoContainer />} />
      <Route path="/">
        <Route path="about" element={aboutView}>
          <Route index element={<AboutApp />} />
          <Route path="app" element={<AboutApp />} />
          <Route path="author" element={<Author />} />
        </Route>
      </Route>
      <Route path="*" element={<NotMatch />} />
    </Routes>
  );
};

export default Views;
