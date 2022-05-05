import { Col, Row } from "react-bootstrap";
import HeaderCarousel from "../Components/HeaderCarousel";
import { useAccount } from "../DataAPI/CTXProvider";

export default function MyAccount() {
    const {accountInfo} = useAccount();

    return (
        <div className="product-page reduced">
            <h2>Account Details</h2>
            <Row className="detail-row">
                <Col>Name:</Col>
                <Col>{accountInfo.First_Name} {accountInfo.Last_Name}</Col>
            </Row>
            <Row className="detail-row">
                <Col>Phone Number:</Col>
                <Col>{accountInfo.Phone_Number}</Col>
            </Row>
            <Row className="detail-row">
                <Col>Email:</Col>
                <Col>{accountInfo.Email}</Col>
            </Row>
            <Row className="detail-row">
                <Col>Address:</Col>
                <Col>{accountInfo.Address}</Col>
            </Row>
            <Row className="detail-row">
                <Col>Date of Birth:</Col>
                <Col>{accountInfo.Date_of_Birth.toString().split('T')[0]}</Col>
            </Row>
        </div>
    )
}