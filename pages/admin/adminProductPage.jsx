import axios from "axios";
import { useEffect, useState } from "react";
export default function AdminProductPage() {

    const [products, setProducts] = useState([
        {
            "_id": "68867a2252ffad990b806874",
            "productId": "PROD001",
            "productName": "Rose Water Toner",
            "alternativeName": [
                [
                    "Refreshing Facial Mist",
                    "Natural Toner"
                ]
            ],
            "images": [
                "https://example.com/images/rose-toner-1.jpg",
                "https://example.com/images/rose-toner-2.jpg"
            ],
            "price": 650,
            "lastPrice": 750,
            "description": "A gentle toner distilled from pure rose petals, ideal for tightening pores and balancing skin pH.",
            "__v": 0
        },
        {
            "_id": "68867a4852ffad990b806876",
            "productId": "PROD002",
            "productName": "Aloe Vera Soothing Gel",
            "alternativeName": [
                [
                    "Hydrating Aloe Gel",
                    "Skin Cooling Gel"
                ]
            ],
            "images": [
                "https://example.com/images/aloe-gel-1.jpg",
                "https://example.com/images/aloe-gel-2.jpg"
            ],
            "price": 950,
            "lastPrice": 1100,
            "description": "A multi-purpose soothing gel made from 99% pure aloe vera, perfect for calming sunburned or irritated skin.",
            "__v": 0
        },
        {
            "_id": "68867a5552ffad990b806878",
            "productId": "PROD003",
            "productName": "Vitamin C Brightening Serum",
            "alternativeName": [
                [
                    "Glow Boost Serum",
                    "Antioxidant Skin Serum"
                ]
            ],
            "images": [
                "https://example.com/images/vitamin-c-serum-1.jpg",
                "https://example.com/images/vitamin-c-serum-2.jpg"
            ],
            "price": 1890,
            "lastPrice": 2050,
            "description": "A powerful Vitamin C serum that helps reduce dark spots, brighten complexion, and improve skin elasticity.",
            "__v": 0
        }
    ])

    useEffect(() => {

        axios.get("http://localhost:5000/api/products").then(
            (res) => {
                console.log(res.data.List)
                setProducts(res.data.List)

            })
    },[])


    return (
        <div style={{ padding: "20px" }}>
            <h1>Admin Products Page</h1>


            {
                products.map(

                    (product, index) => {
                        return (


                            <div key={index}>
                                {index}
                                {product.productName}
                            </div>
                        )
                    }
                )
            }
        </div>
    )
}

