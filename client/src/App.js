import { Route, Routes } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/AuthPage/AuthPage';
import HomePage from './pages/HomePage/HomePage';
import RegPage from './pages/RegPage/RegPage';
import StudentPage from './pages/StudentPage/StudentPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />}></Route>
      <Route path='/auth' element={<AuthPage />}></Route>
      <Route path='/reg' element={<RegPage />}></Route>
      <Route path='/student' element={<StudentPage/>}></Route>
    </Routes>
  );
}

export default App;
