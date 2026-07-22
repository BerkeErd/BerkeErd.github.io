// Central game data for Beruke Games.
// imageBg: optional backdrop for transparent key art (omit for opaque images).
// categories: featured | released | playable | jam | archive.
//   Arcade filters use featured / jam / archive directly; the "Play in Browser"
//   and "Mobile" filters are derived from live webGL / googlePlay links.
//   released / playable are kept as metadata (also feeds Similar Games matching).
// typeBadges: project type / history badges, accessBadges: build & playability badges.
// status: press-facing status label. order: display order (lower = earlier).
const projectDetails = {
  "wizards-path": {
    name: "Wizard's Path",
    image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4669130/6da6178c4218ffd12bd50fe343103ac22580410a/capsule_616x353.jpg",
    description: "Build a wildly different mage every run in a fast-paced action roguelite. Combine spell schools, loot, boons, items, and risky challenges to survive endless enemy waves, defeat bosses, and push your most broken build as far as it can go. Currently in development - wishlist it now on Steam and try the free demo in your browser.",
    googlePlay: "#",
    steam: "https://store.steampowered.com/app/4669130/Wizards_Path_Palette_of_Spells/",
    itch: "https://beruke.itch.io/wizards-path-trial",
    webGL: "https://itch.io/embed-upload/17920362?color=000000",
    youtube: "#",
    additionalImages: [],
    cabinetColor: "#2a1e4a",
    neonColor: "#ffcc00",
    turkish: false,
    categories: ["featured", "playable"],
    typeBadges: ["Featured Game", "In Development", "Action Roguelite"],
    cardTypeBadges: ["Featured", "Web Demo"],
    accessBadges: ["Free Web Demo", "Steam Wishlist"],
    status: "In Development",
    order: 1,
    linkNotes: {
      steam: "Wishlist on Steam",
      itch: "Free demo on itch.io",
      webGL: "Play the demo in your browser"
    }
  },
  "flagRush": {
    name: "Flag Rush",
    image: "https://play-lh.googleusercontent.com/UroCXQ6nWrh9_eCaLsJi_ASxTW-FraCEfbM_ywGCLgyAKApSDGrhegkqLyj-KYH7Wsg=w240-h480-rw",
    description: "Choose a country flag—or create a racer from any image—then watch it compete in marble races, elimination rounds, endless survival, and football tournaments.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.BerukeGames.FlagRush",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/D1YdIXqXmUcHKm2w8twGTkwoe_Whbe_fGuqCfdMkxzlMZdJAfkM6xUNLGlytVwT9AvY=w2560-h1440-rw", "https://play-lh.googleusercontent.com/pffpS8KyFyOCXngUg7Uovb4CBl0Wr_NywHp_G-a3G1xHVh_3u1HuDvXP7A8IMWQMmcU=w2560-h1440-rw"],
    cabinetColor: "#000000",
    neonColor: "#FFFFFF",
    turkish: false,
    categories: ["featured", "released", "playable"],
    typeBadges: ["Featured Game", "Marble Racing Simulation", "Tournament Simulator", "Custom Racers"],
    cardTypeBadges: ["Featured", "10K+ Downloads"],
    accessBadges: ["Google Play", "10K+ Downloads"],
    status: "Released",
    order: 2,
    linkNotes: {
      googlePlay: "Android version on Google Play"
    }
  },
  "stick-slasher": {
    name: "Stick Slasher",
    image: "https://cdn.cloudflare.steamstatic.com/steam/apps/2549950/header.jpg?t=1693580140",
    description: "Stick Slasher is a chaotic physics-based 2D fighting game where every swing can disarm, dismember, or send enemies flying.",
    hookOverride: "Stick Slasher is a chaotic physics-based 2D fighting game where every swing can disarm, dismember, or send enemies flying. Survive increasingly dangerous waves, show mercy to defeated enemies, and compete for high scores across multiple platforms.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.BerukeGames.StickSlasher",
    steam: "https://store.steampowered.com/app/2549950/Stick_Slasher/",
    itch: "https://beruke.itch.io/sslasher",
    playgama: "https://playgama.com/game/stick-slasher",
    webGL: "https://itch.io/embed-upload/8532900?color=0c0c0c",
    youtube: "https://www.youtube.com/embed/MSdYlAcypdM",
    additionalImages: ["https://cdn.cloudflare.steamstatic.com/steam/apps/2549950/ss_a11d221e03480e3dc92c0ad651c20c05af3c1600.600x338.jpg?t=1693580140", "https://cdn.cloudflare.steamstatic.com/steam/apps/2549950/ss_466284956c1f1507911b6d83b427114172437fbc.600x338.jpg?t=1693580140"],
    cabinetColor: "#F1F1F1",
    neonColor: "#00ff39",
    turkish: false,
    categories: ["featured", "released", "playable", "jam"],
    typeBadges: ["Physics Fighter", "Originally Created for Mağara Jam #4"],
    cardTypeBadges: ["Featured", "10K+ Downloads"],
    accessBadges: ["Steam", "Android", "Web", "Playgama", "10K+ Android Downloads"],
    status: "Released",
    order: 3,
    linkNotes: {
      steam: "Full PC release and experimental co-op beta",
      googlePlay: "Android version",
      itch: "Browser and downloadable versions",
      webGL: "Free browser version",
      playgama: "Play in browser on Playgama"
    },
    extraSections: [
      {
        title: "Experimental Online Co-op Beta",
        text: "Steam only. The Steam version includes an optional experimental two-player online co-op beta. It is still being tested, so synchronization problems, connection issues, visual inconsistencies, bugs, and incomplete localization may occur. The original single-player mode remains the primary and most polished way to play Stick Slasher."
      }
    ]
  },
  "sesli-sorulu-milyonlar": {
    name: "Sesli Sorulu Milyonlar",
    image: "https://play-lh.googleusercontent.com/aH_-37UFLVfxqSQXQlKS3Gug2HVY_mKaJ5B72JivVsdvSgCPLXlL76SYZTA7GR6hwZjT=w416-h235-rw",
    description: "A Turkish trivia game featuring voiced questions, music and sound-based rounds, and four different lifelines.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.Beruke.SesliSoruMilyoner2021",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/emxtrseac2hPQv4wlS0wtbleLRea5rF1aqg4Y8P-UhJ4OMdg8E99_QkO-6uZDgajw-0=w2560-h1440-rw", "https://play-lh.googleusercontent.com/Zy0kebYkz72gwV6zMgrlOOd1hUeWQp4-rU_VjBE4Rx07R9CjjXRByhlK2ivNSzPOJw=w2560-h1440-rw"],
    cabinetColor: "#F1F1F1",
    neonColor: "#6000bf",
    turkish: true,
    categories: ["released", "playable"],
    typeBadges: ["Turkish Trivia", "Audio Questions"],
    cardTypeBadges: ["Released", "10K+ Downloads"],
    accessBadges: ["Turkish Only", "Google Play", "10K+ Downloads"],
    status: "Released",
    order: 22
  },
  "ability-runner": {
    name: "Ability Runner",
    image: "https://img.itch.zone/aW1nLzIyMzA5NDUwLnBuZw==/original/1ftlpm.png",
    description: "Ability Runner - Evolve is a 2D endless runner with Turkish and English language support, developed with Unity for mobile and released on Jan 12, 2022. Each character has a unique passive ability, and during a run you pick one of several special abilities at each level to evolve your character and keep running. The game was later retired from Google Play; an archived Android build remains available on itch.io.",
    googlePlay: "#",
    steam: "#",
    itch: "https://berukegameslegacy.itch.io/ability-runner-evolve-android-mobile-game",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/AsrrB4QX8cme5A6f_372xy1eIBXN75kBB6durgWL3dAQUgUSkZIN9tmy31RTmI6gO5A=w2560-h1440-rw", "https://play-lh.googleusercontent.com/kCi8SXO0jakfeZvqWBMpCjjdEXs2_c0NGu-kfyJnv8CUaHGAKT_fBFhhTdc1CBj9eJc=w2560-h1440-rw"],
    cabinetColor: "#000000",
    neonColor: "#ddf8ff",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Retired Release", "2D Endless Runner", "Ability Drafting"],
    cardTypeBadges: ["Retired", "Ability Drafting"],
    accessBadges: ["Archived Android Build"],
    status: "Retired Release",
    order: 60,
    distributionNote: "No longer distributed on Google Play. An archived Android build is preserved on itch.io.",
    linkNotes: {
      itch: "Archived Android build"
    }
  },
  "patlat-bi-kelime": {
    name: "Patlat Bi Kelime",
    image: "https://play-lh.googleusercontent.com/2gU4ecNsL31uBwAMGGdgJ89uBQSU8_N-PKqxfgwXxHlIRHvZye8PQAki-Lp7JL18CcU=w240-h480-rw",
    description: "A timed Turkish word game built around finding valid words before a bomb fuse reaches its end. Built with Unity and released on May 16, 2022, inspired by jklm.fun. No longer publicly distributed.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/93OOOSOGiqF123bhBgSBCHFUI897XxfRlyGehJGOKhm7mkHgYfcH9cA4jTCbfmDfzqBO=w526-h296-rw", "https://play-lh.googleusercontent.com/apNCK561KuakiNvY2BUBCTfs8ZMLFWenjjnbA4Y8512lg__e1ylB-wKASAgB8f43_Q=w526-h296-rw"],
    cabinetColor: "#F1F1F1",
    neonColor: "#ffffff",
    turkish: true,
    categories: ["archive"],
    typeBadges: ["Retired Mobile Release", "Word Game"],
    cardTypeBadges: ["Retired", "Word Game"],
    accessBadges: ["Turkish Only", "No Longer Distributed"],
    status: "Retired Mobile Release",
    order: 67,
    distributionNote: "This project is no longer publicly distributed."
  },
  "bubble-pass": {
    name: "Bubble Pass",
    image: "https://img.itch.zone/aW1nLzIyMzA5NDQ1LnBuZw==/original/Z49S39.png",
    description: "Bubble Pass is a color-matching arcade game built for mobile with Unity, released on Jun 14, 2022. You change the color of the bottom of the cup to match the falling balls so they can pass through, with a PlayFab-powered leaderboard. The game was later retired from Google Play; an archived Android build remains available on itch.io.",
    googlePlay: "#",
    steam: "#",
    itch: "https://berukegameslegacy.itch.io/ability-runner",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/6tS-hW7NLv3O2mkIKkJJ9PlG8SpzENXy-ACCbaV2XkvEzKZCS3QpJruKDyQQWNvODMM=w526-h296-rw", "https://play-lh.googleusercontent.com/d6DZ_SXqMzrMnIIKVfpgb0YVf9DWt8950_yJs-GCpQqAoZy4XHsRfJdVk3pdpzgxxGE=w526-h296-rw"],
    cabinetColor: "#000000",
    neonColor: "#1ab5f2",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Retired Release", "Color-Matching Arcade", "PlayFab Leaderboard"],
    cardTypeBadges: ["Retired", "Color Matching"],
    accessBadges: ["Archived Android Build"],
    status: "Retired Release",
    order: 61,
    distributionNote: "No longer distributed on Google Play. An archived Android build is preserved on itch.io.",
    linkNotes: {
      itch: "Archived Android build"
    }
  },
  "simple-kalimba": {
    name: "Simple Kalimba",
    image: "https://play-lh.googleusercontent.com/fNIUcRC5siSf1VH5CSRmJLmhCC3fzbSXNqa_ePOsQieCotMTa66llKgDHalKS3UEqZg=w416-h235-rw",
    description: "A lightweight 17-key kalimba simulator featuring real kalimba sounds and simple color customization options.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.Beruke.SimpleKalimba",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/m6uyZFaL8DQ1D84Ef_uOHdjS-rcZblI8EmYN1jcZiDCAu63nOYxkoZwjJ2lCWcvW0joo=w2560-h1440-rw", "https://play-lh.googleusercontent.com/woU8BqnyI-Pg2YtnhXTUAqqbmgCJ5nesVATWqO9NYs3gEQuh-3fE2G4jucPmygC1qnRV=w2560-h1440-rw"],
    cabinetColor: "#F1F1F1",
    neonColor: "#8e2b08",
    turkish: false,
    categories: ["released", "playable"],
    typeBadges: ["Music Tool", "Instrument Simulator", "17 Keys"],
    cardTypeBadges: ["Released", "10K+ Downloads"],
    accessBadges: ["Google Play", "10K+ Downloads"],
    status: "Released",
    order: 24
  },
  "bilgi-kat": {
    name: "Bilgi Kat",
    image: "https://play-lh.googleusercontent.com/iCqe_1nUIeHO1x0qx0nc929_qAXL_PqH-H1-vPv2TKxNWhPOtaxeNH2YsnlO8Uo1IyE=w416-h235-rw",
    description: "A community-driven Turkish trivia project spanning 45 categories with a dynamic difficulty system. Questions were served from a Firebase Firestore backend, and players could submit their own questions and, after reaching a certain level, approve submissions from others - a lightweight moderation and content pipeline. The project also tracked per-player statistics and included an in-app question editor. Released on Aug 24, 2023. Online and community-dependent features are no longer maintained.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/XfDDe6QKd5IApgkCRWWaZ5ohWCoqQQdqlnmfRx1EBCTnH8RON0RtmdS4JW5fFkFzEJo=w2560-h1440-rw", "https://play-lh.googleusercontent.com/MmiH3tDQmbfOZd3RxuTB-elXtpzY9Sz5I16JQG7Rjr9FY3RVfmj1MMSgU7AUbYtXIQ=w2560-h1440-rw"],
    cabinetColor: "#000000",
    neonColor: "#f7ac1d",
    turkish: true,
    categories: ["archive"],
    typeBadges: ["Retired Mobile Release", "Trivia System Experiment", "Community Features", "Firebase Firestore", "Moderation Pipeline", "In-App Question Editor"],
    cardTypeBadges: ["Retired", "Trivia System"],
    accessBadges: ["Build Unavailable", "Backend Retired"],
    status: "Retired Mobile Release",
    order: 58,
    distributionNote: "No longer publicly distributed. Online and community-dependent features are no longer maintained."
  },
  "timeloop-traffic": {
    name: "TimeLoop Traffic",
    image: "https://play-lh.googleusercontent.com/BjNVTvEkKtDVvRgOhcy0MltQQTQj-A7aYpBT315xHNxvdXEGUs1ImmBKLJ4uBW9dlRM=w416-h235-rw",
    description: "Every completed route creates a clone that repeats your previous drive, gradually filling the city with traffic made from your own past runs.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/timeloop-traffic-autoclone-city",
    webGL: "https://itch.io/embed-upload/18438043?color=000000",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/fFkzusy5Llnkz8QcNGtDm_LPH1yKsJKckBPc2g66syNkcCN2RZaQa7enHVgoQC_lL-bz=w2560-h1440-rw", "https://play-lh.googleusercontent.com/p0E4399rmAHCJ5N3aliEdprUrTRLjFTJ657EIXjwUUTyrqyX4pm3a_V_6l8M1IxGszo4=w2560-h1440-rw"],
    cabinetColor: "#000000",
    neonColor: "#F1F1F1",
    // Key art is a transparent PNG drawn in black line art - it needs a light
    // backdrop or the title and clock icon vanish against the dark theme.
    imageBg: "#ffffff",
    turkish: false,
    categories: ["archive", "playable"],
    typeBadges: ["Retired Mobile Release", "Time-Loop System", "Past-Action Cloning", "Traffic Strategy"],
    cardTypeBadges: ["Retired", "Past-Action Cloning"],
    accessBadges: ["Browser Playable", "Web"],
    status: "Retired Mobile Release",
    order: 57,
    distributionNote: "No longer distributed on Google Play. A browser-playable version is preserved on itch.io.",
    linkNotes: {
      itch: "Browser version on itch.io",
      webGL: "Play in your browser"
    }
  },
  "rgb-square": {
    name: "RGB Square",
    image: "https://img.itch.zone/aW1nLzEyNTE0NTgwLnBuZw==/315x250%23c/Z1jLbC.png",
    description: "Balance red, green, and blue to reshape your character’s stats and abilities while color-draining enemies force you to adapt.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/rgb-square",
    webGL: "https://itch.io/embed-upload/13434563?color=000000",
    youtube: "#",
    additionalImages: ["https://img.itch.zone/aW1hZ2UvMjEyMzY2Ni8xMzk3OTczOC5wbmc=/original/sLLGu6.png", "https://img.itch.zone/aW1hZ2UvMjEyMzY2Ni8xMzk3OTc1MC5wbmc=/original/0e0AfX.png"],
    cabinetColor: "#000000",
    neonColor: "#FFFFFF",
    turkish: false,
    categories: ["jam", "playable"],
    typeBadges: ["Game Jam Project", "Post-Jam Update", "9th in Theme", "14th Overall / 147", "LootLocker Leaderboard"],
    cardTypeBadges: ["Game Jam", "14th / 147"],
    accessBadges: ["Playable Web"],
    status: "Released",
    order: 40
  },
  "suburban-racer": {
    name: "Suburban Drift Racer",
    image: "https://play-lh.googleusercontent.com/QiAYXXRSvlb4qzs4InPUn3xS3AclCFi-S1asAsvz6e8aHs70_xP9Sl5oJAINoEvfFqzA=w416-h235-rw",
    description: "My first completed 3D driving project, created as an early experiment with vehicle controls, cameras, environments, and mobile deployment. It was briefly released before being retired.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/Ry2xsLHSlWm-SXxSHv5MFolIjKKZPAMWlO3YwofnhcR-8T6wjzPyOMLjihJnWvnkVHg=w526-h296-rw", "https://play-lh.googleusercontent.com/COlE3MVcGix79sRONLYjMvTKDrNcA-SoiK14Jbsg4KBhxZ0KLqr5OtQ6_5s7oG7d3PE=w526-h296-rw"],
    cabinetColor: "#FFFFFF",
    neonColor: "#9acde1",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Retired Release", "First 3D Project"],
    cardTypeBadges: ["Retired", "First 3D Project"],
    accessBadges: ["Mobile Experiment", "Build Unavailable"],
    status: "Retired Release",
    order: 62,
    distributionNote: "This project is no longer publicly distributed."
  },
  "mystiCloned": {
    name: "MystiCloned",
    image: "https://cdn.magarajam.com/content/1700659987242751483734888.jpeg",
    description: "Developed in 72 hours for Magara Jam 2023, this game is a 2D Puzzle where you solve various puzzles by creating clones. You can swap places with your clones or freeze them to navigate through the challenges.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/mysticloned",
    webGL: "https://itch.io/embed-upload/13434525?color=04001d",
    youtube: "https://www.youtube.com/embed/eSFObQB12pw",
    additionalImages: ["https://cdn.magarajam.com/media/1700396006525672552436520.png", "https://cdn.magarajam.com/media/1700396008438161531669868.png"],
    cabinetColor: "#FFFFFF",
    neonColor: "#caa8ff",
    turkish: false,
    categories: ["jam", "playable"],
    typeBadges: ["Game Jam Project", "72-Hour Jam", "Clone Puzzle"],
    cardTypeBadges: ["Game Jam", "Clone Puzzle"],
    accessBadges: ["Playable Web"],
    status: "Released",
    order: 41
  },
  "junkman-Driver": {
    name: "Junkman Driver",
    image: "https://img.itch.zone/aW1hZ2UvMjQ2OTgzMi8xNDc4NDgzOC5qcGc=/347x500/T9EE32.jpg",
    description: "Drive a garbage-collecting car, tether scrap behind you, sell it for nitro, and swing the load into pursuing police.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/junkman-driver",
    webGL: "https://itch.io/embed-upload/13434631?color=000000",
    youtube: "#",
    additionalImages: ["https://img.itch.zone/aW1hZ2UvMjQ2OTgzMi8xNDc4NDg0MC5qcGc=/original/8H6mrX.jpg", "https://img.itch.zone/aW1hZ2UvMjQ2OTgzMi8xNDc4NDgzOS5qcGc=/original/ChdZiS.jpg"],
    cabinetColor: "#FFFFFF",
    neonColor: "#ab000a",
    turkish: false,
    categories: ["jam", "playable"],
    typeBadges: ["Game Jam Project", "Team Project", "Tether Physics", "Arcade Driving"],
    cardTypeBadges: ["Game Jam", "Tether Driving"],
    accessBadges: ["Playable Web"],
    status: "Released",
    order: 42
  },
  "potion-mutation": {
    name: "Potion Mutation",
    image: "https://img.itch.zone/aW1nLzE0ODU2ODg4LnBuZw==/315x250%23c/4kcdSm.png",
    description: "A three-day elemental puzzle where thrown potions mutate a creature’s stats and defenses, helping it survive hazards it could not pass before.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/potion-mutation",
    webGL: "https://itch.io/embed-upload/9613551?color=0f0f0f",
    youtube: "#",
    additionalImages: [],
    cabinetColor: "#FFFFFF",
    neonColor: "#c7fb00",
    turkish: false,
    categories: ["jam", "playable"],
    typeBadges: ["Game Jam Project", "Team Project", "Elemental Puzzle", "LootLocker Leaderboard"],
    cardTypeBadges: ["Game Jam", "Elemental Puzzle"],
    accessBadges: ["Playable Web"],
    status: "Released",
    order: 43
  },
  "Koy-Lideri": {
    name: "Köy Lideri",
    image: "https://img.itch.zone/aW1nLzE1MTQ2MjIwLnBuZw==/315x250%23c/DYARIg.png",
    description: "A technical prototype built to test AI-driven gameplay systems inside Unity. You play as a village leader whose decisions are shaped by AI-generated responses and events. Playable in the browser on itch.io; Turkish only.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/ky-lideri-yapay-zeka-oyunu",
    webGL: "#",
    youtube: "#",
    additionalImages: [],
    cabinetColor: "#FFFFFF",
    neonColor: "#ff90fa",
    turkish: true,
    categories: ["archive", "playable"],
    browserPlayable: true,
    typeBadges: ["Technical Prototype", "AI-Generated Events", "AI-Driven Dialogue"],
    cardTypeBadges: ["Prototype", "AI Events"],
    accessBadges: ["Turkish Only", "Playable Web"],
    status: "Technical Prototype",
    order: 63,
    linkNotes: {
      itch: "Playable in the browser on itch.io"
    }
  },
  "Dugum": {
    name: "Düğüm",
    image: "https://img.itch.zone/aW1nLzE2MjAzOTYxLmpwZWc=/347x500/rjbYQf.jpeg",
    description: "Düğüm is a puzzle game developed in 48 hours for Boğaziçi Game Jam 24. The game revolves around the theme of knots, where the trails you leave behind form complex patterns. You must guide your character to create these patterns while avoiding collisions with trails of the same color. Earning points requires strategic, quick movements and passing through different colored trails.",
    googlePlay: "#",
    steam: "#",
    itch: "https://beruke.itch.io/dm",
    webGL: "#",
    youtube: "https://www.youtube.com/embed/RTvjWkhlqmk",
    additionalImages: [],
    cabinetColor: "#000000",
    neonColor: "#FFFFFF",
    turkish: false,
    categories: ["jam", "playable"],
    browserPlayable: true,
    typeBadges: ["Game Jam Project", "48-Hour Jam", "Trail Puzzle"],
    cardTypeBadges: ["Game Jam", "48 Hours"],
    accessBadges: ["Playable Web"],
    status: "Released",
    order: 44,
    linkNotes: {
      itch: "Playable in the browser on itch.io"
    }
  },
  "bus-game": {
    name: "Bus Puzzle Prototype & Level Editor",
    slugOverride: "bus-game",
    image: "images/BusGame/Gameplay2.jpg",
    description: "A recruitment assignment focused on recreating a bus puzzle gameplay loop and building a custom Unity level editor. The editor supports board configuration, passenger and bus placement, tunnel setup, color assignment, direction controls, timing rules, and automatic level preparation. The main value of this project is the custom Unity editor tooling and the technical implementation behind it.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    github: "https://github.com/BerkeErd/BJC",
    additionalImages: ["images/BusGame/LevelEditor2.jpg", "images/BusGame/LevelEditor.jpg"],
    cabinetColor: "#FFFFFF",
    neonColor: "#ffffff",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Technical Prototype", "Recruitment Assignment", "Custom Level Editor", "Unity Editor Tooling"],
    cardTypeBadges: ["Case Study", "Level Editor"],
    accessBadges: ["Source Available"],
    status: "Technical Case Study",
    order: 55,
    detailCta: "View Case Study",
    linkNotes: {
      github: "Unity project and level editor source"
    }
  },
  "fluxeon": {
    name: "Fluxeon",
    image: "https://play-lh.googleusercontent.com/dvLaGTiXKK0fawZxNMeTjApjAU6BqE6Kn1bdUJivh-7cPN1motBOXRxH7pOMSot6NLQ=w240-h480-rw",
    description: "A one-touch, gravity-flipping arcade experiment: tap to rise, release to fall, and land on moving platforms for points as speeds increase and platforms shrink. Built with a minimalist visual style and a Google Play Games leaderboard. No longer publicly distributed.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: ["https://play-lh.googleusercontent.com/OX4DIClkyuh8K01SHJ2RxzHlKGUjqEmEjBWroLYON9apF0PkZxg31NS0BgK4pMiShG3R=w2560-h1440-rw", "https://play-lh.googleusercontent.com/BlOYSPkY4XxXicT32dITNs6n1bxkNOc6wtvII2N1WubyTQ8IB359v3NjMEXNb8GZC4L8=w2560-h1440-rw"],
    cabinetColor: "#000000",
    neonColor: "#c4c2e7",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Retired Mobile Release", "Arcade Experiment"],
    cardTypeBadges: ["Retired", "Arcade Experiment"],
    accessBadges: ["One-Touch Controls", "No Public Build"],
    status: "Retired Mobile Release",
    order: 59,
    distributionNote: "No longer publicly distributed."
  },
  "Cat-Race-Final": {
    name: "Purrfect Race",
    image: "https://play-lh.googleusercontent.com/u_3UcS4BdU_7n11o470ZvPbBVj1FvH4w7pQx1BJXGsIY3qc8JbtgoYdAso0wwhS--d4=w240-h480-rw",
    description: "Buy, train, and breed cats with different stats and abilities, enter them in races, or predict the winner to earn rewards.",
    googlePlay: "https://play.google.com/store/apps/details?id=com.BerukeGames.PurrfectRaceTurboPawsChamps",
    steam: "#",
    itch: "https://beruke.itch.io/purrfect-race",
    webGL: "https://itch.io/embed-upload/15307538?color=000000",
    youtube: "#",
    additionalImages: [
      "https://play-lh.googleusercontent.com/l9dZExOYTfhmV6RX8gRjOZyCdvDW8SIMONm1vYm_ruOlc3huF47uUfJIezTEpFlDSA=w526-h296-rw",
      "https://play-lh.googleusercontent.com/ODtOQMZ0lLzLtxAvU8gJCnrml47HGzRQWbZz54ds3_6MoDeyCiwKZb7a80DhfJPUZw=w526-h296-rw",
      "https://play-lh.googleusercontent.com/nAgpru9ajX9Us2Ey7mCmHXk19XW2DDRZdtF0OV-wT0QEkFxpubtLZN9sPZFAk-NV1N8t=w526-h296-rw",
      "https://play-lh.googleusercontent.com/kh4VejqPvnbRVPk0szXlHFJtJLkJa5eE_V6icsHrQMfn1oDuYzxRT3KQOJJHIow3W8s=w526-h296-rw"
    ],
    cabinetColor: "#FFFFFF",
    neonColor: "#ffd977",
    turkish: false,
    categories: ["released", "playable"],
    browserPlayable: true,
    typeBadges: ["Cat Racing", "Breeding & Training", "Stat Progression", "Race Prediction"],
    cardTypeBadges: ["Released", "Breed & Race"],
    accessBadges: ["Google Play", "Playable Web"],
    status: "Released",
    order: 21
  },
  "color-tubes": {
    name: "Color Tubes",
    image: "https://play-lh.googleusercontent.com/lSHlU-yGz4fXL5JGj3Wm1Wl1xCJGcN9bofyBJdykSJgiAjTxndNQlHI_FCnTieQwGYs=w240-h480-rw",
    description: "An original mobile puzzle prototype developed for a mobile publisher test. The project reached a playable release and market-testing stage, but development was discontinued after the initial test period.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    youtube: "#",
    additionalImages: [
      "https://play-lh.googleusercontent.com/9zuG9fI28C76GCB3o6zQXM1QkMB8NHbJobCtzRqQLwzRT5gAJxYiOdtDaJDWCR2KMA=w2560-h1440-rw",
      "https://play-lh.googleusercontent.com/2PRtTS2TCenNXLbI6U2ZAqLhlhWaZ0LSw-8MzUwVMf-VFiio1B85dmwYgXAXl3AdGRhQ=w2560-h1440-rw"
    ],
    cabinetColor: "#8fb3c5",
    neonColor: "#bf8234",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Retired Publisher Prototype", "Mobile Puzzle", "Publisher Test", "Market-Tested Prototype"],
    cardTypeBadges: ["Retired", "Publisher Test"],
    accessBadges: ["Build Unavailable"],
    status: "Retired Publisher Prototype",
    order: 64,
    distributionNote: "This project is no longer publicly distributed."
  },
  "rps-online": {
    name: "Rock Paper Scissors Online",
    image: "https://img.itch.zone/aW1nLzIwNzY1NjQyLnBuZw==/315x250%23c/qc2GYP.png",
    description: "An early online multiplayer prototype built with Unity WebGL, NativeWebSocket, Node.js, and Express. Players could create rooms, join through room codes, and synchronize match state through a lightweight backend. This was an early networking experiment created before the experimental online co-op work in Stick Slasher.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    github: "https://github.com/BerkeErd/TasKagitMakas",
    youtube: "#",
    additionalImages: [],
    cabinetColor: "#bf8234",
    neonColor: "#ffd600",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Offline Multiplayer Prototype", "WebSocket Experiment", "Unity WebGL", "Node.js / Express"],
    cardTypeBadges: ["Prototype", "WebSocket"],
    accessBadges: ["Backend Retired", "Source Available"],
    status: "Retired Prototype",
    order: 65,
    distributionNote: "The original backend was hosted on Glitch and is no longer available, so the playable online version has been retired.",
    detailCta: "View Development Notes",
    linkNotes: {
      github: "Client and server source code"
    }
  },
  "punch-up": {
    name: "Punch-Up",
    image: "https://i.postimg.cc/Dfbg5PRg/241207447-f66728bf-8988-4520-90b1-05d6fac290c9.png",
    description: "An unreleased student project developed collaboratively as a pixel-art fighting and progression experiment. The project explored character combat, rewards, upgrades, and working as part of a small development team. Your fighter earns cash by knocking out enemies, then spends it on upgrading strength, speed and special moves. The game targets mobile devices and has never been publicly released.",
    googlePlay: "#",
    steam: "#",
    itch: "#",
    webGL: "#",
    github: "https://github.com/BerkeErd/Unity-Game-School-Project",
    youtube: "#",
    additionalImages: [],
    cabinetColor: "#2d2d2d",
    neonColor: "#ff3366",
    turkish: false,
    categories: ["archive"],
    typeBadges: ["Unreleased Student Project", "Team Project", "Pixel-Art Fighter", "Mobile Prototype"],
    cardTypeBadges: ["Student Project", "Team Project"],
    accessBadges: ["No Public Build", "Source Available"],
    status: "Unreleased Student Project",
    order: 66,
    linkNotes: {
      github: "Project source code"
    }
  }
};

const LINK_DEFS = [
  { key: "googlePlay", icon: "fab fa-google-play", label: "Google Play" },
  { key: "steam",      icon: "fab fa-steam",       label: "Steam" },
  { key: "itch",       icon: "fab fa-itch-io",     label: "Itch.io" },
  { key: "playgama",   icon: "fas fa-gamepad",     label: "Playgama" },
  { key: "github",     icon: "fab fa-github",      label: "Source Code" }
];

const STATUS_COLORS = {
  "In Development": "#f39c12",
  "Released": "#27ae60",
  "Retired Release": "#7f8c8d",
  "Retired Mobile Release": "#7f8c8d",
  "Retired Publisher Prototype": "#7f8c8d",
  "Retired Prototype": "#7f8c8d",
  "Technical Prototype": "#5d6d7e",
  "Technical Case Study": "#2980b9",
  "Unreleased Student Project": "#8e44ad"
};

let scene, camera, renderer;
let particles, particleSystem;

function buildLinkButtons(game) {
  const frag = document.createDocumentFragment();
  LINK_DEFS.forEach(({ key, icon, label }) => {
    if (!game[key] || game[key] === '#') return;
    const a = document.createElement('a');
    a.href = game[key];
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'game-link-btn btn btn-outline-light m-1';
    const note = game.linkNotes && game.linkNotes[key];
    a.innerHTML = `<i class="${icon} mr-1"></i> ${label}`;
    if (note) a.title = note;
    frag.appendChild(a);
  });
  return frag;
}

function slugifyGamePage(value) {
  return value
    .replace(/[ğĞ]/g, 'g')
    .replace(/[üÜ]/g, 'u')
    .replace(/[şŞ]/g, 's')
    .replace(/[ıİ]/g, 'i')
    .replace(/[öÖ]/g, 'o')
    .replace(/[çÇ]/g, 'c')
    .replace(/['’]/g, '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getGamePageUrl(game) {
  return `games/${game.slugOverride || slugifyGamePage(game.name)}.html`;
}

function badgeClass(text, group) {
  const t = text.toLowerCase();
  if (t.includes('featured')) return 'badge-featured';
  if (t.includes('in development')) return 'badge-dev';
  if (t.includes('retired')) return 'badge-retired';
  if (t.includes('unreleased') || t.includes('student')) return 'badge-student';
  if (t.includes('jam')) return 'badge-jam';
  if (t.includes('prototype') || t.includes('recruitment') || t.includes('experiment')) return 'badge-prototype';
  if (t.includes('unavailable') || t.includes('no public') || t.includes('backend') ||
      t.includes('archived') || t.includes('distributed')) return 'badge-muted';
  if (t.includes('released')) return 'badge-released';
  return group === 'access' ? 'badge-access' : 'badge-type';
}

// The first card badge communicates project status; the optional second badge
// highlights one distinctive feature. Cards never render more than two badges.
function primaryCardBadge(p) {
  const cats = p.categories || [];
  if (cats.includes('featured')) return { text: 'Featured', cls: 'badge-featured' };
  if (cats.includes('archive')) {
    const s = (p.status || '').toLowerCase();
    if (s.includes('student')) return { text: 'Student Project', cls: 'badge-student' };
    if (s.includes('case study')) return { text: 'Case Study', cls: 'badge-type' };
    if (s.includes('prototype')) return { text: 'Prototype', cls: 'badge-prototype' };
    if (s.includes('retired')) return { text: 'Retired', cls: 'badge-retired' };
    return { text: 'Archive', cls: 'badge-muted' };
  }
  if (cats.includes('jam')) return { text: 'Game Jam', cls: 'badge-jam' };
  if (cats.includes('released')) return { text: 'Released', cls: 'badge-released' };
  return null;
}

function buildCabinetBadges(p) {
  const configured = (p.cardTypeBadges || []).slice(0, 2);
  if (configured.length) {
    return configured
      .map((text, index) => `<span class="cabinet-badge ${index === 0 ? badgeClass(text, 'type') : 'badge-access'}">${text.toUpperCase()}</span>`)
      .join('');
  }
  const primary = primaryCardBadge(p);
  if (!primary) return '';
  return `<span class="cabinet-badge ${primary.cls}">${primary.text.toUpperCase()}</span>`;
}

function initWebGL() {
  const canvas = document.getElementById('bg-canvas');

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;

  renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true,
    alpha: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const particlesGeometry = new THREE.BufferGeometry();
  const particleCount = 300; // Performans için sayıyı ayarlayabilirsiniz

  const positionArray = new Float32Array(particleCount * 3);
  const colorArray = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positionArray[i] = (Math.random() - 0.5) * 100;
    positionArray[i + 1] = (Math.random() - 0.5) * 100;
    positionArray[i + 2] = (Math.random() - 0.5) * 100;

    const colorType = Math.random();
    if (colorType < 0.5) {
      colorArray[i] = Math.random() * 0.6 + 0.4; // R
      colorArray[i + 1] = Math.random() * 0.3; // G
      colorArray[i + 2] = Math.random() * 0.1; // B
    } else {
      colorArray[i] = Math.random() * 0.1; // R
      colorArray[i + 1] = Math.random() * 0.6 + 0.4; // G
      colorArray[i + 2] = Math.random() * 0.4; // B
    }
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
  particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.3,
    transparent: true,
    opacity: 0.5,
    vertexColors: true,
    blending: THREE.AdditiveBlending
  });

  particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particleSystem);

  window.addEventListener('resize', onWindowResize);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);

  particleSystem.rotation.x += 0.0003;
  particleSystem.rotation.y += 0.0003;

  renderer.render(scene, camera);
}

function createArcadeCabinets() {
  const mainContainer = document.getElementById('arcade-machines');
  const archiveContainer = document.getElementById('archive-machines');

  mainContainer.innerHTML = '';
  archiveContainer.innerHTML = '';

  const entries = Object.entries(projectDetails)
    .sort((a, b) => (a[1].order || 99) - (b[1].order || 99));

  entries.forEach(([key, p]) => {
    const isArchive = (p.categories || []).includes('archive');
    const target = isArchive ? archiveContainer : mainContainer;
    const badges = buildCabinetBadges(p);
    const pageUrl = getGamePageUrl(p);
    const cta = p.detailCta || 'View Project';

    const controlsHtml = isArchive
      ? `<a class="view-project-link" href="${pageUrl}">${cta} <i class="fas fa-arrow-right"></i></a>`
      : `<div class="cabinet-controls">
            <div class="joystick"></div>
            <div class="buttons-array"><div class="arcade-button"></div><div class="arcade-button"></div><div class="arcade-button"></div><div class="arcade-button"></div></div>
          </div>`;

    target.insertAdjacentHTML('beforeend', `
      <div class="arcade-cabinet${isArchive ? ' archive-cabinet' : ''}${(p.categories || []).includes('featured') ? ' featured-cabinet' : ''}" data-project="${key}" tabindex="0" role="button" aria-label="Open details for ${p.name}">
        <div class="cabinet-body">
          <div class="cabinet-badges">${badges}</div>
          <div class="cabinet-screen">
            <img src="${p.image}" alt="${p.name} artwork" class="screen-content" loading="lazy"${p.imageBg ? ` style="background-color:${p.imageBg}"` : ''}>
            <div class="screen-glare"></div>
          </div>
          <div class="cabinet-header"><h3 style="color:${p.neonColor}">${p.name}</h3></div>
          ${controlsHtml}
        </div>
      </div>`);
  });

  document.querySelectorAll('.arcade-cabinet').forEach(cab => {
    cab.addEventListener('click', handleCabinetClick);
    cab.addEventListener('keydown', function(event) {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        handleCabinetClick.call(this);
      }
    });
  });

  // Let the View Project links navigate without opening the modal.
  document.querySelectorAll('.view-project-link').forEach(link => {
    link.addEventListener('click', event => event.stopPropagation());
  });

  updateSectionVisibility();
}

let currentFilter = 'all';
let englishOnly = false;

function filterCabinets() {
  document.querySelectorAll('.arcade-cabinet').forEach(cabinet => {
    const projectId = cabinet.getAttribute('data-project');
    const project = projectDetails[projectId];
    const categories = project.categories || [];

    // "web" and "mobile" are intent filters derived from live links;
    // the rest match the categories array (featured / jam / archive).
    const matchesFilter =
      currentFilter === 'all' ||
      (currentFilter === 'web' && (project.webGL !== '#' || project.browserPlayable === true || (project.playgama && project.playgama !== '#'))) ||
      (currentFilter === 'mobile' && project.googlePlay !== '#') ||
      categories.includes(currentFilter);
    const matchesLanguage = !englishOnly || !project.turkish;

    if (matchesFilter && matchesLanguage) {
      cabinet.style.display = 'block';

      gsap.fromTo(cabinet,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out", delay: Math.random() * 0.3 }
      );
    } else {
      cabinet.style.display = 'none';
    }
  });

  updateSectionVisibility();
}

function updateSectionVisibility() {
  const toggleSection = (sectionSel, containerSel) => {
    const section = document.querySelector(sectionSel);
    const container = document.querySelector(containerSel);
    if (!section || !container) return;
    const hasVisible = Array.from(container.querySelectorAll('.arcade-cabinet'))
      .some(el => el.style.display !== 'none');
    section.style.display = hasVisible ? '' : 'none';
  };

  toggleSection('.arcade-floor', '#arcade-machines');
  toggleSection('.archive-section', '#archive-machines');
}

function handleCabinetClick() {

  document.querySelectorAll('.arcade-cabinet').forEach(cab => {
    cab.classList.remove('active');
  });
  this.classList.add('active');

  const projectId = this.getAttribute('data-project');
  const project = projectDetails[projectId];

  showProjectDetails(project);
}

function showProjectDetails(project) {
  const detailsModal = document.querySelector('.game-details-modal');
  detailsModal.classList.add('active');

  // Only short, high-signal statuses get the header pill; archive projects
  // already communicate their state through the badge rows below.
  let statusMessage = '';
  if (project.status === 'In Development' || project.status === 'Released') {
    const color = STATUS_COLORS[project.status] || '#7f8c8d';
    statusMessage = `<div class="game-status" style="background-color:${color};">${project.status.toUpperCase()}</div>`;
  }

  let badgeRows = '';
  const typeBadges = project.typeBadges || [];
  const accessBadges = project.accessBadges || [];
  if (typeBadges.length || accessBadges.length) {
    const typeHtml = typeBadges.map(text => `<span class="modal-badge ${badgeClass(text, 'type')}">${text}</span>`).join('');
    const accessHtml = accessBadges.map(text => `<span class="modal-badge ${badgeClass(text, 'access')}">${text}</span>`).join('');
    badgeRows = `<div class="modal-badge-rows">
      ${typeHtml ? `<div class="modal-badge-row"><span class="modal-badge-label">Project</span>${typeHtml}</div>` : ''}
      ${accessHtml ? `<div class="modal-badge-row"><span class="modal-badge-label">Availability</span>${accessHtml}</div>` : ''}
    </div>`;
  }

  const distributionNote = project.distributionNote
    ? `<p class="distribution-note">${project.distributionNote}</p>`
    : '';

  const linksContainer = document.createElement('div');
  linksContainer.className = 'game-links d-flex flex-wrap';
  linksContainer.appendChild(buildLinkButtons(project));

  if (project.webGL !== '#') {
    const playBtn = document.createElement('button');
    playBtn.className = 'game-link-btn btn btn-success m-1';
    playBtn.dataset.toggle = 'modal';
    playBtn.dataset.target = '#gameModal';
    playBtn.dataset.webgl = project.webGL;
    playBtn.dataset.name = project.name;
    playBtn.innerHTML = '<i class="fas fa-gamepad mr-1"></i> Play in Browser';
    linksContainer.appendChild(playBtn);
  }

  const pageLink = document.createElement('a');
  pageLink.href = getGamePageUrl(project);
  pageLink.className = 'game-link-btn btn btn-outline-light m-1';
  pageLink.innerHTML = `<i class="fas fa-file-alt mr-1"></i> ${project.detailCta || 'View Project'}`;
  linksContainer.appendChild(pageLink);

  let youtubeEmbedHtml = '';
  if (project.youtube !== '#') {
    let ytBase = project.youtube;
    ytBase = ytBase.replace('www.youtube.com/embed/', 'www.youtube-nocookie.com/embed/')
                   .replace('youtube.com/embed/', 'www.youtube-nocookie.com/embed/');
    const sep = ytBase.includes('?') ? '&' : '?';
    const ytSrc = `${ytBase}${sep}rel=0&playsinline=1&modestbranding=1`;
    youtubeEmbedHtml = `<div class="youtube-container"><iframe class="youtube-embed" src="${ytSrc}" title="${project.name} video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>`;
  }

  let additionalImagesHtml = '';
  if (project.additionalImages && project.additionalImages.length) {
    additionalImagesHtml = `<h3 class="gallery-title secondary-neon">Gallery</h3><div class="game-gallery">${project.additionalImages.map((img,i)=>`<div class="gallery-image-container"><img src="${img}" alt="${project.name} screenshot ${i+1}" class="gallery-image" data-full="${img}" loading="lazy"></div>`).join('')}</div>`;
  }

  let extraSectionsHtml = '';
  if (project.extraSections && project.extraSections.length) {
    extraSectionsHtml = `<div class="modal-extra-sections">${project.extraSections.map(section => `<section class="modal-extra-section"><h3>${section.title}</h3><p>${section.text}</p></section>`).join('')}</div>`;
  }

  const detailsHTML = `<div class="game-header"><h2 class="primary-neon">${project.name}</h2>${statusMessage}</div><div class="game-content"><div class="game-media"><a class="game-main-image-link" href="${getGamePageUrl(project)}" aria-label="Open ${project.name} game page"><img src="${project.image}" alt="${project.name}" class="game-main-image"${project.imageBg ? ` style="background-color:${project.imageBg}"` : ''}></a>${youtubeEmbedHtml}</div><div class="game-info">${badgeRows}<div class="game-description"><p>${project.description}</p></div>${distributionNote}<div class="game-links"></div></div></div>${extraSectionsHtml}${additionalImagesHtml}`;

  document.getElementById('game-details-content').innerHTML = detailsHTML;
  document.querySelector('#game-details-content .game-links').replaceWith(linksContainer);

  updateBackgroundColors(project.neonColor);

  document.querySelectorAll('.gallery-image').forEach(img => img.addEventListener('click', () => showLightbox(img.dataset.full)));
}


function updateBackgroundColors(color) {
  const r = parseInt(color.substring(1, 3), 16) / 255;
  const g = parseInt(color.substring(3, 5), 16) / 255;
  const b = parseInt(color.substring(5, 7), 16) / 255;

  if (particleSystem) {
    const colors = particleSystem.geometry.attributes.color.array;
    for (let i = 0; i < colors.length; i += 3) {
      colors[i] = r * (Math.random() * 0.5 + 0.5);
      colors[i + 1] = g * (Math.random() * 0.5 + 0.5);
      colors[i + 2] = b * (Math.random() * 0.5 + 0.5);
    }
    particleSystem.geometry.attributes.color.needsUpdate = true;
  }
}

function showLightbox(imgSrc) {
  const lightbox = document.querySelector('.gallery-lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-img');

  lightboxImg.src = imgSrc;
  lightbox.classList.add('active');
}

document.addEventListener('DOMContentLoaded', function() {
  initWebGL();

  createArcadeCabinets(); gsap.set('.arcade-container', { visibility: 'visible' });

  filterCabinets();

  document.querySelectorAll('.arcade-btn[data-filter]').forEach(button => {
    button.addEventListener('click', function() {

      document.querySelectorAll('.arcade-btn[data-filter]').forEach(btn => {
        btn.classList.remove('active');
      });
      this.classList.add('active');

      currentFilter = this.getAttribute('data-filter');
      filterCabinets();
    });
  });

  document.getElementById('turkishToggle').addEventListener('change', function() {

    englishOnly = this.checked;
    filterCabinets();
  });

  document.querySelector('.modal-close-btn').addEventListener('click', function() {

    document.querySelector('.game-details-modal').classList.remove('active');

    document.querySelectorAll('.arcade-cabinet').forEach(cab => {
      cab.classList.remove('active');
    });
  });

  document.querySelector('.lightbox-close').addEventListener('click', function() {
    document.querySelector('.gallery-lightbox').classList.remove('active');
  });

  document.querySelector('.gallery-lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('active');
    }
  });

  $('#gameModal').on('show.bs.modal', function(event) {
    const button = $(event.relatedTarget);
    const gameUrl = button.data('webgl');
    const gameName = button.data('name');

    const modal = $(this);
    modal.find('.modal-title').text(gameName);
    modal.find('#gameIframe').attr('src', gameUrl);
  });

  $('#gameModal').on('hidden.bs.modal', function() {
    $(this).find('#gameIframe').attr('src', '');
  });

  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      document.querySelector('.game-details-modal').classList.remove('active');
      document.querySelector('.gallery-lightbox').classList.remove('active');
    }
  });
});

try {
  $(function() {
    $('#gameModal').on('show.bs.modal', function() {
      const details = document.querySelector('.game-details-modal');
      if (details) details.classList.remove('active');
    });
  });
} catch (e) {  }



document.addEventListener('DOMContentLoaded', function() {
  setTimeout(() => {
    if (window.location.hash) {
      const hash = window.location.hash.substring(1); // remove #
      // Find case-insensitive key
      const keys = Object.keys(projectDetails);
      const matchedKey = keys.find(k => k.toLowerCase() === hash.toLowerCase());
      if (matchedKey && projectDetails[matchedKey]) {
        showProjectDetails(projectDetails[matchedKey]);
      }
    }
  }, 500); // Wait a bit for cabinets to render just in case
});
