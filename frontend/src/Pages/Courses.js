import "../Styles/Courses.css";
import { IoIosSearch } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { IoBagOutline } from "react-icons/io5";
// import course from './public/course.png'
const Courses = () => {
  return (
    <>
      <div className="courses">
        <div class="dropdown-center">
          <button
            class="dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
          >
            Courses
          </button>
          <ul class="dropdown-menu">
            <li>
              <a>
                Data Science
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                Machine Learning
              </a>
            </li>
            <li>
              <a class="dropdown-item" href=" ">
                Artificial Intelligence
              </a>
            </li>
          </ul>
        </div>
        <div className="search">
          <IoIosSearch size={20} /><a class="dropdown-item" href="#"> </a>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Search Courses",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
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
         <div className="cart" >
         <a href="#" ><IoBagOutline size={25}/> Your Courses</a> 
         </div>
      </div>
      <div>
            {/* <img src={course}  alt="" /> */}
      </div>
    </>
  );
};

export default Courses;
