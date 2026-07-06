/* ═══════════════════════════════════════════════════════════════════════
   GUILHERME RAFAEL — VIDEO PLACEHOLDERS + LIQUID SPLASH + PARTICLES
   ───────────────────────────────────────────────────────────────────────
   The Three.js + GLB viewer has been retired. The showcase now consists
   of three <video class="model-video"> elements (see index.html), each
   pointing at videos/video-N.mp4. This file:
     • plays each video only while it is on-screen (IntersectionObserver)
       — saves CPU/battery on long pages,
     • pauses + seeks back to 0 when it scrolls off-screen so re-entry
       always starts from a clean frame,
     • listens for `error` events on each <video> and, if the source
       MP4 is missing or unparseable, marks the parent
       .model-viewer-container with `.is-missing` so the CSS surfaces
       a discreet gold placeholder instead of a broken player.
   ═══════════════════════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── SCROLL-REVEAL ─── */
  function initScrollReveal() {
    var targets = document.querySelectorAll(
      '.section-frame, .model-showcase, .service-card, .process-step, .value-column'
    );
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    targets.forEach(function (el) { observer.observe(el); });
  }

  /* ─── AMBIENT GOLD PARTICLES ─── */
  function initGoldParticles() {
    var body = document.body;
    for (var i = 0; i < 15; i++) {
      var particle = document.createElement('div');
      particle.className = 'gold-particle';
      particle.style.left = (Math.random() * 100) + '%';
      particle.style.top = (20 + Math.random() * 60) + '%';
      particle.style.animationDelay = (Math.random() * 6) + 's';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = (1 + Math.random() * 2) + 'px';
      particle.style.height = particle.style.width;
      body.appendChild(particle);
    }
  }

  /* ─── LIQUID SPLASH SVG ANIMATION ENHANCEMENT ─── */
  function initLiquidSplash() {
    var splashes = document.querySelectorAll('.splash-path');
    if (!splashes.length) return;

    var time = 0;
    function animateSplash() {
      time += 0.008;
      splashes.forEach(function (path, idx) {
        var offset = idx * 1.2;
        var basePoints = [
          [0, 400], [50, 380], [80, 350], [120, 360], [160, 370],
          [180, 390], [220, 370], [260, 350], [280, 320], [320, 340],
          [360, 360], [380, 380], [420, 360], [460, 340], [500, 370],
          [540, 350], [580, 330], [600, 360], [600, 400]
        ];

        var d = 'M' + basePoints[0][0] + ',' + basePoints[0][1];
        for (var j = 1; j < basePoints.length; j++) {
          var wave = Math.sin(time + offset + j * 0.5) * (5 + idx * 3);
          var px = basePoints[j][0];
          var py = basePoints[j][1] + wave;
          d += ' L' + px + ',' + py;
        }
        d += ' Z';
        path.setAttribute('d', d);
      });
      requestAnimationFrame(animateSplash);
    }
    animateSplash();
  }

  /* ─── VIDEO PLACEHOLDERS ───
     Replaces the old Three.js / GLB viewer. Each <video> autoplays via
     its native attributes (muted + loop + autoplay + playsinline), but
     we layer IntersectionObserver control on top so off-screen videos
     are paused (saves cycles) and re-enter at frame 0 (clean re-entry).
     If the source MP4 is missing or fails to decode, the parent
     container is marked .is-missing and the CSS shows the placeholder.
  */
  function initVideoPlaceholders() {
    var videos = document.querySelectorAll('.model-video');
    if (!videos.length) return;

    videos.forEach(function (video) {
      var container = video.closest('.model-viewer-container');

      /* ── Missing-source handling ──
         The `error` event fires on a <video> when the resource cannot
         be loaded or decoded. We also check readyState after a short
         timeout, because some browsers do not fire `error` for 404s on
         the <source> when `src` is set directly on the element — they
         just leave readyState at 0 forever.
      */
      function markMissing() {
        if (container) container.classList.add('is-missing');
      }
      video.addEventListener('error', markMissing);

      /* Probe the network state. If the file is missing the browser
         will typically land in NETWORK_NO_SOURCE after a beat. */
      window.setTimeout(function () {
        if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE ||
            video.readyState === HTMLMediaElement.HAVE_NOTHING) {
          /* Only flag as missing if the error path hasn't already
             resolved the video — double-check networkState. */
          if (video.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) {
            markMissing();
          }
        }
      }, 1500);

      /* ── Visibility-based play / pause ──
         Saves CPU/GPU on long pages: only the on-screen video is
         actually decoding frames. On exit we pause + rewind so the
         next visit starts from the head of the loop.
      */
      if ('IntersectionObserver' in window) {
        var visObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              var p = video.play();
              if (p && typeof p.then === 'function') {
                p.catch(function () {
                  /* Autoplay was blocked (e.g. brand-new browser
                     session that hasn't seen a user gesture yet).
                     Muted autoplay should be allowed everywhere,
                     but we swallow the rejection just in case so it
                     doesn't spam the console. */
                });
              }
            } else {
              video.pause();
              try { video.currentTime = 0; } catch (e) { /* ignore */ }
            }
          });
        }, { threshold: 0.25 });

        visObserver.observe(video);
      } else {
        /* Fallback for very old browsers — just try to play. */
        var p = video.play();
        if (p && typeof p.then === 'function') {
          p.catch(function () { /* ignore */ });
        }
      }
    });
  }

  /* ─── SMOOTH SCROLL FOR NAV (if needed) ─── */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId && targetId.length > 1) {
          var target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  /* ─── PARALLAX ON HERO ─── */
  function initHeroParallax() {
    var hero = document.querySelector('.hero-content');
    var splashes = document.querySelector('.liquid-splash-container');
    if (!hero) return;

    window.addEventListener('scroll', function () {
      var scrollY = window.pageYOffset;
      if (scrollY < window.innerHeight) {
        var factor = scrollY * 0.3;
        hero.style.transform = 'translateY(' + factor + 'px)';
        hero.style.opacity = 1 - (scrollY / window.innerHeight);
        if (splashes) {
          splashes.style.transform = 'translateY(' + (scrollY * 0.15) + 'px)';
        }
      }
    });
  }

  /* ─── INIT ─── */
  document.addEventListener('DOMContentLoaded', function () {
    initScrollReveal();
    initGoldParticles();
    initLiquidSplash();
    initVideoPlaceholders();
    initSmoothScroll();
    initHeroParallax();
  });

})();
