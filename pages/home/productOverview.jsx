import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductNotFound from "./productNotFound";
import ImageSlider from "../../src/components/imageSlider";

export default function ProductOverview() {

    const params = useParams();
    const productId = params.id;
    const [product, setProduct] = useState(null);
    const [status, setStatus] = useState("loading"); // "not-found", "found"

    useEffect(() => {
        console.log(productId);

        axios.get("http://localhost:5000/api/products/" + productId)
            .then((res) => {
                console.log(res.data);

                if (res.data.product) {
                    setProduct(res.data.product);
                    setStatus("found");
                } else {
                    setStatus("not-found");
                }
            })
            .catch((err) => {
                console.error(err);
                setStatus("not-found");
            });

    }, [productId]);

    return (
        <div className="w-full h-[calc(100vh-100px)] bg-fuchsia-300">
            {status === "loading" && (
                <div className="w-full flex items-center justify-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-2
                     border-gray-500 border-b-gray-900 border-b-4"></div>
                </div>
            )}
            {status === "not-found" && (
                <ProductNotFound/>
            )}

            {status === "found" && (
  <div className="w-full h-full flex items-start justify-start p-6 gap-8">
    {/* Product Image */}
    <div className="w-[350px]">
      <ImageSlider images={product.images}/>
    </div>

    {/* Product Details */}
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-gray-800">
        {product.productName}
      </h2>

    <p className="text-lg text-gray-500">
  <span className="font-semibold">Also Known As: </span>
  {product.alternativeName && product.alternativeName.join(" | ")}
</p>


      <p className="text-xl text-gray-600">{
      (product.price > product.lastPrice)&&
      <span className="line-through text-red-500">LKR.{product.price}</span>
      } <span>{"LKR."+product.lastPrice}</span>
      </p>


      <p className="text-gray-600 max-w-md leading-relaxed">
        {product.description}
      </p>
    </div>
  </div>
)}


        </div>
    )
}
