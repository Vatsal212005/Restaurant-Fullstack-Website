import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import reservationRouter from "./routes/reservationRoute.js";
import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./middlewares/error.js";

const app = express();
dotenv.config({ path: "./config/config.env" }); // Adjusted path to config.env

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL, // Allow requests from frontend URL
    methods: ["POST"], // Allow only POST requests
    credentials: true, // Allow sending cookies
  })
);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/v1/reservation", reservationRouter);

// Default route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello World!",
  });
});

// Database connection
dbConnection();

// Error handling middleware (must be defined last)
app.use(errorMiddleware);

export default app;
