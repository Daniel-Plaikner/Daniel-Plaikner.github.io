// Animated background: slowly drifting nodes, linked when they are close (a small "knowledge graph").
// Colours come from the CSS variables, so it follows the light and dark theme.
(() => {
  const canvas = document.getElementById("bg"), ctx = canvas.getContext("2d");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const LINK = 150; // px: nodes closer than this are connected
  let w, h, nodes = [], colors = [];

  function resize() {
    const dpr = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth; h = innerHeight;
    canvas.width = w * dpr; canvas.height = h * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const css = getComputedStyle(document.documentElement);
    colors = ["--accent", "--accent-2", "--accent-3"].map(v => css.getPropertyValue(v).trim());
    const n = Math.min(90, Math.round((w * h) / 20000));
    nodes = Array.from({ length: n }, (_, i) => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .3, vy: (Math.random() - .5) * .3,
      r: 1.2 + Math.random() * 1.6, c: i % 3,
    }));
    draw();
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    for (const a of nodes) {
      a.x += a.vx; a.y += a.vy;
      if (a.x < 0 || a.x > w) a.vx *= -1;
      if (a.y < 0 || a.y > h) a.vy *= -1;
    }
    ctx.lineWidth = 1;
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d > LINK) continue;
        ctx.globalAlpha = (1 - d / LINK) * .35;
        ctx.strokeStyle = colors[a.c];
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      ctx.globalAlpha = .8;
      ctx.fillStyle = colors[a.c];
      ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.2832); ctx.fill();
    }
  }

  function loop() {
    if (!document.hidden) draw();
    requestAnimationFrame(loop);
  }

  addEventListener("resize", resize);
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", resize);
  resize();
  if (!still) loop(); // reduced motion: one static frame only
})();
