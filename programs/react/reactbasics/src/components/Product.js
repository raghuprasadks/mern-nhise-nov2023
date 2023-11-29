import React,{useState} from 'react'

const Product = () => {
  const [code,setCode]=useState()
  const [name,setName]=useState()
  const [desc,setDesc]=useState()
  const [supplier,setSupplier]=useState()
  const [price,setPrice]=useState()
  const [products,setProducts]=useState([])

  const addProduct=(e)=>{
    e.preventDefault()
    let prod ={code,name,desc,supplier,price}   
    console.log("add product ",prod)
   // setProducts(products.push(prod))
   setProducts([...products,prod])
    console.log("after add product ..")
    reset()
  }

  const deleteProduct=(code)=>{
    const afterdelete = products.filter((prod)=>prod.code !=code)
    setProducts(afterdelete)
}

    const productlist = products.map((prod)=><tr key={prod.code}>
        <td>{prod.code}</td>
        <td>{prod.name}</td>
        <td>{prod.desc}</td>
        <td>{prod.supplier}</td>
        <td>{prod.price}</td>
        <td><button onClick={()=>deleteProduct(prod.code)}>Delete</button></td>
    </tr>)

    const reset=()=>{
        setCode(0)
        setName('')
        setDesc('')
        setSupplier('')
        setPrice(0)        
    }

    return (
        <div>
    <div>
       <h1>Product Master</h1> 
       <h2>Total Number of products : {products.length}</h2>
       <form onSubmit={addProduct}>
        <label>Code</label>
        <input type="number" value={code} onChange={(e)=>setCode(e.target.value)}></input><br/>
        <label>Name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input><br/>
        <label>Description</label>
        <input type="text" value={desc} onChange={(e)=>setDesc(e.target.value)}></input><br/>
        <label>Supplier</label>
        <input type="text" value={supplier} onChange={(e)=>setSupplier(e.target.value)}></input><br/>
        <label>Price</label>
        <input type="number" value={price} onChange={(e)=>setPrice(e.target.value)}></input><br/>
        <button type="submit">Add Product</button>
        </form>
       
    </div>
    <div>
        <table>
            <tr>
            <th>Code</th>
            <th>Name</th>
            <th>Description</th>
            <th>Supplier</th>
            <th>Price</th>
            </tr>
            {productlist}
        </table>        
    </div>
    </div>
  )
}

export default Product