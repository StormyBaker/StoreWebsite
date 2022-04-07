import { useState } from 'react';
import {Card, CardGroup} from 'react-bootstrap';
import Products from "./Products.js";

export default function CardRow(props) {
  const [data, setData] = useState();

  async function load() {
    let tempData = await Products();
    setData(tempData);
    console.log(tempData)
  }

  if (!data) {
    load();

    return (
      <div>Loading data...</div>
    )
  } else {
    return (
      <CardGroup>
        {processData(data)}
      </CardGroup>
    )
  }
}

function processData(data) {
  var a = []
  for (let p of data){
    a.push(
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{p.Name}</Card.Title>
          <Card.Text>
            {p.Description}
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