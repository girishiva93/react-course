import React, { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const UseEffectSecondAgrument = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // console.log(users);
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h2>Github Users</h2>;
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, html_url, login } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>Profile Link</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectSecondAgrument;
