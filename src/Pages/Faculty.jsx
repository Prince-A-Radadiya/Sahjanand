import { FiMail, FiLink } from "react-icons/fi";

const facultyData = [
  {
    name: "Nidhi Mehta",
    role: "Head of Commerce",
    degrees: ["M.Com", "B.Ed", "15+ Years Exp."],
    quote:
      "Empowering students with financial literacy for a successful future.",
    img: require('../Img/fac1.png'),
  },
  {
    name: "Rajesh Sharma",
    role: "Mathematics Expert",
    degrees: ["M.Sc (Maths)", "12+ Years Exp."],
    quote:
      "Making numbers simple and problems solvable, one student at a time.",
    img: require('../Img/fac2.png'),
  },
  {
    name: "Anjali Desai",
    role: "Accountancy Specialist",
    degrees: ["CA", "M.Com", "10+ Years Exp."],
    quote:
      "Balancing the books of knowledge for aspiring accountants.",
    img: require('../Img/fac3.png'),
  },
  {
    name: "Vikram Singh",
    role: "Economics & Statistics",
    degrees: ["M.A (Eco)", "8+ Years Exp."],
    quote:
      "Decoding market trends and statistical data for young minds.",
    img: require('../Img/fac4.png'),
  },
  {
    name: "Priya Patel",
    role: "Business Studies",
    degrees: ["MBA", "B.Com", "7+ Years Exp."],
    quote:
      "Building the next generation of business leaders and entrepreneurs.",
    img: require('../Img/fac5.png'),
  },
  {
    name: "Rohan Joshi",
    role: "English Language",
    degrees: ["M.A (Eng)", "5+ Years Exp."],
    quote:
      "Crafting eloquent communicators through the power of language.",
    img: require('../Img/fac6.png'),
  },
];

const Faculty = () => {
    return (
        <div className="faculty">
             <div className="container py-5">

      {/* Section Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Meet Our Expert Faculty</h2>
        <p className="text-muted" style={{ maxWidth: "600px", margin: "0 auto" }}>
          Our dedicated team of experienced educators is here to guide you on your path to success with passion and expertise.
        </p>
      </div>

      {/* Faculty Grid */}
      <div className="row g-4">
        {facultyData.map((item, index) => (
          <div key={index} className="col-md-6 col-lg-4">
            <div className="card shadow-sm p-4 text-center border-0" style={{ borderRadius: "20px" }}>
              
              <img 
                src={item.img}
                alt={item.name}
                className="rounded-circle mb-3 mx-auto d-block"
                width="110"
                height="110"
              />

              <h5 className="fw-bold">{item.name}</h5>
              <p className="text-success fw-semibold">{item.role}</p>

              {/* Degrees */}
              <div className="d-flex flex-wrap justify-content-center gap-2 mb-3">
                {item.degrees.map((deg, i) => (
                  <span
                    key={i}
                    className="badge bg-success-subtle text-success border border-success"
                  >
                    {deg}
                  </span>
                ))}
              </div>

              <p className="fst-italic text-muted" style={{ fontSize: "14px" }}>
                "{item.quote}"
              </p>

              {/* Icons */}
              <div className="d-flex justify-content-center gap-3 mt-3">
                <FiMail size={18} className="text-secondary" />
                <FiLink size={18} className="text-secondary" />
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
        </div>
    )
}

export default Faculty
