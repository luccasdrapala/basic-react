import CarDetails from "./CarDetails"

const Looping = () => {

    const cars = [
        {id: 1, brand: "ford", km: 0, color: 'preto', newCar: true},
        {id: 2, brand: "GM", km: 10.000, color: 'branco', newcar: false},
        {id: 3, brand: "fiat", km: 100.000, color: 'vermelho', newcar: false},
    ]

  return (
    <div>
        {cars.map((car) => (
            <CarDetails 
                key={car.id}
                brand={car.brand} 
                km={car.km} 
                color={car.color} 
                newCar={car.newCar}
            />
        ))}
    </div>
  )
}

export default Looping