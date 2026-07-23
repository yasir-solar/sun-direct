export const solarIncentivesData = {
  lastReviewed: "July 22, 2026",
  residentialCeip: {
    status: "Intake currently closed",
    statusDetail: "Sign up for official updates before relying on a future intake date.",
    source: "https://www.calgary.ca/environment/programs/clean-energy-improvement-program.html",
  },
  commercialCeip: {
    status: "Intake currently closed",
    statusDetail: "Review official pre-qualification information and program updates before planning an application.",
    source: "https://www.calgary.ca/environment/programs/clean-energy-improvement-programs-commercial.html",
  },
  sources: {
    residentialCeip: "https://www.calgary.ca/environment/programs/clean-energy-improvement-program.html",
    commercialCeip: "https://www.calgary.ca/environment/programs/clean-energy-improvement-programs-commercial.html",
    microGeneration: "https://ucahelps.alberta.ca/residential/renewable-energy/micro-generation/",
    auc: "https://www.auc.ab.ca/auc-role-micro-generation/",
    cleanTechnologyItc: "https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/corporations/business-tax-credits/clean-economy-itc/clean-technology-itc.html",
    ceip: "https://ceip.abmunis.ca/",
  },
} as const;

export const solarIncentivesFaqs = [
  { question: "Is there currently an Alberta residential solar rebate?", answer: "Alberta does not currently offer a universal provincial residential solar rebate. Municipal programs, financing and other opportunities can depend on the applicant, property, municipality and current intake." },
  { question: "Is Calgary CEIP a rebate or a loan?", answer: "CEIP is property-based financing, not a rebate. Approved financing is repaid through the property tax bill under the program agreement." },
  { question: "Can I begin installation before CEIP approval?", answer: "No. Calgary states that the application must be approved and the Clean Energy Improvement Agreement entered before work begins for CEIP financing." },
  { question: "Will solar remove every charge from my electricity bill?", answer: "No. Electricity used on-site can reduce grid consumption, but distribution, transmission, local access and other charges can remain." },
  { question: "How are exported solar credits calculated?", answer: "For micro-generation, excess electricity supplied to the grid is credited by the retailer. Retailer rates, terms and billing arrangements should be confirmed directly with that retailer." },
  { question: "Can farms qualify for solar incentives?", answer: "Farm eligibility depends on the property, business structure, utility arrangement, land classification and current program rules. Farms should not assume a grant or financing program applies automatically." },
  { question: "Can a business claim the Clean Technology ITC?", answer: "Qualifying new clean-technology property may be eligible for a refundable federal credit, subject to detailed ownership, tax-status, acquisition and use requirements. A Canadian tax professional should confirm eligibility." },
  { question: "Can I combine financing with a tax incentive?", answer: "It may be possible in some situations, but financing terms and tax eligibility are separate decisions. Confirm lender, program and tax treatment before relying on any combination." },
  { question: "What happens to CEIP financing if the property is sold?", answer: "CEIP financing is attached to the property. The owner may be able to repay the balance or disclose and transfer it to a new owner, subject to the program agreement." },
  { question: "How often should incentive information be reviewed?", answer: "Review it before design, before signing a contract and again before an application. Intake, eligibility, retailer terms and tax rules can change." },
] as const;
