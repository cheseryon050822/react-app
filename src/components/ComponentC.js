import React,{useState,useEffect}from 'react'
import { Link,useHistory } from 'react-router-dom'
import {Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ComponentC = () => {
    const history= useHistory ()
    const yayoi= () => {
        history.push("/ComponentB")
    }
    const Tablest=() =>{
        
    }
    const [data,setData] = useState([]);

    useEffect(() => {
         handleFetch() 
     },[]);
 
     const handleFetch = async () => {
       await axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res => {
         setData(res.data)
       })
     }
 
 
     console.log(data)
 
    return(
        <div>
            ComponentC
            <Link to="ComponentB">ComponentBへいってらっしゃーい</Link>
            <button onClick={yayoi}>ComponentBへ移動</button>
            <button onClick={Tablest}>GitData</button>
            
    <Table striped bordered hover variant="dark">
    <thead>
    <tr>

      <th>id</th>
      <th>title</th>
      <th>name</th>
      <th>Body</th>
    </tr>
  </thead>
  <tbody>
  {data.map((value) =>(
                        <tr>
                          <td>{value.userId}</td>
                            <td>{value.id}</td>
                            <td>{value.title}</td>
                            <td>{value.body}</td>
                        </tr>
                    ))}
      
  </tbody>
</Table>

  
  
        </div>
        
    )
}

export default ComponentC