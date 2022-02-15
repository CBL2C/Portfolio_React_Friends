import React from "react";
import "./Nav.css";
import {
  Link,
  useNavigate
} from "react-router-dom";



function Nav(props) {
  let fName = props.user.firstName;
  let lName = props.user.lastName;

  const goNav = useNavigate()
  const goToPage = (e) => {
    console.log()
    goNav(e.currentTarget.dataset.page);
  }



  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand"
        aria-label="Fourth navbar example"
      >
        <div id="nav" className="nav">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-0">
              <li className="nav-item">
                <Link
                  to="/Portfolio_React_Friends"
                  className="nav-link px-2 link-button"
                  data-page="/Portfolio_React_Friends"
                  onClick={goToPage}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/Portfolio_React_Friends/Friends"
                  className="nav-link px-2 link-button"
                  data-page="/Portfolio_React_Friends/Friends"
                  onClick={goToPage}
                >
                  Friends
                </Link>
              </li>

            </ul>
            <ul className="navbar-nav nav-rt">
              <li id="uName" className="text-end">
                <a
                  href="/Portfolio_React_Friends"
                  className="align-items-center mb-2 me-2 mb-lg-0 text-decoration-none"
                >
                  {fName} {lName}
                </a>
              </li>
              <div className="text-end">
                <Link
                  to="/Portfolio_React_Friends/Login"
                  data-page="/Portfolio_React_Friends/Login"
                  onClick={goToPage}
                >
                  <button type="button" className="btn btn-cus btn-outline me-2">
                    Login
                  </button>
                </Link>
                <Link to="/Portfolio_React_Friends/Register" onClick={goToPage}>
                  <button type="button" className="btn btn-cus">
                    Register
                  </button>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment >
  )
}

export default Nav;