(function () {
    const root = document.documentElement;
    window.addEventListener("mousemove", (e) => {
        root.style.setProperty("--cursor-x", `${e.clientX}px`);
        root.style.setProperty("--cursor-y", `${e.clientY}px`);
    });
    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY;
        const offset = scrolled * -0.05;
        root.style.setProperty("--tb-scroll", `${offset}px`);
    });
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

    window.addEventListener("load", injectFooter);
    const observer = new MutationObserver(() => injectFooter());
    observer.observe(document.body, {childList: true, subtree: true});
})();