import React,{useRef} from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  
  const email = useRef(null)
  const password = useRef(null)
  const message = useRef("")

  const navigate = useNavigate()

  const url = "http://localhost:5000/api/user/login"

  const register = (e)=>{

    e.preventDefault()
    let user = {email:email.current.value,password:password.current.value}
    console.log('login ',user)

    fetch(url,
      {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(user)
    }).then(response=>response.json())
    .then(json=>{
      if (json.data != null){
        console.log("login success")
      navigate("/member")
    }else{
      message.current ="Invalid login credential"
    }
    })
    
  }

  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={register}>
      <label>Email</label><br/>
      <input type="text" ref={email}/><br/>
      <label>Password</label><br/>
      <input type="text" ref={password}/><br/>
      <button type="submit">Sign Up</button>            
    </form>
    <h1>{message.current.value}</h1>
    </>
  )
}

export default Login