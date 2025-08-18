import Link from "next/link";

function CartSummary({ subtotal }) {
  return (
    <div className="w-full h-fit bg-[#FFFFFF] text-[#101B24] p-4 rounded-md shadow-sm">
      <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
      <p className="flex justify-between text-lg">
        <span>Subtotal:</span>
        <span>৳ {subtotal}</span>
      </p>
      <p className="flex justify-between text-lg mt-4">
        <span>Shipping:</span>
        <span className="text-[#FFA41F]">Free</span>
      </p>
      <hr className="my-4 border-t border-[#F9D398]" />
      <h3 className="flex justify-between text-lg font-bold">
        <span>Total:</span>
        <span>৳ {subtotal}</span>
      </h3>
      <Link href={"/checkout"}>
        <button className="w-full mt-6 bg-[#FFA41F] text-[#FFFFFF] py-3 rounded-md cursor-pointer">
          Proceed to Checkout
        </button>
      </Link>
    </div>
  );
}

export default CartSummary;
