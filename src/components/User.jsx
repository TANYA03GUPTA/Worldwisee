import { useNavigate, useState, useEffect } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import styles from "./User.module.css";

function User() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  function handleClick() {
    logout();
    navigate("/");
  }
  if (!isVisible) {
    return null;
  }
  return (
    <div className={styles.user}>
      <img src={user.avatar} alt={user.name} />
      <span>Welcome, {user.name}</span>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
}

export default User;

//all done can be pushed to github now
