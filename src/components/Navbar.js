import React from "react";
import logo from "./DC Logo Trans.png";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary-subtle">
        <div className="container-fluid">
          <center>
            <a
              className="navbar-brand"
              style={{
                fontSize: "25px",
                color: "forestgreen",
                marginLeft: "680px",
              }}
              href="/"
            >
              {/* The Daily Checklist  */}
              {/* <img src="./DC Logo Trans.png" alt="Logo" /> */}
              <img src={logo} alt="Logo" height={"130px"} />
            </a>
          </center>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon    "></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-5 ">
                            <li className="nav-item">
                                <a className="nav-link active text-danger fw-bolder" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-danger fw-bolder" href="/">About</a>
                            </li>
                        </ul>
                    </div> */}
        </div>
      </nav>
    </div>
  );
}
