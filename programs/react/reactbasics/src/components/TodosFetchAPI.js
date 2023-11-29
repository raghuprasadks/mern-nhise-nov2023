import React,{useState,useEffect} from 'react'

const TodosFetchAPI = () => {

    const [todos,setTodos]=useState([])

    useEffect(()=>{
        console.log("use effect")
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            //.then(json => console.log(json))
            .then(json=>setTodos(json))
    })

  return (
    <div>
        <h1>Todos</h1>
        <table>
            <tr>
                <th>User Id</th>
                <th>Id</th>
                <th>Title</th>
                <th>Completed</th>
            </tr>
            {
                todos.map((todo)=><tr key={todo.id}>
                <td>{todo.userId}</td>
                <td>{todo.id}</td>
                <td>{todo.title}</td>
                <td>{todo.completed.toString()}</td>
                </tr>)
            }
        </table>
    </div>
  )
}

export default TodosFetchAPI