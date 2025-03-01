const games = [
  {
    title: "Super Squishy Candy Console",
    date: "2024-12-01",
    collaboration: "Bloody",
    image: "./games/images/2024_super_squishy.png",
    short_desc: "A game made for Goldensun, during the Secret santa jam 2024.",
    details: "A game made for Goldensun, during the Secret santa jam 2024."
  },
  {
    title: "Chakana (Chapter 1)",
    date: "2024-10-01",
    collaboration: "Bloody",
    image: "./games/images/2024_chakana.gif",
    short_desc: "An ordinary date takes a dark turn",
    details: "You planned for a quiet evening. The table is set, the atmosphere is warm, and the night seems to be unfolding just as you'd hoped. But as the meal progresses, something feels off. In this atmospheric horror game, explore your home as strange events disrupt your date, leaving you to navigate through questions, confrontations, and your own dread. Each decision can bring you closer to unraveling the mystery or plunge you deeper into its grip. The time is running out, manage the eerie silence, and tread carefully to keep your secrets hidden—or risk exposing yourself. Face a twisting psychological horror that questions how far you'd go to protect yourself from your fate.",
    url: "https://tiz010.itch.io/chakana-chapter-1",
  },
  {
    title: "Farming Simulator But with guns",
    date: "2024-01-31",
    collaboration: "Karim",
    image: "./games/images/2024_farming_simulator_but_with_guns.png",
    details: "A farming simulator with a surprising twist of action and combat.",
    url: "https://globalgamejam.org/games/2024/farming-simulator-guns-9"
  },
  {
    title: "Pigments",
    date: "2023-12-20",
    collaboration: "Bloody",
    image: "./games/images/2023_pigments.gif",
    short_desc: "Uncover the secrets of an alien world.",
    details: "Explore eerie landscapes, awakening memories and forming an enigmatic connection with your surroundings. With no text, the controls and story seamlessly reveal themselves as you delve into this mysterious puzzle platformer",
    url: "https://tiz010.itch.io/pigments",
  },
  {
    title: "Christmas Combo",
    date: "2022-12-29",
    collaboration: "Bloody",
    image: "./games/images/2022_christmas_combo.png",
    short_desc: "Hit all the targets with a single shot, sliding on the ice.",
    details: "Hit all the targets with a single shot, sliding on the ice.",
    url: "https://drive.google.com/file/d/1tOE9xA1tyBAL4H7gym1rklpDRdpS9Zwm/view?usp=sharing"
  },
  {
    title: "CaveBox",
    date: "2022-11-13",
    collaboration: "Bloody",
    image: "./games/images/2022_cavebox.webp",
    short_desc: "Text game about mysterious caves filled with challenges and secrets.",
    details: "Text game about mysterious caves filled with challenges and secrets."
  },
  {
    title: "Herikoputa",
    date: "2022-05-01",
    collaboration: "Erry",
    jam: "Competizione GMI",
    image: "./games/images/2022_herikoputa.png",
    short_desc: "Launch yourself with your friends through a dangerous path, armed with torpedos",
    details: "Launch yourself with your friends through a dangerous path, armed with torpedos"
  },
  {
    title: "Mirror Layers",
    date: "2021-10-30",
    collaboration: "Mad, Erry, Lod",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "Discover new dimensions in this layered mirror world."
  },
  {
    title: "Mirror Layers Prologue",
    date: "2021-09-17",
    collaboration: "Mad, Erry, Lod",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "The beginning of an epic journey through reflective worlds."
  },
  {
    title: "Blink",
    date: "2021-11-26",
    collaboration: "SerpensSolida, Ballman",
    jam: "Terrorottobre",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A fast, blinking adventure that keeps you on your toes."
  },
  {
    title: "A Day",
    date: "2021-02-04",
    collaboration: "Hyper, Mad",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "Experience a day full of surprises and dynamic gameplay."
  },
  {
    title: "A Day To bring them happiness",
    date: "2020-11-22",
    collaboration: "Hyper, Mad",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A heartfelt game designed to bring joy and happiness."
  },
  {
    title: "Surroundead",
    date: "2020-10-03",
    collaboration: "Erry, Lod",
    image: "./games/images/2020_surroundead.png",
    short_desc: "Amongus photo-realistic clone. Made in unity as a test for a multiplayer library.",
    details: "Amongus clone but photo-realistic. Made in unity as a test for a multiplayer library.",
    url: "https://drive.google.com/file/d/1ZoHndvuNSzjjpsdg7WWacyoD_2_Di9MW/view?usp=sharing"
  },
  {
    title: "Crop Nights",
    date: "2020-06-10",
    collaboration: "",
    image: "./games/images/2020_crop_nights.png",
    short_desc: "Those plants have something peculiar about them.",
    details: "Those plants have something peculiar about them.",
    url: "https://gx.games/games/lbqayi/crop-nights/"
  },
  {
    title: "The Alley",
    date: "2020-05-03",
    jam: "Competizione GMI",
    image: "./games/images/2020_the_alley.webp",
    short_desc: "You wake up in a structure, under observation. Stay away from the restricted zone.",
    details: "The alley is a 3D card game made for the GMI competition."
  },
  {
    title: "Atmospair",
    date: "2020-02-04",
    collaboration: "Cla, Lod, SerpensSolida, Pietro Prebianca",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A game that blends atmospheric design with innovative gameplay."
  },
  {
    title: "Everybody’s Home",
    date: "2019-01-01",
    collaboration: "GMI (Mad, Doom, Cla, Ball, Jak, Lod, etc)",
    jam: "Global game jam 2019 - Home Theme",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A heartwarming game developed during a global game jam."
  },
  {
    title: "Frog Feast",
    date: "2018-02-04",
    collaboration: "Mad",
    image: "./games/images/2018_frog_feast.png",
    short_desc: "Made in 1 hour for the 1 hour game jam",
    details: "Couch battle game wher you have to push your friend",
    url: "https://drive.google.com/file/d/1qZ4QvJ0IPGWZTESX85dp5kv6WEyYiGxj/view",
  },
  {
    title: "Biotransphere",
    date: "2018-01-31",
    collaboration: "Pietro, WhySere",
    jam: "Global game jam 2018",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "Explore a living, breathing biotransphere in this innovative game."
  },
  {
    title: "Mirror Layers (Asylum Jam)",
    date: "2016-11-14",
    collaboration: "Erry, Virgil, Lod, Soufian Addioui, (other Virgil's friend)",
    image: "./games/images/2016_mirror_layers.png",
    short_desc: "We ask you only to give us a part of you: Part of your identity.",
    details: "We ask you only to give us a part of you: Part of your identity.",
    url: "https://gamejolt.com/games/mirrorlayers/208588",
  },
  {
    title: "Flappy Fish 2",
    date: "2016-06-08",
    collaboration: "Lod",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A sequel to the popular Flappy Fish game with new challenges."
  },
  {
    title: "Tainted",
    date: "2014-08-27",
    collaboration: "Mad, Lod",
    image: "./games/images/no_image.jpg",
    short_desc: "",
    details: "A dark and twisted game that challenges conventional gameplay."
  },
  {
    title: "Undead Pixels",
    date: "2014-02-10",
    collaboration: "Lod",
    image: "./games/images/2014_undead_pixels.jpg",
    short_desc: "Survive zombie hordes in this retro-inspired pixel art game for Android.",
    details: "Survive zombie hordes in this retro-inspired pixel art game for Android.",
    url: "https://play.google.com/store/apps/details?id=com.revolab.UndeadPixels",
  },
  {
    title: "Calm Time",
    date: "2013-11-22",
    collaboration: "Mad, Virgil, Lod",
    image: "./games/images/2013_calm_time.png",
    short_desc: "",
    details: "A relaxing game experience designed to calm and inspire."
  },
  {
    title: "7 Days",
    date: "2013-05-14",
    collaboration: "Lod",
    image: "./games/images/2013_7days.png",
    short_desc: "Find out what is going on in the strange house where you just woke up",
    details: "Find out what is going on in the strange house where you just woke up",
    url: "https://gamejolt.com/games/7days/14592"
  },
  {
    title: "Airte",
    date: "2012-10-02",
    jam: "Horror GMI",
    image: "./games/images/2012_airte.png",
    short_desc: "A soul named Airte. Once a metalhead, now seeking faith in the afterlife.",
    details: "A lost soul named Airte, once a devoted metalhead, had a revelation on his deathbed—he must put his faith in Jesus Christ. But in the afterlife, The Diaulo seeks to drag him back to his old ways, forcing him to listen to a haunting song that commands worship of 'Satan, infinite trinity.' Yet, Jesus 3 has granted Airte a divine gift: The Light Weapon. With his radiant white companion by his side and bare feet upon holy ground, Airte must purge the demonic forces emerging from the accursed walls. The goal? Absorb the light emitted by tormented souls. Collect 1,000, and Airte will finally find his redemption. Controls: WASD + Mouse",
    url: "https://tizsoft.altervista.org/Airte/Airte.zip"
  },
  {
    title: "Connect 4",
    date: "2012-08-03",
    image: "./games/images/2012_connect4.png",
    short_desc: "A classic game of Connect 4. Online multiplayer",
    details: "A classic game of Connect 4. Online multiplayer",
    url: "https://tizsoft.altervista.org/connect4/ConnectDG_1_2.zip",
  },
  {
    title: "Solitair Worm",
    date: "2012-04-18",
    image: "./games/images/2012_solitair_worm.png",
    short_desc: "A game about a giant worm that eats everything in its path",
    details: "A game about a giant worm that eats everything in its path",
    url: "",
  },
  {
    title: "Tetris 3D Online Tournament",
    date: "2011-03-11",
    collaboration: "",
    image: "./games/images/2011_tetris.png",
    short_desc: "A simple 3D Tetris game with online leaderboards",
    details: "A simple 3D Tetris game with online leaderboards.",
    url: "http://www.tizsoft.altervista.org/tetris",
  },
  {
    title: "Transporter",
    date: "2011-02-08",
    collaboration: "",
    image: "./games/images/2011_transporter.png",
    short_desc: "My first released game. A simple physics-based puzzle platformer",
    details: "My first released game. A simple physics-based puzzle platformer",
    url: undefined,
  }
];
