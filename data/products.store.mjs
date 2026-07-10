const products = [
  {
    product_id: 1,
    name: "Mechanical Keyboard",
    category: "Electronics",
    price: 2890,
    cost_price: 1700,
    supplier_note: "Preferred supplier only",
    is_active: true,
  },
  {
    product_id: 2,
    name: "Standing Desk",
    category: "Furniture",
    price: 8900,
    cost_price: 6100,
    supplier_note: "Bulk discount starts at 10 units",
    is_active: true,
  },
];

let nextProductId = 3;

export function listProducts() {
  return products;
}

export function createProduct({ name, category, price, cost_price, supplier_note }) {
  const newProduct = {
    product_id: nextProductId,
    name,
    category,
    price,
    cost_price,
    supplier_note,
    is_active: true,
  };

  products.push(newProduct);
  nextProductId += 1;

  return newProduct;
}
