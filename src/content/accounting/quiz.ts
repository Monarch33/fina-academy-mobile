// ──────────────────────────────────────────────
//  FINA - Comptabilité IFRS : Quiz Questions
// ──────────────────────────────────────────────

import type { QuizQuestion } from '../index';

export const accountingQuiz: QuizQuestion[] = [
  {
    id: 'acct-q1',
    lessonId: 'accounting-1',
    question: 'Quelle est la principale différence d\'approche entre IFRS et US GAAP ?',
    options: [
      'IFRS sont rules-based, US GAAP principles-based',
      'IFRS sont principles-based, US GAAP rules-based',
      'Les deux sont identiques',
      'US GAAP ne sont plus utilisées',
    ],
    correctIndex: 1,
    explanation:
      'Les IFRS sont fondées sur des principes (principles-based) tandis que les US GAAP sont fondées sur des règles (rules-based), ce qui donne plus de latitude d\'interprétation sous IFRS.',
    difficulty: 'easy',
  },
  {
    id: 'acct-q2',
    lessonId: 'accounting-2',
    question: 'Sous IFRS, le cadre conceptuel privilégie :',
    options: [
      'La forme juridique des transactions',
      'La substance économique sur la forme juridique',
      'Le traitement fiscal',
      'La comptabilité de caisse',
    ],
    correctIndex: 1,
    explanation:
      'Le cadre conceptuel IFRS impose de refléter la substance économique des transactions plutôt que leur forme juridique (substance over form).',
    difficulty: 'easy',
  },
  {
    id: 'acct-q3',
    lessonId: 'accounting-3',
    question: 'Sous IFRS 16 (Leases), un preneur comptabilise un contrat de location comme :',
    options: [
      'Uniquement une charge dans le compte de résultat',
      'Un actif droit d\'utilisation et un passif de location au bilan',
      'Un engagement hors bilan',
      'Un actif incorporel',
    ],
    correctIndex: 1,
    explanation:
      'IFRS 16 impose au preneur de comptabiliser quasi tous les contrats de location au bilan : un actif "droit d\'utilisation" et un passif "obligation de paiement".',
    difficulty: 'medium',
  },
  {
    id: 'acct-q4',
    lessonId: 'accounting-4',
    question: 'Selon IFRS 15, le revenu est reconnu quand :',
    options: [
      'Le client paie la facture',
      'Le contrat est signé',
      'L\'obligation de performance est satisfaite (transfert de contrôle)',
      'La livraison physique est effectuée uniquement',
    ],
    correctIndex: 2,
    explanation:
      'IFRS 15 reconnaît le revenu quand l\'obligation de performance est satisfaite, c\'est-à-dire quand le contrôle du bien ou service est transféré au client.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q5',
    lessonId: 'accounting-5',
    question: 'Le goodwill en IFRS est :',
    options: [
      'Amorti sur 10 ans',
      'Amorti sur 20 ans',
      'Non amorti mais testé pour dépréciation annuellement',
      'Immédiatement passé en charges',
    ],
    correctIndex: 2,
    explanation:
      'Sous IFRS (IAS 36), le goodwill n\'est pas amorti mais fait l\'objet d\'un test de dépréciation (impairment test) au moins une fois par an.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q6',
    lessonId: 'accounting-6',
    question: 'Lors d\'une consolidation par intégration globale, on inclut :',
    options: [
      '50% des actifs et passifs de la filiale',
      '100% des actifs et passifs + intérêts minoritaires',
      'Uniquement la quote-part du résultat',
      'Uniquement les dividendes reçus',
    ],
    correctIndex: 1,
    explanation:
      'L\'intégration globale reprend 100% des actifs, passifs, produits et charges de la filiale, avec une ligne "intérêts minoritaires" pour la part non détenue.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q7',
    lessonId: 'accounting-7',
    question: 'La mise en équivalence est utilisée pour comptabiliser :',
    options: [
      'Les filiales contrôlées à 100%',
      'Les entreprises associées (influence notable, ~20-50%)',
      'Les placements financiers court terme',
      'Les fournisseurs',
    ],
    correctIndex: 1,
    explanation:
      'La mise en équivalence s\'applique aux entreprises associées sur lesquelles l\'investisseur exerce une influence notable (généralement 20-50% des droits de vote).',
    difficulty: 'easy',
  },
  {
    id: 'acct-q8',
    lessonId: 'accounting-8',
    question: 'IFRS 9 classe les actifs financiers selon :',
    options: [
      'Leur date d\'acquisition',
      'Leur pays d\'émission',
      'Le modèle économique et les caractéristiques des flux contractuels',
      'Leur taille en termes de montant',
    ],
    correctIndex: 2,
    explanation:
      'IFRS 9 classe les actifs financiers selon le business model (détention, vente, les deux) et le test SPPI (Solely Payments of Principal and Interest) des flux contractuels.',
    difficulty: 'hard',
  },
  {
    id: 'acct-q9',
    lessonId: 'accounting-9',
    question: 'Le modèle de dépréciation IFRS 9 est basé sur :',
    options: [
      'Les pertes avérées (incurred losses)',
      'Les pertes de crédit attendues (expected credit losses)',
      'La valeur de marché uniquement',
      'Le jugement du commissaire aux comptes',
    ],
    correctIndex: 1,
    explanation:
      'IFRS 9 utilise un modèle forward-looking de pertes de crédit attendues (ECL), remplaçant le modèle IAS 39 basé sur les pertes avérées.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q10',
    lessonId: 'accounting-10',
    question: 'Un actif incorporel développé en interne peut être comptabilisé au bilan sous IFRS quand :',
    options: [
      'Jamais, les frais de R&D sont toujours en charges',
      'Toujours, dès le début du projet',
      'Uniquement en phase de développement, si 6 critères IAS 38 sont remplis',
      'Uniquement si le brevet est déjà déposé',
    ],
    correctIndex: 2,
    explanation:
      'IAS 38 permet l\'activation des frais de développement (pas de recherche) si 6 critères sont satisfaits : faisabilité technique, intention de compléter, capacité d\'utiliser/vendre, avantages économiques futurs, ressources, mesure fiable des coûts.',
    difficulty: 'hard',
  },
  {
    id: 'acct-q11',
    lessonId: 'accounting-11',
    question: 'La juste valeur (fair value) sous IFRS 13 est définie comme :',
    options: [
      'Le coût historique d\'acquisition',
      'Le prix de sortie dans une transaction ordonnée entre participants de marché',
      'Le prix le plus bas observé',
      'La moyenne des prix sur 12 mois',
    ],
    correctIndex: 1,
    explanation:
      'IFRS 13 définit la juste valeur comme le prix qui serait reçu pour vendre un actif (exit price) dans une transaction ordonnée entre participants de marché à la date d\'évaluation.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q12',
    lessonId: 'accounting-12',
    question: 'Les impôts différés naissent de :',
    options: [
      'Erreurs dans la déclaration fiscale',
      'Différences temporaires entre la base comptable et la base fiscale',
      'La fraude fiscale',
      'Les crédits d\'impôt uniquement',
    ],
    correctIndex: 1,
    explanation:
      'Les impôts différés (IAS 12) résultent des différences temporaires entre la valeur comptable d\'un actif/passif et sa base fiscale, qui se résorberont dans le futur.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q13',
    lessonId: 'accounting-13',
    question: 'Sous IAS 37, une provision est comptabilisée quand :',
    options: [
      'L\'entreprise le souhaite',
      'Il existe une obligation actuelle, une sortie probable de ressources, et une estimation fiable',
      'Le commissaire aux comptes le demande',
      'La perte est certaine à 100%',
    ],
    correctIndex: 1,
    explanation:
      'IAS 37 impose 3 conditions pour comptabiliser une provision : obligation actuelle (juridique ou implicite), sortie probable de ressources, estimation fiable du montant.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q14',
    lessonId: 'accounting-14',
    question: 'Quel red flag comptable peut signaler une manipulation des revenus ?',
    options: [
      'Un ratio créances/CA en hausse constante (DSO croissant)',
      'Une trésorerie élevée',
      'Des dividendes en hausse',
      'Un ratio d\'endettement stable',
    ],
    correctIndex: 0,
    explanation:
      'Un DSO (Days Sales Outstanding) en hausse constante suggère que l\'entreprise reconnaît des revenus mais ne collecte pas le cash, potentiel signe de revenus fictifs ou agressifs.',
    difficulty: 'hard',
  },
  {
    id: 'acct-q15',
    lessonId: 'accounting-15',
    question: 'L\'écart entre le résultat net et le cash-flow opérationnel est appelé :',
    options: [
      'Le free cash-flow',
      'L\'écart d\'accruals (quality of earnings)',
      'Le résultat exceptionnel',
      'La marge brute',
    ],
    correctIndex: 1,
    explanation:
      'L\'écart d\'accruals mesure la différence entre les bénéfices comptables et les flux de trésorerie réels. Un écart important peut signaler une mauvaise qualité des résultats.',
    difficulty: 'hard',
  },
  {
    id: 'acct-q16',
    lessonId: 'accounting-16',
    question: 'Sous IAS 21, les éléments monétaires en devise étrangère sont convertis au :',
    options: [
      'Taux historique d\'acquisition',
      'Taux de clôture à la date du bilan',
      'Taux moyen de l\'année',
      'Taux du 1er janvier',
    ],
    correctIndex: 1,
    explanation:
      'IAS 21 impose de convertir les éléments monétaires (créances, dettes, trésorerie) au taux de clôture, avec les écarts de change en résultat.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q17',
    lessonId: 'accounting-17',
    question: 'IFRS 17 (contrats d\'assurance) introduit le concept de :',
    options: [
      'Cost model',
      'Contractual Service Margin (CSM)',
      'Impairment test',
      'Cash-generating unit',
    ],
    correctIndex: 1,
    explanation:
      'IFRS 17 introduit la CSM (Contractual Service Margin) qui représente le profit non acquis d\'un groupe de contrats d\'assurance, reconnu progressivement sur la période de couverture.',
    difficulty: 'hard',
  },
  {
    id: 'acct-q18',
    lessonId: 'accounting-18',
    question: 'Le test de dépréciation (IAS 36) compare :',
    options: [
      'Le coût historique et le prix de vente',
      'La valeur comptable et la valeur recouvrable',
      'Le résultat et le chiffre d\'affaires',
      'Le bilan N et le bilan N-1',
    ],
    correctIndex: 1,
    explanation:
      'Le test de dépréciation compare la valeur comptable d\'un actif à sa valeur recouvrable (le maximum entre la juste valeur nette et la valeur d\'utilité). Si la valeur comptable excède la valeur recouvrable, une dépréciation est comptabilisée.',
    difficulty: 'medium',
  },
  {
    id: 'acct-q19',
    lessonId: 'accounting-19',
    question: 'Le tableau des flux de trésorerie (IAS 7) classe les flux en :',
    options: [
      'Revenus et charges',
      'Actifs et passifs',
      'Opérationnel, investissement et financement',
      'Court terme et long terme',
    ],
    correctIndex: 2,
    explanation:
      'IAS 7 structure le tableau de flux de trésorerie en trois catégories : activités opérationnelles, d\'investissement et de financement.',
    difficulty: 'easy',
  },
  {
    id: 'acct-q20',
    lessonId: 'accounting-20',
    question: 'L\'Altman Z-Score est utilisé pour :',
    options: [
      'Évaluer la performance boursière',
      'Prédire la probabilité de faillite d\'une entreprise',
      'Calculer le coût du capital',
      'Mesurer la liquidité du marché',
    ],
    correctIndex: 1,
    explanation:
      'L\'Altman Z-Score combine 5 ratios financiers pour prédire la probabilité de faillite. Z < 1.8 = zone de détresse, Z > 3.0 = zone saine.',
    difficulty: 'medium',
  },
];
