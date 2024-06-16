"use client";

import { createClient } from 'contentful';
import Link from 'next/link';

const client = createClient({
  space: 'jc4ktl9idiw5',
  accessToken: '6bOn5slRed7KZ0d3CwW1W6gIH2J5JwLY6Zp4z9kMW_Q',
});

export async function getStaticPaths() {
  const response = await client.getEntries({
    content_type: 'product',
  });

  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'product',
    'fields.slug': params.slug,
  });

  return {
    props: {
      product: items[0],
    },
  };
}

export default function ProductPage({ product }) {
  const { title, description, image, price } = product.fields;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-4xl mx-auto p-4">
        <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-xl overflow-hidden">
          <div className="md:w-1/2">
            <img
              src={image.fields.file.url}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2 text-center">
            <Link href="/" className="text-blue-500 text-sm mb-4 inline-block hover:underline">
                &larr; Back to All Plants
            </Link>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">{title}</h1>
            <p className="text-2xl text-gray-900 mb-4">${price}</p>
            <p className="text-gray-700 mb-6">{description}</p>
            <div className="flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition-all">ADD TO CART</button>
              <button className="bg-gray-300 text-gray-800 px-6 py-3 rounded-full shadow-md hover:bg-gray-400 transition-all">WISHLIST</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
