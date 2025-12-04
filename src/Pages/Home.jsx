import { NavLink } from "react-router-dom";
import { FaUserGraduate, FaUsers, FaTrophy, FaLightbulb } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Home = () => {
    return (
        <div className="home">
            <div className="home-l1">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-lg d-flex flex-column justify-content-center align-items-center align-items-lg-start">
                            <h1 className="text-center text-lg-start">The Real Path of Success for <span>STD 4th to 12th</span></h1>
                            <p className="text-center text-lg-start">Embark on a journey of academic excellence with our expert guidance and proven teaching methodologies that shape future leaders.</p>
                            <div className="home-btns">
                                <button className="btn-1">join now</button>
                                <button className="btn-2 ms-2"><NavLink to="/Courses" className='text-decoration-none clr'>view Course</NavLink></button>
                            </div>
                        </div>
                        <div className="col-12 col-lg c-height mt-4 mt-lg-0 d-flex justify-content-center align-items-center">
                            <img src={require('../Img/logo.jpg')} alt="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-l2">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h1>our classes & Specializations</h1>
                            <p>Tailored programs designed for every stage of your academic journey in commerce.</p>
                        </div>
                    </div>
                    <div className="row gy-4">
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <img src={require('../Img/h1.png')} alt="" />
                                <h4 className="title text-capitalize text-center mt-3">primary (4th-8th)</h4>
                                <p className="text-capitalize text-center mb-0">Building a strong and clear conceptual foundation for future academic success.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <img src={require('../Img/h2.png')} alt="" />
                                <h4 className="title text-capitalize text-center mt-3">primary (4th-8th)</h4>
                                <p className="text-capitalize text-center mb-0">A focused and rigorous curriculum designed to help students excel in board examinations.</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <img src={require('../Img/h3.png')} alt="" />
                                <h4 className="title text-capitalize text-center mt-3">primary (4th-8th)</h4>
                                <p className="text-capitalize text-center mb-0">Comprehensive commerce education to prepare students for professional courses and higher studies.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="home-l3 why-section ">
                <div className="container text-center">

                    <h2 className="fw-bold mb-3">Why Choose Us?</h2>
                    <p className="text-muted mb-5">
                        We are committed to providing a learning environment that fosters growth,
                        critical thinking, and academic achievement.
                    </p>

                    <div className="row g-4">

                        {/* Card 1 */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="why-card p-4 rounded-4 text-center">
                                <div className="icon-box mb-3">
                                    <FaUserGraduate size={40} />
                                </div>
                                <h5 className="fw-bold">Experienced Teachers</h5>
                                <p className="text-muted">
                                    Our faculty consists of highly qualified and dedicated professionals.
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="why-card p-4 rounded-4 text-center">
                                <div className="icon-box mb-3">
                                    <FaUsers size={40} />
                                </div>
                                <h5 className="fw-bold">Personalized Attention</h5>
                                <p className="text-muted">
                                    We ensure every student gets the individual support they need to thrive.
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="why-card p-4 rounded-4 text-center">
                                <div className="icon-box mb-3">
                                    <FaTrophy size={40} />
                                </div>
                                <h5 className="fw-bold">Proven Results</h5>
                                <p className="text-muted">
                                    Our long history of academic excellence speaks for itself.
                                </p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="col-12 col-md-6 col-lg-3">
                            <div className="why-card p-4 rounded-4 text-center">
                                <div className="icon-box mb-3">
                                    <FaLightbulb size={40} />
                                </div>
                                <h5 className="fw-bold">Modern Teaching Methods</h5>
                                <p className="text-muted">
                                    We use innovative techniques to make learning engaging and effective.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="cta-section home-l4">
                <div className="container">

                    <div className="cta-box p-4 p-md-5 d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center">

                        {/* LEFT SIDE TEXT */}
                        <div className="cta-text mb-4 mb-md-0">
                            <h2 className="fw-bold">Ready to Start Your Success Story?</h2>
                            <p className="mt-2">
                                Our admissions are now open. Get in touch with us today to secure your
                                place and begin your journey towards academic excellence.
                            </p>
                        </div>

                        {/* RIGHT SIDE CONTACT + BUTTON */}
                        <div className="cta-right text-md-end w-100 w-md-auto">

                            <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-2">
                                <IoIosCall  className="cta-icon me-2" size={22} />
                                <span className="fw-semibold text-white">+91 84 85 95 95 85</span>
                            </div>

                            <div className="d-flex justify-content-md-end justify-content-center align-items-center mb-3">
                                <FaEnvelope className="cta-icon me-2" size={20} />
                                <span className="fw-semibold text-white">admissions@ssc.com</span>
                            </div>

                            <button className="cta-btn">Get in Touch</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
