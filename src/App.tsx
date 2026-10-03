import { useState } from 'react';
import {
  Menu,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  Navigation,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Building2,
  Mail,
  DollarSign,
  Award,
  PhoneCall,
  Check,
  Handshake,
  ChevronRight,
  ArrowUpRight,
  Send
} from 'lucide-react';



export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);
  const [modalOption, setModalOption] = useState<string>('General Enquiry');

  // Interactive ROI Calculator State
  const [roiLocation, setRoiLocation] = useState<'highway' | 'city'>('highway');
  const [roiInvestment, setRoiInvestment] = useState<number>(5000000); // Default ₹50 Lakhs total
  const [roiAgreement, setRoiAgreement] = useState<5 | 10>(5);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    interest: 'Investment',
    message: ''
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Calculations for ROI Calculator
  const investorContribution = roiInvestment * 0.5;
  const evoltekContribution = roiInvestment * 0.5;

  // Return estimation
  // If 5 years: Fixed Return 5% monthly on investor contribution
  // If 10 years: Percentage Return 28% annual return on investor contribution
  const monthlyReturn = roiAgreement === 5 ? investorContribution * 0.05 : (investorContribution * 0.28) / 12;
  const totalReturn = roiAgreement === 5 ? monthlyReturn * 12 * 5 : investorContribution * 0.28 * 10;
  const roiPercentage = ((totalReturn / investorContribution) * 100).toFixed(0);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({
        name: '',
        phone: '',
        email: '',
        location: '',
        interest: 'Investment',
        message: ''
      });
    }, 4000);
  };

  const openModalWithOption = (optionTitle: string) => {
    setModalOption(optionTitle);
    setPartnerModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-[#0F172A] font-['Plus_Jakarta_Sans',sans-serif] p-1">

      {/* ================= HERO SECTION BLOCK (Electa EV Charging Station Exact Design) ================= */}
      <div id="home" className="relative w-full h-[calc(100vh-1rem)] flex flex-col justify-between rounded-2xl sm:rounded-3xl overflow-hidden bg-[#171E23] text-white shadow-xl">

        {/* TOP NAVIGATION HEADER (Full White Header Bar) */}
        <header className="relative z-30 w-full bg-white px-6 sm:px-8 py-0 flex items-center justify-between shadow-sm rounded-t-2xl sm:rounded-t-3xl">
          {/* Logo (Left) */}
          <a href="#home" className="flex items-center group py-0 shrink-0">
            <img
              src="/logo.png"
              alt="Evoltek Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto max-w-[220px] sm:max-w-[280px] md:max-w-[360px] object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Navigation Links (Center/Right) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9 ml-auto mr-8">
            <a href="#home" className="text-[#32aa15] font-bold text-sm xl:text-base hover:opacity-80 transition-opacity">
              Home
            </a>
            <a href="#about" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              About
            </a>
            <a href="#charging-stations" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Charging Stations
            </a>
            <a href="#investment" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Investment
            </a>
            <a href="#franchise" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Franchise
            </a>
            <a href="#roi-calculator" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              ROI Calculator
            </a>
            <a href="#contact" className="text-slate-800 font-semibold text-sm xl:text-base hover:text-[#32aa15] transition-colors">
              Contact
            </a>
          </nav>

          {/* Become a Partner Green Pill Button */}
          <div className="hidden sm:flex items-center ml-auto lg:ml-0 shrink-0">
            <button
              onClick={() => openModalWithOption('Become a Partner')}
              className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-sm sm:text-base py-2.5 px-5 sm:px-6 rounded-full flex items-center gap-3 shadow-lg shadow-[#32aa15]/25 transition-all duration-300 group active:scale-95 cursor-pointer shrink-0"
            >
              <span className="whitespace-nowrap">Become a Partner</span>
              <div className="w-7 h-7 rounded-full bg-white group-hover:bg-[#32aa15] text-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                <ArrowRight className="w-4 h-4 stroke-[3] group-hover:translate-x-0.5 transition-transform" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-800 hover:text-[#32aa15] ml-auto"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </header>

        {/* Mobile Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#171E23]/95 backdrop-blur-xl border-b border-slate-700/80 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200 text-white relative z-50">
            <a href="#home" onClick={() => setMobileMenuOpen(false)} className="block text-base font-bold text-[#32aa15]">Home</a>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">About</a>
            <a href="#charging-stations" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Charging Stations</a>
            <a href="#investment" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Investment</a>
            <a href="#franchise" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Franchise</a>
            <a href="#roi-calculator" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">ROI Calculator</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block text-base font-semibold text-slate-200">Contact</a>
            <div className="pt-4 border-t border-slate-700">
              <button
                onClick={() => { setMobileMenuOpen(false); openModalWithOption('Become a Partner'); }}
                className="w-full py-3.5 bg-[#32aa15] text-white font-bold text-base rounded-full flex items-center justify-center gap-2 shadow-lg"
              >
                Become a Partner
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        )}

        {/* HERO BODY AREA */}
        <div className="relative flex-1 flex items-center overflow-hidden">
          {/* Background Image */}
          <img
            src="/electa_hero_bg.jpg"
            alt="Electa EV Charging Station"
            className="absolute inset-0 w-full h-full object-cover object-center z-0"
          />

          {/* Left Side Dark Card Overlay (Matches dark logo tab seamlessly) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#171E23] via-[#171E23]/95 md:via-[#171E23]/85 to-transparent md:w-[72%] lg:w-[65%] z-10" />

          {/* Content Box */}
          <div className="relative z-20 max-w-7xl px-6 sm:px-8 py-10 sm:py-14 md:py-16 w-full">
            <div className="max-w-3xl lg:max-w-5xl space-y-6 sm:space-y-7">

              {/* Welcome Tag */}
              <div className="inline-flex items-center gap-3 text-slate-200 text-sm sm:text-base font-semibold tracking-wide">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-[#32aa15] fill-current shrink-0" />
                <span>WELCOME TO EVOLTEK</span>
              </div>

              {/* Main Headline (Single Line) */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tight font-['Plus_Jakarta_Sans'] whitespace-nowrap group">
                Powering Every{' '}
                <span className="text-[#32aa15] group-hover:text-white hover:text-white transition-colors duration-300">
                  Journey
                </span>
              </h1>

              {/* Subtitle / Description Paragraph with Note Callout */}
              <div className="space-y-3 max-w-2xl">
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-medium">
                  Building a smarter, reliable and scalable EV charging network across cities, highways and destinations.
                </p>

                {/* Note Callout (No Card Background) */}
                <div className="flex items-start gap-2.5 text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                  <Sparkles className="w-5 h-5 text-[#32aa15] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold text-white">Note:</strong> Fast charging, digital convenience and traveller-friendly EV hubs designed for the future of electric mobility.
                  </span>
                </div>
              </div>

              {/* Action Button Row (Side-by-Side) */}
              <div className="pt-3 flex flex-row items-center gap-3 sm:gap-5 flex-wrap sm:flex-nowrap">
                {/* Primary CTA Button */}
                <button
                  onClick={() => openModalWithOption('Invest With Evoltek')}
                  className="border-2 border-[#32aa15] bg-[#32aa15] hover:bg-transparent text-white hover:text-[#32aa15] font-bold text-sm sm:text-base py-3 px-6 sm:px-7 rounded-full flex items-center justify-between gap-3 sm:gap-4 shadow-xl shadow-[#32aa15]/30 hover:shadow-none transition-all duration-300 group cursor-pointer active:scale-95 hover:scale-105 shrink-0"
                >
                  <span className="whitespace-nowrap">Invest With Evoltek</span>
                  <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white group-hover:bg-[#32aa15] text-[#32aa15] group-hover:text-white flex items-center justify-center shrink-0 transition-all duration-300">
                    <ArrowUpRight className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </button>

                {/* Secondary CTA Button */}
                <a
                  href="#about"
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold text-sm sm:text-base py-3.5 px-6 sm:px-7 rounded-full flex items-center gap-2.5 shadow-md backdrop-blur-md transition-all duration-300 group cursor-pointer active:scale-95 hover:border-white/60 shrink-0"
                >
                  <span className="whitespace-nowrap">Explore Charging Stations</span>
                  <ArrowRight className="w-5 h-5 text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ================= 3. "WHAT IS EVOLTEK?" SECTION ================= */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: EV Charging Station Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-[40px] overflow-hidden shadow-2xl border border-white/80 group">
              <img
                src="/about%20us.png"
                alt="Evoltek EV Charging Station - About Us"
                className="w-full h-[460px] sm:h-[520px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Right Column: Content & 4 Features */}
          <div className="lg:col-span-6 space-y-8 text-left">

            <div className="space-y-4">
              {/* Category Pill Tag */}
              <div className="inline-flex items-center gap-2 bg-emerald-100/90 text-emerald-950 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
                <Navigation className="w-3.5 h-3.5 text-emerald-700" />
                <span>City → Highway → Destination</span>
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-[1.15] font-['Plus_Jakarta_Sans']">
                The Future of EV Charging Starts Here
              </h2>

              {/* Main Text */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                Evoltek is a new-generation EV charging station concept designed to build a convenient, reliable and scalable charging network across cities and highways.
              </p>
            </div>

            {/* 4 Clean Feature Items */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  ⚡ Fast Charging
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  High-capacity DC fast chargers minimizing wait times for every driver.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  📍 Strategic Locations
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Optimally placed along busy highways, urban centers and popular hubs.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  📱 Smart Digital Experience
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Seamless app navigation, real-time charger availability & contactless payments.
                </p>
              </div>

              <div>
                <h4 className="text-base font-bold text-slate-900">
                  🔋 Scalable Infrastructure
                </h4>
                <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                  Future-ready modular hardware designed to grow with EV adoption.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ================= 4. INVESTMENT MODEL SECTION (50/50) ================= */}
      <section id="investment" className="py-16 bg-emerald-50/40 border border-emerald-100 rounded-[30px] my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-sm">

        {/* Header */}
        <div className="text-center space-y-2 mb-12">
          <div className="flex items-center justify-center gap-3 text-emerald-700 font-extrabold uppercase text-sm sm:text-base tracking-widest">
            <span className="h-[2px] w-10 sm:w-16 bg-emerald-600"></span>
            <span>INVESTMENT MODEL: COLLABORATION</span>
            <span className="h-[2px] w-10 sm:w-16 bg-emerald-600"></span>
          </div>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-700">
            EVOLTEK & INVESTOR – GROWING TOGETHER
          </p>
        </div>

        {/* Top Visual Diagram (2 Circle Photos + 50/50 Handshake Center) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto mb-14">

          {/* Left Circle Photo: EV Charging Station */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-white border-4 border-emerald-600 shadow-xl overflow-hidden group">
              <img
                src="/highway%20charger.png"
                alt="EV Charging Station"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Center 50/50 Handshake Badge */}
          <div className="flex flex-col items-center justify-center text-center space-y-3">
            <div>
              <span className="text-4xl sm:text-5xl font-black text-emerald-700 block tracking-tight">50%</span>
              <span className="text-xs font-black uppercase text-emerald-900 tracking-wider">EVOLTEK</span>
            </div>

            <div className="flex items-center gap-3 w-full justify-center">
              <span className="h-[2px] w-8 bg-emerald-500"></span>
              <div className="w-14 h-14 rounded-full border-2 border-emerald-600 bg-white flex items-center justify-center shadow-md text-emerald-700 shrink-0">
                <Handshake className="w-7 h-7 text-emerald-700" />
              </div>
              <span className="h-[2px] w-8 bg-emerald-500"></span>
            </div>

            <div>
              <span className="text-4xl sm:text-5xl font-black text-emerald-700 block tracking-tight">50%</span>
              <span className="text-xs font-black uppercase text-emerald-900 tracking-wider">INVESTOR</span>
            </div>
          </div>

          {/* Right Circle Photo: Investor Growth */}
          <div className="flex justify-center">
            <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-white border-4 border-emerald-600 shadow-xl overflow-hidden group">
              <img
                src="/investor_growth_circle.jpg"
                alt="Investor Growth"
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>



      </section>

      {/* ================= 5. WHY INVEST WITH EVOLTEK? (6-Card Grid) ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>Investor Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Why Invest With Evoltek?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Engineered to deliver high returns, minimal operational burden, and sustainable mobility growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 01 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_shared_investment.jpg"
                    alt="Shared Investment"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Shared Investment
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Invest only half the project cost while Evoltek contributes the other half.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_hassle_free.jpg"
                    alt="Hassle-Free Operations"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Hassle-Free Operations
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Evoltek handles setup, operations and station maintenance.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_flexible_returns.jpg"
                    alt="Flexible Returns"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Flexible Returns
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Choose between percentage-based or fixed-return options.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_long_term.jpg"
                    alt="Long-Term Agreement"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Long-Term Agreement
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                5 or 10-year agreement options with renewal availability.
              </p>
            </div>
          </div>

          {/* Card 05 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_digital_transparency.jpg"
                    alt="Digital Transparency"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Digital Transparency
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Monitor station performance through the Evoltek mobile app.
              </p>
            </div>
          </div>

          {/* Card 06 */}
          <div className="bg-[#eaf6e5] rounded-[32px] border border-emerald-200/70 shadow-lg shadow-emerald-950/5 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            {/* Top White Box with Top-Right Cut & Bottom-to-Top Hover Fill */}
            <div className="p-8 sm:p-9 bg-white rounded-t-[32px] rounded-tr-[55px] flex-1 relative overflow-hidden">
              {/* Bottom-to-Top Green Hover Fill Layer from Below Card */}
              <div className="absolute inset-0 bg-[#eaf6e5] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />

              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-full bg-[#e2f7df] flex items-center justify-center p-3 shadow-sm group-hover:scale-110 group-hover:bg-white transition-all duration-300">
                  <img
                    src="/icon_3d_scalable_network.jpg"
                    alt="Scalable Network"
                    className="w-full h-full object-contain mix-blend-multiply"
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                  Scalable Network
                </h3>
              </div>
            </div>

            {/* Bottom Mint Tint Box */}
            <div className="p-8 sm:p-9 bg-[#eaf6e5] rounded-b-[32px] relative z-10 border-t border-emerald-200/50">
              <p className="text-sm font-semibold text-slate-700 leading-relaxed">
                Build a growing EV charging network across strategic locations.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 6. VISION & MISSION ================= */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Vision Screen */}
          <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 sm:p-10 rounded-3xl border border-emerald-800/40 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center">
                <Sparkles className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">Strategic Direction</span>
              <h3 className="text-3xl font-black text-white">Our Vision</h3>
              <p className="text-slate-300 text-base leading-relaxed">
                To build a smart and accessible EV charging network connecting cities, highways and destinations, enabling electric mobility without range anxiety.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-800/40 text-xs font-semibold text-emerald-400">
              ⚡ Zero Range Anxiety Mobility
            </div>
          </div>

          {/* Mission Screen */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Navigation className="w-6 h-6" />
              </div>
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-800">Core Purpose</span>
              <h3 className="text-3xl font-black text-slate-900">Our Mission</h3>
              <p className="text-slate-700 text-base leading-relaxed">
                To establish strategically located EV charging stations with reliable technology, fast charging, simple digital payments, high uptime and a customer-friendly charging experience.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-emerald-800">
              🌱 High Uptime & Customer Excellence
            </div>
          </div>

        </div>
      </section>

      {/* ================= 7. "THE SMARTER DIFFERENCE" COMPARISON ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Award className="w-3.5 h-3.5 text-emerald-700" />
            <span>Competitive Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            EVOLTEK — The Smarter Difference
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            See how Evoltek modernizes the EV infrastructure experience compared to traditional standalone chargers.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden max-w-4xl mx-auto">
          <div className="grid grid-cols-2 bg-slate-900 text-white p-4 sm:p-6 text-center text-sm sm:text-base font-extrabold">
            <div className="text-slate-400">Traditional Charging</div>
            <div className="text-emerald-400 flex items-center justify-center gap-2">
              <Zap className="w-4 h-4 fill-emerald-400" /> EVOLTEK Network
            </div>
          </div>

          <div className="divide-y divide-slate-100 text-xs sm:text-sm">

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Standalone charging points
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Connected charging network
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Individual locations
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> City → Highway → Destination
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Limited charging options
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Multiple power options (60–480 kW)
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Basic highway charging
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Highway charging destinations
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Limited traveller amenities
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Complete highway experience
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Basic digital experience
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Smart charging experience
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> General EV charging
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Passenger + fleet solutions
              </div>
            </div>

            <div className="grid grid-cols-2 p-4 sm:p-5 items-center bg-slate-50/60">
              <div className="text-slate-500 font-medium flex items-center gap-2">
                <span className="text-rose-500 font-bold">✕</span> Fixed capacity
              </div>
              <div className="text-slate-900 font-bold flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" /> Built to scale
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 8. CHARGING STATIONS SECTION ================= */}
      <section id="charging-stations" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>Station Types</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Charging Solutions Built for Every Journey
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-performance hardware configurations tailored for high-volume highway corridors and busy urban centers.
          </p>
        </div>

        {/* Cards Stack */}
        <div className="space-y-8 max-w-6xl mx-auto">

          {/* Card 1: Highway Charging Station */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Title + Subtitle + Action Button */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    Highway Charging Station
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Designed for high-speed highway corridors and long-distance drivers.
                  </p>
                </div>

                <button
                  onClick={() => openModalWithOption('Highway Charging Station')}
                  className="inline-flex items-center justify-between sm:justify-start gap-3 bg-[#38c838] hover:bg-[#2eb02e] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 group cursor-pointer w-fit"
                >
                  <span>Select Option</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>
              </div>

              {/* Middle Column: Vertical Divider + Specs List */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Minimum Space: </strong>
                    <span>1 Acre</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Power: </strong>
                    <span>60 / 120 / 180 / 240 / 360 / 480 kW</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Charger: </strong>
                    <span>DC Fast Charging</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Best For: </strong>
                    <span>Long-distance travellers & highway traffic</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Custom Rounded Cut */}
              <div className="lg:col-span-4">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden rounded-[28px] rounded-tr-[55px] rounded-bl-[55px] shadow-md group">
                  <img
                    src="/highway%20charger.png"
                    alt="Highway Charging Station"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>

          {/* Card 2: City Charging Station */}
          <div className="bg-white rounded-[32px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-lg shadow-slate-200/50 hover:shadow-xl transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
              
              {/* Left Column: Title + Subtitle + Action Button */}
              <div className="lg:col-span-4 space-y-6 flex flex-col justify-between h-full">
                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                    City Charging Station
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                    Compact, high-throughput charging hubs tailored for daily EV commuters.
                  </p>
                </div>

                <button
                  onClick={() => openModalWithOption('City Charging Station')}
                  className="inline-flex items-center justify-between sm:justify-start gap-3 bg-[#38c838] hover:bg-[#2eb02e] text-slate-950 font-black text-sm px-6 py-3.5 rounded-full shadow-md transition-all active:scale-95 group cursor-pointer w-fit"
                >
                  <span>Select Option</span>
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-slate-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                    <ArrowUpRight className="w-4 h-4 stroke-[3]" />
                  </div>
                </button>
              </div>

              {/* Middle Column: Vertical Divider + Specs List */}
              <div className="lg:col-span-4 lg:border-l border-slate-200/80 lg:pl-8 space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Minimum Space: </strong>
                    <span>2,000 sq. ft.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Power: </strong>
                    <span>60 / 120 / 180 / 240 / 360 / 480 kW</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Charger: </strong>
                    <span>DC Fast Charging</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#38c838] text-slate-950 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Check className="w-3.5 h-3.5 stroke-[3.5]" />
                  </div>
                  <div className="text-xs sm:text-sm text-slate-700 font-medium">
                    <strong className="text-slate-900 font-extrabold block sm:inline">Best For: </strong>
                    <span>Daily city EV users</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Image with Custom Rounded Cut */}
              <div className="lg:col-span-4">
                <div className="relative h-48 sm:h-56 lg:h-64 w-full overflow-hidden rounded-[28px] rounded-tr-[55px] rounded-bl-[55px] shadow-md group">
                  <img
                    src="/city%20chareger.png"
                    alt="City Charging Station"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ================= 10. RETURNS SECTION ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <DollarSign className="w-3.5 h-3.5 text-emerald-700" />
            <span>Investment Options</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Choose Your Return Model
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Pick between high-upside percentage revenue sharing or predictable fixed monthly returns.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

          {/* Option A */}
          <div className="bg-white rounded-3xl p-8 border-2 border-emerald-500 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-emerald-500 text-slate-950 font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase">
              Option A
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900">Percentage Return</h3>
              <div className="text-4xl font-extrabold text-emerald-800">28% Return</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Participate directly in station utilization growth with a percentage-based payout model over a long-term agreement.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 10-Year Agreement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Renewal availability after 10 years</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Managed technical operations</li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithOption('Choose Percentage Return Model')}
              className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
            >
              Choose Percentage Return
            </button>
          </div>

          {/* Option B */}
          <div className="bg-white rounded-3xl p-8 border-2 border-slate-900 shadow-xl space-y-6 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 bg-slate-900 text-white font-black text-xs px-4 py-1.5 rounded-bl-2xl uppercase">
              Option B
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-black text-slate-900">Fixed Return</h3>
              <div className="text-4xl font-extrabold text-slate-900">5% Monthly ROI</div>
              <p className="text-sm text-slate-600 leading-relaxed">
                Enjoy consistent, predictable cash flow with guaranteed fixed monthly returns paid directly to your account.
              </p>
              <ul className="space-y-2 text-sm text-slate-700 pt-2">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> 5-Year Agreement</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> Guaranteed monthly cash flow</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-slate-900" /> Complete operational support</li>
              </ul>
            </div>

            <button
              onClick={() => openModalWithOption('Choose Fixed Return Model')}
              className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
            >
              Choose Fixed Return
            </button>
          </div>

        </div>
      </section>

      {/* ================= 11. HOW IT WORKS ================= */}
      <section className="space-y-12 py-8 w-full">
        <div className="flex items-center justify-center gap-4 py-2">
          <div className="h-[2px] w-16 sm:w-28 bg-[#1a7d0d]" />
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1a7d0d] tracking-wider uppercase text-center">
            HOW TO GET STARTED
          </h2>
          <div className="h-[2px] w-16 sm:w-28 bg-[#1a7d0d]" />
        </div>

        <div className="relative w-full max-w-full px-4 sm:px-8 lg:px-12 mx-auto">

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 relative z-10">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_book.jpg"
                    alt="Step 1: Book"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  1
                </span>

                {/* Connector Arrow (1 -> 2) */}
                <div className="absolute left-[98%] right-[-65%] sm:right-[-70%] lg:right-[-65%] top-1/2 -translate-y-1/2 flex items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Book</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Pay a ₹25,000 booking advance and receive a receipt.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_agree.jpg"
                    alt="Step 2: Agree"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  2
                </span>

                {/* Desktop Connector Arrow (2 -> 3) */}
                <div className="hidden lg:flex absolute left-[98%] right-[-65%] top-1/2 -translate-y-1/2 items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-5 h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Agree</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Sign the agreement (5 or 10 years).
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_launch.jpg"
                    alt="Step 3: Launch"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  3
                </span>

                {/* Connector Arrow (3 -> 4) */}
                <div className="absolute left-[98%] right-[-65%] sm:right-[-70%] lg:right-[-65%] top-1/2 -translate-y-1/2 flex items-center text-[#1a7d0d] z-20 pointer-events-none">
                  <div className="flex-1 h-[2px] border-t-2 border-dashed border-[#1a7d0d]" />
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[3.5] -ml-1.5 shrink-0" />
                </div>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Launch</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Your station is set up in about 2 months.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center space-y-4 group relative">
              <div className="relative">
                <div className="w-24 h-24 sm:w-36 sm:h-36 lg:w-44 lg:h-44 rounded-full bg-white border-2 border-emerald-300 flex items-center justify-center p-3 sm:p-5 shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img
                    src="/step_track.jpg"
                    alt="Step 4: Track"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="absolute top-0 left-0 w-7 h-7 sm:w-10 sm:h-10 bg-[#1a7d0d] text-white text-xs sm:text-base font-black rounded-full flex items-center justify-center shadow-md border-2 border-white z-10">
                  4
                </span>
              </div>

              <div className="space-y-1.5 max-w-[260px]">
                <h3 className="font-extrabold text-[#1a7d0d] text-xl sm:text-2xl">Track</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold leading-relaxed">
                  Monitor everything on the Evoltek mobile app.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= 12. ROI CALCULATOR ================= */}
      <section id="roi-calculator" className="py-20 bg-slate-900 text-white rounded-[30px] my-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-2xl relative overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Financial Forecasting</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            Calculate Your Evoltek Investment
          </h2>
          <p className="text-slate-300 text-base">
            Adjust parameters below to estimate co-investment numbers and expected financial returns.
          </p>
        </div>

        {/* Calculator Controls Container */}
        <div className="bg-slate-800/90 backdrop-blur-xl p-6 sm:p-10 rounded-3xl border border-slate-700 space-y-8">

          {/* Inputs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Location Type */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Location Type</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setRoiLocation('highway')}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiLocation === 'highway' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  Highway
                </button>
                <button
                  type="button"
                  onClick={() => setRoiLocation('city')}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiLocation === 'city' ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  City
                </button>
              </div>
            </div>

            {/* Agreement Duration */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Agreement Option</label>
              <div className="grid grid-cols-2 gap-2 bg-slate-900 p-1.5 rounded-2xl border border-slate-700">
                <button
                  type="button"
                  onClick={() => setRoiAgreement(5)}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiAgreement === 5 ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  5 Yrs (5%/mo)
                </button>
                <button
                  type="button"
                  onClick={() => setRoiAgreement(10)}
                  className={`py-2.5 rounded-xl font-bold text-xs transition-colors ${roiAgreement === 10 ? 'bg-emerald-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}
                >
                  10 Yrs (28%)
                </button>
              </div>
            </div>

            {/* Investment Amount Display */}
            <div className="space-y-3">
              <label className="text-xs font-extrabold uppercase text-slate-400 tracking-wider">Total Project Budget</label>
              <div className="bg-slate-900 px-4 py-2.5 rounded-2xl border border-slate-700 text-lg font-black text-emerald-400">
                {formatCurrency(roiInvestment)}
              </div>
            </div>

          </div>

          {/* Slider */}
          <div className="space-y-2 pt-2">
            <div className="flex justify-between text-xs font-bold text-slate-400">
              <span>Min: ₹20 Lakhs</span>
              <span>Max: ₹2 Crores</span>
            </div>
            <input
              type="range"
              min={2000000}
              max={20000000}
              step={500000}
              value={roiInvestment}
              onChange={(e) => setRoiInvestment(Number(e.target.value))}
              className="w-full accent-emerald-500 cursor-pointer h-2 bg-slate-700 rounded-lg appearance-none"
            />
          </div>

          {/* Output Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4 border-t border-slate-700/80">

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Your Investment (50%)</p>
              <p className="text-xl font-extrabold text-white">{formatCurrency(investorContribution)}</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Evoltek Contribution (50%)</p>
              <p className="text-xl font-extrabold text-emerald-400">{formatCurrency(evoltekContribution)}</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Estimated Return</p>
              <p className="text-xl font-extrabold text-teal-300">{formatCurrency(totalReturn)}</p>
              <p className="text-[10px] text-slate-400">Over {roiAgreement} years</p>
            </div>

            <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-700 space-y-1">
              <p className="text-[11px] font-bold text-slate-400 uppercase">Potential ROI</p>
              <p className="text-xl font-extrabold text-emerald-400">{roiPercentage}%</p>
              <p className="text-[10px] text-slate-400">Total Return Ratio</p>
            </div>

          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => openModalWithOption(`Start Investment Journey (Calculated ${formatCurrency(investorContribution)})`)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-base px-8 py-4 rounded-[15px] shadow-lg shadow-emerald-500/20 transition-all cursor-pointer inline-flex items-center gap-2 active:scale-95"
            >
              <span>Start Your Investment Journey</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
      </section>

      {/* ================= 13. EVOLTEK MOBILE APP ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0a101b] to-slate-950 text-white rounded-[36px] p-8 sm:p-14 lg:p-16 border border-slate-800/90 shadow-2xl shadow-slate-950/80 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Ambient Glow Effects */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500/15 blur-[120px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Left Column Text & CTA */}
          <div className="lg:col-span-6 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-500/30 shadow-inner">
              <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
              <span>Smart Mobile Portal</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              Everything. <br className="hidden sm:inline" />In One App.
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
              Investors and EV Network Users can check station status, usage and earnings through the Evoltek mobile app, all in one place.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-3 bg-slate-900/90 border border-slate-700/80 text-emerald-400 text-xs font-extrabold px-6 py-3.5 rounded-2xl shadow-lg backdrop-blur-md">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
                <span>📱 Coming Soon on iOS & Android</span>
              </div>
            </div>
          </div>

          {/* Right Column: Phone Mockup Display UI */}
          <div className="lg:col-span-6 flex justify-center relative z-10">
            <div className="relative">
              
              {/* Outer Phone Frame */}
              <div className="bg-slate-950 rounded-[48px] p-5 border-[7px] border-slate-800 shadow-[0_0_60px_rgba(16,185,129,0.18)] max-w-sm w-full space-y-4 backdrop-blur-2xl relative overflow-hidden">
                
                {/* Notch / Speaker Bar */}
                <div className="w-32 h-4 bg-slate-900 rounded-full mx-auto border border-slate-800/80 mb-2 flex items-center justify-center">
                  <div className="w-3 h-1 bg-slate-800 rounded-full" />
                </div>

                {/* App Status Header */}
                <div className="flex items-center justify-between border-b border-slate-800/90 pb-3 px-1">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-lg bg-emerald-500 text-slate-950 flex items-center justify-center font-black text-xs">
                      ⚡
                    </div>
                    <span className="font-extrabold text-xs text-white tracking-wider">EVOLTEK APP</span>
                  </div>

                  <div className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/30">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    <span>● Online</span>
                  </div>
                </div>

                {/* Stats Widgets */}
                <div className="space-y-3 pt-1">

                  {/* Widget 1: Usage */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 flex justify-between items-center shadow-inner hover:border-emerald-500/40 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Today's Usage</span>
                      <p className="text-xs text-emerald-400 font-semibold">Live Monitoring</p>
                    </div>
                    <span className="text-lg font-black text-white">1,284 kWh</span>
                  </div>

                  {/* Widget 2: Sessions */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 flex justify-between items-center shadow-inner hover:border-emerald-500/40 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Sessions</span>
                      <p className="text-xs text-slate-400 font-medium">Completed Today</p>
                    </div>
                    <span className="text-lg font-black text-white">86</span>
                  </div>

                  {/* Widget 3: Earnings */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 flex justify-between items-center shadow-inner hover:border-emerald-500/40 transition-colors">
                    <div className="space-y-0.5">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Earnings</span>
                      <p className="text-xs text-slate-400 font-medium">Net Return</p>
                    </div>
                    <span className="text-lg font-black text-emerald-400">₹ 42,500</span>
                  </div>

                  {/* Widget 4: Station Performance */}
                  <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800/80 space-y-2.5 shadow-inner">
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="font-bold text-slate-400 uppercase tracking-wider">Station Performance</span>
                      <span className="text-emerald-400 font-extrabold text-xs">98.4%</span>
                    </div>
                    <div className="w-full bg-slate-950 h-2.5 rounded-full overflow-hidden border border-slate-800 p-0.5">
                      <div className="bg-gradient-to-r from-emerald-600 to-teal-400 h-full rounded-full w-[98.4%] shadow-[0_0_10px_#34d399]" />
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= 14. FRANCHISE OPPORTUNITY ================= */}
      <section id="franchise" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
            <Building2 className="w-3.5 h-3.5 text-emerald-700" />
            <span>Franchise Business</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Build Your Own EV Charging Business With Evoltek
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Comprehensive business model with shared investment, operational support, and multi-stream revenue potential.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              🤝
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">50% Shared Investment</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Evoltek funds half the project cost.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              📈
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Multiple Return Options</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Choose percentage or fixed return.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              📜
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Long-Term Security</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">5 or 10-year agreements.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              ⚙️
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Managed Operations</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Evoltek handles technical operations and maintenance.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              ⚡
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Fast DC Charging</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Highway and city charging solutions.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              🍽️
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Additional Income</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Add cafeteria, restaurant or gaming facilities.</p>
          </div>

          {/* Card 7 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              🏞️
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Landowner Opportunity</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Provide land and earn rent.</p>
          </div>

          {/* Card 8 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              🚀
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Quick Launch</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Station setup in about 2 months.</p>
          </div>

          {/* Card 9 */}
          <div className="bg-white p-6 sm:p-7 rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl hover:border-emerald-500/60 hover:-translate-y-1 transition-all duration-300 space-y-3 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-800 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-colors shadow-sm">
              📱
            </div>
            <h4 className="font-extrabold text-slate-900 text-lg">Full Visibility</h4>
            <p className="text-sm text-slate-600 font-medium leading-relaxed">Monitor performance through the mobile app.</p>
          </div>

        </div>
      </section>

      {/* ================= 15. LANDOWNER CTA ================= */}
      <section className="py-16 bg-gradient-to-r from-emerald-800 to-teal-900 text-white rounded-[30px] my-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-3 text-center md:text-left">
          <span className="text-xs uppercase font-extrabold tracking-widest text-emerald-300">Property Partnership</span>
          <h2 className="text-2xl sm:text-4xl font-black">
            Have Land? Turn It Into an EV Opportunity.
          </h2>
          <p className="text-slate-200 text-sm sm:text-base">
            Provide the space. Evoltek builds and operates the charging station.
          </p>
        </div>

        <button
          onClick={() => openModalWithOption('Landowner Partnership')}
          className="shrink-0 bg-white text-emerald-950 font-bold px-8 py-4 rounded-[15px] shadow-lg hover:bg-emerald-50 transition-colors flex items-center gap-2 cursor-pointer"
        >
          <span>Partner With Evoltek</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </section>

      {/* ================= 16. FINAL CTA ================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        <div className="max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Ready to Invest in the Future of Mobility?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Join Evoltek and become part of the next generation of EV charging infrastructure.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModalWithOption('Invest With Evoltek')}
            className="w-full sm:w-auto bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base px-8 py-4 rounded-[15px] shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5" />
            <span>Invest With Evoltek</span>
          </button>

          <a
            href="#contact"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 text-white font-bold text-base px-8 py-4 rounded-[15px] shadow-xl transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-5 h-5" />
            <span>Talk to Our Team</span>
          </a>
        </div>
      </section>

      {/* ================= 17. CONTACT SECTION ================= */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[30px] p-8 sm:p-14 border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Contact Information */}
        <div className="lg:col-span-5 space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-900 text-xs font-bold px-4 py-1.5 rounded-full border border-emerald-200">
              <Mail className="w-3.5 h-3.5 text-emerald-700" />
              <span>Get In Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Let's Power the Future Together
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Reach out to discuss co-investment models, franchise setups, land partnerships, or general enquiries.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-slate-100">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Email Us Direct</p>
                <a href="mailto:evoltekchargeindia@gmail.com" className="text-slate-900 font-bold text-base hover:text-emerald-800 transition-colors">
                  evoltekchargeindia@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7">
          {contactSubmitted ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-800 text-white rounded-full flex items-center justify-center mx-auto">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Enquiry Received!</h3>
              <p className="text-sm text-slate-600">
                Thank you for reaching out. Our Evoltek team will contact you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleContactSubmit} className="space-y-5">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-extrabold text-slate-700 uppercase">City / Location</label>
                  <input
                    type="text"
                    required
                    placeholder="Mumbai / NH-44 Corridor"
                    value={contactForm.location}
                    onChange={(e) => setContactForm({ ...contactForm, location: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase">I am interested in:</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                  {['Investment', 'Franchise', 'Charging Station', 'Land Partnership'].map((type) => (
                    <label key={type} className={`p-3 rounded-2xl border text-xs font-bold cursor-pointer transition-all flex items-center justify-center text-center ${contactForm.interest === type ? 'bg-emerald-800 text-white border-emerald-800 shadow-md' : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'}`}>
                      <input
                        type="radio"
                        name="interest"
                        value={type}
                        checked={contactForm.interest === type}
                        onChange={(e) => setContactForm({ ...contactForm, interest: e.target.value })}
                        className="sr-only"
                      />
                      <span>{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-extrabold text-slate-700 uppercase">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your location, investment preferences, or questions..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600 transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-base rounded-[15px] shadow-lg transition-colors cursor-pointer"
              >
                Submit Enquiry
              </button>

            </form>
          )}
        </div>

      </div>
      </section>

      {/* ================= 18. FOOTER ================= */}
      <footer className="relative overflow-hidden pt-16 pb-8 px-4 sm:px-8 lg:px-12 bg-[#0c1017] text-white rounded-[40px] mt-16 max-w-7xl mx-auto border border-slate-800/80 shadow-2xl">
        
        {/* Subtle Background Radial Glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-emerald-500/10 blur-[130px] rounded-full pointer-events-none" />

        {/* Top Section: Newsletter (Left) & Glassmorphic Nav Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative z-10 mb-12">

          {/* Left Column: Brand & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#38c838] flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <Zap className="w-5 h-5 text-slate-950 fill-slate-950 stroke-[2.5]" />
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Evoltek</span>
            </div>

            {/* Newsletter Headline */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-snug max-w-md tracking-tight">
              Subscribe for the latest EV Charging updates & insights
            </h3>

            {/* Newsletter Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to Evoltek newsletter!');
              }}
              className="relative max-w-md"
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full bg-white text-slate-900 placeholder:text-slate-400 text-sm font-medium rounded-full py-4 pl-6 pr-14 shadow-lg focus:outline-none focus:ring-2 focus:ring-[#38c838]"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1/2 -translate-y-1/2 w-11 h-11 bg-[#38c838] hover:bg-[#2eb02e] text-slate-950 rounded-full flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4 fill-slate-950 stroke-[2]" />
              </button>
            </form>

            <p className="text-xs text-slate-400 font-medium">
              Stay tuned and Subscribe to our newsletter
            </p>
          </div>

          {/* Right Column: Glassmorphic Link Card */}
          <div className="lg:col-span-7">
            <div className="bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-[32px] p-8 sm:p-10 shadow-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">

                {/* Column 1: Company */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-white text-base tracking-wide">Company</h4>
                  <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
                    <li><a href="#home" className="hover:text-[#38c838] transition-colors">Home</a></li>
                    <li><a href="#about" className="hover:text-[#38c838] transition-colors">About</a></li>
                    <li><a href="#charging-stations" className="hover:text-[#38c838] transition-colors">Service</a></li>
                    <li><a href="#roi-calculator" className="hover:text-[#38c838] transition-colors">Blog</a></li>
                    <li><a href="#contact" className="hover:text-[#38c838] transition-colors">Contact</a></li>
                  </ul>
                </div>

                {/* Column 2: Services */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-white text-base tracking-wide">Services</h4>
                  <ul className="space-y-2.5 text-xs font-semibold text-slate-300">
                    <li><a href="#charging-stations" className="hover:text-[#38c838] transition-colors">App control</a></li>
                    <li><a href="#franchise" className="hover:text-[#38c838] transition-colors">Commercial charging</a></li>
                    <li><a href="#charging-stations" className="hover:text-[#38c838] transition-colors">Fast charging</a></li>
                    <li><a href="#investment" className="hover:text-[#38c838] transition-colors">Home charging</a></li>
                    <li><a href="#charging-stations" className="hover:text-[#38c838] transition-colors">Station locator</a></li>
                  </ul>
                </div>

                {/* Column 3: Get in Touch */}
                <div className="space-y-4">
                  <h4 className="font-extrabold text-white text-base tracking-wide">Get in Touch</h4>
                  <div className="space-y-2.5 text-xs font-medium text-slate-300 leading-relaxed">
                    <p>Highway Corridor Hub, EV Network, India</p>
                    <a href="mailto:evoltekchargeindia@gmail.com" className="block hover:text-[#38c838] transition-colors">
                      evoltekchargeindia@gmail.com
                    </a>
                    <a href="tel:+919876543210" className="block hover:text-[#38c838] transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Glassmorphic Legal & Copyright Bar */}
        <div className="bg-white/[0.03] border border-white/10 backdrop-blur-md rounded-2xl p-5 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400">
          <div>
            © Copyright 2026 by Evoltek.com
          </div>
          <div className="flex items-center gap-6 text-xs text-slate-300">
            <a href="#contact" className="hover:text-white transition-colors">Terms & Condition</a>
            <a href="#contact" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Giant Watermark Text at Bottom */}
        <div className="text-[100px] sm:text-[170px] lg:text-[230px] font-black text-white/[0.03] select-none text-center tracking-tight leading-none pointer-events-none -mt-14 sm:-mt-24 uppercase font-['Plus_Jakarta_Sans',sans-serif]">
          Evoltek
        </div>

      </footer>

      {/* ================= ENQUIRY / PARTNER MODAL ================= */}
  {
    partnerModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
        <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative border border-slate-100">

          <button
            onClick={() => setPartnerModalOpen(false)}
            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>

            <div>
              <span className="text-xs font-extrabold text-emerald-800 uppercase tracking-wider">Partner With Evoltek</span>
              <h3 className="text-2xl font-black text-slate-900">{modalOption}</h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details to discuss our 50/50 investment model or franchise setups.
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert(`Thank you! Your enquiry for "${modalOption}" has been registered.`); setPartnerModalOpen(false); }} className="space-y-4 pt-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <input
                type="tel"
                required
                placeholder="Phone Number"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-sm focus:outline-none focus:border-emerald-600"
              />
              <button
                type="submit"
                className="w-full py-3.5 bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-sm rounded-xl shadow-lg transition-colors cursor-pointer"
              >
                Submit Partner Enquiry
              </button>
            </form>

          </div>
        </div>
      </div>
    )
  }

    </div>
  );
}
