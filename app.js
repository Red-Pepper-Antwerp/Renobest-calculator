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

// ---------- 3D (isometrisch) ----------
// Een scène is een lijst blokken { b: [x, y, z, breedte, diepte, hoogte], k: soort, doors }.
// We kijken vanuit de hoek +x/+y/+z: zichtbaar zijn het bovenvlak, het voorvlak (+y) en het zijvlak (+x).
const ISO_C = Math.cos(Math.PI / 6);
const ISO_S = Math.sin(Math.PI / 6);
const isoPoint = (x, y, z) => [(x - y) * ISO_C, (x + y) * ISO_S - z];

function isoFaces([x, y, z, w, d, h]) {
  return {
    top: [[x, y, z + h], [x + w, y, z + h], [x + w, y + d, z + h], [x, y + d, z + h]],
    front: [[x, y + d, z], [x + w, y + d, z], [x + w, y + d, z + h], [x, y + d, z + h]],
    side: [[x + w, y, z], [x + w, y + d, z], [x + w, y + d, z + h], [x + w, y, z + h]]
  };
}

// Tekenvolgorde: wat achter een ander blok staat (en op het scherm overlapt) eerst.
function isoSort(boxes) {
  const eps = 1e-6;
  const span = ({ b: [x, y, , w, d] }) => [x - (y + d), x + w - y];
  const overlap = (a, b) => {
    const [a0, a1] = span(a);
    const [b0, b1] = span(b);
    return a0 < b1 - eps && b0 < a1 - eps;
  };
  const behind = (a, b) => {
    if (!overlap(a, b)) return false;
    const [ax, ay, az, aw, ad, ah] = a.b;
    const [bx, by, bz] = b.b;
    return ax + aw <= bx + eps || ay + ad <= by + eps || az + ah <= bz + eps;
  };
  const key = ({ b: [x, y, z, w, d, h] }) => x + w / 2 + y + d / 2 + z * 0.01 + h * 0.001;
  const rest = [...boxes];
  const out = [];
  while (rest.length) {
    const free = rest.filter((b) => !rest.some((a) => a !== b && behind(a, b) && !behind(b, a)));
    const pool = free.length ? free : rest;
    pool.sort((p, q) => key(p) - key(q));
    const next = pool[0];
    out.push(next);
    rest.splice(rest.indexOf(next), 1);
  }
  return out;
}

function isoScene(boxes) {
  const pts = [];
  let body = "";
  const poly = (points, cls) => {
    const p = points.map((q) => isoPoint(...q));
    pts.push(...p);
    return `<polygon class="${cls}" points="${p.map(([u, v]) => `${u.toFixed(3)},${v.toFixed(3)}`).join(" ")}"/>`;
  };
  isoSort(boxes).forEach((box) => {
    const f = isoFaces(box.b);
    const k = `iso-face iso-${box.k}`;
    body += poly(f.side, `${k} iso-side`) + poly(f.front, `${k} iso-front`) + poly(f.top, `${k} iso-top`);
    // Deurtjes/lades als lijnen op het zichtbare voorvlak
    if (box.doors) {
      const [x, y, z, w, d, h] = box.b;
      for (let i = 1; i < box.doors; i += 1) {
        const [u1, v1] = isoPoint(x + (w / box.doors) * i, y + d, z + 0.04);
        const [u2, v2] = isoPoint(x + (w / box.doors) * i, y + d, z + h - 0.04);
        body += `<line class="iso-line" x1="${u1.toFixed(3)}" y1="${v1.toFixed(3)}" x2="${u2.toFixed(3)}" y2="${v2.toFixed(3)}"/>`;
      }
    }
    if (box.doorsSide) {
      const [x, y, z, w, d, h] = box.b;
      for (let i = 1; i < box.doorsSide; i += 1) {
        const [u1, v1] = isoPoint(x + w, y + (d / box.doorsSide) * i, z + 0.04);
        const [u2, v2] = isoPoint(x + w, y + (d / box.doorsSide) * i, z + h - 0.04);
        body += `<line class="iso-line" x1="${u1.toFixed(3)}" y1="${v1.toFixed(3)}" x2="${u2.toFixed(3)}" y2="${v2.toFixed(3)}"/>`;
      }
    }
  });
  const xs = pts.map((p) => p[0]);
  const ys = pts.map((p) => p[1]);
  return { body, minX: Math.min(...xs), maxX: Math.max(...xs), minY: Math.min(...ys), maxY: Math.max(...ys) };
}

// Een reeks scènes op dezelfde schaal: grotere kamers zien er ook groter uit.
function isoSet(scenes) {
  const built = Object.fromEntries(Object.entries(scenes).map(([name, boxes]) => [name, isoScene(boxes)]));
  const all = Object.values(built);
  const W = Math.max(...all.map((s) => s.maxX - s.minX)) * 1.04;
  const H = Math.max(...all.map((s) => s.maxY - s.minY)) * 1.04;
  return Object.fromEntries(Object.entries(built).map(([name, s]) => {
    const cx = (s.minX + s.maxX) / 2;
    const cy = (s.minY + s.maxY) / 2;
    const viewBox = `${(cx - W / 2).toFixed(3)} ${(cy - H / 2).toFixed(3)} ${W.toFixed(3)} ${H.toFixed(3)}`;
    return [name, `<svg class="iso" xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" aria-hidden="true">${s.body}</svg>`];
  }));
}

// Bouwstenen voor keukens
const isoKitchen = {
  room: (W, D, H = 2.6) => [
    { b: [0, 0, -0.08, W, D, 0.08], k: "floor" },
    { b: [0, -0.12, 0, W, 0.12, H], k: "wall" },
    { b: [-0.12, -0.12, 0, 0.12, D + 0.12, H], k: "wall" }
  ],
  base: (x, y, w, d = 0.62, doors = Math.max(1, Math.round(w / 0.6))) => [
    { b: [x, y, 0, w, d, 0.86], k: "unit", doors },
    { b: [x === 0 ? 0 : x - 0.02, y, 0.86, w + (x === 0 ? 0.02 : 0.04), d + 0.03, 0.05], k: "worktop" }
  ],
  baseSide: (x, y, d, w = 0.62) => [
    { b: [x, y, 0, w, d, 0.86], k: "unit", doorsSide: Math.max(1, Math.round(d / 0.6)) },
    { b: [x, y - 0.02, 0.86, w + 0.03, d + 0.04, 0.05], k: "worktop" }
  ],
  upper: (x, w) => [{ b: [x, 0, 1.5, w, 0.36, 0.72], k: "unit", doors: Math.max(1, Math.round(w / 0.6)) }],
  tall: (x, w = 0.64, y = 0) => [{ b: [x, y, 0, w, 0.64, 2.2], k: "unit", doors: Math.max(1, Math.round(w / 0.62)) }],
  hob: (x, y = 0.12) => [{ b: [x, y, 0.91, 0.6, 0.42, 0.015], k: "dark" }],
  sink: (x, y = 0.12, w = 0.5, d = 0.38) => [{ b: [x, y, 0.91, w, d, 0.015], k: "dark" }],
  island: (x, y, w, d = 0.95) => [
    { b: [x, y, 0, w, d, 0.86], k: "unit" },
    { b: [x - 0.05, y - 0.05, 0.86, w + 0.1, d + 0.25, 0.05], k: "worktop" }
  ],
  stools: (x, y, n, gap = 0.62) => Array.from({ length: n }, (_, i) => ({ b: [x + i * gap, y, 0, 0.36, 0.36, 0.68], k: "stool" })),
  table: (x, y, w, d) => [{ b: [x, y, 0.72, w, d, 0.05], k: "worktop" }, { b: [x + w / 2 - 0.08, y + d / 2 - 0.08, 0, 0.16, 0.16, 0.72], k: "unit" }],
  chair: (x, y) => [{ b: [x, y, 0, 0.4, 0.4, 0.46], k: "stool" }]
};

Object.assign(illustrations, isoSet({
  // < 8 m²: compacte hoekkeuken
  kitchen3dS: [
    ...isoKitchen.room(3.0, 2.5),
    ...isoKitchen.base(0, 0, 3.0),
    ...isoKitchen.baseSide(0, 0.62, 1.2),
    ...isoKitchen.upper(0.6, 2.4),
    ...isoKitchen.hob(1.9),
    ...isoKitchen.sink(0.08, 1.1, 0.4, 0.46)
  ],
  // 8 – 14 m²: kastenwand, hoge kast en klein eiland
  kitchen3dM: [
    ...isoKitchen.room(4.0, 3.4),
    ...isoKitchen.base(0, 0, 3.3),
    ...isoKitchen.tall(3.33, 0.67),
    ...isoKitchen.upper(0.3, 2.7),
    ...isoKitchen.sink(0.7),
    ...isoKitchen.hob(2.0),
    ...isoKitchen.island(1.1, 1.75, 1.7),
    ...isoKitchen.stools(1.45, 2.95, 2, 0.75)
  ],
  // 15 – 24 m²: U-keuken met groot eiland
  kitchen3dL: [
    ...isoKitchen.room(5.2, 4.2),
    ...isoKitchen.base(0, 0, 3.9),
    ...isoKitchen.tall(3.92, 1.28),
    ...isoKitchen.baseSide(0, 0.62, 1.8),
    ...isoKitchen.upper(0.6, 3.3),
    ...isoKitchen.sink(1.0),
    ...isoKitchen.hob(2.6),
    ...isoKitchen.island(1.5, 2.1, 2.4),
    ...isoKitchen.stools(1.75, 3.35, 3, 0.75)
  ],
  // > 24 m²: leefkeuken met eiland en eettafel
  kitchen3dXL: [
    ...isoKitchen.room(6.6, 5.0),
    ...isoKitchen.tall(0, 1.28),
    ...isoKitchen.base(1.3, 0, 3.4),
    ...isoKitchen.upper(1.6, 2.8),
    ...isoKitchen.sink(1.9),
    ...isoKitchen.hob(3.4),
    ...isoKitchen.island(1.5, 2.2, 2.6),
    ...isoKitchen.stools(1.75, 3.45, 3, 0.8),
    ...isoKitchen.chair(5.0, 1.55),
    ...isoKitchen.chair(5.75, 1.55),
    ...isoKitchen.table(4.8, 2.05, 1.6, 0.9),
    ...isoKitchen.chair(5.0, 3.05),
    ...isoKitchen.chair(5.75, 3.05)
  ]
}));

function svgIllustration(name) {
  const art = illustrations[name];
  if (art.startsWith("<svg")) return art;
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 100" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${art}</svg>`;
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
    descriptions: ["Alle wanden tot aan het plafond", "Tot 1,2 m, en hoger in de douche"],
    values: [1, 2]
  },
  bathroomCeiling: {
    labels: ["Ja", "Nee"],
    values: [1, 0]
  },
  bathroomBathType: {
    labels: ["Douche", "Bad", "Beide"],
    values: [1, 2, 3]
  },
  bathroomVanity: {
    labels: ["Enkel", "Dubbel"],
    values: [1, 2]
  },
  bathroomToilet: {
    labels: ["Ja", "Nee"],
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
    descriptions: ["Warme houtlook, voordelig", "Strak en onderhoudsvriendelijk", "Natuurlijk en exclusief"],
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
  renderStage();

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
    const changed = String(state.answers[key]) !== String(rawValue);
    state.answers[key] = Number.isNaN(Number(rawValue)) ? rawValue : Number(rawValue);
    state.lastChange = changed ? key : null;
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

// ---------- Configurator: één 3D-keuken die meebouwt met de antwoorden ----------
const STAGE_ROOMS = { 1: [3.0, 2.6], 2: [4.2, 3.4], 3: [5.4, 4.3], 4: [6.8, 5.2] };
const STAGE_WALL = 2.6;

// Wat er in beeld verandert, per antwoord (wordt kort als label getoond)
const STAGE_MESSAGES = {
  kitchenSize: { 1: "Compacte keuken, kleiner dan 8 m²", 2: "Keuken van 8 tot 14 m²", 3: "Ruime keuken van 15 tot 24 m²", 4: "Leefkeuken van meer dan 24 m²" },
  kitchenStyle: { 1: "Strakke, moderne fronten", 2: "Landelijke kaderdeurtjes" },
  kitchenScope: { 1: "Nieuwe fronten en werkblad", 2: "Volledig nieuw, kasten tot aan het plafond", 3: "Kookeiland met krukken toegevoegd" },
  kitchenFinish: { 0: "Comfort-afwerking", 1: "Luxe: achterwand, ledlicht, hanglampen en gouden grepen" },
  kitchenTech: { 1: "Bestaande aansluitingen blijven", 2: "Nieuwe dampkap en inbouwoven", 3: "Dampkap, inbouwoven en koelkastkolom" },
  kitchenWorktop: { 1: "Werkblad in houtlook", 2: "Strak composiet werkblad", 3: "Werkblad in natuursteen" }
};

const cab = (id, b, fronts, face = "front") => ({ id, b, k: "unit", fronts, face });

function kitchenConfig(a) {
  const size = Number(a.kitchenSize || 2);
  const scope = Number(a.kitchenScope || 0);
  const luxe = Number(a.kitchenFinish) === 1;
  const tech = Number(a.kitchenTech || 1);
  const [W, D] = STAGE_ROOMS[size];
  const boxes = [
    { id: "floor", b: [0, 0, -0.08, W, D, 0.08], k: "floor", grid: true },
    { id: "wall-back", b: [0, -0.12, 0, W, 0.12, STAGE_WALL], k: "wall" },
    { id: "wall-left", b: [-0.12, -0.12, 0, 0.12, D + 0.12, STAGE_WALL], k: "wall" }
  ];
  const fronts = (w) => Math.max(1, Math.round(w / 0.6));

  // Opstelling per grootte; bij een extra koelkastkolom (tech 3) schuift de kastenrij op zodat alles past.
  const fridgeRoom = tech >= 3;
  const layout = {
    1: { runX: 0, run: 3.0, tall: null, side: 1.2, fridge: [0, 1.86, "side"] },
    2: fridgeRoom
      ? { runX: 0, run: 2.66, tall: [2.69, 0.67], side: 0, fridge: [3.36, 0, "front"] }
      : { runX: 0, run: 3.3, tall: [3.33, 0.67], side: 0 },
    3: fridgeRoom
      ? { runX: 0, run: 3.3, tall: [3.33, 1.28], side: 1.8, fridge: [4.61, 0, "front"] }
      : { runX: 0, run: 3.9, tall: [3.92, 1.28], side: 1.8 },
    4: { runX: 1.3, run: 3.4, tall: [0, 1.28], side: 0, fridge: [4.72, 0, "front"] }
  }[size];
  const { runX, run } = layout;

  // Onderkasten + werkblad tegen de achterwand
  boxes.push(cab("run", [runX, 0, 0, run, 0.62, 0.86], fronts(run)));
  const topX = runX === 0 ? 0 : runX - 0.02;
  const topW = Math.min(run + (runX === 0 ? 0.02 : 0.04), W - topX);
  boxes.push({ id: "run-top", b: [topX, 0, 0.86, topW, 0.65, 0.05], k: "worktop" });

  // Zijrij tegen de linkermuur (L-vorm)
  if (layout.side) {
    boxes.push(cab("side", [0, 0.62, 0, 0.62, layout.side, 0.86], fronts(layout.side), "side"));
    boxes.push({ id: "side-top", b: [0, 0.6, 0.86, 0.65, layout.side + 0.04, 0.05], k: "worktop" });
  }

  // Luxe: achterwand tussen werkblad en bovenkasten
  const upperX = runX + (size === 1 ? 0.6 : 0.3);
  const upperW = run - 0.6;
  if (luxe) boxes.push({ id: "splash", b: [runX, 0, 0.91, run, 0.02, 0.59], k: "splash" });

  // Bovenkasten; bij volledige vernieuwing tot aan het plafond
  const upperH = scope === 2 ? STAGE_WALL - 1.5 - 0.02 : 0.72;
  const hoodX = runX + run * 0.62 - 0.05; // dampkap boven de kookplaat (0,7 m breed)
  const upperSegments = tech >= 2
    ? [[upperX, hoodX - 0.08 - upperX], [hoodX + 0.78, upperX + upperW - (hoodX + 0.78)]]
    : [[upperX, upperW]];
  upperSegments.filter(([, w]) => w >= 0.3).forEach(([ux, uw], i) => {
    boxes.push(cab(i === 0 ? "upper" : `upper-${i}`, [ux, 0, 1.5, uw, 0.36, upperH], fronts(uw)));
    if (luxe) {
      boxes.push({ id: `glow-${i}`, b: [ux + 0.05, 0.022, 1.12, uw - 0.1, 0.004, 0.36], k: "glow" });
      boxes.push({ id: `led-${i}`, b: [ux + 0.05, 0.3, 1.46, uw - 0.1, 0.05, 0.035], k: "led" });
    }
  });

  // Hoge kast(en)
  if (layout.tall) {
    const [tx, tw] = layout.tall;
    boxes.push(cab("tall", [tx, 0, 0, tw, 0.64, 2.2], fronts(tw)));
    if (tech >= 2) boxes.push({ id: "oven", b: [tx + 0.08, 0.64, 0.95, Math.min(tw, 0.67) - 0.16, 0.012, 0.55], k: "glass" });
  } else if (tech >= 2) {
    // Kleine keuken: oven onder de kookplaat
    boxes.push({ id: "oven", b: [runX + run * 0.62 + 0.02, 0.62, 0.12, 0.56, 0.012, 0.6], k: "glass" });
  }
  // Koelkastkolom bij volledig vernieuwde technieken
  if (fridgeRoom && layout.fridge) {
    const [fx, fy, face] = layout.fridge;
    boxes.push(face === "side"
      ? cab("fridge", [fx, fy, 0, 0.64, 0.66, 2.2], 1, "side")
      : cab("fridge", [fx, fy, 0, 0.66, 0.64, 2.2], 1));
  }

  // Kookplaat en spoelbak
  const hobX = runX + run * 0.62;
  boxes.push({ id: "hob", b: [hobX, 0.12, 0.91, 0.6, 0.42, 0.015], k: "dark" });
  if (layout.side) boxes.push({ id: "sink", b: [0.08, 0.62 + layout.side * 0.35, 0.91, 0.42, 0.48, 0.015], k: "dark" });
  else boxes.push({ id: "sink", b: [runX + run * 0.18, 0.12, 0.91, 0.5, 0.38, 0.015], k: "dark" });

  // Dampkap
  if (tech >= 2) {
    boxes.push({ id: "hood", b: [hobX - 0.05, 0.02, 1.58, 0.7, 0.5, 0.14], k: "steel" });
    boxes.push({ id: "chimney", b: [hobX + 0.18, 0.02, 1.72, 0.24, 0.26, STAGE_WALL - 1.72], k: "steel" });
  }

  // Nieuwe indeling: kookeiland met krukken (+ hanglampen bij luxe)
  if (scope === 3) {
    const iw = { 1: 1.0, 2: 1.7, 3: 2.4, 4: 2.6 }[size];
    const id = size === 1 ? 0.6 : 0.95;
    const ix = { 1: 1.0, 2: 1.1, 3: 1.5, 4: 1.5 }[size];
    const iy = { 1: 1.5, 2: 1.75, 3: 2.1, 4: 2.2 }[size];
    boxes.push(cab("island", [ix, iy, 0, iw, id, 0.86], fronts(iw)));
    boxes.push({ id: "island-top", b: [ix - 0.05, iy - 0.05, 0.86, iw + 0.1, id + (size === 1 ? 0.1 : 0.25), 0.05], k: "worktop" });
    const n = size === 1 ? 0 : size === 2 ? 2 : 3;
    for (let i = 0; i < n; i += 1) {
      const sx = ix + 0.3 + i * ((iw - 0.6) / Math.max(1, n - 1)) - 0.18;
      boxes.push({ id: `stool-${i}`, b: [sx, iy + id + 0.3, 0, 0.36, 0.36, 0.68], k: "stool" });
    }
    if (luxe) {
      [0.3, 0.7].forEach((t, i) => {
        const lx = ix + iw * t - 0.13;
        boxes.push({ id: `cord-${i}`, b: [lx + 0.12, iy + id / 2, 1.78, 0.02, 0.02, STAGE_WALL - 1.78], k: "cord" });
        boxes.push({ id: `lamp-${i}`, b: [lx, iy + id / 2 - 0.12, 1.55, 0.26, 0.26, 0.23], k: "lamp" });
      });
    }
  }

  // Leefkeuken: eettafel met stoelen
  if (size === 4) {
    boxes.push({ id: "chair-0", b: [5.0, 1.55, 0, 0.4, 0.4, 0.46], k: "stool" });
    boxes.push({ id: "chair-1", b: [5.75, 1.55, 0, 0.4, 0.4, 0.46], k: "stool" });
    boxes.push({ id: "table-leg", b: [5.52, 2.42, 0, 0.16, 0.16, 0.72], k: "stool" });
    boxes.push({ id: "table", b: [4.8, 2.05, 0.72, 1.6, 0.9, 0.05], k: "worktop" });
    boxes.push({ id: "chair-2", b: [5.0, 3.05, 0, 0.4, 0.4, 0.46], k: "stool" });
    boxes.push({ id: "chair-3", b: [5.75, 3.05, 0, 0.4, 0.4, 0.46], k: "stool" });
  }
  return boxes;
}

// ---------- Badkamer: scène uit de antwoorden ----------
const BATH_ROOMS = { 1: [2.8, 2.4], 2: [3.4, 2.9], 3: [4.2, 3.4], 4: [5.2, 4.0] };
const BATH_WALL = 2.6;

function bathroomConfig(a) {
  const size = Number(a.bathroomSize || 2);
  const [W, D] = BATH_ROOMS[size];
  const luxe = Number(a.bathroomComfort) === 1;
  const s = { 1: 0.85, 2: 1.0, 3: 1.2, 4: 1.3 }[size]; // douche-hoek
  const tile = a.bathroomStyle === undefined ? 0.3 : Number(a.bathroomStyle) === 2 ? 0.2 : 0.6;
  const tiling = Number(a.bathroomTiling || 0);

  // Wandtegels als vlak op de muren
  const backTiles = [];
  const leftTiles = [];
  if (tiling === 1) {
    backTiles.push({ u0: 0, u1: W, v0: 0, v1: BATH_WALL, step: tile, cls: "iso-tiles" });
    leftTiles.push({ u0: 0, u1: D, v0: 0, v1: BATH_WALL, step: tile, cls: "iso-tiles" });
  } else if (tiling === 2) {
    backTiles.push({ u0: 0, u1: W, v0: 0, v1: 1.2, step: tile, cls: "iso-tiles" });
    backTiles.push({ u0: W - s, u1: W, v0: 1.2, v1: 2.1, step: tile, cls: "iso-tiles", alignV: 1.2 });
    leftTiles.push({ u0: 0, u1: D, v0: 0, v1: 1.2, step: tile, cls: "iso-tiles" });
  }

  const boxes = [
    { id: "floor", b: [0, 0, -0.08, W, D, 0.08], k: "floor", grid: true, tags: ["bathroomSize"] },
    { id: "wall-back", b: [0, -0.12, 0, W, 0.12, BATH_WALL], k: "wall", overlays: backTiles.map((o) => ({ ...o, face: "front" })), tags: ["bathroomSize", "bathroomTiling"] },
    { id: "wall-left", b: [-0.12, -0.12, 0, 0.12, D + 0.12, BATH_WALL], k: "wall", overlays: leftTiles.map((o) => ({ ...o, face: "side" })), tags: ["bathroomSize", "bathroomTiling"] }
  ];

  // Lavabomeubel (enkel of dubbel) met wasbak(ken) en spiegel(s)
  const double = Number(a.bathroomVanity) === 2;
  const vw = double ? { 1: 0.9, 2: 1.3, 3: 1.5, 4: 1.7 }[size] : { 1: 0.7, 2: 0.8, 3: 0.9, 4: 1.0 }[size];
  const vx = 0.95;
  const vt = ["bathroomVanity", "bathroomStyle", "bathroomComfort"];
  boxes.push({ id: "vanity", b: [vx, 0, 0.3, vw, 0.48, 0.5], k: "bunit", fronts: double ? 2 : 1, face: "front", tags: vt });
  boxes.push({ id: "vanity-top", b: [vx - 0.02, 0, 0.8, vw + 0.04, 0.5, 0.04], k: "btop", tags: vt });
  const basins = double ? 2 : 1;
  const mw = Math.min(0.48, vw / basins - 0.08); // spiegelbreedte
  for (let i = 0; i < basins; i += 1) {
    const cx = vx + (vw / (basins * 2)) * (i * 2 + 1);
    boxes.push({ id: `basin-${i}`, b: [cx - 0.19, 0.08, 0.84, 0.38, 0.32, 0.07], k: "porcelain", tags: vt });
    if (luxe) boxes.push({ id: `mirror-glow-${i}`, b: [cx - mw / 2 - 0.07, 0.004, 1.08, mw + 0.14, 0.004, 0.79], k: "glow", tags: ["bathroomComfort"] });
    boxes.push({ id: `mirror-${i}`, b: [cx - mw / 2, 0.01, 1.15, mw, 0.02, 0.65], k: "mirror", tags: vt });
  }

  // Handdoekradiator (luxe), tussen meubel en douche als er plaats is
  const rx = vx + vw + 0.18;
  if (luxe && rx + 0.45 <= W - s - 0.05) {
    boxes.push({ id: "radiator", b: [rx, 0, 0.45, 0.45, 0.05, 1.05], k: "steel", rails: true, tags: ["bathroomComfort"] });
  }

  // Hangtoilet tegen de achtermuur (links van het meubel), naar de kijker gericht.
  // Ja = echt, nog niet gekozen = stippellijn, nee = weg.
  const toilet = a.bathroomToilet === undefined ? "ghost" : Number(a.bathroomToilet) === 1 ? "real" : null;
  if (toilet) {
    const g = toilet === "ghost";
    const t = ["bathroomToilet"];
    const tx = 0.42; // midden van het toilet
    boxes.push({ id: `toilet-plate-${toilet}`, b: [tx - 0.12, 0, 0.95, 0.24, 0.015, 0.16], k: g ? "ghost" : "plate", flush: !g, tags: t });
    boxes.push({ id: `toilet-bowl-${toilet}`, b: [tx - 0.18, 0, 0.36, 0.36, 0.58, 0.3], k: g ? "ghost" : "porcelain",
      oval: { cx: tx, cy: 0.34, rx: 0.17, ry: 0.25, z0: 0.36, z1: 0.66, taper: 0.62 }, tags: t });
    boxes.push({ id: `toilet-seat-${toilet}`, b: [tx - 0.19, 0.07, 0.66, 0.38, 0.53, 0.04], k: g ? "ghost" : "seat",
      oval: { cx: tx, cy: 0.335, rx: 0.185, ry: 0.265, z0: 0.66, z1: 0.7, hole: g ? null : [0.55, 0.6, 0.03] }, tags: t });
  }

  // Douche en/of bad
  const type = Number(a.bathroomBathType || 0);
  const showerKind = type === 0 ? "ghost" : type === 1 || type === 3 ? "real" : null;
  const bathKind = type === 0 ? "ghost" : type === 2 || type === 3 ? "real" : null;
  if (showerKind) {
    const g = showerKind === "ghost";
    const t = ["bathroomBathType"];
    boxes.push({ id: `tray-${showerKind}`, b: [W - s, 0, 0, s, s, 0.05], k: g ? "ghost" : "tray", tags: t });
    boxes.push({ id: `glass-${showerKind}`, b: [W - s, s - 0.02, 0.05, s * 0.65, 0.02, 1.95], k: g ? "ghost" : "glasspane", tags: t });
    if (!g) {
      boxes.push({ id: "rain", b: [W - s / 2 - 0.13, 0.02, 2.05, 0.26, 0.26, 0.03], k: "steel", tags: t });
      boxes.push({ id: "mixer", b: [W - s / 2 - 0.05, 0, 1.05, 0.1, 0.04, 0.12], k: "steel", tags: t });
    }
  }
  if (bathKind) {
    const g = bathKind === "ghost";
    const t = ["bathroomBathType", "bathroomSize"];
    const L = Math.min(1.7, D - 0.75);
    const tb = size === 4 ? [W / 2 - 0.85, D / 2 + 0.1, 0, 1.7, 0.8, 0.55] : [0, D - L, 0, 0.75, L, 0.55];
    boxes.push({ id: `tub-${bathKind}`, b: tb, k: g ? "ghost" : "tub", tags: t });
    if (!g) boxes.push({ id: "tub-water", b: [tb[0] + 0.08, tb[1] + 0.08, 0.5, tb[3] - 0.16, tb[4] - 0.16, 0.052], k: "water", tags: t });
  }

  // Verlaagd plafond met spots: ja = echt, nog niet gekozen = stippellijn, nee = weg
  const ceiling = a.bathroomCeiling === undefined ? "ghost" : Number(a.bathroomCeiling) === 1 ? "real" : null;
  if (ceiling) {
    const k = ceiling === "ghost" ? "ghost" : "soffit";
    const t = ["bathroomCeiling"];
    boxes.push({ id: `soffit-back-${ceiling}`, b: [0, 0, 2.35, W, 0.35, 0.25], k, tags: t });
    boxes.push({ id: `soffit-left-${ceiling}`, b: [0, 0.35, 2.35, 0.35, D - 0.35, 0.25], k, tags: t });
    if (ceiling === "real") {
      for (let x = 0.6; x < W - 0.2; x += 1.0) {
        boxes.push({ id: `beam-${x}`, b: [x - 0.32, 0.004, 1.35, 0.64, 0.004, 0.98], k: "beam", cone: true, tags: t });
        boxes.push({ id: `spot-${x}`, b: [x - 0.06, 0.12, 2.32, 0.12, 0.12, 0.03], k: "spot", tags: t });
      }
    }
  }

  // Luxe: plant
  if (luxe) {
    boxes.push({ id: "pot", b: [W - 0.5, D - 0.5, 0, 0.3, 0.3, 0.32], k: "pot", tags: ["bathroomComfort"] });
    boxes.push({ id: "plant", b: [W - 0.56, D - 0.56, 0.32, 0.42, 0.42, 0.42], k: "plant", tags: ["bathroomComfort"] });
  }
  return boxes;
}

// ---------- Binnenafwerking: scène uit de antwoorden ----------
const ROOM_ROOMS = { 1: [4.6, 4.0], 2: [7.0, 6.0], 3: [9.5, 8.5], 4: [12, 11] };
const ROOM_WALL = 2.7;

function interiorConfig(a) {
  const size = Number(a.interiorSurface || 1);
  const [W, D] = ROOM_ROOMS[size];
  const type = Number(a.interiorType || 0);
  const finish = Number(a.interiorFinish || 1);
  const prep = Number(a.interiorPrep || 1);
  const T = ["interiorType"];

  const floorOverlays = [];
  if (type === 1) floorOverlays.push({ face: "top", u0: 0, u1: W, v0: 0, v1: D, stepV: 0.22, cls: "iso-planks" });
  if (type === 3) floorOverlays.push({ face: "top", u0: 0, u1: W, v0: 0, v1: D, step: 0.6, cls: "iso-stone" });
  const backOverlays = [];
  const leftOverlays = [];
  if (type === 5) {
    backOverlays.push({ face: "front", u0: W * 0.35, u1: W * 0.35 + 1.6, v0: 0.9, v1: 2.3, cls: "iso-window", stepU: 0.8 });
    leftOverlays.push({ face: "side", u0: D * 0.55, u1: D * 0.55 + 0.95, v0: 0, v1: 2.15, cls: "iso-door" });
  }

  const boxes = [
    { id: "floor", b: [0, 0, -0.08, W, D, 0.08], k: "rfloor", overlays: floorOverlays, tags: ["interiorSurface", "interiorFinish", "interiorPrep", ...T] },
    { id: "wall-back", b: [0, -0.12, 0, W, 0.12, ROOM_WALL], k: "rwall", overlays: backOverlays, tags: ["interiorSurface", "interiorFinish", ...T] },
    { id: "wall-left", b: [-0.12, -0.12, 0, 0.12, D + 0.12, ROOM_WALL], k: "rwall", overlays: leftOverlays, tags: ["interiorSurface", "interiorFinish", ...T] }
  ];

  // Meubels ter vergelijking (vaste maat, dus de ruimte lijkt groter of kleiner)
  boxes.push({ id: "sofa", b: [1.0, 1.0, 0, 2.1, 0.9, 0.42], k: "sofa" });
  boxes.push({ id: "sofa-back", b: [1.0, 0.8, 0, 2.1, 0.22, 0.82], k: "sofa" });
  boxes.push({ id: "table", b: [1.6, 2.5, 0, 0.9, 0.55, 0.38], k: "furn" });
  boxes.push({ id: "rug", b: [0.8, 2.15, 0, 2.2, 1.3, 0.01], k: "rug" });
  if (size >= 2) {
    boxes.push({ id: "dining", b: [W - 2.6, D - 2.6, 0.72, 1.6, 0.9, 0.05], k: "furn" });
    boxes.push({ id: "dining-leg", b: [W - 1.88, D - 2.23, 0, 0.16, 0.16, 0.72], k: "furn" });
    [[W - 2.4, D - 3.05], [W - 1.6, D - 3.05], [W - 2.4, D - 1.65], [W - 1.6, D - 1.65]].forEach(([x, y], i) =>
      boxes.push({ id: `chair-${i}`, b: [x, y, 0, 0.4, 0.4, 0.46], k: "furn" }));
  }

  // Gyproc: nieuwe scheidingswand met naden
  if (type === 4) {
    const gx = Math.min(W - 1.2, 4.0);
    boxes.push({ id: "gyproc", b: [gx, 0, 0, 0.1, Math.min(D * 0.55, 4.2), ROOM_WALL], k: "gyproc",
      overlays: [{ face: "side", u0: 0, u1: Math.min(D * 0.55, 4.2), v0: 0, v1: ROOM_WALL, stepU: 1.2, cls: "iso-seams" }], tags: T });
  }
  // Schrijnwerk: kastenwand op maat
  if (type === 6) {
    const cw = Math.min(3.6, W - 1.3);
    boxes.push({ ...cab("built", [W - cw - 0.3, 0, 0, cw, 0.45, 2.4], Math.max(2, Math.round(cw / 0.6))), k: "wood", tags: T });
  }

  // Afwerking: hoogwaardig = staande lamp; maatwerk = ook plinten
  if (finish >= 2) {
    boxes.push({ id: "lamp-foot", b: [0.45, 0.45, 0, 0.06, 0.06, 1.5], k: "cord", tags: ["interiorFinish"] });
    boxes.push({ id: "lamp-shade", b: [0.3, 0.3, 1.45, 0.36, 0.36, 0.3], k: "lamp", tags: ["interiorFinish"] });
  }
  if (finish === 3) {
    boxes.push({ id: "skirt-back", b: [0, 0, 0, W, 0.03, 0.1], k: "skirting", tags: ["interiorFinish"] });
    boxes.push({ id: "skirt-left", b: [0, 0.03, 0, 0.03, D - 0.03, 0.1], k: "skirting", tags: ["interiorFinish"] });
  }

  // Voorbereiding: beperkt = ladder en verfpot; afbraak = puincontainer
  if (prep === 2) {
    boxes.push({ id: "ladder", b: [W - 0.8, 2.6, 0, 0.5, 0.12, 1.7], k: "ladder", rails: true, tags: ["interiorPrep"] });
    boxes.push({ id: "bucket", b: [W - 0.55, 3.0, 0, 0.3, 0.3, 0.32], k: "bucket", tags: ["interiorPrep"] });
  }
  if (prep === 3) {
    // Kleine ruimte: rechts vooraan; grotere ruimte: links vooraan (weg van de eettafel)
    const sk = size === 1 ? [3.15, 3.0, 0, 1.3, 0.85, 0.7] : [0.4, D - 1.4, 0, 1.6, 1.0, 0.75];
    const [sx, sy, , sw, sd, sh] = sk;
    boxes.push({ id: "skip", b: sk, k: "skip", tags: ["interiorPrep"] });
    [[0.15, 0.2], [0.5, 0.15], [0.75, 0.45]].forEach(([fx, fy], i) =>
      boxes.push({ id: `rubble-${i}`, b: [sx + sw * fx, sy + sd * fy, sh, 0.28 + i * 0.04, 0.26, 0.14 + i * 0.04], k: "rubble", tags: ["interiorPrep"] }));
  }
  return boxes;
}

// ---------- Bühne: algemeen voor alle flows ----------
const STAGES = {
  kitchen: {
    title: "Jouw keuken",
    hello: "Je keuken verandert mee met elke keuze",
    rooms: STAGE_ROOMS, wall: STAGE_WALL, sizeKey: "kitchenSize", defaultSize: 2,
    build: kitchenConfig,
    caption: ["kitchenSize", "kitchenStyle", "kitchenFinish", "kitchenWorktop"],
    messages: STAGE_MESSAGES,
    classes: (a) => [
      a.kitchenStyle === undefined ? "style-draft" : Number(a.kitchenStyle) === 2 ? "style-land" : "style-modern",
      `top-${Number(a.kitchenWorktop || 0)}`,
      `scope-${Number(a.kitchenScope || 0)}`,
      Number(a.kitchenFinish) === 1 ? "finish-luxe" : "finish-comfort"
    ]
  },
  bathroom: {
    title: "Jouw badkamer",
    hello: "Je badkamer verandert mee met elke keuze",
    rooms: BATH_ROOMS, wall: BATH_WALL, sizeKey: "bathroomSize", defaultSize: 2,
    build: bathroomConfig,
    caption: ["bathroomSize", "bathroomStyle", "bathroomComfort", "bathroomBathType"],
    messages: {
      bathroomSize: { 1: "Compacte badkamer, kleiner dan 6 m²", 2: "Badkamer van 7 tot 12 m²", 3: "Ruime badkamer van 13 tot 20 m²", 4: "Grote badkamer met vrijstaand bad" },
      bathroomStyle: { 1: "Modern: wit meubel en grote tegels", 2: "Klassiek: houten meubel en kleine groene tegels" },
      bathroomComfort: { 0: "Comfort: kwalitatief en degelijk", 1: "Luxe: verlichte spiegel, handdoekradiator en plant" },
      bathroomTiling: { 1: "Tegels tot aan het plafond", 2: "Tegels tot 1,2 m en hoger in de douche" },
      bathroomCeiling: { 1: "Verlaagd plafond met spots", 0: "Bestaand plafond blijft" },
      bathroomBathType: { 1: "Inloopdouche", 2: "Ligbad", 3: "Douche én bad" },
      bathroomVanity: { 1: "Enkel lavabomeubel", 2: "Dubbel lavabomeubel" },
      bathroomToilet: { 1: "Hangtoilet in de badkamer", 0: "Geen toilet in de badkamer" }
    },
    classes: (a) => [
      a.bathroomStyle === undefined ? "bstyle-draft" : Number(a.bathroomStyle) === 2 ? "bstyle-classic" : "bstyle-modern",
      Number(a.bathroomComfort) === 1 ? "bfinish-luxe" : "bfinish-comfort"
    ]
  },
  interior: {
    title: "Jouw ruimte",
    hello: "Je ruimte verandert mee met elke keuze",
    rooms: ROOM_ROOMS, wall: ROOM_WALL, sizeKey: "interiorSurface", defaultSize: 1,
    build: interiorConfig,
    caption: ["interiorType", "interiorSurface", "interiorFinish"],
    messages: {
      interiorType: { 1: "Nieuwe parketvloer", 2: "Wanden en plafonds in een nieuwe kleur", 3: "Nieuwe tegelvloer", 4: "Nieuwe gyprocwand", 5: "Nieuwe deur en raam", 6: "Kastenwand op maat" },
      interiorSurface: { 1: "Ruimte kleiner dan 25 m²", 2: "Ruimte van 25 tot 60 m²", 3: "Ruimte van 61 tot 120 m²", 4: "Ruimte groter dan 120 m²" },
      interiorFinish: { 1: "Standaard afwerking", 2: "Hoogwaardige afwerking", 3: "Maatwerk tot in de details, met plinten" },
      interiorPrep: { 1: "Meteen plaatsen", 2: "Beperkte voorbereiding", 3: "Afbraak en volledige voorbereiding" }
    },
    classes: (a) => [`itype-${Number(a.interiorType || 0)}`, `ifin-${Number(a.interiorFinish || 1)}`]
  }
};

const fmt = (p) => p.map((v) => v.toFixed(3)).join(",");
const seg = (p, q, cls) => `<line class="${cls}" x1="${p[0].toFixed(3)}" y1="${p[1].toFixed(3)}" x2="${q[0].toFixed(3)}" y2="${q[1].toFixed(3)}"/>`;

// Punt op een zichtbaar vlak van een blok: front (+y), side (+x) of top (+z)
function facePoint([x, y, z, w, d, h], face, u, v) {
  if (face === "front") return isoPoint(x + u, y + d, z + v);
  if (face === "side") return isoPoint(x + w, y + u, z + v);
  return isoPoint(x + u, y + v, z + h);
}

// Vlak op een muur of vloer (tegels, planken, raam, deur), met rasterlijnen
function overlaySvg(box, o) {
  const P = (u, v) => facePoint(box.b, o.face, u, v);
  let out = `<polygon class="iso-overlay ${o.cls}" points="${[P(o.u0, o.v0), P(o.u1, o.v0), P(o.u1, o.v1), P(o.u0, o.v1)].map(fmt).join(" ")}"/>`;
  const su = o.stepU || o.step;
  const sv = o.stepV || o.step;
  if (su) for (let u = Math.ceil((o.u0 + 1e-6) / su) * su; u < o.u1 - 1e-6; u += su) out += seg(P(u, o.v0), P(u, o.v1), `iso-joint ${o.cls}-joint`);
  if (sv) {
    const base = o.alignV ?? 0;
    for (let v = base + Math.ceil((o.v0 - base + 1e-6) / sv) * sv; v < o.v1 - 1e-6; v += sv) out += seg(P(o.u0, v), P(o.u1, v), `iso-joint ${o.cls}-joint`);
  }
  return out;
}

// Deurlijnen, kaders (landelijk) en greeplijnen (modern) op een kastvlak
function cabinetDetails(box) {
  const [x, y, z, w, d, h] = box.b;
  const n = box.fronts;
  const along = box.face === "side" ? d : w;
  const at = (u, v) => facePoint(box.b, box.face === "side" ? "side" : "front", u, v);
  let out = "";
  for (let i = 0; i < n; i += 1) {
    const u0 = (along / n) * i;
    const u1 = (along / n) * (i + 1);
    if (i > 0) out += seg(at(u0, 0.03), at(u0, h - 0.03), "iso-line");
    const m = Math.min(0.08, along / n / 5);
    out += `<polygon class="iso-frame" points="${[at(u0 + m, 0.09), at(u1 - m, 0.09), at(u1 - m, h - 0.09), at(u0 + m, h - 0.09)].map(fmt).join(" ")}"/>`;
    const gv = z >= 1.4 ? 0.08 : h - 0.08; // bovenkast: greep onderaan, onderkast: bovenaan
    out += seg(at(u0 + (u1 - u0) * 0.3, gv), at(u0 + (u1 - u0) * 0.7, gv), "iso-grip");
  }
  return out;
}

// Horizontale stangen (handdoekradiator, ladder)
function railsSvg(box) {
  const [, , , , , h] = box.b;
  let out = "";
  for (let v = 0.15; v < h; v += 0.2) out += seg(facePoint(box.b, "front", 0.03, v), facePoint(box.b, "front", box.b[3] - 0.03, v), "iso-rail");
  return out;
}

// Tegelvloer: 1 tegel = 1 m²
function floorGrid([x, y, z, w, d, h]) {
  let out = "";
  for (let i = 1; i < w; i += 1) out += seg(isoPoint(x + i, y, z + h), isoPoint(x + i, y + d, z + h), "iso-grid");
  for (let j = 1; j < d; j += 1) out += seg(isoPoint(x, y + j, z + h), isoPoint(x + w, y + j, z + h), "iso-grid");
  return out;
}

let stagePrevIds = null;
let stagePrevBoxes = null;
let stagePrevRoute = null;

function stageViewBox(cfg, size) {
  const H = cfg.wall;
  const corners = (W, D) => [isoPoint(0, D, 0), isoPoint(W, 0, 0), isoPoint(-0.12, -0.12, H), isoPoint(W, D, -0.1), isoPoint(0, D, -0.1)];
  const bounds = (pts) => {
    const xs = pts.map((p) => p[0]);
    const ys = pts.map((p) => p[1]);
    return { x0: Math.min(...xs), x1: Math.max(...xs), y0: Math.min(...ys), y1: Math.max(...ys) };
  };
  const big = bounds(corners(...STAGE_ROOMS[4]));
  const aspect = (big.x1 - big.x0) / (big.y1 - big.y0);
  const b = bounds(corners(...cfg.rooms[size]));
  const pad = { 1: 1.3, 2: 1.18, 3: 1.1, 4: 1.05 }[size];
  let vw = (b.x1 - b.x0) * pad;
  let vh = (b.y1 - b.y0) * pad;
  if (vw / vh < aspect) vw = vh * aspect;
  else vh = vw / aspect;
  const cx = (b.x0 + b.x1) / 2;
  const cy = (b.y0 + b.y1) / 2;
  return `${(cx - vw / 2).toFixed(3)} ${(cy - vh / 2).toFixed(3)} ${vw.toFixed(3)} ${vh.toFixed(3)}`;
}

// Ovale vorm (bv. toiletpot): elliptische cilinder, met optionele opening bovenaan
function convexHull(points) {
  const pts = [...points].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  const cross = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lower = [];
  const upper = [];
  pts.forEach((p) => {
    while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop();
    lower.push(p);
  });
  [...pts].reverse().forEach((p) => {
    while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop();
    upper.push(p);
  });
  return lower.slice(0, -1).concat(upper.slice(0, -1));
}

function ovalSvg({ cx, cy, rx, ry, z0, z1, hole, taper = 1 }, k) {
  const ring = (rX, rY, z, dy = 0) => Array.from({ length: 40 }, (_, i) => {
    const t = (i / 40) * Math.PI * 2;
    return isoPoint(cx + rX * Math.cos(t), cy + dy + rY * Math.sin(t), z);
  });
  const poly = (pts, cls) => `<polygon class="${cls}" points="${pts.map(fmt).join(" ")}"/>`;
  // taper < 1: onderaan smaller en naar de muur toe (zoals een hangtoilet)
  const bottom = ring(rx * taper, ry * taper, z0, -ry * (1 - taper) * 0.6);
  let out = poly(convexHull([...bottom, ...ring(rx, ry, z1)]), `iso-face iso-${k} iso-front`);
  out += poly(ring(rx, ry, z1), `iso-face iso-${k} iso-top`);
  if (hole) out += poly(ring(rx * hole[0], ry * hole[1], z1 + 0.001, hole[2] || 0), `iso-face iso-${k} iso-hole`);
  return out;
}

function stageSvg(boxes, pop, change) {
  let body = "";
  isoSort(boxes).forEach((box) => {
    const f = isoFaces(box.b);
    const k = `iso-face iso-${box.k}`;
    const poly = (pts, cls) => `<polygon class="${cls}" points="${pts.map((q) => fmt(isoPoint(...q))).join(" ")}"/>`;
    const flash = box.vanish ? " vanish" : change && box.tags?.includes(change) ? " flash" : "";
    if (box.cone) {
      // Lichtkegel op de muur: smal bovenaan, breed onderaan
      const [, , , w, , h] = box.b;
      const P = (u, v) => facePoint(box.b, "front", u, v);
      body += `<g class="iso-box${pop.has(box.id) ? " pop" : ""}${flash}"><polygon class="iso-face iso-beam" points="${[P(w / 2 - 0.05, h), P(w / 2 + 0.05, h), P(w, 0), P(0, 0)].map(fmt).join(" ")}"/></g>`;
      return;
    }
    if (box.oval) {
      body += `<g class="iso-box${pop.has(box.id) ? " pop" : ""}${flash}">${ovalSvg(box.oval, box.k)}</g>`;
      return;
    }
    body += `<g class="iso-box${pop.has(box.id) ? " pop" : ""}${flash}">` +
      poly(f.side, `${k} iso-side`) + poly(f.front, `${k} iso-front`) + poly(f.top, `${k} iso-top`) +
      (box.grid ? floorGrid(box.b) : "") +
      (box.overlays || []).map((o) => overlaySvg(box, o)).join("") +
      (box.fronts ? cabinetDetails(box) : "") +
      (box.rails ? railsSvg(box) : "") +
      (box.flush ? [0.3, 0.7].map((u) => {
        const [x, y, z, w, d, h] = box.b;
        const c = isoPoint(x + w * u, y + d, z + h / 2);
        return `<ellipse class="iso-flush" cx="${c[0].toFixed(3)}" cy="${c[1].toFixed(3)}" rx="${(w * 0.17 * ISO_C).toFixed(3)}" ry="${(h * 0.3).toFixed(3)}"/>`;
      }).join("") : "") + "</g>";
  });
  return body;
}

function stageCaption(cfg, a) {
  const label = (key) => {
    if (a[key] === undefined) return null;
    const q = questions[key];
    const i = q.values.findIndex((v) => String(v) === String(a[key]));
    return (q.display?.[i] || q.labels[i]).replace(/\//g, " / ");
  };
  return cfg.caption.map(label).filter(Boolean);
}

function stageToast(text) {
  const toast = document.querySelector("[data-stage-toast]");
  if (!toast || !text) return;
  toast.textContent = text;
  toast.classList.remove("show");
  void toast.offsetWidth; // animatie opnieuw starten
  toast.classList.add("show");
}

function renderStage(answers = state.answers, { preview = false } = {}) {
  const stage = document.querySelector("[data-stage]");
  if (!stage) return;
  const route = activeRoute();
  const cfg = STAGES[route];
  const show = Boolean(cfg) && state.view !== "interest";
  const calculator = document.querySelector(".calculator");
  calculator.classList.toggle("has-stage", show);
  calculator.dataset.view = state.view;
  stage.hidden = !show;
  if (!show) {
    stagePrevIds = null;
    return;
  }
  if (stagePrevRoute !== route) stagePrevIds = null;
  stagePrevRoute = route;

  const first = stagePrevIds === null;
  const built = cfg.build(answers);
  const ids = new Set(built.map((b) => b.id));
  const pop = new Set(!preview && !first ? [...ids].filter((id) => !stagePrevIds.has(id)) : []);
  // Wat net verdween (bv. "Nee" bij toilet): nog even tonen terwijl het rood oplicht en vervaagt.
  // Alleen bij een antwoord binnen dezelfde ruimte; bij een andere grootte zou alles "verdwijnen".
  const sizeChanged = state.lastChange === cfg.sizeKey;
  const vanished = !preview && !first && !sizeChanged && stagePrevBoxes
    ? stagePrevBoxes.filter((b) => !ids.has(b.id)).map((b) => ({ ...b, vanish: true }))
    : [];
  const boxes = [...built, ...vanished];
  if (!preview) {
    stagePrevIds = ids;
    stagePrevBoxes = built;
  }

  const change = !preview ? state.lastChange : null;
  if (!preview) state.lastChange = null;

  const classes = ["iso", "stage-svg", `stage-${route}`, ...cfg.classes(answers), change ? `chg-${change}` : "", preview ? "is-preview" : ""]
    .filter(Boolean).join(" ");
  const size = Number(answers[cfg.sizeKey] || cfg.defaultSize);

  stage.querySelector("[data-stage-art]").innerHTML =
    `<svg class="${classes}" xmlns="http://www.w3.org/2000/svg" viewBox="${stageViewBox(cfg, size)}" role="img" aria-label="Illustratie: ${cfg.title.toLowerCase()}">${stageSvg(boxes, pop, change)}</svg>`;
  stage.querySelector("[data-stage-title]").textContent = cfg.title;
  stage.querySelector("[data-stage-chips]").innerHTML = stageCaption(cfg, answers).map((c) => `<span class="stage-chip">${c}</span>`).join("");

  if (first && !preview && !["lead", "result"].includes(state.view)) stageToast(cfg.hello);
  else if (change) stageToast(cfg.messages[change]?.[answers[change]]);
}

// Voorproef bij hover (alleen op toestellen met muis)
const canHover = window.matchMedia("(hover: hover)");
document.addEventListener("mouseover", (event) => {
  if (!canHover.matches) return;
  const option = event.target.closest(".has-stage .radio-option[data-answer]");
  if (!option || option.contains(event.relatedTarget)) return;
  const key = option.dataset.answer;
  const raw = option.dataset.value;
  renderStage({ ...state.answers, [key]: Number.isNaN(Number(raw)) ? raw : Number(raw) }, { preview: true });
});
document.addEventListener("mouseout", (event) => {
  if (!canHover.matches) return;
  const option = event.target.closest(".has-stage .radio-option[data-answer]");
  if (!option || option.contains(event.relatedTarget)) return;
  renderStage(state.answers, { preview: true });
});

renderQuestions();
renderView();
