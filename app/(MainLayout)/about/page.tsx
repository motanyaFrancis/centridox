import React from 'react';
import { PageHeader } from '@/components/PageHeader';
// import CallToAction from '@/components/CallToAction';

import type { Metadata } from 'next';
import type { PageHeaderProps } from '@/components/PageHeader';
import AboutUs from '@/components/AboutUs';

export const metadata: Metadata = {
  title: 'About Us',
};

async function getHeaderData(): Promise<PageHeaderProps> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        title: 'About Us',
        subtitle: 'Discover the Beauty of Kenya with Travel Nomads',
        backgroundImageSrc: '/images/Handshake.jpg',
        showSearch: false,
      });
    }, 1000);
  });
}

export default async function ContactUsPage() {
  const headerData = await getHeaderData();
  return (
    <>
      <PageHeader {...headerData} />
      <main className="bg-gray-50 min-h-64">
        <AboutUs />
      </main>
    </>
  );
}
