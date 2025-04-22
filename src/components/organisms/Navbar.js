'use client';

import { useState } from 'react';
import { FaChevronDown, FaShoppingCart, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from 'ecommerce-mxtech';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { products } = useCart();
  const navItems = [
    { name: 'Services', dropdown: false, href: '/#services' },

    { name: 'Products', dropdown: false, href: '/#products' },
    { name: 'About us', dropdown: false, href: '/#about' },
    { name: 'Testimonials', dropdown: false, href: '/#testimonials' },
    // { name: 'Contact Us', dropdown: false, href: '/more-information' },
  ];

  return (
    <header className='bg-white border-b'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='flex items-center gap-2'>
          <div className='w-7 h-7 bg-yellow-400 rotate-45 rounded-sm relative flex items-center justify-center'>
            <span className='absolute -rotate-45 text-sm font-bold text-slate-900 text-center'>
              Especialidad Motor
            </span>
          </div>
        </div>

        {/* Desktop Menu */}
        <nav className='hidden lg:flex items-center gap-6'>
          {navItems.map((item) => (
            <div key={item.name} className='relative group'>
              <Link href={item.href}>
                <button className='text-sm font-semibold text-slate-900 flex items-center gap-1 hover:text-yellow-600 transition'>
                  {item.name}
                  {item.dropdown && (
                    <FaChevronDown className='text-xs mt-0.5' />
                  )}
                </button>
              </Link>
              {/* Dropdown menu placeholder */}
              {item.dropdown && (
                <div className='absolute left-0 mt-2 bg-white shadow-lg rounded hidden group-hover:block px-4 py-2 text-sm text-gray-700'>
                  Coming soon...
                </div>
              )}
            </div>
          ))}

          {/* Cart */}
          <Link href={'/my-cart'}>
            <div className='relative'>
              <FaShoppingCart className='text-xl text-slate-900 cursor-pointer' />
              <span className='absolute -top-2 -right-4 bg-yellow-400 text-slate-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center'>
                {products.length}
              </span>
            </div>
          </Link>

          {/* CTA */}
          <Link href={'/more-information'}>
            <button className='ml-4 bg-yellow-400 text-slate-900 font-bold px-5 py-2 rounded hover:brightness-105 flex items-center gap-2 transition'>
              Contact us <FaArrowRight size={12} />
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className='lg:hidden'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className='w-6 h-6 text-slate-800'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d={
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className='lg:hidden px-6 pb-4'>
          {navItems.map((item) => (
            <div key={item.name} className='py-2 border-b text-slate-800'>
              {item.name}
            </div>
          ))}
          <div className='py-4'>
            <button className='w-full bg-yellow-400 text-slate-900 font-bold px-4 py-2 rounded flex items-center justify-center gap-2'>
              Get a Quote <FaArrowRight size={12} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
