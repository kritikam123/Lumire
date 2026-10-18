import { getData, setData } from "./storage";

// Save a new order in localStorage and return it
export const placeOrder = (userId, orderData) => {
  const orders = getData("orders") || [];

  const order = {
    id: `LM-${Date.now().toString().slice(-6)}`,
    userId,
    status: "Processing",
    date: new Date().toISOString(),
    ...orderData,
  };

  setData("orders", [...orders, order]);
  return order;
};

// Get only the orders that belong to one user (newest first)
export const getOrdersByUser = (userId) =>
  (getData("orders") || [])
    .filter((order) => order.userId === userId)
    .reverse();
