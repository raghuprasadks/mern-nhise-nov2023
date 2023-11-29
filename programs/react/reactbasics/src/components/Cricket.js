import React from 'react'

const Cricket = () => {

    const wc2023=[
        {
            name:'India',
            matches:9,
            points:18
        },
        {
            name:'South Africa',
            matches:9,
            points:14
        },
        {
            name:'Australia',
            matches:9,
            points:14
        }
    ]

    const data =wc2023.map((team)=><tr key={team.name}>
        <td>{team.name}</td>
                <td>{team.matches}</td>
                <td>{team.points}</td>
    </tr>)

  return (
    <div>
        <h1>World Cup Cricket 2023</h1>
        <table>
            <tr>
                <th>Country</th>
                <th>Matches</th>
                <th>Points</th>
            </tr>
            {data}
        </table>
    </div>
  )
}

export default Cricket