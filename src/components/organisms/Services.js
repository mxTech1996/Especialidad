'use client';
import {
  FaTruckMoving,
  FaChartLine,
  FaBalanceScale,
  FaNetworkWired,
} from 'react-icons/fa';

export default function ServicesOverview() {
  const services = [
    {
      icon: <FaTruckMoving className='text-yellow-500 text-3xl' />,
      title: 'Fleet Acquisition Advice',
      description:
        'We guide you on the best deals and reliable sources to acquire heavy-duty trucks for wholesale trade.',
    },
    {
      icon: <FaChartLine className='text-yellow-500 text-3xl' />,
      title: 'Market Trend Analysis',
      description:
        'Stay ahead with insights into demand, pricing trends, and resale value for commercial vehicles.',
    },
    {
      icon: <FaBalanceScale className='text-yellow-500 text-3xl' />,
      title: 'Financing & Compliance',
      description:
        'Understand regulations and explore financing options for bulk truck purchases with confidence.',
    },
    {
      icon: <FaNetworkWired className='text-yellow-500 text-3xl' />,
      title: 'Supplier Network Setup',
      description:
        'We connect you with trusted manufacturers, logistics firms, and wholesale partners in your industry.',
    },
  ];

  return (
    <section
      id='services'
      className='relative z-40 mt-10 bg-white rounded-t-3xl px-6 py-20 shadow-xl max-w-7xl mx-auto'
    >
      {/* Header */}
      <div className='grid md:grid-cols-2 gap-10 mb-14'>
        <h2 className='text-3xl md:text-4xl font-bold text-gray-900'>
          We are transforming
          <br />
          your wholesale truck strategy
        </h2>
        <p className='text-gray-600 text-lg'>
          Our advisory firm is committed to helping commercial vehicle traders
          unlock growth and navigate evolving challenges. We combine data,
          expertise, and partnerships to elevate your buying and selling
          operations.
        </p>
      </div>

      {/* Services Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
        {services.map((service, idx) => (
          <div
            key={idx}
            className='bg-white border border-gray-100 rounded-lg shadow-sm p-6 text-center hover:shadow-md transition'
          >
            <div className='flex justify-center items-center mb-4'>
              <div className='w-14 h-14 flex items-center justify-center rounded-full border-2 border-yellow-400'>
                {service.icon}
              </div>
            </div>
            <h3 className='text-lg font-semibold text-gray-800 mb-2'>
              {service.title}
            </h3>
            <p className='text-sm text-gray-600'>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
