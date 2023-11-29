import React,{useState,useEffect} from 'react'

const Users = () => {

    const [userdata,setUserdata]=useState([])

    useEffect(()=>{

        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(json=>setUserdata(json))
    })
  return (
    
    <div>
        <h1>Users</h1>
        <table>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>City</th>
                <th>Phone</th>
                <th>Company Name</th>
            </tr>
            {
                userdata.map((user)=><tr key={user.email1}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address.city}</td>
                    <td>{user.phone}</td>
                    <td>{user.company.name}</td>
                </tr>)
            }
        </table>    
    </div>
  )
}

export default Users