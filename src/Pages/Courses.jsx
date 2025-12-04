import { FaCheckCircle } from "react-icons/fa";

const HomePage = () => {
    return (
        <div className="course">

            {/* HERO SECTION */}
            <section className="hero">
                <div className="hero-left ">
                    <h1>Unlock Your Academic Potential</h1>
                    <p className="text-capitalize">
                        Expert coaching for students from Standard 4 to 12 (Commerce) and spoken english class to build
                        a strong foundation for a bright future.
                    </p>
                </div>

                <div className="hero-right">
                    <img
                        src={require('../Img/img3.jpg')}
                        alt="students"
                    />
                </div>
            </section>


            <div className="title text-center mb-5">
                <h2 className="h2 text-secondary fw-bold">Our Courses</h2>
                <p className="text-muted">Find the perfect program to excel in your studies.</p>
            </div>

            {/* COURSE FILTER */}
            <section className="course-filter">
                <button className="active">All</button>
                <button>Primary (4–7)</button>
                <button>Secondary (8–10)</button>
                <button>Higher Secondary (11–12 Commerce)</button>
            </section>

            {/* COURSES */}
            <section className="courses">

                {/* Card 1 */}
                <div className="course-card">
                    <h2>Primary Section (4–7)</h2>
                    <ul>
                        <li><FaCheckCircle /> Expert Faculty</li>
                        <li><FaCheckCircle /> Regular Tests</li>
                        <li><FaCheckCircle /> Doubt Solving Sessions</li>
                    </ul>

                    <div className="card-footer">
                        <a href="/">Syllabus Overview</a>
                        <button>Enroll Now</button>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="course-card">
                    <h2>Secondary Section (8–10)</h2>
                    <ul>
                        <li><FaCheckCircle /> In-depth Subject Matter</li>
                        <li><FaCheckCircle /> Mock Exam Series</li>
                        <li><FaCheckCircle /> Personalized Attention</li>
                    </ul>

                    <div className="card-footer">
                        <a href="/">View Schedule</a>
                        <button>Enroll Now</button>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="course-card">
                    <h2>Higher Secondary (11–12 Commerce)</h2>
                    <ul>
                        <li><FaCheckCircle /> Career Guidance</li>
                        <li><FaCheckCircle /> Practical Case Studies</li>
                        <li><FaCheckCircle /> Advanced Study Material</li>
                    </ul>

                    <div className="card-footer">
                        <a href="/">Course Details</a>
                        <button>Enroll Now</button>
                    </div>
                </div>

            </section>

        </div>
    );
};

export default HomePage;
