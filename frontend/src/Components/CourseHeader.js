// src/Components/CourseHeader.js
import "../Styles/Courses.css";
import { IoIosSearch } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { IoBagOutline } from "react-icons/io5";

const CourseHeader = () => {
  return (
    <>
      <div className="courses">
        <div className="dropdown-center">
          <button
            className="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Courses
          </button>
          <ul className="dropdown-menu">
            <li>
              <a className="dropdown-item" href="#">Data Science</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Machine Learning</a>
            </li>
            <li>
              <a className="dropdown-item" href="#">Artificial Intelligence</a>
            </li>
          </ul>
        </div>

        <div className="search">
          <IoIosSearch size={20} />
          <TypeAnimation
            sequence={[
              "Search Courses",
              1000,
              "Data Science",
              1000,
              "Machine Learning",
              1000,
              "Artificial Intelligence",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>

        <div className="cart">
          <a href="#"><IoBagOutline size={25} /> Your Courses</a>
        </div>
      </div>
    </>
  );
};

export default CourseHeader;
