import axios from "axios"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import ProductCard from "../../src/components/productCard"

export default function ProductPage() {
  const [products, setProducts] = useState([])
  const [loadingStatus, setLoadingStatus] = useState('loading') // loaded, loading, error

  useEffect(() => {
    if (loadingStatus === "loading") {
      axios.get("http://localhost:5000/api/products")
        .then((res) => {
          setProducts(res.data.List)
          setLoadingStatus('loaded')
        })
        .catch((err) => {
          console.error(err)
          toast.error("Failed to fetch products.")
          setLoadingStatus('error')
        });
    }
  }, [loadingStatus])

  return (
    <div className="w-full h-full bg-amber-50 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loadingStatus === "loading" && <p>Loading products...</p>}
      {loadingStatus === "error" && <p>Failed to load products.</p>}
      {loadingStatus === "loaded" && products.map((product) => (
        <ProductCard key={product.productId} product={product} />
      ))}
    </div>
  )
}
