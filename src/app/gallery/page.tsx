import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, CalendarDays, Images } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Gallery | Dr. Mohd Vaseem',
  description: 'Recognition and community events with Dr. Mohd Vaseem.',
};

export default function Gallery() {
  return (
    <div className="site-shell gallery-page">
      <header className="gallery-header">
        <Link href="/" className="brand"><div className="brand-icon"><Images size={24}/></div><div className="brand-text"><strong>Dr. Mohd Vaseem</strong><span>PHOTO GALLERY</span></div></Link>
        <div className="gallery-header-actions"><Link href="/" className="btn-outline"><ArrowLeft size={16}/> Home</Link><Link href="/#appointment" className="btn-primary"><CalendarDays size={16}/> Book Appointment</Link></div>
      </header>
      <main className="section gallery-main">
        <div className="section-header"><span className="eyebrow">GALLERY</span><h1>Dr. Mohd Vaseem</h1><p>Recognition &amp; Community Events</p></div>
        <div className="doctor-gallery-grid">
          {[
            { src: '/images/recognition-ceremony.png', title: 'Hon’ble Smt. Justice T. Madhavi Devi', designation: 'Permanent Judge, High Court for the State of Telangana', alt: 'Dr. Mohd Vaseem receiving a commemorative plaque with Hon’ble Smt. Justice T. Madhavi Devi', width: 720, height: 1280 },
            { src: '/images/community-recognition.png', title: 'Smt. T. Anitha', designation: 'Sessions Judge for trial and disposal of Protection of Children from Sexual Offences (POCSO Act) cases-cum-XII Additional Sessions Judge at Hyderabad', alt: 'Dr. Mohd Vaseem being felicitated with Smt. T. Anitha at a community event', width: 884, height: 642 },
            { src: '/images/community-health-visit.png', title: 'Smt. Shoukath Jahan Siddiqua', designation: 'XII Additional Chief Judge, City Civil Court, Secunderabad', alt: 'Dr. Mohd Vaseem with Smt. Shoukath Jahan Siddiqua at the Secunderabad Bar Association', width: 720, height: 1280 },
          ].map((photo) => (
            <figure key={photo.src}>
              <a href={photo.src} target="_blank" rel="noreferrer" aria-label={`View ${photo.title.toLowerCase()} photo in full size`}>
                <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" />
              </a>
              <figcaption><strong>{photo.title}</strong><span>{photo.designation}</span></figcaption>
            </figure>
          ))}
        </div>
        <div className="gallery-return"><Link className="btn-outline" href="/#about"><ArrowLeft size={16}/> About the Doctor</Link></div>
      </main>
      <footer className="gallery-footer"><p>Dr. Mohd Vaseem · Prime HighCare Hospital · ProCare Clinic · V Care Clinic</p></footer>
    </div>
  );
}
