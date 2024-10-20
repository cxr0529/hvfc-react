import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const handleClick = () => setClick(!click);

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    }
    
    return (
        <header>
            <nav classNameName="navbar fixed-top navbar-expand-lg bg-body-tertiary">
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="#"><img src="images/logo.jpg" alt="Logo">&nbsp;Harrisville VFC</a>
                    <button classNameName="navbar-toggler" id="navbarToggle" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                        <ul classNameName="navbar-nav">
                            <li classNameName="nav-item">
                                <a className="nav-link active" aria-current="page" href="index.html">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">About Us</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadContact()">Contact Us</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadHistory()">History</a></li>
                                    <li><a className="dropdown-item" target="_blank" href="docs/HVFC-BY-LAWS-2023.pdf" target>By-Laws</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Call History</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadApparatus()">Apparatus</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Member Info</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadMembers()">Current Members</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadLifetime()">Lifetime Members</a></li>
                                    <li><a className="dropdown-item" target="_blank" href="docs/HVFCMembershipApplication.pdf">Membership Application</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Hall Rental</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadCalender()">Availability Calendar</a></li>
                                    <li><a className="dropdown-item" target="_blank" href="docs/HallRentalFAQ.pdf">FAQ</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadRental()">Photo Gallery</a></li>
                                    <li><a className="dropdown-item" target="_blank" href="docs/HVFC-RentalAgreement.pdf">Hall Rental Application</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Useful Links</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadLinks()">Fire Departments</a></li>
                                    <li><a className="dropdown-item" target="_blank" href="docs/AddressSignsOrderforms.pdf">Address Sign Order Form</a></li>
                                </ul>
                            </li>
                            <!-- <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Photo Gallery</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Trucks</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Personnel</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Training</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Fires</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Accidents</a></li>
                                    <li><a className="dropdown-item" href="#" onclick="$hvfc.loadConstruction()">Misc.</a></li>
                                </ul>
                            </li></ul> -->
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://www.ready.gov/kids/games">Kid's Corner</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://www.facebook.com/hvfc1938"><img src="images/Facebook.png" alt="Facebook"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" target="_blank" href="https://www.instagram.com/hvfc1938"><img src="images/Instagram.png" alt="Instagram"></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="tel: 7247354646">Give us a call</a>
                            </li>
                        </ul>
                    </div><!--"end of collapse"-->
                </div><!--"end of container"-->
            </nav><!--"end of nav"-->
        </header>
    );
};

export default Navbar;