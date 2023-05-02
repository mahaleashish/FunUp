import React, { useState } from 'react';
import './App.css';

function App() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users/');
        const data = await response.json();
        setUsers(data.data);
    };

    return (
        <div className="App">
            <button onClick={getUsers}>Get Users</button>
            <div className="user-cards">
                {users.map((user) => (
                    <div className="user-card" key={user.id}>
                        <img src={user.avatar} alt="user-avatar" />
                        <h2>{`${user.first_name} ${user.last_name}`}</h2>
                        <p>{user.email}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
