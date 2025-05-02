// import React from "react";
// import { CgProfile } from "react-icons/cg";
// import "../Styles/Profile.css";
// const Profile = () => {
//   return (
//     <>
//       <section>
//         <div className=" text-bg-light p-3 my-4 mx-5 px-4 text-center rounded border border-5  ">
//           <CgProfile size={28} /> Profile
//           <hr />

//           <div className="p-2 rounded-circle  " >
//               <div className="u-p  bg-secondary-subtle" >
//                 image
//               </div>  
//               <label> upload image</label>
//           </div>

//           <div
//             style={{ "grid-template-columns": "1fr 1fr" }} class="d-grid gap-0 column-gap-3" >

            
//             <div class="p-2">
//               <label> Name : </label>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="First Name"
//                 className="form-control"
//               />
//             </div>
//             <div class="p-2">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Last Name"
//                 className="form-control mt-4"
//                 required
//               />
//             </div>
//             <div class="p-2">
//               <label>Email : </label>
//               <input
//                 type="text"
//                 name="email"
//                 placeholder="xyz@gmail.com"
//                 className="form-control  "
//               />
//             </div>
//             <div class="p-2">
//               Contact :
//               <input
//                 type="number"
//                 name="number"
//                 placeholder="XXXXX-XXXXX"
//                 className="form-control "
//               />
//             </div>
//             <div class="p-2">
//               <label>Address : </label>
//               <input
//                 type="text"
//                 name="address"
//                 placeholder="street name, landmark, locality"
//                 className="form-control "
//               />
//             </div>
//             <div class="p-2">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Last Name"
//                 className="form-control mt-4"
//               />
//             </div>
//             <button className="mt-5 mx-auto flex justify-center ">
//               Update Profile
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Profile;
//======================================================================================================
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
    } else {
      // Simulated fetch for user and courses
      setUser({ name: "John Doe", email: "john@example.com" });
      setCourses([
        { id: 1, title: "React for Beginners" },
        { id: 2, title: "Full Stack Web Dev" },
        { id: 3, title: "Node.js & Express" },
      ]);
    }
  }, [navigate]);

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <CgProfile size={40} />
          <h2>Profile</h2>
        </div>
        {user && (
          <>
            <div style={styles.userInfo}>
              <p><strong>Name:</strong> {user.name}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>

            <div style={styles.courseSection}>
              <h3>Enrolled Courses</h3>
              {courses.length > 0 ? (
                <ul style={styles.courseList}>
                  {courses.map((course) => (
                    <li key={course.id} style={styles.courseItem}>
                      {course.title}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No enrolled courses.</p>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    maxWidth: "600px",
    width: "100%",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1rem",
  },
  userInfo: {
    marginBottom: "1.5rem",
  },
  courseSection: {
    borderTop: "1px solid #ccc",
    paddingTop: "1rem",
  },
  courseList: {
    listStyleType: "none",
    padding: 0,
    marginTop: "0.5rem",
  },
  courseItem: {
    padding: "0.5rem",
    borderBottom: "1px solid #eee",
  },
};

export default Profile;
