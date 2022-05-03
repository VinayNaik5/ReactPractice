import logo from './logo.svg';

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import './App.css';
import { useState } from 'react';
import { Container, Row,Col } from 'reactstrap';
import { toast,ToastContainer } from 'react-toastify';
import BuyPage from './components/BuyPage';
import Cart from "./components/Cart";
import SaveForLater from './components/SaveForLater';


function App() {

  const [cartItem, setCartItem] = useState([]);
  const [saveForLater, setSaveForLater] = useState([]);

  const addInCart = (item) => {
    const isAlreadyAdded = cartItem.findIndex(function (array){
      return array.id === item.id
    })

    if (isAlreadyAdded !== -1){
      toast('Already added in cart',{type: "error"})
    }
    else
      setCartItem([...cartItem,item])
  }

  const buyNow = () =>{
    setCartItem([]);
    toast("Purchase complete",{type:"success"})
  }

  const removeItem = (item) =>{
    setCartItem( cartItem.filter( cartItem =>cartItem.id !== item.id));
  }


  //Save for later 
  const addSaveForLater = (item) => {
    const isAlreadyAdded = saveForLater.findIndex(function (array){
      return array.id === item.id
    })

    if (isAlreadyAdded !== -1){
      toast('Already Saved for later',{type: "error"})
    }
    else
      setSaveForLater([...saveForLater,item])
  }

  const moveToCart = () =>{
    setCartItem([...cartItem,...saveForLater]);
    setSaveForLater([]);
    toast("Moved all saved item to cart",{type:"success"})
  }

  const removeItemFromSaveForLater = (item) =>{
    setCartItem( saveForLater.filter( savedItem =>savedItem.id !== item.id));
  }


  return (
    <div className="App">
      <Container fluid>
        <ToastContainer />
        <Row>
          <Col md="8"><BuyPage addInCart={addInCart} addInSaveForLater={addSaveForLater}/></Col>
          <Col md="4">
            <Cart cartItem={cartItem} buyNow={buyNow} removeItem={removeItem}/>
            <SaveForLater savedItems={saveForLater} moveToCart={moveToCart} removeItemFromSaveForLater={removeItemFromSaveForLater}/>
  
          </Col>
        </Row>
      </Container>
     
    </div>
  );
}

export default App;
