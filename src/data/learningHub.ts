import { Article, MythFact, MiniQuiz } from '../types';

export const ARTICLES: Article[] = [
  {
    id: 'composting-masterclass',
    title: {
      en: 'Mastering Home Composting: Balancing Greens & Browns',
      ta: 'வீட்டு உரம் தயாரிக்கும் கலை: பச்சையும் பழுப்பு சமநிலையும்'
    },
    summary: {
      en: 'Learn the exact 1:2 ratio of wet nitrogen scraps to dry carbon leaves to create rich, odorless compost in 45 days.',
      ta: 'துர்நாற்றம் இன்றி 45 நாட்களில் சிறந்த இயற்கை உரம் தயாரிக்க ஈரக்கழிவு மற்றும் காய்ந்த இலைகளின் விகிதத்தை அறிக.'
    },
    readTime: '4 min',
    category: 'wet',
    icon: 'Sprout',
    sections: [
      {
        heading: {
          en: '1. The Golden Ratio: Greens vs Browns',
          ta: '1. தங்க விகிதம்: பச்சையும் பழுப்பும்'
        },
        body: {
          en: 'Composting requires two primary elements: Nitrogen-rich "Greens" (vegetable peels, fruit scraps, coffee grounds, tea leaves) and Carbon-rich "Browns" (dry leaves, shredded unprinted cardboard, cocopeat, crushed eggshells). For every 1 bucket of wet kitchen greens, add 2 buckets of dry browns to prevent sludge and smell.',
          ta: 'உரத்திற்கு இரண்டு முக்கிய கூறுகள் தேவை: நைட்ரஜன் நிறைந்த "பச்சை கழிவுகள்" (காய்கறி தோல், பழக்கழிவு, காபி தூள்) மற்றும் கார்பன் நிறைந்த "பழுப்பு கழிவுகள்" (காய்ந்த இலைகள், அட்டைத் துண்டுகள், தேங்காய் நார்). 1 பங்கு ஈரக்கழிவுக்கு 2 பங்கு உலர் பழுப்பு கழிவுகளை சேர்த்தால் துர்நாற்றம் வராது.'
        }
      },
      {
        heading: {
          en: '2. Aeration and Moisture Control',
          ta: '2. காற்றோட்டம் மற்றும் ஈரப்பதம்'
        },
        body: {
          en: 'Aerobic bacteria need oxygen to break down waste without emitting foul methane. Turn the pile once a week with a garden trowel. Keep moisture like a wrung-out sponge: if droplets squeeze out, it is too wet (add dry leaves); if dry and dusty, sprinkle a few tablespoons of water.',
          ta: 'மக்கும் பாக்டீரியாக்களுக்கு ஆக்ஸிஜன் அவசியம். வாரத்திற்கு ஒருமுறை உரம் குவியலை கிளறி விடுங்கள். ஈரப்பதம் பிழிந்த பஞ்சு போல இருக்க வேண்டும்; அதிக நீரிருந்தால் காய்ந்த இலைகளை சேர்க்கவும்.'
        }
      },
      {
        heading: {
          en: '3. What Stays Out',
          ta: '3. தவிர்க்க வேண்டியவை'
        },
        body: {
          en: 'Never add cooked oils, dairy gravies, dog/cat feces, treated wood sawdust, or plastic tea bags to basic backyard aerobic composters.',
          ta: 'சமையல் எண்ணெய், பால் கழிவுகள், நாய்/பூனை எச்சங்கள் அல்லது பிளாஸ்டிக் உறைகளை ஒருபோதும் வீட்டு உரத்தில் போடாதீர்கள்.'
        }
      }
    ]
  },
  {
    id: 'plastic-codes-demystified',
    title: {
      en: 'The Truth About Plastic Codes: 1 Through 7',
      ta: 'பிளாஸ்டிக் குறியீடுகளின் உண்மை: 1 முதல் 7 வரை'
    },
    summary: {
      en: 'The chasing arrows symbol does not mean an item is automatically recyclable. Learn which resin codes are genuinely recycled.',
      ta: 'முக்கோண அம்பு குறி உள்ள அனைத்தும் மறுசுழற்சி ஆகாது. எந்த எண்கள் உண்மையில் மறுசுழற்சி செய்யப்படுகின்றன என அறிக.'
    },
    readTime: '5 min',
    category: 'dry',
    icon: 'Package',
    sections: [
      {
        heading: {
          en: 'The Chasing Arrows Illusion',
          ta: 'மறுசுழற்சி குறியீட்டு மாயை'
        },
        body: {
          en: 'The resin identification number was created by plastic manufacturers in 1988 to distinguish plastic polymer types, NOT to guarantee municipal recyclability. Only Codes 1 (PET) and 2 (HDPE) have robust commercial recycling markets in almost all cities.',
          ta: '1988-ல் பிளாஸ்டிக் பாலிமர் வகைகளை அடையாளம் காணவே இந்த குறியீடுகள் உருவாக்கப்பட்டன. 1 (PET) மற்றும் 2 (HDPE) மட்டுமே பெரும்பாலான நகரங்களில் எளிதில் மறுசுழற்சி செய்யப்படுகின்றன.'
        }
      },
      {
        heading: {
          en: 'Safe & Recyclable: Code 1 and Code 2',
          ta: 'பாதுகாப்பான மறுசுழற்சி: எண் 1 மற்றும் 2'
        },
        body: {
          en: 'Code 1 (PET - clear beverage bottles) and Code 2 (HDPE - shampoo bottles, detergent jugs) are highly recyclable into new fibers, park benches, and drainage pipes. Always rinse and crush before disposing.',
          ta: 'எண் 1 (குடிநீர் பாட்டில்கள்) மற்றும் எண் 2 (ஷாம்பு பாட்டில்கள்) உயர்தர மறுசுழற்சி மதிப்புடையவை. கழுவி நசுக்கி போடவும்.'
        }
      },
      {
        heading: {
          en: 'The Red Flags: Code 3, 6, and 7',
          ta: 'அபாயகரமானவை: எண் 3, 6 மற்றும் 7'
        },
        body: {
          en: 'Code 3 (PVC - pipes/blister wrap) contains chlorine carcinogens. Code 6 (PS - polystyrene/thermocol) breaks into toxic microplastics. Code 7 (Other - multi-layer pouches, polycarbonate) is non-recyclable in standard municipal streams.',
          ta: 'எண் 3 (PVC) மற்றும் எண் 6 (தெர்மாகோல்) நச்சுத்தன்மை கொண்டவை. எண் 7 (பல அடுக்கு பிளாஸ்டிக்) சாதாரண மறுசுழற்சிக்கு உட்படாது.'
        }
      }
    ]
  },
  {
    id: 'hazardous-waste-and-health',
    title: {
      en: 'Domestic Hazardous Waste: Protecting Water & Workers',
      ta: 'வீட்டு அபாயகரக் கழிவு: நீரையும் மனிதர்களையும் காப்போம்'
    },
    summary: {
      en: 'Why batteries, expired medicines, and CFL lamps must never touch regular garbage or domestic sewer pipes.',
      ta: 'பேட்டரிகள், மருந்துகள் மற்றும் பல்புகள் ஏன் சாதாரண குப்பையிலோ அல்லது சிங்க்கிலோ போகக்கூடாது என்பதன் விளக்கம்.'
    },
    readTime: '4 min',
    category: 'hazardous',
    icon: 'AlertTriangle',
    sections: [
      {
        heading: {
          en: 'Groundwater Leaching',
          ta: 'நிலத்தடி நீர் நஞ்சாதல்'
        },
        body: {
          en: 'When household batteries and CFL bulbs are dumped in landfills, their metallic casings rust. Cadmium, lead, and mercury seep into rainwater runoff, polluting groundwater aquifers that feed municipal drinking wells.',
          ta: 'பேட்டரிகள் மற்றும் பல்புகள் குப்பைமேட்டில் அழுகும்போது காட்மியம், பாதரசம் போன்ற நச்சு உலோகங்கள் மழைநீருடன் கலந்து நிலத்தடி குடிநீரை நஞ்சாக்குகின்றன.'
        }
      },
      {
        heading: {
          en: 'The Superbug Threat',
          ta: 'மருந்து எதிர்ப்பு கிருமிகள்'
        },
        body: {
          en: 'Flushing expired antibiotics down toilets exposes environmental bacteria to sub-lethal pharmaceutical doses, driving the rapid evolution of antimicrobial-resistant pathogens ("superbugs") that render modern medicine ineffective.',
          ta: 'காலாவதியான ஆன்டிபயாடிக் மருந்துகளை கழிப்பறையில் ஊற்றும்போது நீர்நிலைகளில் உள்ள பாக்டீரியாக்கள் மருந்துகளுக்கு பணியாத கொடிய "சூப்பர்பக்ஸ்" ஆக மாறுகின்றன.'
        }
      }
    ]
  },
  {
    id: 'e-waste-urban-mining',
    title: {
      en: 'E-Waste & Urban Mining: The Gold in Your Drawers',
      ta: 'மின்னணுக் கழிவு & நகர்ப்புற சுரங்கம்: பழைய போன்களில் தங்கம்'
    },
    summary: {
      en: 'Discover how 1 ton of recycled smartphones yields 100 times more gold than 1 ton of mined gold ore.',
      ta: '1 டன் பழைய ஸ்மார்ட்போன்களில் இருந்து பெறப்படும் தங்கம், 1 டன் சுரங்கத் தாதுவை விட 100 மடங்கு அதிகம்.'
    },
    readTime: '3 min',
    category: 'ewaste',
    icon: 'Smartphone',
    sections: [
      {
        heading: {
          en: 'Precious Metals in Gadgets',
          ta: 'மின்னணு சாதனங்களில் விலைமதிப்பற்ற தாதுக்கள்'
        },
        body: {
          en: 'Circuit boards in phones, tablets, and computers contain gold, silver, copper, and neodymium. When formally recycled through certified urban dismantlers, these elements are reclaimed safely without contaminating soil with toxic lead or arsenic.',
          ta: 'போன்கள் மற்றும் கணினிகளில் தங்கம், வெள்ளி மற்றும் தாமிரம் உள்ளது. அங்கீகரிக்கப்பட்ட மறுசுழற்சியாளர்கள் மூலம் இவற்றைப் பிரித்தெடுத்தால் பூமிக்கு எந்த நஞ்சும் சேராது.'
        }
      },
      {
        heading: {
          en: 'Lithium Battery Fire Risk',
          ta: 'லித்தியம் பேட்டரி தீ விபத்துகள்'
        },
        body: {
          en: 'Lithium-ion batteries swell over time. If punctured by municipal compactor trucks, they undergo thermal runaway reaching 600°C within seconds. Never dispose of gadgets in dry recycling bins.',
          ta: 'பழைய லித்தியம் பேட்டரிகள் குப்பை வண்டியில் நசுங்கினால் நொடிகளில் 600°C வரை தீப்பற்றி எரியும். எப்போதும் இ-வேஸ்ட் மையத்தில் மட்டுமே கொடுக்கவும்.'
        }
      }
    ]
  }
];

export const MYTHS_AND_FACTS: MythFact[] = [
  {
    id: 'myth-chasing-arrows',
    myth: {
      en: 'All items stamped with the triangular chasing arrows symbol can go into the recycling bin.',
      ta: 'முக்கோண அம்பு குறி உள்ள அனைத்து பிளாஸ்டிக் பொருட்களையும் மறுசுழற்சி தொட்டியில் போடலாம்.'
    },
    fact: {
      en: 'The number simply designates the plastic resin code, not whether your municipality can recycle it.',
      ta: 'அந்த எண் பிளாஸ்டிக் வகையை மட்டுமே குறிக்கும்; உங்கள் ஊரில் அதை மறுசுழற்சி செய்ய வசதி உள்ளதா என்பதை குறிக்காது.'
    },
    explanation: {
      en: 'Most municipal sorting plants only have markets for plastics #1 (PET) and #2 (HDPE). Plastics #3, #4, #6, and #7 are frequently sent to landfills even if placed in the recycling bin.',
      ta: 'பெரும்பாலான ஆலைகளில் #1 மற்றும் #2 மட்டுமே மறுசுழற்சி செய்யப்படுகின்றன. #3, #6, #7 போன்றவை மறுசுழற்சி தொட்டியில் போட்டாலும் குப்பைக்கே செல்கின்றன.'
    }
  },
  {
    id: 'myth-pizza-box',
    myth: {
      en: 'Greasy pizza boxes are recyclable cardboard as long as you scrape off the leftover crusts.',
      ta: 'பீட்சா அட்டைப் பெட்டியில் உள்ள ரொட்டித் துண்டுகளை தட்டிவிட்டால் அதை மறுசுழற்சி செய்யலாம்.'
    },
    fact: {
      en: 'Paper fibers absorb grease. Grease cannot be separated during water-based paper pulping.',
      ta: 'காகித இழைகள் எண்ணெயை உறிஞ்சிக்கொள்ளும்; தண்ணீரில் கூழாக்கும்போது எண்ணெயை பிரிக்க முடியாது.'
    },
    explanation: {
      en: 'When greasy cardboard enters a paper recycling mill, the oil floats to the top, causing defects in entire batches of new paper. Only the completely clean top lid can be recycled.',
      ta: 'எண்ணெய் படிந்த அட்டை காகித ஆலையின் மொத்த கூழையும் பாழாக்கும். சுத்தமான மூடிப் பகுதியை மட்டுமே மறுசுழற்சிக்கு போட வேண்டும்.'
    }
  },
  {
    id: 'myth-compostable-plastic',
    myth: {
      en: 'Bags labeled "compostable" or "biodegradable" will break down in backyard home compost.',
      ta: '"மக்கும் தன்மை கொண்டது" என குறிப்பிடப்பட்ட பிளாஸ்டிக் பைகள் வீட்டு உரத்தில் எளிதில் மக்கிவிடும்.'
    },
    fact: {
      en: 'Most commercial "compostable" plastics require industrial facilities with temperatures above 58°C.',
      ta: 'பெரும்பாலான மக்கும் பிளாஸ்டிக்குகள் மக்க 58°C-க்கு மேல் வெப்பம் உள்ள தொழில்முறை ஆலைகள் தேவை.'
    },
    explanation: {
      en: 'In backyard compost piles that operate at ambient outdoor temperatures (25-35°C), bioplastic bags remain completely intact for years, behaving just like conventional plastic.',
      ta: 'சாதாரண வீட்டு உரத்தில் வெப்பம் குறைவாக இருப்பதால், இந்த பைகள் மக்காமல் பல ஆண்டுகள் அப்படியே இருக்கும்.'
    }
  },
  {
    id: 'myth-rinsing-water',
    myth: {
      en: 'Rinsing milk packets, jars, and cans before recycling is an unnecessary waste of fresh water.',
      ta: 'பால் பாக்கெட்டுகள் மற்றும் டப்பாக்களை மறுசுழற்சிக்கு முன் கழுவுவது தண்ணீரை வீணடிப்பதாகும்.'
    },
    fact: {
      en: 'Unrinsed dairy and food residues rot in storage, breeding maggots and spoiling entire clean bales.',
      ta: 'கழுவாத பால் மற்றும் உணவு எச்சங்கள் அழுகி புழுக்கள் பிடித்து மொத்த மறுசுழற்சி கழிவுகளையும் நாசம் செய்யும்.'
    },
    explanation: {
      en: 'You do not need gallons of clean drinking water—simply rinse containers using residual dishwashing greywater or a quick splash to remove dairy sugars and proteins.',
      ta: 'அதிக குடிநீர் தேவையில்லை; பாத்திரம் கழுவும்போது மிஞ்சும் சிறிதளவு நீரால் லேசாக அலசினால் போதுமானது.'
    }
  },
  {
    id: 'myth-flush-medicines',
    myth: {
      en: 'Flushing expired pills down the toilet is the safest way to prevent children and pets from swallowing them.',
      ta: 'காலாவதியான மாத்திரைகளை கழிப்பறையில் ஃப்ளஷ் செய்வது குழந்தைகள் எடுக்காமல் இருக்க பாதுகாப்பானது.'
    },
    fact: {
      en: 'Sewage wastewater treatment plants cannot filter out pharmaceutical chemicals.',
      ta: 'கழிவுநீர் சுத்திகரிப்பு ஆலைகளால் மருந்து ரசாயனங்களை வடிகட்ட முடியாது.'
    },
    explanation: {
      en: 'Flushed drugs pass directly into rivers and oceans, feminizing fish populations and contaminating regional freshwater resources. Hand them to pharmacy take-back drives instead.',
      ta: 'கழிப்பறையில் ஊற்றப்படும் மருந்துகள் ஆறுகளில் கலந்து மீன்களையும் குடிநீர் ஆதாரங்களையும் விஷமாக்குகின்றன. மருந்தகங்களில் ஒப்படைக்க வேண்டும்.'
    }
  },
  {
    id: 'myth-glass-types',
    myth: {
      en: 'Broken window panes, mirrors, and pyrex dishes can be recycled alongside beer bottles.',
      ta: 'உடைந்த ஜன்னல் கண்ணாடி, கண்ணாடி தட்டுகள் மற்றும் கண்ணாடிகளை பீர் பாட்டில்களோடு மறுசுழற்சி செய்யலாம்.'
    },
    fact: {
      en: 'Different glass formulas have vastly different melting temperatures and cannot be mixed.',
      ta: 'வெவ்வேறு கண்ணாடி வகைகளுக்கு உருகும் வெப்பநிலை மாறுபடும்; அவற்றை ஒன்றாக கலக்கக் கூடாது.'
    },
    explanation: {
      en: 'Pyrex (borosilicate) and window glass have high thermal resistance. When mixed into container bottle furnaces, they do not melt properly and cause severe structural flaws in new bottles.',
      ta: 'பைரக்ஸ் மற்றும் ஜன்னல் கண்ணாடி அதிக வெப்பத்தில் மட்டுமே உருகும். பாட்டில்களோடு சேர்த்தால் புதிய பாட்டில்கள் வெடிக்கும் பலவீனத்தை அடையும்.'
    }
  }
];

export const MINI_QUIZZES: MiniQuiz[] = [
  {
    id: 'quiz-1-milk-pouches',
    question: {
      en: 'What is the most crucial step before discarding empty plastic milk pouches in dry recycling?',
      ta: 'காலி பால் பாக்கெட்டுகளை உலர் மறுசுழற்சியில் போடும் முன் செய்ய வேண்டிய மிக முக்கிய செயல் எது?'
    },
    options: [
      { en: 'Cut completely open, rinse off residual milk with water, and let dry', ta: 'முழுமையாக வெட்டி, பாலின் வாடை போக கழுவி, உலர வைப்பது' },
      { en: 'Crush into a tight ball and tie with an elastic rubber band', ta: 'நசுக்கி ரப்பர் பேண்டால் கட்டுவது' },
      { en: 'Bury it directly in wet compost soil', ta: 'ஈர உரத்தில் நேரடியாக புதைப்பது' },
      { en: 'Burn it in a metal bucket to reduce plastic volume', ta: 'பிளாஸ்டிக் அளவை குறைக்க வாளியில் எரிப்பது' }
    ],
    correctIndex: 0,
    explanation: {
      en: 'Unwashed sour milk pouches rapidly rot and emit bacteria that causes recycling mills to reject entire truckloads of plastic.',
      ta: 'கழுவாத பால் பாக்கெட்டுகளில் பாக்டீரியா உருவாகி துர்நாற்றம் வீசும் என்பதால் ஆலைகள் மொத்த பிளாஸ்டிக் லாரியையும் திருப்பி அனுப்பிவிடும்.'
    }
  },
  {
    id: 'quiz-2-battery-hazard',
    question: {
      en: 'Why should you place clear tape over the terminals (+ and -) of discarded 9V and household batteries?',
      ta: 'பழைய 9V மற்றும் பேட்டரி முனைகளில் செல்லோ டேப் ஒட்டுவது ஏன் அவசியம்?'
    },
    options: [
      { en: 'To keep the batteries looking clean and new', ta: 'பேட்டரிகள் சுத்தமாக இருக்க' },
      { en: 'To prevent remaining charge from short-circuiting with metal and sparking garbage truck fires', ta: 'உலோகத்தோடு உரசும்போது தீப்பொறி ஏற்பட்டு தீ விபத்து ஏற்படுவதைத் தடுக்க' },
      { en: 'To stop the battery from dissolving in water', ta: 'பேட்டரி நீரில் கரைந்து போகாமல் தடுக்க' },
      { en: 'To make the battery lighter to transport', ta: 'எடையை குறைக்க' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'Loose batteries rubbing against metal cans in garbage trucks spark friction fires responsible for hundreds of waste facility blazes annually.',
      ta: 'குப்பை லாரியில் உலோகத்தோடு உராய்வு ஏற்பட்டு ஆண்டுதோறும் நூற்றுக்கணக்கான தீ விபத்துகள் நடக்கின்றன.'
    }
  },
  {
    id: 'quiz-3-sanitary-marking',
    question: {
      en: 'What is the universally recommended dignified way to prepare sanitary waste for collection?',
      ta: 'சுகாதார கழிவுகளை ஒப்படைக்க பரிந்துரைக்கப்படும் கண்ணியமான முறை எது?'
    },
    options: [
      { en: 'Flush directly down the nearest toilet', ta: 'கழிப்பறையில் ஃப்ளஷ் செய்வது' },
      { en: 'Wrap securely in newspaper and mark with a clear RED CROSS (X)', ta: 'செய்தித்தாளில் நன்கு சுற்றி மேலே சிவப்பு பெருக்கல் குறி (X) இடுவது' },
      { en: 'Mix with kitchen vegetable scraps in the green bin', ta: 'பச்சைத் தொட்டியில் காய்கறி கழிவுகளோடு கலப்பது' },
      { en: 'Throw loose in open drain gutters', ta: 'சாக்கடையில் வீசுவது' }
    ],
    correctIndex: 1,
    explanation: {
      en: 'The red cross marking alerts sanitation personnel so they can handle the biomedical package safely with protective gloves without opening it.',
      ta: 'சிவப்பு குறி இருப்பது தூய்மைப் பணியாளர்கள் கையுறை அணிந்து பாதுகாப்பாகவும் கண்ணியத்துடனும் கையாள உதவும்.'
    }
  }
];
