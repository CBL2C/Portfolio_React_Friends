import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/ui/Nav";
import Friends from "./components/friends/Friends";
import "toastr/build/toastr.min.css";
import Footer from "./components/ui/Footer";
import Home from "./components/Home";
import Login from "./components/user/Login";
import Register from "./components/user/Register";


function App() {
  const [state] = useState({
    currentUser: {
      // hardcoding a fake user, instead of setting an empty object 
      firstName: "Verin",
      lastName: "Mathwin",
      isLoggedIn: false,
    },
  });

  let user = state.currentUser;

  return (
    <React.Fragment>
      <Nav user={user}></Nav>
      <main role="main">
        <div id="content">
          <div id="fContainer" className="mx-auto">
            <Routes>
              <Route path="/" element={<Home user={user}></Home>}></Route>
              <Route path="/Friends" element={<Friends user={user} />}></Route>
              <Route path="/Login" element={<Login />}></Route>
              <Route path="/Register" element={<Register />}></Route>
            </Routes>
          </div>
        </div>
      </main>

      <div>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
