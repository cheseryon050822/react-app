import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';　
import Card from './Card';

const sampleArreay=[
  {id:'id:1',Name:'Name:aaa',date:'date:1962'},
  {id:'id:2',Name:'Name:bbb',date:'date:1964'},
  {id:'id:3',Name:'Name:ccc',date:'date:1985'},
  {id:'id:4',Name:'Name:ddd',date:'date:2003'},
  {id:'id:5',Name:'Name:eee',date:'date:2005'}
]



const App= () =>{
  const Name = 'seryon'
  const[count,setCount] = useState(0);
  const[word,setword]= useState("seryon");

  const increment　= () => {
    setCount(count+1);
    console.log(count);
  };
  const decrement　= () => {
    setCount(count-1);
    console.log(count);
  };
  const eirin  = () =>{
    setCount(0);
    console.log(count);
  }
  const Lotte = () => {
    setword(word+"seryon");
    console.log(word);
  }
  return (

<div>
  <h1>Hello world</h1>
  <h2>Hello world</h2>
  <h3>Hello world</h3>
  <h4>Hello world</h4>
  <Card/>
<button onClick={() => window.alert("Hello world")}>
  結ンデ開イテ羅刹ト骸
  </button>


<input type="text"/>
<a href="#">a タグ</a>
<div>
    {sampleArreay.map((date) =>{
    console.log(date);
      return (
        <table bordar="1">
          <tr>
            <td>id</td>
            <td>Name</td>
            <td>date</td> 
          </tr>
          <tr>
            <td>1</td>
            <td>aaa</td>
            <td>1962</td> 
          </tr>
          <tr>
            <td>2</td>
            <td>bbb</td>
            <td>1964</td> 
          </tr>
          <tr>
            <td>3</td>
            <td>ccc</td>
            <td>1985</td> 
          </tr>
          <tr>
            <td>4</td>
            <td>ddd</td>
            <td>2003</td> 
          </tr>
          <tr>
            <td>5</td>
            <td>eee</td>
            <td>2005</td> 
          </tr>
        </table>       
      )})}      
</div>

{Name}
<div>
     <button onClick={increment}>
       いいね！
     </button>
     <button onClick={decrement}>
       よくないね！
     </button>
     <button onClick={eirin}>
       リセット
     </button>
      {count}
     <button onClick={Lotte}>
       ADD  
     </button>
     {word}
   </div>
</div>



  );
}


export default App;
