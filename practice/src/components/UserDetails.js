const UserDetails = ({ dados }) => {

  return (
    <div>
            {dados.map((dados) => (
                (dados.idade >= 18 ) ? (
                    <ul key={dados.id}>
                    <li>Nome: {dados.nome}</li>
                    <li>Idade: {dados.idade}</li>
                    <li>Profissao: {dados.profissao}</li>
                </ul>
                ) : (
                    <p></p>
                )
            ))}
    </div>
  )
}

export default UserDetails