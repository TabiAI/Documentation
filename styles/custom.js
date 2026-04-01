// =====================================================
// TRAVELBASE INTERACTION ENGINE
// =====================================================

(function () {
    const root = document.documentElement;

    // -----------------------------------------------------
    // CURSOR LIGHT TRACKING
    // -----------------------------------------------------
    window.addEventListener("mousemove", (e) => {
        root.style.setProperty("--cursor-x", `${e.clientX}px`);
        root.style.setProperty("--cursor-y", `${e.clientY}px`);
    });

    // -----------------------------------------------------
    // SCROLL DEPTH (PARALLAX)
    // -----------------------------------------------------
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const offset = scrolled * -0.05;

        root.style.setProperty("--tb-scroll", `${offset}px`);
    });

    // -----------------------------------------------------
    // INJECT LIGHT LAYER (since Mintlify hides DOM)
    // -----------------------------------------------------
    const light = document.createElement("div");
    light.className = "cursor-light";
    document.body.appendChild(light);
})();

(function () {
    function injectFooter() {
        if (document.querySelector(".tb-footer")) return;

        const footer = document.createElement("div");
        footer.className = "tb-footer";
        footer.innerHTML = `
      <p>© ${new Date().getFullYear()} Travelbase. All rights reserved.</p>
    `;

        document.body.appendChild(footer);
    }

    // Run after page load
    window.addEventListener("load", injectFooter);

    // Also re-run for SPA navigation (Mintlify is client-side)
    const observer = new MutationObserver(() => injectFooter());
    observer.observe(document.body, {childList: true, subtree: true});
})();