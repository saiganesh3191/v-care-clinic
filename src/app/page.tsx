'use client';

import { useEffect, useState, type FormEvent } from 'react';
import {
  Activity,
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
  Stethoscope,
  Syringe,
  Users,
  X,
  ExternalLink,
  Facebook,
  Instagram,
  Youtube,
  Globe
} from 'lucide-react';

// Client-provided Google Share Links & Contact Info
const VCARE_MAP_LINK = 'https://share.google/sDSW9fSv9sQRGjmMa';
const HIGHCARE_MAP_LINK = 'https://share.google/OArnlwlzjU8Tk41tF';
const PROCARE_MAP_LINK = 'https://share.google/MdXSTJbCf0GppnyzR';

const PHONE_NUMBER = '+919985721155';
const PHONE_DISPLAY = '+91 99857 21155';

const services = [
  {
    id: 1,
    name: 'General Practitioner',
    icon: Stethoscope,
    text: 'Comprehensive primary healthcare for all age groups with a focus on holistic wellness.',
    detail: 'Routine health check-ups, general consultations, diagnostic evaluations, and preventative care guidance for individuals and families.'
  },
  {
    id: 2,
    name: 'Diabetologist',
    icon: Syringe,
    text: 'Diabetes care, management, blood sugar control, and prevention for a healthier life.',
    detail: 'Personalized diabetes management plans, blood glucose monitoring analysis, diet/lifestyle counseling, and preventing complications.'
  },
  {
    id: 3,
    name: 'Infectious Disease Physician',
    icon: ShieldCheck,
    text: 'Diagnosis and treatment of complex bacterial, viral, fungal, and seasonal infections.',
    detail: 'Comprehensive evaluation of fever of unknown origin, viral infections, bacterial illnesses, and post-infection care.'
  },
  {
    id: 4,
    name: 'Pulmonologist',
    icon: Activity,
    text: 'Expert care for respiratory conditions, asthma, bronchitis, and chronic lung problems.',
    detail: 'Specialized diagnosis and management for chronic cough, shortness of breath, COPD, asthma, allergic bronchitis, and respiratory disorders.'
  },
  {
    id: 5,
    name: 'Sleep Clinic',
    icon: MoonStar,
    text: 'Diagnosis and treatment for sleep disorders, insomnia, and sleep apnea.',
    detail: 'Evaluation of snoring, daytime fatigue, sleep-disordered breathing, insomnia, and comprehensive sleep health optimization.'
  }
];

const googleReviews = [
  {
    id: 1,
    name: 'Syed Salman',
    initial: 'S',
    date: '1 month ago',
    rating: 5,
    text: 'Dr. Mohd Vaseem is one of the best doctors in Hyderabad. Very polite, patient listener, and gives exact diagnosis. My diabetes and blood pressure are well controlled under his care.'
  },
  {
    id: 2,
    name: 'Mohammed Abdul Qadir',
    initial: 'M',
    date: '2 months ago',
    rating: 5,
    text: 'Visited for fever and severe cough. Dr. Vaseem explained the problem clearly without unnecessary tests or heavy dosage medicines. Within 2 days I recovered completely. Excellent care!'
  },
  {
    id: 3,
    name: 'Ayesha Fatima',
    initial: 'A',
    date: '3 months ago',
    rating: 5,
    text: 'Extremely knowledgeable physician! Took my father for respiratory issues and sleep apnea consultation. Dr. Vaseem’s treatment plan brought immense relief. Very grateful to him.'
  },
  {
    id: 4,
    name: 'Mirza Ibrahim Baig',
    initial: 'M',
    date: '4 months ago',
    rating: 5,
    text: 'Very humble and experienced doctor in Aghapura, Nampally. He gives enough time to every patient and listens carefully to all complaints. Staff is also very helpful.'
  },
  {
    id: 5,
    name: 'Suhail Ahmed',
    initial: 'S',
    date: '5 months ago',
    rating: 5,
    text: 'Dr. Vaseem is our family doctor for years. Whether it’s seasonal infections or routine health checks, he provides genuine and affordable medical care. Highly recommended!'
  }
];


function ClinicBannerStrip() {
  return (
    <div className="header-banner-strip">
      <div className="banner-grid-4">
        {/* Card 1: Prime High Care Hospitals */}
        <a className="banner-branch-card" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer">
          <div className="banner-card-header">
            <div className="banner-card-icon highcare">
              <HeartHandshake size={22} />
            </div>
            <div className="banner-card-title">
              <strong>PRIME HIGH CARE</strong>
              <span>H O S P I T A L S</span>
            </div>
          </div>
          <div className="timing-pill">
            <Clock size={12} /> Mon To Sat: 10.00 AM To 4.00 PM
          </div>
          <p className="banner-card-address">
            <MapPin size={15} /> Attapur, Pillar Number-102, Langar House, HYD
          </p>
          <div className="banner-card-phone">
            <Phone size={14} /> 91 606 21 606
          </div>
        </a>

        {/* Card 2: PRO CARE Progressively Healthy */}
        <a className="banner-branch-card" href={PROCARE_MAP_LINK} target="_blank" rel="noreferrer">
          <div className="banner-motto">“We Treat, He Cures”</div>
          <div className="banner-card-header">
            <div className="banner-card-icon procare">
              <Stethoscope size={22} />
            </div>
            <div className="banner-card-title">
              <strong>PRO CARE</strong>
              <span>PROGRESSIVELY HEALTHY</span>
            </div>
          </div>
          <div className="timing-pill red">
            <Clock size={12} /> Mon To Sat: 6.00 PM To 8.00 PM
          </div>
          <p className="banner-card-address">
            <MapPin size={15} /> Beside Marjaan Hotel, Musheerabad, Hyderabad
          </p>
          <div className="banner-card-phone">
            <Phone size={14} /> 98481 88898 / 90101 07500
          </div>
        </a>

        {/* Card 3: V CARE CLINIC */}
        <a className="banner-branch-card" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer">
          <div className="banner-card-header">
            <div className="banner-card-icon vcare">
              <ShieldCheck size={22} />
            </div>
            <div className="banner-card-title">
              <strong>V CARE CLINIC</strong>
              <span>— CLINIC —</span>
            </div>
          </div>
          <div className="timing-pill">
            <Clock size={12} /> Mon To Sat: 4.00 PM To 6.00 PM
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
    const formattedReq = `Hello Dr. Mohd Vaseem (V Care Clinic),\n\nI would like to request an appointment:\n• Name: ${name}\n• Mobile: +91 ${phone.slice(-10)}\n• Preferred Date: ${date}\n• Consultation Specialty: ${service}${message ? `\n• Notes: ${message}` : ''}\n\nPlease confirm availability. Thank you!`;
    setRequestText(formattedReq);
  }

  return (
    <div className="site-shell" id="home">
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="topbar-info">
          <span className="topbar-item">
            <MapPin size={15} />
            V Care Clinic, Behind Habeeb Nagar PS, Near Alhamdulillah Hotel Rd, Aghapura, Nampally, Hyderabad 500001
          </span>
          <span className="topbar-item">
            <Clock size={15} />
            Mon – Sat: 4:00 PM – 6:00 PM (Sunday Closed)
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
            <Stethoscope size={24} />
          </div>
          <div className="brand-text">
            <strong>Dr. Mohd Vaseem</strong>
            <span>MBBS MD FCCP (USA) CCEBDM FCD</span>
            <small>Consultant Pulmonologist & Diabetologist</small>
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
          <span className="hero-eyebrow">COMPASSIONATE CARE. BETTER HEALTH.</span>
          <h1>Dr. Mohd Vaseem</h1>
          <div className="hero-qualifications">MBBS MD FCCP (USA) CCEBDM FCD</div>
          <div className="hero-specialty-titles">
            Consultant Pulmonologist (Chest Physician)<br />
            Critical Care & Sleep Specialist &nbsp;•&nbsp; General Physician & Diabetologist
          </div>

          <p className="hero-specialties">
            General Practitioner &nbsp;•&nbsp; Diabetologist &nbsp;•&nbsp; Infectious Disease Physician &nbsp;•&nbsp; Pulmonologist &nbsp;•&nbsp; Sleep Clinic
          </p>

          <p className="hero-description">
            Providing expert medical care with a patient-first approach. Your health is our top priority with personalized consultations and thorough diagnosis.
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
            <a className="btn-outline" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer">
              <MapPin size={18} />
              Get Directions
            </a>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img src="/images/dr-vaseem.jpg" alt="Dr. Mohd Vaseem - Best Doctor in Hyderabad" />
          </div>

          <div className="hero-badges-container">
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
                <Users size={22} />
              </div>
              <div className="hero-badge-content">
                <strong>Multi-Speciality</strong>
                <span>Care for your entire family</span>
              </div>
            </div>

            <div className="hero-badge-card">
              <div className="hero-badge-icon">
                <MapPin size={22} />
              </div>
              <div className="hero-badge-content">
                <strong>Aghapura, Nampally</strong>
                <span>Hyderabad, Telangana</span>
              </div>
            </div>

            <div className="hero-badge-card">
              <div className="hero-badge-icon">
                <Clock size={22} />
              </div>
              <div className="hero-badge-content">
                <strong>Mon - Sat</strong>
                <span>4:00 PM - 6:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Cards Strip */}
      <section className="trust-strip">
        <div className="trust-card">
          <div className="trust-icon">
            <Stethoscope size={24} />
          </div>
          <div className="trust-content">
            <strong>Experienced Doctor</strong>
            <span>Dedicated and experienced medical professional</span>
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

      {/* Our Specializations Section */}
      <section className="section" id="services">
        <div className="section-header">
          <span className="eyebrow">OUR SPECIALIZATIONS</span>
          <h2>Specialized Medical Care</h2>
          <p>Comprehensive healthcare services tailored to your individual health needs.</p>
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
            <img src="/images/dr-vaseem.jpg" alt="Dr. Mohd Vaseem Consultation" />
          </div>

          <div className="about-content">
            <h2>Dr. Mohd Vaseem</h2>
            <div className="about-doctor-title">
              MBBS MD FCCP (USA) CCEBDM FCD<br />
              Consultant Pulmonologist (Chest Physician) · Critical Care & Sleep Specialist · General Physician & Diabetologist
            </div>
            <p>
              Dr. Mohd Vaseem is a highly trusted medical professional offering multi-speciality care with a focus on patient well-being. He is associated with V Care Clinic in Aghapura, Nampally, Hyderabad.
            </p>
            <p>
              He is known for his compassionate approach and accurate diagnosis, ensuring the best possible care for his patients.
            </p>

            <div className="qualifications-row">
              <div className="qual-item">
                <GraduationCap size={20} />
                <div>
                  <strong>Qualification</strong>
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
                Book Consultation with Doctor
              </a>
            </div>
          </div>

          <div className="about-stats-grid">
            <div className="stat-box">
              <Users size={28} />
              <strong>168+</strong>
              <span>Google Reviews</span>
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
          <span className="eyebrow">CONDITIONS WE TREAT</span>
          <h2>Comprehensive Health Care</h2>
          <p>Consult Dr. Mohd Vaseem for expert evaluation and personalized treatment plans.</p>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
          {[
            'General Health Checkups',
            'Diabetes & Blood Sugar Care',
            'Fever & Viral Infections',
            'Breathing Problems & Asthma',
            'Sleep Disorders & Apnea',
            'Hypertension & Blood Pressure',
            'Chest Infections & Cough',
            'Thyroid Management',
            'Preventative Care & Screening'
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
              <a className="btn-primary" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={16} />
                View All Reviews on Google ↗
              </a>
              <a className="btn-google-reviews" href={PROCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={15} />
                PRO CARE Reviews (117+ Google Reviews) ↗
              </a>
              <a className="btn-google-reviews" href={HIGHCARE_MAP_LINK} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                <ExternalLink size={15} />
                Prime High Care Google Listing ↗
              </a>
            </div>
          </div>


          {/* Column 2: Appointment Form */}
          <div className="visit-card booking-card" id="appointment">
            <h3>Book an Appointment</h3>
            <p style={{ fontSize: '13px', color: '#475569', marginTop: '-10px', marginBottom: '16px' }}>
              Fill out details to prepare your appointment request.
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
                Clinic hours: Mon–Sat, 4:00 PM – 6:00 PM. Sunday Closed. Reception will confirm your visit slot upon receiving your request.
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
                <p>Click below to send your details directly to clinic reception on WhatsApp:</p>
                <div className="request-preview">{requestText}</div>
                <a
                  className="btn-primary"
                  href={`https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(requestText)}`}
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
            <h3>Clinic Location</h3>

            <div className="location-info-list">
              <div className="location-info-item">
                <MapPin size={20} />
                <div>
                  <strong>V Care Clinic</strong>
                  <span>Behind Habeeb Nagar PS, Near Alhamdulillah Hotel Rd, Aghapura, Nampally, Hyderabad, Telangana 500001</span>
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
                  <span>Mon – Sat: 4:00 PM – 6:00 PM (Sunday Closed)</span>
                </div>
              </div>
            </div>

            <div className="map-preview-card">
              <MapPin size={32} />
              <strong>Find us in Aghapura, Nampally</strong>
              <span>Open in Google Maps ↗</span>
            </div>

            <div className="location-btns">
              <a className="btn-outline" href={VCARE_MAP_LINK} target="_blank" rel="noreferrer">
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
          <p>Helpful answers before your visit to V Care Clinic.</p>
        </div>

        <div className="faq-grid">
          {[
            {
              q: 'How do I book an appointment with Dr. Mohd Vaseem?',
              a: 'You can use the online appointment request form on this page, which generates a direct WhatsApp message to clinic reception, or call us directly at +91 99857 21155.'
            },
            {
              q: 'What are the clinic timings at V Care Clinic?',
              a: 'V Care Clinic in Aghapura is open Monday to Saturday from 4:00 PM to 6:00 PM. The clinic is closed on Sundays.'
            },
            {
              q: 'What specialties does Dr. Mohd Vaseem practice?',
              a: 'Dr. Mohd Vaseem is a General Practitioner, Diabetologist, Infectious Disease Physician, Pulmonologist, and runs the Sleep Clinic.'
            },
            {
              q: 'What should I bring for my consultation?',
              a: 'Please bring any previous medical prescriptions, lab reports, blood sugar logs, or imaging reports related to your health condition.'
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
                <Stethoscope size={24} />
              </div>
              <div className="brand-text">
                <strong style={{ color: '#ffffff' }}>Dr. Mohd Vaseem</strong>
                <span style={{ color: '#cbd5e1' }}>MBBS MD FCCP (USA) CCEBDM FCD</span>
              </div>
            </div>
            <p>
              Providing high quality medical care with personal attention and clinical excellence for you and your family.
            </p>
            <div className="footer-socials">
              <a href={VCARE_MAP_LINK} target="_blank" rel="noreferrer" className="social-icon" aria-label="Google Business">
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
              <li><a href="#services">General Practitioner</a></li>
              <li><a href="#services">Diabetologist</a></li>
              <li><a href="#services">Infectious Disease Physician</a></li>
              <li><a href="#services">Pulmonologist</a></li>
              <li><a href="#services">Sleep Clinic</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Info</h4>
            <p style={{ marginBottom: '12px' }}>
              <MapPin size={16} style={{ display: 'inline', marginRight: '6px' }} />
              V Care Clinic, Behind Habeeb Nagar PS, Near Alhamdulillah Hotel Rd, Aghapura, Nampally, Hyderabad
            </p>
            <p style={{ marginBottom: '12px' }}>
              <Phone size={16} style={{ display: 'inline', marginRight: '6px' }} />
              <a href={`tel:${PHONE_NUMBER}`} style={{ color: '#ffffff' }}>{PHONE_DISPLAY}</a>
            </p>
            <p>
              <Clock size={16} style={{ display: 'inline', marginRight: '6px' }} />
              Mon – Sat: 4:00 PM – 6:00 PM (Sunday Closed)
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            © {new Date().getFullYear()} V Care Clinic · Dr. Mohd Vaseem. All rights reserved.
          </div>
          <div>
            Designed with Patient-First Care &nbsp;•&nbsp; Aghapura, Nampally, Hyderabad
          </div>
        </div>
      </footer>
    </div>
  );
}
