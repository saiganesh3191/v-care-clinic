'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  Activity,
  Award,
  CalendarDays,
  Check,
  ChevronDown,
  Clock,
  GraduationCap,
  HeartHandshake,
  MapPin,
  Menu,
  MoonStar,
  Phone,
  ShieldCheck,
  Siren,
  Star,
  Syringe,
  Users,
  X,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Stethoscope
} from 'lucide-react';

// Client-provided Google Share Links & Contact Info
const VCARE_MAP_LINK = 'https://share.google/sDSW9fSv9sQRGjmMa';
const HIGHCARE_MAP_LINK = 'https://share.google/OArnlwlzjU8Tk41tF';
const PROCARE_MAP_LINK = 'https://share.google/MdXSTJbCf0GppnyzR';

const PHONE_NUMBER = '9160621606';
const PHONE_DISPLAY = '+91 91606 21606';

// Lungs Icon SVG Component
function LungsIcon({ size = 24, color = 'currentColor' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 4v7" />
      <path d="M12 7c-2-1-4-1-6 0-3 1.5-4 4.5-4 8.5 0 2.5 1 4.5 3 4.5 2 0 3-1.5 3.5-3.5L12 11" />
      <path d="M12 7c2-1 4-1 6 0 3 1.5 4 4.5 4 8.5 0 2.5-1 4.5-3 4.5-2 0-3-1.5-3.5-3.5L12 11" />
    </svg>
  );
}

// Custom Hospital Logos
function HighCareLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#EFF6FF" stroke="#1D4ED8" strokeWidth="1.5" />
      <path d="M20 10C16 6 10 9 10 14C10 19 20 27 20 27C20 27 30 19 30 14C30 9 24 6 20 10Z" fill="#EF4444" opacity="0.85" />
      <circle cx="16" cy="14" r="2.5" fill="#1D4ED8" />
      <circle cx="24" cy="14" r="2.5" fill="#1D4ED8" />
      <path d="M16 20C17.5 22 22.5 22 24 20" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ProCareLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#FEF2F2" stroke="#B91C1C" strokeWidth="1.5" />
      <path d="M12 18C12 14 15 11 20 11C25 11 28 14 28 18C28 23 20 29 20 29C20 29 12 23 12 18Z" fill="#10B981" opacity="0.8" />
      <path d="M16 18H24M20 14V22" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function VCareLogo() {
  return (
    <svg width="42" height="42" viewBox="0 0 40 40" fill="none">
      <circle cx="20" cy="20" r="19" fill="#F0FDF4" stroke="#15803D" strokeWidth="1.5" />
      <circle cx="20" cy="20" r="13" fill="#15803D" />
      <path d="M15 20H25M20 15V25" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

// Specializations in exact requested order
const services = [
  {
    id: 1,
    name: 'Sr Consultant Clinical & Interventional Pulmonologist (Chest Physician)',
    icon: LungsIcon,
    text: 'Advanced chest medicine, asthma, COPD, interstitial lung disease, and interventional pulmonology.',
    detail: 'Comprehensive diagnosis and treatment for complex respiratory disorders, asthma, chronic bronchitis, lung infections, pleural diseases, and interventional bronchoscopy.'
  },
  {
    id: 2,
    name: 'Critical Care & Sleep Specialist',
    icon: MoonStar,
    text: 'Diagnosis and management of sleep disorders, sleep apnea, snoring, and critical illness care.',
    detail: 'Full sleep medicine assessment, sleep study analysis, CPAP/BiPAP therapy planning, treatment for obstructive sleep apnea, insomnia, and ICU critical care management.'
  },
  {
    id: 3,
    name: 'General Physician',
    icon: Stethoscope,
    text: 'Holistic primary healthcare, routine medical checkups, and multi-system illness management.',
    detail: 'Complete medical evaluations, lifestyle guidance, management of hypertension, routine health screenings, and adult immunization for individual and family health.'
  },
  {
    id: 4,
    name: 'Diabetologist',
    icon: Syringe,
    text: 'Diabetes care, glucose monitoring, metabolic syndrome treatment, and complication prevention.',
    detail: 'Comprehensive diabetes management plans, insulin dose optimization, blood sugar monitoring analysis, diabetic neuropathy & foot care, and metabolic risk reduction.'
  },
  {
    id: 5,
    name: 'Infectious Disease Specialist',
    icon: ShieldCheck,
    text: 'Diagnosis and treatment of complex bacterial, viral, fungal, and seasonal infections.',
    detail: 'Expert evaluation of fever of unknown origin, viral fevers, chest infections, post-viral complications, and specialized antimicrobial therapy.'
  }
];

const googleReviews = [
  {
    id: 1,
    name: 'Syed Salman',
    initial: 'S',
    date: '1 month ago',
    rating: 5,
    text: 'Dr. Mohd Vaseem is one of the best chest physicians and pulmonologists in Hyderabad. Very polite, patient listener, and gives exact diagnosis. My asthma and diabetes are well controlled under his care.'
  },
  {
    id: 2,
    name: 'Mohammed Abdul Qadir',
    initial: 'M',
    date: '2 months ago',
    rating: 5,
    text: 'Visited for severe cough and lung infection. Dr. Vaseem explained the problem clearly without unnecessary tests. Within 2 days I recovered completely. 15+ years experience truly shows!'
  },
  {
    id: 3,
    name: 'Ayesha Fatima',
    initial: 'A',
    date: '3 months ago',
    rating: 5,
    text: 'Extremely knowledgeable physician! Took my father for sleep apnea and respiratory consultation. Dr. Vaseem’s treatment plan brought immense relief. Very grateful to him.'
  },
  {
    id: 4,
    name: 'Mirza Ibrahim Baig',
    initial: 'M',
    date: '4 months ago',
    rating: 5,
    text: 'Very humble and senior pulmonologist. He gives enough time to every patient and listens carefully to all complaints. Highly recommended doctor in Hyderabad.'
  },
  {
    id: 5,
    name: 'Suhail Ahmed',
    initial: 'S',
    date: '5 months ago',
    rating: 5,
    text: 'Dr. Vaseem has been our family doctor for years. Whether it’s chest infections, sleep issues, or routine health checks, he provides genuine and affordable medical care.'
  }
];

function ClinicBannerStrip() {
  return (
    <div className="header-banner-strip">
      <div className="banner-grid-4">
        {/* Card 1: Prime HighCare Hospital - Clickable Link */}
        <a className="banner-branch-card" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer" title="Open Prime HighCare Hospital on Google Maps">
          <div className="banner-card-header">
            <HighCareLogo />
            <div className="banner-card-title">
              <strong>PRIME HIGH CARE</strong>
              <span>H O S P I T A L S</span>
            </div>
          </div>
          <div className="timing-pill">
            <Clock size={12} /> Mon To Sat: 7:00 PM To 10:30 PM
          </div>
          <p className="banner-card-address">
            <MapPin size={15} /> Attapur, Pillar Number-102, Langar House, HYD
          </p>
          <div className="banner-card-phone">
            <Phone size={14} /> 91 606 21 606
          </div>
        </a>

        {/* Card 2: ProCare Clinic - Clickable Link */}
        <a className="banner-branch-card" href={PROCARE_MAP_LINK} target="_blank" rel="noreferrer" title="Open ProCare Clinic on Google Maps">
          <div className="banner-motto">“We Treat, He Cures”</div>
          <div className="banner-card-header">
            <ProCareLogo />
            <div className="banner-card-title">
              <strong>PRO CARE CLINIC</strong>
              <span>POLY CLINIC | DIAGNOSTICS | PHARMACY</span>
            </div>
          </div>
          <div className="timing-pill red">
            <Clock size={12} /> Mon To Sat: 4:30 PM To 6:30 PM
          </div>
          <p className="banner-card-address">
            <MapPin size={15} /> Beside Marjaan Hotel, Musheerabad, Hyderabad
          </p>
          <div className="banner-card-phone">
            <Phone size={14} /> 98481 88898 / 90101 07500
          </div>
        </a>

        {/* Card 3: V Care Clinic - Clickable Link */}
        <a className="banner-branch-card" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer" title="Open V Care Clinic on Google Maps">
          <div className="banner-card-header">
            <VCareLogo />
            <div className="banner-card-title">
              <strong>V CARE CLINIC</strong>
              <span>— CLINIC —</span>
            </div>
          </div>
          <div className="timing-pill">
            <Clock size={12} /> Mon To Sat: 3:00 PM To 4:30 PM
          </div>
          <p className="banner-card-address">
            <MapPin size={15} /> Near Alhamdulillah Hotel, Aghapura, Nampally
          </p>
          <div className="banner-card-phone">
            <Phone size={14} /> 91779 01230
          </div>
        </a>

        {/* Card 4: 24/7 Emergency Siren */}
        <div className="banner-emergency-card">
          <div className="siren-box">
            <Siren size={26} />
          </div>
          <div className="emergency-info">
            <strong>24/7</strong>
            <div className="emerg-title">Emergency Services</div>
            <div className="emerg-list">Critical Care • Pharmacy • Diagnostics</div>
            <div className="emergency-footer-note">Experienced Doctors & Well Trained Staff</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [requestText, setRequestText] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [todayDate, setTodayDate] = useState('');

  useEffect(() => {
    const now = new Date();
    const yyyy = now.getFullYear();
    const mm = String(now.getMonth() + 1).padStart(2, '0');
    const dd = String(now.getDate()).padStart(2, '0');
    setTodayDate(`${yyyy}-${mm}-${dd}`);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  function handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = String(formData.get('name') || '').trim();
    const phone = String(formData.get('phone') || '').replace(/[\s()+-]/g, '');
    const date = String(formData.get('date') || '');
    const service = String(formData.get('service') || '');
    const message = String(formData.get('message') || '').trim();

    const now = new Date();
    const localToday = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

    setRequestText('');

    if (!name) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!/^(?:91)?[6-9][0-9]{9}$/.test(phone)) {
      setErrorMessage('Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    if (!date || date < localToday) {
      setErrorMessage('Please choose today or a future date for your appointment.');
      return;
    }
    if (new Date(`${date}T12:00:00`).getDay() === 0) {
      setErrorMessage('The clinic is closed on Sundays. Please choose Monday through Saturday.');
      return;
    }

    setErrorMessage('');
    const formattedReq = `Hello Dr. Mohd Vaseem,\n\nI would like to request an appointment:\n• Patient Name: ${name}\n• Mobile: +91 ${phone.slice(-10)}\n• Preferred Date: ${date}\n• Specialty Consultation: ${service}${message ? `\n• Notes: ${message}` : ''}\n\nPlease confirm availability. Thank you!`;
    setRequestText(formattedReq);
  }

  return (
    <div className="site-shell" id="home">
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="topbar-info">
          <span className="topbar-item">
            <MapPin size={15} />
            Prime HighCare Hospital, Attapur, Pillar No. 102, Langar House, Hyderabad
          </span>
          <span className="topbar-item">
            <Clock size={15} />
            Mon – Sat: 7:00 PM – 10:30 PM (Sunday Closed)
          </span>
        </div>
        <a href={`tel:${PHONE_NUMBER}`} className="topbar-phone">
          <Phone size={14} />
          {PHONE_DISPLAY}
        </a>
      </div>

      {/* Main Header / Navigation */}
      <header>
        <a href="#home" className="brand" aria-label="Dr. Mohd Vaseem Home">
          <div className="brand-icon">
            <LungsIcon size={26} color="#ffffff" />
          </div>
          <div className="brand-text">
            <strong>Dr. Mohd Vaseem</strong>
            <span>MBBS MD FCCP (USA) CCEBDM FCD</span>
            <small>Sr. Consultant Pulmonologist & Diabetologist</small>
          </div>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle Navigation Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={menuOpen ? 'open' : ''}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About Doctor</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#conditions" onClick={() => setMenuOpen(false)}>Conditions We Treat</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)}>Reviews</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>

        <a className="btn-primary" href="#appointment">
          <CalendarDays size={18} />
          Book Appointment
        </a>
      </header>

      {/* Top Clinic Branches 4-Card Banner Strip */}
      <ClinicBannerStrip />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <div className="badge-15-years">
            <Award size={18} /> 15+ Years Clinical Experience
          </div>
          
          <span className="hero-eyebrow">COMPASSIONATE CARE. BETTER HEALTH.</span>
          <h1>Dr. Mohd Vaseem</h1>
          <div className="hero-qualifications">MBBS MD FCCP (USA) CCEBDM FCD</div>
          <div className="hero-specialty-titles">
            Sr Consultant Clinical & Interventional Pulmonologist (Chest Physician)<br />
            Critical Care & Sleep Specialist &nbsp;•&nbsp; General Physician & Diabetologist &nbsp;•&nbsp; Infectious Disease Specialist
          </div>

          <p className="hero-description">
            Providing expert medical care with a patient-first approach. 15+ years of dedicated clinical experience in pulmonology, chest disease, sleep disorders, and diabetes care.
          </p>

          <div className="hero-actions">
            <a className="btn-primary" href={`tel:${PHONE_NUMBER}`}>
              <Phone size={18} />
              Call Now: {PHONE_DISPLAY}
            </a>
            <a className="btn-outline" href="#appointment">
              <CalendarDays size={18} />
              Book Appointment
            </a>
            <a className="btn-outline" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="/images/dr-vaseem.jpg" alt="Dr. Mohd Vaseem - 15+ Years Experienced Pulmonologist" />
          </div>

          <div className="hero-badges-container">
            <div className="hero-badge-card">
              <div className="hero-badge-icon gold">
                <Award size={22} fill="currentColor" />
              </div>
              <div className="hero-badge-content">
                <strong>15+ Years Experience</strong>
                <span>Sr. Consultant Physician</span>
              </div>
            </div>

            <div className="hero-badge-card">
              <div className="hero-badge-icon gold">
                <Star size={22} fill="currentColor" />
              </div>
              <div className="hero-badge-content">
                <strong>4.9 / 5 Rating</strong>
                <span>168+ Google Reviews</span>
              </div>
            </div>

            <div className="hero-badge-card">
              <div className="hero-badge-icon">
                <MapPin size={22} />
              </div>
              <div className="hero-badge-content">
                <strong>Prime HighCare Hospital</strong>
                <span>Attapur, Hyderabad</span>
              </div>
            </div>

            <div className="hero-badge-card">
              <div className="hero-badge-icon">
                <Clock size={22} />
              </div>
              <div className="hero-badge-content">
                <strong>Evening Timings</strong>
                <span>7:00 PM - 10:30 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards Strip */}
      <section className="trust-strip">
        <div className="trust-card">
          <div className="trust-icon">
            <Award size={24} />
          </div>
          <div className="trust-content">
            <strong>15+ Years Experience</strong>
            <span>Dedicated senior consultant & interventional physician</span>
          </div>
        </div>

        <div className="trust-card">
          <div className="trust-icon">
            <HeartHandshake size={24} />
          </div>
          <div className="trust-content">
            <strong>Patient First Approach</strong>
            <span>We listen, we care, we heal with compassionate care</span>
          </div>
        </div>

        <div className="trust-card">
          <div className="trust-icon">
            <ShieldCheck size={24} />
          </div>
          <div className="trust-content">
            <strong>Affordable Care</strong>
            <span>Quality medical treatment at accessible prices</span>
          </div>
        </div>

        <div className="trust-card">
          <div className="trust-icon">
            <Star size={24} />
          </div>
          <div className="trust-content">
            <strong>Trusted by Patients</strong>
            <span>4.9 star rating with 168+ verified reviews</span>
          </div>
        </div>
      </section>

      {/* Our Specializations Section - Exact Requested Order */}
      <section className="section" id="services">
        <div className="section-header">
          <span className="eyebrow">OUR SPECIALIZATIONS</span>
          <h2>Specialized Medical Care</h2>
          <p>Comprehensive healthcare services delivered by Dr. Mohd Vaseem (15+ Years Experience).</p>
        </div>

        <div className="specializations-grid">
          {services.map((s, index) => (
            <div className="spec-card" key={s.id}>
              <div className="spec-icon">
                <s.icon size={28} />
              </div>
              <h3>{s.name}</h3>
              <p>{s.text}</p>
              <button
                className="btn-learn-more"
                onClick={() => setSelectedService(selectedService === index ? null : index)}
              >
                Learn More <ChevronDown size={14} style={{ transform: selectedService === index ? 'rotate(180deg)' : 'none' }} />
              </button>
            </div>
          ))}
        </div>

        {selectedService !== null && (
          <div className="spec-detail-box">
            <div>
              <h4>{services[selectedService].name}</h4>
              <p>{services[selectedService].detail}</p>
            </div>
            <button className="btn-outline" onClick={() => setSelectedService(null)}>
              Close Details <X size={16} />
            </button>
          </div>
        )}
      </section>

      {/* About Dr. Mohd Vaseem Section */}
      <section className="section" id="about">
        <div className="section-header">
          <span className="eyebrow">MEET YOUR DOCTOR</span>
          <h2>About Dr. Mohd Vaseem</h2>
        </div>

        <div className="about-card">
          <div className="about-image">
            <img src="/images/dr-vaseem.jpg" alt="Dr. Mohd Vaseem - Sr Consultant Pulmonologist" />
          </div>

          <div className="about-content">
            <div className="badge-15-years" style={{ width: 'fit-content' }}>
              <Award size={16} /> 15+ Years Experience
            </div>
            <h2>Dr. Mohd Vaseem</h2>
            <div className="about-doctor-title">
              MBBS MD FCCP (USA) CCEBDM FCD<br />
              Sr Consultant Clinical & Interventional Pulmonologist (Chest Physician) · Critical Care & Sleep Specialist · General Physician & Diabetologist · Infectious Disease Specialist
            </div>
            <p>
              Dr. Mohd Vaseem is a renowned Senior Consultant Clinical & Interventional Pulmonologist, Critical Care & Sleep Specialist, General Physician, Diabetologist, and Infectious Disease Specialist with over 15 years of rich clinical experience in Hyderabad.
            </p>
            <p>
              He specializes in advanced sleep medicine assessment, asthma & COPD care, interventional pulmonology, comprehensive diabetes management, and infectious disease care with a patient-first approach.
            </p>

            <div className="qualifications-row">
              <div className="qual-item">
                <GraduationCap size={20} />
                <div>
                  <strong>Degrees</strong>
                  <span>MBBS MD FCCP (USA)</span>
                </div>
              </div>
              <div className="qual-item">
                <ShieldCheck size={20} />
                <div>
                  <strong>Fellowships</strong>
                  <span>CCEBDM FCD</span>
                </div>
              </div>
              <div className="qual-item">
                <Globe size={20} />
                <div>
                  <strong>Languages</strong>
                  <span>English, Hindi, Urdu, Telugu</span>
                </div>
              </div>
            </div>

            <div>
              <a className="btn-primary" href="#appointment">
                Book Consultation with Dr. Vaseem
              </a>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="stat-box gold">
              <Award size={28} />
              <strong>15+ Years</strong>
              <span>Clinical Experience</span>
            </div>

            <div className="stat-box gold">
              <Star size={28} fill="currentColor" />
              <strong>4.9 / 5</strong>
              <span>Google Rating</span>
            </div>

            <div className="stat-box">
              <Activity size={28} />
              <strong>5+</strong>
              <span>Specializations</span>
            </div>

            <div className="stat-box">
              <HeartHandshake size={28} />
              <strong>1000+</strong>
              <span>Happy Patients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Conditions We Treat Section */}
      <section className="section" id="conditions" style={{ background: '#f4f8ff' }}>
        <div className="section-header">
          <div className="badge-15-years" style={{ margin: '0 auto 12px' }}>
            <Award size={16} /> 15+ Years Expert Care
          </div>
          <span className="eyebrow">CONDITIONS WE TREAT</span>
          <h2>Comprehensive Health Care</h2>
          <p>Consult Dr. Mohd Vaseem for expert evaluation and personalized treatment plans.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {[
            'Asthma & Bronchitis',
            'COPD & Lung Infections',
            'Sleep Disorders & Apnea',
            'Diabetes & Blood Sugar Control',
            'General Health Checkups',
            'Fever & Viral Infections',
            'Hypertension & Blood Pressure',
            'Chest Infections & Cough',
            'Infectious Diseases',
            'Thyroid Management'
          ].map((cond) => (
            <div key={cond} style={{ background: '#ffffff', padding: '12px 20px', borderRadius: '30px', border: '1px solid #cbdffc', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: '600', color: '#041c44' }}>
              <Check size={16} color="#1d61e7" />
              {cond}
            </div>
          ))}
        </div>
      </section>

      {/* 3-Column Visit / Booking / Location Section */}
      <section className="section" id="reviews">
        <div className="section-header">
          <span className="eyebrow">PLAN YOUR VISIT</span>
          <h2>Reviews, Booking & Location</h2>
        </div>

        <div className="visit-section">
          {/* Column 1: Reviews */}
          <div className="visit-card">
            <h3>What Patients Say</h3>

            <div className="rating-big-box">
              <div className="rating-score">4.9</div>
              <div>
                <div className="stars-row">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                <div className="rating-count">168+ Google Verified Reviews</div>
              </div>
            </div>

            <div className="reviews-scroll-container">
              {googleReviews.map((r) => (
                <div className="review-quote-card" key={r.id}>
                  <div className="reviewer-header">
                    <div className="reviewer-info">
                      <div className="avatar-circle">{r.initial}</div>
                      <div>
                        <div className="reviewer-name">{r.name}</div>
                        <div className="reviewer-meta">{r.date}</div>
                      </div>
                    </div>
                    <div className="review-google-badge">
                      <Globe size={11} /> Google
                    </div>
                  </div>
                  <div className="review-stars-mini">
                    {[...Array(r.rating)].map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" />
                    ))}
                  </div>
                  <p className="review-text">"{r.text}"</p>
                </div>
              ))}
            </div>

            <div className="branch-reviews-links">
              <a className="btn-primary" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={16} />
                Prime HighCare Hospital Google Listing ↗
              </a>
              <a className="btn-google-reviews" href={PROCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={15} />
                PRO CARE Reviews (117+ Google Reviews) ↗
              </a>
              <a className="btn-google-reviews" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={15} />
                V Care Clinic Google Reviews ↗
              </a>
            </div>
          </div>

          {/* Column 2: Appointment Form */}
          <div className="visit-card booking-card" id="appointment">
            <h3>Book an Appointment</h3>
            <p style={{ fontSize: '13px', color: '#475569', marginTop: '-10px', marginBottom: '16px' }}>
              Fill out details to prepare your appointment request with Dr. Mohd Vaseem.
            </p>

            <form onSubmit={handleFormSubmit}>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input id="name" name="name" type="text" placeholder="Enter your full name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input id="phone" name="phone" type="tel" placeholder="10-digit mobile number" required />
                </div>

                <div className="form-group">
                  <label htmlFor="date">Preferred Date *</label>
                  <input id="date" name="date" type="date" min={todayDate} required />
                </div>

                <div className="form-group">
                  <label htmlFor="service">Specialty Consultation</label>
                  <select id="service" name="service">
                    {services.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="message">Additional Message (Optional)</label>
                  <textarea id="message" name="message" rows={2} placeholder="Describe your symptoms or requirements..." />
                </div>
              </div>

              <p className="form-note">
                Timings: Prime HighCare (7:00-10:30 PM), ProCare (4:30-6:30 PM), V Care (3:00-4:30 PM). Sunday Closed.
              </p>

              {errorMessage && <div className="form-error">{errorMessage}</div>}

              <button className="btn-primary" type="submit" style={{ width: '100%' }}>
                <CalendarDays size={18} />
                Prepare Appointment Request
              </button>
            </form>

            {requestText && (
              <div className="request-result-box">
                <strong>Your Appointment Request is Ready!</strong>
                <p>Click below to send your details directly to Dr. Vaseem's reception on WhatsApp:</p>
                <div className="request-preview">{requestText}</div>
                <a
                  className="btn-primary"
                  href={`https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(requestText)}`}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '100%', background: '#25D366', borderColor: '#25D366' }}
                >
                  Continue to WhatsApp →
                </a>
              </div>
            )}
          </div>

          {/* Column 3: Location Details */}
          <div className="visit-card location-card-wrapper" id="contact">
            <h3>Hospital Location</h3>

            <div className="location-info-list">
              <div className="location-info-item">
                <MapPin size={20} />
                <div>
                  <strong>Prime HighCare Hospital</strong>
                  <span>Attapur, Pillar Number-102, Langar House, Hyderabad, Telangana 500008</span>
                </div>
              </div>

              <div className="location-info-item">
                <Phone size={20} />
                <div>
                  <strong>Phone Contact</strong>
                  <a href={`tel:${PHONE_NUMBER}`}>{PHONE_DISPLAY}</a>
                </div>
              </div>

              <div className="location-info-item">
                <Clock size={20} />
                <div>
                  <strong>Timings</strong>
                  <span>Mon – Sat: 7:00 PM – 10:30 PM (Sunday Closed)</span>
                </div>
              </div>
            </div>

            <a className="map-preview-card" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer">
              <MapPin size={32} />
              <strong>Find us at Prime HighCare Hospital</strong>
              <span>Open in Google Maps ↗</span>
            </a>

            <div className="location-btns">
              <a className="btn-outline" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer">
                <MapPin size={16} />
                Get Directions
              </a>
              <a className="btn-primary" href={`tel:${PHONE_NUMBER}`}>
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section" id="faq">
        <div className="section-header">
          <span className="eyebrow">FAQ</span>
          <h2>Frequently Asked Questions</h2>
          <p>Helpful answers before your consultation with Dr. Mohd Vaseem.</p>
        </div>

        <div className="faq-grid">
          {[
            {
              q: 'How many years of experience does Dr. Mohd Vaseem have?',
              a: 'Dr. Mohd Vaseem has over 15+ years of clinical experience as a Senior Consultant Pulmonologist, Critical Care & Sleep Specialist, General Physician, and Diabetologist in Hyderabad.'
            },
            {
              q: 'What are Dr. Mohd Vaseem’s consultation timings?',
              a: 'Dr. Vaseem consults at V Care Clinic (3:00 PM - 4:30 PM), ProCare Clinic (4:30 PM - 6:30 PM), and Prime HighCare Hospital (7:00 PM - 10:30 PM).'
            },
            {
              q: 'How do I book an appointment?',
              a: 'Fill out the online appointment form on this page to send a direct WhatsApp message to reception, or call 9160621606 directly.'
            },
            {
              q: 'What respiratory and chest conditions does Dr. Vaseem treat?',
              a: 'Dr. Vaseem treats asthma, COPD, bronchitis, chest infections, lung disease, snoring, obstructive sleep apnea, and post-viral respiratory complications.'
            }
          ].map((item, idx) => (
            <details className="faq-item" key={idx}>
              <summary className="faq-summary">
                {item.q}
                <ChevronDown size={18} />
              </summary>
              <div className="faq-content">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Bottom Clinic Branches 4-Card Banner Strip (above footer) */}
      <ClinicBannerStrip />

      {/* Footer */}
      <footer>
        <div className="footer-grid">
          <div className="footer-col">
            <div className="brand" style={{ marginBottom: '16px' }}>
              <div className="brand-icon" style={{ background: '#ffffff', color: '#041c44' }}>
                <LungsIcon size={24} color="#041c44" />
              </div>
              <div className="brand-text">
                <strong style={{ color: '#ffffff' }}>Dr. Mohd Vaseem</strong>
                <span style={{ color: '#cbd5e1' }}>MBBS MD FCCP (USA) CCEBDM FCD</span>
              </div>
            </div>
            <p>
              Sr. Consultant Pulmonologist (Chest Physician), Critical Care & Sleep Specialist, General Physician & Diabetologist with 15+ years of experience.
            </p>
            <div className="footer-socials">
              <a href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer" className="social-icon" aria-label="Google Business">
                <Globe size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon" aria-label="Youtube">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Doctor</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#conditions">Conditions We Treat</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Our Specializations</h4>
            <ul className="footer-links">
              <li><a href="#services">Interventional Pulmonologist</a></li>
              <li><a href="#services">Critical Care & Sleep Specialist</a></li>
              <li><a href="#services">General Physician</a></li>
              <li><a href="#services">Diabetologist</a></li>
              <li><a href="#services">Infectious Disease Specialist</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p style={{ marginBottom: '12px' }}>
              <MapPin size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Prime HighCare Hospital, Attapur, Pillar No. 102, Langar House, Hyderabad
            </p>
            <p style={{ marginBottom: '12px' }}>
              <Phone size={16} style={{ display: 'inline', marginRight: '6px' }} />
              <a href={`tel:${PHONE_NUMBER}`} style={{ color: '#ffffff' }}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Mon – Sat: 7:00 PM – 10:30 PM (Sunday Closed)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} Dr. Mohd Vaseem (15+ Years Experience). All rights reserved.
          </div>
          <div>
            Prime HighCare Hospital &nbsp;•&nbsp; ProCare Clinic &nbsp;•&nbsp; V Care Clinic
          </div>
        </div>
      </footer>
    </div>
  );
}
