import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import weed from '../assets//img/weed.jpg';
import { Col } from "react-bootstrap";

import './Product.css';

// export function addToCart(props) {
//     let cartItemCount = props.itemCount;
//     props.setItemCount(cartItemCount++);
//     let cartItems = props.cartItems;
//     cartItems.push("product number " + props.itemCount);
//     props.setCartItems(cartItems);
// }

export function Product(props) {

    const addToCart = () => {
        let itemCount = props.itemCount;
        itemCount++;
        let cartItems = props.cartItems;
        cartItems.push({ index: itemCount, msg: "product number " + props.itemCount });
        props.setItemCount(itemCount);
        props.setCartItems(cartItems);
        props.setOpenAlert({ open: true, severity: "success", message: "Item successfully added to cart." });
    }

    const removeFromCart = (index) => {
        let itemindex = index;
        let itemCount = props.itemCount;
        itemCount--;
        let cartItems = props.cartItems;
        cartItems = cartItems.filter(item => item.index !== itemindex);
        props.setItemCount(itemCount);
        props.setCartItems(cartItems);
        props.setOpenAlert({ open: true, severity: "success", message: "Item successfully removed from cart." });
        console.log(cartItems);
    }

    return (
        <Col md={3} >
            <Card id="product-card" sx={{ maxWidth: 400 }}>
                <CardMedia
                    component="img"
                    height="194"
                    image={weed}
                    alt="weed img"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This weed is perfect to relax. It has high level of CBD and mid level of THC.
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        THC: 13%
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Price: 15$/g
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    {
                        props.cartMode ? <Button size="small">Buy</Button> :
                            <Button onClick={() => {
                                addToCart()
                            }} size="small">Add to Cart</Button>
                    }
                    { props.cartMode ? <Button onClick={() => {
                        removeFromCart(props.index)
                    }} size="small">Remove</Button> : '' }
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </Col>
    );
}