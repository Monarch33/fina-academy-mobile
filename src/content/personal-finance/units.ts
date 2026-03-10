// ──────────────────────────────────────────────
//  FINA - Finances Personnelles : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const personalFinanceLessons: Lesson[] = [
  // ─── Leçon 1 : Budget ─────────────────────
  {
    id: 'pf-1',
    title: 'Établir son Budget',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le budget est la pierre angulaire des finances personnelles. Il permet de comprendre ses flux d\'argent et d\'identifier les leviers d\'épargne.',
      keyPoints: [
        'Règle 50/30/20 : besoins (50%), envies (30%), épargne (20%)',
        'Revenus nets − Charges fixes − Charges variables = Capacité d\'épargne',
        'Taux d\'épargne français moyen : ~15% du revenu disponible',
        'Automatiser l\'épargne : virement automatique le jour du salaire',
      ],
      explanation:
        'La règle 50/30/20 (popularisée par Elizabeth Warren) offre un cadre simple : 50% du revenu net pour les besoins essentiels (loyer, alimentation, transport, assurances), 30% pour les envies (loisirs, restaurants, shopping) et 20% pour l\'épargne et le remboursement de dettes. L\'astuce est de payer l\'épargne en premier (« pay yourself first ») via un virement automatique. Le suivi mensuel des dépenses (apps : Bankin\', Linxo) permet d\'identifier les postes de dépenses excessifs.',
      formula: 'Capacité d\'épargne = Revenus nets − Charges fixes − Charges variables\nTaux d\'épargne = Épargne / Revenus nets × 100',
      example:
        'Salaire net 2 800€. Besoins : loyer 800€, alimentation 400€, transport 150€, assurances 100€ = 1 450€ (52%). Envies : 600€ (21%). Épargne : 750€ (27%). Objectif : maintenir ce taux au-dessus de 20%.',
      finnSays:
        'Le budget, c\'est la carte routière de tes finances. Sans carte, tu roules à l\'aveugle. Avec, tu sais exactement où va chaque euro !',
    },
  },

  // ─── Leçon 2 : Fonds d'urgence ────────────
  {
    id: 'pf-2',
    title: 'Fonds d\'Urgence',
    xp: 200,
    duration: '20 min',
    content: {
      introduction:
        'Le fonds d\'urgence est une épargne de précaution liquide, disponible immédiatement pour faire face aux imprévus (perte d\'emploi, réparation, urgence médicale).',
      keyPoints: [
        'Objectif : 3 à 6 mois de dépenses courantes',
        'Placement : Livret A (3% en 2024, plafond 22 950€) ou LDDS',
        'Priorité n°1 avant tout investissement',
        'Ne jamais toucher sauf vraie urgence',
      ],
      explanation:
        'Le fonds d\'urgence protège contre les aléas de la vie sans avoir à vendre des investissements (potentiellement en moins-value) ou à emprunter (crédit conso à 6-15%). La règle de base est de conserver 3 mois de charges fixes pour un salarié (CDI stable) et 6 mois pour un indépendant ou un CDD. Le Livret A est le véhicule idéal : liquidité immédiate, capital garanti, exonération d\'impôt. Une fois le fonds constitué, chaque euro supplémentaire peut être investi à plus long terme.',
      example:
        'Charges mensuelles : 2 000€. Fonds d\'urgence cible = 6 × 2 000 = 12 000€ sur Livret A. Stratégie : épargner 500€/mois pendant 24 mois, puis rediriger les 500€ vers un PEA ou une assurance-vie.',
      finnSays:
        'Le fonds d\'urgence, c\'est ton airbag financier. Il n\'est pas sexy, il ne rapporte pas beaucoup, mais le jour où tu en as besoin, il te sauve la mise !',
    },
  },

  // ─── Leçon 3 : PEA et Assurance-Vie ───────
  {
    id: 'pf-3',
    title: 'PEA et Assurance-Vie : les enveloppes',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le PEA (Plan d\'Épargne en Actions) et l\'assurance-vie sont les deux enveloppes fiscales privilégiées en France. Comprendre leurs avantages et limites est essentiel.',
      keyPoints: [
        'PEA : exonération d\'IR après 5 ans, plafond 150 000€ de versements',
        'Assurance-vie : abattement de 4 600€/9 200€ après 8 ans, avantages succession',
        'PEA : uniquement actions européennes et ETF éligibles',
        'Assurance-vie : fonds euros + unités de compte (diversification totale)',
      ],
      explanation:
        'Le PEA est optimal pour investir en actions européennes : après 5 ans, les plus-values sont exonérées d\'impôt sur le revenu (seuls les prélèvements sociaux de 17.2% s\'appliquent). Le plafond est de 150 000€ de versements (les gains sont illimités). L\'assurance-vie est plus polyvalente : fonds euros (capital garanti), UC (OPCVM, ETF, SCPI, PE). Après 8 ans, un abattement annuel de 4 600€ (célibataire) ou 9 200€ (couple) s\'applique aux gains retirés. Elle offre aussi des avantages successoraux (152 500€/bénéficiaire exonérés pour les versements avant 70 ans).',
      example:
        'Stratégie optimale : 1) Ouvrir PEA + assurance-vie dès que possible (pour prendre date). 2) Remplir le PEA en priorité pour les actions (avantage fiscal maximal). 3) Utiliser l\'assurance-vie pour diversifier (fonds euros, SCPI, obligations).',
      finnSays:
        'PEA et assurance-vie, ce sont les deux meilleures boîtes à outils fiscales en France. La règle d\'or : les ouvrir le plus tôt possible pour prendre date !',
    },
  },

  // ─── Leçon 4 : Assurance-Vie en détail ────
  {
    id: 'pf-4',
    title: 'Assurance-Vie : Stratégies',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'assurance-vie est le placement préféré des Français (~1 900 Md€ d\'encours). Fonds euros, unités de compte, gestion pilotée : maîtrisez toutes les stratégies.',
      keyPoints: [
        'Fonds euros : capital garanti, rendement ~2.5-3.5% (2024), idéal pour la sécurité',
        'Unités de compte (UC) : actions, obligations, SCPI, PE, rendement variable',
        'Frais : entrée (0-3%), gestion annuelle (0.5-1%), arbitrage',
        'Contrats en ligne : frais réduits, plus de choix d\'UC',
      ],
      explanation:
        'Le fonds euros offre une garantie en capital et un rendement annuel (effet cliquet : les gains acquis sont définitifs). Les UC n\'ont pas de garantie mais offrent un potentiel de rendement supérieur. La gestion pilotée (ou profilée) délègue l\'allocation à un gérant selon un profil de risque (prudent, équilibré, dynamique). Les frais sont le premier ennemi de la performance : préférer les contrats en ligne (Linxea, Boursorama) aux contrats bancaires traditionnels. L\'arbitrage (transfert entre supports) est fiscalement neutre dans l\'enveloppe.',
      example:
        'Contrat en ligne : 0% frais d\'entrée, 0.5% de frais de gestion, 500 UC disponibles dont des ETF à 0.2% et des SCPI. Vs contrat bancaire : 3% frais d\'entrée, 1% frais de gestion, 30 UC. Sur 20 ans, la différence de frais coûte ~25% de performance.',
      finnSays:
        'L\'assurance-vie, c\'est un couteau suisse : épargne, investissement, transmission. Mais attention aux frais : compare les contrats avant de signer !',
    },
  },

  // ─── Leçon 5 : PER et Retraite ────────────
  {
    id: 'pf-5',
    title: 'PER et Préparation de la Retraite',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le PER (Plan d\'Épargne Retraite) permet de déduire les versements de son revenu imposable et de préparer un complément de retraite. Comprenez quand et comment l\'utiliser.',
      keyPoints: [
        'Déductibilité fiscale : versements déductibles du revenu imposable (plafond 10% des revenus)',
        'Sortie : capital ou rente à la retraite (imposable à la sortie)',
        'Avantage : différer l\'impôt de la vie active (TMI 30-45%) à la retraite (TMI plus basse)',
        'Déblocage anticipé : achat résidence principale, accidents de la vie',
      ],
      explanation:
        'Le PER est intéressant pour les contribuables à TMI élevée (30%, 41%, 45%) qui anticipent une TMI plus basse à la retraite. Un versement de 5 000€ à TMI 41% économise 2 050€ d\'impôt immédiatement. À la retraite, le capital est imposé à la TMI (potentiellement 30% ou moins). Le PER individuel (PERin) remplace les anciens PERP et Madelin. Les supports sont similaires à l\'assurance-vie (fonds euros + UC). Attention : l\'argent est bloqué jusqu\'à la retraite (sauf exceptions).',
      formula: 'Économie d\'impôt à l\'entrée = Versement × TMI\nImposition à la sortie (capital) = Capital × TMI retraite + PV × 30%',
      example:
        'Salarié TMI 41%, versement PER 10 000€/an pendant 20 ans. Économie d\'impôt : 4 100€/an. Capital à 60 ans : ~300 000€ (rendement 5%). Sortie en capital : imposition à TMI 30% = 90 000€. Gain fiscal net ≈ 82 000€ - 90 000€... Il faut simuler au cas par cas !',
      finnSays:
        'Le PER, c\'est le plan d\'attaque pour la retraite : tu paies moins d\'impôts aujourd\'hui pour profiter demain. Mais attention, chaque situation est unique !',
    },
  },

  // ─── Leçon 6 : Intérêts Composés ──────────
  {
    id: 'pf-6',
    title: 'La Puissance des Intérêts Composés',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les intérêts composés sont la force la plus puissante en finance personnelle. Einstein les aurait qualifiés de « huitième merveille du monde ». Le temps est votre meilleur allié.',
      keyPoints: [
        'Intérêts composés : les intérêts génèrent eux-mêmes des intérêts',
        'Règle de 72 : 72 / taux = nombre d\'années pour doubler son capital',
        'L\'effet boule de neige : exponentiel avec le temps',
        'Commencer tôt est plus important qu\'investir beaucoup',
      ],
      explanation:
        'Avec les intérêts simples, 10 000€ à 7% donnent 700€/an (toujours sur 10 000€). Avec les intérêts composés, les 700€ de la 1ère année génèrent eux-mêmes des intérêts : 749€ en an 2, 801€ en an 3, etc. Sur 30 ans, 10 000€ à 7% en intérêts simples = 31 000€, en intérêts composés = 76 123€ (presque 2.5x plus). La règle de 72 est un raccourci : à 7%, le capital double en 72/7 ≈ 10.3 ans. L\'implication clé : commencer à 25 ans plutôt qu\'à 35 ans peut doubler le patrimoine à la retraite.',
      formula: 'Capital final = C₀ × (1 + r)^n\nAvec versements réguliers : Cf = V × [(1+r)^n − 1] / r',
      example:
        'Alice investit 200€/mois de 25 à 65 ans (40 ans) à 7%. Capital final : 480 000€ (pour 96 000€ versés). Bob investit 400€/mois de 35 à 65 ans (30 ans). Capital final : 365 000€ (pour 144 000€ versés). Alice investit moins mais gagne plus grâce aux 10 ans supplémentaires.',
      finnSays:
        'Les intérêts composés, c\'est la magie du temps. Chaque euro investi aujourd\'hui peut devenir 10 euros dans 30 ans. Le plus tôt est toujours le mieux !',
    },
  },

  // ─── Leçon 7 : Investir en Bourse ─────────
  {
    id: 'pf-7',
    title: 'Investir en Bourse',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La bourse est le meilleur véhicule de création de richesse à long terme. Le CAC 40 a rendu ~8% par an dividendes réinvestis sur les 40 dernières années.',
      keyPoints: [
        'Rendement historique actions : 7-10% par an (dividendes réinvestis)',
        'Volatilité : -30 à -50% lors des krachs (2008, 2020)',
        'Horizon long terme obligatoire : 8-10 ans minimum',
        'DCA (Dollar Cost Averaging) : investir un montant fixe régulièrement',
      ],
      explanation:
        'Investir en bourse signifie devenir copropriétaire d\'entreprises. Sur le long terme, les actions surperforment toutes les autres classes d\'actifs (immobilier, obligations, or, livrets). Le risque principal est la volatilité à court terme : le marché peut perdre 30-50% en quelques mois. Le DCA (investissement régulier) lisse ce risque : en investissant la même somme chaque mois, on achète plus de parts quand les prix sont bas et moins quand ils sont hauts. L\'important est de ne jamais vendre en panique pendant un krach.',
      example:
        '10 000€ investis dans le MSCI World en 2000 (juste avant l\'éclatement de la bulle internet) valent ~45 000€ en 2024, malgré trois krachs (2001, 2008, 2020). Rendement annualisé : 6.4%.',
      finnSays:
        'La bourse récompense la patience. Le pire moment pour vendre, c\'est pendant un krach. Le meilleur moment pour investir, c\'est maintenant (si ton horizon est long) !',
    },
  },

  // ─── Leçon 8 : ETF ───────────────────────
  {
    id: 'pf-8',
    title: 'ETF : Investir simplement',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les ETF (Exchange-Traded Funds) ou trackers répliquent un indice (CAC 40, S&P 500, MSCI World) à moindre coût. Ils sont le véhicule idéal pour l\'investisseur particulier.',
      keyPoints: [
        'Frais ultra-bas : 0.05-0.30% vs 1.5-2.5% pour un fonds actif',
        'Diversification instantanée : un ETF MSCI World = 1 500 actions de 23 pays',
        '80-90% des fonds actifs sous-performent leur indice sur 10 ans',
        'PEA-compatible : ETF MSCI World en synthétique (Amundi, Lyxor)',
      ],
      explanation:
        'Les études montrent que 80-90% des gérants professionnels ne battent pas leur indice de référence sur 10 ans, après frais. L\'ETF offre la performance du marché moins des frais minimes. Un ETF MSCI World dans un PEA offre une diversification mondiale avec la fiscalité la plus avantageuse. La réplication peut être physique (l\'ETF détient les actions) ou synthétique (swap avec une contrepartie, permettant d\'investir hors Europe dans un PEA). Les ETF sont cotés en bourse et s\'achètent comme une action.',
      formula: 'Performance nette = Performance de l\'indice − Frais de gestion (TER)\nCoût sur 20 ans : 1% de frais en plus = ~18% de capital en moins',
      example:
        '100 000€ sur 20 ans à 7% brut. ETF à 0.2% de frais : 363 000€. Fonds actif à 1.8% de frais : 280 000€. Différence : 83 000€. Les frais « mangent » 23% du capital final !',
      finnSays:
        'L\'ETF, c\'est l\'arme secrète de l\'investisseur malin : la performance du marché pour le prix d\'un café. Warren Buffett lui-même recommande le S&P 500 !',
    },
  },

  // ─── Leçon 9 : Immobilier Locatif ─────────
  {
    id: 'pf-9',
    title: 'Investissement Locatif',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'L\'immobilier locatif est le moyen privilégié des Français pour construire un patrimoine grâce à l\'effet de levier du crédit. Comprendre la rentabilité et les régimes fiscaux est essentiel.',
      keyPoints: [
        'Rendement brut = Loyer annuel / Prix d\'achat (4-7% en France)',
        'Rendement net = après charges, taxe foncière, vacance, impôts',
        'Effet de levier : emprunter à 3.5% pour un actif qui rapporte 5-6%',
        'Régimes fiscaux : micro-foncier, réel, LMNP (Loueur Meublé Non Professionnel)',
      ],
      explanation:
        'Le rendement brut est un indicateur de départ mais le rendement net peut être 2-3 points inférieur (charges de copropriété, taxe foncière, assurance PNO, entretien, vacance locative, impôts). Le LMNP (location meublée) offre un avantage fiscal significatif grâce à l\'amortissement du bien et du mobilier qui réduit le résultat imposable. L\'effet de levier est l\'atout majeur de l\'immobilier : emprunter à 3.5% pour un bien qui rapporte 5.5% net permet de démultiplier le rendement sur fonds propres.',
      formula: 'Rendement brut = Loyer annuel / Prix all-in × 100\nCash-flow = Loyers − Charges − Mensualité crédit − Impôts',
      example:
        'Studio à Lyon, 120 000€ tout compris. Loyer 600€/mois (7 200€/an). Rendement brut = 6%. Charges/taxe foncière = 1 800€, vacance 1 mois = 600€. Rendement net avant impôt = 4%. En LMNP avec amortissement : impôt ≈ 0 les premières années.',
      finnSays:
        'L\'immobilier locatif, c\'est le seul investissement que la banque finance à ta place. L\'effet de levier du crédit est un superpower !',
    },
  },

  // ─── Leçon 10 : Crédit Immobilier ─────────
  {
    id: 'pf-10',
    title: 'Crédit Immobilier',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le crédit immobilier est le levier le plus puissant pour construire un patrimoine. Comprendre les taux, l\'assurance emprunteur et les stratégies de remboursement est crucial.',
      keyPoints: [
        'Taux d\'endettement maximum : 35% des revenus nets (HCSF)',
        'Durée maximum : 25 ans (27 ans dans le neuf avec différé)',
        'TAEG (Taux Annuel Effectif Global) : taux tout compris (intérêts + assurance + frais)',
        'Assurance emprunteur : droit à la délégation (loi Lemoine)',
      ],
      explanation:
        'Le HCSF (Haut Conseil de Stabilité Financière) limite le taux d\'endettement à 35% des revenus nets et la durée à 25 ans. Le TAEG inclut le taux nominal, l\'assurance emprunteur (0.10-0.50% selon l\'âge), les frais de dossier et les frais de garantie. La loi Lemoine permet de changer d\'assurance emprunteur à tout moment sans frais. L\'apport personnel recommandé est de 10-20% (frais de notaire + garantie). Les prêts à taux fixe dominent en France (99%), ce qui protège contre les hausses de taux.',
      formula: 'Mensualité = Capital × [taux/(1−(1+taux)^−n)]\nTaux d\'endettement = Mensualités totales / Revenus nets < 35%',
      example:
        'Achat 250 000€, apport 30 000€, emprunt 220 000€ sur 25 ans à 3.5%. Mensualité : 1 100€. Assurance 0.25% : 46€. Total : 1 146€/mois. Pour un couple gagnant 4 500€ net : taux d\'endettement = 25.5%. Coût total du crédit : 123 800€.',
      finnSays:
        'Le crédit immo, c\'est un outil fabuleux si tu le maîtrises. La règle : 35% d\'endettement max, taux fixe et compare l\'assurance emprunteur !',
    },
  },

  // ─── Leçon 11 : Fiscalité ────────────────
  {
    id: 'pf-11',
    title: 'Fiscalité des Revenus et du Patrimoine',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La fiscalité française est complexe mais prévisible. Comprendre l\'IR, la flat tax, l\'IFI et les niches fiscales permet d\'optimiser légalement sa charge fiscale.',
      keyPoints: [
        'IR : barème progressif 0%, 11%, 30%, 41%, 45%',
        'Flat tax (PFU) : 30% sur les revenus du capital (12.8% IR + 17.2% PS)',
        'IFI : 0.5-1.5% sur le patrimoine immobilier net > 1.3 M€',
        'Niches fiscales : plafonnement global à 10 000€/an',
      ],
      explanation:
        'L\'impôt sur le revenu est progressif par tranches (le taux s\'applique à chaque tranche, pas au total). La flat tax (PFU) de 30% s\'applique aux dividendes, intérêts et plus-values mobilières (option pour le barème possible si plus avantageux). Les plus-values immobilières sont exonérées sur la résidence principale et bénéficient d\'abattements pour durée de détention (exonération totale après 22 ans pour l\'IR). L\'IFI s\'applique au patrimoine immobilier net supérieur à 1.3 M€. Les niches fiscales (Pinel, PER, emploi à domicile) sont plafonnées.',
      example:
        'Célibataire, 60 000€ de revenus : IR = 0 + 1 085 + 4 283 + 3 990 = 9 358€ (TMI 30%). Dividendes 5 000€ au PFU 30% = 1 500€. Au barème : 5000 × 30% × 0.6 (abattement 40%) = 900€ + 862€ PS = 1 762€. PFU plus avantageux ici.',
      finnSays:
        'La fiscalité, c\'est le premier poste de « dépense » du patrimoine. Comprendre les règles permet d\'économiser des milliers d\'euros légalement chaque année !',
    },
  },

  // ─── Leçon 12 : Succession ───────────────
  {
    id: 'pf-12',
    title: 'Transmission et Succession',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Anticiper la transmission de son patrimoine permet de réduire considérablement les droits de succession (jusqu\'à 45% en ligne directe). L\'assurance-vie et les donations sont les outils clés.',
      keyPoints: [
        'Abattement en ligne directe : 100 000€ par parent par enfant (renouvelable tous les 15 ans)',
        'Assurance-vie : 152 500€/bénéficiaire exonérés (versements avant 70 ans)',
        'Donation en pleine propriété vs démembrement (usufruit/nue-propriété)',
        'Barème droits de succession : 5% à 45% en ligne directe',
      ],
      explanation:
        'En France, les droits de succession en ligne directe vont de 5% (< 8 072€) à 45% (> 1 805 677€), après un abattement de 100 000€ par parent par enfant. L\'assurance-vie hors succession offre un abattement supplémentaire de 152 500€ par bénéficiaire. La donation en démembrement (donner la nue-propriété en conservant l\'usufruit) réduit la base taxable grâce au barème fiscal de l\'usufruit (à 60 ans, l\'usufruit vaut 40% : on ne taxe que 60%). Les donations de sommes d\'argent bénéficient d\'un abattement supplémentaire de 31 865€.',
      formula: 'Base taxable = Valeur transmise − Abattements\nDroits = Application du barème progressif sur la base taxable',
      example:
        'Patrimoine 800 000€, 2 enfants. Sans planification : droits ≈ 95 000€ par enfant. Avec planification : donation de 100 000€ à chaque enfant tous les 15 ans + assurance-vie 152 500€/enfant. Droits réduits à ≈ 20 000€ par enfant.',
      finnSays:
        'La succession, c\'est le dernier chapitre financier. L\'anticiper permet de transmettre son patrimoine sans que l\'État prenne la moitié. Assurance-vie + donations = combo gagnant !',
    },
  },

  // ─── Leçon 13 : Erreurs à Éviter ──────────
  {
    id: 'pf-13',
    title: 'Les Erreurs à Éviter',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les biais comportementaux et les erreurs classiques coûtent cher. Connaître les pièges permet de les éviter et de protéger son patrimoine.',
      keyPoints: [
        'Biais de surconfiance : croire qu\'on peut battre le marché',
        'Panic selling : vendre pendant un krach (matérialiser la perte)',
        'Market timing : essayer de prévoir le bon moment pour investir/vendre',
        'Frais invisibles : assurance-vie chère, fonds actifs, crédit conso',
      ],
      explanation:
        'Les études de Dalbar montrent que l\'investisseur moyen gagne 3-4% de moins que le marché par an, principalement à cause du market timing (entrer après la hausse, sortir après la baisse). Les autres erreurs courantes : ne pas diversifier (tout mettre en immobilier ou en une seule action), ignorer les frais (un fonds à 2% de frais vs un ETF à 0.2% coûte ~250 000€ sur 30 ans pour 500€/mois), utiliser le crédit conso pour investir, et ne pas avoir de fonds d\'urgence. L\'éducation financière est le meilleur investissement.',
      example:
        'Un investisseur qui vend pendant le krach Covid (mars 2020, -35%) et attend 6 mois pour racheter rate le rebond de +40%. S\'il avait tenu, son portefeuille aurait récupéré en 5 mois. Leçon : time in the market > timing the market.',
      finnSays:
        'La plus grande erreur en finance, c\'est de croire qu\'on est plus malin que le marché. Investir régulièrement dans un ETF et ne rien toucher : c\'est la recette qui bat 90% des pros !',
    },
  },

  // ─── Leçon 14 : Cas Plan Financier ────────
  {
    id: 'pf-14',
    title: 'Cas Pratique : Construire son Plan Financier',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Construisons un plan financier complet pour un couple de 30 ans : budget, épargne de précaution, investissements et préparation de la retraite.',
      keyPoints: [
        'Profil : couple 30 ans, revenus nets 5 500€, locataires, pas d\'enfants',
        'Étape 1 : budget (50/30/20) et fonds d\'urgence',
        'Étape 2 : ouvrir PEA + assurance-vie et investir en DCA',
        'Étape 3 : achat résidence principale à 35 ans, puis investissement locatif',
      ],
      explanation:
        'Phase 1 (0-12 mois) : budget 50/30/20 → épargne 1 100€/mois. Fonds d\'urgence 12 000€ sur Livret A (12 mois). Phase 2 (12-60 mois) : 700€/mois en PEA sur ETF MSCI World + 300€/mois en assurance-vie (70% UC, 30% fonds euros). Phase 3 (5 ans) : achat RP 300 000€, apport 60 000€ (PEA), crédit 240 000€ sur 25 ans, mensualité 1 300€. Phase 4 (7 ans) : investissement locatif en LMNP, studio 100 000€ financé à 100%, cash-flow neutre. Phase 5 (40 ans) : PER si TMI ≥ 30%, 500€/mois. Projection retraite : 800 000€ de patrimoine financier + 2 biens immobiliers.',
      formula: 'Patrimoine projeté à 60 ans = Σ(investissements × (1+r)^n) + Immobilier net de crédit',
      example:
        'Projection à 60 ans : PEA 480 000€ (ETF 7% net), assurance-vie 180 000€, PER 120 000€, RP 400 000€ (remboursée), locatif 130 000€ (net de crédit). Patrimoine total ≈ 1.3 M€. Revenus passifs : ~40 000€/an (loyers + retraits 4%).',
      finnSays:
        'Un plan financier, c\'est une feuille de route pour la liberté financière. Budget → épargne → investissement → patrimoine. C\'est un marathon, pas un sprint !',
    },
  },
];
