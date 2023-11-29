import React from 'react'

const CoronaList = (props) => {
    let coronadata =props.data
  return (
    <div>
        <h1>CoronaList - {coronadata.length}</h1>

        <table>
            <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Total</th>
                <th>Active</th>
                <th>Recovered</th>
                <th>Death</th>
            </tr>
            {coronadata.map((corona)=><tr key={corona.code}>
                <td>{corona.code}</td>
                <td>{corona.name}</td>
                <td>{corona.total}</td>
                <td>{corona.active}</td>
                <td>{corona.recovered}</td>
                <td>{corona.death}</td>
            </tr>)}
        </table>
        
    </div>
  )
}

export default CoronaList