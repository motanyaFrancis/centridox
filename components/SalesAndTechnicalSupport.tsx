import React from 'react';

const SalesAndTechnicalSupport: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-8 mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1  gap-8">
        {/* Sales Support */}
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Contact</h2>
          <p className="text-gray-600 mb-4">
            Need help with setup, customization, or day-to-day use? Teko Support is here for you — fast, responsive, and built right into your workspace.
          </p>
          <p className="text-sky-700 font-bold text-sm mb-2">Teko Systems Limited</p>
          {/* <p className="text-gray-500 text-sm mb-2">Nairobi, Kenya</p> */}
          <p className="text-gray-500 text-sm mb-2">Nairobi, Kenya</p>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-sky-600 font-semibold">+254 724367814</span>
          </div>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href="mailto:info@teko.africa" className="text-sky-600 hover:underline">info@teko.africa</a>
          </div>
          
        </div>

        {/* Technical Support */}
        {/* <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Technical Support</h2>
          <p className="text-gray-600 mb-4">
            Experiencing issues with your account, payment processing, or booking confirmation? Our technical support team is ready to assist you with platform-related concerns to ensure your adventure goes smoothly.
          </p>
          <div className="flex items-center mb-2">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.774a11.037 11.037 0 006.103 6.103l.774-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-primary-600 font-semibold">+254 700 456 789</span>
          </div>
          <p className="text-gray-500 text-sm mb-4">Mon–Fri 9:00am to 5:00pm EAT</p>
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href="mailto:support@wildroadnomads.co.ke.com" className="text-primary-600 hover:underline">support@wildroadnomads.co.ke.com</a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SalesAndTechnicalSupport;
