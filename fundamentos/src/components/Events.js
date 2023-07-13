const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    };

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("outra funcao")}>Clique aqui</button>
            </div>

        </div>
    )
};

export default Events;