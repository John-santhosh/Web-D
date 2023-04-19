// const url = "https://api.github.com/users";
// import "./test.css";

import { useState, useEffect } from "react";
const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // fetch("https://api.github.com/users")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setUsers(data);
    //     console.log(users);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    const fetchData = async () => {
      try {
        const res = await fetch("https://api.github.com/users");
        const user = await res.json();
        console.log(user);
        setUsers(user);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <h3>Github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          console.log(html_url);
          return (
            <>
              <li key={id}>
                <img src={avatar_url} alt="new" />
                <div>
                  <h4>{login}</h4>
                  <a href={html_url}>profile</a>
                </div>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};
export default FetchData;
