import styles from "../styles/Home.module.css";
import { useState } from "react";
import { app } from "../firebaseConfig";

const Home = () => {
  const [data, setData] = useState({});
  const handleInput = (e) => {
    let newInput = { [e.target.name]: e.target.value };

    setData({ ...data, ...newInput });
  };

  const handleSubmit = () => {};

  return (
    <div className="App">
      <input
        name="email"
        placeholder="email"
        onChange={(e) => handleInput(e)}
      ></input>
      <input
        name="password"
        placeholder="password"
        onChange={(e) => handleInput(e)}
      ></input>
      <button className={styles.button}>Sign In</button>
    </div>
  );
};

export default Home;
