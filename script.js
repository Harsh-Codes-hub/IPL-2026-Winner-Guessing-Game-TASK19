const iplTeams2026 = [
  {
    team: "CSK",
    primary: "oklab(0.86 0.02 0.12)", // yellow
    secondary: "oklab(0.55 -0.04 -0.25)", // blue
    fullName: "Chennai Super Kings",
    trophies: 5,
    caption: "MSD",
  },
  {
    team: "MI",
    primary: "oklab(0.52 -0.05 -0.28)", // blue
    secondary: "oklab(0.78 0.01 0.10)", // gold
    fullName: "Mumbai Indians",
    trophies: 5,
    caption: "Hardik Pandya",
  },
  {
    team: "RCB",
    primary: "oklab(0.48 0.22 0.08)", // red
    secondary: "oklab(0.15 0.00 0.00)", // black
    fullName: "Royal Challengers Bengaluru",
    trophies: 0,
    caption: "Faf du Plessis",
  },
  {
    team: "KKR",
    primary: "oklab(0.40 0.10 -0.22)", // purple
    secondary: "oklab(0.80 0.01 0.11)", // gold
    fullName: "Kolkata Knight Riders",
    trophies: 3,
    caption: "Shreyas Iyer",
  },
  {
    team: "SRH",
    primary: "oklab(0.70 0.17 0.14)", // orange
    secondary: "oklab(0.18 0.00 0.00)", // black
    fullName: "Sunrisers Hyderabad",
    trophies: 1,
    caption: "Pat Cummins",
  },
  {
    team: "RR",
    primary: "oklab(0.72 0.14 -0.02)", // pink
    secondary: "oklab(0.56 -0.05 -0.25)", // blue
    fullName: "Rajasthan Royals",
    trophies: 1,
    caption: "Sanju Samson",
  },
  {
    team: "DC",
    primary: "oklab(0.54 -0.04 -0.27)", // blue
    secondary: "oklab(0.50 0.21 0.10)", // red
    fullName: "Delhi Capitals",
    trophies: 0,
    caption: "Rishabh Pant",
  },
  {
    team: "PBKS",
    primary: "oklab(0.52 0.23 0.10)", // red
    secondary: "oklab(0.82 0.00 0.00)", // silver
    fullName: "Punjab Kings",
    trophies: 0,
    caption: "Shikhar Dhawan",
  },
  {
    team: "GT",
    primary: "oklab(0.30 -0.02 -0.20)", // dark blue
    secondary: "oklab(0.79 0.01 0.10)", // gold
    fullName: "Gujarat Titans",
    trophies: 1,
    caption: "Shubman Gill",
  },
  {
    team: "LSG",
    primary: "oklab(0.68 -0.06 -0.20)", // light blue
    secondary: "oklab(0.71 0.16 0.15)", // orange
    fullName: "Lucknow Super Giants",
    trophies: 0,
    caption: "KL Rahul",
  },
];

const mainEL = document.querySelector("main");
const guessBtnEl = document.querySelector("#guess");
const resetBtnEl = document.querySelector("#reset");
const windowEl = document.querySelector(".window");
const containerEl = document.querySelector(".container");

guessBtnEl.addEventListener("click", function () {
  let num = Math.floor(Math.random() * iplTeams2026.length);
  let data = iplTeams2026[num];
  const h1El = windowEl.querySelector(".top h1");
  const h4El = windowEl.querySelector(".top h4");
  const captionEl = windowEl.querySelector("#caption");
  const trophiesEl = windowEl.querySelector("#trophies");

  Object.assign(mainEL.style, {
    backgroundColor: `${data.secondary}`,
  });

  Object.assign(containerEl.style, {
    backgroundColor: `${data.primary}`,
  });
  
  Object.assign(h1El.style, {
    color: `${data.secondary}`,
  });
  h1El.textContent = `${data.team}`;

  Object.assign(h4El.style, {
    color: `${data.secondary}`,
  });
  h4El.textContent = `${data.fullName}`;

  captionEl.textContent = `${data.caption}`;
  trophiesEl.textContent = `🏆 = ${data.trophies}`
});

resetBtnEl.addEventListener("click", function () {
  const h1El = windowEl.querySelector(".top h1");
  const h4El = windowEl.querySelector(".top h4");
  const captionEl = windowEl.querySelector("#caption");
  const trophiesEl = windowEl.querySelector("#trophies");

  Object.assign(mainEL.style, {
    backgroundColor: `var(--bg)`,
  });

  Object.assign(containerEl.style, {
    backgroundColor: `var(--bg-light)`,
  });
  
  Object.assign(h1El.style, {
    color: `var(--text)`,
  });
  h1El.textContent = `Guess`;

  Object.assign(h4El.style, {
    color: `var(--text)`,
  });
  h4El.textContent = `Who will WIN?`;

  captionEl.textContent = `Who will lead team?`;
  trophiesEl.textContent = `🏆 = ?`
});
