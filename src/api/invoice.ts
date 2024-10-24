import axios from "axios";

export const getInvoice = async (products: any) => {
  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/api/product/invoice-download`,
      products,
      {
        responseType: "blob",
        headers: {
          Authorization: `Bearer ${token}`, 
        },
      }
    );

    const pdfBlob = new Blob([response.data], {
      type: "application/pdf",
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(pdfBlob);
    link.setAttribute("download", "products.pdf");

    document.body.appendChild(link);
    link.click();

    link.remove();
    URL.revokeObjectURL(link.href);
    
  } catch (error) {
    console.error("Error generating invoice", error);
    throw error;
  }
};
