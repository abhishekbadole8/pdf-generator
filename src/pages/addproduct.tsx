import { useState } from "react";
import InputField from "../components/InputField";
import CustomButton from "../components/CustomButton";
import Table from "../components/Table";

export default function AddProduct() {
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process the form data here
    if (!formData.productName || !formData.productPrice || !formData.quantity) {
      // Handle error (e.g., show a message)
      console.log("Please fill in all fields.");
      return;
    }

    // Perform further actions, such as sending the data to an API
    console.log("Product Added:", formData);

    // Clear the form after submission (optional)
    setFormData({
      productName: "",
      productPrice: "",
      quantity: "",
    });
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

      <form onSubmit={handleSubmit} className="min-w-full">
        <div className="flex w-full gap-x-8">
          <InputField
            title="Product Name"
            placeholder="Enter the product name"
            name="productName"
            type="text"
            value={formData.productName}
            handleChangeText={handleChange}
          />
          <InputField
            title="Product Price"
            placeholder="Enter the price"
            name="productPrice"
            type="number"
            value={formData.productPrice}
            handleChangeText={handleChange}
            otherStyles="selector:none"
          />
          <InputField
            title="Quantity"
            placeholder="Enter the Qty"
            name="quantity"
            type="number"
            value={formData.quantity}
            handleChangeText={handleChange}
          />
        </div>
        <div className="mt-4">
          <CustomButton
            title="Add Product"
            otherStyles="text-base text-button-primary bg-button-secondary h-[48px] px-[19.5px]"
            handlePress={handleSubmit}
          />
        </div>
      </form>

      <Table />

      {/* Generate Pdf */}
      <CustomButton
        title="Generate PDF Invoice"
        otherStyles="[&&]:px-28 mx-auto bg-button-secondary text-button-primary"
        handlePress={handleSubmit}
      />
    </div>
  );
}
