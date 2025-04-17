import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Styles/Home.css';


const Home = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/") // calling the Flask backend
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="home">
      <h1>Home Page</h1>
      <p>{message}</p> {/* This should show the Flask message */}
    </div>
  );
};

export default Home;
