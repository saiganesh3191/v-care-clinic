import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Images } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Dr. Mohd Vaseem',
  description: 'Doctor photographs from Dr. Mohd Vaseem’s gallery.',
};

export default function Gallery() {
  return (
    <div className="site-shell gallery-page">
      <header className="gallery-header">
        <Link href="/" className="brand"><div className="brand-icon"><Images size={24}/></div><div className="brand-text"><strong>Dr. Mohd Vaseem</strong><span>PHOTO GALLERY</span></div></Link>
        <div className="gallery-header-actions"><Link href="/" className="btn-outline"><ArrowLeft size={16}/> Home</Link><Link href="/#appointment" className="btn-primary"><CalendarDays size={16}/> Book Appointment</Link></div>
      </header>
      <main className="section gallery-main">
        <div className="section-header"><span className="eyebrow">GALLERY</span><h1>Dr. Mohd Vaseem</h1><p>Doctor photographs</p></div>
        <div className="doctor-gallery-grid">
          <figure><a href="/images/dr-vaseem.jpg" target="_blank" rel="noreferrer" aria-label="Open photograph of Dr. Vaseem at a lectern in full size"><img src="/images/dr-vaseem.jpg" alt="Dr. Mohd Vaseem standing at a lectern" width={818} height={1024}/></a><figcaption><strong>Dr. Mohd Vaseem</strong><span>At the lectern · Select photo to view full size</span></figcaption></figure>
          <figure><a href="/images/dr-vaseem-white.jpg" target="_blank" rel="noreferrer" aria-label="Open doctor portrait in full size"><img src="/images/dr-vaseem-white.jpg" alt="Portrait of Dr. Mohd Vaseem in a white coat" loading="lazy"/></a><figcaption><strong>Doctor portrait</strong><span>Select photo to view full size</span></figcaption></figure>
        </div>
        <div className="gallery-return"><Link className="btn-outline" href="/#about"><ArrowLeft size={16}/> About the Doctor</Link></div>
      </main>
      <footer className="gallery-footer"><p>Dr. Mohd Vaseem · Prime HighCare Hospital · ProCare Clinic · V Care Clinic</p></footer>
    </div>
  );
}
