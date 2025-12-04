import { FiMapPin, FiPhone, FiMessageCircle } from "react-icons/fi";

const Contact = () => {
    return (
        <div className="contact-page">

            <div className="container py-5">

                {/* Title */}
                <div className="text-center mb-5">
                    <h1 className="fw-bold contact-title">Get in Touch</h1>
                    <p className="contact-subtext">
                        We're here to help you succeed. Reach out with any questions!
                    </p>
                </div>

                <div className="row g-4">

                    {/* LEFT SIDE */}
                    <div className="col-lg-5">

                        {/* Visit Us */}
                        <div className="contact-card p-4 mb-3">
                            <div className="d-flex align-items-start">
                                <FiMapPin size={28} className="contact-icon" />
                                <div>
                                    <h5 className="fw-bold contact-card-title">Visit Us</h5>
                                    <p className="contact-text">3rd floor, raghuveer shopping, mota varachha</p>
                                    <a href="#" className="contact-link">Get Directions</a>
                                </div>
                            </div>
                        </div>

                        {/* Call Us */}
                        <div className="contact-card p-4 mb-3">
                            <div className="d-flex align-items-start">
                                <FiPhone size={28} className="contact-icon" />
                                <div>
                                    <h5 className="fw-bold contact-card-title">Call Us</h5>
                                    <p className="contact-text">+91 84 85 95 95 85</p>
                                    <a href="#" className="contact-link">Call Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Message Us */}
                        <div className="contact-card p-4">
                            <div className="d-flex align-items-start">
                                <FiMessageCircle size={28} className="contact-icon" />
                                <div>
                                    <h5 className="fw-bold contact-card-title">Message Us</h5>
                                    <p className="contact-text">+91 84 85 95 95 85</p>
                                    <a href="#" className="contact-link">Chat on WhatsApp</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* RIGHT SIDE FORM */}
                    <div className="col-lg-7">
                        <div className="contact-card p-4">

                            <img
                                src={require('../Img/banner.png')}
                                className="contact-img"
                                alt="banner"
                            />

                            <h5 className="fw-bold contact-form-title">Send Us a Message</h5>

                            <form>

                                <div className="row mb-3">
                                    <div className="col-md-6">
                                        <input type="text" className="form-control contact-input" placeholder="Your Name" />
                                    </div>
                                    <div className="col-md-6 mt-3 mt-md-0">
                                        <input type="email" className="form-control contact-input" placeholder="you@example.com" />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control contact-input" placeholder="Your Phone Number" />
                                </div>

                                <div className="mb-3">
                                    <input type="text" className="form-control contact-input" placeholder="e.g., Inquiry about 12th Commerce" />
                                </div>

                                <div className="mb-3">
                                    <textarea className="form-control contact-input" rows="4" placeholder="Write your message here..."></textarea>
                                </div>

                                <button className="btn contact-btn w-100 py-3 fw-semibold">
                                    Send Message
                                </button>

                            </form>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Contact;
