import React,{useRef} from 'react'

const SignUp = () => {

  const name = useRef(null)
  const email = useRef(null)
  const mobile = useRef(null)
  const password = useRef(null)

  const register = (e)=>{

    e.preventDefault()
    let user = {name:name.current.value,email:email.current.value,mobile:mobile.current.value,password:password.current.value}
    console.log('register ',user)
    
  }

  return (
    <>
    <h1>Sign Up</h1>
    <form onSubmit={register}>
      <label>Name</label><br/>
      <input type="text" ref={name}/><br/>
      <label>Email</label><br/>
      <input type="text" ref={email}/><br/>
      <label>Mobile</label><br/>
      <input type="text" ref={mobile}/><br/>
      <label>Password</label><br/>
      <input type="text" ref={password}/><br/>
      <button type="submit">Sign Up</button>            
    </form>
    </>
  )
}

export default SignUp