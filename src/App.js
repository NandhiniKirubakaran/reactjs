import './App.css';
import { Routes, Route, } from "react-router-dom";
import { Login } from './LoginPage';
import { HomePage } from './HomePage';
import { ForgetPassword } from './ForgetPassword';
import { SignupPage } from './SignupPage';
import { AddtoCart } from './AddtoCart';



function App() {
  return (
    <div className="App">

       <Routes>
        <Route path="/" element={<Login />} />
        <Route path="home-page" element={<HomePage />} />
        <Route path="forget-password" element={<ForgetPassword />} />
        <Route path="signup-page" element={<SignupPage />} />
        <Route path="add-to-cart" element={<AddtoCart />} />
      </Routes>

    </div>
  );
}

export default App;
