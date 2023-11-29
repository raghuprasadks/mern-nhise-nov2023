import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import SimpleInterest from './components/SimpleInterest';
import Counter from './components/Counter';
import Cricket from './components/Cricket';
import Product from './components/Product';
import TodosFetchAPI from './components/TodosFetchAPI';
import CovidTracker from './components/CovidTracker';
import Users from './components/Users';
import CustomerForm from './components/CustomerForm';
import CoronaList from './components/CoronaList';

import {useState} from 'react';
import CoronaForm from './components/CoronaForm';

function App() {
/**
  const [coronadata,setCoronadata]=useState([
    {
      code:1,
      name:'karnataka',
      total:1000,
      active:100,
      recovered:800,
      death:100
    },
    {
      code:2,
      name:'Kerala',
      total:2000,
      active:200,
      recovered:1600,
      death:200
    }
  ])
 */
  const [coronadata,setCoronadata]=useState([])
  
  const saveCoronaHandler=(corona)=>{
    console.log("corona data ",corona)
    setCoronadata([...coronadata,corona])
  }

  const deleteCoronaHandler=(code)=>{
    console.log("corona delete:: ",code)
    let afterdel = coronadata.filter((corona)=>corona.code != code)
    setCoronadata(afterdel)
  }


  return (
    <div>
      {/*
      <h1>Welcome to React</h1>
      <Header></Header>
      <Content></Content>  
      <SimpleInterest></SimpleInterest>
      <Counter></Counter>
      <Cricket></Cricket>
      <Product></Product>
      <TodosFetchAPI></TodosFetchAPI>
      <CovidTracker></CovidTracker>
      <Users></Users>
      <CustomerForm></CustomerForm>
  */}
  
  <CoronaForm saveCorona={saveCoronaHandler}></CoronaForm>
  <CoronaList data={coronadata} delData= {deleteCoronaHandler}></CoronaList>
 
    </div>
  );
}

export default App;
