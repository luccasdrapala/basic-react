import React from 'react'
import { useState } from "react";

const ListRender = () => {

    const [users, setUsers] = useState([
        {id: 0, name: "Luccas"},
        {id: 1, name: "Joao"},
        {id: 2, name: "Kaue"},
        {id:3, name: "Igor"}
    ]);

    const deleteRandom = () => {
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    };

    return (
        <div>
            <ul>
                {users.map((users,i) => (
                    <li key={users.id}>ID: {users.id} - {users.name}</li>
                ))}
            </ul>

            <button onClick={deleteRandom}>Delete random</button>

        </div>
    )
}

export default ListRender;