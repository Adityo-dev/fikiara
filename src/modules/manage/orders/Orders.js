import Empty from "../Empty";
import Tbody from "./Tbody";
import Thead from "./Thead";

const orders = [
  {
    id: "#ORD-1234",
    courseName: "Web Development",
    date: "Jun 12, 2025",
    price: "$149.97",
    status: "Canceled",
  },
  {
    id: "#ORD-1235",
    courseName: "Graphic Design Masterclass",
    date: "Jun 15, 2025",
    price: "$99.50",
    status: "Shipped",
  },
  {
    id: "#ORD-1236",
    courseName: "UI/UX Design Fundamentals",
    date: "Jun 18, 2025",
    price: "$129.00",
    status: "Processing",
  },
  {
    id: "#ORD-1237",
    courseName: "Digital Marketing 101",
    date: "Jun 20, 2025",
    price: "$79.99",
    status: "Cancelled",
  },
  {
    id: "#ORD-1238",
    courseName: "Advanced JavaScript",
    date: "Jun 22, 2025",
    price: "$199.00",
    status: "Canceled",
  },
];

function Orders() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        {orders.length > 0 ? (
          <table className="min-w-full divide-y divide-gray-200">
            <Thead />
            <Tbody orders={orders} />
          </table>
        ) : (
          <Empty
            title={"You have no orders!"}
            description={
              "Congratulations! Your orders have taken a vacation, and they're all chilling on a sunny beach somewhere, sipping digital cocktails. Don't worry; they'll be back soon to join the party! 🏖️🍹😄"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Orders;
