import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateProduct } from "../actions/productActions";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState();

  useEffect(() => {
    // Fetch product data from the API using the provided ID
    fetch(`http://localhost:5000/api/getOneProduct/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data.selectedProduct); // Set the retrieved product data in the state
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, product)); // Dispatch the updateProduct action with the ID and updated product data
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
    <>
      {!product ? (
        <CircularProgress size={100} />
      ) : (
        <div style={{ marginTop: "20px" }}>
          <Typography variant="h1" style={{ textAlign: "center" }}>
            Product Update Form
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
            <br />
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ width: "150px", marginBottom: "20px" }}
            >
              Update
            </Button>
          </form>
        </div>
      )}
    </>
  );
};

export default UpdateProduct;
