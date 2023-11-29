import React,{useState} from 'react'

const CoronaForm = ({saveCorona}) => {

    const [name,setName]=useState()
    const [total,setTotal]=useState()
    const [active,setActive]=useState()
    const [recovered,setRecovered]=useState()
    const [death,setDeath]=useState()

    const addCorona=(e)=>{
        e.preventDefault()

        let corona = {name,total,active,recovered,death}
        console.log("addCorona : ",corona)
        saveCorona(corona)
    }


    return (
    <div>
      <h1>Corona Form</h1>

      <form onSubmit={addCorona}>
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