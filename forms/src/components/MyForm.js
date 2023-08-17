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
            <button type="submit">submit</button>
        </form>
    </div>
  )
}

export default MyForm