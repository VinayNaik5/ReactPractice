import React from "react";
import {
    Card,
    CardBody,
    CardImg,
    CardText,
    CardTitle,
    Button
} from "reactstrap";

const CartItems = ({product, addInCart, addInSaveForLater}) =>{
    return (
        <Card className="mt-1 mb-2">
            <CardImg top 
                height="250"
                width="100%"
                src={product.smallImage}/>
            <CardBody className="text-center">
                <CardTitle >{product.productName}</CardTitle>
                <CardText className="secondary">Price : {product.productPrice}</CardText>
                <Button color="success" 
                        onClick={()=>{
                            addInCart(product);
                        }}>
                            Buy Now
                        </Button>
                <Button color="warning" className="ml-3"
                    onClick={()=>{
                        addInSaveForLater(product)
                    }}>Save For Later</Button>
            </CardBody>
        </Card>
    )
}

export default CartItems;