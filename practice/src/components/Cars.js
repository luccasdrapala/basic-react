import styles from "./Cars.module.css";

const carsModel = [
    {id: 0, marca:"Ford", cor:"Preto", modelo:"Fiesta"},
    {id: 1, marca:"GM", cor:"Branco", modelo:"Onix"},
    {id: 2, marca:"Fiat", cor:"Vermelho", modelo:"Uno"}
]

const Cars = () => {
  return (
    <div>
        {cars}
    </div>
  )
}

export default Cars