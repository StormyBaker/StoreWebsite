import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import { GetProductWithImagesByUPC } from "../DataAPI/Products";
import noImage from "../Assets/no-image.jpg"

export default function ProductPage(props) {
    const [productData, setProductData] = useState();

    async function loadProductData() {
        let data = await GetProductWithImagesByUPC(props.match.params.upc);
        setProductData(data[0][0]);
    }

    if (!productData) {
        loadProductData();
    }

    if (!productData) {
        return (
            <div>
                Loading product data...
            </div>
        )
    }

    return (
        <div>
            <Row>
                <Col xl={{span:3,offset:2}}>
                    <img src={(productData.Images == null || productData.Images === undefined) ? noImage : productData.Images.split('*')[0]} alt="abc"/>
                </Col>
                <Col xl={5}>
                    <h1>{productData.Name}</h1>
                    <p>{productData.Description}</p>
                </Col>
            </Row>
        </div>
    )
}