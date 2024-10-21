import React,{useState} from "react";
import Navbar from "./components/Navbar/Navbar";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter as Router

import List from "./pages/List/List";
import AddProduct from "./pages/AddProduct/AddProduct";
import Orders from "./pages/Remove/Orders";
import Logins from "./pages/Login/Login";

const App = () => {
  const [Login , setLogin ] = useState(false)

  return (
    <>
      {
        Login === true ?  (
          <Router> 
          <div>
            <Navbar />
            <hr />
            <div className="app-content">
              <SideBar />
              <Routes>
                <Route path="/Add" element={<AddProduct />} />
                <Route path="/list" element={<List />} />
                <Route path="/orders" element={<Orders />} />
              </Routes>
            </div>
          </div>
        </Router>
        ):(
          <Logins setLogin={setLogin} />
        )
      }
    </>
  );
};

export default App;
