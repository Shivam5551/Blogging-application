import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

export const getPrismaClient = (databaseUrl?: string) => {
    return new PrismaClient({
        datasourceUrl: databaseUrl
    }).$extends(withAccelerate());
};