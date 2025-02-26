import { notFound } from "next/navigation";
import RestaurantHeader from "./components/header";
import RestaurantCategories from "./components/categories";
import { getCategoriesFromReastaurantBySlug } from "@/lib/get-categories-restaurant-by-slug";

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

    const restaurant = await getCategoriesFromReastaurantBySlug(slug);
    if(!restaurant) {
        return notFound();
    }

    return (
        <div>
           <RestaurantHeader restaurant={restaurant} />
           <RestaurantCategories restaurant={restaurant} />
        </div>
    )
}

export default RestaurantMenuPage;