import TableHead from "./TableHead";
import TableRow from "./TableRow";

interface Product {
  name: string;
  price: number;
  quantity: number;
}

interface TableProps {
  products: Product[];
}

export default function Table({ products }: TableProps) {
    // Calculate total price including GST
    const totalAmount = products.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  
    const gstAmount = totalAmount * 0.18; // 18% GST
    const totalWithGst = totalAmount + gstAmount;

  return (
    <div className="w-full my-6">
      <table className="w-full text-sm font-medium text-left rtl:text-right">
        <TableHead />

        <tbody className="text-textPrimary">
           {products.map((product, index) => (
            <TableRow
              key={index}
              productName={product.name}
              productPrice={product.price}
              quantity={product.quantity}
            />
          ))}

          {/* Total row */}
          <tr className="border border-table-border">
            <th
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >Total</th>
            <td className="px-6 py-4"></td>
            <td className="px-6 py-4">+GST 18%</td>
            <td className="px-6 py-4">INR {totalWithGst.toFixed(2)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
