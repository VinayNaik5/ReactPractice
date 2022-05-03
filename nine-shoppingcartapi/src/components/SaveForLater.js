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

const SaveForLater =({savedItems,removeItemFromSaveForLater,moveToCart}) =>{
    return(
        <Container fluid>
            <h1 className="text-success">Your Saved Items</h1>
            <ListGroup>
                { savedItems.map(item => (
                   <ListGroupItem key={item.id}>
                       <Row>
                           <Col>
                                <img src={item.tinyImage} height='80'/>
                           </Col>
                           <Col className="text-center">
                           <div className="text-primary">
                                    {item.productName}
                                </div>
                                <span>Price : {item.productPrice}</span>
                               <RiDeleteBinFill md="4" onClick={()=>(removeItemFromSaveForLater(item))}></RiDeleteBinFill>
                           </Col>
                       </Row>
                   </ListGroupItem>
                ))}
            </ListGroup>

            {
                savedItems.length <= 0 ? (
                <h1 className="text-warning">No saved items</h1>
                ) : (
                    <Card>
                        <CardBody className="text-warning">
                        Total saved Items : {savedItems.length}
                        </CardBody>
                        <CardFooter>
                            <Button color="success" onClick={moveToCart}>Move to Cart</Button>
                        </CardFooter>
                    </Card>
                )
            }

        </Container>

    )
}

export default SaveForLater;