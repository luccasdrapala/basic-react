import { useState } from "react";

const ConditionalRender = () => {
    
    const [x] = useState(true);

    const [name] = useState("Joaozin");

    return (
        <div>
            <h1>Isso sera exibido ?</h1>
            {x && <p>Se x for true, sim</p>}

            {name === "Joaozin" ? (
                <div>
                    <p>O nome eh Joao</p>
                </div>
            ) : (
                <div>
                    <p>Nao eh eh Joao</p>
                </div>
            )}

        </div>
    );
}

export default ConditionalRender;