// Cookietoestemming + Meta-pixel (laadt pas na toestemming voor marketingcookies).
(function () {
  var PIXEL_ID = "4314613288605647";
  var KEY = "renobest-cookie-consent";

  function readConsent() {
    try {
      return localStorage.getItem(KEY);
    } catch (error) {
      return null;
    }
  }

  function saveConsent(value) {
    try {
      localStorage.setItem(KEY, value);
    } catch (error) {
      // localStorage niet beschikbaar: enkel voor deze pagina
    }
  }

  function loadPixel() {
    if (window.fbq) return;
    /* eslint-disable */
    !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
    n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
    document,'script','https://connect.facebook.net/en_US/fbevents.js');
    /* eslint-enable */
    window.fbq("init", PIXEL_ID);
    window.fbq("track", "PageView");
  }

  function newEventId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return String(Date.now()) + "-" + Math.random().toString(16).slice(2);
  }

  // Wordt opgeroepen door app.js na een geslaagde aanvraag.
  window.renobestTrackLead = function (details) {
    if (!window.fbq) return;
    window.fbq("trackSingle", PIXEL_ID, "Lead", {
      content_name: "calculator",
      content_category: (details && details.interesse) || ""
    }, { eventID: newEventId() });
  };

  function closeBanner(banner, value) {
    saveConsent(value);
    banner.remove();
    if (value === "all") loadPixel();
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Cookies");
    banner.innerHTML =
      '<p>We gebruiken cookies om onze advertenties te meten en te verbeteren. ' +
      '<a href="https://renobest.be/privacy-policy/" target="_blank" rel="noreferrer">Privacy policy</a></p>' +
      '<div class="cookie-actions">' +
      '<button type="button" class="cookie-button muted" data-cookie="necessary">Alleen noodzakelijke</button>' +
      '<button type="button" class="cookie-button" data-cookie="all">Alles accepteren</button>' +
      "</div>";
    banner.addEventListener("click", function (event) {
      var button = event.target.closest("[data-cookie]");
      if (button) closeBanner(banner, button.getAttribute("data-cookie"));
    });
    document.body.appendChild(banner);
  }

  var consent = readConsent();
  if (consent === "all") loadPixel();
  else if (consent !== "necessary") {
    if (document.body) showBanner();
    else document.addEventListener("DOMContentLoaded", showBanner);
  }
})();
