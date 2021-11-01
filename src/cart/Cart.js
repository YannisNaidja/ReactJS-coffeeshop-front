import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Cart.css';

export function Cart(props) {
    return (
        <div id="cart">
            <ShoppingCartIcon></ShoppingCartIcon>
            <span>Cart ({props.itemCount} items)</span>
        </div>
    );
}