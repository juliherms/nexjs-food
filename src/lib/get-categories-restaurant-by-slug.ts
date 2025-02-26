import { db } from "./prisma";

export const getCategoriesFromReastaurantBySlug = async (slug: string) => {
    const restaurant = await db.restaurant.findUnique({
         where: { slug: slug},
          include: { 
            menuCategory: {
                include: { products: true}
            },
          },
    });
    
    return restaurant;
}