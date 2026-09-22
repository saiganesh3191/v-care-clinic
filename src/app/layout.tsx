import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'V Care Clinic | Dr. Mohd Vaseem, Hyderabad', description: 'Explore V Care Clinic, meet Dr. Mohd Vaseem, and plan your visit in Aghapura, Hyderabad.', robots: { index: false, follow: false } };
export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) { return <html lang="en"><body>{children}</body></html>; }
