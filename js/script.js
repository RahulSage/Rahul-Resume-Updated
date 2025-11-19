// script.js - handles sticky header, row navigation, thumbnail interactions, and expand details
document.addEventListener("DOMContentLoaded", function () {
  // Sticky header show after hero
  const sticky = document.getElementById("stickyHeader");
  const hero = document.querySelector(".hero");
  function checkSticky() {
    if (!hero) return;
    const h = hero.offsetHeight || 360;
    if (window.scrollY > h - 80) {
      sticky.classList.add("show");
    } else {
      sticky.classList.remove("show");
    }
  }
  checkSticky();
  window.addEventListener("scroll", checkSticky);
  window.addEventListener("resize", checkSticky);

  // Row nav controls
  document.querySelectorAll(".row-nav").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = btn.getAttribute("data-target");
      const dir = parseInt(btn.getAttribute("data-dir") || "1", 10);
      const row = document.getElementById(id);
      if (!row) return;
      const offset = row.clientWidth * 0.6 * dir;
      row.scrollBy({ left: offset, behavior: "smooth" });
    });
  });

  // Drag to scroll for rows
  document.querySelectorAll(".row").forEach((row) => {
    let active = false,
      startX,
      scrollLeft;
    row.addEventListener("pointerdown", (e) => {
      active = true;
      row.setPointerCapture(e.pointerId);
      startX = e.pageX - row.offsetLeft;
      scrollLeft = row.scrollLeft;
    });
    row.addEventListener("pointermove", (e) => {
      if (!active) return;
      const x = e.pageX - row.offsetLeft;
      const walk = (x - startX) * 1.2;
      row.scrollLeft = scrollLeft - walk;
    });
    row.addEventListener("pointerup", (e) => {
      active = false;
      row.releasePointerCapture(e.pointerId);
    });
    row.addEventListener("pointerleave", () => {
      active = false;
    });
  });

  // // Movie-card expand toggle - click to show details
  // document.querySelectorAll(".movie-card").forEach((card) => {
  //   card.addEventListener("click", () => {
  //     const details = card.querySelector(".movie-details");
  //     if (!details) return;
  //     const showing = !details.hidden;
  //     // hide all other details on page
  //     document
  //       .querySelectorAll(".movie-details")
  //       .forEach((d) => (d.hidden = true));
  //     if (showing) {
  //       details.hidden = true;
  //     } else {
  //       details.hidden = false;
  //       // smooth scroll card into view
  //       card.scrollIntoView({ behavior: "smooth", block: "center" });
  //     }
  //   });

  //   // small tilt effect on mouse move
  //   card.addEventListener("mousemove", (ev) => {
  //     const rect = card.getBoundingClientRect();
  //     const x = ev.clientX - rect.left;
  //     const y = ev.clientY - rect.top;
  //     const cx = rect.width / 2,
  //       cy = rect.height / 2;
  //     const dx = (x - cx) / cx;
  //     const dy = (y - cy) / cy;
  //     card.style.transform = `rotateX(${(-dy * 4).toFixed(2)}deg) rotateY(${(
  //       dx * 6
  //     ).toFixed(2)}deg) translateY(-6px)`;
  //   });
  //   card.addEventListener("mouseleave", () => {
  //     card.style.transform = "";
  //   });
  // });

  // increase font size inside .netflix-card on hover by ~2px
  document.querySelectorAll(".thumb, .card, .movie-card").forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.querySelectorAll("*").forEach((ch) => {
        const computed = window.getComputedStyle(ch).fontSize;
        if (computed) {
          try {
            const current = parseFloat(computed);
            ch.style.transition = "font-size .18s ease";
            ch.style.fontSize = current + 2 + "px";
          } catch (e) {}
        }
      });
    });
    el.addEventListener("mouseleave", () => {
      el.querySelectorAll("*").forEach((ch) => {
        ch.style.fontSize = "";
      });
    });
  });
});

// Create overlay element
let overlay = document.createElement("div");
overlay.className = "expanded-overlay";
document.body.appendChild(overlay);

document.addEventListener("click", function (e) {
  let card = e.target.closest(".big-card");

  // Close expanded card when clicking outside
  if (!card && document.querySelector(".big-card.expanded")) {
    document
      .querySelectorAll(".movie-details")
      .forEach((d) => (d.hidden = true));
    document.querySelector(".big-card.expanded").classList.remove("expanded");
    overlay.style.display = "none";

    return;
  }

  // Expand card
  if (card && !card.classList.contains("expanded")) {
    let details = card.querySelector(".movie-details");
    if (details) details.hidden = false;
    card.classList.add("expanded");
    overlay.style.display = "block";
  }
});
