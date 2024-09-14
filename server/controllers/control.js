const products = require("../Schema/schema");

const getProducts = async (req, res) => {
  try {
    const product = await products.find({})
    res.status(200).json({product})
  } catch (error) {
    res.status(400).json({msg: `There was an error ${error}`})
  }
};
const getSingleProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await products.findOne({_id: id})
     if(!product){
      res.status(401).json({msg: 'Such product does not exist'})
    }
    res.status(200).json({product})
  } catch (error) {
    res.status(400).json({msg: `There was an error ${error}`})
  }
};
const createProduct = async (req, res) => {
 try {
  const product = await products.create(req.body);
  res.status(201).json({product})
 } catch (error) { 
  res.status(500).json({msg: `There was an error ${error}`})
 }
};
const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await products.findOneAndUpdate({_id: id}, req.body, {
      new: true
    }) 
     if(!product){
      res.status(401).json({msg: 'Such product does not exist'})
    }
    res.status(200).json({product})
  } catch (error) {
    res.status(400).json({msg: 'there was an error'})
  }
  
};
const deleteProduct = async (req, res) => {
  try {
    const {id} = req.params;
    const product = await products.findOneAndDelete({_id: id})
    if(!product){
      res.status(401).json({msg: 'Such product does not exist'})
    }
    res.status(200).json({product, msg: 'Successfully deleted'})
  } catch (error) {
    res.status(400).json({msg: 'there was an error'})
  }
};

module.exports = {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
