import "dotenv/config";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import authRoutes from "./routes/auth.routes";

const app = express();

// Initialize Prisma with adapter
const pool = new Pool({
  connectionString: process.env.DIRECT_URL ?? process.env.DATABASE_URL,
});
const adapter = new PrismaPg(pool);
export const prisma = new PrismaClient({ adapter });

app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL ?? "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.get("/health", async (_req, res) => {
  try {
    // Test database connection
    await prisma.$queryRaw`SELECT 1`;
    res.json({
      status: "ok",
      service: "glorious-labs-backend",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      service: "glorious-labs-backend",
      database: "disconnected",
      timestamp: new Date().toISOString(),
    });
  }
});

const port = Number(process.env.PORT ?? 5000);
app.listen(port, () => {
  console.log(`✅ Backend running on http://localhost:${port}`);
  console.log(`📊 Database: Connected to Supabase PostgreSQL`);
  console.log(`🔍 Health check: http://localhost:${port}/health`);
  console.log(`🔐 Auth routes: http://localhost:${port}/api/auth`);
});
