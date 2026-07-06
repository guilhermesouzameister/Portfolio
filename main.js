/* ═══════════════════════════════════════════════════════════════════════
   GUILHERME RAFAEL — THREE.JS 3D VIEWERS + LIQUID SPLASH + PARTICLES
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

  /* ─── THREE.JS MODEL VIEWERS ─── */
  function initModelViewers() {
    var canvases = document.querySelectorAll('.model-canvas');
    canvases.forEach(function (canvas) {
      createViewer(canvas);
    });
  }

  function createViewer(canvas) {
    var container = canvas.parentElement;
    var width = container.clientWidth;
    var height = container.clientHeight;

    /* Scene */
    var scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0e0e0e);

    /* Camera */
    var camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 1.5, 5);

    /* Renderer */
    var renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: false
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputEncoding = THREE.sRGBEncoding;

    /* Lights — warm studio rig */
    var ambientLight = new THREE.AmbientLight(0x2a2015, 0.6);
    scene.add(ambientLight);

    var keyLight = new THREE.DirectionalLight(0xffeedd, 1.8);
    keyLight.position.set(5, 8, 5);
    keyLight.castShadow = true;
    scene.add(keyLight);

    var fillLight = new THREE.DirectionalLight(0xd4a843, 0.4);
    fillLight.position.set(-5, 3, -3);
    scene.add(fillLight);

    var rimLight = new THREE.PointLight(0xc9a227, 1.2, 20);
    rimLight.position.set(-3, 4, -5);
    scene.add(rimLight);

    var bottomGlow = new THREE.PointLight(0x8b6914, 0.5, 10);
    bottomGlow.position.set(0, -2, 2);
    scene.add(bottomGlow);

    /* Ground plane (reflective) */
    var groundGeo = new THREE.PlaneGeometry(30, 30);
    var groundMat = new THREE.MeshStandardMaterial({
      color: 0x0a0a0a,
      roughness: 0.15,
      metalness: 0.9
    });
    var ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -1;
    scene.add(ground);

    /* Gold decorative ring on ground */
    var ringGeo = new THREE.TorusGeometry(2.2, 0.005, 8, 128);
    var ringMat = new THREE.MeshStandardMaterial({
      color: 0xc9a227,
      emissive: 0x8b6914,
      emissiveIntensity: 0.3,
      roughness: 0.2,
      metalness: 1.0
    });
    var goldRing = new THREE.Mesh(ringGeo, ringMat);
    goldRing.rotation.x = -Math.PI / 2;
    goldRing.position.y = -0.99;
    scene.add(goldRing);

    /* Outer ring */
    var ring2Geo = new THREE.TorusGeometry(2.8, 0.003, 8, 128);
    var ring2 = new THREE.Mesh(ring2Geo, ringMat.clone());
    ring2.material.opacity = 0.4;
    ring2.material.transparent = true;
    ring2.rotation.x = -Math.PI / 2;
    ring2.position.y = -0.99;
    scene.add(ring2);

    /* OrbitControls */
    var controls = new THREE.OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enablePan = false;
    controls.minDistance = 2;
    controls.maxDistance = 10;
    controls.maxPolarAngle = Math.PI * 0.75;
    controls.minPolarAngle = Math.PI * 0.15;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.8;
    controls.target.set(0, 0.5, 0);

    /* Try loading GLB model, fallback to placeholder */
    var modelPath = canvas.getAttribute('data-model');
    var modelLoaded = false;

    if (modelPath) {
      var loader = new THREE.GLTFLoader();
      loader.load(
        modelPath,
        function (gltf) {
          var model = gltf.scene;
          model.position.set(0, 0, 0);

          /* Auto-scale model to fit */
          var box = new THREE.Box3().setFromObject(model);
          var size = box.getSize(new THREE.Vector3());
          var maxDim = Math.max(size.x, size.y, size.z);
          if (maxDim > 0) {
            var scale = 3 / maxDim;
            model.scale.setScalar(scale);
            box.setFromObject(model);
            var center = box.getCenter(new THREE.Vector3());
            model.position.sub(center);
            model.position.y += 0.5;
          }

          scene.add(model);
          modelLoaded = true;
        },
        undefined,
        function () {
          /* GLB not found — show placeholder */
          createPlaceholderBottle(scene);
        }
      );
    } else {
      createPlaceholderBottle(scene);
    }

    /* Placeholder bottle geometry */
    function createPlaceholderBottle(scene) {
      var bottleGroup = new THREE.Group();

      /* Bottle body */
      var bodyGeo = new THREE.CylinderGeometry(0.5, 0.55, 2.2, 32, 1, true);
      var glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x88ccff,
        transparent: true,
        opacity: 0.25,
        roughness: 0.05,
        metalness: 0.0,
        transmission: 0.9,
        thickness: 0.5,
        ior: 1.52,
        envMapIntensity: 1.0
      });
      var body = new THREE.Mesh(bodyGeo, glassMat);
      body.position.y = 0.1;
      bottleGroup.add(body);

      /* Bottle neck */
      var neckGeo = new THREE.CylinderGeometry(0.2, 0.35, 1.0, 32, 1, true);
      var neck = new THREE.Mesh(neckGeo, glassMat.clone());
      neck.position.y = 1.7;
      bottleGroup.add(neck);

      /* Bottle cap */
      var capGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.3, 32);
      var goldMat = new THREE.MeshStandardMaterial({
        color: 0xc9a227,
        roughness: 0.2,
        metalness: 1.0
      });
      var cap = new THREE.Mesh(capGeo, goldMat);
      cap.position.y = 2.35;
      bottleGroup.add(cap);

      /* Liquid inside */
      var liquidGeo = new THREE.CylinderGeometry(0.45, 0.50, 1.8, 32);
      var liquidMat = new THREE.MeshPhysicalMaterial({
        color: 0xb8860b,
        transparent: true,
        opacity: 0.6,
        roughness: 0.1,
        metalness: 0.0,
        transmission: 0.3
      });
      var liquid = new THREE.Mesh(liquidGeo, liquidMat);
      liquid.position.y = -0.3;
      bottleGroup.add(liquid);

      /* Label band */
      var labelGeo = new THREE.CylinderGeometry(0.52, 0.52, 0.8, 32, 1, true, 0, Math.PI * 2);
      var labelMat = new THREE.MeshStandardMaterial({
        color: 0x1a1610,
        roughness: 0.7,
        metalness: 0.1
      });
      var label = new THREE.Mesh(labelGeo, labelMat);
      label.position.y = 0.4;
      bottleGroup.add(label);

      /* Gold label border (top) */
      var borderGeo = new THREE.TorusGeometry(0.525, 0.008, 8, 64);
      var borderMat = new THREE.MeshStandardMaterial({
        color: 0xd4a843,
        roughness: 0.3,
        metalness: 0.9
      });
      var borderTop = new THREE.Mesh(borderGeo, borderMat);
      borderTop.position.y = 0.8;
      borderTop.rotation.x = Math.PI / 2;
      bottleGroup.add(borderTop);

      var borderBottom = new THREE.Mesh(borderGeo.clone(), borderMat.clone());
      borderBottom.position.y = 0.0;
      borderBottom.rotation.x = Math.PI / 2;
      bottleGroup.add(borderBottom);

      bottleGroup.position.y = 0.2;
      scene.add(bottleGroup);
    }

    /* Animation loop */
    function animate() {
      requestAnimationFrame(animate);
      controls.update();

      /* Gentle gold ring pulse */
      if (goldRing.material.emissiveIntensity !== undefined) {
        goldRing.material.emissiveIntensity = 0.2 + Math.sin(Date.now() * 0.001) * 0.15;
      }

      renderer.render(scene, camera);
    }
    animate();

    /* Resize handler */
    var resizeTimeout;
    window.addEventListener('resize', function () {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(function () {
        var w = container.clientWidth;
        var h = container.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }, 100);
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
    initModelViewers();
    initSmoothScroll();
    initHeroParallax();
  });

})();