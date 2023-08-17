import styles from "./Cars.module.css";

const Cars = ({car}) => {
  return (
    <div className={styles.carBox}>
        <h1>{car.marca}</h1>
        <p>{car.cor}</p>
        <p>{car.modelo}</p>
    </div>
  )
}

export default Cars