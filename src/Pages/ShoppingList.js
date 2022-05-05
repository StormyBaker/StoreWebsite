import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Loader from "../Components/Loader";
import { useAccount } from "../DataAPI/CTXProvider";
import { GetShoppingList, RemoveProductFromList } from "../DataAPI/ShoppingList";
import noImage from "../Assets/no-image.jpg"
import Error from "../Components/Error";

export default function ShoppingList() {
    const {accountInfo} = useAccount();

    const [shoppingList, setShoppingList] = useState();

    function remove(upc) {
        RemoveProductFromList(accountInfo.ID, upc)

        for (let i = 0; i < shoppingList.length; i++) {
            if (shoppingList[i].UPC === upc) {
                document.getElementById('row' +shoppingList[i].UPC).remove()
                let tempArr = shoppingList;
                tempArr.splice(i, 1);
                setShoppingList(tempArr);
                break;
            }
        }
    }

    if (!accountInfo.loggedIn) {
        return (
            <Error text="Please login to continue..."/>
        )
    }

    async function populate() {
        let list = await GetShoppingList(accountInfo.ID)

        setShoppingList(list);
    }

    if (!shoppingList) {
        populate()

        return (
            <Loader text="Loading shopping list..."/>
        )
    }

    if (shoppingList.length === 0) {
        return (
            <div className="product-page reduced">
                <h2>Shopping List</h2>
                <p>There is nothing in your shopping list.</p>
            </div>
        )
    }
    else {
        return (
            <div className="product-page reduced">
                <h2>Shopping List</h2>

                <div className="list-header">
                    <Row className="detail-row">
                        <Col xs={3}></Col>
                        <Col xs={1}>Quantity</Col>
                        <Col xs={4}>Item Name</Col>
                        <Col>Unit Price</Col>
                        <Col>Total</Col>
                        <Col></Col>
                    </Row>
                </div>
                <div className="list-body">
                    {getRows(shoppingList)}
                </div>
            </div>
        )
    }

    function getRows(sList) {
        let elements = [];

        for (var item of sList) {
            elements.push(
                <Row id={"row" + item.UPC} className="sh-list-item">
                    <Col xs={3}>
                        <img src={(item.Images == null || item.Images === undefined) ? noImage : item.Images.split('*')[0]} alt="abc"/> 
                    </Col>
                    <Col xs={1}><span>{item.Quantity}</span></Col>
                    <Col xs={4}><span>{item.Name}</span></Col>
                    <Col><span>${item.Price.toFixed(2)}</span></Col>
                    <Col><span>${(item.Price * item.Quantity).toFixed(2)}</span></Col>
                    <Col><span><Button variant="danger" id={item.UPC} onClick={(e) => { remove(e.currentTarget.id) }}>Remove</Button></span></Col>
                </Row>
            )
        }

        return elements;
    }
}