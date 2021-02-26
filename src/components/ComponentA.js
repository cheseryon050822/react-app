import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button,Table}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentA = () => {
    const history = useHistory ()
    const joumon = () =>{
       history.push("/ComponentB")
    }
const soviet = () =>{
  history.push("/")
}
    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
        <button onClick={joumon}>Ｂはこちら</button>
        <Button variant="primary">Hello world</Button>
        
    </div>
    );
};

export default ComponentA