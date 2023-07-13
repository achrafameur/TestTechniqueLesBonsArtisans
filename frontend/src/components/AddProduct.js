import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../actions/productActions";
import {
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    type: "",
    price: "0",
    rating: "0",
    warranty_years: "",
    available: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct(product));
    navigate("/");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: checked,
    }));
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Typography variant="h1" style={{ textAlign: "center" }}>
        Product Addition Form
      </Typography>
      <form
        style={{ marginTop: "40px", width: "70%", margin: "auto" }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          label="Name"
          placeholder="Enter Product Name"
          name="name"
          value={product.name}
          onChange={handleInputChange}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          fullWidth
          label="Type"
          placeholder="Enter Product Type"
          name="type"
          value={product.type}
          onChange={handleInputChange}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          fullWidth
          label="Price"
          type="number"
          placeholder="Enter Price"
          name="price"
          value={product.price}
          onChange={handleInputChange}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          fullWidth
          label="Rating"
          type="number"
          placeholder="Enter Rating"
          name="rating"
          value={product.rating}
          onChange={handleInputChange}
          style={{ marginBottom: "20px" }}
          inputProps={{
            max: 5,
          }}
        />

        <TextField
          fullWidth
          label="Warranty Years"
          type="number"
          placeholder="Enter Warranty Years"
          name="warranty_years"
          value={product.warranty_years}
          onChange={handleInputChange}
          style={{ marginBottom: "20px" }}
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={product.available}
              onChange={handleCheckboxChange}
              name="available"
              color="primary"
            />
          }
          label="Available"
          style={{ marginBottom: "20px" }}
        />
        <br></br>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ width: "150px", marginBottom: "20px" }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default AddProduct;
