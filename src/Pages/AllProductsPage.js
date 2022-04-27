import { useState } from "react"
import { GetAllProductsWithImages } from "../DataAPI/Products";
import ProductCards from "../Components/ProductCards";
import { Col, Nav, Row } from "react-bootstrap";
import { GetDepartments } from "../DataAPI/Departments";
import { LinkContainer } from "react-router-bootstrap";
import { useParams } from "react-router-dom";
import Loader from "../Components/Loader";

export default function AllProductsPage(props) {
    const [productData, setProductData] = useState();
    const [departmentData, setDepartmentData] = useState();
    const { department } = useParams();

    async function loadProductData() {
        let data = await GetAllProductsWithImages();
        setProductData(data[0]);
    }

    if (!productData) {
        loadProductData();

        return (
            <Loader text="Loading product data..." />
        )
    }

    async function loadDepartmentData() {
        let data = await GetDepartments();
        setDepartmentData(data[0]);
    }

    if (!departmentData) {
        loadDepartmentData();

        return (
            <Loader text="Loading department data..." />
        )
    }

    function departmentList() {
        var rets = [];

        for (let dept of departmentData) {
            rets.push(
                <LinkContainer exact to={`/products/${dept.ID}`}>
                    <Nav.Link>{dept.Name}</Nav.Link>
                </LinkContainer>
            )
        }

        return rets;
    }

    return (
        <Row>
            <Col xs={12}>
                <div className="all-products-header">
                    <h1>Jarvis Foods Products</h1>
                </div>
            </Col>
            <Col xl={2}>
                <Nav defaultActiveKey="/all" className="dept-select flex-column">
                    <p className="dept-heading">Departments</p>
                    <LinkContainer exact to="/products">
                        <Nav.Link>All Products</Nav.Link>
                    </LinkContainer>
                    {departmentList()}
                </Nav>
            </Col>
            
            <Col>
                <ProductCards data={productData} department={department} />
            </Col>
        </Row>
    )
}