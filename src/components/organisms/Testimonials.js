import { useState } from 'react';
import { FaQuoteLeft, FaStar, FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

const testimonials = dataSite.references;

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const testimonial = testimonials[current];

  return (
    <section
      id='testimonials'
      className='text-center py-20 px-4 relative mt-20'
    >
      <div className='absolute left-1/2 transform -translate-x-1/2 -top-6 text-yellow-400 text-6xl'>
        <FaQuoteLeft />
      </div>
      <h2 className='text-4xl font-bold text-[#0a1b3e] mb-6 relative z-10'>
        What they&apos;re saying
      </h2>
      <p className='max-w-3xl mx-auto text-lg text-gray-400 mb-10 relative z-10'>
        &quot; {testimonial.description} &quot;
      </p>

      {/* Author */}
      <div className='flex justify-center items-center flex-col relative z-10'>
        {testimonial.image ? (
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            width={80}
            height={80}
            className='rounded-full object-cover'
          />
        ) : (
          <div className='w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-2'>
            <span className='text-gray-500 text-2xl font-semibold'>
              {testimonial.name.charAt(0)}
            </span>
          </div>
        )}
        <h3 className='text-xl font-bold text-[#0a1b3e]'>
          {testimonial.name.split(',')[0]}
        </h3>
        <p className='text-yellow-500 text-sm'>
          {testimonial.name.split(',').slice(1).join(',')}
        </p>
        <div className='flex justify-center gap-1 mt-2'>
          {Array.from({ length: testimonial.rating }).map((_, idx) => (
            <FaStar key={idx} className='text-yellow-400' />
          ))}
        </div>
      </div>

      {/* Nav Button */}
      <div className='mt-10 flex justify-center'>
        <button
          onClick={next}
          className='text-[#0a1b3e] text-2xl hover:text-yellow-400 transition flex items-center gap-2 border border-[#0a1b3e] px-4 py-2 rounded-full hover:border-yellow-400'
          aria-label='Next Testimonial'
        >
          Next <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
