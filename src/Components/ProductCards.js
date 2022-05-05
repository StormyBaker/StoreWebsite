import {Card, CardGroup, Col, Container, Row, Button} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useAccount } from "../DataAPI/CTXProvider";
import { AddToList } from '../DataAPI/ShoppingList';

export default function ProductCards(props) {
  return (
    <Container>
      <Row>
        {ProcessData(props.data, props.department)}
      </Row>
    </Container>
  )
}

function ProcessData(data, department) {
  var a = []

  var {accountInfo} = useAccount();

  async function add(upc) {
    AddToList(accountInfo.ID, upc, 1);
  }

  for (let p of data){
    if (department && p["Department_ID"] !== parseInt(department)) {
      continue;
    }
    a.push(
      <Col md={6} lg={4} xl={3}>
          <CardGroup>
            <Card>
              {(accountInfo.loggedIn)
              ?
              <div className="add-button-card">
                <Button onClick={(e) => {
                  add(p.UPC); 
                  var ele = e.currentTarget;
                  ele.classList.add('btn-success'); 

                  setTimeout(() => {
                    ele.classList.remove('btn-success'); 
                  }, 500)}}>Add</Button>
              </div>:<></>}

              <Card.Img variant="top" src={(p.Images != null) ? p.Images.split('*')[0] : ""} />
              <Card.Body>
                  <Row style={{minHeight: '113px'}}>
                    <Col xs={12}>
                      <LinkContainer exact to={`/product/${p.UPC}`}>
                        <a className="not-link" href={`/product/${p.UPC}`}>
                          <Card.Title style={{fontWeight: 'bold'}}>{p.Name}</Card.Title>
                        </a>
                      </LinkContainer>
                    </Col>
                    <Col xs={12}><span>${p.Price.toFixed(2)} per {p.Size} {p.Size_Unit}</span></Col>
                  </Row>
                  <Card.Text>
                    <LinkContainer exact to={`/product/${p.UPC}`}>
                      <a className="not-link" href={`/product/${p.UPC}`}>
                        <hr/>
                        {(p.Description != null && p.Description.length > 200) ? p.Description.substring(0, 197) + "..." : p.Description}
                      </a>
                    </LinkContainer>
                  </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
      </Col>
    )
  }

  return a
}