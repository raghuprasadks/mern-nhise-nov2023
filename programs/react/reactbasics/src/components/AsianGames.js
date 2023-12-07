import React,{useState,useEffect,useRef} from 'react'

const AsianGames = () => {

    const [code,setCode]=useState()
    const [name,setName]=useState()
    const [year,setYear]=useState()
    const [gold,setGold]=useState()
    const [silver,setSilver]=useState()
    const [bronze,setBronze]=useState()
    const [total,setTotal]=useState()
    //const [medals,setMedals]=useState([])
    const medals =useRef([])
    const [message,setMessage]=useState()

    let url = 'http://localhost:8000/asiangames'
    
    const addMedals =(e)=>{
        e.preventDefault()

        let medal = {code,name,year,gold,silver,bronze,total}
        console.log("medals ",medal)
        console.log('data from api')
        fetch(url,{
            method:"POST",
            body:JSON.stringify(medal),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
              }
        })
        .then(response=>response.json())
        .then(json=>{
            if(json.data){
                console.log('add medals .. response from server')
                setMessage("Data saved sucessfully")
                listMedals()
            }
                        
        }).catch((error)=>{
            setMessage("Unable to save data.Try later")
        })

    }

    const listMedals=()=>
    {
        console.log("list medals...")
        fetch(url)
        .then(response=>response.json())
        .then(json=>{
            console.log('data from server ',json.data)
            //setMedals(json.data)
            medals.current=json.data
            console.log("medals current :: ",medals.current)
           //listMedals()            
        }
            )
    }

    useEffect(()=>{
        listMedals()
    },[])

    return (
    <>
    <div className='container'>
        <h1>AsianGames</h1>
        <form onSubmit={addMedals}>
            <label>Code</label><br/>
            <input type="number" value={code} onChange={(e)=>setCode(e.target.value)}></input><br/>
            <label>Name</label><br/>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
            <label>Year</label><br/>
            <input type="number" value={year} onChange={(e)=>setYear(e.target.value)}></input><br/>
            <label>Gold</label><br/>
            <input type="number" value={gold} onChange={(e)=>setGold(e.target.value)}></input><br/>
            <label>Silver</label><br/>
            <input type="number" value={silver} onChange={(e)=>setSilver(e.target.value)}></input><br/>
            <label>Bronze</label><br/>
            <input type="number" value={bronze} onChange={(e)=>setBronze(e.target.value)}></input><br/>
            <label>Total</label><br/>
            <input type="number" value={total} onChange={(e)=>setTotal(e.target.value)}></input><br/>            
            <button type="submit">Add Medals</button>
        </form> 
        <h2>{message}</h2>      
    </div>
    <div className='container'>
        <h1>Metals Table</h1>
        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Year</th>
                <th>Gold</th>
                <th>Silver</th>
                <th>Bronze</th>
                <th>Total</th>
            </tr>
        {
            medals.current.map((medal)=>
                <tr key={medal.code}>
                <td>{medal.code}</td>
                <td>{medal.name}</td>
                <td>{medal.name}</td>
                <td>{medal.gold}</td>
                <td>{medal.silver}</td>
                <td>{medal.bronze}</td>
                <td>{medal.total}</td>
            </tr>
            )
        }
        </table>
    </div>
    </>
    
  )
}

export default AsianGames