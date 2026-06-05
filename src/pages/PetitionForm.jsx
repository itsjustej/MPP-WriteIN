import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { AlertTriangle, CheckCircle, MapPin, Calendar, Info, Star } from 'lucide-react';

// ── CONFIG ───────────────────────────────────────────────────────────────────
const SUPABASE_URL = 'https://bkftdzhuzdvuwnyvxzjm.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrZnRkemh1emR2dXdueXZ4emptIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA2MzE3MzEsImV4cCI6MjA5NjIwNzczMX0.V2zFvMfP0X4z3CII0IqtGOsX5QZxfaFch-n1JSbyo3U';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
// ─────────────────────────────────────────────────────────────────────────────

const NC_COUNTIES = [
  'Alamance','Alexander','Alleghany','Anson','Ashe','Avery','Beaufort','Bertie',
  'Bladen','Brunswick','Buncombe','Burke','Cabarrus','Caldwell','Camden','Carteret',
  'Caswell','Catawba','Chatham','Cherokee','Chowan','Clay','Cleveland','Columbus',
  'Craven','Cumberland','Currituck','Dare','Davidson','Davie','Duplin','Durham',
  'Edgecombe','Forsyth','Franklin','Gaston','Gates','Graham','Granville','Greene',
  'Guilford','Halifax','Harnett','Haywood','Henderson','Hertford','Hoke','Hyde',
  'Iredell','Jackson','Johnston','Jones','Lee','Lenoir','Lincoln','Macon','Madison',
  'Martin','McDowell','Mecklenburg','Mitchell','Montgomery','Moore','Nash',
  'New Hanover','Northampton','Onslow','Orange','Pamlico','Pasquotank','Pender',
  'Perquimans','Person','Pitt','Polk','Randolph','Richmond','Robeson','Rockingham',
  'Rowan','Rutherford','Sampson','Scotland','Stanly','Stokes','Surry','Swain',
  'Transylvania','Tyrrell','Union','Vance','Wake','Warren','Washington','Watauga',
  'Wayne','Wilkes','Wilson','Yadkin','Yancey',
];

const COUNTY_BOE = {
  Alamance: '1128 S. Main Street, Graham, NC 27253',
  Alexander: '370 1st Avenue SW, Taylorsville, NC 28681',
  Alleghany: '348 S. Main St, Lower Level 10, Sparta, NC 28675',
  Anson: '402 Morven Road, Wadesboro, NC 28170',
  Ashe: '150 Government Circle, Ste 2100, Jefferson, NC 28640',
  Avery: '200 Montezuma St, Suite 307, Newland, NC 28657',
  Beaufort: '1702 Live Oak St, Suite 200, Beaufort, NC 28516',
  Bertie: '210 W. Washington St, Windsor, NC 27983',
  Bladen: '301 South Cypress Street, Elizabethtown, NC 28337',
  Brunswick: '75 Stamp Act Drive NE, Building H, Bolivia, NC 28422',
  Buncombe: '35 Woodfin St, Asheville, NC 28801',
  Burke: '2128 S Sterling St, Ste 100, Morganton, NC 28655',
  Cabarrus: '369 Church St N, Concord, NC 28025',
  Caldwell: '120 Hospital Ave NE, Lenoir, NC 28645',
  Camden: '117 NC HWY 343 N, Camden, NC 27921',
  Carteret: '1702 Live Oak St, Suite 200, Beaufort, NC 28516',
  Caswell: '145 Government Drive, Newton, NC 28658',
  Catawba: '145 Government Drive, Newton, NC 28658',
  Chatham: '964 East St, Suite 101, Pittsboro, NC 27312',
  Cherokee: '40 Peachtree Street, Suite 1, Murphy, NC 28906',
  Chowan: '730 N Granville Street, Suite D, Edenton, NC 27932',
  Clay: '75 Riverside Circle Suite 3, Hayesville, NC 28904',
  Cleveland: '827 West Marion St, Shelby, NC 28150',
  Columbus: '2586 James B. White Hwy N, Building B, Whiteville, NC 28472',
  Craven: '406 Craven Street, New Bern, NC 28560',
  Cumberland: '227 Fountainhead Lane Suite 101, Fayetteville, NC 28301',
  Currituck: '2795 Caratoke Highway, Currituck, NC 27929',
  Dare: '954 Marshall C. Collins Drive, Manteo, NC 27954',
  Davidson: '945 N Main St Suite A, Lexington, NC 27292',
  Davie: '161 Poplar St, Suite 102, Mocksville, NC 27028',
  Duplin: '160 Mallard Street, Kenansville, NC 28349',
  Durham: '3825 S Roxboro Street Suite 101, Durham, NC 27713',
  Edgecombe: '201 St Andrew St, Rm 434, Tarboro, NC 27886',
  Forsyth: '201 N Chestnut Street, Winston Salem, NC 27101',
  Franklin: '279 S. Bickett Blvd, Suite 300, Louisburg, NC 27549',
  Gaston: '410 W. Franklin Blvd, Ste 50, Gastonia, NC 28052',
  Gates: '25 Medical Center Rd, Gates, NC 27937',
  Graham: '196 Knight Street Suite A, Robbinsville, NC 28771',
  Granville: '208 Wall Street, Oxford, NC 27565',
  Greene: '104 Hines Street, Snow Hill, NC 28580',
  Guilford: '301 W Market St Room 115, Greensboro, NC 27401',
  Halifax: '10 N. King Street, Halifax, NC 27839',
  Harnett: '200 Alexander Dr, Lillington, NC 27546',
  Haywood: '63 Elmwood Way, Suite A, Waynesville, NC 28786',
  Henderson: '75 E. Central St, Hendersonville, NC 28792',
  Hertford: '418 Everett St, Suite A, Ahoskie, NC 27910',
  Hoke: '227 N Main St, Raeford, NC 28376',
  Hyde: '1223 Main Street, Swan Quarter, NC 27885',
  Iredell: '203 Stockton St, Statesville, NC 28677',
  Jackson: '876 Skyland Drive, Suite 1, Sylva, NC 28779',
  Johnston: '205 S Second St, Smithfield, NC 27577',
  Jones: '110-C S Heritage St, Kinston, NC 28501',
  Lee: '1503 Elm St, Suite 1, Sanford, NC 27330',
  Lenoir: '110-C S Heritage St, Kinston, NC 28501',
  Lincoln: '451 Salem Church Rd, Lincolnton, NC 28092',
  Macon: '5 W Main St, Floor 1, Franklin, NC 28734',
  Madison: '5707 US 25-70 Hwy, Suite E, Room 16, Marshall, NC 28753',
  Martin: '305 E Main St, Room 120, Williamston, NC 27892',
  McDowell: '2458 NC HWY 226 South, Marion, NC 28752',
  Mecklenburg: '741 Kenilworth Ave Ste 202, Charlotte, NC 28204',
  Mitchell: '11 N Mitchell Ave, Room 108, Bakersville, NC 28705',
  Montgomery: '327 North Main Street, Troy, NC 27371',
  Moore: '700 Pinehurst Avenue, Carthage, NC 28327',
  Nash: '1006 Eastern Avenue, RM 109, Nashville, NC 27856',
  'New Hanover': '226 Government Center Drive, Wilmington, NC 28403',
  Northampton: '9495 NC HWY 305, Jackson, NC 27845',
  Onslow: '246 Georgetown Rd, Jacksonville, NC 28540',
  Orange: '208 S. Cameron St, Hillsborough, NC 27278',
  Pamlico: '202 Main Street, Bayboro, NC 28515',
  Pasquotank: '1409 Parkview Dr, Elizabeth City, NC 27909',
  Pender: '305 S. Walker St, Burgaw, NC 28425',
  Perquimans: '333 Winfall Blvd, Hertford, NC 27944',
  Person: '331 South Morgan Street, Roxboro, NC 27573',
  Pitt: '1800 N Greene St, Suite C, Greenville, NC 27834',
  Polk: '231 Ward St, Columbus, NC 28722',
  Randolph: '1457 N. Fayetteville St, Asheboro, NC 27203',
  Richmond: '221 S. Hancock St, Rockingham, NC 28379',
  Robeson: '800 N. Walnut Street, Lumberton, NC 28358',
  Rockingham: '240 Cherokee Camp Rd, Reidsville, NC 27320',
  Rowan: '1935 Jake Alexander Blvd W, Salisbury, NC 28147',
  Rutherford: '145 College Ave, Suite C, Rutherfordton, NC 28139',
  Sampson: '120 County Complex Road, Suite 110, Clinton, NC 28328',
  Scotland: '231 East Cronly St, Suite 305, Laurinburg, NC 28352',
  Stanly: '1000 N First Street Suite 4, Albemarle, NC 28002',
  Stokes: '1101 Main Street, Danbury, NC 27016',
  Surry: '915 E. Atkins Street, Dobson, NC 27017',
  Swain: '45 East Ridge Dr, Bryson City, NC 28713',
  Transylvania: '150 South Gaston Street, Suite A, Brevard, NC 28712',
  Tyrrell: '403 Main Street, Columbia, NC 27925',
  Union: '316-B East Windsor St, Monroe, NC 28112',
  Vance: '300 S. Garnett St, Ste C, Henderson, NC 27536',
  Wake: '1200 N New Hope Road, Raleigh, NC 27610',
  Warren: '309 N Main Street-Annex Building, Warrenton, NC 27589',
  Washington: '37 East Millpond Rd, Roper, NC 27970',
  Watauga: '842 West King Street, Ste 6, Boone, NC 28607',
  Wayne: '309 East Chestnut Street, Goldsboro, NC 27530',
  Wilkes: '110 North Street, RM 315, Wilkesboro, NC 28697',
  Wilson: '112 Douglas St East, Wilson, NC 27893',
  Yadkin: '1300 Unifi Industrial Rd, Yadkinville, NC 27055',
  Yancey: '30 East US HWY 19E By-Pass, Suite 2, Burnsville, NC 28714',
};

function getTodayString() {
  const d = new Date();
  return `${String(d.getMonth() + 1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')}/${d.getFullYear()}`;
}

function formatDob(isoDate) {
  if (!isoDate) return '';
  const [y, m, day] = isoDate.split('-');
  return `${m}/${day}/${y}`;
}

function validate(data) {
  const errors = {};
  if (!data.fullName.trim()) errors.fullName = 'Full name is required.';
  if (!data.address.trim()) errors.address = 'Residential street address is required.';
  if (!/^\d{5}$/.test(data.zip)) errors.zip = 'ZIP code must be exactly 5 digits.';
  if (!data.county) errors.county = 'Please select a county.';
  if (!data.dob) {
    errors.dob = 'Date of birth is required.';
  } else {
    const d = new Date(data.dob);
    if (isNaN(d.getTime())) errors.dob = 'Please enter a valid date of birth.';
  }
  if (!data.confirmed) errors.confirmed = 'You must confirm your information matches your voter registration.';
  return errors;
}

export default function PetitionForm() {
  const today = getTodayString();

  const [form, setForm] = useState({
    fullName: '', address: '', zip: '', county: '',
    dob: '', confirmed: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitting(true);
    setSubmitError('');

    const payload = {
      name: form.fullName,
      address: form.address,
      zipcode: form.zip,
      county: form.county,
      birthdate: form.dob,
      date: new Date().toISOString().slice(0, 10),
    };

    try {
      const { error } = await supabase
        .from('petition_signatures')
        .insert([payload]);
      if (error) throw new Error(error.message);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Submission failed. Please try again.');
      setSubmitting(false);
      return;
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  if (submitted) {
    const boeAddress = COUNTY_BOE[form.county] || 'Contact your county Board of Elections for the address.';
    return (
      <section style={{ background: 'var(--cream)', minHeight: '70vh', padding: '4rem 1rem' }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{
            background: 'var(--white)', border: '2px solid var(--gold)',
            borderRadius: '8px', padding: '2.5rem', textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <CheckCircle size={56} color="var(--gold)" style={{ marginBottom: '1rem' }} />
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2rem', color: 'var(--navy)', marginBottom: '1rem' }}>
              Thank You for Signing!
            </h2>
            <p style={{ color: '#444', lineHeight: '1.7', marginBottom: '1.5rem' }}>
              Your petition entry has been recorded. Remember: your information must exactly match
              your voter registration or your signature may not count.
            </p>
            <div style={{
              background: 'var(--cream)', border: '1px solid var(--red)',
              borderLeft: '4px solid var(--red)', borderRadius: '4px',
              padding: '1rem 1.25rem', textAlign: 'left', marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontWeight: '700', color: 'var(--navy)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                    Submit Your Completed Petition To:
                  </p>
                  <p style={{ fontWeight: '600', color: 'var(--navy)' }}>{form.county} County Board of Elections</p>
                  <p style={{ color: '#555', marginTop: '0.2rem' }}>{boeAddress}</p>
                </div>
              </div>
            </div>
            <button
              onClick={() => { setSubmitted(false); setForm({ fullName: '', address: '', zip: '', county: '', dob: '', confirmed: false }); }}
              style={{
                background: 'var(--red)', color: 'var(--white)', border: 'none',
                padding: '0.75rem 2rem', fontWeight: '700', letterSpacing: '0.08em',
                textTransform: 'uppercase', fontSize: '0.85rem', cursor: 'pointer',
                borderRadius: '4px'
              }}
            >
              Sign Again
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section style={{ background: 'var(--cream)', padding: '3rem 1rem' }}>
      {/* Page Header */}
      <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center', marginBottom: '2rem' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--red)', color: 'white', fontSize: '0.75rem',
          fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.4rem 1rem', marginBottom: '1rem'
        }}>
          <Star size={12} fill="white" />
          The Platform Party
          <Star size={12} fill="white" />
        </div>
        <h1 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', color: 'var(--navy)', marginBottom: '0.5rem' }}>
          Sign the Petition
        </h1>
        <p style={{ color: 'var(--gold)', fontSize: '1.1rem', fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
          Michele Palmer Parks · Write-In Candidate · NC State Senate
        </p>
        <div style={{ height: '3px', width: '60px', background: 'var(--red)', margin: '1rem auto 0' }} />
      </div>

      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        {/* Instructions Box */}
        <div style={{
          background: 'var(--navy)', borderLeft: '4px solid var(--red)',
          borderRadius: '0 6px 6px 0', padding: '1.5rem', marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
            <Info size={18} color="var(--red)" />
            <span style={{ color: 'var(--gold)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Important Instructions
            </span>
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {[
              'You must be a registered voter in the county you select.',
              'Your name, address, date of birth, and signature must match your voter registration exactly.',
              'It is illegal to sign the name of another person to a petition. (NCGS 163-221)',
            ].map((item, i) => (
              <li key={i} style={{ display: 'flex', gap: '0.6rem', color: '#ccc', marginBottom: '0.6rem', alignItems: 'flex-start' }}>
                <span style={{ width: '6px', height: '6px', background: 'var(--red)', borderRadius: '50%', flexShrink: 0, marginTop: '7px' }} />
                {item}
              </li>
            ))}
          </ul>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', marginTop: '1rem', paddingTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Calendar size={16} color="var(--gold)" />
              <span style={{ color: 'white', fontSize: '0.9rem' }}>
                Deadline: <strong style={{ color: 'var(--gold)' }}>July 21, 2026</strong>
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Star size={16} color="var(--gold)" fill="var(--gold)" />
              <span style={{ color: 'white', fontSize: '0.9rem' }}>
                Goal: <strong style={{ color: 'var(--gold)' }}>500 valid signatures needed</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate style={{
          background: 'var(--white)', border: '1px solid #ddd',
          borderRadius: '8px', padding: '2rem',
          boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
        }}>
          <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #eee' }}>
            Complete all fields exactly as they appear on your voter registration. This petition
            supports placing Michele Palmer Parks on the list of qualified write-in candidates per NCGS § 163-123.
          </p>

          <Field label="Full Name" sublabel="Printed, as it appears on voter registration" error={errors.fullName} required>
            <input type="text" name="fullName" value={form.fullName} onChange={handleChange}
              placeholder="Jane Marie Smith" style={inputStyle(!!errors.fullName)} />
          </Field>

          <Field label="Residential Street Address" sublabel="As it appears on voter registration" error={errors.address} required>
            <input type="text" name="address" value={form.address} onChange={handleChange}
              placeholder="123 Main Street, Apt 4B" style={inputStyle(!!errors.address)} />
          </Field>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Field label="ZIP Code" error={errors.zip} required>
              <input type="text" name="zip" value={form.zip} onChange={handleChange}
                maxLength={5} placeholder="27601" style={inputStyle(!!errors.zip)} />
            </Field>
            <Field label="County" error={errors.county} required>
              <select name="county" value={form.county} onChange={handleChange} style={inputStyle(!!errors.county)}>
                <option value="">Select county...</option>
                {NC_COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </Field>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Field label="Date of Birth" sublabel="MM/DD/YYYY" error={errors.dob} required>
              <input type="date" name="dob" value={form.dob} onChange={handleChange} style={inputStyle(!!errors.dob)} />
            </Field>
            <Field label="Today's Date" sublabel="Auto-filled">
              <input type="text" value={today} readOnly
                style={{ ...inputStyle(false), background: '#f5f5f5', color: '#999', cursor: 'not-allowed' }} />
            </Field>
          </div>

          <Field label="Signature" sublabel="By submitting, your printed name above will serve as your signature">
            <div style={{
              padding: '0.65rem 0.9rem', border: '1px solid #ccc', borderRadius: '4px',
              background: '#fafafa', minHeight: '48px', display: 'flex', alignItems: 'center',
              fontFamily: "'Dancing Script', 'Brush Script MT', cursive",
              fontSize: '1.4rem', color: 'var(--navy)'
            }}>
              {form.fullName || <span style={{ color: '#bbb', fontSize: '1rem', fontFamily: 'inherit' }}>Will appear after you enter your name above</span>}
            </div>
          </Field>

          {/* Checkbox */}
          <div style={{
            padding: '1rem', border: `1px solid ${errors.confirmed ? 'var(--red)' : '#ddd'}`,
            borderRadius: '6px', background: errors.confirmed ? '#fff5f5' : '#fafafa',
            marginBottom: '1.5rem'
          }}>
            <label style={{ display: 'flex', gap: '0.75rem', cursor: 'pointer', alignItems: 'flex-start' }}>
              <div
                onClick={() => { setForm(p => ({ ...p, confirmed: !p.confirmed })); if (errors.confirmed) setErrors(e => ({ ...e, confirmed: undefined })); }}
                style={{
                  width: '20px', height: '20px', border: `2px solid ${form.confirmed ? 'var(--red)' : '#aaa'}`,
                  background: form.confirmed ? 'var(--red)' : 'white',
                  borderRadius: '3px', flexShrink: 0, marginTop: '1px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                {form.confirmed && <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>}
              </div>
              <span style={{ color: '#444', lineHeight: '1.6', fontSize: '0.9rem' }}>
                I confirm all information above matches my voter registration exactly. I am a registered
                voter in the county I have selected, and I understand it is illegal to sign another
                person's name to this petition.
              </span>
            </label>
            {errors.confirmed && <ErrorMsg msg={errors.confirmed} />}
          </div>

          {submitError && (
            <div style={{
              display: 'flex', gap: '0.5rem', background: '#fff5f5',
              border: '1px solid var(--red)', borderRadius: '4px',
              padding: '0.75rem 1rem', marginBottom: '1rem'
            }}>
              <AlertTriangle size={18} color="var(--red)" style={{ flexShrink: 0 }} />
              <p style={{ color: 'var(--red)', fontSize: '0.9rem', margin: 0 }}>{submitError}</p>
            </div>
          )}

          <button type="submit" disabled={submitting} style={{
            width: '100%', background: submitting ? '#aaa' : 'var(--red)',
            color: 'white', border: 'none', padding: '1rem',
            fontWeight: '700', letterSpacing: '0.1em', textTransform: 'uppercase',
            fontSize: '0.9rem', cursor: submitting ? 'not-allowed' : 'pointer',
            borderRadius: '4px', transition: 'background 0.2s'
          }}>
            {submitting ? 'Submitting...' : 'Submit Petition Signature'}
          </button>

          <p style={{ textAlign: 'center', color: '#aaa', fontSize: '0.75rem', marginTop: '1rem' }}>
            WRITE IN: MICHELE PALMER PARKS · NO CONTRIBUTIONS ACCEPTED
          </p>
        </form>
      </div>
    </section>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function inputStyle(hasError) {
  return {
    width: '100%', padding: '0.65rem 0.9rem',
    border: `1px solid ${hasError ? 'var(--red)' : '#ccc'}`,
    borderRadius: '4px', fontSize: '1rem', color: 'var(--navy)',
    background: 'white', outline: 'none', boxSizing: 'border-box',
    fontFamily: 'inherit'
  };
}

function ErrorMsg({ msg }) {
  return (
    <p style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'var(--red)', fontSize: '0.8rem', marginTop: '0.4rem' }}>
      <AlertTriangle size={13} />
      {msg}
    </p>
  );
}

function Field({ label, sublabel, error, required, children }) {
  return (
    <div style={{ marginBottom: '1.25rem' }}>
      <label style={{ display: 'block', marginBottom: '0.35rem' }}>
        <span style={{ fontWeight: '600', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--navy)' }}>
          {label}{required && <span style={{ color: 'var(--red)', marginLeft: '2px' }}>*</span>}
        </span>
        {sublabel && <span style={{ display: 'block', color: '#888', fontSize: '0.75rem', marginTop: '1px' }}>{sublabel}</span>}
      </label>
      {children}
      {error && <ErrorMsg msg={error} />}
    </div>
  );
}