import { useState } from "react"
import { Col, Row } from "react-bootstrap";
import { GetAllProductsWithImages } from "../DataAPI/Products";
import noImage from "../Assets/no-image.jpg"
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
        <ProductCards data={productData} />
    )
}