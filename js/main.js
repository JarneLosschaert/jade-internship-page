/* ============================================================================
   MAIN  —  builds the page from js/content.js and runs the interactions.
   ============================================================================
   You normally do NOT need to edit this file. To change words or photos,
   edit  js/content.js .  To change colours/fonts, edit  css/styles.css .
============================================================================ */

(function () {
  "use strict";

  // accent name -> real colour (kept in sync with css/styles.css)
  var ACCENTS = {
    yellow: "#FFF197",
    red: "#FF513D",
    lightblue: "#8EB9FC",
    blue: "#274DEA",
    mint: "#EBFFDC",
  };

  var el = function (tag, cls) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    return n;
  };

  /* ----------------------------------------------------------------------- *
   * 1. THE OPENING
   * ----------------------------------------------------------------------- */
  function renderIntro() {
    var i = SITE.intro || {};
    var root = document.getElementById("intro");

    if (i.kicker) {
      var k = el("p", "intro__kicker");
      k.textContent = i.kicker;
      root.appendChild(k);
    }
    var h = el("h1", "intro__title");
    h.textContent = i.title || "";
    root.appendChild(h);

    if (i.subtitle) {
      var s = el("p", "intro__subtitle");
      s.textContent = i.subtitle;
      root.appendChild(s);
    }
    if (i.scrollHint) {
      var hint = el("div", "intro__hint");
      var label = document.createElement("span");
      label.textContent = i.scrollHint;
      var chev = el("span", "chev");
      hint.appendChild(label);
      hint.appendChild(chev);
      root.appendChild(hint);
    }
  }

  /* ----------------------------------------------------------------------- *
   * 2. THE TIMELINE NODES
   * ----------------------------------------------------------------------- */
  var sparkle =
    '<svg viewBox="0 0 24 24" width="100%" height="100%" aria-hidden="true">' +
    '<path fill="currentColor" d="M12 0c1 8 4 11 12 12-8 1-11 4-12 12-1-8-4-11-12-12 8-1 11-4 12-12z"/></svg>';

  function renderNodes() {
    var wrap = document.getElementById("timeline-nodes");
    var stories = SITE.stories || [];

    stories.forEach(function (story, index) {
      var side = index % 2 === 0 ? "left" : "right";
      var node = el("div", "node node--" + side + " accent-" + (story.accent || "lightblue"));

      var btn = el("button", "node__inner");
      btn.type = "button";
      btn.setAttribute("aria-label", "Read the story: " + (story.title || ""));

      // photo
      var photo = el("div", "node__photo frame-" + (story.frame === "polaroid" ? "polaroid" : "circle"));
      var num = el("span", "node__num");
      num.textContent = index + 1;
      photo.appendChild(num);
      if (story.cover) {
        var img = el("img");
        img.src = story.cover;
        img.alt = story.title || "";
        img.loading = "lazy";
        photo.appendChild(img);
      }
      var burst = el("span", "node__burst");
      burst.innerHTML = sparkle;
      photo.appendChild(burst);
      btn.appendChild(photo);

      // text
      if (story.label) {
        var lbl = el("span", "node__label");
        lbl.textContent = story.label;
        btn.appendChild(lbl);
      }
      var title = el("h2", "node__title");
      title.textContent = story.title || "";
      btn.appendChild(title);

      if (story.teaser) {
        var teaser = el("p", "node__teaser");
        teaser.textContent = story.teaser;
        btn.appendChild(teaser);
      }
      var cta = el("span", "node__cta");
      cta.textContent = "Read the story";
      btn.appendChild(cta);

      btn.addEventListener("click", function () {
        openStory(story);
      });

      node.appendChild(btn);
      wrap.appendChild(node);
    });
  }

  /* ----------------------------------------------------------------------- *
   * 3. THE WINDING LINE  (an SVG path connecting the photo centres)
   * ----------------------------------------------------------------------- */
  var svg = document.getElementById("timeline-line");
  var timeline = document.getElementById("timeline");
  var pathEl = null;
  var pathLength = 0;

  function photoCentres() {
    var svgRect = svg.getBoundingClientRect();
    var photos = timeline.querySelectorAll(".node__photo");
    var pts = [];
    photos.forEach(function (p) {
      // Measure each photo's centre relative to the SVG.
      // getBoundingClientRect gives the correct centre even when the photo is
      // rotated (polaroid) or while its parent is mid-reveal animation.
      // (The old offsetTop method broke: a transformed ancestor becomes the
      // offsetParent, collapsing offsetTop to ~0 for not-yet-revealed nodes,
      // which made the line shoot sideways.)
      var r = p.getBoundingClientRect();
      pts.push({
        x: r.left + r.width / 2 - svgRect.left,
        y: r.top + r.height / 2 - svgRect.top,
      });
    });
    return pts;
  }

  // Recompute the line at most once per animation frame.
  var drawQueued = false;
  function scheduleDraw() {
    if (drawQueued) return;
    drawQueued = true;
    requestAnimationFrame(function () {
      drawQueued = false;
      drawLine();
    });
  }

  function smoothPath(pts) {
    if (pts.length < 2) return "";
    var d = "M " + pts[0].x + " " + pts[0].y;
    for (var i = 0; i < pts.length - 1; i++) {
      var p0 = pts[i - 1] || pts[i];
      var p1 = pts[i];
      var p2 = pts[i + 1];
      var p3 = pts[i + 2] || p2;
      var t = 1 / 6;
      var c1x = p1.x + (p2.x - p0.x) * t;
      var c1y = p1.y + (p2.y - p0.y) * t;
      var c2x = p2.x - (p3.x - p1.x) * t;
      var c2y = p2.y - (p3.y - p1.y) * t;
      d += " C " + c1x + " " + c1y + " " + c2x + " " + c2y + " " + p2.x + " " + p2.y;
    }
    return d;
  }

  function drawLine() {
    var w = timeline.clientWidth;
    var hgt = timeline.clientHeight;
    var pts = photoCentres();
    if (pts.length < 2) return;

    svg.setAttribute("viewBox", "0 0 " + w + " " + hgt);

    if (!pathEl) {
      pathEl = document.createElementNS("http://www.w3.org/2000/svg", "path");
      pathEl.setAttribute("class", "line-path");
      svg.appendChild(pathEl);
    }
    pathEl.setAttribute("d", smoothPath(pts));
    pathLength = pathEl.getTotalLength();
    pathEl.style.strokeDasharray = pathLength;
    updateDraw();
  }

  // draw the line progressively as the visitor scrolls down
  function updateDraw() {
    if (!pathEl || !pathLength) return;
    var r = timeline.getBoundingClientRect();
    var vh = window.innerHeight || document.documentElement.clientHeight;
    var p = (vh * 0.85 - r.top) / (r.height + vh * 0.3);
    p = Math.max(0, Math.min(1, p));
    pathEl.style.strokeDashoffset = pathLength * (1 - p);
  }

  /* ----------------------------------------------------------------------- *
   * 4. REVEAL NODES ON SCROLL
   * ----------------------------------------------------------------------- */
  function revealOnScroll() {
    var nodes = document.querySelectorAll(".node");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(function (n) { n.classList.add("is-visible"); });
      return;
    }
    var obs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            obs.unobserve(e.target);
            scheduleDraw();
          }
        });
      },
      { threshold: 0.18 }
    );
    nodes.forEach(function (n) { obs.observe(n); });
  }

  /* ----------------------------------------------------------------------- *
   * 5. THE POP-UP STORY
   * ----------------------------------------------------------------------- */
  var overlay = document.getElementById("story-overlay");
  var card = document.getElementById("story-card");
  var scroll = document.getElementById("story-card-scroll");
  var lastFocused = null;

  function openStory(story) {
    scroll.innerHTML = "";

    card.className = "story-card accent-" + (story.accent || "lightblue");
    var accentHex = ACCENTS[story.accent] || ACCENTS.lightblue;
    card.style.setProperty("--accent", accentHex);

    if (story.cover) {
      // banner that shows the WHOLE photo, with a soft blurred copy behind it
      // so portrait/landscape covers both look good (no cropping, no dead space)
      var coverWrap = el("button", "story-cover-wrap");
      coverWrap.type = "button";
      coverWrap.setAttribute("aria-label", "View cover photo full screen");
      var coverBg = el("div", "story-cover-bg");
      coverBg.style.backgroundImage = 'url("' + story.cover + '")';
      coverWrap.appendChild(coverBg);
      var cover = el("img", "story-cover");
      cover.src = story.cover;
      cover.alt = story.title || "";
      coverWrap.appendChild(cover);
      coverWrap.addEventListener("click", function () { openLightbox(story.cover, story.title || ""); });
      scroll.appendChild(coverWrap);
    }

    var body = el("div", "story-body");

    if (story.label) {
      var lbl = el("span", "story-label");
      lbl.textContent = story.label;
      body.appendChild(lbl);
    }
    var title = el("h2", "story-title");
    title.id = "story-card-title";
    title.textContent = story.title || "";
    body.appendChild(title);

    (story.blocks || []).forEach(function (b) {
      var block = el("div", "story-block");
      if (b.heading) {
        var h3 = el("h3");
        h3.textContent = b.heading;
        block.appendChild(h3);
      }
      if (b.text) {
        var p = el("p");
        p.textContent = b.text;
        block.appendChild(p);
      }
      body.appendChild(block);
    });

    if (story.link && story.link.url) {
      var a = el("a", "story-link");
      a.href = story.link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = story.link.label || "Read more";
      body.appendChild(a);
    }

    if (story.gallery && story.gallery.length) {
      var gal = el("div", "story-gallery");
      story.gallery.forEach(function (g) {
        var fig = el("figure");
        var btn = el("button", "gallery-btn");
        btn.type = "button";
        btn.setAttribute("aria-label", "View photo full screen");
        var im = el("img");
        im.src = g.src;
        im.alt = g.caption || "";
        im.loading = "lazy";
        btn.appendChild(im);
        btn.addEventListener("click", function () { openLightbox(g.src, g.caption || ""); });
        fig.appendChild(btn);
        if (g.caption) {
          var cap = el("figcaption");
          cap.textContent = g.caption;
          fig.appendChild(cap);
        }
        gal.appendChild(fig);
      });
      body.appendChild(gal);
    }

    scroll.appendChild(body);

    lastFocused = document.activeElement;
    overlay.hidden = false;
    document.body.style.overflow = "hidden";
    scroll.scrollTop = 0;
    card.focus();
  }

  function closeStory() {
    overlay.hidden = true;
    if (lightbox.hidden) document.body.style.overflow = "";
    if (lastFocused && lastFocused.focus) lastFocused.focus();
  }

  overlay.addEventListener("click", function (e) {
    if (e.target.hasAttribute("data-close")) closeStory();
  });

  /* ---- full-screen image viewer (lightbox) ---- */
  var lightbox = el("div", "lightbox");
  lightbox.hidden = true;
  var lbClose = el("button", "lightbox__close");
  lbClose.setAttribute("aria-label", "Close image");
  lbClose.innerHTML = "&times;";
  var lbImg = el("img", "lightbox__img");
  lbImg.alt = "";
  var lbCap = el("div", "lightbox__cap");
  lightbox.appendChild(lbClose);
  lightbox.appendChild(lbImg);
  lightbox.appendChild(lbCap);
  document.body.appendChild(lightbox);
  var lbLastFocused = null;

  function openLightbox(src, caption) {
    lbImg.src = src;
    lbImg.alt = caption || "";
    lbCap.textContent = caption || "";
    lbCap.style.display = caption ? "block" : "none";
    lbLastFocused = document.activeElement;
    lightbox.hidden = false;
    document.body.style.overflow = "hidden";
    lbClose.focus();
  }
  function closeLightbox() {
    lightbox.hidden = true;
    // if the story dialog is still open behind it, keep the page scroll locked
    if (overlay.hidden) document.body.style.overflow = "";
    if (lbLastFocused && lbLastFocused.focus) lbLastFocused.focus();
  }
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox || e.target === lbClose) closeLightbox();
  });

  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    if (!lightbox.hidden) { closeLightbox(); return; }
    if (!overlay.hidden) closeStory();
  });

  /* ----------------------------------------------------------------------- *
   * 6. FOOTER
   * ----------------------------------------------------------------------- */
  function renderFooter() {
    var f = SITE.footer || {};
    var root = document.getElementById("footer");
    if (f.text) {
      var span = document.createElement("span");
      span.textContent = f.text;
      root.appendChild(span);
    }
    if (f.link && f.link.url) {
      var dot = el("span", "footer__dot");
      root.appendChild(dot);
      var a = document.createElement("a");
      a.href = f.link.url;
      a.target = "_blank";
      a.rel = "noopener";
      a.textContent = f.link.label || f.link.url;
      root.appendChild(a);
    }
  }

  /* ----------------------------------------------------------------------- *
   * 7. START
   * ----------------------------------------------------------------------- */
  function debounce(fn, ms) {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(fn, ms);
    };
  }

  renderIntro();
  renderNodes();
  renderFooter();
  revealOnScroll();

  // draw the line once layout is ready, and keep it correct afterwards
  requestAnimationFrame(drawLine);
  window.addEventListener("load", drawLine);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawLine);
  window.addEventListener("resize", debounce(drawLine, 150));
  window.addEventListener("scroll", updateDraw, { passive: true });

  // when a node finishes sliding into view, its final position is known, so
  // recompute the line to snap it exactly onto the photo centres.
  document.getElementById("timeline-nodes").addEventListener("transitionend", function (e) {
    if (e.propertyName === "transform") scheduleDraw();
  });
  // a couple of safety redraws for late layout shifts (slow image/font loads)
  setTimeout(drawLine, 400);
  setTimeout(drawLine, 1200);
})();
