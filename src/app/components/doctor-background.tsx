const positions = [
  ['2019–2025', 'Apollo, Hyderguda', 'Intensivist'],
  ['2018–2024', 'Sai Krishna Neuro, Kachiguda', 'Pulmonologist'],
  ['Aug 2019–Nov 2022', 'Kamineni, King Koti', 'Pulmonologist / Intensivist'],
  ['2019–2021', 'Kamineni, LB Nagar', 'Assistant Professor'],
  ['Apr 2018–Dec 2019', 'Olive, Nanal Nagar', 'Intensivist'],
  ['Apr 2018–Jul 2019', 'Virinchi, Banjara Hills', 'Senior Resident, Pulmonology'],
  ['2018–2019', 'Muslim Maternity, Chaderghat', 'Pulmonologist'],
  ['2013–2015', 'Padmavati Cardiac Care, Tarnaka', 'Intensivist'],
  ['2012–2014', 'Yashoda, Secunderabad', 'Intensivist'],
  ['2011–2012', 'Health Care, LB Nagar', 'Emergency physician'],
];

export default function DoctorBackground() {
  return (
    <section className="section doctor-background" id="doctor-background" aria-labelledby="background-heading">
      <div className="section-header">
        <span className="eyebrow">PROFESSIONAL BACKGROUND</span>
        <h2 id="background-heading">Education &amp; Hospital Experience</h2>
      </div>
      <div className="background-columns">
        <div className="education-panel">
          <h3>Education</h3>
          <ol className="education-list">
            <li><span>2015–2018</span><strong>MD, Pulmonology</strong><p>Prathima Institute, Karimnagar</p></li>
            <li><span>2014</span><strong>Diabetology fellowship</strong><p>Medvarsity, Apollo</p></li>
            <li><span>2012</span><strong>Critical Care fellowship</strong><p>Yashoda, Secunderabad</p></li>
            <li><span>2006–2012</span><strong>MBBS</strong><p>Deccan College of Medical Sciences</p></li>
          </ol>
          <a className="btn-outline" href="https://www.carehospitals.com/doctor/hyderabad/nampally/mohammed-vaseem-pulmonologist" target="_blank" rel="noreferrer">View CARE Hospitals profile ↗</a>
        </div>
        <div className="experience-panel">
          <h3>Previous hospital appointments</h3>
          <div className="career-table-scroll" role="region" aria-label="Hospital experience" tabIndex={0}>
            <table className="career-table">
              <thead><tr><th scope="col">Period</th><th scope="col">Hospital &amp; location</th><th scope="col">Role</th></tr></thead>
              <tbody>{positions.map(([period, hospital, role]) => <tr key={hospital}><td>{period}</td><th scope="row">{hospital}</th><td>{role}</td></tr>)}</tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
