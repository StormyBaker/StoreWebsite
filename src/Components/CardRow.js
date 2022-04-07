import { useState } from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Products from "./Products.js";

export default async function CardRow(props) {
  var [data, setData] = useState(<></>)
  
  setData(await GetProduct())

  return (
    <CardGroup>
      {data}
    </CardGroup>
  )
}

async function GetProduct(){
  var a = []
  for (let p of JSON.parse(await Products())){
    a.push(
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    )
  }
  
  return a
}