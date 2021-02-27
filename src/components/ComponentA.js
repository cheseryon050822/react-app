import React ,{useState,useEffect}from 'react'
import {Link, } from 'react-router-dom'
import {Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

const ComponentA = () => {
    const [count,setCount] = useState();
    const [data,setdata]=useState();
useEffect(() => {
    console.log('空条徐倫');

    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(res =>{
setdata (res.data)
        console.log(res,'res check')
    })
},[]);

    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
        <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
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