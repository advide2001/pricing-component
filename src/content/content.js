const plans = [
  {
    id: 1,
    name: "Basic",
    price: 19.99,
    annualPrice: 199.99,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
    isRecommended: false,
  },
  {
    id: 2,
    name: "Professional",
    price: 24.99,
    annualPrice: 249.99,
    features: ["2 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
    isRecommended: true,
  },
  {
    id: 3,
    name: "Master",
    price: 39.99,
    annualPrice: 399.99,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
    isRecommended: false,
  },
];

export default plans;
