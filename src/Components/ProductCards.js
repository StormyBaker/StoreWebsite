import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default function ProductCards(props) {
  return (
    <Container>
      <Row>
        {processData(props.data, props.department)}
      </Row>
    </Container>
  )
}

function processData(data, department) {
  var a = []
  for (let p of data){
    if (department && p["Department_ID"] !== parseInt(department)) {
      continue;
    }
    a.push(
      <Col md={6} lg={4} xl={3}>
        <LinkContainer exact to={`/product/${p.UPC}`}>
          <a className="not-link" href={`/product/${p.UPC}`}>
            <CardGroup>
                <Card>
                  <Card.Img variant="top" src={(p.Images != null) ? p.Images.split('*')[0] : ""} />
                  <Card.Body>
                    <Card.Title>{p.Name}</Card.Title>
                    <Card.Text>
                      {(p.Description != null && p.Description.length > 200) ? p.Description.substring(0, 197) + "..." : p.Description}
                    </Card.Text>
                  </Card.Body>
                </Card>
            </CardGroup>
          </a>
        </LinkContainer>
      </Col>
    )
  }

  return a
}