import { RecyclingCenter } from '../types';

export const INITIAL_RECYCLING_CENTERS: RecyclingCenter[] = [
  {
    id: 'center-demo-1',
    name: {
      en: 'Metro Resource Recovery & Composting Yard (Demo)',
      ta: 'நகராட்சி வள மீட்பு & இயற்கை உர மையம் (மாதிரி)'
    },
    category: ['wet', 'dry'],
    address: {
      en: 'Ward 42, Eco Park Road, Sector 8 (Sample Region)',
      ta: 'வார்டு 42, பூங்கா சாலை, பிரிவு 8 (மாதிரி பகுதி)'
    },
    lat: 13.0827,
    lng: 80.2707,
    contact: '+91 44 2538 0000',
    timings: {
      en: 'Monday - Saturday: 7:00 AM - 4:00 PM',
      ta: 'திங்கள் - சனி: காலை 7:00 - மாலை 4:00'
    },
    notes: {
      en: 'Accepts segregated kitchen wet waste, clean flattened cardboard, and bulk PET bottles.',
      ta: 'ஈரக்கழிவு, அட்டைப்பெட்டிகள் மற்றும் பிளாஸ்டிக் பாட்டில்கள் ஏற்றுக்கொள்ளப்படுகின்றன.'
    }
  },
  {
    id: 'center-demo-2',
    name: {
      en: 'District E-Waste & Battery Take-back Point (Demo)',
      ta: 'மாவட்ட மின்னணுக் கழிவு & பேட்டரி சேகரிப்பு மையம் (மாதிரி)'
    },
    category: ['ewaste', 'hazardous'],
    address: {
      en: 'Industrial Industrial Estate, Gate 3 (Sample Region)',
      ta: 'தொழிற்பேட்டை வளாகம், வாசல் 3 (மாதிரி பகுதி)'
    },
    lat: 13.0900,
    lng: 80.2600,
    contact: '1800-425-EWASTE',
    timings: {
      en: 'Tuesday - Sunday: 9:00 AM - 6:00 PM',
      ta: 'செவ்வாய் - ஞாயிறு: காலை 9:00 - மாலை 6:00'
    },
    notes: {
      en: 'Safe drop kiosk for laptops, broken chargers, phones, CFL tubes, and domestic batteries.',
      ta: 'லேப்டாப்கள், சார்ஜர்கள், போன்கள், பல்புகள் மற்றும் பேட்டரிகளுக்கான பாதுகாப்பான மையம்.'
    }
  },
  {
    id: 'center-demo-3',
    name: {
      en: 'Community Dry Scrap & Metal Kabadiwala Hub (Demo)',
      ta: 'சமூக உலர் கழிவு & பழைய இரும்பு/பேப்பர் கடை (மாதிரி)'
    },
    category: ['dry'],
    address: {
      en: 'Market Square, Near Old Railway Station (Sample Region)',
      ta: 'சந்தை பகுதி, பழைய ரயில் நிலையம் அருகில் (மாதிரி பகுதி)'
    },
    lat: 13.0750,
    lng: 80.2550,
    contact: '+91 98400 12345',
    timings: {
      en: 'Everyday: 8:30 AM - 7:30 PM',
      ta: 'தினசரி: காலை 8:30 - இரவு 7:30'
    },
    notes: {
      en: 'Buys newspapers, books, aluminum beverage cans, and clean brass/copper scrap by weight.',
      ta: 'பழைய பேப்பர்கள், புத்தகங்கள் மற்றும் உலோகக் கழிவுகளை எடைக்கு வாங்குகிறது.'
    }
  },
  {
    id: 'center-demo-4',
    name: {
      en: 'Regional Biomedical & Sanitary Incineration Facility (Demo)',
      ta: 'மண்டல மருத்துவ & சுகாதார கழிவு மையம் (மாதிரி)'
    },
    category: ['sanitary', 'hazardous'],
    address: {
      en: 'Health Avenue, Outer Ring Bypass (Sample Region)',
      ta: 'மருத்துவ சாலை, புறவழிச்சாலை (மாதிரி பகுதி)'
    },
    lat: 13.0600,
    lng: 80.2400,
    contact: '+91 44 2819 0000',
    timings: {
      en: 'Monday - Friday: 8:00 AM - 5:00 PM',
      ta: 'திங்கள் - வெள்ளி: காலை 8:00 - மாலை 5:00'
    },
    notes: {
      en: 'Strictly authorized drop-off for safely wrapped sanitary waste, insulin needles, and expired pharmaceuticals.',
      ta: 'சுற்றப்பட்ட சுகாதார கழிவுகள் மற்றும் காலாவதியான மருந்துகளுக்கான அங்கீகரிக்கப்பட்ட மையம்.'
    }
  }
];
