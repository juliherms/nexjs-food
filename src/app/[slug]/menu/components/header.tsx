"use client"

import { Button } from "@/components/ui/button"
import { Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"
import Image from "next/image";
import { useRouter } from "next/navigation";

// recebe um objeto Restaurant como parametro e extrai os atributos relevantes
interface RestaurantHeaderProps {
    restaurant: Pick<Restaurant, 'name' | 'coverImageUrl'>;
}


const RestaurantHeader = ({restaurant}: RestaurantHeaderProps) => {

    const router = useRouter()
    const handleBackClick = () => router.back()

    return (
        <div className="relative h-[250px] w-full">
            {/* Cria o botao superior da esquerda */}
            <Button
                variant="secondary"
                size="icon"
                className="absolute left-4 top-4 z-50 rounded-full"
                onClick={handleBackClick}>
                <ChevronLeftIcon />
            </Button>
            <Image
                src={restaurant.coverImageUrl}
                alt={restaurant.name}
                fill
                className="object-cover" />
            {/* Cria o botao superior da direita */}    
            <Button variant="secondary" size="icon" className="absolute right-4 top-4 z-50 rounded-full">
                <ScrollTextIcon />
            </Button>
        </div>
    )
}

export default RestaurantHeader;