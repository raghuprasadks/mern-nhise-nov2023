import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Layout from './components/Layout';
import { Home } from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Logout from './components/Logout';
import Member from './components/Member';

function App() {
  return (
    
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}></Route>
        <Route path="signup" element={<SignUp/>}></Route>
        <Route path="login" element={<Login/>}></Route>
        <Route path="member" element={<Member/>}></Route>
        <Route path="logout" element={<Logout/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
