import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTotal } from "../../slices/appSlice";

const OrderSummary = () => {
  const total = useSelector(selectTotal);
  const router = useRouter();
  const [cuponInput, setCuponInput] = useState("");
  const tax = 15;
  const [cupon, setCupon] = useState(false);
  const [notMatchCupon, setNotmatchCupon] = useState(false);

  // const totalWithTax =;

  // TODO: calculte the parcentage

  const parcentageNumber = 5;

  const parcentage = ((total + tax) * parcentageNumber) / 100;

  const cuponcode = "fms";
  const applyCuponBtn = () => {
    if (cuponInput === cuponcode) {
      setCupon(true);
    } else {
      setNotmatchCupon(true);
    }
  };

  return (
    <div className="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
      <h4 className="text-gray-800 text-lg mb-4 font-medium uppercase">
        ORDER SUMMARY
      </h4>
      <div className="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
        <div className="flex justify-between font-medium">
          <p>Subtotal</p>
          <p>${total}</p>
        </div>
        <div className="flex justify-between">
          <p>Delivery</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between">
          <p>Tax</p>
          <p>${tax}</p>
        </div>
      </div>
      <div className="flex justify-between my-3 text-gray-800 font-semibold uppercase">
        <h4>Total</h4>
        <h4>$ {cupon ? total - parcentage : total + tax}</h4>
      </div>

      {!cupon ? (
        <div className="flex mb-5">
          <input
            type="text"
            className="pl-4 w-full outline-none border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
            placeholder="Coupon"
            value={cuponInput}
            onChange={(e) => setCuponInput(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto"
            onClick={applyCuponBtn}
          >
            Apply
          </button>
        </div>
      ) : (
        <div className=" text-lg font-bold py-3 text-[#42ba96] w-full block text-center">
          5% Discount done 🥰
        </div>
      )}
      {notMatchCupon && (
        <div className="text-[#FFCC00] font-bold py-3 text-lg w-full block text-center">
          Cupon Don't Match
        </div>
      )}
      {/* <!-- searchbar end --> */}

      {/* <!-- checkout --> */}
      <div
        onClick={() => router.push("/checkout")}
        className="bg-primary border border-primary text-white px-4 cursor-pointer py-3 font-medium rounded-md uppercase hover:bg-transparent
     hover:text-primary transition text-sm w-full block text-center"
      >
        Process to checkout
      </div>
      {/* <!-- checkout end --> */}
    </div>
  );
};

export default OrderSummary;
