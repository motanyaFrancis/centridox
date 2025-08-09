import React from 'react';

import { PageHeader } from '@/components/PageHeader';
import SalesAndTechnicalSupport from '@/components/SalesAndTechnicalSupport';
// import CallToAction from '@/components/CallToAction';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
};

async function getHeaderData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: "Talk to us",
        subtitle: "Discover the Beauty of Kenya with Travel Nomads",
        backgroundImageSrc: "/images/Handshake.jpg",
        showSearch: false,
      });
    }, 1000);
  });
}



export default async function ContactUsPage() {
  const headerData = await getHeaderData();
  return (
    <>
      <PageHeader {...(headerData as any)} />
      <main className="bg-gray-50 min-h-64" >

        <SalesAndTechnicalSupport />
        {/* <CallToAction /> */}
        

      </main>
    </>
  );
};
