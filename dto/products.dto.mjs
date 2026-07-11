export function createProductInputDto(product) {
  // TODO DTO 1: return object ที่มีแค่ name, category, price
  return {
    name: product.name,
    category: product.category,
    price: product.price,
  };
}

export function publicProductDto(product) {
  // TODO DTO 2: return object ที่ไม่มี cost_price และ supplier_note
  return {
    product_id: product.product_id,
    name: product.name,
    category: product.category,
    price: product.price,
    is_active: product.is_active,
  };
}
