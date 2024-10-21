import React, { useState } from "react";
import "./AddProduct.css";
import { assets } from "../../admin_assets/assets";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [image, setImage] = useState(null);


  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Create FormData object
    const formData = new FormData();
    formData.append('image', image);  // Append image file
    formData.append('name', e.target.productName.value);
    formData.append('description', e.target.productDescription.value);
    formData.append('category', e.target.productCategory.value);
    formData.append('price', e.target.productPrice.value);
  
    try {
      const response = await axios.post("http://localhost:5000/api/food/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (response.data.success) {
        e.target.reset();
        setImage(null)
        toast.success("Data saved successfully!");
        console.log("ok");
      } else {
        console.log("Not Ok");
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };
  

  return (
    <div>
      <div className="add">
        <form className="flex-col" onSubmit={handleSubmit}>
          <div className="add-image-upload">
            <p>Upload Image</p>
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
                style={{ cursor: "pointer" }}
                className="img"
              />
              <input
                type="file"
                name="image"
                id="image"
                hidden
                required
                onChange={handleImageChange}
              />
            </label>
          </div>
          <div className="product-name">
            <p>Product-Name</p>
            <input
              type="text"
              name="productName"
              placeholder="Product Name Here"
              required
            />
          </div>
          <div className="product-description">
            <p>Product-Description</p>
            <textarea
              name="productDescription"
              placeholder="Product Description Here"
              rows="10"
              required
            />
          </div>
          <div className="flex-row">
            <div className="product-category">
              <p>Product-Category</p>
              <select name="productCategory" required>
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Deserts">Deserts</option>
                <option value="Sandwich">Sandwich</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>
            <div className="product-price">
              <p>Product-Price</p>
              <input
                type="number"
                name="productPrice"
                placeholder="Product Price Here"
                required
              />
            </div>
          </div>
          <button type="submit">ADD</button>
        </form>
      </div>
      <ToastContainer position="top-right" draggable pauseOnHover  autoClose={5000} newestOnTop={true}/>
    </div>
  );
};

export default AddProduct;
