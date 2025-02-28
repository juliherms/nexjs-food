import { getProductById } from "@/lib/get-product-by-id";
import { notFound } from "next/navigation";
import ProductHeader from "./components/product-header";
import ProductDetails from "./components/product-details";
import { getReastaurantBySlug } from "@/lib/get-restaurant-by-slug";
import { getProductWithRestaurant } from "@/lib/get-product-with-restaurant";

interface ProductPageProps {
    params: Promise<{ slug: string; productId: string }>;
}


const ProductPage = async ({ params }: ProductPageProps) => {

    const { slug, productId } = await params;

    const product = await getProductWithRestaurant(productId);

    if(!product) {
        return notFound()
    }
    
    return (
        <>
            <ProductHeader product={product} />
            <ProductDetails product={product} />
            <h1>Product Page</h1>
            {slug}
            {productId}
        </>
    )
};

export default ProductPage;