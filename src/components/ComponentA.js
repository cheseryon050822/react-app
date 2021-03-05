import React ,{useState,useEffect}from 'react'
import {Link, } from 'react-router-dom'
import {Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ComponentA = () => {
   const [data,setData] = useState([]);

   useEffect(() => {
        handleFetch() 
    },[]);

    const handleFetch = async () => {
      await axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        setData(res.data)
      })
    }


    console.log(data)

    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
        
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>{data.map}</th>
      <th>{data.map}</th>
      <th>{data.map}</th>
      <th>{data.map}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
              
            
      
    </div>
    );
};

export default ComponentA