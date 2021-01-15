import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App= () =>{
  const Name = 'seryon'
  const[count,setCount] = useState(0);

  const increment　= () => {
    setCount(count+1);
    console.log(count);
  };
  const decrement　= () => {
    setCount(count-1);
    console.log(count);
  };
  
 
 
  return (
   
<div>
  <h1>Hello world</h1>
  <h2>Hello world</h2>
  <h3>Hello world</h3>
  <h4>Hello world</h4>

<button
  onClick={() => window.alert("Hello world")}
  ></button>


<input type="text"/>
<a href="#">a タグ</a>

{Name}
<div>
     <button onClick={increment}>
       いいね！
     </button>
     <button onClick={decrement}>
       よくないね！
     </button>
     {count}
   </div>
</div>
  );
}


export default App;
