import { getProductById } from "@/lib/get-product-by-id";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";

interface ProductPageProps {
    params: Promise<{ slug: String; productId: string }>;
}


const ProductPage = async ({ params }: ProductPageProps) => {

    const { slug, productId } = await params;

    const product = await getProductById(productId);
    if(!product) {
        return notFound()
    }
    
    return (
        <>
            <div className="relative h-[300px] w-full">
                {/* Cria o botao superior da esquerda */}
                <Button
                    variant="secondary"
                    size="icon"
                    className="absolute left-4 top-4 z-50 rounded-full">
                    <ChevronLeftIcon />
                </Button>
                {/* Cria o botao superior da direita */}    
                <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full">
                    <ScrollTextIcon />
                </Button>
                <Image 
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain" />
            </div>
            <h1>Product Page</h1>
            {slug}
            {productId}
        </>
    )
};

export default ProductPage;