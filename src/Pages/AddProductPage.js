import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Error from "../Components/Error";
import Loader from "../Components/Loader";
import { useAccount } from "../DataAPI/CTXProvider";
import { GetDepartments } from "../DataAPI/Departments";
import { AddProduct, AddProductImage, GetProductReport } from "../DataAPI/Products";

export default async function AddProductPage() {
    const {accountInfo} = useAccount();

    const [upc, setUpc] = useState()
    const [deptid, setDeptid] = useState()
    const [name, setName] = useState()
    const [desc, setDesc] = useState()
    const [price, setPrice] = useState()
    const [quan, setQuan] = useState()
    const [size, setSize] = useState()
    const [sizeunits, setSizeunits] = useState()

    const [image, setImage] = useState()
    const [imDesc, setImDesc] = useState()

    if (!accountInfo.loggedIn || accountInfo.Admin === 0) {
        return (
            <Error text="You are not authorized to view this page."/>
        )
    }

    function addProduct() {
        AddProduct(upc, deptid, name, desc, price, quan, size, sizeunits);
        AddProductImage(upc, image, imDesc);
    }

    return (
        <div className="product-page reduced">
            <h2>Add Product</h2>
    
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>UPC</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setUpc(e.currentTarget.value)}} placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formdept">
                    <Form.Label>Department ID</Form.Label>
                    <Form.Select onChange={(e) => {setDeptid(e.currentTarget.value)}}aria-label="Select a department">
                        {await departments()}
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formname">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setName(e.currentTarget.value)}} placeholder="Enter Product Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formdesc">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setDesc(e.currentTarget.value)}} placeholder="Enter Description" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formprice">
                    <Form.Label>Price</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setPrice(e.currentTarget.value)}} placeholder="Enter Price" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formquan">
                    <Form.Label>Quantity Available</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setQuan(e.currentTarget.value)}} placeholder="Enter Quantity Available" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formsize">
                    <Form.Label>Size</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setSize(e.currentTarget.value)}} placeholder="Enter Size" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formsizeun">
                    <Form.Label>Size Units</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setSizeunits(e.currentTarget.value)}} placeholder="Enter Size Units" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formim">
                    <Form.Label>Image URL</Form.Label>
                    <Form.Control type="text" onChange={(e) => {setSizeunits(e.currentTarget.value)}} placeholder="Enter Image URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formimd">
                    <Form.Label>Image Description</Form.Label>
                    <Form.Control type="textarea" onChange={(e) => {setSizeunits(e.currentTarget.value)}} placeholder="Enter Image Description" />
                </Form.Group>

                <Button variant="primary" onClick={() => {addProduct()}}>Add Product</Button>
            </Form>
            
        </div>
    )

    async function departments() {
        let depts = []

        let dreturn = await GetDepartments()[0][0]

        for (let dept of dreturn) {
            depts.push(
                <option value={dept.ID}>{dept.Name}</option>
            )
        }

        return depts;
    }
}