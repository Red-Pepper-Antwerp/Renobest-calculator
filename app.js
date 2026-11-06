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

const questions = {
  interest: {
    labels: ["Badkamer", "Keuken", "Binnenafwerking"],
    values: ["bathroom", "kitchen", "interior"]
  },
  bathroomSize: {
    labels: ["<6m²", "7m² - 12 m²", "13m² - 20m²", "> 20m²"],
    values: [1, 2, 3, 4]
  },
  bathroomStyle: {
    labels: ["Moderne badkamer", "Klassieke badkamer"],
    descriptions: [
      "Strakke lijnen, minimalistisch en tijdloos design",
      "Tijdloze elegantie en warme uitstraling"
    ],
    values: [1, 2]
  },
  bathroomComfort: {
    labels: ["Comfort", "Luxe"],
    values: [0, 1]
  },
  bathroomTiling: {
    labels: ["Geheel", "Gedeeltelijk"],
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
    values: [1, 2, 3, 4]
  },
  kitchenSize: {
    labels: ["<8m²", "8m² - 14m²", "15m² - 24m²", "> 24m²"],
    values: [1, 2, 3, 4]
  },
  kitchenStyle: {
    labels: ["Moderne keuken", "Landelijke keuken"],
    descriptions: [
      "Strakke lijnen, minimalistisch en tijdloos design",
      "Warm, gezellig en vol karakter"
    ],
    values: [1, 2]
  },
  kitchenScope: {
    labels: ["Fronten en werkblad", "Volledige vernieuwing", "Nieuwe indeling"],
    values: [1, 2, 3]
  },
  kitchenFinish: {
    labels: ["Comfort", "Luxe"],
    values: [0, 1]
  },
  kitchenTech: {
    labels: ["Bestaande aansluitingen", "Nieuwe toestellen/aansluitingen", "Volledig vernieuwde technieken"],
    values: [1, 2, 3]
  },
  kitchenWorktop: {
    labels: ["Laminaat/compact", "Composiet", "Natuursteen/keramiek"],
    values: [1, 2, 3]
  },
  kitchenTiming: {
    labels: ["Zo snel mogelijk", "Binnen de 6 maanden", "Binnen het jaar", "Ik ben gewoon nieuwsgierig"],
    values: [1, 2, 3, 4]
  },
  interiorType: {
    labels: ["Vloeren", "Wanden & Plafonds", "Tegels", "Gyproc & Plaatsen", "Deuren & Kozijnen", "Schrijnwerk"],
    values: [1, 2, 3, 4, 5, 6]
  },
  interiorSurface: {
    labels: ["<25m²", "25m² - 60m²", "61m² - 120m²", "> 120m²"],
    values: [1, 2, 3, 4]
  },
  interiorFinish: {
    labels: ["Standaard", "Hoogwaardig", "Maatwerk/detailafwerking"],
    values: [1, 2, 3]
  },
  interiorPrep: {
    labels: ["Nee, enkel plaatsing", "Beperkte voorbereiding", "Afbraak en volledige voorbereiding"],
    values: [1, 2, 3]
  },
  interiorTiming: {
    labels: ["Zo snel mogelijk", "Binnen de 6 maanden", "Binnen het jaar", "Ik ben gewoon nieuwsgierig"],
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
  formError: document.querySelector("[data-form-error]")
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

    group.innerHTML = question.labels
      .map((label, index) => {
        const description = question.descriptions?.[index];
        return `
        <button
          class="radio-option"
          type="button"
          data-answer="${key}"
          data-value="${question.values[index]}"
        >${description ? `<strong class="option-title">${label}</strong><span class="option-description">${description}</span>` : label}</button>
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

  window.scrollTo({ top: 0, behavior: "auto" });
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
