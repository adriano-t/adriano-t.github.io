const games = [
    {
      title: "Super Squishy Candy Console",
      date: "2024-12-01",
      collaboration: "Bloody",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A game made for Goldensun, during the Secret santa jam 2024."
    },
    {
      title: "Chakana",
      date: "2024-10-01",
      collaboration: "Bloody",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      short_desc: "An ordinary date takes a dark turn",
      details: "You planned for a quiet evening. The table is set, the atmosphere is warm, and the night seems to be unfolding just as you'd hoped. But as the meal progresses, something feels off. In this atmospheric horror game, explore your home as strange events disrupt your date, leaving you to navigate through questions, confrontations, and your own dread. Each decision can bring you closer to unraveling the mystery or plunge you deeper into its grip. The time is running out, manage the eerie silence, and tread carefully to keep your secrets hidden—or risk exposing yourself. Face a twisting psychological horror that questions how far you'd go to protect yourself from your fate."
    },
    {
      title: "Farming Simulator But with guns",
      date: "2024-01-31",
      collaboration: "Karim",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A farming simulator with a surprising twist of action and combat."
    },
    {
      title: "Pigments",
      date: "2023-12-20",
      collaboration: "Bloody",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Experience a colorful journey in a world of artistic challenges."
    },
    {
      title: "Christmas Combo",
      date: "2022-12-29",
      collaboration: "Bloody",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Celebrate the holidays with an exciting blend of genres."
    },
    {
      title: "CaveBox",
      date: "2022-11-13",
      collaboration: "Bloody",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Explore mysterious caves filled with challenges and secrets."
    },
    {
      title: "Herikoputa",
      date: "2022-05-01",
      collaboration: "Erry",
      jam: "Competizione GMI",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A fast-paced game developed during a competitive game jam."
    },
    {
      title: "Mirror Layers Nuovo",
      date: "2021-10-30",
      collaboration: "Mad, Erry, Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Discover new dimensions in this layered mirror world."
    },
    {
      title: "Mirror Layers Prologue",
      date: "2021-09-17",
      collaboration: "Mad, Erry, Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "The beginning of an epic journey through reflective worlds."
    },
    {
      title: "Blink",
      date: "2021-11-26",
      collaboration: "SerpensSolida, Ballman",
      jam: "Terrorottobre",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A fast, blinking adventure that keeps you on your toes."
    },
    {
      title: "A Day",
      date: "2021-02-04",
      collaboration: "Hyper, Mad",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Experience a day full of surprises and dynamic gameplay."
    },
    {
      title: "A Day To bring them happiness",
      date: "2020-11-22",
      collaboration: "Hyper, Mad",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A heartfelt game designed to bring joy and happiness."
    },
    {
      title: "Surroundead",
      date: "2020-10-03",
      collaboration: "Erry, Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Immerse yourself in a world where challenges surround you."
    },
    {
      title: "Crop Nights",
      date: "2020-06-10",
      collaboration: "",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A unique take on night-time farming with creative mechanics."
    },
    {
      title: "The Alley",
      date: "2020-05-03",
      jam: "Competizione GMI",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Navigate through a mysterious alley filled with surprises."
    },
    {
      title: "Atmospair",
      date: "2020-02-04",
      collaboration: "Cla, Lod, SerpensSolida, Pietro Prebianca",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A game that blends atmospheric design with innovative gameplay."
    },
    {
      title: "Everybody’s Home",
      date: "2019-01-01",
      collaboration: "GMI (Mad, Doom, Cla, Ball, Jak, Lod, etc)",
      jam: "Global game jam 2019 - Home Theme",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A heartwarming game developed during a global game jam."
    },
    {
      title: "Frog Feast",
      date: "2018-02-04",
      collaboration: "Mad",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Join a feast with frogs in this quirky and fun adventure."
    },
    {
      title: "Biotransphere",
      date: "2018-01-31",
      collaboration: "Pietro, WhySere",
      jam: "Global game jam 2018",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Explore a living, breathing biotransphere in this innovative game."
    },
    {
      title: "Mirror Layers Originale",
      date: "2016-11-14",
      collaboration: "Erry, Virgil, Lod, Soufian Addioui, (other friend of Virgil)",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "The original mirror layers experience that started it all."
    },
    {
      title: "Flappy Fish 2",
      date: "2016-06-08",
      collaboration: "Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A sequel to the popular Flappy Fish game with new challenges."
    },
    {
      title: "Tainted",
      date: "2014-08-27",
      collaboration: "Mad, Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A dark and twisted game that challenges conventional gameplay."
    },
    {
      title: "Undead Pixels",
      date: "2014-02-10",
      collaboration: "Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A retro-style game with undead challenges and pixel art."
    },
    {
      title: "Calm Time",
      date: "2013-11-22",
      collaboration: "Mad, Virgil, Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A relaxing game experience designed to calm and inspire."
    },
    {
      title: "7 Days",
      date: "2013-05-14",
      collaboration: "Lod",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "Survive and thrive in a challenging 7-day adventure."
    },
    {
      title: "Airte",
      date: "2012-10-02",
      jam: "Horror GMI",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A horror-themed game developed during a thrilling game jam."
    },
    {
        title: "Airte",
        date: "2012-10-02",
        jam: "Horror GMI",
        image: "./games/images/2012_connect4.png",
        details: "A horror-themed game developed during a thrilling game jam."
      },
    {
      title: "Tetris 3D Online Tournament",
      date: "2011-03-11",
      collaboration: "",
      image: "https://static.bandainamcoent.eu/high/elden-ring/elden-ring/03-news/elden-ring-101-trailer-thumbnail.jpg",
      details: "A competitive 3D Tetris tournament game."
    },
    {
      title: "Transporter",
      date: "2011-02-08",
      collaboration: "",
      image: "./games/images/2011_transporter.png",
      details: "My first released game. A simple physics-based puzzle platformer"
    }
  ];
  