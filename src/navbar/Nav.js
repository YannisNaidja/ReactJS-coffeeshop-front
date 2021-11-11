import { Col, Row } from "react-bootstrap";
import { Container } from "react-bootstrap";
import './Nav.css';
import { Cart } from "../cart/Cart";
import { Link } from "react-router-dom";

export function Nav(props) {
    return (
        <Row id="navbar">
            <Col className="d-flex justify-content-evenly" md="12">
                <div><Link to="/home">Home</Link></div>
                <div><Link to="/products">Products</Link></div>
                <div><Link to="/about">About</Link></div>
                <div><Link to="/cart"><Cart itemCount={props.itemCount}></Cart></Link></div>
            </Col>
        </Row>
    );
} 
