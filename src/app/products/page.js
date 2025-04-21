'use client';

import Footer from '@/components/organisms/Footer';
import Navbar from '@/components/organisms/Navbar';
import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import Image from 'next/image';

export default function Products() {
  const products = dataSite.products;
  const { validateProductInCart, handleAddOrRemoveProduct } = useCart();
  return (
    <>
      <Navbar />
      <section id='products' className='py-20 px-6 bg-white'>
        <div className='grid md:grid-cols-3 gap-6 max-w-7xl mx-auto'>
          {products.map((article, index) => {
            const isInCart = validateProductInCart(article.id);
            return (
              <div
                key={index}
                className='shadow-lg rounded overflow-hidden bg-white'
              >
                <div className='relative h-56 w-full'>
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className='object-cover'
                  />
                  <span className='absolute top-4 left-4 bg-yellow-400 text-white px-3 py-1 text-xs rounded'>
                    Assesory
                  </span>
                </div>
                <div className='p-6'>
                  <p className='text-gray-400 text-sm mb-2'>{article.date}</p>
                  <h3 className='text-[#0a1b3e] font-bold text-lg mb-2 leading-snug'>
                    {article.name}
                  </h3>
                  <p className='text-gray-500 mb-4'>{article.description}</p>
                  <div className='flex items-center justify-between mb-4'>
                    <span className='text-[#0a1b3e] font-bold text-lg'>
                      $ {article.price}
                    </span>
                  </div>
                  <button
                    onClick={() => handleAddOrRemoveProduct(article.id)}
                    style={{
                      color: isInCart ? 'red' : '#FEDC00F6',
                    }}
                    className='text-yellow-500 font-semibold text-sm hover:underline'
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
}
