import { getReastaurantBySlug } from "@/lib/get-restaurant-by-slug";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import RestaurantHeader from "./components/header";

interface RestaurantMenuPageProps {
    // recebo como parametro o slug e a forma de consumo
    params: Promise<{slug: string}>;
    searchParams: Promise<{consumptionMethod: string}>;
}

const isConsumptionMethodValid = (consumptionMethod: string) => {
    return ['DINE_IN', 'TAKEWAY'].includes(consumptionMethod.toUpperCase());
}

const RestaurantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
    
    const { slug } = await params
    const { consumptionMethod } = await searchParams

    if (!isConsumptionMethodValid(consumptionMethod)) {
        return notFound();
    }

    const restaurant = await getReastaurantBySlug(slug);
    if(!restaurant) {
        return notFound();
    }

    return (
        <div>
           <RestaurantHeader restaurant={restaurant} />
        </div>
    )
}

export default RestaurantMenuPage;