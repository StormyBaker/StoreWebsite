import { useState } from "react"
import { GetAllProductsWithImages } from "../DataAPI/Products";
import ProductCards from "../Components/ProductCards";

export default function AllProductsPage(props) {
    const [productData, setProductData] = useState();

    async function loadProductData() {
        let data = await GetAllProductsWithImages();
        setProductData(data[0]);
    }

    if (!productData) {
        loadProductData();
    }

    if (!productData) {
        return (
            <div>
                Loading product data...
            </div>
        )
    }

    return (
        <div>
            <div className="all-products-header">
                <h1>Shop by Department</h1>
            </div>
            <ProductCards data={productData} />
        </div>
    )
}