import ProductModel from "./product.schema.js";

export const addNewProductRepo = async (product) => {
  return await new ProductModel(product).save();
};

export const getAllProductsRepo = async (body) => {
  const filter = {}
  const { keyword, category, rating } = body;
  if (keyword) {
    filter.name = keyword;
  }
  if (category) {
    filter.category = category;
  }
  if (rating && rating.gte !== undefined) {
    filter.rating = { $gte: parseInt(rating.gte) };
  }
  if (rating && rating.lte !== undefined) {
    filter.rating = { ...filter.rating, $lte: parseInt(rating.lte) };
  }

  console.log(filter)
  return await ProductModel.find(filter);
};

export const updateProductRepo = async (_id, updatedData) => {
  return await ProductModel.findByIdAndUpdate(_id, updatedData, {
    new: true,
    runValidators: true,
    useFindAndModify: true,
  });
};

export const deleProductRepo = async (_id) => {
  return await ProductModel.findByIdAndDelete(_id);
};

export const getProductDetailsRepo = async (_id) => {
  return await ProductModel.findById(_id);
};

export const getTotalCountsOfProduct = async () => {
  return await ProductModel.countDocuments();
};

export const findProductRepo = async (productId) => {
  return await ProductModel.findById(productId);
};
