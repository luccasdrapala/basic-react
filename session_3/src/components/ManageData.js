import { useState } from "react";

const ManageData = () => {

    let someData = 666;

    const [number, setNumber] = useState(10);

  return (
    <div>
        <div>
            <p>SomeData: {someData}</p>
            <button onClick={() => (someData = 15)}>Change</button>
        </div>
        <div>
            <p>useState: {number}</p>
            <button onClick={() => setNumber(25)}>use State change</button>
        </div>

    </div>
  )
}

export default ManageData;