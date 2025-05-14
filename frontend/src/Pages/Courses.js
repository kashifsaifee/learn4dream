// import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { Link } from "react-router-dom";
// import { IoIosSearch } from "react-icons/io";
// import { IoBagOutline } from "react-icons/io5";
// import { TypeAnimation } from "react-type-animation";

// import "../Styles/Courses.css";



// const courses = [
//   {
//     id: "fullstack",
//     title: "Full Stack Development",
//     description:
//       "Master both frontend and backend development with modern technologies including React, Node.js, and MongoDB.",
//     price: "$999",
//     image: "https://dummyimage.com/600x400/007bff/fff&text=Full+Stack",
//   },
//   {
//     id: "cs",
//     title: "Computer Science",
//     description:
//       "Build a strong foundation in computer science fundamentals, algorithms, and data structures.",
//     price: "$799",
//     image: "https://dummyimage.com/600x400/28a745/fff&text=Computer+Science",
//   },
//   {
//     id: "data",
//     title: "Data Science",
//     description:
//       "Learn data analysis, machine learning, and statistical modeling with Python and R.",
//     price: "$899",
//     image: "https://dummyimage.com/600x400/ffc107/000&text=Data+Science",
//   },
// ];

// export default function Courses() {
//   const [loading, setLoading] = useState(null);

//   const enrollCourse = async (courseId) => {
//     setLoading(courseId);
//     try {
//       await new Promise((resolve) => setTimeout(resolve, 1500));
//       alert("Successfully enrolled!");
//     } catch {
//       alert("Error enrolling in course");
//     } finally {
//       setLoading(null);
//     }
//   };

//   return (
//     <>
//       <motion.div
//         className="container py-5"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="text-center mb-5">
//           <h1 className="display-4 fw-bold text-primary">
//             Transform Your Career with Our Courses
//           </h1>
//           <p className="lead text-muted">
//             Discover industry‑leading courses designed to help you master today’s digital skills.
//           </p>
//         </div>

//         <div className="dropdown-center mb-4 text-center">
//           <button
//             className="btn btn-primary dropdown-toggle"
//             type="button"
//             data-bs-toggle="dropdown"
//           >
//             Browse Categories
//           </button>
//           <ul className="dropdown-menu">
//             <li><Link className="dropdown-item" to="/courses/data">Data Science</Link></li>
//             <li><Link className="dropdown-item" to="/courses/ml">Machine Learning</Link></li>
//             <li><Link className="dropdown-item" to="/courses/ai">Artificial Intelligence</Link></li>
//           </ul>
//         </div>

//         <div className="d-flex justify-content-between align-items-center mb-4 px-3 flex-wrap">
//           <div className="search d-flex align-items-center">
//             <IoIosSearch size={20} />
//             <TypeAnimation
//               sequence={["Search Courses", 1000, "Data Science", 1000, "Machine Learning", 1000, "AI", 1000]}
//               wrapper="span"
//               speed={50}
//               repeat={Infinity}
//               style={{ marginLeft: "10px", color: "#666" }}
//             />
//           </div>
//           <div className="cart">
//             <Link to="/mycourses" className="btn btn-outline-dark d-flex align-items-center">
//               <IoBagOutline size={22} className="me-2" />
//               Your Courses
//             </Link>
//           </div>
//         </div>

//         <div className="row">
//           {courses.map((course) => (
//             <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
//               <div className="card h-100 shadow-lg border-0">
//                 <img
//                   src={course.image}
//                   alt={course.title}
//                   className="card-img-top"
//                   style={{ height: 200, objectFit: "cover" }}
//                 />
//                 <div className="card-body d-flex flex-column">
//                   <h5 className="fw-bold">{course.title}</h5>
//                   <p className="text-muted flex-grow-1">{course.description}</p>
//                   <div className="d-flex justify-content-between align-items-center mt-3">
//                     <span className="h5 text-success mb-0">{course.price}</span>
//                     <button
//                       className="btn btn-outline-primary"
//                       onClick={() => enrollCourse(course.id)}
//                       disabled={loading === course.id}
//                     >
//                       {loading === course.id && (
//                         <span className="spinner-border spinner-border-sm me-2" role="status" />
//                       )}
//                       {loading === course.id ? "Enrolling..." : "Enroll Now"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </motion.div>

//     </>
//   );
// }



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import "../Styles/Courses.css";
import Footer from "../Components/Footer";

const courses = [
  {
    id: "fullstack",
    title: "Full Stack Development",
    description:
      "Master both frontend and backend development with modern technologies including React, Node.js, and MongoDB.",
    price: "$999",
    image: "https://dummyimage.com/600x400/007bff/fff&text=Full+Stack",
  },
  {
    id: "cs",
    title: "Computer Science",
    description:
      "Build a strong foundation in computer science fundamentals, algorithms, and data structures.",
    price: "$799",
    image: "https://dummyimage.com/600x400/28a745/fff&text=Computer+Science",
  },
  {
    id: "data",
    title: "Data Science",
    description:
      "Learn data analysis, machine learning, and statistical modeling with Python and R.",
    price: "$899",
    image: "https://dummyimage.com/600x400/ffc107/000&text=Data+Science",
  },
];

export default function Courses() {
  const [loading, setLoading] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(courses);

  useEffect(() => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCourses(filtered);
  }, [searchTerm]);

  const enrollCourse = async (courseId) => {
    setLoading(courseId);
    try {
      await new Promise((r) => setTimeout(r, 1500));
      alert("Successfully enrolled!");
    } catch {
      alert("Error enrolling in course");
    } finally {
      setLoading(null);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <>
      <motion.div
        className="container py-5"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">
            Transform Your Career with Our Courses
          </h1>
          <p className="lead text-muted">
            Discover industry‑leading courses designed to help you master today’s digital skills.
          </p>
        </div>

        <div className="dropdown-center mb-4 text-center">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Browse Categories
          </button>
          <ul className="dropdown-menu">
            <li>
              <Link className="dropdown-item" to="/courses/data">
                Data Science
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/courses/ml">
                Machine Learning
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="/courses/ai">
                Artificial Intelligence
              </Link>
            </li>
          </ul>
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4 px-3 flex-wrap">
          <div className="search d-flex align-items-center">
            <IoIosSearch size={20} />
            <input
              type="search"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search Courses"
              className="form-control"
            />
          </div>
          <div className="cart">
            <Link to="/mycourses" className="btn btn-outline-dark d-flex align-items-center">
              <IoBagOutline size={22} className="me-2" />
              Your Courses
            </Link>
          </div>
        </div>

        <div className="row">
          {filteredCourses.map((course) => (
            <div key={course.id} className="col-12 col-md-6 col-lg-4 mb-4">
              <div className="card h-100 shadow-lg border-0">
                <img
                  src={course.image}
                  className="card-img-top rounded-top"
                  alt={course.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-dark fw-bold">{course.title}</h5>
                  <p className="card-text text-muted flex-grow-1">{course.description}</p>
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <span className="h5 text-success mb-0">{course.price}</span>
                    <button
                      className="btn btn-outline-primary"
                      onClick={() => enrollCourse(course.id)}
                      disabled={loading === course.id}
                    >
                      {loading === course.id && (
                        <span className="spinner-border spinner-border-sm me-2" role="status" />
                      )}
                      {loading === course.id ? "Enrolling..." : "Enroll Now"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </>
  );
}