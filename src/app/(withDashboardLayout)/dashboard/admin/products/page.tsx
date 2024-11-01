/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Select,
  SelectItem,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
} from "@nextui-org/react";
import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useUpdateProductMutation,
} from "@/redux/api/productApi";
import { Edit, Trash } from "lucide-react"; // lucide-react icons
import { toast } from "sonner";
import { useAppSelector } from "@/redux/hooks";
import Swal from "sweetalert2";
import axios from "axios";
import Image from "next/image";
import LoadingPage from "@/app/loading";
import dynamic from "next/dynamic";
import { getFromLocalStorage } from "@/utils/local-storage";

const AdminProductsTable: React.FC = () => {
  const { data: productsData, isLoading, error } = useGetProductsQuery("");
  const [deleteProduct] = useDeleteProductMutation();
  // const { token } = useAppSelector((state) => state.user);
  const token = getFromLocalStorage("accessToken");

  const [updateProduct] = useUpdateProductMutation();

  // State for modal
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<any>(null);
  const [editedProduct, setEditedProduct] = useState<any>({});
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(
    null
  );

  const { data: products } = useGetProductsQuery("");

  // Get unique categories from the product data
  const categories = useMemo(() => {
    const categorySet = new Set(
      products?.data?.map((product: any) => product.category)
    );
    return Array.from(categorySet);
  }, [products]);

  // Handle Edit product - Open the modal with pre-filled product data
  const handleEditProduct = (product: any) => {
    setCurrentProduct(product);
    setEditedProduct(product); // Pre-fill the form with current product details
    setImagePreview(product.imageUrl); // Set image preview
    setIsEditModalOpen(true); // Open modal
  };

  // Handle Image File Change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Image Upload
  const handleImageUpload = async () => {
    if (imageFile) {
      try {
        const formData = new FormData();
        formData.append("image", imageFile);

        const response = await axios.post(
          "https://api.imgbb.com/1/upload",
          formData,
          {
            params: {
              key: "68c40fc46fe61300befd1b168543a8b7",
            },
          }
        );
        return response.data.data.url; // Return image URL from ImageBB response
      } catch (error) {
        console.error("Error uploading image", error);
        toast.error("Error uploading image");
        return null;
      }
    }
    return null;
  };

  // Handle Update Product
  const handleUpdateProduct = async () => {
    try {
      let imageUrl = currentProduct.imageUrl; // Default to current image URL if no new image is provided

      // Upload image if a new image is selected
      if (imageFile) {
        imageUrl = await handleImageUpload();
      }

      const updatedProduct = {
        ...editedProduct,
        imageUrl, // Use the updated image URL
      };
      // console.log(updatedProduct)
      // Update product via the mutation
      await updateProduct({
        productId: currentProduct._id,
        token,
        updatedProduct,
      }).unwrap(); // Ensure the mutation is awaited

      toast.success("Product updated successfully");
      setIsEditModalOpen(false); // Close modal after success
    } catch (error) {
      toast.error("Error updating product");
    }
  };

  // Handle Delete Product
  const handleDeleteProduct = async (productId: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProduct({ productId, token });
          toast.success("Product deleted successfully");
          Swal.fire("Deleted!", "The product has been deleted.", "success");
        } catch (error) {
          toast.error("Error deleting the product");
          Swal.fire(
            "Error!",
            "There was a problem deleting the product.",
            "error"
          );
        }
      }
    });
  };

  if (isLoading)
    return (
      <p>
        <LoadingPage></LoadingPage>
      </p>
    );
  if (error) return <p>Error loading products</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-3">
        Product Management
      </h1>

      <Table
        aria-label="Product Management Table"
        className="shadow-lg rounded-lg bg-white"
      >
        <TableHeader>
          <TableColumn>Product</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Stock</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {productsData?.data?.map((product: any) => (
            <TableRow key={product._id}>
              <TableCell>
                <div className="flex items-center">
                  <Image
                    height={500}
                    width={500}
                    src={`${product.imageUrl}`}
                    alt={product.name}
                    className="w-10 h-10 object-cover rounded-md mr-4"
                  />
                  <span className="font-medium">{product.name}</span>
                </div>
              </TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>
                <span
                  className={`py-1 px-3 rounded-full text-xs font-semibold ${
                    product.stock > 0
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `${product.stock} in stock`
                    : "Out of stock"}
                </span>
              </TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  {/* Edit Button */}
                  <button
                    className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
                    onClick={() => handleEditProduct(product)}
                  >
                    <Edit className="w-5 h-5" />
                  </button>
                  {/* Delete Button */}
                  <button
                    className="text-red-600 hover:text-red-800 transition-colors duration-200"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    <Trash className="w-5 h-5" />
                  </button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Edit Product Modal */}
      <Modal
        isOpen={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        placement="top-center"
      >
        <ModalContent>
          <ModalHeader>Edit Product</ModalHeader>
          <ModalBody>
            {/* Product Image Preview */}
            {imagePreview && (
              <div className="mb-4">
                <img
                  src={imagePreview as string}
                  alt="Product Preview"
                  className="w-24 h-24 object-cover rounded-md"
                />
              </div>
            )}
            <Input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="mb-4"
            />
            <Input
              label="Product Name"
              value={editedProduct.name || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, name: e.target.value })
              }
              className="mb-4"
            />
            <div className="mb-4">
              <Select
                label="Category"
                placeholder="Select a category"
                className="max-w-xs"
                value={editedProduct.category || ""}
                onChange={(value) =>
                  setEditedProduct({
                    ...editedProduct,
                    category: value,
                  })
                }
              >
                {categories?.map((category: any, index) => (
                  <SelectItem key={index}>{category}</SelectItem>
                ))}
              </Select>
            </div>
            <Input
              label="Price"
              type="number"
              value={editedProduct.price || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, price: e.target.value })
              }
              className="mb-4"
            />
            <Input
              label="Brand"
              value={editedProduct.brand || ""}
              onChange={(e) =>
                setEditedProduct({ ...editedProduct, brand: e.target.value })
              }
              className="mb-4"
            />
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              variant="flat"
              onClick={() => setIsEditModalOpen(false)}
            >
              Cancel
            </Button>
            <Button color="primary" onClick={handleUpdateProduct}>
              Save Changes
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default dynamic(() => Promise.resolve(AdminProductsTable), {
  ssr: false,
});
