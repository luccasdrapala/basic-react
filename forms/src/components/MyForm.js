import { useState } from 'react'
import './MyForm.css'

const MyForm = () => {

  // genrenciamento de dados
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
        {/* 1- criacao do form */}
        <form>
            <div>
                <label htmlFor="name">nome:</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder='Digit seu nome'
                  onChange={handleName}
                />
            </div>

            {/* label envolvendo input */}
            <label>
              <span>E-mail</span>
              <input type="email" name="email" id="" placeholder='Digite o seu email' />
            </label>

            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default MyForm