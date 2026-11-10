const routeFlows = {
  bathroom: [
    "interest",
    "bathroom-size",
    "bathroom-style",
    "bathroom-comfort",
    "bathroom-tiling",
    "bathroom-sanitary",
    "bathroom-furniture",
    "bathroom-timing",
    "lead",
    "result"
  ],
  kitchen: [
    "interest",
    "kitchen-size",
    "kitchen-style",
    "kitchen-scope",
    "kitchen-finish",
    "kitchen-details",
    "kitchen-timing",
    "lead",
    "result"
  ],
  interior: [
    "interest",
    "interior-type",
    "interior-surface",
    "interior-details",
    "interior-timing",
    "lead",
    "result"
  ]
};

// Lucide-iconen (zelfde iconenset als renobest.be)
const icons = {
  bath: '<path d="M10 4 8 6"/><path d="M17 19v2"/><path d="M2 12h20"/><path d="M7 19v2"/><path d="M9 5 7.621 3.621A2.121 2.121 0 0 0 4 5v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"/>',
  cookingPot: '<path d="M2 12h20"/><path d="M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8"/><path d="m4 8 16-4"/><path d="m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8"/>',
  paintRoller: '<rect width="16" height="6" x="2" y="2" rx="2"/><path d="M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect width="4" height="6" x="8" y="16" rx="1"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  armchair: '<path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/>',
  gem: '<path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13 4-13-3-6"/><path d="M2 9h20"/>',
  plug: '<path d="M12 22v-5"/><path d="M9 8V2"/><path d="M15 8V2"/><path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z"/>',
  refrigerator: '<path d="M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z"/><path d="M5 10h14"/><path d="M15 7v6"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  rocket: '<path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>',
  calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  calendarRange: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4"/><path d="M3 10h18"/><path d="M8 2v4"/><path d="M17 14h-6"/><path d="M13 18H7"/><path d="M7 14h.01"/><path d="M17 18h.01"/>',
  lightbulb: '<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/>',
  floor: '<path d="M2 20 6.5 8h11L22 20Z"/><path d="M10 8 9 20"/><path d="M14 8l1 12"/><path d="M4.3 14h15.4"/>',
  grid: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18"/><path d="M3 15h18"/><path d="M9 3v18"/><path d="M15 3v18"/>',
  panels: '<rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/><path d="M7 6.5v.01M17 6.5v.01M7 12v.01M17 12v.01M7 17.5v.01M17 17.5v.01"/>',
  doorOpen: '<path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/>',
  hammer: '<path d="m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"/><path d="m18 15 4-4"/><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"/>',
  thumbsUp: '<path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/>',
  sparkles: '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  ruler: '<path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/>',
  circleCheck: '<circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/>',
  brush: '<path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/>',
  pickaxe: '<path d="M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912"/><path d="M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393"/><path d="M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z"/><path d="M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319"/>'
};

function svgIcon(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]}</svg>`;
}

// ---------- Lijntekeningen (plattegronden in bovenaanzicht) ----------
// Bouwstenen in een tekenvlak van 160 x 100; kamers worden groter per optie.
const plan = {
  room: (x, y, w, h) => `<rect class="pl-wall" x="${x}" y="${y}" width="${w}" height="${h}" rx="1"/>`,
  counter: (x, y, w, h) => `<rect class="pl-unit" x="${x}" y="${y}" width="${w}" height="${h}"/>`,
  tall: (x, y, w, h) => `<rect class="pl-unit" x="${x}" y="${y}" width="${w}" height="${h}"/><path class="pl-thin" d="M${x} ${y}L${x + w} ${y + h}M${x + w} ${y}L${x} ${y + h}"/>`,
  hob: (x, y) => `<rect class="pl-thin" x="${x}" y="${y}" width="16" height="9" rx="1"/>` +
    [[4, 2.6], [12, 2.6], [4, 6.4], [12, 6.4]].map(([dx, dy]) => `<circle class="pl-thin" cx="${x + dx}" cy="${y + dy}" r="1.6"/>`).join(""),
  sink: (x, y, w = 11, h = 8) => `<rect class="pl-thin" x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5"/><circle class="pl-thin" cx="${x + w / 2}" cy="${y + 1.8}" r="0.8"/>`,
  island: (x, y, w, h) => `<rect class="pl-unit" x="${x}" y="${y}" width="${w}" height="${h}" rx="1"/>`,
  stool: (cx, y) => `<path class="pl-thin" d="M${cx - 3.5} ${y}v1.5a3.5 3.5 0 0 0 7 0V${y}"/>`,
  door: (hingeX, y, r) => `<path class="pl-thin" d="M${hingeX} ${y}V${y - r}"/><path class="pl-dash" d="M${hingeX} ${y - r}A${r} ${r} 0 0 0 ${hingeX - r} ${y}"/>`,
  table: (x, y, w, h) => `<rect class="pl-unit" x="${x}" y="${y}" width="${w}" height="${h}" rx="2"/>`,
  chair: (x, y, w = 5, h = 8) => `<rect class="pl-thin" x="${x}" y="${y}" width="${w}" height="${h}" rx="2"/>`
};

const illustrations = {
  // < 8 m²: compacte hoekkeuken
  kitchenS: [
    `<path class="pl-wall" d="M95 82H45V18H115V82H112"/>`,
    plan.counter(45, 18, 70, 13),
    plan.counter(45, 31, 13, 34),
    plan.hob(82, 20),
    plan.sink(46.5, 42, 10, 11),
    plan.door(112, 82, 17)
  ].join(""),
  // 8 – 14 m²: keuken met kastenwand en klein eiland
  kitchenM: [
    plan.room(30, 15, 100, 70),
    plan.counter(30, 15, 100, 13),
    plan.tall(117, 28, 13, 38),
    plan.sink(44, 17.5),
    plan.hob(72, 17),
    plan.island(58, 50, 36, 14),
    plan.stool(68, 67),
    plan.stool(84, 67)
  ].join(""),
  // 15 – 24 m²: U-keuken met groot eiland
  kitchenL: [
    plan.room(16, 12, 128, 76),
    plan.counter(16, 12, 128, 13),
    plan.counter(16, 25, 13, 40),
    plan.tall(131, 25, 13, 24),
    plan.tall(131, 49, 13, 24),
    plan.sink(42, 14.5),
    plan.hob(80, 14),
    plan.island(50, 46, 52, 15),
    plan.stool(61, 64),
    plan.stool(76, 64),
    plan.stool(91, 64)
  ].join(""),
  // > 24 m²: leefkeuken met eiland en eettafel
  kitchenXL: [
    plan.room(4, 10, 152, 80),
    plan.counter(17, 10, 92, 13),
    plan.tall(4, 10, 13, 26),
    plan.tall(4, 36, 13, 26),
    plan.sink(32, 12.5),
    plan.hob(62, 12),
    plan.island(30, 46, 54, 15),
    plan.stool(42, 64),
    plan.stool(57, 64),
    plan.stool(72, 64),
    plan.table(120, 36, 20, 30),
    plan.chair(113, 40),
    plan.chair(113, 54),
    plan.chair(142, 40),
    plan.chair(142, 54)
  ].join("")
};

// Keuken in vooraanzicht; "accent" kleurt wat vernieuwd wordt in Renobest-rood.
function kitchenElevation(mode) {
  const a = (cls, on) => (on ? `${cls} pl-accent` : cls);
  const fronts = mode === "fronts" || mode === "full";
  const all = mode === "full";
  const cells = [0, 1, 2, 3];
  const out = [`<path class="pl-wall" d="M8 88H152"/>`];

  // Bovenkasten en onderkasten (korpus); bij volledige vernieuwing komt er een dampkap
  cells.forEach((i) => {
    const hood = all && i === 2;
    if (!hood) out.push(`<rect class="${a("pl-unit", all)}" x="${24 + i * 28}" y="14" width="28" height="24"/>`);
    out.push(`<rect class="${a("pl-unit", all)}" x="${24 + i * 28}" y="58" width="28" height="28"/>`);
  });

  if (all) {
    // Dampkap + hoge kast met koelkast
    out.push(`<path class="pl-unit pl-accent" d="M84 14h8v14l8 8h-24l8-8Z"/>`);
    out.push(`<rect class="pl-unit pl-accent" x="136" y="14" width="18" height="72"/>`);
    out.push(`<rect class="pl-thin pl-accent" x="138.5" y="16.5" width="13" height="30" rx="0.8"/><rect class="pl-thin pl-accent" x="138.5" y="49" width="13" height="34.5" rx="0.8"/>`);
    out.push(`<path class="pl-thin pl-accent" d="M141.5 40v4M141.5 52v4"/>`);
  }

  // Fronten + grepen
  cells.forEach((i) => {
    const x = 24 + i * 28;
    if (!(all && i === 2)) {
      out.push(`<rect class="${a("pl-thin", fronts)}" x="${x + 2.5}" y="16.5" width="23" height="19" rx="0.8"/>`);
      out.push(`<path class="${a("pl-thin", fronts)}" d="M${x + 10} 32.5h8"/>`);
    }
    if (all && i === 2) {
      // Nieuwe oven
      out.push(`<rect class="pl-thin pl-accent" x="${x + 2.5}" y="60.5" width="23" height="23" rx="0.8"/>`);
      out.push(`<rect class="pl-thin pl-accent" x="${x + 6}" y="67" width="16" height="12" rx="1"/>`);
      out.push(`<path class="pl-thin pl-accent" d="M${x + 7} 63.5h14"/>`);
    } else {
      out.push(`<rect class="${a("pl-thin", fronts)}" x="${x + 2.5}" y="60.5" width="23" height="23" rx="0.8"/>`);
      out.push(`<path class="${a("pl-thin", fronts)}" d="M${x + 10} 64h8"/>`);
    }
  });

  // Werkblad + kraan
  out.push(`<rect class="${a("pl-unit", fronts)}" x="21" y="54" width="${all ? 115 : 118}" height="4" rx="0.5"/>`);
  out.push(`<path class="${a("pl-thin", all)}" d="M50 54V47.5h6V50"/>`);

  if (all) {
    // Sterretjes: alles nieuw
    out.push(`<path class="pl-thin pl-accent" d="M14 20v8M10 24h8M14 44v6M11 47h6"/>`);
  }
  return out.join("");
}

// Nieuwe indeling: oude opstelling gestippeld, nieuwe in rood
const kitchenLayout = [
  plan.room(26, 10, 108, 80),
  `<rect class="pl-dash" x="40" y="74" width="60" height="12"/>`,
  `<rect class="pl-unit pl-accent" x="26" y="10" width="108" height="12"/>`,
  `<rect class="pl-unit pl-accent" x="122" y="22" width="12" height="34"/>`,
  `<rect class="pl-unit pl-accent" x="52" y="38" width="44" height="14" rx="1"/>`,
  `<path class="pl-thin pl-accent" d="M62 55v1.5a3.5 3.5 0 0 0 7 0V55M79 55v1.5a3.5 3.5 0 0 0 7 0V55"/>`,
  `<path class="pl-thin pl-accent" d="M104 80C116 80 118 70 112 60"/><path class="pl-thin pl-accent" d="M108.6 62.6L112 59.5L114.8 63.4"/>`
].join("");

// Materiaalstaaltjes werkblad
function worktopSwatch(texture) {
  const slab = `<rect class="pl-unit" x="22" y="16" width="116" height="60" rx="3"/><path class="pl-wall" d="M22 72v8a3 3 0 0 0 3 3h110a3 3 0 0 0 3-3v-8"/>`;
  let marks = "";
  if (texture === "wood") {
    marks = [26, 35, 44, 53, 62, 70]
      .map((y, i) => `<path class="pl-thin" d="M27 ${y}C55 ${y - 4 + (i % 2) * 3} 88 ${y + 4} 133 ${y - 1}"/>`)
      .join("") + `<ellipse class="pl-thin" cx="96" cy="48" rx="7" ry="2.6"/>`;
  } else if (texture === "speckle") {
    let seed = 7;
    const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
    for (let i = 0; i < 46; i += 1) {
      marks += `<circle class="pl-dot" cx="${(28 + rand() * 104).toFixed(1)}" cy="${(21 + rand() * 50).toFixed(1)}" r="${(0.7 + rand() * 0.9).toFixed(2)}"/>`;
    }
  } else {
    marks = [
      "M27 66C46 60 60 63 76 48S108 30 133 24",
      "M76 48C84 52 92 53 99 64",
      "M38 22C50 30 58 28 68 37",
      "M112 70C118 62 126 60 133 56"
    ].map((d) => `<path class="pl-thin" d="${d}"/>`).join("");
  }
  return slab + marks;
}

Object.assign(illustrations, {
  scopeFronts: kitchenElevation("fronts"),
  scopeFull: kitchenElevation("full"),
  scopeLayout: kitchenLayout,
  worktopLaminate: worktopSwatch("wood"),
  worktopComposite: worktopSwatch("speckle"),
  worktopStone: worktopSwatch("stone")
});

// ---------- Badkamer ----------
const ac = (cls, on) => (on ? `${cls} pl-accent` : cls);

// Bovenaanzicht
const bath = {
  // Muren met deuropening onderaan (deur draait naar binnen)
  walls: (x, y, w, h, doorAt = 18, r = 16) =>
    `<path class="pl-wall" d="M${x + doorAt} ${y + h}H${x}V${y}H${x + w}V${y + h}H${x + doorAt + r}"/>` +
    plan.door(x + doorAt + r, y + h, r),
  toilet: (x, y, on) => `<rect class="${ac("pl-unit", on)}" x="${x}" y="${y}" width="5" height="12" rx="1"/><ellipse class="${ac("pl-unit", on)}" cx="${x + 11}" cy="${y + 6}" rx="6" ry="4.5"/>`,
  vanity: (x, y, w, basins = 1, on) => {
    let out = `<rect class="${ac("pl-unit", on)}" x="${x}" y="${y}" width="${w}" height="10"/>`;
    for (let i = 0; i < basins; i += 1) {
      const cx = x + (w / (basins * 2)) * (i * 2 + 1);
      out += `<ellipse class="${ac("pl-thin", on)}" cx="${cx}" cy="${y + 5.5}" rx="5" ry="3.2"/>`;
    }
    return out;
  },
  shower: (x, y, w, h, on) =>
    `<rect class="${ac("pl-unit", on)}" x="${x}" y="${y}" width="${w}" height="${h}"/>` +
    `<circle class="${ac("pl-thin", on)}" cx="${x + w / 2}" cy="${y + h / 2}" r="1.6"/>` +
    `<path class="${ac("pl-wall", on)}" d="M${x} ${y + 2}V${y + h}H${x + w * 0.6}"/>`,
  tub: (x, y, w, h, on) =>
    `<rect class="${ac("pl-unit", on)}" x="${x}" y="${y}" width="${w}" height="${h}" rx="3"/>` +
    `<rect class="${ac("pl-thin", on)}" x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" rx="${(h - 6) / 2}"/>` +
    `<circle class="${ac("pl-thin", on)}" cx="${x + 8}" cy="${y + h / 2}" r="1"/>`,
  freeTub: (x, y, w, h) =>
    `<rect class="pl-unit" x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}"/>` +
    `<rect class="pl-thin" x="${x + 3}" y="${y + 3}" width="${w - 6}" height="${h - 6}" rx="${(h - 6) / 2}"/>`
};

// Vooraanzicht
const bathFront = {
  floor: `<path class="pl-wall" d="M8 88H152"/>`,
  vanity: (x, w, basins, on, mirror = true) => {
    let out = `<rect class="${ac("pl-unit", on)}" x="${x}" y="56" width="${w}" height="20" rx="1"/>` +
      `<rect class="${ac("pl-unit", on)}" x="${x - 2}" y="52" width="${w + 4}" height="4" rx="0.5"/>`;
    for (let i = 0; i < basins; i += 1) {
      const cx = x + (w / (basins * 2)) * (i * 2 + 1);
      if (mirror) out += `<rect class="${ac("pl-thin", on)}" x="${cx - 12}" y="16" width="24" height="26" rx="4"/>`;
      out += `<rect class="${ac("pl-unit", on)}" x="${cx - 10}" y="47" width="20" height="5" rx="2.5"/>` +
        `<path class="${ac("pl-thin", on)}" d="M${cx} 47V42.5h4"/>` +
        `<path class="${ac("pl-thin", on)}" d="M${cx - 6} 64h12"/>`;
      if (i > 0) out += `<path class="${ac("pl-thin", on)}" d="M${x + (w / basins) * i} 58v16"/>`;
    }
    return out;
  }
};

Object.assign(illustrations, {
  // Grootte badkamer: kamer groeit per optie
  bathS: [
    bath.walls(48, 22, 64, 56, 8, 16),
    bath.vanity(52, 22, 22, 1),
    bath.shower(88, 22, 24, 24),
    bath.toilet(48, 48)
  ].join(""),
  bathM: [
    bath.walls(32, 17, 96, 66, 10, 17),
    bath.vanity(42, 17, 30, 1),
    bath.shower(100, 17, 28, 28),
    bath.toilet(32, 44),
    bath.tub(82, 66, 46, 17)
  ].join(""),
  bathL: [
    bath.walls(18, 13, 124, 74, 10, 18),
    bath.vanity(30, 13, 50, 2),
    bath.shower(106, 13, 36, 34),
    bath.toilet(18, 40),
    bath.tub(86, 69, 56, 18)
  ].join(""),
  bathXL: [
    bath.walls(5, 9, 150, 82, 10, 18),
    bath.vanity(16, 9, 56, 2),
    plan.tall(74, 9, 12, 12),
    bath.shower(116, 9, 39, 42),
    bath.toilet(5, 42),
    bath.freeTub(62, 54, 46, 22)
  ].join(""),

  // Douche, bad of beide: het gekozen element in het rood
  bathShower: [bath.walls(14, 12, 132, 76, 8, 18), bath.vanity(26, 12, 34, 1), bath.toilet(14, 44), bath.shower(100, 12, 46, 44, true)].join(""),
  bathTub: [bath.walls(14, 12, 132, 76, 8, 18), bath.vanity(26, 12, 34, 1), bath.toilet(14, 44), bath.tub(76, 66, 70, 22, true)].join(""),
  bathBoth: [bath.walls(14, 12, 132, 76, 8, 18), bath.vanity(26, 12, 34, 1), bath.toilet(14, 44), bath.shower(100, 12, 46, 44, true), bath.tub(58, 66, 88, 22, true)].join(""),

  // Wandtegels: volledig of gedeeltelijk betegeld
  tilesFull: (() => {
    let out = bathFront.floor + `<rect class="pl-thin" x="28" y="10" width="104" height="78"/>`;
    for (let x = 41; x < 132; x += 13) out += `<path class="pl-thin pl-accent" d="M${x} 10V88"/>`;
    for (let y = 23; y < 88; y += 13) out += `<path class="pl-thin pl-accent" d="M28 ${y}H132"/>`;
    out += `<rect class="pl-thin pl-accent" x="28" y="10" width="104" height="78"/>`;
    return out + bathFront.vanity(56, 48, 1);
  })(),
  tilesPartial: (() => {
    let out = bathFront.floor + `<rect class="pl-thin" x="28" y="10" width="104" height="78"/>`;
    for (let x = 41; x < 132; x += 13) out += `<path class="pl-thin pl-accent" d="M${x} 49V88"/>`;
    for (let y = 62; y < 88; y += 13) out += `<path class="pl-thin pl-accent" d="M28 ${y}H132"/>`;
    out += `<rect class="pl-thin pl-accent" x="28" y="49" width="104" height="39"/>`;
    return out + bathFront.vanity(56, 48, 1);
  })(),

  // Plafond met spots (ja) of bestaand plafond (nee)
  ceilingYes: [
    bathFront.floor,
    `<path class="pl-wall" d="M24 88V12H136V88"/>`,
    `<rect class="pl-unit pl-accent" x="24" y="12" width="112" height="10"/>`,
    ...[52, 80, 108].map((x) => `<rect class="pl-unit pl-accent" x="${x - 4}" y="22" width="8" height="2.5" rx="1"/><path class="pl-dash pl-accent" d="M${x - 3} 26L${x - 14} 62M${x + 3} 26L${x + 14} 62"/>`),
    bathFront.vanity(56, 48, 1, false, false)
  ].join(""),
  ceilingNo: [
    bathFront.floor,
    `<path class="pl-wall" d="M24 88V12H136V88"/>`,
    `<path class="pl-thin" d="M80 12V28"/><path class="pl-unit" d="M72 37L76 28H84L88 37Z"/>`,
    bathFront.vanity(56, 48, 1, false, false)
  ].join(""),

  // Lavabomeubel enkel of dubbel (schuin van bovenaf, zodat de wasbakken zichtbaar zijn)
  vanitySingle: vanityTop(1),
  vanityDouble: vanityTop(2),

  // Toilet in de badkamer: staand toilet met reservoir (zijaanzicht)
  toiletYes: toiletSide("pl-unit", "pl-thin"),
  toiletNo: toiletSide("pl-dash", "pl-dash") +
    `<circle class="pl-thin" cx="83" cy="51" r="42"/><path class="pl-thin" d="M53.3 21.3L112.7 80.7"/>`
});

// Lavabomeubel als los object: blad met ovale wasbak(ken), kraan en lades
function vanityTop(basins) {
  const w = basins === 1 ? 84 : 124;
  const x = 80 - w / 2;
  const back = 8; // perspectief: achterrand iets smaller
  let out = `<path class="pl-faint" d="M${x + 6} 89H${x + w - 6}"/>`;
  // Kast met lades
  out += `<rect class="pl-unit" x="${x + 4}" y="55" width="${w - 8}" height="26" rx="1"/>`;
  out += `<path class="pl-thin" d="M${x + 4} 68H${x + w - 4}"/>`;
  for (let i = 0; i < basins; i += 1) {
    const cx = x + (w / (basins * 2)) * (i * 2 + 1);
    out += `<path class="pl-thin" d="M${cx - 6} 61.5h12M${cx - 6} 74.5h12"/>`;
    if (i > 0) out += `<path class="pl-thin" d="M${x + (w / basins) * i} 55V81"/>`;
  }
  // Blad: bovenvlak in perspectief + voorrand
  out += `<path class="pl-unit" d="M${x + back} 36H${x + w - back}L${x + w} 50H${x}Z"/>`;
  out += `<rect class="pl-unit" x="${x}" y="50" width="${w}" height="5" rx="0.5"/>`;
  // Wasbakken met afvoer en kraan
  for (let i = 0; i < basins; i += 1) {
    const cx = x + (w / (basins * 2)) * (i * 2 + 1);
    out += `<path class="pl-thin" d="M${cx} 38.5V29.5Q${cx} 27 ${cx + 2.5} 27H${cx + 6}V30"/>`;
    out += `<ellipse class="pl-unit" cx="${cx}" cy="44" rx="${basins === 1 ? 20 : 17}" ry="4.6"/>`;
    out += `<ellipse class="pl-thin" cx="${cx}" cy="44.6" rx="${basins === 1 ? 15 : 12.5}" ry="2.8"/>`;
    out += `<circle class="pl-dot" cx="${cx}" cy="45" r="0.9"/>`;
  }
  return out;
}

// Staand toilet met reservoir, zijaanzicht
function toiletSide(body, detail) {
  return [
    `<path class="pl-faint" d="M44 89H118"/>`,
    // Reservoir met deksel en spoelknop
    `<rect class="${body}" x="94" y="20" width="18" height="32" rx="2.5"/>`,
    `<rect class="${body}" x="92" y="16" width="22" height="5" rx="2"/>`,
    `<rect class="${detail}" x="100" y="13" width="6" height="3" rx="1"/>`,
    // Pot + voet tot op de vloer
    `<path class="${body}" d="M94 52H58Q50 52 52 59Q55 69 68 72L65 88H98L95 68V52Z"/>`,
    // Zitting
    `<rect class="${body}" x="54" y="48" width="42" height="4" rx="2"/>`
  ].join("");
}

// ---------- Binnenafwerking: kamer met plankenvloer, groeit per optie ----------
function roomWithFloor(x, y, w, h) {
  const r = Math.min(16, h / 3);
  let out = `<path class="pl-wall" d="M${x + 6} ${y + h}H${x}V${y}H${x + w}V${y + h}H${x + 6 + r}"/>` + plan.door(x + 6 + r, y + h, r);
  let row = 0;
  for (let yy = y + 8; yy < y + h - 1; yy += 8) {
    out += `<path class="pl-faint" d="M${x + 2} ${yy}H${x + w - 2}"/>`;
    for (let xx = x + 14 + (row % 2) * 12; xx < x + w - 4; xx += 26) {
      out += `<path class="pl-faint" d="M${xx} ${yy - 8}V${yy}"/>`;
    }
    row += 1;
  }
  return out;
}

Object.assign(illustrations, {
  roomS: roomWithFloor(52, 26, 56, 48),
  roomM: roomWithFloor(38, 20, 84, 60),
  roomL: roomWithFloor(22, 14, 116, 72),
  roomXL: roomWithFloor(6, 8, 148, 84)
});

function svgIllustration(name) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${illustrations[name]}</svg>`;
}

const questions = {
  interest: {
    labels: ["Badkamer", "Keuken", "Binnenafwerking"],
    icons: ["bath", "cookingPot", "paintRoller"],
    values: ["bathroom", "kitchen", "interior"]
  },
  bathroomSize: {
    labels: ["<6m²", "7m² - 12 m²", "13m² - 20m²", "> 20m²"],
    display: ["&lt; 6 m²", "7 – 12 m²", "13 – 20 m²", "&gt; 20 m²"],
    illustrations: ["bathS", "bathM", "bathL", "bathXL"],
    values: [1, 2, 3, 4]
  },
  bathroomStyle: {
    labels: ["Moderne badkamer", "Klassieke badkamer"],
    descriptions: [
      "Strakke lijnen, minimalistisch en tijdloos design",
      "Tijdloze elegantie en warme uitstraling"
    ],
    images: ["images/badkamer-modern.webp", "images/badkamer-klassiek.webp"],
    values: [1, 2]
  },
  bathroomComfort: {
    labels: ["Comfort", "Luxe"],
    descriptions: [
      "Kwalitatieve materialen, mooi en degelijk",
      "Exclusieve materialen en een luxueuze afwerking"
    ],
    icons: ["armchair", "gem"],
    values: [0, 1]
  },
  bathroomTiling: {
    labels: ["Geheel", "Gedeeltelijk"],
    descriptions: ["Alle wanden tot aan het plafond", "Enkel onderaan en waar nodig"],
    illustrations: ["tilesFull", "tilesPartial"],
    illustrationLayout: "stack",
    accent: true,
    values: [1, 2]
  },
  bathroomCeiling: {
    labels: ["Ja", "Nee"],
    illustrations: ["ceilingYes", "ceilingNo"],
    illustrationLayout: "stack",
    accent: true,
    values: [1, 0]
  },
  bathroomBathType: {
    labels: ["Douche", "Bad", "Beide"],
    illustrations: ["bathShower", "bathTub", "bathBoth"],
    illustrationLayout: "stack",
    accent: true,
    values: [1, 2, 3]
  },
  bathroomVanity: {
    labels: ["Enkel", "Dubbel"],
    illustrations: ["vanitySingle", "vanityDouble"],
    illustrationLayout: "stack",
    values: [1, 2]
  },
  bathroomToilet: {
    labels: ["Ja", "Nee"],
    illustrations: ["toiletYes", "toiletNo"],
    illustrationLayout: "stack",
    values: [1, 0]
  },
  bathroomTiming: {
    labels: ["Zo snel mogelijk", "Binnen de 6 maanden", "Binnen het jaar", "Ik ben gewoon nieuwsgierig"],
    icons: ["rocket", "calendar", "calendarRange", "lightbulb"],
    values: [1, 2, 3, 4]
  },
  kitchenSize: {
    labels: ["<8m²", "8m² - 14m²", "15m² - 24m²", "> 24m²"],
    display: ["&lt; 8 m²", "8 – 14 m²", "15 – 24 m²", "&gt; 24 m²"],
    illustrations: ["kitchenS", "kitchenM", "kitchenL", "kitchenXL"],
    values: [1, 2, 3, 4]
  },
  kitchenStyle: {
    labels: ["Moderne keuken", "Landelijke keuken"],
    descriptions: [
      "Strakke lijnen, minimalistisch en tijdloos design",
      "Warm, gezellig en vol karakter"
    ],
    images: ["images/keuken-modern.webp", "images/keuken-landelijk.webp"],
    values: [1, 2]
  },
  kitchenScope: {
    labels: ["Fronten en werkblad", "Volledige vernieuwing", "Nieuwe indeling"],
    descriptions: [
      "Je kasten blijven, ze krijgen een nieuwe look",
      "Nieuwe kasten, werkblad en toestellen",
      "Een andere opstelling, bv. met kookeiland"
    ],
    illustrations: ["scopeFronts", "scopeFull", "scopeLayout"],
    illustrationLayout: "stack",
    accent: true,
    values: [1, 2, 3]
  },
  kitchenFinish: {
    labels: ["Comfort", "Luxe"],
    descriptions: [
      "Degelijke materialen en betrouwbare toestellen",
      "Premium afwerking en topapparatuur"
    ],
    icons: ["armchair", "gem"],
    values: [0, 1]
  },
  kitchenTech: {
    labels: ["Bestaande aansluitingen", "Nieuwe toestellen/aansluitingen", "Volledig vernieuwde technieken"],
    icons: ["plug", "refrigerator", "wrench"],
    values: [1, 2, 3]
  },
  kitchenWorktop: {
    labels: ["Laminaat/compact", "Composiet", "Natuursteen/keramiek"],
    illustrations: ["worktopLaminate", "worktopComposite", "worktopStone"],
    illustrationLayout: "stack",
    values: [1, 2, 3]
  },
  kitchenTiming: {
    labels: ["Zo snel mogelijk", "Binnen de 6 maanden", "Binnen het jaar", "Ik ben gewoon nieuwsgierig"],
    icons: ["rocket", "calendar", "calendarRange", "lightbulb"],
    values: [1, 2, 3, 4]
  },
  interiorType: {
    labels: ["Vloeren", "Wanden & Plafonds", "Tegels", "Gyproc & Plaatsen", "Deuren & Kozijnen", "Schrijnwerk"],
    icons: ["floor", "paintRoller", "grid", "panels", "doorOpen", "hammer"],
    values: [1, 2, 3, 4, 5, 6]
  },
  interiorSurface: {
    labels: ["<25m²", "25m² - 60m²", "61m² - 120m²", "> 120m²"],
    display: ["&lt; 25 m²", "25 – 60 m²", "61 – 120 m²", "&gt; 120 m²"],
    illustrations: ["roomS", "roomM", "roomL", "roomXL"],
    values: [1, 2, 3, 4]
  },
  interiorFinish: {
    labels: ["Standaard", "Hoogwaardig", "Maatwerk/detailafwerking"],
    icons: ["thumbsUp", "sparkles", "ruler"],
    values: [1, 2, 3]
  },
  interiorPrep: {
    labels: ["Nee, enkel plaatsing", "Beperkte voorbereiding", "Afbraak en volledige voorbereiding"],
    icons: ["circleCheck", "brush", "pickaxe"],
    values: [1, 2, 3]
  },
  interiorTiming: {
    labels: ["Zo snel mogelijk", "Binnen de 6 maanden", "Binnen het jaar", "Ik ben gewoon nieuwsgierig"],
    icons: ["rocket", "calendar", "calendarRange", "lightbulb"],
    values: [1, 2, 3, 4]
  }
};

const requiredByView = {
  interest: ["interest"],
  "bathroom-size": ["bathroomSize"],
  "bathroom-style": ["bathroomStyle"],
  "bathroom-comfort": ["bathroomComfort"],
  "bathroom-tiling": ["bathroomTiling"],
  "bathroom-sanitary": ["bathroomCeiling", "bathroomBathType"],
  "bathroom-furniture": ["bathroomVanity", "bathroomToilet"],
  "bathroom-timing": ["bathroomTiming"],
  "kitchen-size": ["kitchenSize"],
  "kitchen-style": ["kitchenStyle"],
  "kitchen-scope": ["kitchenScope"],
  "kitchen-finish": ["kitchenFinish"],
  "kitchen-details": ["kitchenTech", "kitchenWorktop"],
  "kitchen-timing": ["kitchenTiming"],
  "interior-type": ["interiorType"],
  "interior-surface": ["interiorSurface"],
  "interior-details": ["interiorFinish", "interiorPrep"],
  "interior-timing": ["interiorTiming"],
  lead: []
};

const routeQuestionKeys = {
  bathroom: [
    "bathroomSize",
    "bathroomStyle",
    "bathroomComfort",
    "bathroomTiling",
    "bathroomCeiling",
    "bathroomBathType",
    "bathroomVanity",
    "bathroomToilet",
    "bathroomTiming"
  ],
  kitchen: [
    "kitchenSize",
    "kitchenStyle",
    "kitchenScope",
    "kitchenFinish",
    "kitchenTech",
    "kitchenWorktop",
    "kitchenTiming"
  ],
  interior: [
    "interiorType",
    "interiorSurface",
    "interiorFinish",
    "interiorPrep",
    "interiorTiming"
  ]
};

const state = {
  view: "interest",
  answers: {}
};

const els = {
  views: [...document.querySelectorAll("[data-view]")],
  price: document.querySelector("[data-price]"),
  form: document.querySelector("[data-form]"),
  formError: document.querySelector("[data-form-error]"),
  progress: document.querySelector("[data-progress]"),
  progressLabel: document.querySelector("[data-progress-label]"),
  progressPercent: document.querySelector("[data-progress-percent]"),
  progressBar: document.querySelector("[data-progress-bar]"),
  progressTrack: document.querySelector("[data-progress-track]")
};

const euro = new Intl.NumberFormat("nl-BE", {
  style: "currency",
  currency: "EUR",
  maximumFractionDigits: 0
});

function activeRoute() {
  return state.answers.interest || "bathroom";
}

function activeFlow() {
  return routeFlows[activeRoute()] || routeFlows.bathroom;
}

function renderQuestions() {
  Object.entries(questions).forEach(([key, question]) => {
    const group = document.querySelector(`[data-question="${key}"]`);
    if (!group) return;

    group.classList.toggle("has-icons", Boolean(question.icons));
    group.classList.toggle("has-media", Boolean(question.images));

    group.classList.toggle("has-illustrations", Boolean(question.illustrations));
    group.classList.toggle("stack-illustrations", question.illustrationLayout === "stack");
    group.classList.toggle("accent-illustrations", Boolean(question.accent));

    group.innerHTML = question.labels
      .map((label, index) => {
        const description = question.descriptions?.[index];
        const icon = question.icons?.[index];
        const image = question.images?.[index];
        const illustration = question.illustrations?.[index];
        const title = question.display?.[index] || label.replace(/\//g, "/<wbr>");
        const position = question.imagePositions?.[index] || "center";
        const check = `<span class="option-check">${svgIcon("check")}</span>`;
        const classes = ["radio-option", icon && "has-icon", image && "has-media", illustration && "has-illustration"].filter(Boolean).join(" ");
        const media = image
          ? `<span class="option-media"><img src="${image}" alt="${label}" loading="lazy" style="object-position: ${position}">${check}</span>`
          : illustration
            ? `<span class="option-illustration">${svgIllustration(illustration)}</span>${check}`
            : "";
        const iconHtml = icon ? `<span class="option-icon">${svgIcon(icon)}</span>` : "";
        return `
        <button
          class="${classes}"
          type="button"
          data-answer="${key}"
          data-value="${question.values[index]}"
        >${media}${iconHtml}<span class="option-text"><strong class="option-title">${title}</strong>${description ? `<span class="option-description">${description}</span>` : ""}</span></button>
      `;
      })
      .join("");
  });
}

function renderView() {
  els.views.forEach((view) => {
    view.classList.toggle("is-active", view.dataset.view === state.view);
  });

  document.querySelectorAll("[data-answer]").forEach((button) => {
    const key = button.dataset.answer;
    button.classList.toggle("is-selected", String(state.answers[key]) === button.dataset.value);
  });

  if (els.price) {
    els.price.textContent = euro.format(calculatePrice());
  }

  renderProgress();

  window.scrollTo({ top: 0, behavior: "auto" });
}

function renderProgress() {
  if (!els.progress) return;
  const steps = activeFlow().filter((view) => view !== "result");
  const index = steps.indexOf(state.view);
  const isResult = state.view === "result" || index === -1;
  els.progress.hidden = isResult;
  if (isResult) return;

  const percent = Math.round((index / steps.length) * 100);
  els.progressLabel.textContent = `Stap ${index + 1} van ${steps.length}`;
  els.progressPercent.textContent = `${percent}%`;
  els.progressBar.style.width = `${percent}%`;
  els.progressTrack.setAttribute("aria-valuenow", String(percent));
}

function hideErrors(view = state.view) {
  (requiredByView[view] || []).forEach((key) => {
    document.querySelector(`[data-error="${key}"]`)?.classList.remove("is-visible");
  });
  els.formError?.classList.remove("is-visible");
}

function validateView(view = state.view) {
  const missing = (requiredByView[view] || []).filter((key) => state.answers[key] === undefined);
  hideErrors(view);
  missing.forEach((key) => {
    document.querySelector(`[data-error="${key}"]`)?.classList.add("is-visible");
  });
  return missing.length === 0;
}

function goToView(view) {
  state.view = view;
  hideErrors();
  renderView();
}

function nextView() {
  const flow = activeFlow();
  const currentIndex = flow.indexOf(state.view);
  return flow[Math.min(flow.length - 1, currentIndex + 1)];
}

function previousView() {
  const flow = activeFlow();
  const currentIndex = flow.indexOf(state.view);
  return flow[Math.max(0, currentIndex - 1)];
}

function clearOtherRouteAnswers(route) {
  Object.entries(routeQuestionKeys).forEach(([routeName, keys]) => {
    if (routeName === route) return;
    keys.forEach((key) => {
      delete state.answers[key];
    });
  });
}

function calculatePrice() {
  if (activeRoute() === "kitchen") {
    return calculateKitchenPrice();
  }
  if (activeRoute() === "interior") {
    return calculateInteriorPrice();
  }
  return calculateBathroomPrice();
}

function calculateBathroomPrice() {
  const size = Number(state.answers.bathroomSize || 1);
  const comfort = Number(state.answers.bathroomComfort || 0);
  const tiling = Number(state.answers.bathroomTiling || 1);
  const ceiling = Number(state.answers.bathroomCeiling || 0);
  const bathType = Number(state.answers.bathroomBathType || 1);
  const vanity = Number(state.answers.bathroomVanity || 1);
  const toilet = Number(state.answers.bathroomToilet || 0);

  const fixedCosts = {
    1: 5168.96,
    2: 6569.75,
    3: 8132.67,
    4: 10598
  };

  const ceilingCosts = {
    1: 428.24,
    2: 1016.33,
    3: 1711.77,
    4: 2304.52
  };

  const showerBathCosts = {
    "1-0": 3487.96,
    "1-1": 5240.89,
    "2-0": 2691.85,
    "2-1": 4615.11,
    "3-0": 6179.82,
    "3-1": 9856.01
  };

  const vanityCosts = {
    "1-0": 2509.17,
    "1-1": 4312.39,
    "2-0": 3937.35,
    "2-1": 6408.61
  };

  const tilingCosts = {
    "1-1-0": 4820.21,
    "1-2-0": 6836.3,
    "1-3-0": 9633.96,
    "1-4-0": 11894.73,
    "1-1-1": 5535.71,
    "1-2-1": 7869.8,
    "1-3-1": 11117.96,
    "1-4-1": 13472.13,
    "2-1-0": 2675.31,
    "2-2-0": 3700.18,
    "2-3-0": 5713.81,
    "2-4-0": 7129.45,
    "2-1-1": 2913.81,
    "2-2-1": 4203.68,
    "2-3-1": 6535.31,
    "2-4-1": 7962.93
  };

  const toiletCost = toilet === 1 ? (comfort === 1 ? 1612.16 : 2026.37) : 0;

  return Math.round(
    (fixedCosts[size] || 0) +
    (ceiling === 1 ? ceilingCosts[size] || 0 : 0) +
    (showerBathCosts[`${bathType}-${comfort}`] || 0) +
    (vanityCosts[`${vanity}-${comfort}`] || 0) +
    toiletCost +
    (tilingCosts[`${tiling}-${size}-${comfort}`] || 0)
  );
}

function calculateKitchenPrice() {
  const size = Number(state.answers.kitchenSize || 1);
  const scope = Number(state.answers.kitchenScope || 1);
  const finish = Number(state.answers.kitchenFinish || 0);
  const tech = Number(state.answers.kitchenTech || 1);
  const worktop = Number(state.answers.kitchenWorktop || 1);

  const baseBySize = {
    1: 6400,
    2: 8600,
    3: 11800,
    4: 15400
  };

  const scopeCosts = {
    1: 2100,
    2: 6700,
    3: 9800
  };

  const finishMultiplier = finish === 1 ? 1.28 : 1;
  const techCosts = {
    1: 0,
    2: 2450,
    3: 5200
  };

  const worktopCosts = {
    1: 0,
    2: 1850,
    3: 3600
  };

  return Math.round(((baseBySize[size] || 0) + (scopeCosts[scope] || 0)) * finishMultiplier +
    (techCosts[tech] || 0) +
    (worktopCosts[worktop] || 0));
}

function calculateInteriorPrice() {
  const type = Number(state.answers.interiorType || 1);
  const surface = Number(state.answers.interiorSurface || 1);
  const finish = Number(state.answers.interiorFinish || 1);
  const prep = Number(state.answers.interiorPrep || 1);

  const baseByType = {
    1: 2400,
    2: 2200,
    3: 2600,
    4: 2800,
    5: 1800,
    6: 3200
  };

  const surfaceMultiplier = {
    1: 1,
    2: 1.85,
    3: 3.1,
    4: 4.4
  };

  const finishMultiplier = {
    1: 1,
    2: 1.28,
    3: 1.62
  };

  const prepCosts = {
    1: 0,
    2: 950,
    3: 2100
  };

  return Math.round((baseByType[type] || 0) *
    (surfaceMultiplier[surface] || 1) *
    (finishMultiplier[finish] || 1) +
    (prepCosts[prep] || 0));
}

document.addEventListener("click", (event) => {
  const answer = event.target.closest("[data-answer]");
  if (answer) {
    const key = answer.dataset.answer;
    const rawValue = answer.dataset.value;
    state.answers[key] = Number.isNaN(Number(rawValue)) ? rawValue : Number(rawValue);
    if (key === "interest") {
      clearOtherRouteAnswers(state.answers.interest);
    }
    hideErrors(state.view);
    renderView();
    return;
  }

  if (event.target.closest("[data-next]")) {
    if (validateView()) {
      goToView(nextView());
    }
    return;
  }

  if (event.target.closest("[data-prev]")) {
    goToView(previousView());
    return;
  }

  if (event.target.closest("[data-restart]")) {
    state.view = "interest";
    state.answers = {};
    els.form?.reset();
    renderView();
  }
});

const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid", "fbclid"];
const trackingParams = (() => {
  const params = new URLSearchParams(window.location.search);
  const stored = {};
  try {
    Object.assign(stored, JSON.parse(sessionStorage.getItem("renobest-tracking") || "{}"));
  } catch (error) {
    // sessionStorage niet beschikbaar: alleen de huidige URL gebruiken
  }
  trackingKeys.forEach((key) => {
    if (params.get(key)) stored[key] = params.get(key);
  });
  try {
    sessionStorage.setItem("renobest-tracking", JSON.stringify(stored));
  } catch (error) {
    // negeren
  }
  return stored;
})();

function answerLabel(key) {
  const question = questions[key];
  const value = state.answers[key];
  if (!question) return String(value);
  const index = question.values.findIndex((item) => String(item) === String(value));
  return index >= 0 ? question.labels[index] : String(value);
}

function answersSummary() {
  return (routeQuestionKeys[activeRoute()] || [])
    .filter((key) => state.answers[key] !== undefined)
    .map((key) => `${key}: ${answerLabel(key)}`)
    .join(" | ");
}

function setHidden(name, value) {
  const field = els.form.elements.namedItem(name);
  if (field) field.value = value ?? "";
}

let sending = false;

els.form?.addEventListener("submit", async (event) => {
  event.preventDefault();
  if (sending) return;
  els.formError?.classList.remove("is-visible");

  if (!els.form.checkValidity()) {
    els.formError.textContent = "Vul alle velden in en aanvaard de privacy policy.";
    els.formError?.classList.add("is-visible");
    return;
  }

  setHidden("interesse", answerLabel("interest"));
  setHidden("antwoorden", answersSummary());
  setHidden("richtprijs", euro.format(calculatePrice()));
  trackingKeys.forEach((key) => setHidden(key, trackingParams[key]));
  setHidden("pagina", window.location.href);

  const submitButton = els.form.querySelector('button[type="submit"]');
  sending = true;
  if (submitButton) submitButton.disabled = true;

  try {
    const body = new URLSearchParams(new FormData(els.form));
    body.set("privacy", els.form.elements.namedItem("privacy").checked ? "ja" : "nee");
    const response = await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString()
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (window.dataLayer) {
      window.dataLayer.push({ event: "renobest_calculator_lead", interesse: state.answers.interest });
    }
    goToView("result");
  } catch (error) {
    els.formError.textContent = "Je aanvraag kon niet verzonden worden. Probeer het opnieuw of bel 011 12 04 00.";
    els.formError?.classList.add("is-visible");
  } finally {
    sending = false;
    if (submitButton) submitButton.disabled = false;
  }
});

renderQuestions();
renderView();
