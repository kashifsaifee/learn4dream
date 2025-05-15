// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { CgProfile } from "react-icons/cg";
// import { TextField, Button } from '@mui/material';
// import '../Styles/Profile.css';

// const Profile = () => {
//   const [user, setUser] = useState(null);
//   const [courses, setCourses] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("access_token");

//     if (!token) {
//       setError('You must be logged in to view your profile');
//       setLoading(false);
//       navigate("/");
//       return;
//     }

//     const fetchProfile = async () => {
//       try {
//         const response = await fetch('/profile', {
//           method: 'GET',
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });

//         const data = await response.json();

//         if (response.ok) {
//           setUser({ name: data.name, email: data.email });
//           // Optionally fetch courses or set dummy data
//           setCourses([
//             { id: 1, title: "React for Beginners" },
//             { id: 2, title: "Full Stack Web Dev" },
//             { id: 3, title: "Node.js & Express" },
//           ]);
//         } else {
//           setError(data.message || 'Failed to fetch profile data');
//         }
//       } catch (err) {
//         setError('An error occurred while fetching profile data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProfile();
//   }, [navigate]);

//   const handleSave = () => {
//     alert('Profile Saved!');
//     // Optionally call update API here
//   };

//   if (loading) return <div>Loading...</div>;

//   return (
//     <section style={styles.container}>
//       <div style={styles.card}>
//         <div style={styles.header}>
//           <CgProfile size={40} />
//           <h2>Profile</h2>
//         </div>

//         {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

//         {user && (
//           <>
//             <div style={styles.form}>
//               <TextField
//                 label="Name"
//                 variant="outlined"
//                 value={user.name}
//                 onChange={(e) => setUser({ ...user, name: e.target.value })}
//                 fullWidth
//                 margin="normal"
//                 size="small"
//               />
//               <TextField
//                 label="Email"
//                 variant="outlined"
//                 value={user.email}
//                 onChange={(e) => setUser({ ...user, email: e.target.value })}
//                 fullWidth
//                 margin="normal"
//                 size="small"
//               />
//               <Button variant="contained" color="primary" onClick={handleSave}>
//                 Save Profile
//               </Button>
//             </div>

//             <div style={styles.courseSection}>
//               <h3>Enrolled Courses</h3>
//               {courses.length > 0 ? (
//                 <ul style={styles.courseList}>
//                   {courses.map((course) => (
//                     <li key={course.id} style={styles.courseItem}>
//                       {course.title}
//                     </li>
//                   ))}
//                 </ul>
//               ) : (
//                 <p>No enrolled courses.</p>
//               )}
//             </div>
//           </>
//         )}
//       </div>
//     </section>
//   );
// };

// const styles = {
//   container: {
//     display: "flex",
//     justifyContent: "center",
//     padding: "2rem",
//     backgroundColor: "#f5f5f5",
//     minHeight: "100vh",
//   },
//   card: {
//     backgroundColor: "#fff",
//     padding: "2rem",
//     borderRadius: "10px",
//     maxWidth: "600px",
//     width: "100%",
//     boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//     marginBottom: "1rem",
//   },
//   form: {
//     marginBottom: "2rem",
//   },
//   courseSection: {
//     borderTop: "1px solid #ccc",
//     paddingTop: "1rem",
//   },
//   courseList: {
//     listStyleType: "none",
//     padding: 0,
//     marginTop: "0.5rem",
//   },
//   courseItem: {
//     padding: "0.5rem",
//     borderBottom: "1px solid #eee",
//   },
// };

// export default Profile;


import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";
import { TextField, Button } from '@mui/material';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    if (!token) {
      setError('You must be logged in to view your profile');
      setLoading(false);
      navigate("/");  // Redirect to login page if no token
      return;
    }

    const fetchProfile = async () => {
      try {
        const response = await fetch('/profile', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();

        if (response.ok) {
          setUser({ email: data.email , name : data.name});
          // Dummy enrolled courses for demo
          setCourses([
            { id: 1, title: "React for Beginners" },
            { id: 2, title: "Full Stack Web Dev" },
            { id: 3, title: "Node.js & Express" },
          ]);
        } else {
          setError(data.message || 'Failed to fetch profile data');
        }
      } catch (err) {
        setError('An error occurred while fetching profile data');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [navigate]);

  const handleSave = () => {
    alert('Profile Saved!');
    // Add profile update logic here if needed
  };

  if (loading) return <div>Loading...</div>;

  return (
    <section style={styles.container}>
      <div style={styles.card}>
        <div style={styles.header}>
          <CgProfile size={40} />
          <h2>Profile</h2>
        </div>

        {error && <div style={{ color: 'red', marginBottom: '1rem' }}>{error}</div>}

        {user && (
          <>
            <div style={styles.form}>
              <TextField
                label="Name"
                variant="outlined"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                fullWidth
                margin="normal"
                size="small"
              />
              <TextField
                label="Email"
                variant="outlined"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                fullWidth
                margin="normal"
                size="small"
              />
              <Button variant="contained" color="primary" onClick={handleSave}>
                Save Profile
              </Button>
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
  form: {
    marginBottom: "2rem",
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
