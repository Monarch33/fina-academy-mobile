// ──────────────────────────────────────────────
//  FINA - Produits Dérivés : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../index';

export const derivativesLessons: Lesson[] = [
  // ─── Lesson 1 ───
  {
    id: 'derivatives-1',
    title: 'Introduction aux Dérivés',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les produits dérivés sont des instruments financiers dont la valeur dépend (dérive) d\'un actif sous-jacent. Ils servent à couvrir des risques, spéculer, ou arbitrer des écarts de prix.',
      keyPoints: [
        'Un dérivé tire sa valeur d\'un actif sous-jacent (action, indice, matière première, taux, devise)',
        'Les 4 grandes familles : forwards, futures, options, swaps',
        'Marché OTC (gré à gré) vs marchés organisés (Eurex, CME)',
        'Notionnel mondial des dérivés OTC : ~600 000 milliards USD',
      ],
      explanation:
        'Le marché des dérivés est le plus grand marché financier au monde en notionnel. Les dérivés permettent de transférer le risque d\'un agent qui veut s\'en défaire (hedger) vers un agent prêt à le prendre (spéculateur). Les marchés organisés offrent une chambre de compensation (CCP) qui élimine le risque de contrepartie, tandis que le marché OTC offre plus de flexibilité mais expose au risque de défaut.',
      formula: 'Payoff Forward Long = S(T) − K',
      example:
        'Air France achète un forward sur le kérosène à 800$/tonne pour livraison dans 6 mois. Si le prix spot monte à 900$, Air France économise 100$/tonne. Si le prix baisse à 700$, Air France perd 100$/tonne mais a sécurisé son budget.',
      finnSays:
        'Les dérivés, c\'est comme une assurance : tu paies pour transférer un risque à quelqu\'un d\'autre. La clé, c\'est de comprendre qui porte le risque !',
    },
  },
  // ─── Lesson 2 ───
  {
    id: 'derivatives-2',
    title: 'Forwards et Futures',
    xp: 200,
    duration: '35 min',
    content: {
      introduction:
        'Les forwards et futures sont des contrats obligeant les deux parties à échanger un actif à une date future à un prix fixé aujourd\'hui. Le forward est OTC, le future est coté en bourse.',
      keyPoints: [
        'Forward : contrat bilatéral OTC, non standardisé, réglé à maturité',
        'Future : contrat standardisé, coté, avec appels de marge quotidiens (mark-to-market)',
        'La convergence : à maturité, le prix du future converge vers le prix spot',
        'Contango (F > S) vs Backwardation (F < S)',
      ],
      explanation:
        'Le prix théorique d\'un forward/future sur un actif sans dividende est F = S × e^(r×T), où S est le spot, r le taux sans risque, et T la maturité. En contango, le coût de portage (stockage + financement) fait que le future est plus cher que le spot. En backwardation, la prime de commodité ou les anticipations baissières poussent le future sous le spot.',
      formula: 'F = S × e^(r×T)',
      example:
        'Or spot à 2 000$/oz, taux sans risque 5%, maturité 1 an : F = 2000 × e^(0.05×1) = 2000 × 1.0513 = 2 102.5$/oz. Le future est en contango de 102.5$/oz, reflétant le coût de financement.',
      finnSays:
        'Contango ou backwardation ? La forme de la courbe des futures te dit tout sur les anticipations du marché !',
    },
  },
  // ─── Lesson 3 ───
  {
    id: 'derivatives-3',
    title: 'Options : Call et Put',
    xp: 250,
    duration: '40 min',
    content: {
      introduction:
        'Une option donne le droit, mais pas l\'obligation, d\'acheter (call) ou vendre (put) un actif à un prix d\'exercice (strike) avant ou à l\'échéance. L\'acheteur paie une prime pour ce droit.',
      keyPoints: [
        'Call : droit d\'acheter au strike. Put : droit de vendre au strike',
        'Option européenne : exerçable uniquement à maturité. Américaine : à tout moment',
        'ITM (In The Money), ATM (At The Money), OTM (Out of The Money)',
        'L\'acheteur a un risque limité (la prime), le vendeur a un risque potentiellement illimité',
      ],
      explanation:
        'Le payoff d\'un call à maturité est max(S−K, 0) et celui d\'un put est max(K−S, 0). La prime reflète la probabilité que l\'option finisse ITM plus la valeur temps. Un call ITM a une valeur intrinsèque (S−K) positive. Un call OTM n\'a que de la valeur temps. À mesure que la maturité approche, la valeur temps s\'érode (time decay).',
      formula: 'Payoff Call = max(S − K, 0)\nPayoff Put = max(K − S, 0)',
      example:
        'Action Total à 55€. Call strike 50€ : ITM, valeur intrinsèque = 5€. Si la prime est 7€, la valeur temps = 2€. Breakeven pour l\'acheteur = 50 + 7 = 57€.',
      finnSays:
        'Acheter un call, c\'est comme réserver un billet d\'avion au prix d\'aujourd\'hui. Si le prix monte, tu as une bonne affaire. Si non, tu perds juste la réservation !',
    },
  },
  // ─── Lesson 4 ───
  {
    id: 'derivatives-4',
    title: 'Parité Call-Put',
    xp: 250,
    duration: '30 min',
    content: {
      introduction:
        'La parité call-put est une relation fondamentale qui lie le prix d\'un call européen, d\'un put européen, du sous-jacent et du taux sans risque. Elle permet l\'arbitrage si violée.',
      keyPoints: [
        'C − P = S − K × e^(−rT) pour options européennes sur actif sans dividende',
        'Si la parité est violée, il existe une opportunité d\'arbitrage',
        'Protective put = Long stock + Long put ≡ Long call + Cash',
        'La parité ne s\'applique pas directement aux options américaines',
      ],
      explanation:
        'La parité call-put découle du principe de non-arbitrage. Un portefeuille composé d\'un call long et d\'un put short au même strike et même maturité a le même payoff qu\'un forward. Donc C − P doit égaler la valeur actuelle du forward, soit S − K×e^(−rT). Si C − P > S − K×e^(−rT), on vend le call, achète le put, achète l\'action et emprunte K×e^(−rT).',
      formula: 'C − P = S − K × e^(−rT)',
      example:
        'Action à 100€, K=100, r=5%, T=1an, C=12€. Put théorique : P = C − S + K×e^(−rT) = 12 − 100 + 100×0.9512 = 12 − 100 + 95.12 = 7.12€.',
      finnSays:
        'La parité call-put, c\'est comme une balance : si un côté pèse plus, les arbitrageurs rééquilibrent instantanément !',
    },
  },
  // ─── Lesson 5 ───
  {
    id: 'derivatives-5',
    title: 'Les Grecques : Delta et Gamma',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'Les grecques mesurent la sensibilité du prix d\'une option à différents facteurs. Delta mesure la sensibilité au prix du sous-jacent, Gamma mesure la variation du Delta.',
      keyPoints: [
        'Delta (Δ) : variation du prix de l\'option pour 1€ de mouvement du sous-jacent',
        'Call : 0 < Δ < 1, Put : −1 < Δ < 0. ATM ≈ ±0.50',
        'Gamma (Γ) : taux de variation du Delta. Maximum pour options ATM proches de l\'échéance',
        'Delta-hedging : ajuster la position en sous-jacent pour neutraliser le Delta',
      ],
      explanation:
        'Le Delta d\'un call ATM est environ 0.50 : si l\'action monte de 1€, le call gagne ~0.50€. Mais ce Delta change (c\'est le Gamma). Un Gamma élevé signifie que le Delta change vite, obligeant à rebalancer fréquemment le hedge. Le coût du rebalancement est lié au Gamma et à la volatilité réalisée.',
      formula: 'Δ = ∂C/∂S\nΓ = ∂²C/∂S² = ∂Δ/∂S',
      example:
        'Call Delta 0.50, Gamma 0.05. L\'action monte de 2€ → nouveau Delta ≈ 0.50 + 0.05×2 = 0.60. Le P&L du call ≈ 0.50×2 + ½×0.05×4 = 1.10€ (vs 1.00€ si on ignore le Gamma).',
      finnSays:
        'Le Delta te dit où tu vas, le Gamma te dit à quelle vitesse le paysage change. Ignore le Gamma à tes risques et périls !',
    },
  },
  // ─── Lesson 6 ───
  {
    id: 'derivatives-6',
    title: 'Les Grecques : Theta, Vega, Rho',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'Theta mesure l\'érosion temporelle, Vega la sensibilité à la volatilité implicite, et Rho la sensibilité aux taux d\'intérêt. Ensemble, les grecques permettent de gérer le risque multidimensionnel d\'un portefeuille d\'options.',
      keyPoints: [
        'Theta (Θ) : perte de valeur par jour. Négatif pour les acheteurs d\'options',
        'Vega (ν) : variation pour 1% de mouvement de la volatilité implicite',
        'Rho (ρ) : sensibilité aux taux. Call : Rho positif, Put : Rho négatif',
        'Theta et Gamma sont inversement liés : long Gamma = short Theta',
      ],
      explanation:
        'L\'acheteur d\'options paie le Theta (time decay) mais bénéficie du Gamma (convexité). Le vendeur d\'options encaisse le Theta mais supporte le risque Gamma. Le Vega est maximal pour les options ATM à longue maturité. En pratique, un trader d\'options gère simultanément Delta, Gamma, Theta et Vega.',
      formula: 'Θ = −∂C/∂t\nν = ∂C/∂σ\nρ = ∂C/∂r',
      example:
        'Option ATM, Theta = −0.05€/jour, Vega = 0.15. Si la vol implicite augmente de 2% : gain Vega = 0.15 × 2 = 0.30€. Si 3 jours passent : perte Theta = 0.05 × 3 = 0.15€. Net = +0.15€.',
      finnSays:
        'Le temps est l\'ennemi de l\'acheteur d\'options et l\'ami du vendeur. Mais attention : une explosion de volatilité peut tout changer !',
    },
  },
  // ─── Lesson 7 ───
  {
    id: 'derivatives-7',
    title: 'Le Modèle Black-Scholes',
    xp: 350,
    duration: '45 min',
    content: {
      introduction:
        'Le modèle Black-Scholes-Merton (1973) est la pierre angulaire du pricing d\'options. Il fournit une formule fermée pour le prix d\'options européennes sous certaines hypothèses.',
      keyPoints: [
        'Hypothèses : volatilité constante, pas de dividendes, marché continu, taux sans risque constant',
        'Formule : C = S×N(d₁) − K×e^(−rT)×N(d₂)',
        'd₁ et d₂ dépendent de S, K, r, σ, T',
        'N(d₂) ≈ probabilité risque-neutre que l\'option finisse ITM',
      ],
      explanation:
        'Black-Scholes repose sur l\'idée qu\'on peut répliquer parfaitement une option par un portefeuille dynamique d\'actions et d\'obligations. En absence d\'arbitrage, le prix de l\'option doit égaler le coût de cette réplication. Le modèle a révolutionné la finance mais ses hypothèses (vol constante, pas de sauts) sont souvent violées en pratique.',
      formula: 'C = S·N(d₁) − K·e^(−rT)·N(d₂)\nd₁ = [ln(S/K) + (r + σ²/2)T] / (σ√T)\nd₂ = d₁ − σ√T',
      example:
        'S=100, K=100, r=5%, σ=20%, T=1an. d₁ = [0 + (0.05+0.02)×1] / 0.20 = 0.35. d₂ = 0.35 − 0.20 = 0.15. N(0.35)=0.637, N(0.15)=0.560. C = 100×0.637 − 100×0.951×0.560 = 63.7 − 53.3 = 10.45€.',
      finnSays:
        'Black-Scholes a valu un Nobel à Merton et Scholes en 1997. Fischer Black était décédé en 1995, mais son héritage vit dans chaque salle de marché !',
    },
  },
  // ─── Lesson 8 ───
  {
    id: 'derivatives-8',
    title: 'Volatilité Implicite et Smile',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'La volatilité implicite (IV) est la volatilité que le marché "prix" dans les options. Le smile de volatilité montre que l\'IV varie selon le strike, contredisant l\'hypothèse Black-Scholes de vol constante.',
      keyPoints: [
        'IV : volatilité qui, injectée dans BS, redonne le prix de marché de l\'option',
        'Smile : IV plus élevée pour les strikes OTM (puts et calls) que pour ATM',
        'Skew : asymétrie du smile, reflet du crash risk (puts OTM plus chers)',
        'Surface de volatilité : smile × maturité = nappe 3D',
      ],
      explanation:
        'Après le krach de 1987, le smile est apparu : les puts OTM profonds ont commencé à se trader avec une IV bien supérieure aux ATM, reflétant la peur d\'un nouveau crash. Le skew est particulièrement prononcé sur les indices actions. Sur le forex, le smile est plus symétrique (butterfly). Les traders utilisent des modèles de vol locale ou stochastique pour capturer ces effets.',
      example:
        'S&P 500 à 5000. Call ATM : IV = 15%. Put 10% OTM (strike 4500) : IV = 25%. Call 10% OTM (strike 5500) : IV = 18%. Le skew reflète la demande de protection contre les baisses.',
      finnSays:
        'Le smile de volatilité, c\'est la peur et la cupidité des marchés cristallisées dans les prix d\'options !',
    },
  },
  // ─── Lesson 9 ───
  {
    id: 'derivatives-9',
    title: 'Stratégies d\'Options : Spreads',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'Les spreads combinent l\'achat et la vente d\'options pour créer des profils de gain/perte spécifiques avec un coût et un risque contrôlés.',
      keyPoints: [
        'Bull Call Spread : Long call K1 + Short call K2 (K2 > K1). Vue haussière modérée',
        'Bear Put Spread : Long put K2 + Short put K1 (K2 > K1). Vue baissière modérée',
        'Butterfly : Long K1 + 2 Short K2 + Long K3. Pari sur la stabilité',
        'Calendar Spread : même strike, maturités différentes. Pari sur la volatilité',
      ],
      explanation:
        'Un bull call spread coûte moins qu\'un call seul car la vente du call OTM finance partiellement l\'achat. En contrepartie, le gain est plafonné. Le profit max = (K2−K1) − prime nette. La perte max = prime nette payée. Le butterfly est un pari que le sous-jacent finira proche de K2 : profit max à S=K2, pertes limitées aux ailes.',
      formula: 'Bull Call Spread:\nProfit max = (K₂ − K₁) − prime nette\nPerte max = prime nette',
      example:
        'Action à 50€. Bull call spread : achat call 50 à 3€, vente call 55 à 1€. Coût net = 2€. Profit max = (55−50)−2 = 3€ si S≥55. Perte max = 2€ si S≤50.',
      finnSays:
        'Les spreads, c\'est l\'art de payer moins pour parier mieux. Tu échanges du potentiel illimité contre de la certitude !',
    },
  },
  // ─── Lesson 10 ───
  {
    id: 'derivatives-10',
    title: 'Stratégies : Straddle et Strangle',
    xp: 250,
    duration: '30 min',
    content: {
      introduction:
        'Le straddle et le strangle sont des stratégies de volatilité : elles parient sur l\'amplitude du mouvement du sous-jacent, quelle que soit la direction.',
      keyPoints: [
        'Long Straddle : Long call ATM + Long put ATM. Pari sur forte volatilité',
        'Long Strangle : Long call OTM + Long put OTM. Moins cher, breakevens plus éloignés',
        'Short Straddle/Strangle : encaisser les primes, parier sur la stabilité',
        'Breakeven = K ± prime totale (straddle)',
      ],
      explanation:
        'Un long straddle profite si le sous-jacent bouge fortement dans n\'importe quelle direction. Le coût est élevé (deux primes ATM), donc le mouvement doit être suffisant pour dépasser les deux breakevens. Le strangle est moins cher mais nécessite un mouvement encore plus ample. Ces stratégies sont populaires avant les annonces de résultats ou les événements macro.',
      formula: 'Straddle Breakevens : K − (C+P) et K + (C+P)',
      example:
        'Avant les résultats de LVMH à 800€. Straddle : call 800 à 25€ + put 800 à 22€ = 47€. Breakevens : 753€ et 847€. Le titre doit bouger de ±6% pour être rentable.',
      finnSays:
        'Les straddles avant les résultats ? Attention, la vol implicite est souvent déjà élevée — tu risques le "vol crush" après l\'annonce !',
    },
  },
  // ─── Lesson 11 ───
  {
    id: 'derivatives-11',
    title: 'Swaps de Taux d\'Intérêt',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'Un swap de taux (IRS - Interest Rate Swap) est un échange de flux d\'intérêts entre deux parties : l\'une paie un taux fixe, l\'autre un taux variable. C\'est le dérivé le plus négocié au monde.',
      keyPoints: [
        'Payeur fixe vs payeur variable. Le notionnel n\'est pas échangé',
        'Taux variable : souvent EURIBOR ou SOFR (anciennement LIBOR)',
        'Le swap rate est le taux fixe qui rend la valeur initiale du swap nulle',
        'Notionnel mondial des IRS : ~400 000 milliards USD',
      ],
      explanation:
        'Un IRS vanilla implique des paiements périodiques. Le payeur fixe verse un taux fixe sur le notionnel et reçoit le taux variable. Si les taux montent, le payeur fixe gagne (il reçoit plus de variable qu\'il ne paie de fixe). La valorisation d\'un swap en cours de vie utilise la courbe des taux zéro-coupon pour actualiser les flux futurs.',
      formula: 'Flux net = Notionnel × (Taux variable − Taux fixe) × Δt',
      example:
        'Swap 100M€, 5 ans, fixe 3% vs EURIBOR 6M. Si EURIBOR = 3.5%, le payeur fixe reçoit : 100M × (3.5% − 3%) × 0.5 = 250 000€ par semestre.',
      finnSays:
        'Les swaps de taux, c\'est le pain quotidien des trésoriers d\'entreprise. Emprunter à taux variable et swapper en fixe, c\'est sécuriser son coût de financement !',
    },
  },
  // ─── Lesson 12 ───
  {
    id: 'derivatives-12',
    title: 'Credit Default Swaps (CDS)',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'Un CDS est une assurance contre le défaut d\'un émetteur obligataire. L\'acheteur de protection paie une prime périodique et reçoit un paiement si l\'entité de référence fait défaut.',
      keyPoints: [
        'Acheteur de protection : paie le spread CDS, protégé contre le défaut',
        'Vendeur de protection : encaisse le spread, paie en cas de défaut',
        'Événement de crédit : défaut, restructuration, faillite',
        'CDS spread ≈ credit spread de l\'obligation',
      ],
      explanation:
        'Le CDS permet de séparer le risque de crédit du risque de taux. Un investisseur peut acheter une obligation et un CDS pour obtenir un rendement sans risque de crédit. Inversement, un spéculateur peut acheter un CDS sans détenir l\'obligation (naked CDS) pour parier sur la détérioration de la qualité de crédit. Les CDS sur souverains ont joué un rôle clé dans la crise de la dette européenne (2010-2012).',
      formula: 'CDS Spread ≈ (1 − Recovery Rate) × Probabilité de défaut annualisée',
      example:
        'CDS 5 ans sur Renault : spread = 150 bps. Recovery = 40%. Probabilité de défaut implicite ≈ 150/(1−0.40)/10000 ≈ 2.5% par an.',
      finnSays:
        'Les CDS ont été au cœur de la crise de 2008 (AIG, souvenez-vous). Utiles pour hedger, dangereux quand utilisés pour spéculer sans limite !',
    },
  },
  // ─── Lesson 13 ───
  {
    id: 'derivatives-13',
    title: 'Swaps de Devises',
    xp: 250,
    duration: '30 min',
    content: {
      introduction:
        'Un cross-currency swap (CCS) échange des flux en deux devises différentes. Contrairement à l\'IRS, les notionnels sont échangés en début et fin de swap.',
      keyPoints: [
        'Échange du notionnel dans les deux devises au taux spot initial',
        'Paiements d\'intérêts périodiques dans chaque devise',
        'Ré-échange du notionnel à maturité au même taux initial',
        'Utilisé pour le financement en devise étrangère à moindre coût',
      ],
      explanation:
        'Une entreprise française qui veut emprunter en USD peut émettre en EUR (où elle a un meilleur spread) puis swapper en USD via un CCS. Elle reçoit des EUR du swap pour rembourser son emprunt EUR et paie des USD sur le swap. Le basis swap spread reflète la demande relative de financement dans chaque devise.',
      example:
        'Airbus émet 500M€ à 2.5% et entre dans un CCS EUR/USD. Elle échange 500M€ contre 550M$ (taux spot 1.10), paie 4% USD et reçoit 2.5% EUR. À maturité, ré-échange des notionnels.',
      finnSays:
        'Les cross-currency swaps, c\'est l\'outil préféré des multinationales pour optimiser leur financement international !',
    },
  },
  // ─── Lesson 14 ───
  {
    id: 'derivatives-14',
    title: 'Options Exotiques : Barrières',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'Les options à barrière sont activées (knock-in) ou désactivées (knock-out) lorsque le sous-jacent atteint un niveau prédéfini. Elles sont moins chères que les options vanille.',
      keyPoints: [
        'Knock-in : l\'option naît quand la barrière est touchée',
        'Knock-out : l\'option meurt quand la barrière est touchée',
        'Down-and-in/out, Up-and-in/out : 4 combinaisons possibles',
        'Relation : knock-in + knock-out = vanille (même strike et barrière)',
      ],
      explanation:
        'Une down-and-out call avec barrière à 80 et strike à 100 sur une action à 105 est un call classique tant que l\'action ne touche pas 80. Si elle passe sous 80, même brièvement, l\'option est annulée. C\'est moins cher qu\'un call vanille car la probabilité de perdre l\'option réduit sa valeur. Ces options sont très utilisées dans les produits structurés.',
      formula: 'Call knock-in + Call knock-out = Call vanille\n(même strike et barrière)',
      example:
        'Action à 100€, call vanille strike 100 = 8€. Down-and-out call (barrière 85) = 5€. Down-and-in call (barrière 85) = 3€. Vérification : 5 + 3 = 8€.',
      finnSays:
        'Les barrières rendent les options moins chères, mais attention : un flash crash peut désactiver ton option juste avant le rebond !',
    },
  },
  // ─── Lesson 15 ───
  {
    id: 'derivatives-15',
    title: 'Options Exotiques : Asiatiques et Lookback',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'Les options asiatiques ont un payoff basé sur la moyenne du prix du sous-jacent, tandis que les lookback utilisent le prix extrême (max ou min) observé pendant la vie de l\'option.',
      keyPoints: [
        'Asiatique : payoff = max(moyenne(S) − K, 0). Moins chère car la moyenne lisse la volatilité',
        'Lookback : payoff = S(T) − min(S). Toujours ITM, donc chère',
        'Les asiatiques réduisent le risque de manipulation du cours à maturité',
        'Pricing par simulation Monte Carlo (pas de formule fermée simple)',
      ],
      explanation:
        'Les options asiatiques sont populaires sur les matières premières : un producteur de pétrole préfère couvrir son prix moyen sur un trimestre plutôt qu\'un prix ponctuel. La moyenne réduit la volatilité effective (σ_avg ≈ σ/√3 pour une moyenne arithmétique continue), d\'où un prix plus bas. Les lookbacks offrent le "meilleur timing possible" mais à un coût prohibitif.',
      example:
        'Option asiatique call sur Brent, strike 80$, 3 mois. Prix moyens observés : 82, 85, 78, 81 → moyenne = 81.5$. Payoff = max(81.5 − 80, 0) = 1.5$ par baril.',
      finnSays:
        'Les asiatiques, c\'est l\'option des entreprises pragmatiques : elles couvrent la réalité de leur exposition moyenne, pas un prix instantané !',
    },
  },
  // ─── Lesson 16 ───
  {
    id: 'derivatives-16',
    title: 'Produits Structurés',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'Les produits structurés combinent obligations et dérivés pour créer des profils de rendement sur mesure. Ils sont émis par les banques et vendus aux investisseurs particuliers et institutionnels.',
      keyPoints: [
        'Capital garanti : obligation zéro-coupon + call = participation à la hausse sans risque de perte',
        'Autocall : remboursement anticipé si le sous-jacent est au-dessus d\'un seuil aux dates d\'observation',
        'Phoenix/Reverse convertible : coupon conditionnel, risque de conversion en actions si baisse',
        'La marge de la banque est intégrée dans le pricing du structuré',
      ],
      explanation:
        'Un autocall typique paie un coupon élevé (8-12%) si le sous-jacent est au-dessus du niveau initial aux dates d\'observation. Si l\'action baisse sous la barrière de protection (ex: 60% du niveau initial), l\'investisseur subit la perte. La banque se hedge avec des options barrière et empoche la différence entre le coût théorique et le prix de vente.',
      example:
        'Autocall sur Eurostoxx 50, maturité 5 ans, coupon 8%/an, barrière -40%. Si l\'indice est au-dessus du niveau initial après 1 an → remboursement 108%. Sinon, on regarde aux dates suivantes. Si à maturité l\'indice est sous 60% du niveau initial → perte en capital.',
      finnSays:
        'Les produits structurés, c\'est comme un menu au restaurant : le chef (la banque) combine les ingrédients, mais vérifie bien ce qu\'il y a dans l\'assiette !',
    },
  },
  // ─── Lesson 17 ───
  {
    id: 'derivatives-17',
    title: 'Valorisation : Arbres Binomiaux',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'Le modèle binomial (Cox-Ross-Rubinstein) price les options en construisant un arbre de prix possibles. Il est plus flexible que Black-Scholes et permet de pricer les options américaines.',
      keyPoints: [
        'À chaque pas, le prix monte (u) ou baisse (d). u = e^(σ√Δt), d = 1/u',
        'Probabilité risque-neutre : p = (e^(rΔt) − d) / (u − d)',
        'On calcule le payoff aux feuilles puis on remonte par backward induction',
        'Pour les américaines : à chaque nœud, max(valeur continuation, exercice anticipé)',
      ],
      explanation:
        'L\'arbre binomial divise la vie de l\'option en N pas. Plus N est grand, plus le prix converge vers Black-Scholes pour les européennes. L\'avantage est qu\'à chaque nœud on peut comparer la valeur de continuer à détenir l\'option vs l\'exercer immédiatement, ce qui permet de pricer les options américaines et bermudiennes.',
      formula: 'u = e^(σ√Δt), d = 1/u\np = (e^(rΔt) − d) / (u − d)\nC = e^(−rΔt) × [p×Cu + (1−p)×Cd]',
      example:
        'S=100, K=100, r=5%, σ=20%, T=1an, 1 pas. u=1.2214, d=0.8187. p=(1.0513−0.8187)/(1.2214−0.8187)=0.577. Su=122.14→payoff=22.14. Sd=81.87→payoff=0. C=e^(−0.05)×(0.577×22.14+0.423×0)=12.15€.',
      finnSays:
        'L\'arbre binomial, c\'est comme un jeu de pile ou face pondéré : à chaque étape, le prix monte ou baisse, et on calcule la valeur en remontant !',
    },
  },
  // ─── Lesson 18 ───
  {
    id: 'derivatives-18',
    title: 'Monte Carlo pour les Dérivés',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'La simulation Monte Carlo est une méthode numérique qui génère des milliers de trajectoires aléatoires du sous-jacent pour estimer le prix d\'un dérivé complexe.',
      keyPoints: [
        'Simuler N trajectoires du sous-jacent sous la mesure risque-neutre',
        'Calculer le payoff pour chaque trajectoire',
        'Le prix = moyenne des payoffs actualisés ± intervalle de confiance',
        'Convergence en 1/√N : 10× plus de simulations = 3× plus de précision',
      ],
      explanation:
        'Monte Carlo est la méthode de choix pour les dérivés path-dependent (asiatiques, lookback, barrières) et les dérivés multi-sous-jacents (worst-of, best-of, basket options). On simule S(t+Δt) = S(t) × exp[(r−σ²/2)Δt + σ√Δt × Z] où Z ~ N(0,1). Les techniques de réduction de variance (antithétiques, variables de contrôle) améliorent la précision.',
      formula: 'S(t+Δt) = S(t) × exp[(r − σ²/2)Δt + σ√Δt × Z]',
      example:
        'Pricing d\'un call asiatique par Monte Carlo, 10 000 trajectoires. Résultat : prix = 4.52€ ± 0.08€ (IC 95%). Avec 100 000 trajectoires : 4.55€ ± 0.025€.',
      finnSays:
        'Monte Carlo : quand les maths sont trop compliquées, on laisse l\'ordinateur simuler des millions de futurs possibles !',
    },
  },
  // ─── Lesson 19 ───
  {
    id: 'derivatives-19',
    title: 'Couverture et Risk Management',
    xp: 250,
    duration: '35 min',
    content: {
      introduction:
        'La couverture (hedging) est l\'utilisation principale des dérivés par les entreprises et institutions. L\'objectif est de réduire l\'exposition à un risque identifié.',
      keyPoints: [
        'Hedging naturel : matcher les revenus et coûts dans la même devise/commodity',
        'Hedge ratio : quantité de dérivés / exposition à couvrir. Optimal ≠ toujours 100%',
        'Basis risk : le hedge n\'est pas parfait car le dérivé ne réplique pas exactement l\'exposition',
        'Hedge accounting (IFRS 9) : permet de lisser l\'impact comptable du hedge',
      ],
      explanation:
        'Un exportateur français qui facture en USD couvre son risque de change avec des forwards EUR/USD. Si le dollar baisse, la perte sur les ventes est compensée par le gain sur le forward. Mais le hedge est rarement parfait : les dates ne matchent pas exactement, le montant est incertain, etc. Le basis risk mesure cette imperfection.',
      example:
        'Airbus prévoit de recevoir 1 milliard USD dans 6 mois. Elle vend 900M USD forward à 1.08 EUR/USD (hedge ratio 90%). Si EUR/USD monte à 1.12, la perte sur les 100M non couverts = 100M × (1/1.08 − 1/1.12) = ~3.3M€.',
      finnSays:
        'Hedger 100% n\'est pas toujours optimal. Le coût du hedge, le basis risk et l\'incertitude sur l\'exposition justifient souvent un hedge partiel !',
    },
  },
  // ─── Lesson 20 ───
  {
    id: 'derivatives-20',
    title: 'Dérivés de Commodities',
    xp: 250,
    duration: '30 min',
    content: {
      introduction:
        'Les dérivés de matières premières (pétrole, métaux, agricoles) ont des spécificités liées au stockage physique, à la saisonnalité et à la livraison physique.',
      keyPoints: [
        'Convenience yield : bénéfice implicite de détenir la matière première physique',
        'F = S × e^((r − y + u)T) où y = convenience yield, u = coût de stockage',
        'Roll yield : gain/perte lors du renouvellement d\'une position futures',
        'Contango ⟹ roll yield négatif (le future suivant est plus cher)',
      ],
      explanation:
        'Contrairement aux actifs financiers, les commodities ont un coût de stockage et une convenience yield (avantage de détenir le physique pour la production). En backwardation, le roll yield est positif : on vend le future expirant et achète le suivant moins cher. C\'est pourquoi les ETF sur matières premières en contango sous-performent le spot.',
      formula: 'F = S × e^((r − y + u) × T)',
      example:
        'WTI spot 75$, r=5%, stockage=3%, convenience yield=7%, T=1an. F = 75 × e^((0.05−0.07+0.03)×1) = 75 × e^(0.01) = 75.75$. Faible contango grâce à la forte convenience yield.',
      finnSays:
        'Le pétrole, l\'or, le blé... les commodities sont le lien entre les marchés financiers et l\'économie réelle !',
    },
  },
  // ─── Lesson 21 ───
  {
    id: 'derivatives-21',
    title: 'Dérivés de Crédit Avancés',
    xp: 300,
    duration: '35 min',
    content: {
      introduction:
        'Au-delà des CDS simples, le marché des dérivés de crédit inclut les indices de crédit (iTraxx, CDX), les tranches, et les CLOs qui structurent le risque de crédit en couches.',
      keyPoints: [
        'iTraxx Europe : indice de 125 CDS investment-grade européens',
        'CDX NA IG : équivalent américain (125 noms)',
        'Tranches : equity (0-3%), mezzanine (3-7%), senior (7-100%)',
        'CLO : titrisation de prêts leveraged, structurée en tranches AAA à equity',
      ],
      explanation:
        'Les indices de crédit permettent de trader le risque de crédit de manière liquide et diversifiée. Les tranches découpent la perte du portefeuille : la tranche equity absorbe les premiers défauts (plus risquée, rendement élevé), la senior ne perd que si les pertes dépassent son point d\'attachement. La corrélation entre défauts est le facteur clé du pricing des tranches.',
      example:
        'iTraxx Europe à 70 bps. Un gérant achète la protection sur la tranche equity 0-3% à 500 bps upfront + 500 bps running. Si 2 noms font défaut (loss ≈ 2.4%), la tranche equity perd ~80% de sa valeur.',
      finnSays:
        'Les tranches de crédit, c\'est comme un immeuble : les étages du bas (equity) sont inondés en premier, les étages du haut (senior) ne sont touchés que par un tsunami !',
    },
  },
  // ─── Lesson 22 ───
  {
    id: 'derivatives-22',
    title: 'Dérivés Actions : Variance Swaps',
    xp: 350,
    duration: '35 min',
    content: {
      introduction:
        'Un variance swap échange la variance réalisée d\'un sous-jacent contre un strike de variance fixé à l\'initiation. C\'est un instrument pur pour trader la volatilité.',
      keyPoints: [
        'Payoff = Notionnel × (σ²_réalisée − K²_var)',
        'K_var (variance strike) ≈ vol implicite ATM ajustée du skew',
        'Long variance swap = long volatilité pure (sans risque Delta)',
        'Convexité : le payoff est convexe en volatilité (avantage pour le long)',
      ],
      explanation:
        'Contrairement aux straddles qui nécessitent un Delta-hedging continu, le variance swap offre une exposition pure à la volatilité réalisée sans risque directionnel. Le prix théorique peut être répliqué par un portefeuille continu d\'options de tous strikes, pondéré en 1/K². Le skew et les queues de distribution impactent donc le pricing.',
      formula: 'Payoff = N_var × (σ²_réalisée − K²_var)\nN_var = Notionnel vega / (2 × K_var)',
      example:
        'Variance swap sur Eurostoxx 50, K_var = 18% (soit K²=324), notionnel vega = 100K€. Si vol réalisée = 22% (σ²=484), payoff = 100K/(2×18) × (484−324) = 2778 × 160 = 444 444€.',
      finnSays:
        'Le variance swap, c\'est le dérivé préféré des traders de volatilité pure. Pas de Delta, pas de Gamma... juste la vol !',
    },
  },
  // ─── Lesson 23 ───
  {
    id: 'derivatives-23',
    title: 'Gestion des Risques : VaR et CVA',
    xp: 300,
    duration: '40 min',
    content: {
      introduction:
        'La Value at Risk (VaR) quantifie la perte maximale attendue sur un portefeuille de dérivés à un horizon et un niveau de confiance donnés. La CVA (Credit Valuation Adjustment) prix le risque de contrepartie.',
      keyPoints: [
        'VaR 99% 1 jour : perte maximale avec 99% de probabilité sur un jour',
        'VaR paramétrique : suppose une distribution normale (sous-estime les queues)',
        'VaR historique : utilise les rendements passés (dépend de la fenêtre)',
        'CVA : ajustement du prix d\'un dérivé pour le risque de défaut de la contrepartie',
      ],
      explanation:
        'La VaR d\'un portefeuille d\'options nécessite de prendre en compte le Delta, le Gamma et le Vega. Une VaR Delta-normale est simple mais ignore la convexité. Une VaR Monte Carlo complète est plus précise mais coûteuse. Depuis Bâle III, les banques doivent calculer la CVA et tenir du capital pour le risque de contrepartie sur les dérivés OTC.',
      formula: 'VaR_99% = −μ + 2.33 × σ × √t\nCVA ≈ LGD × ∫ EE(t) × dPD(t)',
      example:
        'Portefeuille d\'options, P&L journalier σ = 2M€. VaR 99% 1 jour = 2.33 × 2M = 4.66M€. La banque risque de perdre plus de 4.66M€ avec 1% de probabilité en un jour.',
      finnSays:
        'La VaR te dit "dans 99% des cas, tu ne perds pas plus que ça". Le problème, c\'est le 1% restant qui peut tout changer !',
    },
  },
  // ─── Lesson 24 ───
  {
    id: 'derivatives-24',
    title: 'Régulation des Dérivés Post-2008',
    xp: 250,
    duration: '30 min',
    content: {
      introduction:
        'La crise de 2008 a révélé les risques systémiques des dérivés OTC non régulés. Les réformes (Dodd-Frank, EMIR) ont imposé la compensation centrale, les marges et la transparence.',
      keyPoints: [
        'EMIR (Europe) / Dodd-Frank (US) : obligation de clearing central pour les dérivés standardisés',
        'Marges initiales et de variation bilatérales pour les dérivés non clearés (UMR)',
        'Trade repositories : déclaration obligatoire de toutes les transactions OTC',
        'SA-CCR : nouvelle méthode standardisée pour le calcul de l\'exposition au risque de contrepartie',
      ],
      explanation:
        'Avant 2008, les dérivés OTC étaient négociés bilatéralement sans transparence ni collatéral systématique. L\'effondrement de Lehman et le sauvetage d\'AIG (350 milliards de CDS vendus) ont montré le risque systémique. Les réformes visent à réduire le risque de contrepartie (CCP, marges) et à améliorer la transparence (reporting). Le coût du capital et des marges a rendu les dérivés OTC plus chers.',
      example:
        'Avant EMIR : un swap OTC entre deux banques sans marge. Après EMIR : obligation de poster une marge initiale de ~5% du notionnel et d\'échanger des marges de variation quotidiennes si l\'exposition dépasse 500K€.',
      finnSays:
        'La régulation post-2008 a rendu les dérivés plus sûrs mais plus chers. Le risque systémique n\'a pas disparu, il a migré vers les chambres de compensation !',
    },
  },
  // ─── Lesson 25 ───
  {
    id: 'derivatives-25',
    title: 'Volatilité Stochastique et Modèles Avancés',
    xp: 350,
    duration: '40 min',
    content: {
      introduction:
        'Les modèles de volatilité stochastique (Heston, SABR) abandonnent l\'hypothèse de vol constante de Black-Scholes pour mieux capturer le smile et la dynamique de la volatilité.',
      keyPoints: [
        'Heston : la variance suit un processus mean-reverting (CIR)',
        'SABR : modèle standard pour les swaptions et caps/floors',
        'Vol locale (Dupire) : vol déterministe fonction de S et t, calibrée au smile',
        'Les modèles rough volatility (Gatheral) capturent la mémoire courte de la vol',
      ],
      explanation:
        'Le modèle de Heston suppose que la variance v(t) suit dv = κ(θ−v)dt + ξ√v dW₂, avec une corrélation ρ entre le processus du sous-jacent et celui de la variance. ρ < 0 génère le skew observé. Le modèle SABR est privilégié pour les taux car il capture bien la dynamique du smile quand les taux bougent. Ces modèles sont calibrés à la surface de volatilité observée.',
      formula: 'Heston :\ndS = rS dt + √v S dW₁\ndv = κ(θ−v) dt + ξ√v dW₂\ncorr(dW₁, dW₂) = ρ',
      example:
        'Calibration Heston sur le DAX : κ=2.0, θ=0.04 (20% vol long terme), ξ=0.3, ρ=−0.7, v₀=0.03. Le ρ négatif reproduit le skew baissier observé sur les indices.',
      finnSays:
        'Black-Scholes suppose une vol constante. La réalité est bien plus riche : la vol elle-même est volatile ! C\'est le meta-risque.',
    },
  },
];
