import React, {useState, useContext} from 'react'
import UserContext from '../Context/UserContext'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  //Aise data ko send krte hain

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({username, password})
  }
  return (
    <div>
        <h2>Login</h2>
        <input type='text' value={username}
        onChange={(e) => setUsername(e.currentTarget.value)} placeholder='username' />
        {"     "}
        <input type='text'
        value={password}
        onChange={(e) => setPassword(e.currentTarget.value)} placeholder='password'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login