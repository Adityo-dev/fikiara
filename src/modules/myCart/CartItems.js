import Image from "next/image";

function CartItems({ items, updateQty, removeItem }) {
  return (
    <div className="md:col-span-2 space-y-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex items-center gap-4 bg-[#ffffff] text-black p-4 rounded-md shadow-sm"
        >
          {/* Product Image */}
          <div className="w-40 h-32 flex items-center justify-center bg-gray-100 rounded-md overflow-hidden">
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={200}
              className="object-contain w-full h-full"
            />
          </div>

          {/* Product Details */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold truncate text-[#101B24]">
              {item.title}
            </h3>
            <p className="text-sm text-[#FFA41F]">{item.type}</p>
            <p className="text-[#101B24] font-medium mt-1">৳ {item.price}</p>

            {/* Quantity Control */}
            <div className="flex items-center mt-3">
              <button
                className="px-3 py-1 bg-[#FFA41F] text-[#ffffff] rounded-l-md"
                onClick={() => updateQty(item.id, item.qty - 1)}
              >
                –
              </button>
              <span className="px-5 py-[5px] border border-[#FFA41F] text-sm font-medium">
                {item.qty}
              </span>
              <button
                className="px-3 py-1 bg-[#FFA41F] text-[#ffffff] rounded-r-md"
                onClick={() => updateQty(item.id, item.qty + 1)}
              >
                +
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <button
            className="ml-auto w-12 h-12 rounded-md flex items-center justify-center text-red-600 p-2 hover:bg-red-100 transition cursor-pointer"
            onClick={() => removeItem(item.id)}
            aria-label="Remove item"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartItems;
