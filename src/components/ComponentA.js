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
      await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setData(res.data)
      })
    }


    console.log(data)

    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
        
        <Table className="tableNo1">
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
    );
};

export default ComponentA