import { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import { useAccount } from "../DataAPI/CTXProvider";
import { GetProductReport } from "../DataAPI/Products";

export default function ProductDemand() {
    const {accountInfo} = useAccount();

    const [products, setProducts] = useState();

    if (!accountInfo.loggedIn || accountInfo.Admin === 0) {
        return (
            <Error text="You are not authorized to view this page."/>
        )
    }

    async function loadProducts() {
        let prod = await GetProductReport();
        setProducts(prod);
    }

    if (!products) {
        loadProducts();
        return (
            <Loader text="Loading Product Demand Report..." />
        )
    }

    return (
        <div className="product-page reduced">
        <h2>Product Demand Report</h2>

            <div className="list-header">
                <Row className="detail-row">
                <Col>UPC</Col>
                <Col xs={4}>Name</Col>
                <Col>Demand</Col>
                <Col>Stock</Col>
                <Col>Product Page</Col>
                </Row>
            </div>
            <div className="list-body">
                {generateReport()}
            </div>
        </div>
    )

    function generateReport() {
        let elements = [];

        console.log(products)

        for (var item of products) {
            elements.push(
                <Row id={"row" + item.UPC} className="sh-list-item">
                    <Col>{item.UPC}</Col>
                    <Col xs={4}>{item.Name}</Col>
                    <Col>{item.Demand}</Col>
                    <Col>{item.Quantity_Available}</Col>
                    <Col>
                        <LinkContainer exact to={`/product/${item.UPC}`}>
                            <a href={`/product/${item.UPC}`}>View Product</a>
                        </LinkContainer>
                    </Col>
                </Row>
            )
        }

        return elements;
    }
}