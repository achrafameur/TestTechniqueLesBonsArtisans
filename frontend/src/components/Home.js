import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productActions";
import {
  Alert,
  Button,
  CircularProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products } = productList;
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/deleteProduct/${id}`);
      setTimeout(() => {
        setShowAlert(false); // Hide the alert after a delay
        window.location.reload(); // Refresh the page
      }, 2000);
      setShowAlert(true);
    } catch (error) {
      // Handle error
      console.error("Error deleting product:", error);
    }
  };

  return (
    <>
      {loading ? (
        <CircularProgress size={100} />
      ) : (
        <Paper sx={{ width: "70%", margin: "auto" }}>
          <Button
            variant="contained"
            style={{
              marginTop: "20px",
              marginBottom: "20px",
              width: "40%",
              marginLeft: "30%",
              marginRight: "30%",
            }}
            onClick={() => navigate("/addProduct")}
          >
            Add a new Product
          </Button>
          {showAlert && (
            <Alert severity="error">Product deleted successfully!</Alert>
          )}
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell style={{ fontWeight: "bold" }}>Name</TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Type
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Price
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Rating
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Warranty Years
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Available
                  </TableCell>
                  <TableCell align="right" style={{ fontWeight: "bold" }}>
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products.map((row) => (
                  <TableRow
                    key={row._id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell align="right">{row.type}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.rating}</TableCell>
                    <TableCell align="right">{row.warranty_years}</TableCell>
                    {row.available === true ? (
                      <TableCell align="right">True</TableCell>
                    ) : (
                      <TableCell align="right">False</TableCell>
                    )}
                    <TableCell align="right">
                      <Button
                        variant="contained"
                        color="error"
                        style={{ marginRight: "20px" }}
                        onClick={() => handleDelete(row._id)}
                      >
                        Delete
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => navigate(`/updateProduct/${row._id}`)}
                      >
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      )}
    </>
  );
};

export default Home;
