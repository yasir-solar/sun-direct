export const site = {
  name: "Sun Direct Renewable",
  shortName: "Sun Direct",
  url: "https://sundirect.ca",
  title: "Solar Installation Calgary | Sun Direct Renewable",
  description: "Custom solar solutions for Calgary homes, businesses and farms. Sun Direct Renewable manages proposals, savings analysis, approvals, permits, installation and system activation.",
  location: "Calgary, Alberta",
  phone: null,
  email: null,
  hours: null,
  address: null,
  social: [],
  serviceAreas: ["Calgary", "Surrounding Alberta communities"],
} as const;

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/our-process" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const serviceLinks = [
  { label: "Residential Solar", shortLabel: "Residential", href: "/residential-solar", description: "Custom rooftop systems planned around your home and electricity use.", icon: "home" },
  { label: "Commercial Solar", shortLabel: "Commercial", href: "/commercial-solar", description: "Practical solar planning for organizations, facilities and operating loads.", icon: "building" },
  { label: "Agricultural Solar", shortLabel: "Farms & Agriculture", href: "/agricultural-solar", description: "Rooftop and ground-mount options for farms and rural properties.", icon: "leaf" },
] as const;

export const resourceLinks = [
  { label: "How Solar Works", href: "/how-solar-works" },
  { label: "Savings Analysis", href: "/our-process#savings-report" },
  { label: "Incentives & Financing", href: "/solar-incentives-financing" },
  { label: "Frequently Asked Questions", href: "/faq" },
  { label: "Solar Learning Centre", href: "/blog" },
  { label: "Service Areas", href: "/service-areas" },
] as const;

export const trustPoints = [
  "Usage-led proposals",
  "Rooftop & ground mount",
  "Homes, businesses & farms",
  "Approval-to-activation guidance",
] as const;
