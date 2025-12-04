import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">

                <div className="row footer-top">

                    {/* Logo + About */}
                    <div className="col-12 col-md-6 col-lg-3 mb-4">
                        <div className="footer-logo d-flex align-items-center mb-3">
                            <div className="footer-icon">
                                <img src={require('../Img/logo.jpg')} alt="" />
                            </div>
                            <h4 className="ms-2 fw-bold">Shri Sahajanand Classes</h4>
                        </div>
                        <p>
                            Committed to nurturing students for a bright
                            and successful future since 2005.
                        </p>
                        <ul className="d-flex p-0 m-0 social ">
                            <li className="me-2">
                                <a href="https://api.whatsapp.com/send?phone=918485959585" className="li">
                                    <FaWhatsapp size={20} />
                                </a>
                            </li>
                            <li className="mx-2">
                                <a className="li" href="https://www.instagram.com/shreesahjanandclasses?igsh=ZXVlZTA4bnR3N2Zr">
                                    <FaInstagram size={20} />
                                </a>
                            </li>
                            <li className="mx-2">
                                <a className="li" href="https://www.facebook.com/share/1C5aFSm7Ko/">
                                    <FaFacebookF size={20} />
                                </a>
                            </li>
                            <li className="ms-2">
                                <a className="li" href="">
                                    <FaTwitter size={20} />
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                        <h5 className="fw-bold mb-3">Quick Links</h5>
                        <ul className="footer-list">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/Courses">Courses</NavLink></li>
                            <li><NavLink to="/About">About Us</NavLink></li>
                            <li><NavLink to="/Contact">Contact</NavLink></li>
                        </ul>
                    </div>

                    {/* Subjects */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                        <h5 className="fw-bold mb-3">Subjects</h5>
                        <ul className="footer-list">
                            <li>Accountancy</li>
                            <li>Statistics</li>
                            <li>Economics</li>
                            <li>Business Studies</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4">
                        <h5 className="fw-bold mb-3">Contact Us</h5>
                        <p className="text-capitalize">3rd floor, raghuveer shopping, mota varachha, surat.</p>

                        <p className="mt-2 fw-bolder">
                            Phone: +91 84 85 95 95 85
                        </p>
                    </div>

                </div>

                <div className="footer-bottom text-center py-3">
                    © 2024 Shri Sahajanand Classes. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
