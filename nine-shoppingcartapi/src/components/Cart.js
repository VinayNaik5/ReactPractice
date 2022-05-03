import React from "react";
import {
    Container,
    ListGroup,
    ListGroupItem,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardFooter,
    Row,
    Col
} from "reactstrap";

import {RiDeleteBinFill} from "react-icons/ri";

//condiotional rendering 


const Cart = ({cartItem,removeItem,buyNow}) =>{
    let totalAmount=0;
    cartItem.forEach(item => {
        totalAmount+= parseFloat(item.productPrice)
    });

    return(
        <Container fluid>
            <h1 className="text-success">Your Cart</h1>
            <ListGroup>
                {cartItem.map(item =>(
                    <ListGroupItem key={item.id}>
                        <Row>
                            <Col>
                                <img height="80" src={item.tinyImage}/>
                            </Col>
                            <Col className="text-center">
                                <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price : {item.productPrice}</span>
                               <RiDeleteBinFill md="4" onClick={()=>(removeItem(item))}></RiDeleteBinFill>
                            </Col>
                        </Row>
                    </ListGroupItem>
                ))}
            </ListGroup>
    {/* if everthing us empty */}
            {
                 cartItem.length >= 1 ? (
                     <Card className="text-center mt-3">
                         <CardHeader>
                             Grand total
                         </CardHeader>
                         <CardBody>
                             Your amount for {cartItem.length} product is :  {totalAmount}
                         </CardBody>
                         <CardFooter>
                             <Button color="success" onClick={buyNow}>Pay here</Button>
                         </CardFooter>
                     </Card>
                 ): (
                    <h1 className="text-warning">Cart is Empty</h1>
                )
            }
              
        </Container>

    )
}

export default Cart;