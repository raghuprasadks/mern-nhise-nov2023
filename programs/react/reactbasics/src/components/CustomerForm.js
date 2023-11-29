import React,{useState,useEffect} from 'react'
const CustomerForm = () => {
    const [name,setName]=useState()
    const [city,setCity]=useState()
    const [customers,setCustomers]=useState([])
    const [editmode,setEditmode]=useState(false)
    const [id,setId]=useState()

    const url='http://localhost:5000/customers'

    const saveCustomer = (e)=>{
        e.preventDefault()
        let customer ={name,city}
        fetch(url,
            {
                method:'post',
                body:JSON.stringify(customer),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
            }
        )
        .then(response=>response.json())
        .then(
            json=>{
                console.log(json)
                getCustomers()
            }
        )
        .catch((error)=>console.log(error))  
        reset()  
    }

    const getCustomers=()=>{
        fetch(url)
        .then(response=>response.json())
        .then(json=>setCustomers(json))

    }

    useEffect(()=>{
        getCustomers()
    },[])

    const reset=()=>{
        setName('')
        setCity('')
    }

    const deleteCustomer=(customerid)=>{
        console.log("delete customer ",customerid)

        fetch(url+"/"+customerid,
            {
                method:'delete'
            }
        )
        .then(response=>response.json())
        .then(
            json=>{
                console.log(json)
                getCustomers()
            }
        )
        .catch((error)=>console.log(error))

    }

    const editCustomer=(customerid)=>{
        setEditmode(true)
        let custtoedit = customers.filter((customer)=>customer.id == customerid)
        setName(custtoedit[0].name)
        setCity(custtoedit[0].city)
        setId(custtoedit[0].id)
    }

    const updateCustomer=(e)=>{
        e.preventDefault()
        console.log("update customer id ",id)

        let customer ={name,city}
        fetch(url+"/"+id,
            {
                method:'put',
                body:JSON.stringify(customer),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                  }
            }
        )
        .then(response=>response.json())
        .then(
            json=>{
                console.log(json)
                getCustomers()
            }
        )
        .catch((error)=>console.log(error))  
        reset()
        setEditmode(false)
    }

  return (
    <div>
    <div>
       <h1>Customer Form</h1>
       <form onSubmit={saveCustomer}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/><br/>
        <label>City</label>
        <input type="text" value={city} onChange={(e)=>setCity(e.target.value)}/><br/>
        
        {editmode?<button onClick={(e)=>updateCustomer(e)}>Update Customer</button>:<button type="submit">Add Customer</button>}   
        </form>
            
    </div>
    <div>
        <h1>Customer List</h1>
        <table>
            <tr>
            <th>Name</th>
            <th>City</th>
            </tr>
            {
                customers.map((customer)=><tr key={customer.id}>
                    <td>{customer.name}</td>
                    <td>{customer.city}</td>
                    <td><button onClick={()=>deleteCustomer(customer.id)}>Delete</button></td>
                    <td><button onClick={()=>editCustomer(customer.id)}>Edit</button></td>
                </tr>)
            }
        </table>
    </div>
    </div>
  )
}
export default CustomerForm