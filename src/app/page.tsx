import { fetchAllProducts } from "@/actions/productsActions";
import ProductCard from "./components/product-cart/product-cart";

interface Item {
  id: number;
  title: string;
  thumbnail: string;
  price: string;
}

export default async function Home() {
  const getAllProducts = await fetchAllProducts();

  console.log(getAllProducts);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-6xl mx-auto p-2">
        {getAllProducts && getAllProducts.data && getAllProducts.data.length
          ? getAllProducts.data.map((productItem: Item) => (
              <ProductCard item={productItem} />
            ))
          : null}
      </div>
    </div>
  );
}
