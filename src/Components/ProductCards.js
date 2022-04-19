import { useState } from 'react';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import {GetAllProductsWithImages} from "../DataAPI/Products.js";
import { LinkContainer } from 'react-router-bootstrap';

export default function CardRow(props) {
  const [data, setData] = useState();

  async function load() {
    let tempData = await GetAllProductsWithImages();
    setData(tempData[0]);
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
          <LinkContainer exact to={`/product/${p.UPC}`}>
            <Card>
              <Card.Img variant="top" src={(p.Images != null) ? p.Images.split('*')[0] : ""} />
              <Card.Body>
                <Card.Title>{p.Name}</Card.Title>
                <Card.Text>
                  {(p.Description != null && p.Description.length > 200) ? p.Description.substring(0, 197) + "..." : p.Description}
                </Card.Text>
              </Card.Body>
            </Card>
          </LinkContainer>
        </CardGroup>
      </Col>
    )
  }

  return a
}