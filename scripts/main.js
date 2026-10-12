/**
 * LUCKY HARVEY CRAFTSMANSHIP SERIES - SILVER DRAGON (SKU: LH/S/DN-32)
 * Ultra-Premium Interactive Showcase — Complete Scroll-Driven Animation Engine
 * 
 * Features:
 * - Apple-style scroll-driven 360° frame sequence (Hero: 240 frames, Second: 300 frames)
 * - Dynamic celestial stardust & horological guilloche animated canvas background
 * - Ambient spotlight cursor follower
 * - Kinetic gold bead complication simulator
 * - Synthesized horology audio FX
 * - Bento grid micro-tilt parallax
 * - VIP concierge acquisition modal
 */

document.addEventListener('DOMContentLoaded', () => {
  initLuxuryBackground();
  initAmbientCursor();
  initHeroScrollSequence();
  initSecondScrollSequence();
  initSoundToggle();
  initBentoCardTilt();
  initVIPAcquisitionModal();
  initScrollAnimations();
  initRevealAnimations();
});

/* ==========================================================================
   0. LUXURY ANIMATED BACKGROUND CANVAS
   Celestial stardust particles, golden aura, subtle guilloche patterns
   ========================================================================== */
function initLuxuryBackground() {
  const canvas = document.getElementById('luxuryBackgroundCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  const particles = [];
  const PARTICLE_COUNT = 80;
  const auroraPulses = [];
  const AURORA_COUNT = 3;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }

  resize();
  window.addEventListener('resize', resize);

  // Create stardust particles
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.5 + 0.3,
      opacity: Math.random() * 0.5 + 0.1,
      drift: (Math.random() - 0.5) * 0.15,
      fall: Math.random() * 0.08 + 0.02,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      isGold: Math.random() < 0.2
    });
  }

  // Create aurora / nebula pulses
  for (let i = 0; i < AURORA_COUNT; i++) {
    auroraPulses.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 350 + 200,
      hue: Math.random() < 0.5 ? 42 : 220,  // gold or deep blue
      opacity: Math.random() * 0.03 + 0.01,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.2,
      pulseSpeed: Math.random() * 0.008 + 0.003,
      pulsePhase: Math.random() * Math.PI * 2
    });
  }

  let time = 0;

  function drawFrame() {
    time += 0.016;
    ctx.clearRect(0, 0, width, height);

    // Draw aurora nebula pulses
    auroraPulses.forEach(a => {
      a.x += a.dx;
      a.y += a.dy;
      if (a.x < -a.radius) a.x = width + a.radius;
      if (a.x > width + a.radius) a.x = -a.radius;
      if (a.y < -a.radius) a.y = height + a.radius;
      if (a.y > height + a.radius) a.y = -a.radius;

      const pulse = Math.sin(time * a.pulseSpeed * 60 + a.pulsePhase) * 0.5 + 0.5;
      const currentOpacity = a.opacity * (0.5 + pulse * 0.5);
      const gradient = ctx.createRadialGradient(a.x, a.y, 0, a.x, a.y, a.radius);
      
      if (a.hue === 42) {
        gradient.addColorStop(0, `rgba(212, 175, 55, ${currentOpacity * 0.8})`);
        gradient.addColorStop(0.5, `rgba(212, 175, 55, ${currentOpacity * 0.3})`);
        gradient.addColorStop(1, 'rgba(212, 175, 55, 0)');
      } else {
        gradient.addColorStop(0, `rgba(56, 100, 180, ${currentOpacity * 0.6})`);
        gradient.addColorStop(0.5, `rgba(30, 60, 120, ${currentOpacity * 0.2})`);
        gradient.addColorStop(1, 'rgba(20, 40, 80, 0)');
      }

      ctx.fillStyle = gradient;
      ctx.fillRect(a.x - a.radius, a.y - a.radius, a.radius * 2, a.radius * 2);
    });

    // Draw subtle guilloche arcs
    ctx.save();
    ctx.globalAlpha = 0.015;
    ctx.strokeStyle = '#d4af37';
    ctx.lineWidth = 0.5;
    const centerX = width / 2;
    const centerY = height / 2;
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2 + time * 0.02;
      const r = 300 + Math.sin(time * 0.03 + i) * 80;
      ctx.beginPath();
      ctx.arc(centerX, centerY, r, angle, angle + Math.PI * 0.5);
      ctx.stroke();
    }
    ctx.restore();

    // Draw stardust particles
    particles.forEach(p => {
      p.x += p.drift;
      p.y += p.fall;
      p.twinklePhase += p.twinkleSpeed;

      // Wrap around
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y > height) { p.y = 0; p.x = Math.random() * width; }

      const twinkle = Math.sin(p.twinklePhase) * 0.5 + 0.5;
      const alpha = p.opacity * twinkle;

      if (p.isGold) {
        ctx.fillStyle = `rgba(212, 175, 55, ${alpha})`;
        // Gold particles get subtle glow
        ctx.shadowColor = 'rgba(212, 175, 55, 0.3)';
        ctx.shadowBlur = 6;
      } else {
        ctx.fillStyle = `rgba(226, 232, 240, ${alpha * 0.7})`;
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius * (0.8 + twinkle * 0.4), 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    requestAnimationFrame(drawFrame);
  }

  requestAnimationFrame(drawFrame);
}

/* ==========================================================================
   1. HERO CONTINUOUS LOOP FRAME SEQUENCE (240 Frames from assets/herosection)
   Always plays in a seamless 360° auto-loop at ~25fps (Clean video only)
   ========================================================================== */
function initHeroScrollSequence() {
  const canvas = document.getElementById('heroSequenceCanvas');
  const loader = document.getElementById('heroCanvasLoader');
  const typography = document.getElementById('heroTypography');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const TOTAL_FRAMES = 240;
  const frames = [];
  let loadedCount = 0;
  let currentFrame = 0;
  let lastDrawnFrame = -1;
  let isLooping = true;

  // Show loading state initially
  if (loader) loader.classList.add('active');

  // Set canvas resolution to match image (1280x720)
  canvas.width = 1280;
  canvas.height = 720;

  function padNumber(num) {
    return String(num).padStart(3, '0');
  }

  // Preload frames in batches of 20 for optimal performance
  function loadFrameBatch(startIdx, batchSize) {
    const endIdx = Math.min(startIdx + batchSize, TOTAL_FRAMES);
    for (let i = startIdx; i < endIdx; i++) {
      const img = new Image();
      img.src = `assets/herosection/ezgif-frame-${padNumber(i + 1)}.png`;
      img.onload = () => {
        frames[i] = img;
        loadedCount++;

        // Draw first frame immediately once available
        if (i === 0 && lastDrawnFrame < 0) {
          drawHeroFrame(0);
          lastDrawnFrame = 0;
        }

        if (loadedCount >= TOTAL_FRAMES) {
          if (loader) loader.classList.remove('active');
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount >= TOTAL_FRAMES && loader) {
          loader.classList.remove('active');
        }
      };
    }
    if (endIdx < TOTAL_FRAMES) {
      setTimeout(() => loadFrameBatch(endIdx, batchSize), 40);
    }
  }

  loadFrameBatch(0, 20);

  function drawHeroFrame(frameIdx) {
    const img = frames[frameIdx];
    if (!img) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }

  // Auto-playing continuous loop at ~25fps (~40ms per frame)
  let lastTimestamp = 0;
  const FPS = 25;
  const frameDuration = 1000 / FPS;

  function loopHeroAnimation(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = timestamp - lastTimestamp;

    if (elapsed >= frameDuration) {
      lastTimestamp = timestamp - (elapsed % frameDuration);

      if (isLooping) {
        currentFrame = (currentFrame + 1) % TOTAL_FRAMES;

        if (frames[currentFrame]) {
          drawHeroFrame(currentFrame);
          lastDrawnFrame = currentFrame;
        } else if (lastDrawnFrame >= 0) {
          drawHeroFrame(lastDrawnFrame);
        }
      }
    }

    requestAnimationFrame(loopHeroAnimation);
  }

  requestAnimationFrame(loopHeroAnimation);

  // Ensure typography remains crisp and visible
  if (typography) {
    typography.style.opacity = '1';
    typography.style.transform = 'translateY(0)';
  }
}

/* ==========================================================================
   2. SECOND SECTION CONTINUOUS LOOP FRAME SEQUENCE (300 Frames)
   Calibre cinematics auto-looping continuously (Clean video only)
   ========================================================================== */
function initSecondScrollSequence() {
  const canvas = document.getElementById('secondSequenceCanvas');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const TOTAL_FRAMES = 300;
  const frames = [];
  let loadedCount = 0;
  let currentFrame = 0;
  let lastDrawnFrame = -1;
  let isPlaying = true;

  canvas.width = 1280;
  canvas.height = 720;

  function padNumber(num) {
    return String(num).padStart(3, '0');
  }

  // Load frames in batches of 20
  function loadFrameBatch(startIdx, batchSize) {
    const endIdx = Math.min(startIdx + batchSize, TOTAL_FRAMES);
    for (let i = startIdx; i < endIdx; i++) {
      const img = new Image();
      img.src = `assets/secondsection/ezgif-frame-${padNumber(i + 1)}.png`;
      img.onload = () => {
        frames[i] = img;
        loadedCount++;
        if (i === 0 && lastDrawnFrame < 0) {
          drawSecondFrame(0);
          lastDrawnFrame = 0;
        }
      };
      img.onerror = () => { loadedCount++; };
    }
    if (endIdx < TOTAL_FRAMES) {
      setTimeout(() => loadFrameBatch(endIdx, batchSize), 40);
    }
  }

  loadFrameBatch(0, 20);

  function drawSecondFrame(frameIdx) {
    const img = frames[frameIdx];
    if (!img) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const scale = Math.max(canvas.width / img.naturalWidth, canvas.height / img.naturalHeight);
    const w = img.naturalWidth * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width - w) / 2;
    const y = (canvas.height - h) / 2;
    ctx.drawImage(img, x, y, w, h);
  }

  // Continuous loop animation at ~25fps (~40ms per frame)
  let lastTimestamp = 0;
  const FPS = 25;
  const frameDuration = 1000 / FPS;

  function loopSecondAnimation(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const elapsed = timestamp - lastTimestamp;

    if (elapsed >= frameDuration) {
      lastTimestamp = timestamp - (elapsed % frameDuration);

      if (isPlaying) {
        currentFrame = (currentFrame + 1) % TOTAL_FRAMES;

        if (frames[currentFrame]) {
          drawSecondFrame(currentFrame);
          lastDrawnFrame = currentFrame;
        } else if (lastDrawnFrame >= 0) {
          drawSecondFrame(lastDrawnFrame);
        }
      }
    }

    requestAnimationFrame(loopSecondAnimation);
  }

  requestAnimationFrame(loopSecondAnimation);
}

/* ==========================================================================
   3. AMBIENT SPOTLIGHT CURSOR FOLLOWER
   ========================================================================== */
function initAmbientCursor() {
  const cursorLight = document.querySelector('.ambient-cursor-light');
  if (!cursorLight) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function render() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    cursorLight.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}


/* ==========================================================================
   5. AUDIO SYNTHESIZER: LUXURY ESCAPEMENT SOUND FX
   ========================================================================== */
let audioCtx = null;
let isSoundOn = false;
let tickInterval = null;

function initSoundToggle() {
  const soundBtn = document.getElementById('soundToggleBtn');
  const soundLabel = document.getElementById('soundToggleLabel');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    isSoundOn = !isSoundOn;

    if (isSoundOn) {
      if (audioCtx.state === 'suspended') audioCtx.resume();
      soundBtn.style.borderColor = 'var(--accent-gold)';
      soundBtn.style.color = 'var(--accent-gold)';
      soundLabel.textContent = 'Horology Sound: ON (4Hz)';
      startEscapementAudio();
    } else {
      soundBtn.style.borderColor = 'var(--border-light)';
      soundBtn.style.color = 'var(--text-secondary)';
      soundLabel.textContent = 'Sound: Subtle Tick';
      stopEscapementAudio();
    }
  });
}

function startEscapementAudio() {
  tickInterval = setInterval(() => {
    if (!audioCtx || !isSoundOn) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      const filter = audioCtx.createBiquadFilter();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(1800 + Math.random() * 200, audioCtx.currentTime);

      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(2200, audioCtx.currentTime);
      filter.Q.setValueAtTime(8, audioCtx.currentTime);

      gain.gain.setValueAtTime(0.015, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 0.04);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + 0.04);
    } catch (e) {
      console.warn('Audio error:', e);
    }
  }, 250);
}

function stopEscapementAudio() {
  if (tickInterval) {
    clearInterval(tickInterval);
    tickInterval = null;
  }
}

/* ==========================================================================
   6. BENTO GRID MICRO-TILT EFFECT
   ========================================================================== */
function initBentoCardTilt() {
  const cards = document.querySelectorAll('.bento-card');

  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = -((y - centerY) / centerY) * 3;
      const rotateY = ((x - centerX) / centerX) * 3;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}

/* ==========================================================================
   7. VIP CLIENT ACQUISITION MODAL
   ========================================================================== */
function initVIPAcquisitionModal() {
  const openBtn = document.getElementById('enquireNowBtn');
  const modal = document.getElementById('vipModal');
  const closeBtn = document.getElementById('closeVipModal');
  const form = document.getElementById('vipEnquiryForm');
  const formContent = document.getElementById('vipFormContent');
  const successMsg = document.getElementById('vipSuccessMsg');
  const assignedSerial = document.getElementById('assignedSerial');

  if (!openBtn || !modal) return;

  openBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const pieceNumber = String(Math.floor(Math.random() * 88) + 11).padStart(2, '0');
      if (assignedSerial) {
        assignedSerial.textContent = `ALLOCATION RESERVED: LH-DN32-${pieceNumber}/99`;
      }
      formContent.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }
}

/* ==========================================================================
   8. SMOOTH SCROLL, NAVBAR ELEVATION & SECTION TRANSITIONS
   ========================================================================== */
function initScrollAnimations() {
  const nav = document.querySelector('.site-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }, { passive: true });
}

/* ==========================================================================
   9. INTERSECTION OBSERVER: REVEAL ANIMATIONS ON SCROLL
   Premium fade-in / slide-up for content sections
   ========================================================================== */
function initRevealAnimations() {
  const revealElements = document.querySelectorAll(
    '.lore-editorial-header, .lore-content-panel, .highlight-feature-card, ' +
    '.lore-attributes-grid, .specs-header, .bento-card, ' +
    '.acquisition-header-wrap, .floating-glassmorphic-checkout'
  );

  if (!revealElements.length) return;

  // Add initial hidden state
  revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(40px)';
    el.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Stagger the reveal slightly
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 80);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));
}
