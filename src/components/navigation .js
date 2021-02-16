import React from "react";
import { Link, withRouter } from "react-router-dom";
import Resume from "../Harrison_Glover SMU Updated Resume 2020.docx (2).pdf";




function Navigation(props) {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand mr-5" to="#">Harrison L. Glover</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">About</Link>
                            </li>
                            <li  className="nav-item">
                                <Link className="nav-link active" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link active" to="/portfolio" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Portfolio
                                </Link>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href= {Resume}download>Resume</a>
                            </li>
                        </ul>
                        
                </div>
                </div>
            </nav>
        </div >


    )
}

export default withRouter(Navigation);