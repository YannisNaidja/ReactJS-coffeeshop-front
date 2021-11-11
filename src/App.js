import './App.css';
import { Nav } from './navbar/Nav';
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { ProductList } from './product-list/Product-list';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { CartContent } from './cart-content/CartContent';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';
import { ProductFilter } from './product-filter/Product-filter';
import { CarouselCustom } from './carousel/CarouselCustom';
import { Divider } from '@mui/material';
import statueRight from './assets/img/woman-statue-right.png';
import statueLeft from './assets/img/caesar-statue-left.png';
import crown from './assets/img/crown-640.png';
import SwitchMUI from '@mui/material/Switch';


function App() {
  const [itemCount, setItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [openAlert, setOpenAlert] = useState({
    open: false,
    severity: "success",
    message: ""
  });
  const [checked, setChecked] = useState(true);
  const handleChange = (event) => {
    setChecked(event.target.checked);
    const element = document.body;
    if(checked){
      element.classList.remove("light-mode");
      element.classList.toggle("dark-mode");
    }else{
      element.classList.remove("dark-mode");
      element.classList.toggle("light-mode");
    }
  };
  return (
    <div>
      <Row>
        <SwitchMUI
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </Row>
      <Row id="title-row" className='mb-4'>
        <div className='centered-img-wrap'>
          <img src={crown}></img>
        </div>

      </Row>
      <BrowserRouter>
        <Nav itemCount={itemCount}></Nav>
        <Row>
          <Col className="d-flex justify-content-center" md={2}>
            <img id="img-side" src={statueLeft}></img>
          </Col>
          <Col md={8}>
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
          </Col>
          <Col className="d-flex justify-content-center" md={2}>
            <img id="img-side" src={statueRight}></img>
          </Col>
        </Row>

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
    </div>
  );
}
export default App;
