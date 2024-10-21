import express from "express";
import { addFood, CartList, DeleteFood, list } from "../Controllers/Controllers.js";
import multer from "multer";

const FoodRouter = express.Router();

// Multer storage configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Multer instance
const uploads = multer({ storage: storage });

// Routes
FoodRouter.post("/add", uploads.single("image"), addFood); // Handle file upload for "image"
FoodRouter.get("/list", list); // GET request for listing food items
FoodRouter.post("/remove", uploads.none(), DeleteFood); // No file upload expected
FoodRouter.post("/cart-list",CartList)

export default FoodRouter;
