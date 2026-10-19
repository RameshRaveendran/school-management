import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";

const generatedClientPath: string = "../../generated/prisma/client.js";
const { PrismaClient } = await import(generatedClientPath);

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured");
}

const adapter = new PrismaPg({ connectionString });

export const prisma = new PrismaClient({ adapter });
