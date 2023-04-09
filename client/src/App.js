import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout, userCurrent } from "./JS/userSlice/userSlice";
import Profil from "./components/Profil";
import PrivateRoute from "./routes/PrivateRoute";
import CardList from "./components/CardList"
import WishList from "./components/WishList"
import Nav from "./components/Nav"
import'./style/home.css'
import'./style/cards.css'
import { getproduct } from "./JS/productSlice/productSlice";
import Card from "./components/Card";

function App() {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
  
      dispatch(userCurrent());
      dispatch(getproduct())

  }, []);
  return (
    <div className="App">
      {/* <div className="header">
        <h1>Auth workshop</h1>
        {isAuth ? (
          <button
            onClick={() => {
              dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </button>
        ) : null}
      </div> */}
<Nav />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<CardList/>}></Route>
          <Route path='/wishlist' element={<WishList/>}></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profil" element={<Profil />} />
        </Route>{" "}
      </Routes>


    </div>
  );
}

export default App;
