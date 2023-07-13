const Product = require("../models/product");

const addProduit = async (req, res) => {
  try {
    const { name, type, price, rating, warranty_years, available } = req.body;
    const newProduit = new Product({
      name,
      type,
      price,
      rating,
      warranty_years,
      available,
    });
    const savedProduit = await newProduit.save();
    res.json(savedProduit);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

const deleteProduit = async (req, res) => {
  try {
    const deletedProduit = await Product.findByIdAndDelete(req.params.id);
    res.json(deletedProduit);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

const getAllProduits = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

const getOneProduct = async (req, res) => {
  try {
    const selectedProduct = await Product.findById(req.params.id);
    res.json({ selectedProduct });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

const updateProduit = async (req, res) => {
  try {
    const updatedProduit = await Product.findByIdAndUpdate(req.params.id, {
      ...req.body,
    });
    res.json(updatedProduit);
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message }] });
  }
};

module.exports = {
  addProduit,
  deleteProduit,
  getAllProduits,
  updateProduit,
  getOneProduct,
};
