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

    if (product.restaurant.slug.toLocaleUpperCase() != slug.toUpperCase()) {
        return notFound()
    }
    
    return (
        <div className="flex h-full flex-col">
            <ProductHeader product={product} />
            <ProductDetails product={product} />
        </div>
    )
};

export default ProductPage;