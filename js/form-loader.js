/**
 * Global form submit loader.
 *
 * Shows a centered spinner over a full-screen black overlay the moment a lead
 * form is submitted, and blocks any second submission until the page navigates.
 * Works for every submit path used on these pages:
 *   - native submit (clicking the submit button / pressing Enter)
 *   - programmatic form.submit() (the auto-submit forms)
 */
(function () {
  "use strict";

  // ---- Inject styles once ----
  var css =
    "#global-form-loader{position:fixed;inset:0;top:0;left:0;right:0;bottom:0;" +
    "z-index:2147483647;display:none;align-items:center;justify-content:center;" +
    "background:rgba(0,0,0,.78);-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);}" +
    "#global-form-loader.is-active{display:flex;}" +
    "#global-form-loader .gfl-inner{display:flex;flex-direction:column;align-items:center;gap:18px;}" +
    "#global-form-loader .gfl-spinner{width:62px;height:62px;border-radius:50%;" +
    "border:5px solid rgba(255,255,255,.25);border-top-color:#fff;" +
    "animation:gfl-spin .8s linear infinite;}" +
    "#global-form-loader .gfl-text{color:#fff;font-size:14px;letter-spacing:.14em;" +
    "text-transform:uppercase;font-family:Arial,Helvetica,sans-serif;}" +
    "@keyframes gfl-spin{to{transform:rotate(360deg);}}";
  var style = document.createElement("style");
  style.appendChild(document.createTextNode(css));
  document.head.appendChild(style);

  // ---- Build overlay ----
  var overlay = document.createElement("div");
  overlay.id = "global-form-loader";
  overlay.setAttribute("role", "status");
  overlay.setAttribute("aria-live", "polite");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML =
    '<div class="gfl-inner">' +
    '<div class="gfl-spinner"></div>' +
    '<div class="gfl-text">Please wait…</div>' +
    "</div>";

  function mount() {
    if (!overlay.parentNode && document.body) document.body.appendChild(overlay);
  }
  if (document.body) mount();
  else document.addEventListener("DOMContentLoaded", mount);

  var submitting = false;

  function submitButtons() {
    return document.querySelectorAll(
      'button[type="submit"], input[type="submit"], .btn-submit-1'
    );
  }

  function showLoader() {
    if (submitting) return;
    submitting = true;
    mount();
    overlay.classList.add("is-active");
    overlay.setAttribute("aria-hidden", "false");
    // Belt-and-braces: also disable the buttons (overlay already blocks clicks).
    submitButtons().forEach(function (b) {
      b.disabled = true;
      b.setAttribute("aria-disabled", "true");
    });
  }

  function hideLoader() {
    submitting = false;
    overlay.classList.remove("is-active");
    overlay.setAttribute("aria-hidden", "true");
    submitButtons().forEach(function (b) {
      b.disabled = false;
      b.removeAttribute("aria-disabled");
    });
  }

  function isLeadForm(form) {
    return (
      form &&
      form.classList &&
      (form.classList.contains("needs-validation") ||
        form.classList.contains("auto-update-form"))
    );
  }

  // Native submit (button click / Enter). Bubble phase runs AFTER the page's own
  // validation handlers, so defaultPrevented reliably tells us it will submit.
  document.addEventListener(
    "submit",
    function (e) {
      var form = e.target;
      if (submitting) {
        e.preventDefault(); // a submission is already in flight — block the rest
        return;
      }
      if (e.defaultPrevented) return; // invalid form, blocked by validation
      if (form && typeof form.checkValidity === "function" && !form.checkValidity()) {
        return;
      }
      showLoader();
    },
    false
  );

  // Programmatic form.submit() bypasses the submit event entirely.
  var nativeSubmit = HTMLFormElement.prototype.submit;
  HTMLFormElement.prototype.submit = function () {
    if (isLeadForm(this)) showLoader();
    return nativeSubmit.apply(this, arguments);
  };

  // Reset if the page is restored from the back/forward (bfcache).
  window.addEventListener("pageshow", function (e) {
    if (e.persisted) hideLoader();
  });
})();
