import React from 'react'

const CoronaList = ({data,delData}) => {
   // let coronadata =props.data

   // let deleteData = props.delData

    
    const deleteCorona=(code)=>{
        console.log('delete',code)
        delData(code)
    }

  return (
    <div>
        <h1>CoronaList - {data.length}</h1>

        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Total</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Death</th>
                <th>Delete</th>
            </tr>
            {data.map((corona)=><tr key={corona.code}>
                <td>{corona.code}</td>
                <td>{corona.name}</td>
                <td>{corona.total}</td>
                <td>{corona.active}</td>
                <td>{corona.recovered}</td>
                <td>{corona.death}</td>
                <td><button onClick={()=>{deleteCorona(corona.code)}}>Delete</button></td>
            </tr>)}
        </table>
        
    </div>
  )
}

export default CoronaList