
import Icon from './component/Icon';
import { useState } from 'react';

//toastify import
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {Card, CardBody, Container, Button, Col, Row} from 'reactstrap'
//bootstrap for reactstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import { icons } from 'react-icons/lib';


const itemArray = new Array(9).fill("empty")

const App = () => {

  const [isCross, setIsCross] = useState(false);
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () =>{
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty",0,9);
  }

  const checkIsWinner = () =>{
    if (itemArray[0] === itemArray[1] && itemArray[1] ===itemArray[2] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    if (itemArray[3] === itemArray[4] && itemArray[4] ===itemArray[5] && itemArray[4]!=="empty"){
      setWinMessage(`${itemArray[3]} wins`)
    }
    if (itemArray[6] === itemArray[7] && itemArray[1] ===itemArray[8] && itemArray[8]!=="empty"){
      setWinMessage(`${itemArray[6]} wins`)
    }
    if (itemArray[0] === itemArray[3] && itemArray[6] ===itemArray[2] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    if (itemArray[1] === itemArray[4] && itemArray[1] ===itemArray[7] && itemArray[1]!=="empty"){
      setWinMessage(`${itemArray[1]} wins`)
    }
    if (itemArray[2] === itemArray[5] && itemArray[5] ===itemArray[8] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }
    if (itemArray[0] === itemArray[1] && itemArray[1] ===itemArray[2] && itemArray[1]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    if (itemArray[0] === itemArray[4] && itemArray[0] ===itemArray[8] && itemArray[0]!=="empty"){
      setWinMessage(`${itemArray[0]} wins`)
    }
    if (itemArray[2] === itemArray[4] && itemArray[2] ===itemArray[7] && itemArray[2]!=="empty"){
      setWinMessage(`${itemArray[2]} wins`)
    }
  }

  const changeItem = (itemNumber) =>{
    if (winMessage){
      return toast(winMessage,{type: "success"});
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross? "cross":"circle";
      setIsCross(!isCross);
    } else{
      return toast("Already filled",{type: "error"});
    }
    checkIsWinner();
  }

  return (
    <Container className='p-5'>
      <ToastContainer position='top-right'/>
      <Row>
        <Col md={6} className= 'offset-md-3'>
          {winMessage ? (
            <div className='mb-2 mt-2'>
              <h1 className='text-success text-uppercase text-center'>
                {winMessage} 
                <Button
                color='success'
                block
                onClick={reloadGame} 
                >Reload</Button>
              </h1>
            </div>
          ):(
            <h1 className='text-center text-warning' >
              {isCross ? "Cross" : "Circle"} truns
            </h1>
          )}
          <div className='grid'>
            {itemArray.map((item,index)=>(
              <Card onClick={() => changeItem(index) } 
              color= "warning">
                <CardBody className='box'>
                  <Icon name={item}/>
                </CardBody>
              </Card>
            ))}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
