

import React,{useState} from 'react'
const SimpleInterest = () => {
    const [principal,setPrincipal]=useState(0)
    const [roi,setRoi]=useState(0)
    const [time,setTime]=useState(0)
    const [si,setSi]=useState(0)
    const calculateSI=()=>{
        let sicalc = (principal*roi*time)/100
        setSi(sicalc)
    }   
  return (
    <div>        
       <h1>SimpleInterest</h1> 
       <label>Enter Principal Amount</label>
       <input type="number" value={principal} onChange={(e)=>setPrincipal(e.target.value)}></input><br/>
       <label>Enter Rate of Interest</label>
       <input type="number" value={roi} onChange={(e)=>setRoi(e.target.value)}></input><br/>
       <label>Enter Time in year</label>
       <input type="number" value={time} onChange={(e)=>setTime(e.target.value)}></input><br/>
       <button onClick={calculateSI}>Calculate</button> 
       <h2>Simple Interest is {si}</h2>    
       
    </div>
  )
}

export default SimpleInterest