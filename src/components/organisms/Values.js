'use client';

import { useState } from 'react';
import {
  FaChessKnight,
  FaSearch,
  FaProjectDiagram,
  FaChartBar,
} from 'react-icons/fa';
import Image from 'next/image';
import { dataSite } from '@/data';

const tabs = [
  { label: 'Vision', icon: <FaChessKnight /> },
  { label: 'Mission', icon: <FaSearch /> },
  { label: 'Values', icon: <FaChartBar /> },
];

const contentMap = {
  Vision: {
    title: 'Vision: Leading the Truck Trade Revolution',
    text: `Our vision is to empower businesses in the heavy-duty truck market with unparalleled access to market intelligence and bulk trading strategies. We aim to be the most trusted advisory partner in the wholesale truck ecosystem.`,
    image: dataSite.image_hero2,
  },
  Mission: {
    title: 'Mission: Driving Smart and Profitable Truck Deals',
    text: `We help wholesale truck traders make informed decisions by auditing operational gaps, optimizing procurement processes, and connecting with reliable suppliers. We bridge the gap between opportunity and execution.`,
    image: dataSite.image_hero2,
  },
  Values: {
    title: 'Core Values: Integrity, Precision, Partnership',
    text: `Our work is grounded in honesty, analytical rigor, and lasting relationships. We believe every truck deal should create value and transparency across the supply chain. These principles define our commitment.`,
    image: dataSite.image_hero2,
  },
};

export default function Values() {
  const [activeTab, setActiveTab] = useState('Vision');
  const { title, text, image } = contentMap[activeTab];

  return (
    <section id='about' className='py-20 px-6 bg-white text-center'>
      <p className='text-yellow-500 font-semibold mb-2'>Why choose us</p>
      <h2 className='text-4xl font-bold text-[#0a1b3e] mb-4'>
        How TruckTrade Advisors can help?
      </h2>
      <p className='text-gray-400 max-w-2xl mx-auto mb-10'>
        We bring strategic clarity and operational solutions to commercial
        vehicle traders by simplifying decisions and maximizing opportunities.
      </p>

      {/* Tabs */}
      <div className='flex justify-center gap-1 mb-12 flex-wrap'>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={`px-6 py-4 flex items-center gap-2 border ${
              activeTab === tab.label
                ? 'bg-yellow-400 text-white font-semibold shadow-md'
                : 'bg-white text-[#0a1b3e]'
            }`}
            onClick={() => setActiveTab(tab.label)}
          >
            <span className='text-xl'>{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className='grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto text-left'>
        <div className='relative w-full h-64 md:h-80 rounded overflow-hidden'>
          <Image
            src={image}
            alt={title}
            fill
            className='object-cover rounded'
          />
        </div>
        <div>
          <h3 className='text-2xl font-bold text-[#0a1b3e] mb-4'>{title}</h3>
          <p className='text-gray-500 mb-6'>{text}</p>
          <div className='flex gap-4'>
            <a
              href='/products'
              className='text-yellow-500 font-medium hover:underline flex items-center gap-1'
            >
              View price table →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
