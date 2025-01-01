import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const UpdateProduct = ({ closeEditModal, id }) => {
  const [productData, setProductData] = useState({
    ProductName: "",
    ProductBrand: "",
    ProductDescription: "",
    Sizes: [],
    CategoryId: null,
    ProductPrice: 0,
    MRP: 0,
    Stock: 0,
  });

  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const token = localStorage.getItem('authToken');

  useEffect(() => {
    if (!id) {
      setError("Invalid product ID.");
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://localhost:7260/api/Product/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const product = response.data;

        setProductData({
          ProductName: product.ProductName,
          ProductBrand: product.ProductBrand,
          ProductDescription: product.ProductDescription,
          Sizes: product.Sizes || [],
          CategoryId: product.CategoryId,
          ProductPrice: product.ProductPrice,
          MRP: product.MRP,
          Stock: product.Stock,
        });
      } catch (error) {
        setError("Failed to fetch product details.");
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id, token]);


  const addData = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: name === 'CategoryId' ? Number(value) : value,
    }));
  };


  const handleSizeChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setProductData((prevData) => ({
      ...prevData,
      Sizes: prevData.Sizes.includes(value)
        ? prevData.Sizes.filter((size) => size !== value)
        : [...prevData.Sizes, value],
    }));
  };

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const validate = () => {
    if (
      !productData.ProductName.trim() ||
      !productData.ProductBrand.trim() ||
      !productData.ProductDescription.trim() ||
      !productData.CategoryId ||
      !productData.ProductPrice ||
      !productData.MRP ||
      !productData.Stock ||
      productData.Sizes.length === 0 ||
      images.length === 0
    ) {
      setError("All fields are required.");
      return false;
    }

    if (parseFloat(productData.ProductPrice) > parseFloat(productData.MRP)) {
      setError("Product price must not be greater than MRP.");
      return false;
    }

    if (productData.Stock < 0 || productData.MRP < 0 || productData.ProductPrice < 0) {
      setError("Values for stock, MRP, and price must be positive.");
      return false;
    }

    setError("");
    return true;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const formData = new FormData();
    formData.append("ProductName", productData.ProductName);
    formData.append("ProductBrand", productData.ProductBrand);
    formData.append("ProductDescription", productData.ProductDescription);
    formData.append("CategoryId", productData.CategoryId);
    formData.append("ProductPrice", productData.ProductPrice);
    formData.append("Stock", productData.Stock);
    formData.append("MRP", productData.MRP);

    productData.Sizes.forEach((size) => formData.append("Sizes[]", size));
    Array.from(images).forEach((file) => formData.append("images", file));

    try {
      const response = await axios.put(
        `https://localhost:7260/api/Product/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 200) {
        toast.success("Product updated successfully!");
        closeEditModal(); // Close the modal after success
      }
    } catch (error) {
      setError("Failed to update product. Please try again.");
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg w-[80%] h-[32rem] overflow-scroll">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="text-lg font-semibold">Edit Product</h3>
          <button onClick={closeEditModal} className="text-gray-600 hover:text-gray-800">
            &times;
          </button>
        </div>

        <div className="p-4">
          {error && <div className="alert alert-danger mb-4">{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Name</label>
              <input
                type="text"
                name="ProductName"
                value={productData.ProductName}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter product name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Brand</label>
              <input
                type="text"
                name="ProductBrand"
                value={productData.ProductBrand}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter product brand"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Description</label>
              <textarea
                name="ProductDescription"
                value={productData.ProductDescription}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter product description"
                required
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Sizes</label>
              <select
                multiple
                className="form-select w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                onChange={handleSizeChange}
                value={productData.Sizes}
                required
              >
                {[16, 17, 18, 19, 20, 21, 22, 23, 34, 35, 36, 27, 28, 29, 30, 38, 40, 42, 44, 46, 48].map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Category ID</label>
              <input
                type="number"
                name="CategoryId"
                value={productData.CategoryId}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter category ID"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
              <input
                type="number"
                name="Stock"
                value={productData.Stock}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter stock quantity"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Price</label>
              <input
                type="number"
                name="ProductPrice"
                value={productData.ProductPrice}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter product price"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">MRP</label>
              <input
                type="number"
                name="MRP"
                value={productData.MRP}
                onChange={addData}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter MRP"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Product Images</label>
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

      <div className="flex justify-end px-4 py-2 border-t">
              <button
                type="button"
                onClick={closeEditModal}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 mr-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;
