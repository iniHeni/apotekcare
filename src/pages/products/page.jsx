import Layout from "@/components/layout";
import Products from "@/components/Products";

export default function ProductsPage() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto my-16 p-4 space-y-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-blue-600 mb-8">Products</h2>
          <p className="text-lg text-gray-800 mb-8">
            Berikut adalah daftar produk dan layanan yang kami tawarkan. Kami berkomitmen untuk menyediakan produk berkualitas tinggi dan layanan terbaik kepada pelanggan kami.
          </p>
        </div>
        <Products />
      </div>
    </Layout>
  );
}
