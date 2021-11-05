import './App.css';
import { Nav } from './navbar/Nav';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { ProductList } from './product-list/Product-list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { CartContent } from './cart-content/CartContent';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { ProductFilter } from './product-filter/Product-filter';
import { CarouselCustom } from './carousel/CarouselCustom';
import { Divider } from '@mui/material';


function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });
  return (
    <Container>
      <Row className='mb-4'>
        <h1 id="app-title">Crixus Coffee Shop</h1>
      </Row>
      <BrowserRouter>
        <Nav itemCount={itemCount}></Nav>
        <Switch>
          <Route path="/home">
            <div id='carousel-container'>
              <CarouselCustom></CarouselCustom>
            </div>
          </Route>
          <Route path="/products">
            <ProductFilter></ProductFilter>
            <ProductList openAlert={openAlert} setOpenAlert={setOpenAlert} cartItems={cartItems} setCartItems={setCartItems}
              itemCount={itemCount} setItemCount={setItemCount}></ProductList>
          </Route>
          <Route path="/about">
            <h2>About us</h2>
          </Route>
          <Route path="/cart">
            <h2>Your Cart</h2>
            <Divider id="app-divider" className="mt-2 mb-2"></Divider>
            <CartContent openAlert={openAlert} setOpenAlert={setOpenAlert} cartItems={cartItems} setCartItems={setCartItems}
              itemCount={itemCount} setItemCount={setItemCount}></CartContent>
          </Route>
        </Switch>
      </BrowserRouter>
      <Snackbar
        onClose={() => { setOpenAlert({ ...openAlert, open: false }); }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={openAlert.open}
        autoHideDuration={2000}
        message={openAlert.message}
      >
        <Alert severity={openAlert.severity} sx={{ width: '100%' }}>
          {openAlert.message}
        </Alert>
      </Snackbar>
    </Container>
  );
}
export default App;
