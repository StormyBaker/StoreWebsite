import { useState } from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
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
      <Container>
        <Row>
          {processData(data)}
        </Row>
      </Container>
    )
  }
}

function processData(data) {
  var a = []
  for (let p of data){
    a.push(
      <Col xl={3}>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>{p.Name}</Card.Title>
              <Card.Text>
                {p.Description}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    )
  }
  
  return a
}