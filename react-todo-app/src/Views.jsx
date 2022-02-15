import { Routes, Route, Outlet } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';
import About from './pages/About';
import AboutApp from './pages/AboutApp';
import Author from './pages/Author';

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
      <Route path="/home" element={<TodoContainer />} />
      <Route path="/about" element={aboutView}>
        <Route path="app" element={<AboutApp />} />
        <Route path="author" element={<Author />} />
        <Route index element={<AboutApp />} />
      </Route>
    </Routes>
  );
};

export default Views;
