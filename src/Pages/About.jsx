import { FaLightbulb, FaFlask, FaBookOpen, FaChartLine } from "react-icons/fa";

const About = () => {
    return (
        <div className="about-page">

            {/* HERO SECTION */}
            <section className="about-hero-section container py-5">
                <div className="row align-items-center">
                    
                    {/* Left Text */}
                    <div className="col-md-6 mb-4">
                        <h1 className="fw-bold about-title">About Shree Sahajanand Classes</h1>
                        <p className="mt-3 about-subtext">
                            Committed to Excellence in Education. We are dedicated to nurturing young minds and 
                            fostering a passion for learning from Standard 4th to 12th Commerce.
                        </p>
                        <button className="btn explore-btn mt-3 px-4 py-2">Explore Courses</button>
                    </div>

                    {/* Right Image */}
                    <div className="col-md-6 text-center">
                        <img 
                            src={require("../Img/img2.jpg")}
                            alt=" Classroom "
                            className="img-fluid rounded shadow"
                        />
                    </div>

                </div>
            </section>

            {/* CORE VALUES */}
            <section className="core-values py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-2">Our Core Values</h2>
                    <p className="text-muted mb-5">
                        Our values are the foundation of our teaching philosophy and the pillars that support 
                        every student's academic journey.
                    </p>

                    <div className="row justify-content-center">

                        {/* Success */}
                        <div className="col-md-3 col-6 mb-4">
                            <div className="value-card shadow-sm p-4 rounded">
                                <FaChartLine size={35} className="value-icon" />
                                <h6 className="fw-bold mt-3">Success</h6>
                                <p className="small text-muted">
                                    We empower students to achieve their academic and personal goals.
                                </p>
                            </div>
                        </div>

                        {/* Creativity */}
                        <div className="col-md-3 col-6 mb-4">
                            <div className="value-card shadow-sm p-4 rounded">
                                <FaLightbulb size={35} className="value-icon" />
                                <h6 className="fw-bold mt-3">Creativity</h6>
                                <p className="small text-muted">
                                    Fostering innovative thinking and problem-solving skills.
                                </p>
                            </div>
                        </div>

                        {/* Research */}
                        <div className="col-md-3 col-6 mb-4">
                            <div className="value-card shadow-sm p-4 rounded">
                                <FaFlask size={35} className="value-icon" />
                                <h6 className="fw-bold mt-3">Research</h6>
                                <p className="small text-muted">
                                    Encouraging inquiry-based approaches to understanding concepts.
                                </p>
                            </div>
                        </div>

                        {/* Learning */}
                        <div className="col-md-3 col-6 mb-4">
                            <div className="value-card shadow-sm p-4 rounded">
                                <FaBookOpen size={35} className="value-icon" />
                                <h6 className="fw-bold mt-3">Learning</h6>
                                <p className="small text-muted">
                                    Promoting lifelong passion for continuous learning.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* TIMELINE SECTION */}
            <section className="timeline-section py-5">
                <div className="container text-center">
                    <h2 className="fw-bold mb-2">Our Journey Since 2005</h2>
                    <p className="text-muted mb-5">
                        Tracing our steps from a humble beginning to becoming a beacon of academic excellence.
                    </p>

                    <div className="timeline">

                        {/* 2005 */}
                        <div className="timeline-row left">
                            <div className="timeline-content shadow p-3 rounded">
                                <h6 className="fw-bold">2005</h6>
                                <p>Founded with a vision to provide quality education for commerce students.</p>
                            </div>
                            <span className="timeline-dot green"></span>
                        </div>

                        {/* 2010 */}
                        <div className="timeline-row right">
                            <div className="timeline-content shadow p-3 rounded">
                                <h6 className="fw-bold">2010</h6>
                                <p>Expanded curriculum to include classes from Standard 4th.</p>
                            </div>
                            <span className="timeline-dot purple"></span>
                        </div>

                        {/* 2015 */}
                        <div className="timeline-row left">
                            <div className="timeline-content shadow p-3 rounded">
                                <h6 className="fw-bold">2015</h6>
                                <p>Our first batch topped the city charts with outstanding results.</p>
                            </div>
                            <span className="timeline-dot green"></span>
                        </div>

                        {/* 2020 */}
                        <div className="timeline-row right">
                            <div className="timeline-content shadow p-3 rounded">
                                <h6 className="fw-bold">2020</h6>
                                <p>Adopted digital learning tools to provide hybrid education.</p>
                            </div>
                            <span className="timeline-dot purple"></span>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
