import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'V Care Clinic | Dr. Mohd Vaseem - Best Doctor in Hyderabad',
  description: 'V Care Clinic by Dr. Mohd Vaseem. Multi-Speciality Medical Clinic in Aghapura, Nampally, Hyderabad. General Practitioner, Diabetologist, Infectious Disease, Pulmonologist, Sleep Clinic.',
  keywords: 'V Care Clinic, Dr Mohd Vaseem, Best Doctor in Hyderabad, Diabetologist Hyderabad, General Practitioner Nampally, Pulmonologist Aghapura',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

