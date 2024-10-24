import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { addProduct } from "../redux/productSlice";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import Table from "../components/Table";
import { validateFormData } from "../utils/addProductForm";
import { getInvoice } from "../api/invoice";

interface FormData {
  name: string;
  quantity: string;
  price: string;
  total_price: string;
}

export default function AddProduct() {
  const dispatch = useDispatch();

  const products = useSelector((state: RootState) => state.products.products);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    price: "",
    quantity: "",
    total_price: "",
  });
  const [errors, setErrors] = useState({ name: "", price: "", quantity: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddProduct = (
    e: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    // Validate form data using the utility function
    const validationErrors = validateFormData(formData);
    setErrors(validationErrors);

    if (
      validationErrors.name ||
      validationErrors.price ||
      validationErrors.quantity
    ) {
      console.log("Validation failed.");
      return;
    }

    dispatch(
      addProduct({
        ...formData,
        price: parseFloat(formData.price), // Convert price to number
        quantity: parseInt(formData.quantity), // Convert quantity to number
        total_price: parseInt(formData.quantity) * parseInt(formData.price),
      })
    );

    // Clear the form after submission (optional)
    setFormData({
      name: "",
      price: "",
      quantity: "",
      total_price: "",
    });
  };

  const handleGeneratePDF = async () => {
    try {
      console.log("Generating PDF...");

      await getInvoice(products);

      console.log("PDF Generated successfully");
    } catch (error) {
      console.error("Error generating PDF", error);
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-start px-8 lg:px-[140px] py-8 lg:py-[54px] lg:gap-x-36 gap-y-8 lg:gap-y-4 ">
      <div className="w-4/5">
        <h3 className="font-bold tracking-wide text-textPrimary mb-2 md:text-3xl lg:text-4xl">
          Add Products
        </h3>
        <h6 className="text-lg font-normal text-textSecondary ">
          This is basic signup page which is used for levitation assignment
          purpose.
        </h6>
      </div>

      <form onSubmit={handleAddProduct} className="min-w-full">
        <div className="flex w-full gap-x-8">
          <InputField
            title="Product Name"
            placeholder="Enter the product name"
            name="name"
            type="text"
            value={formData.name}
            handleChangeText={handleChange}
            errorMsg={errors.name}
          />
          <InputField
            title="Product Price"
            placeholder="Enter the price"
            name="price"
            type="number"
            value={formData.price}
            handleChangeText={handleChange}
            otherStyles="selector:none"
            errorMsg={errors.price}
          />
          <InputField
            title="Quantity"
            placeholder="Enter the Qty"
            name="quantity"
            type="number"
            value={formData.quantity}
            handleChangeText={handleChange}
            errorMsg={errors.quantity}
          />
        </div>
        <div className="mt-4">
          <CustomButton
            title="Add Product"
            otherStyles="text-base text-button-primary bg-button-secondary h-[48px] px-[19.5px]"
            handlePress={handleAddProduct}
          />
        </div>
      </form>

      {/* Display the products from the store */}
      <Table products={products} />

      {/* Generate Pdf Button*/}
      <CustomButton
        title="Generate PDF Invoice"
        otherStyles="[&&]:px-28 mx-auto bg-button-secondary text-button-primary"
        handlePress={handleGeneratePDF}
      />
    </div>
  );
}
