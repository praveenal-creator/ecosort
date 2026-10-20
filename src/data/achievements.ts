import { Achievement } from '../types';

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first-sort',
    title: {
      en: 'First Step Green',
      ta: 'முதல் பசுமை முயற்சி'
    },
    description: {
      en: 'Log your very first segregated waste item.',
      ta: 'உங்கள் முதல் கழிவுப் பிரிப்பை பதிவு செய்துள்ளீர்கள்.'
    },
    icon: 'Sprout',
    targetValue: 1,
    metric: 'totalSorted'
  },
  {
    id: 'sorting-champion-10',
    title: {
      en: 'Sorting Champion',
      ta: 'பிரித்தெடுத்தல் சாம்பியன்'
    },
    description: {
      en: 'Correctly sort 10 household waste items.',
      ta: '10 வீட்டுக் கழிவுப் பொருட்களை சரியாக பிரித்துள்ளீர்கள்.'
    },
    icon: 'Award',
    targetValue: 10,
    metric: 'totalSorted'
  },
  {
    id: 'segregation-master-25',
    title: {
      en: 'Segregation Master',
      ta: 'கழிவு மேலாண்மை நிபுணர்'
    },
    description: {
      en: 'Reach 25 household waste items segregated.',
      ta: '25 வீட்டுக் கழிவுகளை முறையாக பிரித்து சாதித்துள்ளீர்கள்.'
    },
    icon: 'Sparkles',
    targetValue: 25,
    metric: 'totalSorted'
  },
  {
    id: 'challenge-starter-5',
    title: {
      en: 'Eco Habit Builder',
      ta: 'சுற்றுச்சூழல் பழக்க நாயகன்'
    },
    description: {
      en: 'Successfully complete 5 daily or weekly eco challenges.',
      ta: '5 தினசரி அல்லது வாராந்திர சுற்றுச்சூழல் சவால்களை முடித்துள்ளீர்கள்.'
    },
    icon: 'CheckCircle2',
    targetValue: 5,
    metric: 'challengesCompleted'
  },
  {
    id: 'challenge-veteran-15',
    title: {
      en: 'Challenge Veteran',
      ta: 'சவால் சாதனையாளர்'
    },
    description: {
      en: 'Complete 15 challenges to prove consistent commitment.',
      ta: '15 சவால்களை வென்று சுற்றுச்சூழல் விசுவாசத்தை நிரூபித்துள்ளீர்கள்.'
    },
    icon: 'Trophy',
    targetValue: 15,
    metric: 'challengesCompleted'
  },
  {
    id: 'streak-week-7',
    title: {
      en: '7-Day Green Streak',
      ta: '7 நாள் தொடர் சாதனை'
    },
    description: {
      en: 'Maintain active segregation habit for 7 consecutive days.',
      ta: 'தொடர்ந்து 7 நாட்கள் கழிவு பிரிக்கும் நற்பழக்கத்தை கடைப்பிடித்துள்ளீர்கள்.'
    },
    icon: 'Flame',
    targetValue: 7,
    metric: 'streakDays'
  },
  {
    id: 'hazard-guardian',
    title: {
      en: 'Hazard Guardian',
      ta: 'அபாயக் கழிவு காவலர்'
    },
    description: {
      en: 'Properly segregate at least 3 hazardous or e-waste items.',
      ta: 'குறைந்தது 3 அபாயகரமான அல்லது மின்னணுக் கழிவுகளை பாதுகாப்பாக பிரித்துள்ளீர்கள்.'
    },
    icon: 'ShieldAlert',
    targetValue: 3,
    metric: 'hazardousSorted'
  },
  {
    id: 'quiz-scholar',
    title: {
      en: 'Eco Scholar',
      ta: 'சுற்றுச்சூழல் அறிஞர்'
    },
    description: {
      en: 'Earn 50+ points in the interactive waste sorting practice simulator.',
      ta: 'கழிவுப் பிரிப்பு பயிற்சி விளையாட்டில் 50+ புள்ளிகள் பெற்றுள்ளீர்கள்.'
    },
    icon: 'GraduationCap',
    targetValue: 50,
    metric: 'practiceScore'
  },
  {
    id: 'waste-chronicler-5',
    title: {
      en: 'Waste Chronicler',
      ta: 'கழிவுப் பதிவு ஆய்வாளர்'
    },
    description: {
      en: 'Record 5 entries in your personal household waste log.',
      ta: 'உங்கள் தனிப்பட்ட கழிவு பதிவேட்டில் 5 பதிவுகளை மேற்கொண்டுள்ளீர்கள்.'
    },
    icon: 'FileText',
    targetValue: 5,
    metric: 'logsCount'
  }
];
