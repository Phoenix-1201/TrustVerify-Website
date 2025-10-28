import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Checkbox } from "../../components/ui/checkbox";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

const navigationItems = [
  { label: "Home", active: true, href: "/" },
  { label: "Feature", active: false, href: "#features" },
  { label: "How it works", active: false, href: "#how-it-works" },
  { label: "Pricing", active: false, href: "#pricing" },
  { label: "Survey", active: false, href: "/survey" },
];

const trustBadges = [
  { icon: "/fi-18890334.svg", text: "Barclays Eagle Lab" },
  { icon: "/fi-2311992.svg", text: "IP Protected" },
  { icon: "/fi-4086231.svg", text: "Bank-Grade Security" },
];

const services = [
  {
    icon: "/frame-2147228477-4.svg",
    title: "Fraud Scoring",
    description: "AI-powered risk assessment \nand real-time fraud detection",
  },
  {
    icon: "/frame-2147228477-3.svg",
    title: "KYC/KYB/AML",
    description:
      "Compliant identity verification \nand comprehensive screening",
  },
  {
    icon: "/frame-2147228477-1.svg",
    title: "Escrow Protection",
    description: "Secure payment holding with automated condition verification",
  },
  {
    icon: "/frame-2147228477-2.svg",
    title: "Arbitration",
    description: "Fast, fair dispute resolution \nwith expert arbitrators",
  },
  {
    icon: "/frame-2147228477.svg",
    title: "Trust Score",
    description: "Dynamic reputation engine for safer business transactions",
  },
];

const features = [
  {
    icon: "/frame-2147228709.svg",
    title: "AI-Driven Fraud Scoring",
    description:
      "Advanced machine learning algorithms analyze hundreds of data points to provide real-time fraud risk assessment and prevent suspicious transactions before they happen.",
    items: [
      "Real-time risk assessment",
      "Behavioral pattern analysis",
      "Customizable risk thresholds",
    ],
  },
  {
    icon: "/frame-2147228709-1.svg",
    title: "Compliant KYC\nKYB/AML Screening",
    description:
      "Identity verification and anti-money laundering checks that meet regulatory requirements across multiple jurisdictions.",
    items: [
      "Real-time risk assessment",
      "Sanctions screening",
      "PEP and watchlist checks",
    ],
  },
  {
    icon: "/frame-2147228709-3.svg",
    title: "Secure Escrow  \nTransaction Protection",
    description:
      "Multi-party escrow services that hold funds securely until all transaction conditions are met, protecting both buyers and sellers.",
    items: [
      "Milestone-based releases",
      "Multi-currency support",
      "Automated fund release",
    ],
  },
  {
    icon: "/frame-2147228709-2.svg",
    title: "Dynamic Trust Score System",
    description:
      "Reputation engine that builds trust scores based on transaction history, verification status, and community feedback for safer business relationships.",
    items: [
      "Real-time score updates",
      "Transparent scoring factors",
      "Portable reputation",
    ],
  },
];

const processSteps = [
  {
    icon: <img src="/frame-1.svg"/>,
    title: "Onboard & Verify",
    description:
      "Users and businesses complete KYC/KYB verification with our compliant screening process",
    active: true,
  },
  {
    icon: <img src="/frame-2.svg"/>,
    title: "Assess & Score",
    description:
      "AI-powered fraud detection analyzes risk factors and generates trust scores for all parties",
    active: false,
  },
  {
    icon: <img src="/frame-3.svg"/>,
    title: "Secure Transaction",
    description:
      "Funds are held in escrow while transaction conditions are verified and fulfilled",
    active: false,
  },
  {
    icon: <img src="/frame-4.svg"/>,
    title: "Complete & Build Trust",
    description:
      "Successful transactions improve trust scores; disputes are resolved through fair arbitration",
    active: false,
  },
];

const benefits = [
  {
    icon: "/frame-2147228780.svg",
    title: "Build trust instantly between strangers",
    description:
      "Transform anonymous transactions into trusted relationships with verified identities and reputation scores.",
  },
  {
    icon: "/frame-2147228780.svg",
    title: "Reduce fraud and disputes by up to 90%",
    description:
      "AI-powered fraud detection and secure escrow services prevent problems before they occur.",
  },
  {
    icon: "/frame-2147228780.svg",
    title: "Protect payments and reputations",
    description:
      "Protection for your money and business reputation with escrow and arbitration services.",
  },
  {
    icon: "/frame-2147228780.svg",
    title: "All-in-one solution — no need for multiple tools",
    description:
      "Protection for your money and business reputation with escrow and arbitration services.",
  },
];

const pricingPlans = [
  {
    icon: "/icon.svg",
    name: "Starter",
    period: "During Beta Period",
    price: "Free",
    originalPrice: "€99",
    features: [
      "Basic Fraud Scoring",
      "KYC verification",
      "Up to €10k escrow",
        " Email Support",
    ],
    popular: false,
  },
  {
    icon: "/icon-1.svg",
    name: "Professional",
    period: "During Beta Period",
    price: "Free",
    originalPrice: "€99",
    features: [
      "Advanced Fraud Scoring",
      "KYC + KYB + AML Screening",
      "Up to €10k escrow",
      "Arbitration service",
      "Priority Support",
    ],
    popular: true,
  },
  {
    icon: "/icon.svg",
    name: "Enterprise",
    period: "During Beta Period",
    price: "Custom",
    originalPrice: "€99",
    features: [
      "Custom Fraud Model",
      "White-label Solution",
      "Unlimited escrow",
      "Dedicated Support Team",
    ],
    popular: false,
  },
];

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "API Documentation", href: "https://www.trustverify.io/#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQs", href: "#" },
      { label: "Contact Us", href: "#" },
    ],
  },
];

export const TrustVerify = (): JSX.Element => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    } else {
      // Handle anchor links for same page navigation
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close mobile menu after navigation
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-[#ffffff] overflow-hidden w-full relative">
      <section className="relative bg-[#1e1e1e] px-4 md:px-[100px] py-[100px] md:py-[226px]">
        
        

        {/* Decorative graphics — responsive */}
        <div className="absolute inset-0 flex justify-center lg:justify-end items-start">
          {/* Green glow */}
          <div className="hidden lg:block absolute bg-[rgba(35,182,114,0.32)] rounded-full blur-[123px]
                          w-[35vw] max-w-[466px] aspect-square top-[25%] right-[15%]" />
          
          {/* Vector pattern */}
          <div className="hidden lg:block absolute top-[70%] right-[10%] w-[30vw] max-w-[800px] pointer-events-none">
            <img
              src="/vector.png"
              alt="Vector"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Main Group 466 Image */}
          <div className="hidden lg:block absolute top-[25%] right-[15%] w-[30vw] max-w-[824.17px]">
            <img
              src="/Group 466.png"
              alt="Group 466"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>


        <header className="absolute top-[50px] left-0 right-0 flex items-center justify-between px-4 md:px-[100px]">
          <img className="h-[37px]" alt="Frame" src="/frame-2147228395.svg" />

          <nav className="hidden lg:flex items-center gap-[50px]">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                onClick={() => handleNavigation(item.href)}
                className={`[font-family:'DM_Sans',Helvetica] text-xl tracking-[0] leading-[normal] whitespace-nowrap ${
                  item.active
                    ? "font-medium text-[#ffffff]"
                    : "font-normal text-[#ffffff99]"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Button className="hidden lg:block h-auto bg-secondry rounded-[10px] shadow-[0px_0px_19.5px_#27ae60] px-5 py-3.5 [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-sm">
              Join beta
            </Button>
            
            {/* Mobile hamburger menu button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden bg-[#27ae60] rounded-[10px] p-2 sm:p-3 shadow-[0px_0px_19.5px_#27ae60]"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              ) : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              )}
            </button>
          </div>
        </header>

        {/* Mobile Navigation Panel */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 h-full w-full bg-[#27ae60] z-50">
            <div className="flex flex-col h-full">
              {/* Header with logo and close button */}
              <div className="flex items-center justify-between p-4 sm:p-6 mt-4 mx-3">
                <img className="h-[32px] sm:h-[37px]" alt="Frame" src="/frame-2147228395.svg" />
                <button
                  onClick={toggleMobileMenu}
                  className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition-colors"
                >
                  <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </button>
              </div>
              
              {/* Navigation items */}
              <nav className="flex flex-col px-4 sm:px-6 py-6 sm:py-8 space-y-4 sm:space-y-6 flex-1">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.href)}
                    className={`text-left py-3 sm:py-4 px-3 sm:px-4 rounded-lg transition-colors [font-family:'DM_Sans',Helvetica] text-lg sm:text-xl ${
                      item.active
                        ? "bg-white/20 text-white font-medium"
                        : "text-white/90 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              
              {/* Join Beta button at bottom */}
              <div className="p-6 sm:p-8">
                <Button 
                  onClick={() => handleNavigation('/')}
                  className="w-full bg-white rounded-[10px] px-4 sm:px-5 py-3 sm:py-4 [font-family:'DM_Sans',Helvetica] font-medium text-base sm:text-lg hover:bg-white/90"
                >
                  <span className="bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent]">
                    Join beta
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}

        <div className="relative z-10 flex flex-col items-start gap-[20px] sm:gap-[30px] max-w-[1200px] px-4 sm:px-6 lg:px-0 mt-10 md:mt-0">
          <Badge className="h-auto inline-flex flex-row items-center gap-3 sm:gap-[22.17px] px-4 sm:px-[22.17px] py-2 sm:py-4 bg-[#ffffff] rounded-[15.84px] shadow-[0px_0px_22.81px_#00000012] border-0">
            <div className="inline-flex items-center gap-[9.5px]">
              <img
                className="w-[12px] h-[12px] sm:w-[24.29px] sm:h-[24.29px]"
                alt="Streamline star"
                src="/streamline-star-2.svg"
              />
              <span className="[font-family:'Suisse_Int'l-Regular',Helvetica] font-normal text-[#000000] text-xsm sm:text-xl tracking-[0] leading-[20px] sm:leading-[24.0px] whitespace-nowrap">
                Now in Beta — Limited Early Access
              </span>
            </div>
            <Separator orientation="vertical" className="hidden sm:block h-6 bg-stroke" />
            <span className="[font-family:'DM_Sans',Helvetica] font-medium text-secondry text-xsm sm:text-xl tracking-[0] leading-[20px] sm:leading-[24.0px] whitespace-nowrap">
              Learn More
            </span>
          </Badge>

          <h1 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-normal text-2xl sm:text-3xl md:text-5xl lg:text-7xl tracking-[0] leading-[32px] sm:leading-[40px] md:leading-[60px] lg:leading-[80px]">
            <span className="font-medium text-[#ffffff]">
              Build Trust Prevent<br />
              Fraud Protect Every<br />
            </span>
            <span className="font-medium text-[#27ae60]">Transaction</span>
          </h1>

          <p className="max-w-[800px] font-medium text-[#ffffff] text-sm sm:text-base leading-[18px] sm:leading-[22px] [font-family:'DM_Sans',Helvetica] tracking-[0]">
            Enterprise-grade fraud prevention and trust-scoring for modern
            businesses. Secure transactions, verified identities, and instant
            dispute resolution.
          </p>

          <div className="flex flex-row items-start sm:items-center gap-4 sm:gap-16">
            {trustBadges.map((badge, index) => (
              <div key={index} className="inline-flex items-center gap-1">
                <img className="w-3 h-3 sm:w-6 sm:h-6" alt="Fi" src={badge.icon} />
                <span className="[font-family:'Suisse_Int'l-Medium',Helvetica] text-[#ffffff] text-xs sm:text-xl tracking-[0] leading-[18px] sm:leading-[22px] whitespace-nowrap">
                  {badge.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-row items-center gap-3 sm:gap-5">
            <Button className="h-auto bg-app-secondary rounded-[10px] overflow-hidden shadow-[0px_0px_19.5px_#27ae60] px-[20px] sm:px-[30px] py-[10px] sm:py-[15px] relative w-full sm:w-auto">
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-[#ffffff] text-sm sm:text-lg text-center tracking-[-0.20px] leading-[16px] sm:leading-[18px] whitespace-nowrap">
                Join Beta Program &nbsp; &nbsp;
              </span>
              <img
                className="absolute right-[6px] sm:right-[10px] top-1/2 -translate-y-1/2 w-[20px] h-[20px] sm:w-[30px] sm:h-[30px]"
                alt="Fi"
                src="/fi-6941884.svg"
              />
            </Button>

            <Button
              variant="outline"
              className="h-auto rounded-[10px] overflow-hidden border border-solid border-[#27ae60] px-[20px] sm:px-[30px] py-[10px] sm:py-[15px] bg-transparent w-full sm:w-auto"
            >
              <span className="[font-family:'DM_Sans',Helvetica] font-bold text-app-secondary text-sm sm:text-lg text-center tracking-[-0.20px] leading-[16px] sm:leading-[18px] whitespace-nowrap">
                Share Feedback
              </span>
            </Button>
          </div>

          <div className="inline-flex items-center gap-2.5">
            <img className="w-4 h-4 sm:w-6 sm:h-6" alt="Target" src="/target-02.svg" />
            <span className="[font-family:'Suisse_Int'l-Medium',Helvetica] font-medium text-[#ffffff] text-sm sm:text-xl tracking-[0] leading-[18px] sm:leading-[22px] whitespace-nowrap">
              {" "}
              Launching Q4 2025 · Join 100+ early adopters
            </span>
          </div>
        </div>
      </section>

      <section className="bg-[#ffffff]">
        <img
          className="w-full h-[65px] lg:h-[134px] object-cover"
          alt="Frame"
          src="/frame-2147227413.svg"
        />
      </section>

      <section id="features" className="bg-[#f3f3f3] px-[100px] py-[100px]">
        <div className="flex flex-col items-center gap-20">
          <div className="inline-flex flex-col items-center gap-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-[2px] h-[24px] bg-[#0b3a78]" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0b3a78] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Our Services
              </span>
            </div>

            <div className="flex flex-col items-center gap-4 max-w-[900px]">
              <h2 className="bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">
                Empowering Your Financial Journey
              </h2>

              <p className="font-normal text-[#808080] text-xl text-center leading-[normal] [font-family:'DM_Sans',Helvetica] tracking-[0]">
                Enterprise-grade tools that transform how you build trust,
                prevent fraud, and protect every transaction.
              </p>
            </div>
          </div>

          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 w-full max-w-[1720px]">
            {services.map((service, index) => (
              <Card
                key={index}
                className="flex-1 bg-[#0b3a78] rounded-[10px] border-0"
              >
                <CardContent className="p-5 flex items-center gap-9">
                  <img
                    className="w-[60px] h-[60px] flex-shrink-0"
                    alt="Frame"
                    src={service.icon}
                  />
                  <div className="flex flex-col gap-2">
                    <h3 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-grayswhite text-xl tracking-[0] leading-[normal]">
                      {service.title}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-grayswhite text-xs tracking-[0] leading-[normal] whitespace-pre-line max-w-[150px] xl:max-w-[500px] break-words">
                      {service.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="bg-[#ffffff] pt-[100px]">
        <div className="flex flex-col items-center gap-20">
          <div className="flex flex-col items-center gap-4 max-w-[900px]">
            <div className="inline-flex items-center gap-3">
              <div className="w-[2px] h-[24px] bg-secondry" />
              <span className="font-medium text-secondry [font-family:'DM_Sans',Helvetica] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                {" "}
                How it Process
              </span>
            </div>

            <h2 className="bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">
              The Journey to Financial Empowerment
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#808080] text-xl text-center tracking-[0] leading-[normal]">
              Enterprise-grade tools that transform how you build trust, prevent
              fraud, and protect every transaction.
            </p>
          </div>

          {/* Process Flow Section */}
          <div className="relative w-full max-w-[1200px] mx-auto">
            <div className="absolute top-[45px] left-0 right-0 h-[2px] bg-[#e0e0e0] z-0 mx-10 md:mx-32 hidden md:block" />
            <div className="md:hidden absolute top-0 bottom-0 left-[93px] w-[2px] bg-[#e0e0e0] z-0 my-10" />

            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-16 md:gap-0">
              {processSteps.map((processSteps, index) => (
                <div key={index} className="flex flex-row md:flex-col items-center text-left md:text-center gap-6 md:gap-0 px-14 md:px-0">
                  <div
                    className={`w-20 h-20 flex items-center justify-center rounded-full shadow-md flex-shrink-0 ${
                      processSteps.active ? "bg-[#0b3a78]" : "bg-white border border-[#e0e0e0]"
                    }`}
                  >
                    {processSteps.icon}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-medium md:mt-6">{processSteps.title}</h3>
                    <p className="text-gray-500 text-sm md:mt-2">{processSteps.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


          <div className="w-full bg-[#0b3a78] py-[11px]">
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 text-center">
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                Perfect for
              </span>
              <div className="w-2 h-2 bg-[#27ae60] rounded-full" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                E-commerce
              </span>
              <div className="w-2 h-2 bg-[#27ae60] rounded-full" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                Marketplaces
              </span>
              <div className="w-2 h-2 bg-[#27ae60] rounded-full" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                B2B Services
              </span>
              <div className="w-2 h-2 bg-[#27ae60] rounded-full" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-white text-xl tracking-[0] leading-[normal]">
                Digital Platforms
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f3f3f3] px-[100px] py-[100px]">
        <div className="flex flex-col items-center gap-[114px]">
          <div className="flex flex-col items-center gap-4 max-w-[900px]">
            <div className="inline-flex items-center gap-3">
              <div className="w-[2px] h-[24px] bg-[#0b3a78]" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0b3a78] text-xl tracking-[0] leading-[normal] whitespace-nowrap">
                Features
              </span>
            </div>

            <h2 className="bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">
              Fraud Prevention Made Easy
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#808080] text-xl text-center tracking-[0] leading-[normal]">
              Every tool you need to build trust, prevent fraud, and secure <br />
              transactions
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 w-full max-w-[1720px]">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="flex-1 rounded-[10px] bg-white"
              >
                <CardContent className="p-[30px] flex flex-col gap-[30px]">
                  <div className="flex flex-col gap-3">
                    <img className="w-16 h-[60px]" alt="Frame" src={feature.icon} />
                    <h3 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#0b3a78] text-xl">
                      {feature.title}
                    </h3>
                    <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#808080] text-sm">
                      {feature.description}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center gap-4">
                        <img
                          className="w-5 h-5 flex-shrink-0"
                          alt="Checkmark circle"
                          src="/checkmark-circle-02.svg"
                        />
                        <span className="[font-family:'DM_Sans',Helvetica] font-normal text-[#808080] text-base">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

        </div>
      </section>

      

      <section className="bg-white px-6 py-16 md:px-20 lg:px-[100px] lg:py-[100px]">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-[275px]">
          {/* Left Content */}
          <div className="flex-1 max-w-[600px]">
            <div className="flex flex-col gap-8">
              {/* Heading */}
              <h2 className="font-suisse font-normal text-3xl sm:text-4xl lg:text-5xl leading-tight">
                <span className="text-black">Your One-Stop Trust and </span>
                <span className="text-[#27ae60]">Security Solution</span>
              </h2>

              {/* Subtitle */}
              <p className="font-dmSans text-gray-500 text-base sm:text-lg leading-relaxed">
                The only trust and security solution you'll ever need
              </p>

              {/* Benefits List */}
              <div className="flex flex-col gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <img
                      className="w-6 h-6 flex-shrink-0 mt-1"
                      alt={benefit.title}
                      src={benefit.icon}
                    />
                    <div>
                      <h3 className="font-suisse font-medium text-lg text-black leading-snug">
                        {benefit.title}
                      </h3>
                      <p className="font-dmSans text-gray-500 text-sm sm:text-base leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <Button className="relative w-full sm:w-auto bg-[#27ae60] hover:bg-[#219653] text-white font-dmSans font-bold text-lg rounded-xl shadow-[0_0_12px_2px_rgba(39,174,96,0.6)] px-6 py-3 transition-all duration-300">
                  Limited Beta Access — Join Now
                  <img
                    className="absolute right-0 top-1/2 -translate-y-1/2 w-[26px] h-[26px]"
                    alt="arrow"
                    src="/fi-6941884.svg"
                  />
                </Button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 w-full">
            <img
              className="w-full h-auto rounded-[15px] object-cover"
              alt="Trust Security Visual"
              src="/rectangle-1262.png"
            />
          </div>
        </div>
      </section>




      <section
        id="pricing"
        className="bg-[#f3f3f3] px-5 sm:px-8 md:px-[60px] lg:px-[100px] py-[80px] md:py-[100px]"
      >
        <div className="flex flex-col items-center gap-[80px] md:gap-[110px]">
          {/* ===== Header Section ===== */}
          <div className="flex flex-col items-center gap-4 max-w-[900px] text-center">
            <div className="inline-flex items-center gap-3">
              <div className="w-[2px] h-[24px] bg-[#0b3a78]" />
              <span className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0b3a78] text-base sm:text-lg md:text-xl">
                Pricing
              </span>
            </div>

            <h2 className="bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-3xl sm:text-4xl md:text-5xl leading-tight">
              Get Free Fraud Protection During Beta
            </h2>

            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#808080] text-base sm:text-lg md:text-xl leading-relaxed">
              Get early access to enterprise-grade fraud prevention. Free during beta
              with exclusive founding member benefits.
            </p>
          </div>

          {/* ===== Pricing Cards ===== */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-[40px] lg:gap-[60px] w-full max-w-[1720px]">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`w-full sm:max-w-[420px] md:max-w-[500px] rounded-[20px] overflow-hidden ${
                  plan.popular
                    ? "bg-[#0b3a78] shadow-[0px_10px_20px_rgba(11,58,120,0.3)]"
                    : "bg-white shadow-[0px_10px_25px_rgba(188,202,255,0.12)]"
                } border-0`}
              >
                <CardContent className="p-8 md:p-10 flex flex-col justify-between h-auto">
                  {/* Top section */}
                  <div className="flex flex-col gap-7">
                    <div className="flex flex-col gap-5 relative">
                      <div className="flex items-start gap-3 md:items-start md:gap-5">
                        {/* Icon */}
                        <img
                          className="w-12 h-12 md:w-14 md:h-14"
                          alt="Icon"
                          src={plan.icon}
                        />

                        {/* Content */}
                        <div className="flex flex-col w-full min-w-0">
                          {/* Mobile: Badge on top, Desktop: Badge inline with title */}
                          {/* <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"> */}
                            <div className="flex flex-col gap-2 md:flex-row md:items-center">
                              {plan.popular && (
                                <Badge className="h-auto bg-[#ffffff14] rounded border border-solid border-white px-2.5 py-[3px] w-fit md:order-2 md:ml-2">
                                  <span className="[font-family:'DM_Sans',Helvetica] font-light text-white text-sm md:text-base whitespace-nowrap">
                                    Most Popular
                                  </span>
                                </Badge>
                              )}
                              
                              <h3
                                className={`[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[20px] sm:text-[24px] md:text-[32px] flex-shrink-0 md:order-1 ${
                                  plan.popular ? "text-white" : "text-[#0b3a78]"
                                }`}
                              >
                                {plan.name}
                              </h3>
                            </div>
                          {/* </div> */}

                          {/* Period */}
                          <p
                            className={`[font-family:'DM_Sans',Helvetica] font-light text-lg md:text-xl ${
                              plan.popular ? "text-white" : "text-[#787777]"
                            }`}
                          >
                            {plan.period}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-row items-start gap-2">
                        <span
                          className={`[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[38px] sm:text-[44px] ${
                            plan.popular ? "text-white" : "text-[#0b3a78]"
                          }`}
                        >
                          {plan.price}
                        </span>
                        <span
                          className={`line-through text-lg sm:text-xl pt-3 ${
                            plan.popular ? "text-white" : "text-[#787777]"
                          }`}
                        >
                          {plan.originalPrice}
                        </span>
                      </div>
                    </div>

                    <Separator
                      className={`${
                        plan.popular ? "bg-white" : "bg-[#e2e2e2]"
                      } h-[1px]`}
                    />

                    {/* Features */}
                    <div className="flex flex-col gap-3">
                      {plan.features.map((feature, featureIndex) => (
                        <div
                          key={featureIndex}
                          className="flex items-start gap-3 leading-7"
                        >
                          <img
                            className="w-6 h-6 flex-shrink-0 mt-[2px]"
                            alt="check"
                            src={
                              plan.popular
                                ? "/checkmark-circle-02-5.svg"
                                : "/checkmark-circle-02.svg"
                            }
                          />
                          <span
                            className={`[font-family:'DM_Sans',Helvetica] font-normal text-base sm:text-lg ${
                              plan.popular ? "text-white" : "text-[#0b3a78]"
                            }`}
                          >
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <Button
                    className={`mt-8 h-auto rounded-xl px-10 py-[16px] text-center ${
                      plan.popular
                        ? "bg-white hover:bg-white/90"
                        : "bg-transparent border border-[#27ae60] hover:bg-[#27ae6014]"
                    }`}
                  >
                    <span
                      className={`[font-family:'DM_Sans',Helvetica] font-medium text-lg md:text-xl ${
                        plan.popular ? "text-[#0b3a78]" : "text-[#27ae60]"
                      }`}
                    >
                      Get Started
                    </span>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      

      <section className="bg-[#ffffff] py-0 md:py-[200px] relative max-md:flex max-md:flex-col">
        <section className="absolute top-1/2 right-[100px] -translate-y-1/2 z-50 max-md:static max-md:top-auto max-md:right-auto max-md:translate-y-0 max-md:mx-0 max-md:mt-0 max-md:order-2 max-md:w-full">
          <Card className="bg-[#ffffff] rounded-none md:rounded-[10px] overflow-hidden shadow-none md:shadow-[0px_2px_10px_#0b3a7899] border-0 max-md:rounded-none max-md:shadow-none max-md:border-0 max-md:h-full">
            <CardContent className="p-[50px] flex flex-col gap-[30px] w-[600px] max-md:w-full max-md:p-6 max-md:gap-6">
              <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-6">
                <div className="flex-1 flex flex-col gap-4">
                  <Label
                    htmlFor="fullName"
                    className="[font-family:'DM_Sans',Helvetica] font-normal text-black-80 text-base tracking-[0] leading-[normal]"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    defaultValue="Jhon Smith"
                    className="h-auto bg-ppp-white rounded-md border border-solid border-[#d7dedd] p-2 [font-family:'DM_Sans',Helvetica] font-light text-[#9ea3a2] text-sm"
                  />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <Label
                    htmlFor="email"
                    className="[font-family:'DM_Sans',Helvetica] font-normal text-black-80 text-base tracking-[0] leading-[normal]"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    defaultValue="JhonSmith@gmail.com"
                    className="h-auto bg-ppp-white rounded-md border border-solid border-[#d7dedd] p-2 [font-family:'DM_Sans',Helvetica] font-light text-[#9ea3a2] text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center gap-4 max-md:flex-col max-md:items-stretch max-md:gap-6">
                <div className="flex-1 flex flex-col gap-4">
                  <Label
                    htmlFor="accountType"
                    className="[font-family:'DM_Sans',Helvetica] font-normal text-black-80 text-base tracking-[0] leading-[normal]"
                  >
                    Account Type
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="accountType"
                      className="h-auto bg-ppp-white rounded-md border border-solid border-[#d7dedd] p-2 [font-family:'DM_Sans',Helvetica] font-light text-[#9ea3a2] text-sm"
                    >
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <Label
                    htmlFor="industrySector"
                    className="[font-family:'DM_Sans',Helvetica] font-normal text-black-80 text-base tracking-[0] leading-[normal]"
                  >
                    Industry Sector
                  </Label>
                  <Select>
                    <SelectTrigger
                      id="industrySector"
                      className="h-auto bg-ppp-white rounded-md border border-solid border-[#d7dedd] p-2 [font-family:'DM_Sans',Helvetica] font-light text-[#9ea3a2] text-sm"
                    >
                      <SelectValue placeholder="Select Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="tech">Technology</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                      <SelectItem value="retail">Retail</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex flex-col gap-4 max-md:gap-6">
                <Label
                  htmlFor="useCase"
                  className="[font-family:'DM_Sans',Helvetica] font-normal text-black-80 text-base tracking-[0] leading-[normal]"
                >
                  How will you use TrustVerify? (Optional)
                </Label>
                <Textarea
                  id="useCase"
                  placeholder="Tell us about your use case"
                  className="h-auto min-h-[80px] bg-ppp-white rounded-md border border-solid border-[#d7dedd] p-2 [font-family:'DM_Sans',Helvetica] font-light text-[#9ea3a2] text-sm resize-none"
                />
              </div>

              <div className="flex items-center gap-4 max-md:gap-6">
                <Checkbox
                  id="terms"
                  className="border border-solid border-[#0b3a78]"
                />
                <Label
                  htmlFor="terms"
                  className="[font-family:'DM_Sans',Helvetica] font-normal text-base tracking-[0] leading-[normal] cursor-pointer"
                >
                  <span className="text-[#0b3a78]">I agree to the </span>
                  <span className="text-[#0b3a78] underline">
                    Terms of Service
                  </span>
                  <span className="text-[#0b3a78]"> and </span>
                  <span className="text-[#0b3a78] underline">Privacy Policy</span>
                </Label>
              </div>

              <Button className="h-auto bg-secondry rounded-[10px] shadow-[0px_0px_19.5px_#27ae60] px-5 py-3.5 w-full [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-sm">
                Join beta waitlist
              </Button>
            </CardContent>
          </Card>
        </section>

        <section className="relative bg-[url(../frame-2147228454.png)] bg-cover bg-center px-[100px] py-[100px] max-md:px-6 max-md:py-12 max-md:h-[453px] max-md:order-1">
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,58,120,0.46)_0%,rgba(11,58,120,0.46)_100%)]" />
          <div className="relative z-10 flex flex-col items-start justify-center gap-[50px] max-w-[900px] max-md:gap-8">
            <div className="flex flex-col items-start gap-[30px] max-md:gap-6">
              <h2 className="[font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-[#ffffff] text-[62px] tracking-[0] leading-[74.4px] max-md:text-4xl max-md:leading-tight">
                Exclusive Secure <br />
                Beta Access
              </h2>
              <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#ffffff] text-2xl tracking-[0] leading-[normal] max-md:text-lg">
                Join now and get free access to advanced fraud protection.
              </p>
            </div>
          </div>
        </section>
      </section>

      <footer className="bg-[#ffffff] border-t border-solid border-[#e2e2e2] px-[98px] py-[52px]">
        <div className="flex flex-col gap-[30px]">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col items-start justify-between gap-[130px]">
              <img
                className="w-[253px] h-[54.27px]"
                alt="Group"
                src="/group.png"
              />

              <div className="flex flex-col">
                <p className="[font-family:'DM_Sans',Helvetica] font-normal text-greysubtittle text-xl tracking-[0] leading-[24.0px]">
                  Building trust in digital transactions through fraud <br/>
                  prevention, identity verification, and secure escrow <br/>
                  services.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-[100px]">
              {footerSections.map((section, index) => (
                <div key={index} className="flex flex-col gap-6">
                  <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0b3a78] text-2xl tracking-[0] leading-9 whitespace-nowrap">
                    {section.title}
                  </h3>
                  <div className="flex flex-col gap-3.5">
                    {section.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="[font-family:'DM_Sans',Helvetica] font-normal text-greysubtittle text-sm tracking-[0] leading-[21px] whitespace-nowrap hover:text-[#0b3a78] transition-colors"
                        {...(link.href.startsWith("http") && {
                          rel: "noopener noreferrer",
                          target: "_blank",
                        })}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              ))}

              <div className="flex flex-col gap-6">
                <h3 className="[font-family:'DM_Sans',Helvetica] font-medium text-[#0b3a78] text-2xl tracking-[0] leading-9 whitespace-nowrap">
                  Follow us on:
                </h3>
                <img
                  className="w-full"
                  alt="Frame"
                  src="/frame-2147225952.svg"
                />
              </div>
            </div>

          </div>

          <Separator className="bg-[#e2e2e2]" />

          <div className="flex items-center justify-between">
            <p className="[font-family:'DM_Sans',Helvetica] font-normal text-[#000000] text-base tracking-[0] leading-6 whitespace-nowrap">
              © 2025 TrustVerify. All rights reserved.
            </p>

            <div className="flex items-center gap-3.5">
              <a
                href="#"
                className="[font-family:'DM_Sans',Helvetica] font-normal text-greyg-400 text-base tracking-[0] leading-6 whitespace-nowrap border-b border-solid border-[#9ea2ae] hover:text-[#0b3a78] transition-colors"
              >
                Privacy Policy
              </a>

              <Separator orientation="vertical" className="h-1 w-1 rounded-full bg-greyg-400" />

              <a
                href="#"
                className="[font-family:'DM_Sans',Helvetica] font-normal text-greyg-400 text-base tracking-[0] leading-6 whitespace-nowrap border-b border-solid border-[#9ea2ae] hover:text-[#0b3a78] transition-colors"
              >
                Legal
              </a>

              <Separator orientation="vertical" className="h-1 w-1 rounded-full bg-greyg-400" />

              <a
                href="#"
                className="[font-family:'DM_Sans',Helvetica] font-normal text-greyg-400 text-base tracking-[0] leading-6 whitespace-nowrap border-b border-solid border-[#9ea2ae] hover:text-[#0b3a78] transition-colors"
              >
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
