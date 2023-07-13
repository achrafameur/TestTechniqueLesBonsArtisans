const router = require("express").Router();
const productController = require("../controllers/productController");

router.post("/addProduct", productController.addProduit);
router.delete("/deleteProduct/:id", productController.deleteProduit);
router.put("/updateProduct/:id", productController.updateProduit);
router.get("/getAllProducts", productController.getAllProduits);
router.get("/getOneProduct/:id", productController.getOneProduct);

module.exports = router;
