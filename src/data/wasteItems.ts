import { WasteItem } from '../types';

export const WASTE_ITEMS: WasteItem[] = [
  // --- 1 to 10: WET / ORGANIC ---
  {
    id: 'banana-peel',
    name: { en: 'Banana Peels', ta: 'வாழைப்பழத் தோல்கள்' },
    category: 'wet',
    icon: 'Banana',
    description: {
      en: 'Organic fruit scraps high in potassium, phosphorus, and organic matter.',
      ta: 'பொட்டாசியம், பாஸ்பரஸ் மற்றும் கரிம சத்துக்கள் நிறைந்த பழக்கழிவுகள்.'
    },
    preparation: {
      en: 'Remove any fruit price stickers or plastic tags before composting.',
      ta: 'உரமாக்குவதற்கு முன் பழத்தின் மீதுள்ள பிளாஸ்டிக் ஸ்டிக்கர்களை அகற்றவும்.'
    },
    disposal: {
      en: 'Place in the green compost/wet waste bin or directly into home composting composters.',
      ta: 'பச்சை ஈரக்கழிவு தொட்டியில் அல்லது வீட்டு உரம் தயாரிக்கும் குழியில் போடவும்.'
    },
    commonMistakes: {
      en: 'Throwing peels inside tied non-biodegradable plastic carry bags into the wet bin.',
      ta: 'பிளாஸ்டிக் பைகளில் கட்டி ஈரக்கழிவு தொட்டியில் வீசுவது தவறு.'
    },
    reuseSuggestions: {
      en: 'Soak in water for 48 hours to make a natural liquid potassium fertilizer for house plants.',
      ta: '48 மணி நேரம் தண்ணீரில் ஊறவைத்து செடிகளுக்கு பொட்டாசியம் இயற்கை திரவ உரமாக ஊற்றலாம்.'
    },
    municipalNotice: {
      en: 'Accepted in municipal wet waste collection daily. Keep covered to prevent fruit flies.',
      ta: 'தினசரி நகராட்சி ஈரக்கழிவு சேகரிப்பில் ஏற்றுக்கொள்ளப்படுகிறது. மூடி வைக்கவும்.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'leftover-food',
    name: { en: 'Leftover Cooked Food', ta: 'மீதமான சமைத்த உணவு' },
    category: 'wet',
    icon: 'Utensils',
    description: {
      en: 'Cooked rice, curry leftovers, stale bread, and table scraps.',
      ta: 'சமைத்த சோறு, குழம்பு கழிவுகள், பழைய ரொட்டி மற்றும் சமையல் எச்சங்கள்.'
    },
    preparation: {
      en: 'Drain excess gravy or watery liquids. Avoid adding excessive cooking grease.',
      ta: 'அதிகப்படியான திரவத்தை வடிகட்டவும். உரத்தில் அதிக எண்ணெய் சேர்ப்பதைத் தவிர்க்கவும்.'
    },
    disposal: {
      en: 'Deposit in designated green wet organic bin or community biomethanation plant.',
      ta: 'ஈர கரிம கழிவு தொட்டியில் அல்லது பயோ-கேஸ் உரம் தொட்டியில் சேர்க்கவும்.'
    },
    commonMistakes: {
      en: 'Mixing disposable plastic spoons, paper cups, or plastic foil with table leftovers.',
      ta: 'பிளாஸ்டிக் ஸ்பூன்கள் அல்லது அலுமினிய தாள்களை உணவுடன் கலந்து வீசுவது.'
    },
    reuseSuggestions: {
      en: 'Safe un-spoilable leftovers can be fed to local livestock or converted to biogas energy.',
      ta: 'கெடாத உணவை கால்நடைகளுக்கு உணவாகவோ அல்லது பயோ-கேஸ் தயாரிப்பிற்கோ அளிக்கலாம்.'
    },
    municipalNotice: {
      en: 'Collect daily to prevent pests and foul odor.',
      ta: 'பூச்சிகள் மற்றும் துர்நாற்றத்தைத் தவிர்க்க தினசரி ஒப்படைக்கவும்.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'coffee-tea-grounds',
    name: { en: 'Coffee Grounds & Loose Tea Leaves', ta: 'காபி தூள் மற்றும் தேயிலைக் கழிவுகள்' },
    category: 'wet',
    icon: 'Coffee',
    description: {
      en: 'Nitrogen-rich organic residue from brewed filter coffee and steeped tea.',
      ta: 'நைட்ரஜன் நிறைந்த பயன்படுத்தப்பட்ட காபி தூள் மற்றும் தேயிலைக் கழிவு.'
    },
    preparation: {
      en: 'Discard staple pins, tags, and synthetic nylon mesh from commercial tea bags before composting.',
      ta: 'டீ பேக்கில் உள்ள ஸ்டேப்லர் முள் மற்றும் நைலான் இழைகளை நீக்கிய பின்னரே உரமாக்கவும்.'
    },
    disposal: {
      en: 'Compost bin or sprinkle lightly around garden soil.',
      ta: 'உரத் தொட்டியில் போடலாம் அல்லது தோட்டத்து செடிகளுக்கு உரமாகப் பயன்படுத்தலாம்.'
    },
    commonMistakes: {
      en: 'Assuming all commercial tea bags are 100% paper; many contain microplastic heat-sealants.',
      ta: 'அனைத்து டீ பேக்குகளும் காகிதம் என எண்ணுவது; பலவற்றில் மைக்ரோபிளாஸ்டிக் பிசின் உள்ளது.'
    },
    reuseSuggestions: {
      en: 'Dry coffee grounds act as an excellent natural refrigerator odor deodorizer before composting.',
      ta: 'பிரிட்ஜில் உள்ள துர்நாற்றத்தை போக்கும் இயற்கை பொருளாக உலர்ந்த காபித்தூளை வைக்கலாம்.'
    },
    municipalNotice: {
      en: 'Wet organic waste. Pure tea leaves accelerate compost maturity.',
      ta: 'கரிம ஈரக்கழிவு. மக்கும் உரத்தின் தரத்தை விரைவுபடுத்தும்.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'vegetable-peels',
    name: { en: 'Vegetable Peels & Trimmings', ta: 'காய்கறித் தோல்கள் & நறுக்கிய கழிவுகள்' },
    category: 'wet',
    icon: 'Carrot',
    description: {
      en: 'Onion skins, potato peelings, cabbage leaves, tomato tops, and fruit cores.',
      ta: 'வெங்காயத் தோல், உருளைக்கிழங்குத் தோல், முட்டைக்கோஸ் மற்றும் பழக் கழிவுகள்.'
    },
    preparation: {
      en: 'Chop large stalks or fibrous stems into 2-inch pieces to accelerate natural decomposition.',
      ta: 'விரைவாக மக்குவதற்கு பெரிய தண்டுகளை சிறு துண்டுகளாக நறுக்கவும்.'
    },
    disposal: {
      en: 'Green wet bin or home vermicompost / aerobic compost bin.',
      ta: 'பச்சை ஈரக்கழிவு தொட்டி அல்லது மண்புழு உரத் தொட்டி.'
    },
    commonMistakes: {
      en: 'Dumping huge quantities of citrus peels in vermicompost (earthworms dislike high acidity).',
      ta: 'எலுமிச்சை, ஆரஞ்சு தோல்களை மண்புழு உரத்தில் அதிகளவில் போடுவது (புழுக்களுக்கு அமிலத்தன்மை ஆகாது).'
    },
    reuseSuggestions: {
      en: 'Simmer clean vegetable scraps into aromatic homemade vegetable stock before discarding pulp.',
      ta: 'சுத்தமான காய்கறி தோல்களை நீரில் கொதிக்க வைத்து காய்கறி சூப்/ஸ்டாக் தயாரிக்கலாம்.'
    },
    municipalNotice: {
      en: 'Core organic wet waste stream. Never mix with dry plastics.',
      ta: 'முக்கிய கரிம ஈரக்கழிவு. பிளாஸ்டிக்குடன் கலக்கக் கூடாது.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'eggshells',
    name: { en: 'Crushed Eggshells', ta: 'முட்டை ஓடுகள்' },
    category: 'wet',
    icon: 'Egg',
    description: {
      en: 'Calcium carbonate-rich shells from domestic poultry eggs.',
      ta: 'கால்சியம் கார்பனேட் சத்து நிறைந்த முட்டை ஓட்டுக் கழிவுகள்.'
    },
    preparation: {
      en: 'Rinse lightly and crush finely with hands or a mortar so they break down easily.',
      ta: 'லேசாகக் கழுவி கைகளால் நன்கு நசுக்கி போடவும்.'
    },
    disposal: {
      en: 'Green wet bin or direct soil amendment for tomato and pepper plants.',
      ta: 'பச்சை ஈரக்கழிவு தொட்டி அல்லது தக்காளி செடிகளின் வேர்ப்பகுதியில் உரமாக இடலாம்.'
    },
    commonMistakes: {
      en: 'Tossing whole intact eggshells; unbroken shells can take over a year to degrade.',
      ta: 'முழு ஓடாக அப்படியே போடுவது; அது மக்க ஒரு வருடத்திற்கும் மேலாகும்.'
    },
    reuseSuggestions: {
      en: 'Sprinkle coarse crushed shells around garden beds as a natural slug and snail barrier.',
      ta: 'நத்தை மற்றும் பூச்சிகள் செடிகளை தாக்காமல் இருக்க செடியைச் சுற்றி பரப்பி வைக்கலாம்.'
    },
    municipalNotice: {
      en: 'Accepted in municipal wet organic waste streams.',
      ta: 'நகராட்சி ஈரக்கழிவு சேகரிப்பில் ஏற்றுக்கொள்ளப்படுகிறது.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'garden-leaves',
    name: { en: 'Fallen Leaves & Garden Prunings', ta: 'உதிர்ந்த இலைகள் & தோட்டக் கழிவுகள்' },
    category: 'wet',
    icon: 'Leaf',
    description: {
      en: 'Dry brown leaves, green grass clippings, small pruned twigs, and withered flowers.',
      ta: 'காய்ந்த இலைகள், சிறு கிளைகள், வெட்டிய புல் மற்றும் வாடிய பூக்கள்.'
    },
    preparation: {
      en: 'Bundle small twigs; separate plastic flower ties, foil wrappers, and stones.',
      ta: 'சிறு கிளைகளை கட்டவும்; பிளாஸ்டிக் கயிறு மற்றும் தாள்களை நீக்கவும்.'
    },
    disposal: {
      en: 'Green horticultural waste stream or use as carbon "browns" in home compost.',
      ta: 'தோட்டக்கலைக் கழிவு சேகரிப்பு அல்லது இயற்கை உரத்தின் கார்பன் அடுக்கு.'
    },
    commonMistakes: {
      en: 'Open burning of leaves which releases carcinogenic polycyclic hydrocarbons and smoke.',
      ta: 'இலைகளை தீயிட்டுக் கொளுத்துவது (இது ஆபத்தான நச்சுப் புகையை உண்டாக்கும்).'
    },
    reuseSuggestions: {
      en: 'Spread directly over garden beds as organic mulch to conserve moisture and suppress weeds.',
      ta: 'மண் ஈரப்பதத்தை காக்கவும் களைகளை கட்டுப்படுத்தவும் செடிகளை சுற்றி மூடாக்காக இடலாம்.'
    },
    municipalNotice: {
      en: 'Banned from burning under National Clean Air regulations.',
      ta: 'சுற்றுச்சூழல் சட்டப்படி பொது இடங்களில் எரிக்க தடை செய்யப்பட்டுள்ளது.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'green'
  },
  {
    id: 'coconut-shells',
    name: { en: 'Coconut Shells & Fibrous Husks', ta: 'தேங்காய் சிரட்டைகள் & நார்' },
    category: 'wet',
    icon: 'Trees',
    description: {
      en: 'Dense woody endocarp and coir husks with high lignin content.',
      ta: 'மெதுவாக மக்கக்கூடிய கடினமான மரக்கழிவு மற்றும் தேங்காய் நார்.'
    },
    preparation: {
      en: 'Separate fibrous coir from the hard woody shell. Smash shells into small pieces if possible.',
      ta: 'நாரையும் சிரட்டையையும் தனித்தனியாக பிரிக்கவும். சிரட்டையை உடைத்து போடவும்.'
    },
    disposal: {
      en: 'Hand over to biomass/coir processing collection or separate dry organic stream.',
      ta: 'மரக்கழிவு/உயிரி எரிபொருள் சேகரிப்பாளர்களிடம் அல்லது தனி உலர் கழிவில் கொடுக்கவும்.'
    },
    commonMistakes: {
      en: 'Tossing whole coconut shells into standard rapid composters (takes over 18 months).',
      ta: 'சாதாரண உரத் தொட்டியில் முழு தேங்காய் சிரட்டையை போடுவது (மக்க 18 மாதங்கள் ஆகும்).'
    },
    reuseSuggestions: {
      en: 'Use half-shells as biodegradable seed starting pots or natural bird feeders.',
      ta: 'விதை முளைக்க வைக்கும் இயற்கை தொட்டியாக அல்லது கைவினைப் பொருட்களாகப் பயன்படுத்தலாம்.'
    },
    municipalNotice: {
      en: 'Many cities have specialized ward-level shredders for coconut husks to make cocopeat.',
      ta: 'நகராட்சிகளில் தேங்காய் நார் அரைத்து கோகோபீட் தயாரிக்கும் இயந்திரங்கள் உள்ளன.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 6,
    binColor: 'green'
  },
  {
    id: 'fruit-seeds-pits',
    name: { en: 'Mango Pits & Avocado Seeds', ta: 'மாங்கொட்டைகள் & பெரிய விதைகள்' },
    category: 'wet',
    icon: 'Sparkles',
    description: {
      en: 'Hard woody fruit pits and dense seeds from tropical fruits.',
      ta: 'மாங்கொட்டை, ஆவகேடோ போன்ற கனமான பழக் கொட்டைகள்.'
    },
    preparation: {
      en: 'Clean off remaining sticky pulp.',
      ta: 'ஒட்டியுள்ள பழச் சதையை நீக்கவும்.'
    },
    disposal: {
      en: 'Green wet bin or deep trench composting.',
      ta: 'பச்சை ஈரக்கழிவு தொட்டி அல்லது ஆழமான குழி உரமாக்கல்.'
    },
    commonMistakes: {
      en: 'Putting whole hard seeds into domestic kitchen sink garbage disposal units.',
      ta: 'சிங்க் அரைக்கும் இயந்திரத்தில் கடினமான மாங்கொட்டையை போடுவது (பிளேடுகள் உடையும்).'
    },
    reuseSuggestions: {
      en: 'Sprout seeds with children or donate native fruit seeds to community tree nurseries.',
      ta: 'விதைப்பந்து தயாரிக்கவோ அல்லது மரக்கன்றுகள் நடவோ பயன்படுத்தலாம்.'
    },
    municipalNotice: {
      en: 'Standard organic stream.',
      ta: 'வழக்கமான மக்கும் கழிவு.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'expired-bread',
    name: { en: 'Moldy Bread, Roti & Bakery Items', ta: 'பூஞ்சை பிடித்த ரொட்டி & பேக்கரி கழிவு' },
    category: 'wet',
    icon: 'Layers',
    description: {
      en: 'Yeast bread, flatbreads, spoiled cakes, and grain bakery scraps.',
      ta: 'பூஞ்சை பிடித்த பிரெட், சப்பாத்தி மற்றும் காலாவதியான பேக்கரி பொருட்கள்.'
    },
    preparation: {
      en: 'Remove all plastic packaging, twist ties, and bread clips.',
      ta: 'பிளாஸ்டிக் உறை, கம்பி மற்றும் பிளாஸ்டிக் கிளிப்புகளை அகற்றவும்.'
    },
    disposal: {
      en: 'Green compost bin or bokashi anaerobic composter.',
      ta: 'பச்சை உரம் தொட்டி அல்லது பொகாஷி முறை உரம் தயாரித்தல்.'
    },
    commonMistakes: {
      en: 'Throwing the bread plastic bag with the moldy bread inside into wet waste.',
      ta: 'பிரெட் கவருடன் சேர்த்து ஈரக்கழிவில் போடுவது.'
    },
    reuseSuggestions: {
      en: 'Un-moldy stale crusts can be toasted into crunchy soup croutons or breadcrumbs.',
      ta: 'பூஞ்சை பிடிக்காத பழைய பிரெட்டை டோஸ்ட் செய்து பிரெட்க்ரம்ப்ஸாக மாற்றலாம்.'
    },
    municipalNotice: {
      en: 'Keep covered to prevent rodent attraction.',
      ta: 'எலிகள் வராமல் இருக்க மூடி வைக்கவும்.'
    },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 5,
    binColor: 'green'
  },
  {
    id: 'meat-bones',
    name: { en: 'Fish Bones, Chicken Bones & Meat Scraps', ta: 'மீன் முள், எலும்பு & இறைச்சிக் கழிவுகள்' },
    category: 'wet',
    icon: 'Flame',
    description: {
      en: 'Non-vegetarian cooked or raw food residues.',
      ta: 'சமைத்த அல்லது சமைக்காத இறைச்சி மற்றும் மீன் முட்கள்.'
    },
    preparation: {
      en: 'Keep refrigerated until collection day if your climate is hot to prevent maggot infestation.',
      ta: 'துர்நாற்றம் வீசாமல் இருக்க ஒப்படைக்கும் நாள் வரை குளிரூட்டி வைக்கலாம்.'
    },
    disposal: {
      en: 'Municipal wet waste or closed bokashi digester.',
      ta: 'நகராட்சி ஈரக்கழிவு அல்லது மூடிய உரம் தொட்டி.'
    },
    commonMistakes: {
      en: 'Placing bones in open home compost piles where they attract stray dogs, cats, and crows.',
      ta: 'திறந்தவெளி உரத்தில் எலும்புகளை போடுவது (நாய்கள் மற்றும் காக்கைகள் கிளறும்).'
    },
    reuseSuggestions: {
      en: 'Boil clean marrow bones for 12 hours to make nutritious gelatinous bone broth.',
      ta: 'சுத்தமான எலும்புகளை கொதிக்க வைத்து சத்துமிக்க சூப் தயாரிக்கலாம்.'
    },
    municipalNotice: {
      en: 'Must be handed over daily in the segregated wet waste stream.',
      ta: 'ஈரக்கழிவு சேகரிப்பில் தினசரி ஒப்படைக்க வேண்டும்.'
    },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 6,
    binColor: 'green'
  },

  // --- 11 to 24: DRY / RECYCLABLE ---
  {
    id: 'office-paper',
    name: { en: 'Newspapers, Books & Office Paper', ta: 'செய்தித்தாள்கள், புத்தகங்கள் & காகிதங்கள்' },
    category: 'dry',
    icon: 'FileText',
    description: { en: 'Clean, dry paper fiber from printed materials, notebooks, flyers, and envelopes.', ta: 'சுத்தமான, உலர்ந்த செய்தித்தாள்கள், நோட்டுகள் மற்றும் அலுவலக காகிதங்கள்.' },
    preparation: { en: 'Keep completely dry. Remove plastic spiral binders, cello tape, and plastic sleeves.', ta: 'முற்றிலும் உலர்வாக வைத்திருக்கவும். பிளாஸ்டிக் ஸ்பைரல் பைண்டிங்கை அகற்றவும்.' },
    disposal: { en: 'Blue dry recyclables bin or sell/donate to local paper recyclers.', ta: 'நீல மறுசுழற்சி தொட்டியில் அல்லது பழைய பேப்பர் கடையில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Shredding paper into microscopic dust (shortens fibers making it un-recyclable).', ta: 'காகிதத்தை மிக நுண்ணிய துகள்களாக அரைப்பது (மறுசுழற்சி இழைகளை குறைக்கும்).' },
    reuseSuggestions: { en: 'Use newspaper to line kitchen bins or wrap fragile glass items during home moving.', ta: 'வீட்டு குப்பைத் தொட்டியின் அடியில் விரிக்க அல்லது கண்ணாடி பொருட்களை சுற்ற பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Wet or food-stained paper cannot be pulped and is rejected by mills.', ta: 'ஈரமான அல்லது உணவு படிந்த காகிதத்தை மறுசுழற்சி ஆலைகள் நிராகரிக்கும்.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'corrugated-cardboard',
    name: { en: 'Corrugated Cardboard Boxes', ta: 'அட்டைப் பெட்டிகள் (கார்ட்போர்டு)' },
    category: 'dry',
    icon: 'Package',
    description: { en: 'Shipping, packaging, and shoeboxes made of multi-layered fluted paperboard.', ta: 'ஆன்லைன் ஆர்டர்கள் மற்றும் பொருட்களின் பேக்கிங் அட்டைப் பெட்டிகள்.' },
    preparation: { en: 'Flatten boxes completely. Peel off synthetic plastic packing tape and polystyrene inserts.', ta: 'பெட்டிகளை தட்டையாக்கவும். பிளாஸ்டிக் டேப் மற்றும் தெர்மாகோலை உரிக்கவும்.' },
    disposal: { en: 'Blue dry recycling bin or bulk cardboard collection point.', ta: 'நீல உலர் மறுசுழற்சி தொட்டி அல்லது மறுசுழற்சி மையத்தில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Leaving thick styrofoam or plastic bubble wrap inside flattened boxes.', ta: 'பெட்டிக்குள் தெர்மாகோல் அல்லது பப்பில் ராப் பிளாஸ்டிக்கை அப்படியே விட்டுவிடுவது.' },
    reuseSuggestions: { en: 'Use flattened sheets under garden soil as a biodegradable weed barrier sheet.', ta: 'தோட்டத்தில் களைகளை தடுக்கும் இயற்கை விரிப்பாக மண்ணின் அடியில் விரிக்கலாம்.' },
    municipalNotice: { en: 'Keep sheltered from rain. Soggy cardboard turns to mush and contaminates paper bales.', ta: 'மழையில் நனையாமல் பாதுகாக்கவும். நனைந்த அட்டை மறுசுழற்சிக்கு பயன்படாது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'pet-plastic-bottles',
    name: { en: 'Clear PET Water & Beverage Bottles (Code 1)', ta: 'குடிநீர் & குளிர்பான பிளாஸ்டிக் பாட்டில்கள்' },
    category: 'dry',
    icon: 'Wine',
    description: { en: 'Clear polyethylene terephthalate (PET/PETE) beverage bottles.', ta: 'வெளிப்படையான பிளாஸ்டிக் குடிநீர் மற்றும் பான பாட்டில்கள்.' },
    preparation: { en: 'Empty completely, rinse with a splash of water, and crush flat to conserve bin volume.', ta: 'முற்றிலும் காலி செய்து, லேசாகக் கழுவி, நசுக்கி தட்டையாக்கவும்.' },
    disposal: { en: 'Deposit in blue dry recyclable bin or bottle deposit return kiosks.', ta: 'உலர் மறுசுழற்சி தொட்டி அல்லது பாட்டில் திரும்பப்பெறும் மையத்தில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Throwing away bottles half-full of sugary soda or water (liquid ruins paper in dry bins).', ta: 'தண்ணீர் அல்லது குளிர்பானத்துடன் பாட்டிலை குப்பையில் வீசுவது.' },
    reuseSuggestions: { en: 'Cut in half to create self-watering seed pots for herbs on sunny windowsills.', ta: 'பாதியாக வெட்டி வீட்டு ஜன்னலில் மூலிகை செடிகள் வளர்க்கும் தொட்டியாக்கலாம்.' },
    municipalNotice: { en: 'Highly recyclable into polyester yarn. Screw caps back on after crushing.', ta: 'துணிகளுக்கான பாலியஸ்டர் நூலாக மறுசுழற்சி செய்யப்படுகிறது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'hdpe-plastic-bottles',
    name: { en: 'HDPE Shampoo & Detergent Bottles (Code 2)', ta: 'ஷாம்பு & சோப்பு திரவ பிளாஸ்டிக் பாட்டில்கள்' },
    category: 'dry',
    icon: 'Droplet',
    description: { en: 'High-density polyethylene rigid opaque bottles for detergents, lotions, and milk jugs.', ta: 'கெட்டியான ஷாம்பு, சலவை திரவம் மற்றும் லோஷன் பாட்டில்கள்.' },
    preparation: { en: 'Rinse out soap suds with minimal water. Remove pump dispensers if they contain metal springs.',
      ta: 'சோப்பு நுரை போக சிறிதளவு நீரால் கழுவவும். ஸ்பிரிங் உள்ள பம்ப் மூடிகளை கழற்றவும்.' },
    disposal: { en: 'Blue dry recycling bin.', ta: 'நீல உலர் மறுசுழற்சி தொட்டி.' },
    commonMistakes: { en: 'Leaving pump mechanisms attached; multi-material pumps jam recycling sorters.', ta: 'ஸ்பிரிங் கொண்ட பம்ப் மூடியுடன் போடுவது மறுசுழற்சி இயந்திரத்தை முடக்கும்.' },
    reuseSuggestions: { en: 'Refill at zero-waste bulk liquid refill stations instead of buying new bottles.', ta: 'புதிய பாட்டில் வாங்குவதற்கு பதிலாக மறுநிரப்பு நிலையங்களில் நிரப்பலாம்.' },
    municipalNotice: { en: 'Valuable rigid plastic widely recycled into outdoor benches and pipes.', ta: 'உயர்தர பிளாஸ்டிக்; பூங்கா பெஞ்சுகள் மற்றும் குழாய்களாக மறுசுழற்சி செய்யப்படுகிறது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'glass-bottles',
    name: { en: 'Glass Bottles & Food Jars', ta: 'கண்ணாடி பாட்டில்கள் & ஜாடிகள்' },
    category: 'dry',
    icon: 'FlaskConical',
    description: { en: 'Clean sauce jars, jam bottles, beverage glass containers, and pickle jars.', ta: 'சுத்தமான சாஸ் ஜாடிகள், ஜாம் பாட்டில்கள் மற்றும் கண்ணாடி கொள்கலன்கள்.' },
    preparation: { en: 'Rinse out sauce remains. Remove metal or plastic twist lids. Do not break intentionally.', ta: 'உணவு எச்சங்களை கழுவவும். உலோக மூடியை தனியாக பிரிக்கவும். உடைக்க வேண்டாம்.' },
    disposal: { en: 'Dry recyclables or glass collection bank.', ta: 'உலர் மறுசுழற்சி அல்லது கண்ணாடி சேகரிப்பு தொட்டியில் போடவும்.' },
    commonMistakes: { en: 'Mixing broken window panes or drinking glasses with container glass (different melt temps).', ta: 'ஜன்னல் கண்ணாடி அல்லது குவளை கண்ணாடியை பாட்டில்களோடு கலப்பது.' },
    reuseSuggestions: { en: 'Sterilize jars in hot water and use for storing spices, lentils, or stationery.', ta: 'சுடுநீரில் கழுவி மசாலா பொருட்கள் மற்றும் பருப்பு வகைகளை சேமிக்கலாம்.' },
    municipalNotice: { en: '100% infinitely recyclable without degrading in quality.', ta: 'தரம் குறையாமல் எத்தனை முறை வேண்டுமானாலும் மறுசுழற்சி செய்யலாம்.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'metal-cans',
    name: { en: 'Aluminum Soda Cans & Tin Food Tins', ta: 'அலுமினிய கேன்கள் & தகர டப்பாக்கள்' },
    category: 'dry',
    icon: 'Cylinder',
    description: { en: 'Beverage cans, canned vegetable tins, and biscuit metal boxes.', ta: 'அலுமினிய குளிர்பான கேன்கள், தகர டப்பாக்கள் மற்றும் பிஸ்கட் டின்கள்.' },
    preparation: { en: 'Rinse out food remains. Push sharp detached lids inside the can body.', ta: 'உணவு எச்சங்களை கழுவவும். கூர்மையான விளிம்புகளை உள்பக்கமாக அழுத்தவும்.' },
    disposal: { en: 'Blue dry recyclables bin or local metal scrap dealer.', ta: 'நீல மறுசுழற்சி தொட்டி அல்லது பழைய இரும்பு/உலோகக் கடையில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Leaving food remnants inside tins which attracts maggots in recycling sorting yards.', ta: 'உணவு ஒட்டிய டப்பாக்களை கழுவாமல் போடுவது.' },
    reuseSuggestions: { en: 'Repurpose painted tins as desk pencil holders or small plant planters.', ta: 'வர்ணம் பூசி பேனா ஸ்டாண்டாக அல்லது அலங்கார செடி தொட்டியாக மாற்றலாம்.' },
    municipalNotice: { en: 'Recycling aluminum saves 95% of energy compared to raw bauxite mining.', ta: 'அலுமினியத்தை மறுசுழற்சி செய்வது 95% மின்னாற்றலை மிச்சப்படுத்துகிறது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 12,
    binColor: 'blue'
  },
  {
    id: 'aluminum-foil',
    name: { en: 'Clean Aluminum Kitchen Foil', ta: 'சுத்தமான அலுமினிய ஃபாயில் தாள்' },
    category: 'dry',
    icon: 'Layers',
    description: { en: 'Clean wrapping foil used for baking and dry food takeaway.', ta: 'உணவு சுற்ற பயன்படுத்தப்படும் சுத்தமான அலுமினிய படலம்.' },
    preparation: { en: 'Wipe off dry crumbs. Scrunch multiple clean foils into a firm ball (tennis ball size).', ta: 'உணவுத் துகள்களை துடைக்கவும். பல தாள்களை ஒன்றாக உருட்டி பந்து போல ஆக்கவும்.' },
    disposal: { en: 'Blue dry recyclable metal stream.', ta: 'உலர் மறுசுழற்சி உலோக பிரிவில் சேர்க்கவும்.' },
    commonMistakes: { en: 'Recycling foil caked in cheese or grease; grease catches fire during aluminum remelting.', ta: 'எண்ணெய் அல்லது சீஸ் ஒட்டிய ஃபாயிலை போடுவது (உருக்கும்போது தீப்பற்றும்).' },
    reuseSuggestions: { en: 'Scrunch used clean foil into a ball to scrub burnt stubborn grease off baking trays.', ta: 'சுருட்டிய ஃபாயிலைக் கொண்டு பாத்திரங்களில் உள்ள கறைகளை தேய்த்து கழுவலாம்.' },
    municipalNotice: { en: 'Tiny loose foil scraps blow away in sorters; always ball them up together.', ta: 'சிறிய தாள்கள் காற்றில் பறந்துவிடும் என்பதால் உருண்டையாக உருட்டி போடவும்.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 8,
    binColor: 'blue'
  },
  {
    id: 'tetra-pak-cartons',
    name: { en: 'Tetra Pak Beverage Cartons', ta: 'டெட்ரா பேக் ஜூஸ் & பால் பெட்டிகள்' },
    category: 'dry',
    icon: 'Box',
    description: { en: 'Aseptic composite packaging made of paperboard (75%), polyethylene (20%), and aluminum (5%).', ta: 'காகிதம், பாலித்தீன் மற்றும் அலுமினியம் கலந்த பல அடுக்கு அட்டைப் பெட்டி.' },
    preparation: { en: 'Push the straw inside or discard straw separately. Flatten carton and rinse out residual milk/juice.', ta: 'ஸ்ட்ராவை உள்ளே தள்ளவும் அல்லது தனியாக போடவும். கழுவி தட்டையாக்கவும்.' },
    disposal: { en: 'Drop at designated Tetra Pak drop bins or municipal dry recycling collection.', ta: 'டெட்ரா பேக் மறுசுழற்சி மையங்களில் அல்லது உலர் கழிவு மையங்களில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Assuming they are regular cardboard; they cannot be pulped in basic paper mills.', ta: 'இதை சாதாரண அட்டை என நினைப்பது; இதற்கு சிறப்பு பிரித்தெடுக்கும் ஆலைகள் தேவை.' },
    reuseSuggestions: { en: 'Cut top off, punch drainage holes, and use as waterproof outdoor garden seed pots.', ta: 'மேல் பகுதியை வெட்டி நீர் வடிய துளையிட்டு விதை தொட்டியாக பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Special hydrapulping mills separate the paper fibers to make recycled roofing sheets.', ta: 'இதன் காகிதம் மற்றும் அலுமினியத்தை பிரித்து கூரை தாள்கள் தயாரிக்கப்படுகிறது.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'milk-pouches',
    name: { en: 'Rinsed Milk Pouches & Oil Packets (LDPE)', ta: 'கழுவிய பால் பாக்கெட்டுகள் & எண்ணெய் பைகள்' },
    category: 'dry',
    icon: 'Milk',
    description: { en: 'Flexible virgin multi-layer low density polyethylene packaging pouches.', ta: 'பயன்படுத்தப்பட்ட நெகிழி பால் கவர்கள் மற்றும் எண்ணெய் பாக்கெட்டுகள்.' },
    preparation: { en: 'Slit completely along three sides, rinse clean with soapy water, and air dry before storing.', ta: 'முழுமையாக வெட்டி திறந்து, பாலின் வாடை போக கழுவி, உலர வைத்த பின் சேர்க்கவும்.' },
    disposal: { en: 'Place in cleaned dry soft-plastic collection or hand over to plastic recyclers.', ta: 'நன்கு உலர்த்திய பின் உலர் பிளாஸ்டிக் சேகரிப்பில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Snipping off the tiny corner tip; tiny cutoff tips become un-collectible microplastic litter.', ta: 'பாக்கெட் முனையை சிறு துண்டாக வெட்டி எறிவது (அது மைக்ரோபிளாஸ்டிக் குப்பையாகும்).' },
    reuseSuggestions: { en: 'Sturdy clean milk packets can be used as waterproof seedling grow bags in home gardens.', ta: 'தோட்டங்களில் செடிகள் நட உதவும் பிளாஸ்டிக் பையாக மீண்டும் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Sour unwashed milk pouches turn rancid and are rejected by plastic recyclers.', ta: 'கழுவாத பாக்கெட்டுகளில் துர்நாற்றம் வீசும் என்பதால் மறுசுழற்சியாளர்கள் நிராகரிப்பர்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 12,
    binColor: 'blue'
  },
  {
    id: 'plastic-grocery-bags',
    name: { en: 'Clean Plastic Carry Bags & Bubble Wrap', ta: 'பிளாஸ்டிக் பைகள் & பப்பில் ராப்' },
    category: 'dry',
    icon: 'ShoppingBag',
    description: { en: 'Thin film LDPE grocery bags, bread bags, air pillows, and bubble wrap.', ta: 'மெல்லிய பிளாஸ்டிக் கேரி பேக்குகள் மற்றும் பாதுகாப்பு பப்பில் ராப்.' },
    preparation: { en: 'Remove receipts and shipping labels. Stuff multiple clean bags into a single bag.', ta: 'ரசீதுகளை நீக்கவும். பல பைகளை ஒன்றாக ஒரு பைக்குள் அடைத்து வைக்கவும்.' },
    disposal: { en: 'Supermarket soft-film drop-off bin or municipal dry plastic center.', ta: 'மளிகைக் கடைகளில் உள்ள பாலித்தீன் தொட்டியில் அல்லது உலர் பிளாஸ்டிக்கில் சேர்க்கவும்.' },
    commonMistakes: { en: 'Putting loose bags in standard curbside sorting bins (they wrap around rotating machinery axles).', ta: 'தனித்தனி பைகளாக போடுவது (மறுசுழற்சி ஆலை இயந்திரங்களை சுற்றிக் கொள்ளும்).' },
    reuseSuggestions: { en: 'Save and reuse for lining small bathroom pedal bins or packaging shipments.', ta: 'குளியலறை குப்பைத் தொட்டி உறைக்கு அல்லது பொட்டலம் கட்ட மீண்டும் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Banned in many jurisdictions under 120-micron single-use plastic restrictions.', ta: 'பல மாநிலங்களில் 120 மைக்ரானுக்கு கீழ் உள்ள பைகளுக்கு தடை விதிக்கப்பட்டுள்ளது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 8,
    binColor: 'blue'
  },
  {
    id: 'textiles-clothing',
    name: { en: 'Worn Textiles & Old Clothes', ta: 'பழைய உடைகள் & துணிக் கழிவுகள்' },
    category: 'dry',
    icon: 'Shirt',
    description: { en: 'Torn garments, frayed towels, bedsheets, and fabric cutouts.', ta: 'கிழிந்த உடைகள், துண்டுகள், படுக்கை விரிப்புகள் மற்றும் துண்டுத் துணிகள்.' },
    preparation: { en: 'Wash and dry thoroughly. Separate wearable garments for charity donation.', ta: 'சுத்தமாகவும் உலர்வாகவும் வைத்திருக்கவும். நல்ல உடைகளை தானம் செய்யவும்.' },
    disposal: { en: 'Textile drop box or municipal rag upcycling center.', ta: 'துணி மறுசுழற்சி பெட்டியில் அல்லது துணி சேகரிப்பு மையத்தில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Tossing wet moldy cloth into dry recycling (causes entire cotton bales to rot).', ta: 'ஈரமான துணியை உலர் கழிவில் போடுவது (மற்ற காகிதங்களையும் பாழாக்கும்).' },
    reuseSuggestions: { en: 'Cut worn cotton T-shirts into reusable cleaning rags and floor dusters.', ta: 'பழைய பருத்தி சட்டைகளை துடைக்கும் துணியாக வெட்டி பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Synthetic fibers (polyester, nylon) take up to 200 years to decompose in dumps.', ta: 'பாலியஸ்டர் போன்ற செயற்கை துணிகள் குப்பைமேட்டில் மக்க 200 ஆண்டுகள் ஆகும்.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },
  {
    id: 'metal-bottle-caps',
    name: { en: 'Metal Crown Bottle Caps & Jar Lids', ta: 'உலோக பாட்டில் மூடிகள் & ஜாடி மூடிகள்' },
    category: 'dry',
    icon: 'Shield',
    description: { en: 'Steel crown caps from glass soda bottles and twist-off pickle jar lids.', ta: 'கண்ணாடி பாட்டில்களின் தகர மூடிகள் மற்றும் ஜாடி மூடிகள்.' },
    preparation: { en: 'Rinse off vinegar or syrup residue. Collect caps inside a tin can and crimp can top shut.', ta: 'வினிகர் அல்லது இனிப்பை கழுவவும். தகர டப்பாவிற்குள் போட்டு நசுக்கி மூடவும்.' },
    disposal: { en: 'Dry recyclables metal stream.', ta: 'உலர் உலோக மறுசுழற்சி பிரிவில் சேர்க்கவும்.' },
    commonMistakes: { en: 'Throwing small caps loose into recycling; they fall through conveyor sorting grates.', ta: 'தனித்தனி சிறிய மூடிகளை போடுவது (மறுசுழற்சி சல்லடைகளில் நழுவி விழுந்துவிடும்).' },
    reuseSuggestions: { en: 'Glue felt pads under jar lids to make non-scratch furniture floor gliders.', ta: 'நாற்காலிகளின் காலடியில் ஒட்டி தரை கீறல் விழாமல் பாதுகாக்கலாம்.' },
    municipalNotice: { en: 'Steel is easily magnetically separated at materials recovery facilities (MRFs).', ta: 'காந்தம் மூலம் மிக எளிதாக பிரித்தெடுக்கப்படும் உலோகம்.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 8,
    binColor: 'blue'
  },
  {
    id: 'paperboard-cereal-boxes',
    name: { en: 'Cereal Boxes & Toothpaste Cartons', ta: 'தானிய அட்டைப் பெட்டிகள் & மருந்து அட்டை' },
    category: 'dry',
    icon: 'Package',
    description: { en: 'Thin greyboard or white folding carton board used for dry foods and cosmetics.', ta: 'கார்ன்பிளேக்ஸ், மருந்து மற்றும் சோப்பு அட்டைப் பெட்டிகள்.' },
    preparation: { en: 'Remove any interior wax paper liners or plastic pouches. Flatten box.', ta: 'உள்ளே இருக்கும் பிளாஸ்டிக் கவரை நீக்கி பெட்டியை தட்டையாக்கவும்.' },
    disposal: { en: 'Blue dry paper recycling bin.', ta: 'நீல காகித மறுசுழற்சி தொட்டி.' },
    commonMistakes: { en: 'Leaving interior plastic bags with leftover cereal or cookies inside.', ta: 'உள்ளே இருக்கும் பிளாஸ்டிக் கவரை எடுக்காமல் பெட்டியை குப்பையில் போடுவது.' },
    reuseSuggestions: { en: 'Cut into bookmark shapes or drawer dividers to organize stationery.', ta: 'புத்தக குறிப்பு அட்டையாக அல்லது மேஜை டிராயர் தடுப்பாகப் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'High fiber yield for making new recycled cardboard packaging.', ta: 'புதிய அட்டைப் பெட்டிகள் தயாரிக்க பயன்படும் உயர்தர காகித இழை.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 8,
    binColor: 'blue'
  },
  {
    id: 'stationery-notebooks',
    name: { en: 'Used Student Notebooks & Exam Papers', ta: 'பயன்படுத்திய நோட்டுப் புத்தகங்கள் & தாள்கள்' },
    category: 'dry',
    icon: 'FileText',
    description: { en: 'Bound notebooks, ruled sheets, and completed printed study material.', ta: 'மாணவர்களின் பழைய நோட்டுகள், கையேடுகள் மற்றும் தேர்வுத் தாள்கள்.' },
    preparation: { en: 'Tear off glossy plastic-laminated covers or remove metal stapled wires if convenient.', ta: 'பிளாஸ்டிக் லேமினேட் அட்டையை அல்லது ஸ்டேப்லர் கம்பியை அகற்றவும்.' },
    disposal: { en: 'Dry paper collection or sell by weight to scrap merchant (raddi / kabadiwala).', ta: 'உலர் காகித சேகரிப்பில் அல்லது பழைய பேப்பர் கடையில் எடைக்கு போடவும்.' },
    commonMistakes: { en: 'Mixing water-color paints or chemical glitter sheets with clean white ledger paper.', ta: 'கிளிட்டர் அல்லது கெமிக்கல் வண்ணங்கள் பூசிய தாள்களை கலப்பது.' },
    reuseSuggestions: { en: 'Use blank backsides of printed single-sided sheets for scratch math and draft notes.', ta: 'ஒரு பக்கம் காலியாக உள்ள தாள்களை குறிப்புகள் எழுத பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Direct source for educational textbook pulp manufacturing.', ta: 'புதிய பள்ளி பாடப்புத்தகங்கள் தயாரிக்கும் மறுசுழற்சிக்கு பயன்படுகிறது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 10,
    binColor: 'blue'
  },

  // --- 25 to 34: DRY / NON-RECYCLABLE (Refuse / Contaminated) ---
  {
    id: 'oily-food-packaging',
    name: { en: 'Greasy Pizza Boxes & Oily Takeout Containers', ta: 'எண்ணெய் படிந்த பீட்சா மற்றும் உணவு பெட்டிகள்' },
    category: 'dry',
    icon: 'Pizza',
    description: { en: 'Cardboard or paper soaked with cooking oil, melted cheese, and curry gravy.', ta: 'உணவு எண்ணெய், நெய் அல்லது சாஸ் படிந்த காகித அட்டைப் பெட்டிகள்.' },
    preparation: { en: 'Tear off the clean lid for recycling; the greasy base belongs in non-recyclable refuse.', ta: 'சுத்தமான மூடிப் பகுதியை மறுசுழற்சிக்கு வைக்கவும்; எண்ணெய் பகுதியை தனியாக பிரிக்கவும்.' },
    disposal: { en: 'Greasy portion goes to non-recyclable dry waste / refuse (or home compost if unprinted).', ta: 'எண்ணெய் படிந்த பகுதியை மறுசுழற்சி செய்ய முடியாத உலர் கழிவில் போடவும்.' },
    commonMistakes: { en: 'Throwing cheese-soaked boxes into paper recycling (oil destroys entire pulp batches).', ta: 'எண்ணெய் பெட்டியை காகித மறுசுழற்சியில் போடுவது (ஆலையின் காகிதக் கூழை பாழாக்கும்).' },
    reuseSuggestions: { en: 'Unprinted plain cardboard bases can be composted in backyard hot compost piles.', ta: 'வர்ணம் பூசப்படாத அட்டையை வீட்டு உரம் குவியலில் மக்க வைக்கலாம்.' },
    municipalNotice: { en: 'Food grease cannot be separated from paper fibers during municipal water pulping.', ta: 'நீரில் கூழாக்கும்போது எண்ணெயை காகிதத்தில் இருந்து பிரிக்க முடியாது.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'thermocol-polystyrene',
    name: { en: 'Thermocol & Expanded Polystyrene Foam (EPS)', ta: 'தெர்மாகோல் (பாலிஸ்டிரீன் ஃபோம்)' },
    category: 'dry',
    icon: 'ShieldAlert',
    description: { en: 'White foam packaging blocks, insulation sheets, and disposable foam plates (98% air, 2% plastic).', ta: 'பொருட்கள் வாங்கும்போது வரும் வெள்ளை தெர்மாகோல் மற்றும் ஃபோம் கப்புகள்.' },
    preparation: { en: 'Keep intact. Do not break into crumbly little beads that pollute drains and waterways.', ta: 'உடைக்காமல் முழுமையாக வைக்கவும். சிறு மணிகளாக உதிர்த்தால் வடிகால்களை அடைக்கும்.' },
    disposal: { en: 'Check with appliance retailer take-back or dry non-recyclable refuse.', ta: 'உற்பத்தியாளர் திரும்பப்பெறும் மையத்தில் அல்லது உலர் குப்பையில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Burning thermocol outdoors; releases neurotoxic styrene and dense toxic black soot.', ta: 'வெளியில் தீயிட்டுக் கொளுத்துவது; நரம்பு மண்டலத்தை பாதிக்கும் நச்சுப் புகை வெளியாகும்.' },
    reuseSuggestions: { en: 'Break into large chunks and place at the bottom of flower pots to improve soil drainage.', ta: 'செடி தொட்டியின் அடியில் கல் போல போட்டு நீர் வடியும் வடிகட்டியாகப் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Because it is 98% air, standard recycling trucks refuse transport due to bulk volume.', ta: 'அதிக இடம் பிடிப்பதால் பெரும்பாலான நகராட்சிகள் இதை சாதாரணமாக எடுப்பதில்லை.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'broken-ceramics',
    name: { en: 'Broken Ceramic Plates & Coffee Mugs', ta: 'உடைந்த பீங்கான் தட்டுகள் & கப்புகள்' },
    category: 'dry',
    icon: 'Coffee',
    description: { en: 'Porcelain dinnerware, earthenware clay pottery, and stoneware coffee mugs.', ta: 'உடைந்த பீங்கான் தட்டுகள், காபி கப்புகள் மற்றும் களிமண் பானைகள்.' },
    preparation: { en: 'Wrap sharp shards securely in scrap newspaper or corrugated cardboard to protect sanitation handlers.', ta: 'கூர்மையான பீங்கான் சில்லுகளை செய்தித்தாளில் பத்திரமாக சுற்றி வைக்கவும்.' },
    disposal: { en: 'Inert dry non-recyclable refuse / construction debris collection.', ta: 'மறுசுழற்சி செய்ய முடியாத உலர் கழிவு பிரிவில் சேர்க்கவும்.' },
    commonMistakes: { en: 'Mixing ceramics into blue glass recycling; ceramics melt at a much higher temperature and ruin glass batches.', ta: 'கண்ணாடி பாட்டில்களோடு கலப்பது (அதிக வெப்பநிலையில் உருகுவதால் பாட்டில் தயாரிப்பை கெடுக்கும்).' },
    reuseSuggestions: { en: 'Use colorful broken ceramic shards for Japanese Kintsugi art or garden mosaic stepping stones.', ta: 'வண்ணத்துண்டுகளை அலங்கார தரைக்கற்கள் அல்லது கைவினைப் பொருட்களுக்குப் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Inert non-hazardous mineral waste.', ta: 'மண்ணோடு மட்காத ஆனால் நச்சுத்தன்மை அற்ற கனிமக் கழிவு.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'composite-chip-bags',
    name: { en: 'Multi-layer Metallized Chip Bags (MLP)', ta: 'சிப்ஸ் மற்றும் பிஸ்கட் பளபளப்பான கவர்கள்' },
    category: 'dry',
    icon: 'Package',
    description: { en: 'Foil-lined plastic snack wrappers (aluminum bonded tightly with polypropylene film).', ta: 'உள்பக்கம் வெள்ளி நிற தகடு ஒட்டப்பட்ட தின்பண்ட பிளாஸ்டிக் உறைகள்.' },
    preparation: { en: 'Shake out residual salt and food crumbs. Flatten.', ta: 'உப்பு மற்றும் துகள்களை உதறி தட்டையாக்கவும்.' },
    disposal: { en: 'Dry non-recyclable waste or dedicated cement-kiln co-processing collection.', ta: 'மறுசுழற்சி செய்ய முடியாத உலர் கழிவு அல்லது சிமெண்ட் ஆலை எரிபொருள் சேகரிப்பில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Assuming the shiny metallic inside is recyclable aluminum foil; it is fused plastic.', ta: 'உள்ளே வெள்ளி நிறமாக இருப்பதால் மறுசுழற்சி அலுமினியம் என தவறாக நினைப்பது.' },
    reuseSuggestions: { en: 'Stuff clean wrappers tightly into plastic bottles to create sturdy "ecobricks" for garden benches.', ta: 'காலி பாட்டில்களில் அடைத்து பூங்கா இருக்கைகளுக்கான "ஈகோ-பிரிக்ஸ்" செய்யலாம்.' },
    municipalNotice: { en: 'Cannot be mechanically recycled; sent for energy recovery in cement kilns.', ta: 'மறுசுழற்சி செய்ய முடியாது; சிமெண்ட் ஆலைகளில் எரிபொருளாக பயன்படுத்தப்படுகிறது.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'thermal-receipt-paper',
    name: { en: 'ATM & Supermarket Thermal Receipts', ta: 'ஏ.டி.எம் & பில்லிங் ரசீது தாள்கள்' },
    category: 'dry',
    icon: 'FileText',
    description: { en: 'Heat-sensitive paper coated with BPA (Bisphenol-A) or BPS chemical color developers.', ta: 'பிளாஸ்டிக் கெமிக்கல் (BPA) பூசப்பட்ட வெப்ப உணர்வு பில்லிங் தாள்கள்.' },
    preparation: { en: 'Keep dry.', ta: 'உலர்ந்த நிலையில் வைக்கவும்.' },
    disposal: { en: 'Non-recyclable dry refuse (never in paper recycling or compost).', ta: 'மறுசுழற்சி செய்ய முடியாத குப்பை (காகித மறுசுழற்சியிலோ உfillரத்திலோ போடக்கூடாது).' },
    commonMistakes: { en: 'Composting receipts or mixing with printer paper; BPA is a hormone disruptor that contaminates soil and recycled toilet paper.', ta: 'உரத்தில் போடுவது (இதிலுள்ள பிளாஸ்டிக் ரசாயனம் மண்ணை நஞ்சாக்கும்).' },
    reuseSuggestions: { en: 'Opt for digital SMS/Email receipts at store checkouts to avoid paper generation.', ta: 'பில் போடும்போது காகிதத்திற்கு பதிலாக எஸ்.எம்.எஸ் அல்லது மின்னஞ்சல் ரசீது கோரவும்.' },
    municipalNotice: { en: 'Scratch test: if a fingernail leaves a black friction mark, it is toxic thermal paper.', ta: 'விரல் நகத்தால் கீறினால் கருப்பு கோடு விழுந்தால் அது ரசாயன ரசீது தாள் ஆகும்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'disposable-coffee-cups',
    name: { en: 'Paper Coffee Cups & Soda Cups', ta: 'காகித டீ & காபி கப்புகள்' },
    category: 'dry',
    icon: 'Coffee',
    description: { en: 'Paper cups coated on the interior with waterproof polyethylene plastic lining.', ta: 'உள்பக்கம் மெல்லிய பிளாஸ்டிக் பூச்சு கொண்ட காகித கப்புகள்.' },
    preparation: { en: 'Empty liquids completely. Remove plastic sip lid and cardboard heat sleeve.', ta: 'திரவத்தை காலி செய்யவும். பிளாஸ்டிக் மூடி மற்றும் அட்டை உறையை கழற்றவும்.' },
    disposal: { en: 'Non-recyclable refuse (unless specialized cup recycling drop box is available).', ta: 'மறுசுழற்சி செய்ய முடியாத உலர் கழிவு.' },
    commonMistakes: { en: 'Tossing cups into paper recycling; the bonded waterproof plastic film prevents paper pulping.', ta: 'காகித மறுசுழற்சியில் போடுவது; உள்பக்க பிளாஸ்டிக் பூச்சு மறுசுழற்சியை தடுக்கும்.' },
    reuseSuggestions: { en: 'Carry a reusable stainless steel travel tumbler and ask cafes to fill your own mug.', ta: 'எப்போதும் உங்களுடன் ஸ்டீல் பிளாஸ்க் அல்லது கப் எடுத்துச் செல்லுங்கள்.' },
    municipalNotice: { en: 'Over 99% of paper cups end up in landfills due to liner separation difficulty.', ta: 'பிளாஸ்டிக் பூச்சை பிரிக்க முடியாததால் 99% கப்புகள் குப்பையாகவே முடிகிறது.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'toothpaste-tubes',
    name: { en: 'Plastic Toothpaste & Lotion Tubes', ta: 'டூத்பேஸ்ட் & கிரீம் டியூப்கள்' },
    category: 'dry',
    icon: 'Layers',
    description: { en: 'Multi-layered laminated plastic and aluminum flexible tubes.', ta: 'பிளாஸ்டிக் மற்றும் அலுமினியம் பல அடுக்கு கொண்ட பேஸ்ட் டியூப்கள்.' },
    preparation: { en: 'Squeeze out all remaining paste. Flatten.', ta: 'மீதமுள்ள பேஸ்ட்டை முழுமையாக பிழிந்து தட்டையாக்கவும்.' },
    disposal: { en: 'General non-recyclable dry waste (unless marked with Code 2 HDPE recycling symbol).', ta: 'மறுசுழற்சி செய்ய முடியாத உலர் கழிவு.' },
    commonMistakes: { en: 'Throwing tubes with half the paste trapped inside into plastic recyclables.', ta: 'பாதி பேஸ்ட் இருக்கும்போதே பிளாஸ்டிக் மறுசுழற்சியில் போடுவது.' },
    reuseSuggestions: { en: 'Switch to chewable toothpaste tablets sold in refillable glass jars.', ta: 'கண்ணாடி ஜாடியில் வரும் மாத்திரை வடிவிலான டூத்பேஸ்ட்டிற்கு மாறலாம்.' },
    municipalNotice: { en: 'Some modern brands now make 100% HDPE recyclable tubes; check the packaging label.', ta: 'சில நவீன பிராண்டுகள் மறுசுழற்சி செய்யக்கூடிய டியூப்களை அறிமுகப்படுத்தியுள்ளன.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'old-footwear',
    name: { en: 'Worn-out Shoes & Rubber Slippers', ta: 'பழைய காலணிகள் & ரப்பர் செருப்புகள்' },
    category: 'dry',
    icon: 'Package',
    description: { en: 'Sneakers, leather shoes, foam flip-flops, and vulcanized rubber soles.', ta: 'கிழிந்த ஷூக்கள், தோல் காலணிகள் மற்றும் ரப்பர் செருப்புகள்.' },
    preparation: { en: 'Clean off heavy caked mud. Tie pairs together by their shoelaces.', ta: 'மண்ணை தட்டி சுத்தம் செய்யவும். ஜோடிகளை லேஸால் ஒன்றாக கட்டவும்.' },
    disposal: { en: 'Brand trade-in bin or non-recyclable bulky domestic refuse.', ta: 'ஷூ கடைகளில் உள்ள பழைய காலணி தொட்டி அல்லது உலர் குப்பை.' },
    commonMistakes: { en: 'Throwing usable shoes in the trash instead of giving them to cobblers or donation drives.', ta: 'பழுதுபார்க்கக்கூடிய காலணிகளை குப்பையில் வீசுவது.' },
    reuseSuggestions: { en: 'Worn sneakers can be reground into rubber granules for athletic playground tracks.', ta: 'ரப்பரை அரைத்து விளையாட்டு மைதான தரை தயாரிப்பிற்கு பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Complex composite of 40+ materials glued together; landfill diversion requires specialized programs.', ta: '40-க்கும் மேற்பட்ட பொருட்கள் ஒட்டப்பட்டதால் சாதாரண மறுசுழற்சி சாத்தியமில்லை.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'cigarette-butts',
    name: { en: 'Cigarette Filters & Butts', ta: 'சிகரெட் பில்டர்கள்' },
    category: 'dry',
    icon: 'Wind',
    description: { en: 'Cellulose acetate plastic fiber filters soaked with arsenic, nicotine, and heavy metals.', ta: 'நிக்கோடின் மற்றும் ஆர்சனிக் நச்சு படிந்த பிளாஸ்டிக் நார் பில்டர்கள்.' },
    preparation: { en: 'Extinguish 100% with water to eliminate fire hazards.', ta: 'தீப்பற்றாமல் இருக்க தண்ணீரில் நனைத்து முழுமையாக அணைக்கவும்.' },
    disposal: { en: 'Non-recyclable dry trash or dedicated cigarette butt recycling programs.', ta: 'மறுசுழற்சி செய்ய முடியாத குப்பை அல்லது சிகரெட் மறுசுழற்சி பெட்டி.' },
    commonMistakes: { en: 'Flicking butts on streets or down stormwater drains (number one oceanic plastic pollution source).', ta: 'சாலையிலோ அல்லது சாக்கடை வாய்க்காலிலோ தூக்கி எறிவது.' },
    reuseSuggestions: { en: 'Specialized recyclers extract the cellulose acetate to manufacture fly-ash bricks.', ta: 'இதன் நாரை பிரித்தெடுத்து கட்டுமான செங்கற்கள் தயாரிக்கும் முறைகள் உள்ளன.' },
    municipalNotice: { en: 'A single butt leaches enough toxic chemical residue to contaminate 1,000 liters of water.', ta: 'ஒரு சிகரெட் பில்டர் 1000 லிட்டர் நிலத்தடி நீரை நஞ்சாக்கும் திறன் கொண்டது.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'dirty-takeaway-cutlery',
    name: { en: 'Disposable Plastic Spoons, Forks & Straws', ta: 'ஒருமுறை பயன்படுத்தும் பிளாஸ்டிக் ஸ்பூன்கள் & ஸ்ட்ரா' },
    category: 'dry',
    icon: 'Utensils',
    description: { en: 'Polystyrene (Code 6) or Polypropylene (Code 5) brittle takeaway cutlery.', ta: 'ஹோட்டல் பார்சல்களில் வரும் ஒருமுறை பயன்படுத்தும் பிளாஸ்டிக் முள் கரண்டிகள்.' },
    preparation: { en: 'Wipe off food residue.', ta: 'உணவு துகள்களை துடைக்கவும்.' },
    disposal: { en: 'Dry non-recyclable refuse.', ta: 'மறுசுழற்சி செய்ய முடியாத உலர் குப்பை.' },
    commonMistakes: { en: 'Putting lightweight cutlery in recycling; they get sifted out into the landfill residue stream.', ta: 'மறுசுழற்சியில் போடுவது; எடை குறைவாக இருப்பதால் தானாக குப்பைக்கு தள்ளப்படும்.' },
    reuseSuggestions: { en: 'Always check "Do not include disposable cutlery" on food delivery apps.', ta: 'ஆன்லைனில் உணவு ஆர்டர் செய்யும்போது "ஸ்பூன் வேண்டாம்" என டிக் செய்யவும்.' },
    municipalNotice: { en: 'Single-use plastic cutlery is banned in over 60 countries due to marine choking hazard.', ta: 'கடல்வாழ் உயிரினங்களை கொல்வதால் பல நாடுகளில் இதற்கு தடை விதிக்கப்பட்டுள்ளது.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 6,
    binColor: 'yellow'
  },

  // --- 35 to 43: DOMESTIC HAZARDOUS ---
  {
    id: 'household-batteries',
    name: { en: 'Household Alkaline & Lithium Batteries (AA, AAA, 9V)', ta: 'வீட்டு பேட்டரிகள் (AA, AAA, 9V & லித்தியம்)' },
    category: 'hazardous',
    icon: 'BatteryCharging',
    description: { en: 'Cylindrical batteries and button cells containing zinc, manganese, lithium, and potassium hydroxide.', ta: 'ரிமோட், பொம்மைகள் மற்றும் கடிகாரங்களில் பயன்படும் சிறிய பேட்டரிகள்.' },
    preparation: { en: 'Cover positive and negative terminal ends with clear tape to prevent friction sparks.', ta: 'தீப்பொறி ஏற்படாமல் இருக்க பேட்டரியின் முனைகளில் செல்லோ டேப் ஒட்டவும்.' },
    disposal: { en: 'Red hazardous waste box or dedicated retail battery recycling bins.', ta: 'சிவப்பு அபாயகரமான கழிவு பெட்டியில் அல்லது பேட்டரி சேகரிப்பு மையத்தில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Throwing dead 9V batteries loose in garbage; terminals touching metal can spark devastating truck fires.', ta: 'டேப் ஒட்டாமல் போடுவது (மற்ற உலோகத்தோடு உரசினால் பயங்கர தீ விபத்து ஏற்படும்).' },
    reuseSuggestions: { en: 'Switch to rechargeable NiMH or USB-C batteries that can be recharged 1,000+ times.', ta: '1000 முறைக்கு மேல் சார்ஜ் செய்யக்கூடிய ரீசார்ஜபிள் பேட்டரிகளுக்கு மாறவும்.' },
    municipalNotice: { en: 'Hazardous Waste Rule: Corrosive chemicals and heavy metals contaminate groundwater.', ta: 'அபாயக் கழிவு: நச்சு ரசாயனங்கள் நிலத்தடி நீரை விஷமாக்கும்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'expired-medicines',
    name: { en: 'Expired & Unused Medicines', ta: 'காலாவதியான மருந்துகள் & மாத்திரைகள்' },
    category: 'hazardous',
    icon: 'Pill',
    description: { en: 'Blister tablets, antibiotic capsules, liquid syrups, and medicated ointments.', ta: 'காலாவதியான மாத்திரைகள், மருந்து பாட்டில்கள் மற்றும் களிம்புகள்.' },
    preparation: { en: 'Keep in original blister strips or bottles. Do not crush pills or mix liquid medications.', ta: 'அசல் பாக்கெட்டிலேயே வைத்திருக்கவும். மாத்திரைகளை உடைக்கவோ கலக்கவோ வேண்டாம்.' },
    disposal: { en: 'Pharmacy take-back box or municipal domestic hazardous waste drop.', ta: 'மருந்தகங்களில் உள்ள திரும்பப்பெறும் பெட்டி அல்லது வீட்டு அபாயகரக் கழிவு சேகரிப்பில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Flushing pills down toilets or sinks; antibiotics create antimicrobial-resistant "superbugs" in waterways.', ta: 'கழிப்பறையிலோ சிங்க்கிலோ ஊற்றுவது (கிருமி எதிர்ப்பு திறன் கொண்ட சூப்பர்பக்ஸ் உருவாகும்).' },
    reuseSuggestions: { en: 'Donate unexpired medicines nearing 6 months to recognized charitable health clinics.', ta: 'காலாவதி ஆகாத மருந்துகளை ஏழை எளியோருக்கான தொண்டு மருத்துவமனைகளுக்கு அளிக்கலாம்.' },
    municipalNotice: { en: 'Incinerated at licensed bio-medical high-temperature facilities (1100°C+).', ta: 'உயர் வெப்ப மருத்துவ கழிவு எரிப்பு உலைகளில் மட்டுமே எரிக்கப்பட வேண்டும்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'light-bulbs-cfl',
    name: { en: 'Fluorescent Tubes & CFL / LED Bulbs', ta: 'குழல் விளக்குகள் (டியூப்லைட்) & CFL பல்புகள்' },
    category: 'hazardous',
    icon: 'Lightbulb',
    description: { en: 'Gas-discharge mercury lamps and solid-state LED luminaires.', ta: 'பாதரசம் நிறைந்த டியூப்லைட்டுகள் மற்றும் சி.எஃப்.எல் பல்புகள்.' },
    preparation: { en: 'Wrap carefully in original cardboard sleeve or bubble wrap to prevent breakage.', ta: 'உடையாமல் இருக்க அட்டைப்பெட்டி அல்லது செய்தித்தாளில் சுற்றி வைக்கவும்.' },
    disposal: { en: 'Municipal hazardous waste center or hardware electrical collection bins.', ta: 'நகராட்சி அபாயகரக் கழிவு மையம் அல்லது எலக்ட்ரிக்கல் கடை சேகரிப்பில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Throwing naked bulbs into trash bags where they smash, spraying neurotoxic mercury powder.', ta: 'குப்பை பையில் சாதாரணமாக போடுவது (உடைந்து பாதரச தூள் காற்றில் பரவும்).' },
    reuseSuggestions: { en: 'Replace burnt CFLs with long-lasting LED bulbs that use 50% less electricity and have no mercury.', ta: 'பாதரசம் இல்லாத குறைந்த மின்சாரம் செலவாகும் எல்.இ.டி பல்புகளுக்கு மாறவும்.' },
    municipalNotice: { en: 'If broken indoors: evacuate room, ventilate for 15 minutes, scoop shards with cardboard (do not vacuum).', ta: 'அறைக்குள் உடைந்தால்: 15 நிமிடம் ஜன்னலை திறந்து காற்றோட்டம் செய்து அட்டை கொண்டு அள்ளவும்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'paint-chemicals',
    name: { en: 'Leftover Paint Cans & Solvents', ta: 'மீதமான பெயிண்ட் டப்பாக்கள் & தின்னர்' },
    category: 'hazardous',
    icon: 'Paintbrush',
    description: { en: 'Enamel paints, varnish, thinner, turpentine, and wood stain liquids.', ta: 'எண்ணெய் பெயிண்டுகள், வார்னிஷ், தின்னர் மற்றும் பாலிஷ் திரவங்கள்.' },
    preparation: { en: 'Seal lid tightly. If only a small skim remains, allow it to harden outdoors away from children.', ta: 'மூடியை இறுக்கமாக மூடவும். சிறிதளவு இருந்தால் பாதுகாப்பான இடத்தில் உலர்த்தி கெட்டியாக்கலாம்.' },
    disposal: { en: 'Designated hazardous chemicals drop-off event.', ta: 'நகராட்சி ரசாயன கழிவு சேகரிப்பு முகாமில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Pouring leftover paint down domestic storm drains (poisons rivers and municipal sewers).', ta: 'சாக்கடையில் ஊற்றுவது (நீர்நிலைகளை கொடிய நஞ்சாக்கும்).' },
    reuseSuggestions: { en: 'Donate usable half-cans to local theater groups or community mural artists.', ta: 'பயன்படுத்தக்கூடிய பெயிண்ட்டை நாடகக் குழுவினர் அல்லது ஓவியர்களுக்கு தானமாக அளிக்கலாம்.' },
    municipalNotice: { en: 'Contains volatile organic compounds (VOCs) that are highly combustible.', ta: 'எளிதில் தீப்பற்றக்கூடிய ஆபத்தான ஆவியாகும் ரசாயனங்கள் கொண்டது.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'pesticides-cleaners',
    name: { en: 'Pesticides, Insect Sprays & Harsh Bleach', ta: 'பூச்சிக்கொல்லி & ரசாயன கிளீனர்கள்' },
    category: 'hazardous',
    icon: 'AlertTriangle',
    description: { en: 'Mosquito coils, rat poison, toilet acid, drain unblockers, and concentrated bleach.', ta: 'கொசு மருந்து, எலி விஷம், ட்ரெயின் கிளீனர் மற்றும் ஆசிட் பாட்டில்கள்.' },
    preparation: { en: 'Keep in original marked containers with safety labels clearly visible. Never mix chemicals.', ta: 'எச்சரிக்கை லேபிளுடன் அசல் பாட்டிலிலேயே வைக்கவும். ரசாயனங்களை ஒன்றுடன் ஒன்று கலக்காதீர்கள்.' },
    disposal: { en: 'Hand over explicitly to domestic hazardous waste collectors.', ta: 'அபாயகரமான வீட்டுக்கழிவு சேகரிப்பாளர்களிடம் நேரடியாக தெரிவிக்கவும்.' },
    commonMistakes: { en: 'Mixing bleach with ammonia cleaners (generates deadly chloramine gas immediately).', ta: 'பிளீச்சிங் பவுடருடன் ஆசிட் அல்லது அம்மோனியாவை கலப்பது (உடனடி மரண வாயுவை உண்டாக்கும்).' },
    reuseSuggestions: { en: 'Switch to non-toxic baking soda, white vinegar, and lemon oil for routine kitchen scrubbing.', ta: 'சமையலறை சுத்தம் செய்ய ஆப்ப சோடா மற்றும் வினிகர் போன்ற இயற்கை பொருட்களைப் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Extreme toxic hazard. Corrosive and poisonous to human skin and respiratory systems.', ta: 'கடுமையான நச்சு ஆபத்து. தோல் மற்றும் சுவாசத்தை கடுமையாக பாதிக்கும்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'aerosol-cans',
    name: { en: 'Aerosol Spray Cans (Deodorants, Room Fresheners)', ta: 'ஏரோசல் ஸ்பிரே கேன்கள் (சென்ட், ரூம் பிரஷ்னர்)' },
    category: 'hazardous',
    icon: 'Wind',
    description: { en: 'Pressurized steel or aluminum canisters containing butane/propane propellants.', ta: 'அழுத்தப்பட்ட வாயு கொண்ட வாசனை திரவியங்கள் மற்றும் பூச்சி மருந்து கேன்கள்.' },
    preparation: { en: 'Discharge remaining contents safely until hiss stops. Do NOT puncture or incinerate.', ta: 'முழுமையாக காலியாக இருப்பதை உறுதி செய்யவும். ஓட்டை போடவோ எரிக்கவோ கூடாது.' },
    disposal: { en: 'Hazardous waste or dry metal scrap only if confirmed fully depressurized.', ta: 'அபாயகரக் கழிவு அல்லது அழுத்தம் குறைந்தால் உலர் பழைய இரும்புக் கடையில் கொடுக்கலாம்.' },
    commonMistakes: { en: 'Throwing pressurized cans in regular trash; they explode inside garbage compactor trucks.', ta: 'குப்பை லாரியில் நசுங்கும்போது குண்டு போல வெடித்து தீ விபத்தை உண்டாக்கும்.' },
    reuseSuggestions: { en: 'Switch to non-aerosol roll-on deodorants and pump-action room fragrances.', ta: 'கேன்களுக்கு பதிலாக ரோல்-ஆன் அல்லது சாதாரண பாட்டில்களைத் தேர்ந்தெடுக்கலாம்.' },
    municipalNotice: { en: 'Empty cans without pressure valves are recyclable metal; pressurized cans are explosive hazards.', ta: 'அழுத்தம் இல்லாத காலி கேன்கள் உலோக மறுசுழற்சிக்கு உகந்தவை.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 12,
    binColor: 'red'
  },
  {
    id: 'used-cooking-oil',
    name: { en: 'Used Cooking Oil & Deep Fryer Grease', ta: 'பயன்படுத்திய சமையல் எண்ணெய்' },
    category: 'hazardous',
    icon: 'Droplet',
    description: { en: 'Used vegetable oil, rancid ghee, and animal fat remnants from frying.', ta: 'வறுத்த பிறகு எஞ்சிய சமையல் எண்ணெய் மற்றும் நெய் கழிவுகள்.' },
    preparation: { en: 'Cool completely, strain food crumbs, and store in a screw-top plastic bottle.', ta: 'எண்ணெயை குளிர வைத்து, உணவுத் துகள்களை வடிகட்டி, மூடியுள்ள பிளாஸ்டிக் பாட்டிலில் சேமிக்கவும்.' },
    disposal: { en: 'Bio-diesel recovery collector or municipal used cooking oil collection point.', ta: 'பயோ-டீசல் மறுசுழற்சி மையங்களில் அல்லது எண்ணெய் மீட்பு மையங்களில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Pouring down kitchen sink; cools and forms massive sewer-choking "fatbergs".', ta: 'சிங்க்கில் ஊற்றுவது; சாக்கடை குழாய்களில் உறைந்து பாறை போல அடைப்பை ஏற்படுத்தும்.' },
    reuseSuggestions: { en: 'Collect at apartment level and sell to certified biodiesel manufacturers (RUCO initiative).', ta: 'மொத்தமாக சேகரித்து வாகனங்களுக்கான பயோ-டீசல் தயாரிக்கும் ஆலைகளுக்கு விற்கலாம்.' },
    municipalNotice: { en: 'Under RUCO (Repurpose Used Cooking Oil) rules, repeated re-heating of oil causes carcinogens.', ta: 'மீண்டும் மீண்டும் காய்ச்சி சமைப்பது புற்றுநோயை உண்டாக்கும்; முறையாக மறுசுழற்சிக்கு அளியுங்கள்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 15,
    binColor: 'red'
  },
  {
    id: 'expired-cosmetics',
    name: { en: 'Nail Polish & Solvent Removers', ta: 'நகப்பூச்சு (நெயில் பாலிஷ்) & ரிமூவர்' },
    category: 'hazardous',
    icon: 'FlaskConical',
    description: { en: 'Nitrocellulose resins, butyl acetate solvents, acetone, and heavy metallic pigments.', ta: 'அசிட்டோன் மற்றும் வேதிப்பொருட்கள் நிறைந்த நகப்பூச்சுகள் மற்றும் ரிமூவர் திரவங்கள்.' },
    preparation: { en: 'Tighten caps completely so toxic solvent vapors do not evaporate indoors.', ta: 'ஆவி வெளியேறாமல் இருக்க மூடியை இறுக்கமாக மூடவும்.' },
    disposal: { en: 'Domestic hazardous waste drop-off.', ta: 'வீட்டு அபாயகரக் கழிவு சேகரிப்பில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Washing acetone down the washbasin or pouring polish into the garden.', ta: 'வாஷ்பேசினில் ஊற்றுவது (பிளாஸ்டிக் குழாய்களை உருக்கிவிடும்).' },
    reuseSuggestions: { en: 'Use leftover clear nail polish as a waterproof sealant for fraying shoelaces.', ta: 'அவிழும் ஷூ லேஸ் முனைகளை கெட்டியாக்க வெளிப்படையான பாலிஷை தடவலாம்.' },
    municipalNotice: { en: 'Highly flammable solvent class.', ta: 'எளிதில் தீப்பற்றக்கூடிய ரசாயன பிரிவு.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 12,
    binColor: 'red'
  },
  {
    id: 'mercury-thermometers',
    name: { en: 'Old Mercury Glass Clinical Thermometers', ta: 'பாதரச காய்ச்சல் மானி (தெர்மாமீட்டர்)' },
    category: 'hazardous',
    icon: 'AlertTriangle',
    description: { en: 'Glass diagnostic tools containing liquid metallic mercury.', ta: 'பாதரசம் கொண்ட பழைய கண்ணாடி மருத்துவ தெர்மாமீட்டர்கள்.' },
    preparation: { en: 'Store in hard plastic travel case; cushion with cotton wool to prevent shattering.', ta: 'கெட்டியான பிளாஸ்டிக் பெட்டியில் பஞ்சு வைத்து உடையாமல் பாதுகாக்கவும்.' },
    disposal: { en: 'Hospital biomedical waste or specialized hazardous drop station.', ta: 'மருத்துவமனை கழிவு சேகரிப்பில் அல்லது அபாயக் கழிவு மையத்தில் ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Vacuuming spilled mercury; heat from vacuum motor vaporizes mercury into breathable neurotoxin.', ta: 'உடைந்த பாதரசத்தை வேக்யூம் கிளீனரால் உறிஞ்சுவது (ஆவியாகி நஞ்சை சுவாசிக்க நேரிடும்).' },
    reuseSuggestions: { en: 'Switch to affordable digital battery-powered or infrared thermometers.', ta: 'பாதரசம் இல்லாத நவீன டிஜிட்டல் தெர்மாமீட்டருக்கு மாறவும்.' },
    municipalNotice: { en: 'Mercury is a globally banned neurological toxin under the Minamata Convention.', ta: 'மினமாட்டா சர்வதேச மாநாட்டு விதிகளின்படி தடைசெய்யப்பட்ட நச்சு உலோகம்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 15,
    binColor: 'red'
  },

  // --- 44 to 48: ELECTRONIC WASTE ---
  {
    id: 'smartphones-tablets',
    name: { en: 'Smartphones, Tablets & Small Gadgets', ta: 'ஸ்மார்ட்போன்கள் & கைபேசிகள்' },
    category: 'ewaste',
    icon: 'Smartphone',
    description: { en: 'Retired phones containing precious metals (gold, palladium, copper) and lithium batteries.', ta: 'பயன்பாடற்ற செல்போன்கள், டேப்லெட்டுகள் மற்றும் மைக்ரோ எலக்ட்ரானிக்ஸ்.' },
    preparation: { en: 'Back up personal data, factory reset to erase credentials, and remove SIM/microSD cards.', ta: 'தனிப்பட்ட தரவுகளை அழிக்க ஃபேக்டரி ரீசெட் செய்யவும். சிம் கார்டை அகற்றவும்.' },
    disposal: { en: 'Authorized e-waste take-back kiosk or certified urban mining dismantler.', ta: 'அங்கீகரிக்கப்பட்ட மின்னணுக் கழிவு (E-Waste) மையம் அல்லது உற்பத்தியாளர் மையத்தில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Leaving old phones in desk drawers for years until batteries swell and pose fire risks.', ta: 'பல ஆண்டுகள் டிராயரில் போட்டு வைப்பது (பேட்டரி உப்பி வெடிக்கும் அபாயம் ஏற்படும்).' },
    reuseSuggestions: { en: 'Repurpose old functioning smartphone as a dedicated home security camera or digital desk clock.', ta: 'வீட்டு பாதுகாப்பு கேமராவாக அல்லது டிஜிட்டல் கடிகாரமாக மறுபயன்பாடு செய்யலாம்.' },
    municipalNotice: { en: 'E-Waste Management Rules mandate Extended Producer Responsibility (EPR) collection.', ta: 'மின்னணுக் கழிவை பொதுக் குப்பையில் போடக் கூடாது. தயாரிப்பாளர்களே திரும்பப் பெற வேண்டும்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 20,
    binColor: 'purple'
  },
  {
    id: 'cables-chargers',
    name: { en: 'Old Cables, Chargers & Power Bricks', ta: 'பழைய சார்ஜர்கள், கேபிள்கள் & அடாப்டர்கள்' },
    category: 'ewaste',
    icon: 'Cable',
    description: { en: 'Frayed USB cords, laptop power bricks, HDMI cables, and extension cords.', ta: 'அறுந்த யு.எஸ்.பி கேபிள்கள், அடாப்டர்கள் மற்றும் மின் வயர்கள்.' },
    preparation: { en: 'Bundle together neatly with a twist tie or rubber band.', ta: 'ஒன்றாக சுருட்டி ரப்பர் பேண்ட் அல்லது கயிறால் கட்டவும்.' },
    disposal: { en: 'Purple e-waste bin or consumer electronics store trade-in station.', ta: 'ஊதா மின்னணுக் கழிவு தொட்டி அல்லது எலக்ட்ரானிக்ஸ் கடை இ-வேஸ்ட் பெட்டியில் போடவும்.' },
    commonMistakes: { en: 'Burning plastic insulation off wires to get the copper inside (releases deadly dioxins).', ta: 'தாமிரத்தை எடுக்க வயரின் பிளாஸ்டிக்கை தீயிட்டு எரிப்பது (புற்றுநோய் உண்டாக்கும் நச்சுப் புகை).' },
    reuseSuggestions: { en: 'Use cable organizers and heat-shrink tubing to repair slightly frayed cords before discarding.', ta: 'லேசாக அறுந்த வயர்களை ஹீட்-ஷ்ரிங்க் டியூப் மூலம் சரிசெய்து மீண்டும் பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Pure electrolytic copper inside cables is 100% recyclable.', ta: 'இதிலுள்ள தாமிர கம்பி 100% தூய்மையான மறுசுழற்சி மதிப்புடையது.' },
    requiresSpecialHandling: false,
    isRecyclable: true,
    ecoPoints: 12,
    binColor: 'purple'
  },
  {
    id: 'laptops-computers',
    name: { en: 'Laptops, Monitors & PC Components', ta: 'மடிக்கணினிகள் & கணினி உதிரிபாகங்கள்' },
    category: 'ewaste',
    icon: 'Laptop',
    description: { en: 'Dead motherboards, desktop CPUs, keyboards, computer mice, and power supplies.', ta: 'செயலிழந்த லேப்டாப்கள், மதர்போர்டுகள், கீபோர்டு மற்றும் மவுஸ்.' },
    preparation: { en: 'Physically remove storage drives (HDD/SSD) or use cryptographic drive wipe tools.', ta: 'ஹார்ட் டிஸ்க் அல்லது எஸ்.எஸ்.டி-யை கழற்றவும் அல்லது தரவுகளை முழுமையாக அழிக்கவும்.' },
    disposal: { en: 'Schedule certified doorstep e-waste pickup.', ta: 'அங்கீகரிக்கப்பட்ட இ-வேஸ்ட் மறுசுழற்சியாளர்களை வரவழைத்து முறைப்படி ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Handing high-end electronics to unorganized informal waste pickers using toxic acid baths.', ta: 'முறைசாரா கடைகளில் கொடுப்பது (அவர்கள் ஆசிட்டில் கழுவி சுற்றுச்சூழலை கெடுப்பார்கள்).' },
    reuseSuggestions: { en: 'Upgrade old slow laptops with lightweight Linux OS and an SSD to gift to underprivileged students.', ta: 'லைனக்ஸ் இயங்குதளம் நிறுவி ஏழை எளிய மாணவர்களின் கல்விக்கு அன்பளிப்பாக அளிக்கலாம்.' },
    municipalNotice: { en: 'Backyard acid recovery of circuit boards is illegal under National Green Tribunal laws.', ta: 'அங்கீகரிக்கப்படாத இடங்களில் சர்க்யூட் போர்டுகளை அமிலத்தில் கரைப்பது சட்டவிரோதமானது.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 20,
    binColor: 'purple'
  },
  {
    id: 'headphones-earbuds',
    name: { en: 'Broken Earbuds & Bluetooth Headphones', ta: 'ஹெட்போன்கள் & புளூடூத் இயர்பட்ஸ்' },
    category: 'ewaste',
    icon: 'Headphones',
    description: { en: 'Audio accessories with neodymium magnets, copper voice coils, and micro lithium coin cells.', ta: 'சிறிய பேட்டரிகள் மற்றும் காந்தங்கள் கொண்ட ஆடியோ சாதனங்கள்.' },
    preparation: { en: 'Keep earbuds inside their charging case if possible.', ta: 'முடிந்தால் சார்ஜிங் கேஸிற்குள் இயர்பட்ஸ்களை வைத்து ஒப்படைக்கவும்.' },
    disposal: { en: 'Drop in small e-waste collection boxes at tech gadget retail outlets.', ta: 'தொழில்நுட்ப கடைகளில் உள்ள சிறு மின்னணுக் கழிவு தொட்டியில் போடவும்.' },
    commonMistakes: { en: 'Throwing earbuds into dry paper/plastic recyclables; lithium micro-cells spark conveyor fires.', ta: 'சாதாரண குப்பையில் போடுவது; இயந்திரங்களில் நசுங்கி தீப்பற்றும் அபாயம் உள்ளது.' },
    reuseSuggestions: { en: 'Many audio brands offer trade-in discounts of 15-20% when returning broken units.', ta: 'பழையதை திருப்பிக் கொடுத்து புதியது வாங்கும்போது தள்ளுபடி பெறலாம்.' },
    municipalNotice: { en: 'Hazardous mini-battery recovery is prioritized by licensed e-waste recyclers.', ta: 'இதிலுள்ள சிறிய லித்தியம் பேட்டரியை பாதுகாப்பாக பிரித்தெடுக்க வேண்டும்.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 12,
    binColor: 'purple'
  },
  {
    id: 'printers-cartridges',
    name: { en: 'Ink Cartridges & Toner Powder Units', ta: 'பிரிண்டர் இங்க் & டோனர் கார்ட்ரிட்ஜ்கள்' },
    category: 'ewaste',
    icon: 'Package',
    description: { en: 'Plastic toner cartridges containing ultra-fine carbon black and polymer dust.', ta: 'நுண்ணிய கார்பன் கருப்பு தூள் கொண்ட பிரிண்டர் இங்க் கார்ட்ரிட்ஜ்கள்.' },
    preparation: { en: 'Place inside a sealed plastic ziplock bag to prevent black toner dust escaping.', ta: 'மை தூள் காற்றில் பரவாமல் இருக்க பிளாஸ்டிக் பையில் வைத்து மூடவும்.' },
    disposal: { en: 'Manufacturer take-back program or certified printer cartridge refiller.', ta: 'உற்பத்தியாளர் திரும்பப்பெறும் மையம் அல்லது இங்க் நிரப்பும் கடையில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Inhaling toner dust while trying to wash or shake empty cartridges.', ta: 'கார்ட்ரிட்ஜை குலுக்கி அல்லது கழுவி நச்சு மை தூளை சுவாசிப்பது.' },
    reuseSuggestions: { en: 'Have cartridges professionally refilled 3-4 times rather than purchasing new ones.', ta: 'புதியது வாங்குவதற்கு பதிலாக 3-4 முறை மீண்டும் மை நிரப்பி பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Ultra-fine toner particulate is a serious respiratory irritant.', ta: 'மை தூள் நுரையீரலை கடுமையாக பாதிக்கும் நச்சுத்தன்மை வாய்ந்தது.' },
    requiresSpecialHandling: true,
    isRecyclable: true,
    ecoPoints: 15,
    binColor: 'purple'
  },

  // --- 49 to 54: SANITARY WASTE ---
  {
    id: 'sanitary-pads-diapers',
    name: { en: 'Sanitary Pads, Tampons & Baby Diapers', ta: 'சானிட்டரி பேடுகள் & குழந்தைகளுக்கான டயப்பர்கள்' },
    category: 'sanitary',
    icon: 'HeartHandshake',
    description: { en: 'Single-use absorbent hygiene products containing human bodily fluids and superabsorbent polymers (SAP).', ta: 'உடல் கழிவுகள் மற்றும் உறிஞ்சும் தன்மையுடைய தனிநபர் சுகாதாரப் பொருட்கள்.' },
    preparation: { en: 'Roll tightly, wrap securely in multiple sheets of old newspaper, and mark with a prominent RED CROSS (X).', ta: 'செய்தித்தாளில் நன்கு சுற்றி மடித்து, மேலே சிவப்பு நிற பேனாவால் பெருக்கல் குறி (X) இடவும்.' },
    disposal: { en: 'Separate sanitary waste stream / red labeled bag for high-temperature biomedical incineration.', ta: 'தனி சுகாதாரக் கழிவு பையில் போட்டு தூய்மைப் பணியாளர்களிடம் நேரடியாக ஒப்படைக்கவும்.' },
    commonMistakes: { en: 'Flushing pads down toilets (causes severe domestic sewer clogs) or throwing naked un-wrapped in bins.', ta: 'கழிப்பறையில் போடுவது அல்லது செய்தித்தாளில் சுற்றாமல் திறந்த நிலையில் குப்பையில் வீசுவது.' },
    reuseSuggestions: { en: 'Switch to medical-grade reusable silicone menstrual cups or washable cloth pads.', ta: 'மறுபயன்பாட்டு சிலிகான் மென்ஸ்ட்ருவல் கப் அல்லது துணி பேடுகளுக்கு மாறலாம்.' },
    municipalNotice: { en: 'Bio-hazard: Red cross marking allows sanitation workers to handle it with dignity, respect, and thick gloves.', ta: 'சிவப்பு குறி வைப்பது தூய்மைப் பணியாளர்கள் கையுறை அணிந்து கண்ணியத்துடன் கையாள உதவும்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 10,
    binColor: 'yellow'
  },
  {
    id: 'bandages-cotton',
    name: { en: 'Used Bandages, Gauze & Cotton Swabs', ta: 'பயன்படுத்திய பேண்டேஜ் & பஞ்சு' },
    category: 'sanitary',
    icon: 'Bandage',
    description: { en: 'First-aid dressings stained with blood, bodily exudates, antiseptic, and medicated creams.', ta: 'காயங்களுக்கு பயன்படுத்திய பேண்டேஜ், மருந்து பஞ்சு மற்றும் காஸ் துணி.' },
    preparation: { en: 'Enclose inside a paper envelope and seal.', ta: 'தனி காகித கவரில் வைத்து மடித்து மூடவும்.' },
    disposal: { en: 'Sanitary biomedical disposal bag.', ta: 'மருத்துவ சுகாதாரக் கழிவு பிரிவில் சேர்க்கவும்.' },
    commonMistakes: { en: 'Throwing blood-stained cotton into green wet composting bins.', ta: 'இரத்தம் படிந்த பஞ்சை மக்கும் ஈரக்கழிவு உரத்தில் போடுவது.' },
    reuseSuggestions: { en: 'Use sterile washable cotton towels for minor domestic cleaning instead of single-use cotton pads.', ta: 'முகத்தை துடைக்க ஒருமுறை பயன்படுத்தும் பஞ்சிற்கு பதிலாக துவைக்கும் துண்டுகளை பயன்படுத்தலாம்.' },
    municipalNotice: { en: 'Do not flush down domestic drainage systems; adhesive synthetic fibers cause blockages.', ta: 'கழிப்பறையில் போடாதீர்கள்; குழாய்களில் அடைப்பை ஏற்படுத்தும்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'masks-gloves',
    name: { en: 'Used Face Masks & Nitrile / Latex Gloves', ta: 'முகக்கவசங்கள் (மாஸ்க்) & கையுறைகள்' },
    category: 'sanitary',
    icon: 'Shield',
    description: { en: 'Surgical 3-ply polypropylene masks, N95 respirators, and examination gloves.', ta: 'அறுவைசிகிச்சை மாஸ்க்குகள், என்95 மாஸ்க் மற்றும் ரப்பர் கையுறைகள்.' },
    preparation: { en: 'Snip the elastic earloops with scissors so birds and wildlife cannot get trapped. Wrap in scrap paper.', ta: 'பறவைகள் மற்றும் விலங்குகள் மாட்டிக்கொள்ளாமல் இருக்க மாஸ்க்கின் காது கயிற்றை கத்தரித்து சுற்றவும்.' },
    disposal: { en: 'Domestic sanitary refuse stream.', ta: 'வீட்டு சுகாதார கழிவு பிரிவில் போடவும்.' },
    commonMistakes: { en: 'Littering masks in gutters or tossing into blue paper/plastic recycling.', ta: 'சாக்கடையில் வீசுவது அல்லது காகித மறுசுழற்சியில் போடுவது.' },
    reuseSuggestions: { en: 'Use washable multi-layer organic cotton cloth masks for everyday dust and pollution protection.', ta: 'தினசரி பயன்பாட்டிற்கு துவைத்துப் பயன்படுத்தக்கூடிய பருத்தி துணி மாஸ்க்குகளை அணியலாம்.' },
    municipalNotice: { en: 'Surgical masks are made of blown melt-polypropylene microfibers; neither recyclable nor biodegradable.', ta: 'மைக்ரோபிளாஸ்டிக்கால் செய்யப்பட்டது; மறுசுழற்சி செய்ய முடியாது, மக்காது.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 8,
    binColor: 'yellow'
  },
  {
    id: 'razor-blades-sharps',
    name: { en: 'Used Shaving Razor Blades & Needles (Sharps)', ta: 'ஷேவிங் பிளேடுகள் & ஊசிகள்' },
    category: 'sanitary',
    icon: 'Scissors',
    description: { en: 'Single/double-edge stainless blades, disposable safety razors, and insulin needles / lancets.', ta: 'ஷேவிங் பிளேடுகள், ஊசிகள் மற்றும் கூர்மையான அறுவைசிகிச்சை உலோகங்கள்.' },
    preparation: { en: 'Place inside a puncture-proof rigid plastic bottle (such as an empty shampoo bottle) taped shut.', ta: 'ஊசி துளைக்காத கெட்டியான பிளாஸ்டிக் பாட்டிலில் போட்டு டேப்பால் இறுக்கமாக மூடவும்.' },
    disposal: { en: 'Hand over clearly marked "SHARPS" to sanitary waste collector.', ta: '"கூர்மையானவை" என்று தெளிவாக குறிப்பிட்டு சுகாதார கழிவு சேகரிப்பில் கொடுக்கவும்.' },
    commonMistakes: { en: 'Throwing naked loose blades inside soft plastic garbage bags; slices through sanitation workers\' hands.', ta: 'வெறும் குப்பை பையில் திறந்த பிளேடுகளை போடுவது (தூய்மைப் பணியாளர்களின் கைகளை கிழித்துவிடும்).' },
    reuseSuggestions: { en: 'Switch from disposable plastic cartridge razors to traditional metal safety razors with recyclable blades.', ta: 'பிளாஸ்டிக் ரேசர்களுக்கு பதிலாக பாரம்பரிய ஸ்டீல் சேஃப்டி ரேசர்களுக்கு மாறலாம்.' },
    municipalNotice: { en: 'Severe occupational injury hazard. Responsible sharps containerization saves lives.', ta: 'கடுமையான காயம் மற்றும் தொற்று ஆபத்து. கெட்டியான பாட்டிலில் அடைத்து தருவது அவசியம்.' },
    requiresSpecialHandling: true,
    isRecyclable: false,
    ecoPoints: 12,
    binColor: 'yellow'
  },
  {
    id: 'dental-floss-picks',
    name: { en: 'Dental Floss & Plastic Floss Picks', ta: 'பல் சுத்தம் செய்யும் நூல் (டெண்டல் ஃப்ளாஸ்)' },
    category: 'sanitary',
    icon: 'HeartHandshake',
    description: { en: 'Teflon/nylon microfilaments and small rigid plastic wand picks coated in saliva.', ta: 'எச்சில் மற்றும் உணவுத் துகள்கள் படிந்த நைலான் நூல் மற்றும் பிளாஸ்டிக் குச்சிகள்.' },
    preparation: { en: 'Wrap in scrap paper.', ta: 'காகிதத்தில் சுற்றவும்.' },
    disposal: { en: 'Domestic sanitary refuse.', ta: 'வீட்டு சுகாதாரக் கழிவு.' },
    commonMistakes: { en: 'Flushing dental floss down toilets; nylon threads do not dissolve and entangle sewage water pumps.', ta: 'கழிப்பறையில் போடுவது; நைலான் நூல் மோட்டார் பம்புகளில் சுற்றிக்கொள்ளும்.' },
    reuseSuggestions: { en: 'Switch to natural silk or bamboo fiber dental floss in refillable glass or metal dispensers.', ta: 'இயற்கை பட்டு நூல் அல்லது மூங்கில் நார் ஃப்ளாஸுக்கு மாறலாம்.' },
    municipalNotice: { en: 'Indestructible synthetic thread.', ta: 'மக்காத செயற்கை இழை கழிவு.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 6,
    binColor: 'yellow'
  },
  {
    id: 'hair-combings',
    name: { en: 'Human & Pet Hair Combings', ta: 'முடி கழிவுகள் (மனித & செல்லப்பிராணி முடி)' },
    category: 'wet',
    icon: 'Scissors',
    description: { en: 'Pure keratin protein organic fibers collected from brushes and hair cuts.', ta: 'சீப்புகளில் மற்றும் முடிதிருத்தும்போது சேரும் கெரட்டின் புரத முடி கழிவுகள்.' },
    preparation: { en: 'Remove any plastic hair clips, elastic rubber bands, or bobby pins.', ta: 'பிளாஸ்டிக் கிளிப்புகள் மற்றும் ரப்பர் பேண்டுகளை நீக்கவும்.' },
    disposal: { en: 'Green compost bin or bury directly around nitrogen-hungry garden soil.', ta: 'பச்சை உரத் தொட்டி அல்லது தோட்ட மண்ணில் உரமாக புதைக்கலாம்.' },
    commonMistakes: { en: 'Flushing hair down bathroom drains (causes 80% of domestic plumbing blockages).', ta: 'குளியலறை வாய்க்காலில் போடுவது (குழாய் அடைப்பை உண்டாக்கும்).' },
    reuseSuggestions: { en: 'Hair contains 15% slow-release nitrogen; bury around rose bushes to boost blooming.', ta: '15% நைட்ரஜன் சத்து நிறைந்தது; ரோஜா செடிகளுக்கு அருமையான இயற்கை உரம்.' },
    municipalNotice: { en: '100% organic and biodegradable, though decomposes over 6 months.', ta: '100% மக்கும் கரிமக் கழிவு.' },
    requiresSpecialHandling: false,
    isRecyclable: false,
    ecoPoints: 6,
    binColor: 'green'
  }
];
