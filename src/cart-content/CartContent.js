import { Row, Container } from "react-bootstrap";
import { Product } from "../product/Product";
import Button from '@mui/material/Button';
import './CartContent.css';

export function CartContent(props) {
  const products = props.cartItems.map((item) => {
    return (
      <Product cartItems={props.cartItems} setCartItems={props.setCartItems} openAlert={props.openAlert} setOpenAlert={props.setOpenAlert}
        itemCount={props.itemCount} setItemCount={props.setItemCount} cartMode={true} key={item.index} index={item.index}></Product>
    )
  })
  return (
    <Container>
      {
        props.cartItems.length > 0 ? <Button id="cart-content-button" className='mb-4' variant="contained">Checkout</Button> : ''
      }
      <Row>
        {products}
      </Row>
    </Container>
  );
}