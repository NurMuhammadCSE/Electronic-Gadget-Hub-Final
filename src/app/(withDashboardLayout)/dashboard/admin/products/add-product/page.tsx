/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useMemo } from "react";
import {
  Input,
  Textarea,
  Spinner,
  Button,
  Select,
  SelectItem,
} from "@nextui-org/react"; // NextUI for form components
import {
  useCreateProductMutation,
  useGetProductsQuery,
} from "@/redux/api/productApi";
import axios from "axios"; // Add axios for file uploads
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { getFromLocalStorage } from "@/utils/local-storage";

const AddProduct = () => {
  const [productData, setProductData] = useState({
    name: "",
    category: "Electronics", // Default category
    price: "",
    stock: "",
    imageUrl: "",
    description: "",
    brand: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter(); // Initialize useRouter

  // Fetch products to extract categories
  const { data: products } = useGetProductsQuery("");
  const [createProduct] = useCreateProductMutation();
  // const { token } = useAppSelector((state) => state.user);
  const token = getFromLocalStorage("accessToken");

  // Get unique categories from the product data
  const categories = useMemo(() => {
    const categorySet = new Set(
      products?.data?.map((product: any) => product.category)
    );
    return Array.from(categorySet);
  }, [products]);

  // Handle image file selection and upload
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageUpload = async (file: File) => {
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      const response = await axios.post(
        "https://api.imgbb.com/1/upload",
        formData,
        {
          params: {
            key: "68c40fc46fe61300befd1b168543a8b7", // Replace with your ImageBB API key
          },
        }
      );

      setProductData({
        ...productData,
        imageUrl: response.data.data.url, // Set the image URL from ImageBB response
      });
    } catch (error) {
      console.error("Error uploading image", error);
      toast.error("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImageFile(event.target.files[0]);
      handleImageUpload(event.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Make sure image upload is complete before submitting the form
      if (productData.imageUrl === "") {
        toast.error("Please upload an image before submitting");
        return;
      }

      // Create the product with serializable data
      const newProduct = await createProduct({
        productData: {
          name: productData.name,
          category: productData.category,
          price: productData.price,
          stock: productData.stock,
          imageUrl: productData.imageUrl,
          description: productData.description,
          brand: productData.brand,
        },
        token,
      }).unwrap();

      toast.success("Product added successfully");
      router.push("/product"); // Adjust the route as needed

      setProductData({
        name: "",
        description: "",
        price: "",
        category: "Electronics",
        brand: "",
        stock: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error creating product", error);
      toast.error("Failed to add product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-2xl">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">Add New Product</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Product Name */}
        <Input
          label="Product Name"
          placeholder="Enter product name"
          fullWidth
          value={productData.name}
          onChange={(e) =>
            setProductData({ ...productData, name: e.target.value })
          }
          required
        />
        <Input
          label="Product Brand"
          placeholder="Enter product Brand"
          fullWidth
          value={productData.brand}
          onChange={(e) =>
            setProductData({ ...productData, brand: e.target.value })
          }
          required
        />

        {/* Category */}
        <div className="mb-4">
          <Select
            label="Product Category"
            placeholder="Select Your Category"
            // className="max-w-xs"
            value={productData.category}
            onChange={(e) =>
              setProductData({
                ...productData,
                category: e.target.value,
              })
            }
          >
            {categories?.map((category: any) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Price */}
        <Input
          label="Price (USD)"
          placeholder="Enter product price"
          type="number"
          fullWidth
          value={productData.price}
          onChange={(e) =>
            setProductData({ ...productData, price: e.target.value })
          }
          required
        />

        {/* Stock */}
        <Input
          label="Stock"
          placeholder="Enter available stock"
          type="number"
          fullWidth
          value={productData.stock}
          onChange={(e) =>
            setProductData({ ...productData, stock: e.target.value })
          }
          required
        />

        {/* Image File */}
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />

        {/* Description */}
        <Textarea
          label="Product Description"
          placeholder="Enter product description"
          fullWidth
          value={productData.description}
          onChange={(e) =>
            setProductData({ ...productData, description: e.target.value })
          }
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          fullWidth
          isDisabled={loading}
          className="mt-4 bg-[#2A4460] text-white"
        >
          {loading ? <Spinner /> : "Add Product"}
        </Button>
      </form>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AddProduct), { ssr: false });
