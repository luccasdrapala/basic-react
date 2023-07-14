const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e)
    };

    const henderSomething = (x) => {
        if (x) {
            return <h1>Primeira reenderizacao</h1>
        } else {
            return <h1>Segunda reenderizacao</h1>
        }
    }

    return (
        <div>
            <div>
                <button onClick={handleMyEvent}>Clique aqui</button>
            </div>

            <div>
                <button onClick={() => console.log("outra funcao")}>Clique aqui</button>
            </div>
            {henderSomething(true)}
            {henderSomething(true)}
        </div>
    )
};

export default Events;