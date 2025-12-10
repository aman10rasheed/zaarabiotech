// Zaara Biotech - Centralized Data Store
// Based on Strategic Rebranding Blueprint

export const companyInfo = {
  name: "Zaara Biotech",
  tagline: "Engineering Nature's Intelligence",
  founded: 2016,
  founder: {
    name: "Najeeb Bin Haneef",
    title: "Founder & CEO",
    initials: "NH",
  },
  headquarters: "Kalamassery, Ernakulam, Kerala, India",
  mission: "To improve the quality of life for people around the world by providing healthy food and a clean environment.",
  vision: "Engineering Nature's Intelligence: Sustainable Solutions for Energy & Food Security.",
  description: "Founded in 2016, Zaara Biotech stands at the forefront of the bio-revolution. From our innovation labs in Kerala to our global partnerships in the UAE and USA, we harness the power of micro-algae to power the future.",
  investment: {
    amount: "$10 Million",
    investor: "TCN International Commerce",
    location: "UAE",
    year: 2021,
  },
  partners: [
    { name: "ICAR", fullName: "Indian Council of Agricultural Research" },
    { name: "CIFT", fullName: "Central Institute of Fisheries Technology" },
    { name: "TCN International", fullName: "TCN International Commerce" },
    { name: "Transcend International", fullName: "Transcend International (USA)" },
  ],
  offices: [
    { location: "Kerala, India", type: "Headquarters & Innovation Lab" },
    { location: "Dubai, UAE", type: "Middle East Operations" },
    { location: "United States", type: "Transcend International" },
  ],
};

export const services = [
  {
    id: "food-beverage",
    title: "FMCG Product Engineering",
    shortTitle: "Food & Beverage R&D",
    description: "Concept to commercialization product development in the food and beverages sector. We build products that suit the market and add value to life.",
    icon: "Utensils",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=1000",
    features: ["Product Formulation", "Market Analysis", "Regulatory Compliance", "Scale-up Support"],
  },
  {
    id: "bio-cosmetics",
    title: "Bio-Cosmetics Formulation",
    shortTitle: "Cosmetics R&D",
    description: "Development of organic cosmetic products including anti-wrinkle creams, specialized toothpaste, and natural skincare solutions.",
    icon: "Sparkles",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=1000",
    features: ["Natural Ingredients", "Clinical Testing", "Formulation Design", "Packaging Solutions"],
  },
  {
    id: "agri-tech",
    title: "Sustainable Agrochemicals",
    shortTitle: "AgriTech Solutions",
    description: "Product development in weedicides, pesticides, bio-fertilizers, and implementation of innovative technology in bio-manure formation.",
    icon: "Sprout",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000",
    features: ["Bio-fertilizers", "Pest Management", "Soil Health", "Sustainable Farming"],
  },
  {
    id: "bio-it",
    title: "Bio-IT & Automation",
    shortTitle: "Bioinformatics",
    description: "Design and development of products and services in life science correlating with IoT, Artificial Intelligence, Machine Learning, and customized software.",
    icon: "Cpu",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    features: ["AI/ML Integration", "IoT Solutions", "Custom Software", "Data Analytics"],
  },
  {
    id: "bioreactors",
    title: "Custom Bioreactor Engineering",
    shortTitle: "Bioreactor Design",
    description: "Design and development of CSTR and PBR (Photobioreactors) suiting product requirements. Variables affecting chemical reactors are studied and optimized.",
    icon: "FlaskConical",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?q=80&w=1000",
    features: ["CSTR Design", "PBR Systems", "Process Optimization", "Scale Engineering"],
  },
  {
    id: "space-food",
    title: "Space Nutrition Research",
    shortTitle: "Frontier Research",
    description: "Exploring space food for astronaut survival—addressing limited storage space, restricted preparation options, and the challenges of eating without gravity.",
    icon: "Rocket",
    image: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=1000",
    features: ["Nutrient Density", "Long Shelf Life", "Zero-G Consumption", "Compact Packaging"],
  },
];

export const bliteProducts = [
  {
    id: "qawiun-2",
    name: "B-lite Qawiun 2 Cookie Shot",
    price: 600,
    category: "sports",
    description: "The Athlete's Edge: Bio-engineered for peak performance and rapid recovery.",
    ingredients: "Algae-based formula designed for sports and fitness diet",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=400",
    benefits: ["High Protein", "Energy Boost", "Rapid Recovery"],
  },
  {
    id: "spirulina-choco",
    name: "Spirulina Protein Choco Chip",
    price: 700,
    category: "general",
    description: "Superfood Indulgence: The power of Spirulina masked in rich chocolate.",
    ingredients: "Spirulina (Blue-green algae), Demerara Sugar, Millets. 11.4g Single cell protein.",
    image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=400",
    benefits: ["11.4g Protein", "Rich in Fiber", "Zero Cholesterol"],
  },
  {
    id: "espresso-rye",
    name: "Espresso Rye Cookie Bar",
    price: 400,
    category: "general",
    description: "Morning Momentum: Your coffee and breakfast, fused into one powerful bar.",
    ingredients: "Rye, Espresso, Spirulina. Complete meal replacement.",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=400",
    benefits: ["Meal Replacement", "Natural Energy", "Convenient"],
  },
  {
    id: "chia-coconut",
    name: "Chia Seed Coconut Bar",
    price: 400,
    category: "general",
    description: "Sustain Your Day: Dense nutrition from Chia and Coconut for lasting energy.",
    ingredients: "Chia seeds, Coconut. 2 bars replacing a full meal.",
    image: "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=400",
    benefits: ["Omega-3 Rich", "High Fiber", "Sustained Energy"],
  },
  {
    id: "mousse-women",
    name: "Mousse Women Cookie",
    price: 480,
    category: "women",
    description: "Osteo-Defense: Calcium-fortified nutrition tailored for women's wellness.",
    ingredients: "Calcium-rich, Sugar-less. Formulated for women over 40 to support bone health.",
    image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?q=80&w=400",
    benefits: ["Calcium Rich", "Sugar-Free", "Bone Health"],
  },
  {
    id: "pregnancy-choco",
    name: "Pregnancy Choco Cookies",
    price: 480,
    category: "pregnancy",
    description: "Maternal Care: Folic acid and millet goodness for mother and child.",
    ingredients: "Kodo millet, Quinoa, Oats, Folic Acid. Nutrient-packed for pregnancy.",
    image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=400",
    benefits: ["Folic Acid", "Iron Rich", "Prenatal Nutrition"],
  },
];

export const productSchool = {
  title: "Zaara Product School",
  tagline: "India's First Product Development Education Platform",
  description: "Global online product development training for food & cosmetics, protected by a 100% moneyback guarantee with scholarships up to 100%.",
  programs: [
    {
      id: "school",
      name: "School Programs",
      target: "Grades 7-9",
      description: "Introduction to biotechnology and product development for young minds.",
      icon: "GraduationCap",
    },
    {
      id: "graduate",
      name: "Graduate Programs",
      target: "Life Science Students",
      description: "Advanced curriculum for life science graduates pursuing R&D careers.",
      icon: "BookOpen",
    },
    {
      id: "entrepreneur",
      name: "Entrepreneur Programs",
      target: "FMCG Industry Professionals",
      description: "Comprehensive training for launching food and cosmetics businesses.",
      icon: "Briefcase",
    },
  ],
  curriculum: [
    "Introduction to Product Development",
    "Ideation & Concept Generation",
    "Formulation Science",
    "Processing & Manufacturing",
    "Commercialization Strategy",
    "Plant Design Layouts",
  ],
  outcomes: [
    "USP Identification",
    "Market Study Expertise",
    "Product Prototyping",
    "Sensory Testing",
    "Pilot Plant Production",
    "Engineering Design",
  ],
  features: [
    { title: "100% Money-Back", description: "Risk-free learning guarantee" },
    { title: "Up to 100% Scholarship", description: "Financial aid available" },
    { title: "1-Month R&D Training", description: "Hands-on immersion program" },
    { title: "Field Visits", description: "Marine & forest excursions" },
  ],
};

export const obelia = {
  name: "Obelia",
  tagline: "Redefining Built Environments",
  subtitle: "Urban Algae Project",
  description: "Active air purification using algae-based carbon offsetting systems. Transform your spaces into living, breathing ecosystems that clean the air and reduce your carbon footprint.",
  features: [
    { title: "Carbon Capture", description: "Active CO2 sequestration through photosynthesis" },
    { title: "Air Purification", description: "Natural air cleaning without chemicals" },
    { title: "Bio-Architecture", description: "Living walls and algae installations" },
    { title: "Smart Monitoring", description: "IoT-enabled environmental tracking" },
  ],
  stats: [
    { value: "40%", label: "CO2 Reduction" },
    { value: "24/7", label: "Active Purification" },
    { value: "Zero", label: "Chemical Usage" },
  ],
};

export const agro = {
  title: "Zaara Biotech Agro",
  tagline: "Pioneering Green Technologies in Agriculture",
  description: "Empowering farmers with sustainable solutions that boost productivity while protecting the environment.",
  services: [
    {
      id: "bio-fertilizers",
      title: "Bio-Fertilizers",
      description: "Organic nutrient solutions that enhance soil health and crop yield sustainably.",
      icon: "Leaf",
    },
    {
      id: "smart-farming",
      title: "Smart Farming",
      description: "IoT-enabled agricultural monitoring and precision farming solutions.",
      icon: "Cpu",
    },
    {
      id: "pest-management",
      title: "Sustainable Pest Management",
      description: "Eco-friendly pest control including solar-powered pest repellers.",
      icon: "Shield",
    },
    {
      id: "consulting",
      title: "Agricultural Consulting",
      description: "Expert guidance for sustainable farming practices and technology adoption.",
      icon: "Users",
    },
  ],
  products: [
    { name: "Solar-Powered Pest Repeller", category: "Hardware" },
    { name: "Algae-Based Bio-Fertilizer", category: "Inputs" },
    { name: "Smart Soil Sensors", category: "IoT" },
  ],
};

export const testimonials = [
  {
    quote: "Perfect cookie for my late night work. Keeps me energized without the guilt.",
    author: "The Busy Professional",
    product: "Espresso Rye Bar",
  },
  {
    quote: "Packing and carrying healthy food while cycling 50km was always a challenge. Now I pack these cookies easily.",
    author: "Endurance Athlete",
    product: "Qawiun 2 Cookie Shot",
  },
  {
    quote: "I could feel the freshness in every bite. Finally, a healthy snack that actually tastes good.",
    author: "Health Conscious Consumer",
    product: "B-Lite Range",
  },
];

export const milestones = [
  { year: 2016, title: "Foundation", description: "Founded at Sahrdaya College of Engineering, Thrissur under IEDC scheme" },
  { year: 2018, title: "ICAR Partnership", description: "Collaboration with ICAR-CIFT for spirulina research" },
  { year: 2020, title: "B-Lite Launch", description: "Commercial launch of spirulina-based cookie line" },
  { year: 2021, title: "$10M Investment", description: "Strategic investment from TCN International Commerce, UAE" },
  { year: 2022, title: "Global Expansion", description: "Transcend International subsidiary established in USA" },
  { year: 2023, title: "Obelia Launch", description: "Urban algae carbon capture project initiated" },
  { year: 2024, title: "Product School", description: "India's first food & cosmetics product development platform" },
];

export const stats = [
  { value: "2016", label: "Founded" },
  { value: "$10M", label: "Investment" },
  { value: "3", label: "Global Offices" },
  { value: "100%", label: "Natural Products" },
];

export const navLinks = {
  main: [
    { href: "/", label: "Home" },
    {
      label: "About",
      children: [
        { href: "/about", label: "Corporate Heritage" },
        { href: "/about/leadership", label: "Leadership" },
        { href: "/about/sustainability", label: "Sustainability & Obelia" },
      ],
    },
    {
      label: "Innovation",
      children: [
        { href: "/services", label: "All Services" },
        { href: "/services/food-beverage", label: "Food & Beverage R&D" },
        { href: "/services/bio-cosmetics", label: "Bio-Cosmetics" },
        { href: "/services/bio-it", label: "Bio-IT & Automation" },
        { href: "/services/bioreactors", label: "Bioreactor Engineering" },
        { href: "/services/space-food", label: "Space Nutrition" },
      ],
    },
    { href: "/agro", label: "Agro Division" },
    { href: "/store", label: "B-Lite Store" },
    { href: "/school", label: "Product School" },
    { href: "/insights", label: "Insights" },
  ],
};

