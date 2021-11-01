import { Container, Row } from "react-bootstrap";
import { Product } from "../product/Product";
import './Product-list.css';

export function ProductList(props) {
    return (
        <Container className="mt-4 d-flex justify-content-center">
            <Row id="product-list">
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
                    <Product openAlert={props.openAlert} setOpenAlert={props.setOpenAlert} cartItems={props.cartItems} setCartItems={props.setCartItems} itemCount={props.itemCount} setItemCount={props.setItemCount}></Product>
            </Row>
        </Container>

    );
}