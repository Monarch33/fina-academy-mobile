// Stripe service - subscription management
// Requires @stripe/stripe-react-native and backend API
// This is a placeholder implementation

export type SubscriptionPlan = 'free' | 'pro' | 'ultimate';

export interface PlanDetails {
  id: SubscriptionPlan;
  name: string;
  price: string;
  priceMonthly: number;
  features: string[];
}

export const PLANS: PlanDetails[] = [
  {
    id: 'free',
    name: 'Gratuit',
    price: '0€',
    priceMonthly: 0,
    features: [
      '3 premiers cours',
      'Arena QCM uniquement',
      'Leaderboard basique',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '9.99€/mois',
    priceMonthly: 9.99,
    features: [
      'Tous les 18 cours',
      'Tous les modes Arena',
      'Statistiques avancées',
      'Pas de limites',
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate',
    price: '19.99€/mois',
    priceMonthly: 19.99,
    features: [
      'Tout Pro inclus',
      'Mode hors ligne',
      'Sans publicité',
      'Support prioritaire',
      'Badges exclusifs',
    ],
  },
];

export function canAccessCourse(
  courseIndex: number,
  plan: SubscriptionPlan
): boolean {
  if (plan === 'pro' || plan === 'ultimate') return true;
  return courseIndex < 3;
}

export function canAccessArenaMode(
  mode: string,
  plan: SubscriptionPlan
): boolean {
  if (plan === 'pro' || plan === 'ultimate') return true;
  return mode === 'mcq';
}
