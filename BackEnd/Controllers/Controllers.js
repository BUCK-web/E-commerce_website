import FoodModel from "../models/FoodModel.js";
import fs from "fs";

// Add Fooditems

const addFood = async (req, res) => {
    try {
        if (!req.file || !req.file.filename) {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }

        const fileName = req.file.filename;

        await FoodModel.create({
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            description: req.body.description,
            image: fileName, // Make sure the field name matches your Mongoose schema
        });

        res.json({ success: true, message: "Data saved successfully" });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ success: false, message: "Error in saving data" });
    }
};


const list = async (req, res) => {
  try {
    const Data = await FoodModel.find({});
    res.json({ data: Data });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Error in fetching data" });
  }
};

const DeleteFood = async (req, res) => {
  try {
    const { id } = req.body;
    const DeletedFood = await FoodModel.findById(id);
    fs.unlink(`uploads/${DeletedFood.image}`, () => {});
    await FoodModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Data deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: "Error in deleting data" });
  }
};

const CartList = async (req, res) => {
  res.json("hello world")
}

export { addFood, list, DeleteFood,CartList };
