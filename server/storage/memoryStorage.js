let orders = [];

export const createMemoryStorage = () => {
  return {
    async createOrder(order) {
      orders = [...orders, order];
      return order;
    },
    async listOrders() {
      return [...orders];
    },
    async getOrderById(id) {
      return orders.find(order => order.id === id) ?? null;
    },
    async confirmOrder(id, tickets) {
      const order = orders.find(item => item.id === id);
      if (!order) return null;
      const updatedOrder = {
        ...order,
        status: 'CONFIRMED',
        tickets,
        updatedAt: new Date().toISOString()
      };
      orders = orders.map(item => (item.id === id ? updatedOrder : item));
      return updatedOrder;
    },
    async cancelOrder(id) {
      const order = orders.find(item => item.id === id);
      if (!order) return null;
      const updatedOrder = {
        ...order,
        status: 'CANCELLED',
        updatedAt: new Date().toISOString()
      };
      orders = orders.map(item => (item.id === id ? updatedOrder : item));
      return updatedOrder;
    }
  };
};
