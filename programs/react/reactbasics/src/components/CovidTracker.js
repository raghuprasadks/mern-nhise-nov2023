import React,{useState,useEffect} from 'react'

const CovidTracker = () => {
    const [coviddata,setCoviddata]=useState([])        
    useEffect(()=>{
            console.log("use effect")
            fetch('https://api.covidtracking.com/v1/states/current.json')
                .then(response => response.json())
                //.then(json => console.log(json))
                .then(json=>setCoviddata(json))
        })
    
        return (
        <div>
        <h1>Covid Tracker</h1>
        <table>
            <tr>
                <th>Date</th>
                <th>State</th>
                <th>Positive</th>
                <th>Total Tested</th>
                <th>Hospitalized</th>
            </tr>
            {
                coviddata.map((covid)=><tr key={covid.state}>
                <td>{covid.date}</td>
                <td>{covid.state}</td>
                <td>{covid.positive}</td>
                <td>{covid.totalTestResults}</td>
                <td>{covid.hospitalizedCumulative}</td>
                </tr>)
            }
        </table>
    </div>
  )
}

export default CovidTracker