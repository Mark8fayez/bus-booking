import React from "react";
import '../../assets/images/bus_logo.jpg'
export class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img className="navbar-brand" src="../../assets/images/bus_logo.jpg"/>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign In</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sign Out</a>
                            </li>
                            
                            
                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}