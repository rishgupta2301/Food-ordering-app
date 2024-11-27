import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("heyy functional");
    },1000);
    console.log("useEffect")

    return () => { /** this return method used here is the cleanup method for unmounting */
      clearInterval(timer);
      console.log("useEffect return just like the unmounting phase")
    }

  },[])

  return (
    <>
      <h2>Profile Component</h2>
      <h3>Name: {props.name}</h3>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(1)} >Set count via function</button>
    </>
  );
};

export default Profile;
