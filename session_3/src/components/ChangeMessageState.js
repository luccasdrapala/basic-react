const ChangeMessageState = ({handleMessage}) => {

    const messageArray = [
        "Oi", "Ola", "Salve"
    ];

  return (
    <div>
        <button onClick={() => handleMessage(messageArray[0])}>01</button>
        <button onClick={() => handleMessage(messageArray[1])}>02</button>
        <button onClick={() => handleMessage(messageArray[2])}>03</button>
    </div>
  )
}

export default ChangeMessageState