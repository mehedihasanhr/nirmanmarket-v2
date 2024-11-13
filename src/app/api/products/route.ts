import { faker } from "@faker-js/faker";

export function GET() {
  const makeData = () =>
    Array.from({ length: 100 }, () => ({
      id: faker.string.uuid(),
      title: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      price: faker.commerce.price(),
      discount: faker.commerce.price({ min: 0, max: 100 }),
      discountType: ["percentage", "amount"][Math.floor(Math.random() * 2)], // Randomly pick "percentage" or "amount"
    }));

  const data = makeData();

  return new Response(JSON.stringify({ message: "Products", data }), {
    headers: { "Content-Type": "application/json" },
  });
}
