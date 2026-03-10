// ──────────────────────────────────────────────
//  FINA - Produits Dérivés : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '../index';

export const derivativesQuiz: QuizQuestion[] = [
  {
    id: 'deriv-q1',
    lessonId: 'derivatives-1',
    question: 'Quel est le notionnel approximatif des dérivés OTC dans le monde ?',
    options: [
      '60 000 milliards USD',
      '600 000 milliards USD',
      '6 000 milliards USD',
      '6 millions de milliards USD',
    ],
    correctIndex: 1,
    explanation:
      'Le notionnel mondial des dérivés OTC est d\'environ 600 000 milliards USD, ce qui en fait le plus grand marché financier au monde.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q2',
    lessonId: 'derivatives-2',
    question: 'Quelle est la formule du prix théorique d\'un forward sur un actif sans dividende ?',
    options: [
      'F = S × (1 + r × T)',
      'F = S × e^(r×T)',
      'F = S / e^(r×T)',
      'F = S + r × T',
    ],
    correctIndex: 1,
    explanation:
      'Le prix forward est F = S × e^(r×T), reflétant le coût de financement de la détention de l\'actif jusqu\'à la maturité.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q3',
    lessonId: 'derivatives-2',
    question: 'Que signifie "contango" sur le marché des futures ?',
    options: [
      'Le prix future est inférieur au prix spot',
      'Le prix future est égal au prix spot',
      'Le prix future est supérieur au prix spot',
      'Le future expire sans valeur',
    ],
    correctIndex: 2,
    explanation:
      'En contango, le prix du future est supérieur au prix spot, reflétant les coûts de portage (financement, stockage).',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q4',
    lessonId: 'derivatives-3',
    question: 'Quel est le payoff d\'un call européen à maturité ?',
    options: [
      'max(K − S, 0)',
      'max(S − K, 0)',
      'S − K',
      'K − S',
    ],
    correctIndex: 1,
    explanation:
      'Le payoff d\'un call à maturité est max(S − K, 0) : la différence entre le prix spot et le strike, si positive.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q5',
    lessonId: 'derivatives-3',
    question: 'Un call est "In The Money" (ITM) quand :',
    options: [
      'S < K',
      'S = K',
      'S > K',
      'Le call a expiré',
    ],
    correctIndex: 2,
    explanation:
      'Un call est ITM quand le prix du sous-jacent (S) est supérieur au strike (K), ce qui donne une valeur intrinsèque positive.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q6',
    lessonId: 'derivatives-4',
    question: 'La parité call-put pour options européennes s\'écrit :',
    options: [
      'C + P = S + K',
      'C − P = S − K × e^(−rT)',
      'C × P = S × K',
      'C / P = S / K',
    ],
    correctIndex: 1,
    explanation:
      'La parité call-put stipule que C − P = S − K × e^(−rT) pour des options européennes au même strike et même maturité.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q7',
    lessonId: 'derivatives-5',
    question: 'Le Delta d\'un call ATM est approximativement :',
    options: ['0', '0.25', '0.50', '1.00'],
    correctIndex: 2,
    explanation:
      'Le Delta d\'un call ATM est environ 0.50 : pour chaque mouvement de 1€ du sous-jacent, le call bouge d\'environ 0.50€.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q8',
    lessonId: 'derivatives-5',
    question: 'Le Gamma mesure :',
    options: [
      'La sensibilité du prix de l\'option au temps',
      'La sensibilité du Delta au prix du sous-jacent',
      'La sensibilité à la volatilité',
      'La sensibilité aux taux d\'intérêt',
    ],
    correctIndex: 1,
    explanation:
      'Le Gamma (Γ = ∂²C/∂S²) mesure le taux de variation du Delta par rapport au prix du sous-jacent. Il est maximum pour les options ATM.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q9',
    lessonId: 'derivatives-6',
    question: 'Le Theta est généralement négatif pour :',
    options: [
      'Le vendeur d\'options',
      'L\'acheteur d\'options',
      'Les deux',
      'Aucun des deux',
    ],
    correctIndex: 1,
    explanation:
      'Le Theta est négatif pour l\'acheteur d\'options : la valeur de l\'option diminue avec le temps (time decay). Le vendeur bénéficie de ce Theta positif.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q10',
    lessonId: 'derivatives-7',
    question: 'Laquelle de ces hypothèses N\'EST PAS une hypothèse du modèle Black-Scholes ?',
    options: [
      'Volatilité constante',
      'Pas de coûts de transaction',
      'Volatilité stochastique',
      'Taux sans risque constant',
    ],
    correctIndex: 2,
    explanation:
      'Black-Scholes suppose une volatilité CONSTANTE, pas stochastique. C\'est l\'une des limites principales du modèle.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q11',
    lessonId: 'derivatives-7',
    question: 'Dans la formule Black-Scholes, N(d₂) représente approximativement :',
    options: [
      'Le Delta de l\'option',
      'La probabilité risque-neutre que l\'option finisse ITM',
      'Le prix du sous-jacent normalisé',
      'La volatilité implicite',
    ],
    correctIndex: 1,
    explanation:
      'N(d₂) est la probabilité risque-neutre que l\'option call finisse In The Money (S > K à maturité).',
    difficulty: 'hard',
  },
  {
    id: 'deriv-q12',
    lessonId: 'derivatives-8',
    question: 'Le "smile de volatilité" montre que :',
    options: [
      'La volatilité implicite est constante quel que soit le strike',
      'La volatilité implicite est plus élevée pour les options OTM que ATM',
      'La volatilité réalisée est toujours supérieure à la volatilité implicite',
      'Les options ATM sont toujours les plus chères',
    ],
    correctIndex: 1,
    explanation:
      'Le smile montre que la vol implicite est plus élevée pour les strikes OTM (puts et calls) que pour les ATM, contredisant l\'hypothèse BS de vol constante.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q13',
    lessonId: 'derivatives-9',
    question: 'Un bull call spread consiste à :',
    options: [
      'Acheter un call et un put au même strike',
      'Acheter un call K1 et vendre un call K2 (K2 > K1)',
      'Vendre un call K1 et acheter un call K2 (K2 > K1)',
      'Acheter deux calls au même strike',
    ],
    correctIndex: 1,
    explanation:
      'Un bull call spread = achat d\'un call à strike bas K1 + vente d\'un call à strike haut K2. Vue haussière modérée avec coût et gain limités.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q14',
    lessonId: 'derivatives-10',
    question: 'Un long straddle est profitable quand :',
    options: [
      'Le sous-jacent reste stable',
      'Le sous-jacent bouge fortement dans n\'importe quelle direction',
      'Le sous-jacent monte uniquement',
      'La volatilité implicite baisse',
    ],
    correctIndex: 1,
    explanation:
      'Un long straddle (long call ATM + long put ATM) profite d\'un fort mouvement du sous-jacent, quelle que soit la direction.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q15',
    lessonId: 'derivatives-11',
    question: 'Dans un swap de taux vanilla, le payeur fixe profite quand :',
    options: [
      'Les taux baissent',
      'Les taux restent stables',
      'Les taux montent',
      'Le spread de crédit augmente',
    ],
    correctIndex: 2,
    explanation:
      'Le payeur fixe reçoit le taux variable : si les taux montent, il reçoit plus qu\'il ne paie, et réalise un gain.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q16',
    lessonId: 'derivatives-12',
    question: 'Dans un CDS, l\'acheteur de protection :',
    options: [
      'Reçoit le spread CDS et paie en cas de défaut',
      'Paie le spread CDS et reçoit un paiement en cas de défaut',
      'Achète l\'obligation sous-jacente',
      'Vend l\'obligation sous-jacente',
    ],
    correctIndex: 1,
    explanation:
      'L\'acheteur de protection CDS paie une prime périodique (le spread) et est compensé si l\'entité de référence fait défaut.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q17',
    lessonId: 'derivatives-14',
    question: 'Une option "knock-out" :',
    options: [
      'S\'active quand la barrière est touchée',
      'S\'annule quand la barrière est touchée',
      'A un payoff double',
      'Ne peut jamais expirer sans valeur',
    ],
    correctIndex: 1,
    explanation:
      'Une option knock-out est annulée (cesse d\'exister) si le sous-jacent touche la barrière pendant la vie de l\'option.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q18',
    lessonId: 'derivatives-15',
    question: 'Le payoff d\'une option asiatique est basé sur :',
    options: [
      'Le prix spot à maturité',
      'Le prix maximum observé',
      'Le prix moyen du sous-jacent',
      'Le prix minimum observé',
    ],
    correctIndex: 2,
    explanation:
      'L\'option asiatique a un payoff basé sur la moyenne des prix observés pendant la vie de l\'option, ce qui la rend moins chère qu\'une vanille.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q19',
    lessonId: 'derivatives-16',
    question: 'Un autocall rembourse anticipativement quand :',
    options: [
      'Le sous-jacent est sous la barrière de protection',
      'Le sous-jacent est au-dessus du niveau initial à une date d\'observation',
      'Les taux d\'intérêt baissent',
      'L\'investisseur demande le remboursement',
    ],
    correctIndex: 1,
    explanation:
      'Un autocall rembourse le capital + coupon si le sous-jacent est au-dessus du niveau initial (ou d\'un seuil) aux dates d\'observation prédéfinies.',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q20',
    lessonId: 'derivatives-17',
    question: 'L\'avantage principal de l\'arbre binomial par rapport à Black-Scholes est :',
    options: [
      'Il est plus rapide à calculer',
      'Il permet de pricer les options américaines',
      'Il ne nécessite pas de volatilité',
      'Il donne un prix exact sans approximation',
    ],
    correctIndex: 1,
    explanation:
      'L\'arbre binomial permet de vérifier à chaque nœud s\'il est optimal d\'exercer, ce qui permet de pricer les options américaines (exercice anticipé possible).',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q21',
    lessonId: 'derivatives-18',
    question: 'La convergence de la simulation Monte Carlo est en :',
    options: ['1/N', '1/√N', '1/N²', 'log(N)'],
    correctIndex: 1,
    explanation:
      'L\'erreur Monte Carlo converge en 1/√N : pour diviser l\'erreur par 2, il faut 4 fois plus de simulations.',
    difficulty: 'hard',
  },
  {
    id: 'deriv-q22',
    lessonId: 'derivatives-20',
    question: 'La "convenience yield" représente :',
    options: [
      'Le taux d\'intérêt sur un compte d\'épargne',
      'Le bénéfice implicite de détenir la matière première physique',
      'Le coût de stockage',
      'La marge de la bourse',
    ],
    correctIndex: 1,
    explanation:
      'La convenience yield est l\'avantage non monétaire de détenir le sous-jacent physique (pouvoir l\'utiliser pour la production, se prémunir contre les ruptures d\'approvisionnement).',
    difficulty: 'medium',
  },
  {
    id: 'deriv-q23',
    lessonId: 'derivatives-22',
    question: 'Le payoff d\'un variance swap dépend de :',
    options: [
      'La direction du mouvement du sous-jacent',
      'La différence entre variance réalisée et variance strike',
      'Le niveau du taux sans risque',
      'Le dividende du sous-jacent',
    ],
    correctIndex: 1,
    explanation:
      'Le variance swap paie la différence entre la variance réalisée et le strike de variance, indépendamment de la direction du marché.',
    difficulty: 'hard',
  },
  {
    id: 'deriv-q24',
    lessonId: 'derivatives-24',
    question: 'Quel événement a déclenché la régulation massive des dérivés OTC ?',
    options: [
      'La bulle internet de 2000',
      'La crise financière de 2008',
      'Le Brexit de 2016',
      'La crise COVID de 2020',
    ],
    correctIndex: 1,
    explanation:
      'La crise de 2008 (effondrement de Lehman, sauvetage d\'AIG avec ses 350 milliards de CDS) a révélé les risques systémiques des dérivés OTC et déclenché les réformes Dodd-Frank et EMIR.',
    difficulty: 'easy',
  },
  {
    id: 'deriv-q25',
    lessonId: 'derivatives-25',
    question: 'Le modèle de Heston suppose que :',
    options: [
      'La volatilité est constante',
      'La variance suit un processus stochastique mean-reverting',
      'Il n\'y a pas de corrélation entre le prix et la volatilité',
      'Le sous-jacent suit un mouvement brownien géométrique simple',
    ],
    correctIndex: 1,
    explanation:
      'Dans le modèle de Heston, la variance suit un processus CIR (mean-reverting) avec une corrélation ρ avec le processus du sous-jacent, ce qui génère le skew.',
    difficulty: 'hard',
  },
];
