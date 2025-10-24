import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { CardContent } from "../../components/ui/card";
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
  { label: "Home", active: false, href: "/" },
  { label: "Feature", active: false, href: "/#features" },
  { label: "How it works", active: false, href: "/#how-it-works" },
  { label: "Pricing", active: false, href: "/#pricing" },
  { label: "Survey", active: true, href: "/survey" },
];

const companySizeOptions = [
  "1-10 Employees",
  "11-50 Employees", 
  "51-200 Employees",
  "201-500 Employees",
  "501+ Employees"
];

const roleOptions = [
  "CEO-Founder",
  "COO-Operations Lead",
  "CTO-Tech Lead",
  "Risk-Compliance Manager",
  "Fraud Analyst-Security Officer",
  "Product-Data Lead",
  "Other"
];

const geographicalFocusOptions = [
  "UK",
  "EU", 
  "North America",
  "Africa",
  "Asia-Pacific",
  "Global"
];

const fraudPreventionTools = [
  "Identity verification (KYC/KYB)",
  "Fraud scoring/behavioral analytics",
  "Transaction monitoring",
  "Dispute resolution/arbitration tools",
  "None-we manage manually",
  "Other"
];

const evaluationOptions = [
  "Yes-we evaluated other options",
  "No-not yet, but considering",
  "No-we're satisfied with our current setup",
  "Not sure"
];

const currentSpendingOptions = [
  "<$100",
  "$100-$499",
  "$500-$999", 
  "$1,000-$4,999",
  "$5,000+",
  "Not sure / Prefer not to say"
];

const pricingModelOptions = [
  "Monthly subscription (fixed per business)",
  "Per-transaction (per verification/transaction)",
  "Tiered plan (based on usage volume)",
  "Enterprise contract",
  "Not sure"
];

const maxAmountOptions = [
  "<$100",
  "$100-$499",
  "$500-$999",
  "$1,000-$4,999", 
  "$5,000+",
  "Not sure"
];

const adoptionFactors = [
  "Cost savings",
  "Ease of integration",
  "Accuracy and reliability",
  "Regulatory compliance",
  "Customer trust/reputation",
  "Vendor credibility",
  "Other"
];

const adoptionBarriers = [
  "Cost-budget constraints",
  "Integration complexity",
  "Data privacy/compliance concerns",
  "Lack of trust in new provider",
  "Internal approvals/processes",
  "Other"
];

const betaAccessOptions = [
  "Yes-I'd like early access",
  "Maybe later-keep me informed",
  "No, just submitting feedback"
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

export const Survey = (): JSX.Element => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    industrySector: "",
    companySize: "1-10 Employees",
    role: "",
    geographicalFocus: "Global",
    fraudTools: [] as string[],
    satisfaction: "",
    challenges: "",
    evaluation: "Not sure",
    desiredFeature: "",
    usefulSituation: "",
    currentSpending: "$100-$499",
    pricingModel: "Monthly subscription (fixed per business)",
    maxAmount: "",
    adoptionFactors: [] as string[],
    adoptionBarriers: [] as string[],
    additionalCapabilities: "",
    betaAccess: "No, just submitting feedback",
    privacyAgreement: true
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleCheckboxChange = (field: string, value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field as keyof typeof prev] as string[], value]
        : (prev[field as keyof typeof prev] as string[]).filter(item => item !== value)
    }));
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      navigate(href);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Survey submitted:", formData);
    // Handle form submission here
    alert("Thank you for your feedback! Your survey has been submitted.");
  };

  return (
    <div className="bg-[#ffffff] min-h-screen">
      {/* Hero Section with Header */}
      <section className="relative bg-[#1e1e1e] px-4 md:px-[100px] py-[50px] min-h-[500px]">
        <div className="absolute inset-0 bg-[url('/frame-2147228742.png')] bg-cover bg-center opacity-20" />
        
        {/* Header */}
        <header className="relative z-10 mb-[50px]">
          <div className="flex items-center justify-between">
            <img className="h-[37px]" alt="TrustVerify Logo" src="/frame-2147228395.svg" />
            
            <nav className="hidden md:flex items-center gap-[50px]">
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

            <Button className="h-auto bg-secondry rounded-[10px] shadow-[0px_0px_19.5px_#27ae60] px-5 py-3.5 [font-family:'DM_Sans',Helvetica] font-medium text-[#ffffff] text-sm">
              Join beta
            </Button>
          </div>
        </header>
      </section>

      {/* Survey Form */}
      <form onSubmit={handleSubmit} className="px-4 md:px-[100px] py-[80px] mx-auto">
        
        {/* Section A: Company Information */}
        <section className="bg-[#f3f3f3] py-10">
          <CardContent className="p-8">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-[2px] h-[26px] bg-[#0B3A78]" />
                <span className="text-primary text-lg">Section A</span>
              </div>
              <h2 className="my-2 bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">Company Information</h2>
              <p className="text-[#808080] text-xl my-1">Your trusted partner in secure financial solutions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="fullName" className="text-lg font-medium mb-2 block">Full Name</Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  className="h-12 text-lg bg-white border-0"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-lg font-medium mb-2 block">Email Address</Label>
                <Input
                  id="email"
                  placeholder="johnsmith@gmail.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="h-12 text-lg bg-white border-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <Label htmlFor="companyName" className="text-lg font-medium mb-2 block">Company Name</Label>
                <Input
                  id="companyName"
                  placeholder="Type Here"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  className="h-12 text-lg bg-white border-0"
                />
              </div>
              <div>
                <Label htmlFor="industrySector" className="text-lg font-medium mb-2 block">Industry Sector</Label>
                <Select value={formData.industrySector} onValueChange={(value) => handleInputChange('industrySector', value)}>
                  <SelectTrigger className="h-12 text-lg bg-white border-0">
                    <SelectValue placeholder="Select Sector" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">Company Size</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {companySizeOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="companySize"
                      value={option}
                      checked={formData.companySize === option}
                      onChange={(e) => handleInputChange('companySize', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={option} className="text-base cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">Your Role / Function</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {roleOptions.map((role) => (
                  <div key={role} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={role}
                      name="role"
                      value={role}
                      checked={formData.role === role}
                      onChange={(e) => handleInputChange('role', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={role} className="text-base cursor-pointer">{role}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-lg font-medium mb-4 block">Geographical Focus of Your Business</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {geographicalFocusOptions.map((region) => (
                  <div key={region} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={region}
                      name="geographicalFocus"
                      value={region}
                      checked={formData.geographicalFocus === region}
                      onChange={(e) => handleInputChange('geographicalFocus', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={region} className="text-base cursor-pointer">{region}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </section>

        {/* Section B: Current Trust & Fraud Management */}
        <section className="bg-[#f3f3f3] py-10">
          <CardContent className="p-8">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-[2px] h-[26px] bg-[#0B3A78]" />
                <span className="text-primary text-lg">Section B</span>
              </div>
              <h2 className="my-2 bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">Current Trust & Fraud Management</h2>
              <p className="text-[#808080] text-xl my-1">Explore how we manage trust and prevent fraud today.</p>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">Which fraud prevention tools do you currently use?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fraudPreventionTools.map((tool) => (
                  <div key={tool} className="flex items-center space-x-2">
                    <Checkbox
                      id={tool}
                      checked={formData.fraudTools.includes(tool)}
                      onCheckedChange={(checked) => handleCheckboxChange('fraudTools', tool, checked as boolean)}
                    />
                    <Label htmlFor={tool} className="text-base cursor-pointer">{tool}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="satisfaction" className="text-lg font-medium mb-2 block">How satisfied are you with your current tools?</Label>
              <Textarea
                id="satisfaction"
                placeholder="Type Here"
                value={formData.satisfaction}
                onChange={(e) => handleInputChange('satisfaction', e.target.value)}
                className="min-h-[100px] text-lg bg-white border-0"
              />
            </div>

            <div className="mb-6">
              <Label htmlFor="challenges" className="text-lg font-medium mb-2 block">What are your top 2-3 challenges in managing fraud, risk, or digital trust?</Label>
              <Textarea
                id="challenges"
                placeholder="Please describe your main challenges."
                value={formData.challenges}
                onChange={(e) => handleInputChange('challenges', e.target.value)}
                className="min-h-[100px] text-lg bg-white border-0"
              />
            </div>

            <div>
              <Label className="text-lg font-medium mb-4 block">Have you evaluated any alternative tools in the past year?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {evaluationOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="evaluation"
                      value={option}
                      checked={formData.evaluation === option}
                      onChange={(e) => handleInputChange('evaluation', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={option} className="text-base cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </section>

        {/* Section C: Desired Features & Priorities */}
        <section className="bg-[#f3f3f3] py-10">
          <CardContent className="p-8">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-[2px] h-[26px] bg-[#0B3A78]" />
                <span className="text-primary text-lg">Section C</span>
              </div>
              <h2 className="my-2 bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">Desired Features & Priorities</h2>
              <p className="text-[#808080] text-xl my-1">Focused on the features that drive real impact.</p>
            </div>

            <div className="mb-6">
              <Label htmlFor="desiredFeature" className="text-lg font-medium mb-2 block">If you could have ONE feature that would make you switch immediately, what would it be?</Label>
              <Textarea
                id="desiredFeature"
                placeholder="Describe your most wanted feature."
                value={formData.desiredFeature}
                onChange={(e) => handleInputChange('desiredFeature', e.target.value)}
                className="min-h-[100px] text-lg bg-white border-0"
              />
            </div>

            <div>
              <Label htmlFor="usefulSituation" className="text-lg font-medium mb-2 block">In what situation would a Trust/Fraud prevention platform be most useful?</Label>
              <Textarea
                id="usefulSituation"
                placeholder="Please describe the specific scenario."
                value={formData.usefulSituation}
                onChange={(e) => handleInputChange('usefulSituation', e.target.value)}
                className="min-h-[100px] text-lg bg-white border-0"
              />
            </div>
          </CardContent>
        </section>

        {/* Section D: Pricing & Adoption Willingness */}
        <section className="bg-[#f3f3f3] py-10">
          <CardContent className="p-8">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-[2px] h-[26px] bg-[#0B3A78]" />
                <span className="text-primary text-lg">Section D</span>
              </div>
              <h2 className="my-2 bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">Pricing & Adoption Willingness</h2>
              <p className="text-[#808080] text-xl my-1">Understanding value and readiness to adopt.</p>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">How much do you currently spend on trust/fraud tools per month?</Label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {currentSpendingOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="currentSpending"
                      value={option}
                      checked={formData.currentSpending === option}
                      onChange={(e) => handleInputChange('currentSpending', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={option} className="text-base cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">Which pricing model would you prefer?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pricingModelOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="pricingModel"
                      value={option}
                      checked={formData.pricingModel === option}
                      onChange={(e) => handleInputChange('pricingModel', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={option} className="text-base cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <Label htmlFor="maxAmount" className="text-lg font-medium mb-2 block">Maximum amount your company would pay per month for an all-in-one solution?</Label>
              <Select value={formData.maxAmount} onValueChange={(value) => handleInputChange('maxAmount', value)}>
                <SelectTrigger className="h-12 text-lg bg-white border-0">
                  <SelectValue placeholder="Select Amount" />
                </SelectTrigger>
                <SelectContent>
                  {maxAmountOptions.map((option) => (
                    <SelectItem key={option} value={option}>{option}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">What factors would most influence your decision to adopt a new platform?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adoptionFactors.map((factor) => (
                  <div key={factor} className="flex items-center space-x-2">
                    <Checkbox
                      id={factor}
                      checked={formData.adoptionFactors.includes(factor)}
                      onCheckedChange={(checked) => handleCheckboxChange('adoptionFactors', factor, checked as boolean)}
                    />
                    <Label htmlFor={factor} className="text-base cursor-pointer">{factor}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className="text-lg font-medium mb-4 block">What are the main barriers that would prevent you from adopting a new solution?</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {adoptionBarriers.map((barrier) => (
                  <div key={barrier} className="flex items-center space-x-2">
                    <Checkbox
                      id={barrier}
                      checked={formData.adoptionBarriers.includes(barrier)}
                      onCheckedChange={(checked) => handleCheckboxChange('adoptionBarriers', barrier, checked as boolean)}
                    />
                    <Label htmlFor={barrier} className="text-base cursor-pointer">{barrier}</Label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </section>

        {/* Section E: Final Feedback & Beta Access */}
        <section className="bg-[#f3f3f3] py-10">
          <CardContent className="p-8">
            <div className="mb-6 flex flex-col items-center justify-center">
              <div className="inline-flex items-center gap-3">
                <div className="w-[2px] h-[26px] bg-[#0B3A78]" />
                <span className="text-primary text-lg">Section E</span>
              </div>
              <h2 className="my-2 bg-[linear-gradient(90deg,rgba(39,174,96,1)_0%,rgba(0,82,204,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Suisse_Intl-Medium',Helvetica] font-medium text-transparent text-5xl text-center tracking-[0] leading-[normal]">Final Feedback & Beta Access</h2>
              <p className="text-[#808080] text-xl my-1">Understanding value and readiness to adopt.</p>
            </div>

            <div className="mb-6">
              <Label htmlFor="additionalCapabilities" className="text-lg font-medium mb-2 block">What additional capabilities or insights would you like to see?</Label>
              <Textarea
                id="additionalCapabilities"
                placeholder="Share Your Thoughts."
                value={formData.additionalCapabilities}
                onChange={(e) => handleInputChange('additionalCapabilities', e.target.value)}
                className="min-h-[100px] text-lg bg-white border-0"
              />
            </div>

            <div className="mb-6">
              <Label className="text-lg font-medium mb-4 block">Would you like to be contacted for an early demo or beta testing?</Label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {betaAccessOptions.map((option) => (
                  <div key={option} className="flex items-center space-x-2">
                    <input
                      type="radio"
                      id={option}
                      name="betaAccess"
                      value={option}
                      checked={formData.betaAccess === option}
                      onChange={(e) => handleInputChange('betaAccess', e.target.value)}
                      className="w-4 h-4"
                    />
                    <Label htmlFor={option} className="text-base cursor-pointer">{option}</Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="privacyAgreement"
                  checked={formData.privacyAgreement}
                  onCheckedChange={(checked) => handleInputChange('privacyAgreement', checked)}
                />
                <Label htmlFor="privacyAgreement" className="text-base cursor-pointer">
                  I agree that my responses may be used for research and product improvement purposes in accordance with TrustVerify's privacy policy.
                </Label>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button type="button" className="box-border flex flex-row justify-center items-center px-[30px] py-[12px] gap-[10px] w-[115px] h-[45px] bg-[#f3f3f3] border-[0.481172px] border-solid border-[#27AE60] rounded-[6px] flex-none order-0 flex-grow-0 text-[#27AE60]">
                Cancel
              </Button>
              <Button type="submit" className="flex flex-row items-center px-[30px] py-[12px] gap-[5px] w-[174px] h-[45px] bg-[#27AE60] shadow-[0px_0px_9.38285px_#27AE60] rounded-[6px] flex-none order-1 flex-grow-0">
                Submit Survey
              </Button>
            </div>
          </CardContent>
        </section>
      </form>

      {/* Footer */}
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
