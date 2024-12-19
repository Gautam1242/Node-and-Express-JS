const Product = require("../models/ProductModel");

//business logic

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    if (!products || products.length === 0) {
      res.json({
        succees: true,
        message: "There is no product available",
      });
    }
    res.status(200).json({
      succees: true,
      product: products,
    });
  } catch (error) {
    res.status(500).json({
      succees: false,
      message: "Internal Server Error",
    });
  }
};

const addProducts = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    const newProduct = new Product({ name, price, description, category });
    await newProduct.save();
    res.status(200).json({
      succees: true,
      product: newProduct,
    });
  } catch (error) {
    res.status(500).json({
      succees: false,
      message: "Internal Server Error",
    });
  }
};

const updateProducts = async (req, res) => {
  try {
    console.log("Update request aayi");
    const { id } = req.params;
    console.log(id);
    const { name, price, description, category } = req.body;
    const updatedProduct =await Product.findByIdAndUpdate(
       id ,
      { name, price, description, category },
      { new: true }
    );

    if (!updatedProduct) {
      res.status(200).json({
        message: "Product Not Found"
      });
    }
    res.status(200).json({
      succees: true,
      product: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      succees: false,
      message: "Internal Server Error",
    });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      res.json({
        message: "Product Not Found"
      });
    }
    res.status(200).json({
      succees: true,
      product: deletedProduct,
    });
  } catch (error) {
    res.status(500).json({
      succees: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = { getProducts, addProducts, updateProducts, deleteProduct };
