import "./App.scss";
import Homepage from "./pages/homepage/Homepage";
import { Routes, Route } from "react-router-dom";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import TrackingPage from "./pages/trackingPage/TrackingPage.jsx";
import ProductList from "./components/productsList/ProductsList";
import Monster from "./MonsterRolodex/components/classComponent/Monster";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/tracking-page" element={<TrackingPage />} />
        <Route path="/orders" element={<ProductList />} />
        <Route path='/monster-rolodex' element = {<Monster />} />
      </Routes>
    </>
  );
}

export default App;
