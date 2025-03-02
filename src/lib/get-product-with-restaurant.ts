import { db } from "./prisma";

export const getProductWithRestaurant = async (id: string) => {
    const product = await db.product.findUnique({
         where: { id: id },
         include: {
            restaurant: {
                select: {
                    name: true,
                    avatarImageUrl: true,
                    slug: true,
                }
            }
         }
        });
    return product;
}