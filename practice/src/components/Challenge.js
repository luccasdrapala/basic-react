const Challenge = () => {

    const handlerSum = () => {

        let val1 = document.getElementById("val1").value
        let val2 = document.getElementById("val2").value
        let sum = parseInt(val1) + parseInt(val2)
        document.getElementById("result").value = sum
    }

    return (
        <div>
            <input id="val1" type="number" placeholder="Digite um numero"/>
            <input id="val2" type="number" placeholder="Digite um numero"/>
            <button onClick={handlerSum} type="submit">Soma</button><br />
            <input id="result" type="text"/>
        </div>
    )
}

export default Challenge;