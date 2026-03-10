// ──────────────────────────────────────────────
//  FINA - Crypto & Blockchain : Lessons
// ──────────────────────────────────────────────

import type { Lesson } from '../types';

export const cryptoLessons: Lesson[] = [
  // ─── Leçon 1 : Blockchain ──────────────────
  {
    id: 'crypto-1',
    title: 'La Blockchain',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La blockchain est un registre distribué, immuable et transparent qui enregistre des transactions sans intermédiaire de confiance. C\'est la technologie fondatrice des cryptomonnaies.',
      keyPoints: [
        'Registre distribué : chaque nœud possède une copie complète',
        'Immuabilité : une transaction validée ne peut plus être modifiée',
        'Consensus : mécanisme d\'accord entre les nœuds (PoW, PoS)',
        'Décentralisation : pas d\'autorité centrale, résistance à la censure',
      ],
      explanation:
        'Une blockchain est une chaîne de blocs contenant chacun un ensemble de transactions, un horodatage et le hash cryptographique du bloc précédent. Cette structure rend toute modification rétroactive détectable. Les transactions sont vérifiées et validées par un réseau de nœuds selon un mécanisme de consensus. La décentralisation élimine le risque de point unique de défaillance. Les blockchains publiques (Bitcoin, Ethereum) sont ouvertes à tous, tandis que les blockchains privées (Hyperledger) limitent l\'accès.',
      example:
        'Alice envoie 1 BTC à Bob. La transaction est diffusée au réseau, vérifiée par les mineurs (signature valide, solde suffisant), incluse dans un bloc et ajoutée à la chaîne. Irréversible en ~60 minutes (6 confirmations).',
      finnSays:
        'La blockchain, c\'est un grand livre de comptes que tout le monde peut lire mais personne ne peut falsifier. La confiance par les mathématiques !',
    },
  },

  // ─── Leçon 2 : Bitcoin ────────────────────
  {
    id: 'crypto-2',
    title: 'Bitcoin',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Bitcoin (BTC), créé en 2009 par Satoshi Nakamoto, est la première cryptomonnaie décentralisée. Avec une offre limitée à 21 millions d\'unités, il est souvent qualifié d\'« or numérique ».',
      keyPoints: [
        'Offre fixe : 21 millions de BTC maximum (dernier miné en ~2140)',
        'Halving : réduction de moitié de la récompense tous les ~4 ans',
        'Whitepaper 2008 : « A Peer-to-Peer Electronic Cash System »',
        'Capitalisation : >1 000 Md$ (premier actif crypto)',
      ],
      explanation:
        'Bitcoin résout le problème de la double dépense sans intermédiaire grâce à la preuve de travail (Proof of Work). Les mineurs résolvent des problèmes cryptographiques pour valider les blocs et reçoivent une récompense en BTC. Le halving (réduction de 50% de cette récompense) crée une raréfaction programmée : 50 BTC/bloc en 2009, 6.25 en 2020, 3.125 en 2024. L\'offre décroissante face à une demande croissante est la thèse haussière fondamentale. Bitcoin est aussi un réseau de paiement (Lightning Network pour les petites transactions).',
      example:
        'Historique des halvings et prix : 2012 (12.5$→1000$), 2016 (650$→20000$), 2020 (9000$→69000$), 2024 (42000$→?). Chaque halving a précédé un bull run, mais les performances passées ne garantissent pas les performances futures.',
      finnSays:
        'Bitcoin, c\'est de l\'or qu\'on peut envoyer par internet en 10 minutes. 21 millions d\'unités, pas une de plus. La rareté programmée !',
    },
  },

  // ─── Leçon 3 : PoW vs PoS ────────────────
  {
    id: 'crypto-3',
    title: 'Proof of Work vs Proof of Stake',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les mécanismes de consensus PoW (Proof of Work) et PoS (Proof of Stake) sont les deux approches dominantes pour sécuriser une blockchain et valider les transactions.',
      keyPoints: [
        'PoW : sécurité par la puissance de calcul (Bitcoin, ~150 TWh/an)',
        'PoS : sécurité par le capital immobilisé (staking)',
        'The Merge (2022) : Ethereum passe de PoW à PoS (-99.95% énergie)',
        'Slashing : pénalité pour les validateurs malveillants en PoS',
      ],
      explanation:
        'En PoW, les mineurs dépensent de l\'énergie pour résoudre un puzzle cryptographique (trouver un nonce tel que le hash du bloc commence par N zéros). Le premier à trouver la solution crée le bloc et reçoit la récompense. La sécurité repose sur le coût prohibitif d\'une attaque 51%. En PoS, les validateurs immobilisent des tokens (stake) et sont sélectionnés proportionnellement à leur mise. Un validateur malhonnête perd son stake (slashing). Le PoS est ~99% moins énergivore mais concentre le pouvoir chez les gros détenteurs.',
      formula: 'Sécurité PoW = coût d\'une attaque 51% (matériel + électricité)\nSécurité PoS = 33% du total staké pour bloquer le réseau',
      example:
        'Bitcoin (PoW) : ~500 000 mineurs ASIC, consommation ≈ Pays-Bas. Ethereum (PoS) : ~900 000 validateurs, 32 ETH minimum par validateur (≈50 000€), consommation ≈ un petit village.',
      finnSays:
        'PoW sécurise avec de l\'énergie, PoS avec du capital. Deux philosophies, un même objectif : empêcher les tricheurs !',
    },
  },

  // ─── Leçon 4 : Ethereum ──────────────────
  {
    id: 'crypto-4',
    title: 'Ethereum',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Ethereum est une plateforme de smart contracts (contrats intelligents) qui permet de créer des applications décentralisées (dApps). C\'est la blockchain la plus utilisée pour la DeFi, les NFT et la tokenisation.',
      keyPoints: [
        'Smart contracts : programmes auto-exécutables sur la blockchain',
        'Solidity : langage de programmation des smart contracts Ethereum',
        'Gas : unité de mesure du coût de calcul (payé en ETH)',
        'EVM (Ethereum Virtual Machine) : machine virtuelle décentralisée',
      ],
      explanation:
        'Contrairement à Bitcoin (registre de transactions), Ethereum est un « ordinateur mondial » décentralisé. Les smart contracts sont des programmes dont l\'exécution est garantie par le réseau : une fois déployé, le code s\'exécute exactement comme prévu, sans possibilité de censure ou d\'arrêt. Le gas mesure le coût de calcul de chaque opération. Les frais de gas (gas price × gas used) rendent les attaques spam coûteuses. Les Layer 2 (Arbitrum, Optimism, Base) réduisent les frais en traitant les transactions hors chaîne principale.',
      example:
        'Un smart contract de prêt DeFi : l\'utilisateur dépose 10 ETH en collatéral, emprunte 5 000 USDC automatiquement. Si le prix de l\'ETH baisse sous le seuil de liquidation, le smart contract vend automatiquement le collatéral pour rembourser le prêt.',
      finnSays:
        'Ethereum, c\'est Bitcoin avec un cerveau : les smart contracts permettent de créer des banques, des bourses et des assurances sans intermédiaire !',
    },
  },

  // ─── Leçon 5 : ERC-20 ───────────────────
  {
    id: 'crypto-5',
    title: 'Tokens ERC-20',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le standard ERC-20 définit les règles pour créer des tokens fongibles sur Ethereum. Des milliers de tokens (USDC, UNI, LINK, AAVE) suivent ce standard.',
      keyPoints: [
        'ERC-20 : standard de token fongible sur Ethereum',
        'Fonctions : transfer(), approve(), balanceOf(), totalSupply()',
        'Permet la création de monnaies, tokens de gouvernance, utility tokens',
        'ERC-721 : standard pour les tokens non fongibles (NFT)',
      ],
      explanation:
        'ERC-20 (Ethereum Request for Comments 20) définit une interface standard que tous les tokens doivent implémenter : transfert de tokens, consultation du solde, autorisation de dépense par un tiers (approve/transferFrom pour les DEX). Cette standardisation permet l\'interopérabilité : tout token ERC-20 fonctionne avec tous les wallets, DEX et protocoles DeFi compatibles. Un token ERC-20 peut représenter une monnaie (USDC), un droit de vote (UNI), un actif réel tokenisé ou une part dans un protocole.',
      example:
        'Créer un token ERC-20 ne prend que ~20 lignes de code Solidity. Le token USDC (Circle) est un ERC-20 adossé 1:1 au dollar, avec >30 Md$ en circulation, utilisable sur tous les protocoles DeFi.',
      finnSays:
        'ERC-20, c\'est la norme ISO des tokens crypto. Grâce à ce standard, tous les tokens parlent le même langage et fonctionnent partout !',
    },
  },

  // ─── Leçon 6 : Stablecoins ──────────────
  {
    id: 'crypto-6',
    title: 'Stablecoins',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Les stablecoins sont des cryptomonnaies dont la valeur est arrimée à un actif de référence (dollar, euro). Ils sont le pont entre la finance traditionnelle et la DeFi.',
      keyPoints: [
        'Fiat-backed : USDC, USDT (réserves en dollars/treasuries)',
        'Crypto-backed : DAI (sur-collatéralisation en ETH)',
        'Algorithmique : mécanisme d\'offre/demande (risque de depeg, cf. UST/Luna)',
        'Volume quotidien : >100 Md$, supérieur à Visa+Mastercard combinés',
      ],
      explanation:
        'Les stablecoins fiat-backed (USDC, USDT) maintiennent 1:1 avec le dollar grâce à des réserves (cash, T-bills). L\'émetteur doit publier des attestations régulières. Les stablecoins crypto-backed (DAI de MakerDAO) utilisent la sur-collatéralisation : pour emprunter 100 DAI, il faut déposer ~150$ d\'ETH. Les stablecoins algorithmiques tentent de maintenir le peg par des mécanismes de marché, mais le crash de UST/Luna (40 Md$ évaporés en mai 2022) a montré leur fragilité.',
      example:
        'USDC (Circle) : 30 Md$ de réserves (80% en T-bills, 20% en cash), audité mensuellement par Deloitte, régulé comme un service de transfert de fonds aux US. Utilisé massivement en DeFi et paiements.',
      finnSays:
        'Le stablecoin, c\'est le dollar version crypto : stable, rapide et utilisable 24/7. Mais vérifie toujours ce qui est derrière la réserve !',
    },
  },

  // ─── Leçon 7 : DeFi ─────────────────────
  {
    id: 'crypto-7',
    title: 'DeFi : Finance Décentralisée',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La DeFi (Decentralized Finance) récrée les services financiers traditionnels (prêt, emprunt, échange, assurance) via des smart contracts, sans intermédiaire centralisé.',
      keyPoints: [
        'TVL (Total Value Locked) : mesure de la taille de la DeFi (>80 Md$)',
        'Lending/Borrowing : Aave, Compound (prêt/emprunt décentralisé)',
        'DEX : Uniswap, Curve (échange décentralisé)',
        'Composabilité : les protocoles s\'imbriquent comme des Lego (money legos)',
      ],
      explanation:
        'La DeFi élimine les intermédiaires financiers en codant les règles dans des smart contracts transparents et auditable. N\'importe qui peut prêter ses actifs (et recevoir des intérêts), emprunter (avec collatéral), échanger des tokens (DEX) ou s\'assurer. Les taux d\'intérêt sont déterminés algorithmiquement par l\'offre et la demande. La composabilité permet de combiner plusieurs protocoles dans une même transaction (flash loans). Les risques incluent les bugs de smart contracts, les oracle attacks et les liquidations en cascade.',
      example:
        'Circuit DeFi : 1) Déposer 10 ETH sur Aave → recevoir des intérêts (3%/an). 2) Emprunter 5 000 USDC contre ces ETH. 3) Fournir les USDC en liquidité sur Uniswap → gagner des frais de trading. Rendement combiné : ~8-12%.',
      finnSays:
        'La DeFi, c\'est la banque sans la banque : les smart contracts remplacent le banquier. C\'est transparent, ouvert 24/7, et accessible à tous !',
    },
  },

  // ─── Leçon 8 : Aave ─────────────────────
  {
    id: 'crypto-8',
    title: 'Aave : Protocole de Lending',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Aave est le premier protocole de prêt/emprunt décentralisé avec plus de 15 Md$ de TVL. Il permet de prêter des actifs pour gagner des intérêts et d\'emprunter contre du collatéral.',
      keyPoints: [
        'Pools de liquidité : les prêteurs déposent dans un pool commun',
        'Taux variables : déterminés par le taux d\'utilisation du pool',
        'Sur-collatéralisation : LTV typique 50-80% selon l\'actif',
        'Flash loans : emprunter et rembourser dans la même transaction',
      ],
      explanation:
        'Sur Aave, les prêteurs déposent des actifs dans des pools et reçoivent des aTokens (aETH, aUSDC) qui accumulent les intérêts en temps réel. Les emprunteurs déposent du collatéral (ex : ETH) et empruntent un autre actif (ex : USDC). Si le ratio collatéral/emprunt tombe sous le seuil de liquidation (Health Factor < 1), n\'importe qui peut liquider la position et recevoir un bonus de 5-10%. Les taux suivent une courbe d\'utilisation : plus le pool est utilisé, plus les taux montent pour attirer des prêteurs.',
      formula: 'Health Factor = Σ(Collatéral × LTV) / Σ(Emprunts)\nLiquidation si HF < 1',
      example:
        'Alice dépose 10 ETH (30 000$) sur Aave. LTV max de l\'ETH = 80%. Elle emprunte 20 000 USDC. Health Factor = 30000×0.80/20000 = 1.2. Si l\'ETH baisse de 20% → HF = 24000×0.80/20000 = 0.96 → liquidation partielle.',
      finnSays:
        'Aave, c\'est comme une banque automatique : tu déposes, tu gagnes des intérêts ; tu empruntes, tu paies des intérêts. Tout ça sans papiers ni rendez-vous !',
    },
  },

  // ─── Leçon 9 : Uniswap ──────────────────
  {
    id: 'crypto-9',
    title: 'Uniswap : DEX et AMM',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Uniswap est le plus grand exchange décentralisé (DEX). Il utilise un modèle d\'Automated Market Maker (AMM) qui remplace le carnet d\'ordres traditionnel par des pools de liquidité.',
      keyPoints: [
        'AMM : pas de carnet d\'ordres, la liquidité est fournie par des pools',
        'Formule x × y = k : produit constant des réserves',
        'Fournisseurs de liquidité (LP) : déposent 50/50 et gagnent des frais (0.3%)',
        'Impermanent loss : perte pour les LP si les prix divergent',
      ],
      explanation:
        'Dans un AMM, le prix est déterminé par le ratio des réserves dans le pool. La formule x × y = k garantit que le produit des quantités reste constant. Quand un trader achète du token A, il ajoute du token B au pool et retire du A : le prix de A augmente. Les LP (Liquidity Providers) déposent une paire de tokens (ex : ETH/USDC à 50/50) et reçoivent des frais de trading (0.3% par swap). L\'impermanent loss survient quand le prix d\'un token diverge : le LP aurait mieux fait de simplement garder ses tokens.',
      formula: 'x × y = k (constante)\nPrix = y/x (token A en termes de token B)\nImpermanent Loss = 2√(ratio) / (1+ratio) − 1',
      example:
        'Pool ETH/USDC : 100 ETH et 300 000 USDC (prix 3 000$/ETH). Un trader achète 1 ETH → il paie 3 030 USDC (slippage). Nouveau état : 99 ETH / 303 030 USDC. Prix = 3 061$/ETH.',
      finnSays:
        'Uniswap a réinventé le trading : plus besoin de carnet d\'ordres ni de broker. Une formule mathématique et un pool de liquidité, et voilà une bourse décentralisée !',
    },
  },

  // ─── Leçon 10 : Yield Farming ────────────
  {
    id: 'crypto-10',
    title: 'Yield Farming',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Le yield farming consiste à maximiser les rendements en déplaçant des actifs entre différents protocoles DeFi pour capter les meilleures opportunités (taux, récompenses, airdrops).',
      keyPoints: [
        'Stratégie : déposer, emprunter, fournir de la liquidité pour maximiser le rendement',
        'Récompenses en tokens de gouvernance (UNI, AAVE, COMP)',
        'APY vs APR : APY inclut les intérêts composés',
        'Risques : impermanent loss, smart contract risk, rug pull',
      ],
      explanation:
        'Le yield farming est né en 2020 (DeFi Summer) quand les protocoles ont commencé à distribuer des tokens de gouvernance aux utilisateurs (liquidity mining). Les stratégies vont du simple dépôt en lending (5-10% APY) à des stratégies complexes imbriquant plusieurs protocoles (leverage looping : déposer, emprunter, re-déposer). Les rendements élevés (50-1000% APY) sont souvent temporaires et financés par l\'émission de tokens, ce qui dilue leur valeur. La durabilité du rendement est la question clé.',
      formula: 'APY = (1 + APR/n)^n − 1 (avec n périodes de composition)',
      example:
        'Stratégie : 1) Déposer 10 000 USDC sur Aave (4% APY). 2) Emprunter 7 000 USDC d\'ETH. 3) Fournir l\'ETH en liquidité sur Curve (8% APY + récompenses CRV). Rendement total ≈ 15% APY, mais risque de liquidation si l\'ETH chute.',
      finnSays:
        'Le yield farming, c\'est la chasse au rendement version crypto. Attention : les APY à 3 chiffres sont souvent trop beaux pour durer !',
    },
  },

  // ─── Leçon 11 : NFT ─────────────────────
  {
    id: 'crypto-11',
    title: 'NFT : Tokens Non Fongibles',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'Les NFT (Non-Fungible Tokens) sont des tokens uniques représentant la propriété d\'un actif numérique (art, musique, immobilier virtuel) ou physique (certificat, titre de propriété).',
      keyPoints: [
        'ERC-721 et ERC-1155 : standards NFT sur Ethereum',
        'Non fongible : chaque token est unique (vs ERC-20 interchangeables)',
        'Cas d\'usage : art, gaming, identité, certificats, immobilier tokenisé',
        'Royalties : l\'artiste touche un % sur chaque revente',
      ],
      explanation:
        'Un NFT est un certificat de propriété numérique stocké sur la blockchain. Contrairement aux cryptomonnaies (fongibles), chaque NFT est unique avec des métadonnées propres (image, attributs, historique). Les marketplaces (OpenSea, Blur) permettent l\'achat/vente. Au-delà de l\'art spéculatif (CryptoPunks, Bored Apes), les NFT trouvent des applications dans le gaming (actifs in-game transférables), l\'identité décentralisée (SBT - Soulbound Tokens), la billetterie et la tokenisation d\'actifs réels (RWA).',
      example:
        'Un promoteur tokenise un immeuble de 10 M€ en 10 000 NFT de 1 000€ chacun. Chaque NFT représente une fraction de propriété et donne droit à une part des loyers, transférable instantanément sur la blockchain.',
      finnSays:
        'Les NFT, ce n\'est pas que des images de singes ! C\'est une technologie de certification qui peut révolutionner la propriété, l\'identité et la finance !',
    },
  },

  // ─── Leçon 12 : Tokenomics ──────────────
  {
    id: 'crypto-12',
    title: 'Tokenomics',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'La tokenomics est l\'étude de l\'économie d\'un token : son offre, sa distribution, ses mécanismes d\'incitation et sa valeur. C\'est l\'analyse fondamentale de la crypto.',
      keyPoints: [
        'Supply : total supply, circulating supply, max supply',
        'Distribution : team, investisseurs, communauté, trésorerie, vesting',
        'Mécanismes : burn (déflation), staking (rémunération), emission schedule',
        'Utilité : gouvernance, paiement de frais, accès aux services',
      ],
      explanation:
        'Une bonne tokenomics aligne les intérêts de tous les participants. L\'offre totale et le calendrier d\'émission déterminent l\'inflation. Le vesting (déblocage progressif) empêche les insiders de vendre massivement au lancement. Les mécanismes de burn (destruction de tokens) créent une pression déflationniste (Ethereum brûle des ETH via EIP-1559). Le staking rémunère les détenteurs qui sécurisent le réseau. L\'utilité du token (gouvernance, frais, accès) crée la demande organique. Un projet sans utilité réelle est purement spéculatif.',
      formula: 'FDV (Fully Diluted Valuation) = Prix × Total Supply\nMC (Market Cap) = Prix × Circulating Supply\nMC/FDV ratio : plus il est bas, plus la dilution future est importante',
      example:
        'Token XYZ : total supply 1 Md, circulating 200 M (20%), prix 5$. MC = 1 Md$, FDV = 5 Md$. Vesting : 30% team (4 ans cliff), 20% investisseurs (2 ans), 50% communauté. MC/FDV = 20% → attention, 80% de l\'offre n\'est pas encore en circulation.',
      finnSays:
        'La tokenomics, c\'est le business plan d\'un token. Si l\'offre explose sans demande, le prix s\'effondre. Toujours vérifier le vesting schedule !',
    },
  },

  // ─── Leçon 13 : MiCA ───────────────────
  {
    id: 'crypto-13',
    title: 'Réglementation MiCA',
    xp: 200,
    duration: '30 min',
    content: {
      introduction:
        'Le règlement MiCA (Markets in Crypto-Assets) est le cadre réglementaire européen pour les crypto-actifs, entré en vigueur en 2024. C\'est le premier cadre complet au monde.',
      keyPoints: [
        'Catégories : EMT (e-money tokens), ART (asset-referenced tokens), autres crypto-actifs',
        'Agrément CASP (Crypto-Asset Service Provider) obligatoire',
        'Stablecoins : réserves réglementées, limitation des volumes pour les non-EUR',
        'Passeport européen : un agrément = accès à tout le marché UE',
      ],
      explanation:
        'MiCA classe les crypto-actifs en trois catégories avec des exigences croissantes. Les EMT (stablecoins adossés à une seule monnaie) doivent être émis par un établissement de crédit ou de monnaie électronique avec des réserves 1:1. Les ART (adossés à plusieurs actifs ou matières premières) ont des exigences supplémentaires de gouvernance et de réserves. Les CASP (exchanges, custodians) doivent obtenir un agrément avec des exigences de capital, de cybersécurité et de protection des clients. MiCA exclut la DeFi « vraiment décentralisée » et les NFT uniques.',
      example:
        'Binance en Europe sous MiCA : doit obtenir un agrément CASP dans un État membre, séparer les fonds des clients, publier un whitepaper pour chaque token listé, et respecter les obligations AML/KYC. Le passeport permet d\'opérer dans les 27 pays.',
      finnSays:
        'MiCA, c\'est la crypto qui met le costume-cravate : des règles claires pour protéger les investisseurs tout en laissant l\'innovation se développer !',
    },
  },

  // ─── Leçon 14 : Custody ─────────────────
  {
    id: 'crypto-14',
    title: 'Custody et Sécurité',
    xp: 200,
    duration: '25 min',
    content: {
      introduction:
        'La custody (conservation) des crypto-actifs est un enjeu critique : « Not your keys, not your coins. » Les solutions vont du wallet personnel au custodian institutionnel.',
      keyPoints: [
        'Hot wallet : connecté à internet, pratique mais risqué (MetaMask)',
        'Cold wallet : hors ligne, plus sécurisé (Ledger, Trezor)',
        'Custodian institutionnel : Coinbase Custody, Fireblocks, BitGo',
        'MPC (Multi-Party Computation) : clé privée fragmentée entre plusieurs parties',
      ],
      explanation:
        'La clé privée est l\'unique preuve de propriété en crypto. Si elle est perdue ou volée, les actifs sont irrécupérables. Les hot wallets (logiciels connectés) sont pratiques mais exposés aux hacks. Les cold wallets (hardware) isolent la clé privée. Les custodians institutionnels (requis par MiCA pour les CASP) utilisent des architectures multi-signature et MPC pour sécuriser les actifs. Le choix entre self-custody et custody externe dépend du profil de risque et des obligations réglementaires.',
      example:
        'FTX (2022) : l\'exchange a utilisé les fonds des clients pour combler les pertes de sa filiale Alameda. 8 Md$ perdus. Un cold wallet personnel aurait protégé les utilisateurs. Depuis, la ségrégation des actifs est obligatoire sous MiCA.',
      finnSays:
        'En crypto, la clé privée c\'est la clé de ton coffre-fort. Si quelqu\'un d\'autre la détient, c\'est lui qui possède tes actifs, pas toi !',
    },
  },

  // ─── Leçon 15 : Cas Protocole ───────────
  {
    id: 'crypto-15',
    title: 'Cas Pratique : Analyser un Protocole DeFi',
    xp: 200,
    duration: '40 min',
    content: {
      introduction:
        'Analysons un protocole DeFi de lending comme un analyste financier : tokenomics, revenus, TVL, risques et valorisation.',
      keyPoints: [
        'Métriques clés : TVL, revenus du protocole, users actifs, token price',
        'Tokenomics : distribution, vesting, utilité, émission',
        'Analyse des risques : smart contract, oracle, liquidité, réglementaire',
        'Valorisation : P/Revenue, P/TVL, comparaison avec TradFi',
      ],
      explanation:
        'Protocole analysé (type Aave) : TVL = 15 Md$, revenus annuels = 200 M$ (fees), token market cap = 2 Md$, FDV = 3 Md$. P/Revenue = 10x (vs banque TradFi à 3-5x PE → prime pour la croissance et la décentralisation). Sécurité : 20+ audits, bug bounty 10 M$, 5 ans sans hack majeur. Tokenomics : 80% en circulation, staking = 12% de l\'offre, gouvernance active (50+ propositions/an). Risques : réglementation (CASP sous MiCA ?), concurrence (nouveaux protocoles), risque systémique DeFi (cascade de liquidations).',
      formula: 'P/Revenue = Market Cap / Revenus annuels\nP/TVL = Market Cap / TVL (indicateur de compétitivité)\nRevenue/TVL = rendement effectif du protocole',
      example:
        'Comparaison : Aave P/Rev = 10x, Compound P/Rev = 15x, MakerDAO P/Rev = 8x. Aave semble raisonnablement valorisé. Revenue/TVL : Aave 1.3%, Compound 0.8% → Aave monétise mieux sa liquidité.',
      finnSays:
        'Analyser un protocole DeFi, c\'est comme analyser une fintech : regarde les revenus, les utilisateurs, la tokenomics et surtout les risques de smart contract !',
    },
  },

  // ─── Leçon 16 : Examen Final ────────────
  {
    id: 'crypto-16',
    title: 'Examen Final : Crypto & Blockchain',
    xp: 200,
    duration: '45 min',
    content: {
      introduction:
        'Cet examen final couvre l\'ensemble de l\'écosystème crypto : blockchain, Bitcoin, Ethereum, DeFi, tokenomics, réglementation et sécurité.',
      keyPoints: [
        'Comprendre les mécanismes de consensus (PoW, PoS) et leur impact',
        'Maîtriser les protocoles DeFi (lending, DEX, yield farming)',
        'Analyser la tokenomics et la valorisation d\'un projet',
        'Connaître le cadre réglementaire MiCA et les enjeux de custody',
      ],
      explanation:
        'La crypto-finance est un écosystème en mutation rapide. La blockchain résout le problème de la confiance décentralisée. Bitcoin est une réserve de valeur programmée. Ethereum permet la finance programmable (DeFi). Les stablecoins font le pont avec la finance traditionnelle. La tokenomics détermine la valeur à long terme d\'un projet. MiCA encadre le marché en Europe. La custody est le maillon critique de la sécurité. L\'investisseur crypto avisé combine compréhension technique, analyse financière et vigilance réglementaire.',
      example:
        'Concepts clés : Blockchain = registre distribué immuable. PoW = sécurité par l\'énergie. PoS = sécurité par le capital. DeFi = finance sans intermédiaire. AMM : x×y=k. Tokenomics = MC vs FDV. MiCA = réglementation EU.',
      finnSays:
        'La crypto, c\'est un nouveau paradigme financier. Comprendre la technologie, analyser les fondamentaux et respecter la réglementation : voilà les clés du succès !',
    },
  },
];
