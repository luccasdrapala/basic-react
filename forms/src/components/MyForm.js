import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

  // genrenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email)

    setEmail('');
    setName('');
  }

  return (
    <div>
        {/* 1- criacao do form */}
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">nome:</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder='Digit seu nome'
                  onChange={handleName}
                  value={name}
                />
            </div>

            {/* label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input 
                type="email" 
                name="email" id="" 
                placeholder='Digite o seu email'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </label>

            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default MyForm