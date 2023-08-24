import { useState } from 'react'
import './MyForm.css'

const MyForm = ({user}) => {

  // genrenciamento de dados
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState('');
  const [role, setRole] = useState('');

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, bio, role)

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

            <label>
                <span>Bio</span>
                <textarea 
                    name='bio' 
                    placeholder='Descricao do usuario'
                    onChange = {(e) => setBio(e.target.value)}
                    value = {bio}
                ></textarea>
            </label>

            <label>
                <span>ROLE</span>
                <select name="role" onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                    <option value="fourth">Quarto</option>
                </select>
            </label><br />

            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default MyForm