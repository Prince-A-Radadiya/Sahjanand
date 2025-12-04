import { FaWhatsapp, FaPhone } from "react-icons/fa";

const Admission = () => {
  return (
    <div className="admission-page">

      {/* Heading Section */}
      <section className="heading-section text-center py-5">
        <h1 className="main-title">Admissions Open 2025–26</h1>
        <p className="subtitle">
          Your Journey to Success Starts Here. Join us for unparalleled coaching
          from Standard 4th to 12th Commerce.
        </p>
      </section>

      <div className="container pb-5">
        <div className="row g-4 justify-content-center">

          {/* LEFT FORM BOX */}
          <div className="col-lg-8">
            <div className="form-box shadow-sm p-4 rounded-4">
              <h4 className="form-title">Get a Head Start</h4>
              <p className="form-desc">
                Fill out the form below and our team will get in touch with you shortly to discuss the next steps.
              </p>

              <form>

                {/* Full Name */}
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control custom-input" placeholder="Enter your full name" />
                </div>

                <div className="row">
                  {/* Standard */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Standard</label>
                    <select className="form-select custom-input">
                      <option>Select Standard</option>
                      <option>4th</option>
                      <option>5th</option>
                      <option>6th</option>
                      <option>7th</option>
                      <option>8th</option>
                      <option>9th</option>
                      <option>10th</option>
                      <option>11th Commerce</option>
                      <option>12th Commerce</option>
                    </select>
                  </div>

                  {/* Mobile Number */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mobile Number</label>
                    <input type="text" className="form-control custom-input" placeholder="Enter your 10-digit mobile number" />
                  </div>
                </div>

                <div className="row">
                  {/* School Name */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">School Name</label>
                    <input type="text" className="form-control custom-input" placeholder="Enter your school name" />
                  </div>

                  {/* Stream */}
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Stream</label>
                    <input type="text" className="form-control custom-input" value="Commerce" readOnly />
                  </div>
                </div>

                {/* Submit */}
                <button type="submit" className="btn submit-btn w-100">
                  Request a Callback
                </button>

              </form>
            </div>
          </div>

          {/* RIGHT SIDE CONTACT + MAP */}
          <div className="col-lg-4">

            {/* Contact Box */}
            <div className="info-box shadow-sm p-4 rounded-4 mb-4">
              <h5 className="info-title">Connect With Us Directly</h5>

              <p className="info-item">
                <FaWhatsapp className="info-icon text-success" /> +91 84 85 95 95 85 (WhatsApp)
              </p>
              <p className="info-item">
                <FaPhone className="info-icon text-dark" /> +91 84 85 95 95 85 (Phone)
              </p>
            </div>

            {/* Map Box */}
            <div className="info-box shadow-sm p-4 rounded-4">
              <h5 className="info-title">Find Us Here</h5>

              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.7442136100085!2d72.88705479999999!3d21.241989299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f5aec3108d1%3A0x9d3df553174f087c!2sSahjanand%20Classes!5e0!3m2!1sen!2sin!4v1764821798425!5m2!1sen!2sin"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

export default Admission;
