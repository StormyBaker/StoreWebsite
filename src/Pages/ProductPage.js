import { useState } from "react"
import { Button, Col, Row } from "react-bootstrap";
import { GetProductWithImagesByUPC } from "../DataAPI/Products";
import noImage from "../Assets/no-image.jpg"
import Loader from "../Components/Loader";
import { useAccount } from "../DataAPI/CTXProvider";
import { AddToList } from "../DataAPI/ShoppingList";

export default function ProductPage(props) {
    const [productData, setProductData] = useState();
    const [quantity, setQuantity] = useState(1);

    var { accountInfo } = useAccount();

    async function loadProductData() {
        let data = await GetProductWithImagesByUPC(props.match.params.upc);
        setProductData(data[0][0]);
    }

    async function add() {
        AddToList(accountInfo.ID, productData.UPC, quantity);
    }

    if (!productData) {
        loadProductData();
    }

    if (!productData) {
        return (
            <Loader text="Loading product data..." />
        )
    }

    return (
        <div className="product-page">
            <Row>
                <Col xl={3}>
                    <img width="80%" src={(productData.Images == null || productData.Images === undefined) ? noImage : productData.Images.split('*')[0]} alt="abc"/>
                    <Row>
                        <Col xs={12}>Price: ${productData.Price.toFixed(2)}</Col>
                        <Col xs={12}>Size: {productData.Size} {productData.Size_Unit}</Col>
                    </Row>
                    {(accountInfo.loggedIn) 
                    ?
                    <>
                        <Row className="margin-top">
                            <Col>
                                <select class="form-select" aria-label="Default select example" onChange={(e) => {setQuantity(e.currentTarget.value)}}>
                                    <option selected value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </Col>
                            <Col>
                                <Button onClick={add}>Add To List</Button>
                            </Col>
                        </Row>
                    </>:<></>}
                </Col>
                <Col>
                    <h1>{productData.Name}</h1>
                    <br />
                    <hr />
                    <br />
                    <h3>Product Description</h3>
                    <p className="product-description">{productData.Description}</p>
                </Col>
            </Row>
        </div>
    )
}