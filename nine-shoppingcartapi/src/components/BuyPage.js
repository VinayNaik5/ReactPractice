import React, {useState, useEffect } from "react";
import Axios from "axios";
import { faker} from "@faker-js/faker";
import {Container,Col,Row} from "reactstrap";
import CartItems from "./CartItems";

const apiKey = "INSERT-YOUR-KEY-HERE"
const url = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1"
const local_url= "https://myjson.dit.upm.es/api/bins/gesd"

const BuyPage = ({addInCart,addInSaveForLater}) =>{
    const [product, setProduct ] = useState([]);
    
    // const fetchPhotos = async () =>{
    //     const response = await Axios.length(url,{
    //         header : {
    //             Authorization: apiKey;
    //         }
    //     })
    // }

    const fetchPhotos = async () =>{
        const { data }  = await Axios.get(local_url)
        const photos = data["photos"];
        
        const allProducts =  photos.map( photo => ({
                smallImage: photo.src.medium,
                tinyImage: photo.src.tiny,
                productName : faker.random.word(),
                productPrice : faker.commerce.price(),
                id : faker.datatype.uuid()
                
            }));

        setProduct(allProducts);
    }

    useEffect(()=>{
        fetchPhotos()
    },[])
    
    return(
        <Container fluid>
            <h1 className="text-success text-center">Buy Page</h1>

            <Row>
                {product.map(product => (
                    <Col md='4' key={product.id}>
                        <CartItems addInCart={addInCart} product={product} addInSaveForLater={addInSaveForLater}></CartItems>
                    </Col>
                ))}
            </Row>
        </Container>
    )


}
export default BuyPage;