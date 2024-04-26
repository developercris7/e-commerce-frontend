import "./App.css";
import { DataProvider } from "./Context/ContextAPI";
import Hero from "./Pages/Hero";
import { Route, Routes } from "react-router-dom";
import Category from "./Pages/Category";
import Wishlist from "./Pages/Wishlist";
import Bag from "./Pages/Bag";
import Admin from "./Pages/Admin";
import FullViewProduct from "./Pages/FullViewProduct";
import Signup from "./Pages/Signup";
import Signin from "./Pages/Signin";
import Verification from "./Components/forms/Verification";
import NewPassword from "./Components/forms/NewPassword";
import Email from "./Components/forms/Email";


function App() {
 

  return (
    <DataProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/bag" element={<Bag />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/product/:id" element={<FullViewProduct />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signin/forgotpassword" element={<Email />} />
          <Route path="/signin/forgotpassword/verify" element={<Verification />} />
          <Route path="/signin/newpassword" element={<NewPassword />} />
        </Routes>
      </div>
    </DataProvider>
  );
}

export default App;
