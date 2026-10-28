(function () {
  var BP = 768;
  var drawer = document.getElementById("mobdrawer");
  var over = document.getElementById("mobover");
  var toggle = document.querySelector(".nav-toggle");
  var root = document.documentElement;
  function openMenu() {
    if (!drawer) return;
    drawer.classList.add("open");
    over.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    root.style.overflow = "hidden";
  }
  function closeMenu() {
    if (!drawer) return;
    drawer.classList.remove("open");
    over.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    root.style.overflow = "";
  }
  if (toggle) toggle.addEventListener("click", openMenu);
  if (over) over.addEventListener("click", closeMenu);
  var closeBtn = document.querySelector(".mob-close");
  if (closeBtn) closeBtn.addEventListener("click", closeMenu);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeMenu(); });
  window.addEventListener("resize", function () { if (window.innerWidth > BP) closeMenu(); });

  var qs = document.querySelectorAll(".faq-q");
  Array.prototype.forEach.call(qs, function (q) {
    q.addEventListener("click", function () {
      var item = q.parentNode;
      var ans = item.querySelector(".faq-a");
      var open = item.classList.toggle("open");
      q.setAttribute("aria-expanded", open ? "true" : "false");
      ans.style.maxHeight = open ? ans.scrollHeight + 40 + "px" : "0px";
    });
  });
})();
