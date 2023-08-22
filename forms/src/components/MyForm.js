import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        {/* 1- criacao do form */}
        <form>
            <div>
                <label htmlFor="name">nome:</label>
                <input type="text" name="name"/>
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