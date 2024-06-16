
import { useState, useEffect } from "react";
import { createClient } from "contentful";
import Link from 'next/link';

const client = createClient({
  space: "jc4ktl9idiw5",
  accessToken: "6bOn5slRed7KZ0d3CwW1W6gIH2J5JwLY6Zp4z9kMW_Q",
});

export default function Products() {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "product",
        });
        const productsData = response.items.map((item) => ({
          title: item.fields.title,
          description: item.fields.description,
          image: item.fields.image.fields.file.url,
          price: item.fields.price,
          stock: item.fields.stock,
          slug: item.fields.slug,
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto my-16 p-4 space-y-16">
      <div className="space-y-8">
        <div>
          <h3 className="text-3xl font-semibold text-blue-600 mb-4">Products</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              <p>Loading...</p>
            ) : (
              products.map((product, index) => (
                <div key={index} className="bg-white shadow-lg rounded-lg p-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-40 object-cover rounded mb-4"
                  />
                  <h4 className="text-xl font-bold text-blue-600 mb-2">{product.title}</h4>
                  <p className="text-gray-800 mb-2">{product.description}</p>
                  <p className="text-gray-800 mb-2">Price: ${product.price}</p>
                  <p className="text-gray-800 mb-4">Stock: {product.stock}</p>
                  <Link href={`/products/${product.slug}`} className="text-blue-600 hover:underline">
                        Learn more
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
