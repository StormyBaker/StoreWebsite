import { useState } from "react";
import { Button, Form, FormControl, OverlayTrigger, Popover } from "react-bootstrap";
import { GetAllProductsWithImages } from "../DataAPI/Products";
import { LinkContainer } from 'react-router-bootstrap';
import {Card, CardGroup, Col, Container, Row} from 'react-bootstrap';

export default function ProductSearchBar() {
    const [productData, setProductData] = useState();
    const [showResults, setShowResults] = useState(false);
    const [results, setResults] = useState([]);

    async function loadProductData() {
        let data = await GetAllProductsWithImages();
        setProductData(data[0]);
    }

    function search(event) {
        let term = event.currentTarget.value;
        if (!term.trim()) {
            setShowResults(false);
        } else {
            if (productData !== undefined) {
                let matches = []
                for (var product of productData) {
                    let terms = term.split(' ');

                    let pnLower = product.Name.toLowerCase();
                    let pdLower = product.Name.toLowerCase();

                    let broken = false;

                    for (let term of terms) {
                        if (!pnLower.includes(term.toLowerCase()) && !pdLower.includes(term.toLowerCase())) {
                            broken = true;
                            break;
                        }
                    }
                    if (!broken) {
                        matches.push(product);
                    }
                }

                setResults(matches)
            }

            setShowResults(true);
        }
    }

    function displayMatches(matches) {
        let componentList = [];

        if (!productData) {
            return(
                <span className="src-error">Loading...</span>
            );
        }

        for (let match of matches) {
            componentList.push(
                <LinkContainer exact to={`/product/${match.UPC}`}>
                    <a href={`/product/${match.UPC}`}>
                        <div className="search-result">
                            <Row>
                                <Col xs={2}><img src={match.Images.split('*')[0]} alt={match.Name} height="50px" width="50px"></img></Col>
                                <Col className="search-result-name">
                                    {match.Name}
                                </Col>
                            </Row>
                        </div>
                    </a>
                </LinkContainer>
            )
        }

        if (componentList.length === 0) {
            componentList.push(<span className="src-error">No results.</span>);
        }

        return componentList;
    }

    if (!productData) {
        loadProductData();
    }

    return(
        <OverlayTrigger
        key="bottom"
        placement="bottom"
        show={showResults}
        overlay={
          <Popover id={`popover-positioned-srcres`}>
            <Popover.Body className="search-results">
              {displayMatches(results)}
            </Popover.Body>
          </Popover>
        }
      >
        <Form className="d-flex">
            <FormControl
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            onChange={search}
            />
        </Form>
      </OverlayTrigger>
    )
}