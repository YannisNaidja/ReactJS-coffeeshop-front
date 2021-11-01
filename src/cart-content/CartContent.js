import { Row } from "react-bootstrap";
import { Product } from "../product/Product";

export function CartContent (props) {
    const products = props.cartItems.map((item) => {
        return (
          <Product key={item.index}></Product>
        )
      })
    return (
        <Row>
            {products}
        </Row>
    );
}