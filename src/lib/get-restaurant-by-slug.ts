import { db } from "./prisma";

export const getReastaurantBySlug = async (slug: string) => {
    const restaurant = await db.restaurant.findUnique({ where: { slug: slug} });
    //await db.restaurant.findUnique({ where: { slug } });
    return restaurant;
}