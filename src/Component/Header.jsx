import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Header = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <div className="header">
            <div className="container">
                <div className="row">

                    <div className="col-10 col-sm-6 ps-sm-0  d-flex justify-content-between align-items-center">

                        {/* LOGO */}
                        <div className="logo d-flex align-items-center">
                            {/* <img src={require("../Img/logo.jpg")} alt="logo" /> */}
                            <div className="c-name text-capitalize">shree sahjanand classes</div>
                        </div>

                    </div>
                    <div className="col-2 col-sm-6 pe-sm-0 d-flex align-items-center justify-content-end">

                        {/* MENU ICON FOR MOBILE */}
                        <div className="menu-icon d-lg-none" onClick={toggleMenu}>
                            {menuOpen ? <IoMdClose size={30} /> : <FaBars size={25} />}
                        </div>

                        {/* NAV LINKS */}
                        <ul className={`nav-links d-lg-flex m-0 ${menuOpen ? "open" : ""}`}>

                            <div className="close-btn d-lg-none" onClick={closeMenu}>
                                <IoMdClose size={35} />
                            </div>

                            <li><NavLink onClick={closeMenu} className="c-nav" to="/">Home</NavLink></li>
                            <li><NavLink onClick={closeMenu} className="c-nav" to="/Courses">Courses</NavLink></li>
                            <li><NavLink onClick={closeMenu} className="c-nav" to="/Admission">Admission</NavLink></li>
                            <li><NavLink onClick={closeMenu} className="c-nav" to="/Faculty">Faculty</NavLink></li>
                            <li><NavLink onClick={closeMenu} className="c-nav" to="/Contact">Contact</NavLink></li>
                            <li><NavLink onClick={closeMenu} className="c-nav" to="/About">About</NavLink></li>
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
