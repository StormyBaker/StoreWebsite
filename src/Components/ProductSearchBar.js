import { useState } from "react";
import { Button, Form, FormControl, OverlayTrigger, Popover } from "react-bootstrap";
import { GetAllProductsWithImages } from "../DataAPI/Products";

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
            setShowResults(true);
        }
    }

    function displayMatches(matches) {
        let componentList = [];

        for (let match of matches) {
            componentList.push(
                <div>
                    <p>{match.Name}</p>
                </div>
            )
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
          <Popover id={`popover-positioned-abc`}>
            <Popover.Body>
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
            <Button variant="outline-success">Search</Button>
        </Form>
      </OverlayTrigger>
    )
}