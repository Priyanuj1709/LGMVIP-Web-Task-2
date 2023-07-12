import "./App.css";
import React, {useState} from "react";
import ApiDisplay from "./Components/ApiDisplay";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";


function App() {
  const [users, setUsers] = useState([]);
  const [load, setLoad] = useState(false);

  const GetUsers = async () => {
    await axios.get("https://reqres.in/api/users?page=1").then((res) => {
      setLoad(true);
      setTimeout(() => {
        setLoad(false);
      }, 1200);
      setUsers(res.data.data);
    });
  };

  const card = users.map((user) => {
    return (
      <ApiDisplay
        key={user.id}
        user={user}
        firstName={user.first_name}
        lastName={user.last_name}
        email={user.email}
        avatar={user.avatar}
      />
    );
  });

  return (
    <div className="App">
      <nav className="navbar">
        <img
          src="https://cdn.hashnode.com/res/hashnode/image/upload/v1632239147065/csLvLZ4DAU.png?auto=compress,format&format=webp"
          alt="logo"
        />
        <button className="btn" onClick={GetUsers}>
          GET USERS
        </button>
      </nav>
      <div className="cards-container">
        {load ? (
          <ClipLoader
          color="black"
          size={189}
          speedMultiplier={1}
        />
        ) : (
          card
        )}
      </div>
    </div>
  );
}

export default App;
