import React from 'react'
import { useState } from "react";

const ListRender = () => {

    const [list] = useState(["Luccas", "Joao", "Kaue", "Igor"]);

    return (
        <div>
            <ul>
                {list.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default ListRender;