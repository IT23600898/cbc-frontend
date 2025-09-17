import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div>
      <Link to={`/productInfo/${product.productId}`}>
        <div className='flex flex-col items-center bg-white rounded-lg shadow-md p-4'>
          <img
            src={product.images[0]}
            alt={product.productName}
            className='h-40 w-40 object-cover rounded-md mb-2'
          />
          <h1 className='font-semibold text-lg'>{product.productName}</h1>
          <p className='text-gray-600 text-sm text-center'>{product.description}</p>
          <p className='text-green-600 font-bold'>Rs. {product.price}</p>
        </div>
      </Link>
    </div>
  )
}
