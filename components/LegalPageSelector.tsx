// components/PageSelector.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { LegalPageKey } from '@/lib/legalPagesContent';

const pages: { key: LegalPageKey; label: string }[] = [
  { key: 'helpCenter', label: 'Help Center' },
  { key: 'privacyPolicy', label: 'Privacy Policy' },
  { key: 'termsOfService', label: 'Terms of Service' },
  { key: 'trustAndSafety', label: 'Trust and Safety' },
  { key: 'accessibility', label: 'Accessibility' },
];

const PageSelector: React.FC = () => {
  return (
    <div>
      <ul className="space-y-2 text-sm text-gray-700">
        {pages.map(({ key, label }) => (
          <li key={key}>
            <Link
              href={`/legal/${key}`}
              className="hover:text-primary-500"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PageSelector;
