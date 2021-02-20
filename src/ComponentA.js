import React from 'react'
import {Link, useHistory} from 'react-router-dom'
import {Button,Table,Card}from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const ComponentA = () => {
    const history = useHistory ()
    const joumon = () =>{
       history.push("/ComponentB")
    }
    return(
    <div>
        <div>ComponentA</div>
        <Link to="ComponentB">ComponentBへ移動</Link>
        <button onClick={joumon}>Ｂはこちら</button>
        <Button variant="primary">Hello world</Button>
        <Table striped bordered hover variant="dark">
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
<h1>Menu</h1>
<tbody>

<tr>・<Link to="/">Home</Link></tr>
<tr>・<Link to="ComponentB">ComponentB</Link></tr>
<tr>・<Link to="ComponentC">ComponentC</Link></tr>

</tbody>
<Table striped bordered hover variant="dark">
<thead>
    <tr>
      <th>id</th>
      <th>Name</th>
      <th>Date</th>
      <th>#</th>
    </tr>
  </thead>
  <tbody>
      <tr>
          <td>1</td>
          <td>aaa</td>
          <td>2019</td>
          <td>-</td>
      </tr>
      <tr>
          <td>2</td>
          <td>bbb</td>
          <td>2020</td>
          <td>-</td>
      </tr>
      <tr>
          <td>3</td>
          <td>ccc</td>
          <td>2021</td>
          <td>-</td>
      </tr>
      <tr>
          <td>4</td>
          <td>ddd</td>
          <td>2022</td>
          <td>-</td>
      </tr>
      <tr>
          <td>5</td>
          <td>eee</td>
          <td>2023</td>
          <td>-</td>
      </tr>
  </tbody>
</Table>
<Card style={{ width: '18rem' }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
    </div>
    );
};

export default ComponentA