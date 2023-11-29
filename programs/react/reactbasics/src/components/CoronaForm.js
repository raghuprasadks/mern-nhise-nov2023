import React,{useState} from 'react'

const CoronaForm = ({saveCorona}) => {
    const [code,setCode]=useState()
    const [name,setName]=useState()
    const [total,setTotal]=useState()
    const [active,setActive]=useState()
    const [recovered,setRecovered]=useState()
    const [death,setDeath]=useState()

    const addCorona=(e)=>{
        e.preventDefault()

        let corona = {code,name,total,active,recovered,death}
        console.log("addCorona : ",corona)
        reset()
        saveCorona(corona)
        
    }

    const reset=()=>{
      setCode(0)
      setName('')
      setTotal(0)
      setActive(0)
      setRecovered(0)
      setDeath(0)

    }


    return (
    <div>
      <h1>Corona Form</h1>

      <form onSubmit={addCorona}>
        <label>Code</label>
        <input type="text" value={code} onChange={(e)=>setCode(e.target.value)}/><br/>       
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>Total</label>
        <input type="number" value={total} onChange={(e)=>setTotal(e.target.value)}/><br/>
        <label>Active</label>
        <input type="number" value={active} onChange={(e)=>setActive(e.target.value)}/><br/>
        <label>Recovered</label>
        <input type="number" value={recovered} onChange={(e)=>setRecovered(e.target.value)}/><br/>
        <label>Recovered</label>
        <input type="number" value={death} onChange={(e)=>setDeath(e.target.value)}/><br/>
        <button type="submit">Add Corona</button>
      
      </form>  
        
    </div>
  )
}

export default CoronaForm