
export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface IntakeData {
  goal: 'Growth' | 'Preservation' | 'Compliance' | '';
  revenue: string;
  name: string;
  email: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}

export interface SuccessStory {
  client: string;
  challenge: string;
  solution: string;
  metric: string;
  metricLabel: string;
}
