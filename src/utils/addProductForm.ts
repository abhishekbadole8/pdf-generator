interface FormData {
  name: string;
  price: string;
  quantity: string;
}

interface ErrorData {
  name: string;
  price: string;
  quantity: string;
}

export const validateFormData = (formData: FormData): ErrorData => {
  const errors: ErrorData = {
    name: "",
    price: "",
    quantity: "",
  };

  if (!formData.name) {
    errors.name = "Product name is required";
  }

  if (!formData.price) {
    errors.price = "Product price is required";
  } else if (isNaN(parseFloat(formData.price))) {
    errors.price = "Product price must be a valid number";
  }

  if (!formData.quantity) {
    errors.quantity = "Quantity is required";
  } else if (isNaN(parseInt(formData.quantity))) {
    errors.quantity = "Quantity must be a valid number";
  }

  return errors;
};
