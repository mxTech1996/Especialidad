'use client';

import { dataSite } from '@/data';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* HERO */}
      <section className='relative h-screen bg-slate-900'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <Image
            src={dataSite.image_hero}
            alt='Background'
            fill
            className='object-cover object-center'
          />
          <div className='absolute inset-0 bg-gradient-to-b from-transparent via-[#0a1b3e]/60 to-[#0a1b3e] z-10' />
        </div>

        {/* Content */}
        <div className='relative z-20 h-full flex flex-col justify-center items-center text-center px-6'>
          {/* Icon */}
          <div className='mb-4'>
            <Image
              src='/logo-chart.svg'
              alt='Logo Icon'
              width={50}
              height={50}
            />
          </div>

          {/* Title */}
          <h1 className='text-white text-4xl md:text-5xl font-bold mb-6 leading-tight'>
            The fastest way
            <br />
            to achieve success
          </h1>

          {/* CTA */}
          <button className='bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:brightness-105 transition text-sm'>
            Learn More →
          </button>
        </div>
      </section>

      {/* FEATURES (ahora separados del Hero y visibles correctamente) */}
      <section className='bg-[#0a1b3e] py-10 px-6 grid grid-cols-1 md:grid-cols-3 gap-6'>
        {[
          { title: 'We Innovate', image: dataSite.image_hero2 },
          { title: 'Performance', image: dataSite.services[0].image },
          { title: 'A Full Service', image: dataSite.services[1].image },
        ].map((feature, idx) => (
          <div
            key={idx}
            className='relative rounded overflow-hidden group h-48'
          >
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className='object-cover object-center group-hover:scale-105 transition-transform duration-300'
            />
            <div className='absolute inset-0 bg-black/50 flex items-center justify-center'>
              <p className='text-white text-lg font-medium'>{feature.title}</p>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
