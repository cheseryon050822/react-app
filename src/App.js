import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';　
import Card from './Card';

const sampleArreay=[
  {id:'1',Name:'aaa',date:'1962'},
  {id:'2',Name:'bbb',date:'1964'},
  {id:'3',Name:'ccc',date:'1985'},
  {id:'4',Name:'ddd',date:'2003'},
  {id:'5',Name:'eee',date:'2005'}
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
  const array1 =[
    {id:'1',Name:'aaa',date:'1962'},
    {id:'2',Name:'bbb',date:'1964'},
    {id:'3',Name:'ccc',date:'1985'},
    {id:'4',Name:'ddd',date:'2003'},
    {id:'5',Name:'eee',date:'2005'} 
];
const map1 = array1.map (x=> x/1);

  return (

<div>
  <h1>Hello world</h1>
  <h2>Hello world</h2>
  <h3>Hello world</h3>
  <h4>Hello world</h4>
  <Card/>
<button onClick={() => window.alert("Hello world")}>
  結ンデ開イテ羅刹  ト骸
  </button>


<input type="text"/>
<a href="#">a タグ</a>
<div>
  <table>
  <tr>
            <td>id</td>
            <td>Name</td>
            <td>date</td> 
          </tr>
  
    {sampleArreay.map((date) =>{
    console.log(map1);
      return (
        
          <tr>
            <td>{date.id}</td>
            <td>{date.Name}</td>
            <td>{date.date}</td> 
          </tr>
          
              
      )})}
      </table>      
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
