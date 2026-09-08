import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * Scène 3D Cinématographique Ultra-Dynamique "Chantier d'Avenir" :
 * - Traveling caméra façon drone / travelling cinéma continu (orbite, plongée, contre-plongée)
 * - Grue principale en cycle complet (rotation flèche, chariot coulissant, levage dynamique)
 * - Seconde grue d'arrière-plan synchronisée
 * - Projecteurs volumétriques de recherche balayant le ciel nocturne (Searchlights)
 * - Étincelles de soudure actives (Welding Sparks FX) avec flashes lumineux
 * - Flux de trafic / data lumineux circulant sur la grille au sol (Timelapse urbain)
 * - Balayage laser holographique BIM continu
 */
export default function HeroConstruction3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || 900;
    const height = mount.clientHeight || 900;

    try {
      // 1. SCÈNE, CAMÉRA & RENDERER HAUTE PERFORMANCE
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.35;
      mount.appendChild(renderer.domElement);

      const disposables: {
        geometry: THREE.BufferGeometry;
        material: THREE.Material | THREE.Material[];
      }[] = [];

      // 2. ÉCLAIRAGE CINÉMATOGRAPHIQUE VIVANT
      const ambientLight = new THREE.AmbientLight(0x0f172a, 1.2);
      scene.add(ambientLight);

      // Lumière principale Cyan / Bleu
      const keyLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
      keyLight.position.set(8, 10, 6);
      scene.add(keyLight);

      // Rim Light Émeraude
      const emeraldLight = new THREE.DirectionalLight(0x22c55e, 2.0);
      emeraldLight.position.set(-8, 5, -5);
      scene.add(emeraldLight);

      // Flash de soudure dynamique
      const weldPointLight = new THREE.PointLight(0x67e8f9, 0, 8);
      weldPointLight.position.set(-1.2, 1.6, 0.3);
      scene.add(weldPointLight);

      // Root Group
      const mainGroup = new THREE.Group();
      scene.add(mainGroup);

      const baseY = -1.6;

      // 3. PLATEFORME HOLOGRAPHIQUE & GRILLES DE FONDATION
      const gridGeo = new THREE.PlaneGeometry(14, 14, 28, 28);
      const gridMat = new THREE.MeshBasicMaterial({
        color: 0x1e3a8a,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      const grid = new THREE.Mesh(gridGeo, gridMat);
      grid.rotation.x = -Math.PI / 2;
      grid.position.y = baseY;
      mainGroup.add(grid);
      disposables.push({ geometry: gridGeo, material: gridMat });

      const platformGeo = new THREE.CircleGeometry(4.8, 64);
      const platformMat = new THREE.MeshBasicMaterial({
        color: 0x070e24,
        transparent: true,
        opacity: 0.7,
      });
      const platform = new THREE.Mesh(platformGeo, platformMat);
      platform.rotation.x = -Math.PI / 2;
      platform.position.y = baseY - 0.01;
      mainGroup.add(platform);
      disposables.push({ geometry: platformGeo, material: platformMat });

      // Anneaux lumineux pulsants au sol
      const ring1Geo = new THREE.RingGeometry(4.6, 4.75, 64);
      const ring1Mat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
      ring1.rotation.x = -Math.PI / 2;
      ring1.position.y = baseY + 0.005;
      mainGroup.add(ring1);
      disposables.push({ geometry: ring1Geo, material: ring1Mat });

      // 4. SKYLINE D'IMMEUBLES BTP INTELLIGENTS
      type BuildingDef = {
        x: number;
        z: number;
        w: number;
        d: number;
        h: number;
        floors: number;
        color: number;
      };

      const buildingsData: BuildingDef[] = [
        { x: -2.4, z: -0.5, w: 0.85, d: 0.85, h: 2.1, floors: 6, color: 0x1e3a8a },
        { x: -1.2, z: 0.3, w: 0.95, d: 0.95, h: 3.1, floors: 8, color: 0x2563eb },
        { x: 0.0, z: -0.3, w: 1.15, d: 1.15, h: 4.2, floors: 11, color: 0x1e2f7a },
        { x: 1.4, z: 0.4, w: 0.9, d: 0.9, h: 2.6, floors: 7, color: 0x16a34a },
        { x: 2.5, z: -0.3, w: 0.75, d: 0.75, h: 1.7, floors: 5, color: 0x1e3a8a },
      ];

      buildingsData.forEach((b, i) => {
        // Corps de l'immeuble (verre & acier foncé)
        const bGeo = new THREE.BoxGeometry(b.w, b.h, b.d);
        const bMat = new THREE.MeshStandardMaterial({
          color: b.color,
          transparent: true,
          opacity: 0.52,
          roughness: 0.2,
          metalness: 0.75,
        });
        const bMesh = new THREE.Mesh(bGeo, bMat);
        bMesh.position.set(b.x, baseY + b.h / 2, b.z);
        mainGroup.add(bMesh);
        disposables.push({ geometry: bGeo, material: bMat });

        // Arêtes néon luminescentes (Blueprint)
        const edgesGeo = new THREE.EdgesGeometry(bGeo);
        const edgesMat = new THREE.LineBasicMaterial({
          color: i % 2 === 0 ? 0x22c55e : 0x38bdf8,
          transparent: true,
          opacity: 0.95,
          blending: THREE.AdditiveBlending,
        });
        const edges = new THREE.LineSegments(edgesGeo, edgesMat);
        edges.position.copy(bMesh.position);
        mainGroup.add(edges);
        disposables.push({ geometry: edgesGeo, material: edgesMat });

        // Dalles d'étages
        const floorGeo = new THREE.BufferGeometry();
        const floorPositions: number[] = [];
        for (let f = 1; f < b.floors; f++) {
          const y = -b.h / 2 + (f * b.h) / b.floors;
          floorPositions.push(-b.w / 2, y, b.d / 2, b.w / 2, y, b.d / 2);
          floorPositions.push(-b.w / 2, y, -b.d / 2, b.w / 2, y, -b.d / 2);
          floorPositions.push(-b.w / 2, y, -b.d / 2, -b.w / 2, y, b.d / 2);
          floorPositions.push(b.w / 2, y, -b.d / 2, b.w / 2, y, b.d / 2);
        }
        floorGeo.setAttribute("position", new THREE.Float32BufferAttribute(floorPositions, 3));
        const floorMat = new THREE.LineBasicMaterial({
          color: 0x93c5fd,
          transparent: true,
          opacity: 0.45,
          blending: THREE.AdditiveBlending,
        });
        const floorLines = new THREE.LineSegments(floorGeo, floorMat);
        floorLines.position.copy(bMesh.position);
        mainGroup.add(floorLines);
        disposables.push({ geometry: floorGeo, material: floorMat });

        // Balise rouge clignotante de sécurité aérienne
        const topBeaconGeo = new THREE.SphereGeometry(0.045, 12, 12);
        const topBeaconMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
        const topBeacon = new THREE.Mesh(topBeaconGeo, topBeaconMat);
        topBeacon.position.set(b.x, baseY + b.h + 0.05, b.z);
        mainGroup.add(topBeacon);
        disposables.push({ geometry: topBeaconGeo, material: topBeaconMat });
      });

      // 5. BALAYAGE LASER BIM VERTICAL (Holographic Scan Plane)
      const scanPlaneGeo = new THREE.PlaneGeometry(7.2, 0.06);
      const scanPlaneMat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const scanPlane = new THREE.Mesh(scanPlaneGeo, scanPlaneMat);
      scanPlane.rotation.x = -Math.PI / 2;
      scanPlane.position.y = baseY + 0.5;
      mainGroup.add(scanPlane);
      disposables.push({ geometry: scanPlaneGeo, material: scanPlaneMat });

      // 6. GRUE PRINCIPALE N°1 (Cycle complet : rotation, chariot, câble, charge)
      const crane1Group = new THREE.Group();
      const crane1X = 0.0;
      const crane1Z = -0.3;
      const crane1Height = 5.3;

      const mastGeo = new THREE.CylinderGeometry(0.055, 0.075, crane1Height, 8);
      const mastMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.35,
        metalness: 0.5,
      });
      const mast = new THREE.Mesh(mastGeo, mastMat);
      mast.position.set(crane1X, baseY + crane1Height / 2, crane1Z);
      crane1Group.add(mast);
      disposables.push({ geometry: mastGeo, material: mastMat });

      // Cabine
      const cabinGeo = new THREE.BoxGeometry(0.26, 0.2, 0.24);
      const cabinMat = new THREE.MeshStandardMaterial({
        color: 0x0a1128,
        roughness: 0.2,
        metalness: 0.8,
      });
      const cabin = new THREE.Mesh(cabinGeo, cabinMat);
      cabin.position.set(crane1X, baseY + crane1Height - 0.22, crane1Z);
      crane1Group.add(cabin);
      disposables.push({ geometry: cabinGeo, material: cabinMat });

      // Flèche & Pivot rotatif
      const jibPivot = new THREE.Group();
      jibPivot.position.set(crane1X, baseY + crane1Height, crane1Z);
      crane1Group.add(jibPivot);

      const jibGeo = new THREE.BoxGeometry(3.8, 0.065, 0.065);
      const jibMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        roughness: 0.4,
        metalness: 0.4,
      });
      const jib = new THREE.Mesh(jibGeo, jibMat);
      jib.position.x = 1.7;
      jibPivot.add(jib);
      disposables.push({ geometry: jibGeo, material: jibMat });

      const counterJibGeo = new THREE.BoxGeometry(1.3, 0.065, 0.065);
      const counterJib = new THREE.Mesh(counterJibGeo, jibMat);
      counterJib.position.x = -0.75;
      jibPivot.add(counterJib);
      disposables.push({ geometry: counterJibGeo, material: jibMat });

      const counterWeightGeo = new THREE.BoxGeometry(0.32, 0.3, 0.3);
      const counterWeightMat = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.7 });
      const counterWeight = new THREE.Mesh(counterWeightGeo, counterWeightMat);
      counterWeight.position.x = -1.3;
      jibPivot.add(counterWeight);
      disposables.push({ geometry: counterWeightGeo, material: counterWeightMat });

      // Chariot coulissant sur la flèche
      const trolley = new THREE.Group();
      trolley.position.x = 2.4;
      jibPivot.add(trolley);

      const trolleyBodyGeo = new THREE.BoxGeometry(0.16, 0.08, 0.12);
      const trolleyBodyMat = new THREE.MeshBasicMaterial({ color: 0xef4444 });
      const trolleyBody = new THREE.Mesh(trolleyBodyGeo, trolleyBodyMat);
      trolley.add(trolleyBody);
      disposables.push({ geometry: trolleyBodyGeo, material: trolleyBodyMat });

      // Câble de levage
      const cableGeo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0, -2.0, 0),
      ]);
      const cableMat = new THREE.LineBasicMaterial({
        color: 0xe2e8f0,
        transparent: true,
        opacity: 0.9,
      });
      const cable = new THREE.Line(cableGeo, cableMat);
      trolley.add(cable);
      disposables.push({ geometry: cableGeo, material: cableMat });

      // Charge suspendue (Conteneur / Poutre BTP)
      const loadGeo = new THREE.BoxGeometry(0.55, 0.2, 0.24);
      const loadMat = new THREE.MeshStandardMaterial({
        color: 0x22c55e,
        roughness: 0.3,
        metalness: 0.7,
      });
      const loadMesh = new THREE.Mesh(loadGeo, loadMat);
      loadMesh.position.y = -2.0;
      trolley.add(loadMesh);
      disposables.push({ geometry: loadGeo, material: loadMat });

      mainGroup.add(crane1Group);

      // 7. SECONDE GRUE D'ARRIÈRE-PLAN (Background secondary crane)
      const crane2Group = new THREE.Group();
      const crane2X = -2.6;
      const crane2Z = -1.8;
      const crane2Height = 4.2;

      const mast2Geo = new THREE.CylinderGeometry(0.04, 0.055, crane2Height, 8);
      const mast2 = new THREE.Mesh(mast2Geo, mastMat);
      mast2.position.set(crane2X, baseY + crane2Height / 2, crane2Z);
      crane2Group.add(mast2);
      disposables.push({ geometry: mast2Geo, material: mastMat });

      const jib2Pivot = new THREE.Group();
      jib2Pivot.position.set(crane2X, baseY + crane2Height, crane2Z);
      crane2Group.add(jib2Pivot);

      const jib2Geo = new THREE.BoxGeometry(2.8, 0.05, 0.05);
      const jib2 = new THREE.Mesh(jib2Geo, jibMat);
      jib2.position.x = 1.2;
      jib2Pivot.add(jib2);
      disposables.push({ geometry: jib2Geo, material: jibMat });

      mainGroup.add(crane2Group);

      // 8. PROJECTEURS DE RECHERCHE VOLUMÉTRIQUES (Searchlights Sky Beams)
      const beam1Geo = new THREE.ConeGeometry(0.6, 7.5, 24, 1, true);
      const beam1Mat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        transparent: true,
        opacity: 0.22,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const beam1 = new THREE.Mesh(beam1Geo, beam1Mat);
      beam1.position.set(-3.2, baseY, -1.2);
      beam1.rotation.z = Math.PI;
      mainGroup.add(beam1);
      disposables.push({ geometry: beam1Geo, material: beam1Mat });

      const beam2Geo = new THREE.ConeGeometry(0.6, 7.5, 24, 1, true);
      const beam2Mat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.2,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
      });
      const beam2 = new THREE.Mesh(beam2Geo, beam2Mat);
      beam2.position.set(3.4, baseY, -1.0);
      beam2.rotation.z = Math.PI;
      mainGroup.add(beam2);
      disposables.push({ geometry: beam2Geo, material: beam2Mat });

      // 9. ÉTINCELLES DE SOUDURE ACTIVES (Welding Sparks FX)
      const weldSparkCount = 90;
      const weldSparkGeo = new THREE.BufferGeometry();
      const weldSparkPos = new Float32Array(weldSparkCount * 3);
      const weldVelocities: { x: number; y: number; z: number; life: number }[] = [];

      for (let i = 0; i < weldSparkCount; i++) {
        weldSparkPos[i * 3] = -1.2;
        weldSparkPos[i * 3 + 1] = 1.6;
        weldSparkPos[i * 3 + 2] = 0.3;
        weldVelocities.push({
          x: (Math.random() - 0.5) * 0.08,
          y: Math.random() * 0.06 + 0.02,
          z: (Math.random() - 0.5) * 0.08,
          life: Math.random(),
        });
      }
      weldSparkGeo.setAttribute("position", new THREE.BufferAttribute(weldSparkPos, 3));
      const weldSparkMat = new THREE.PointsMaterial({
        color: 0xa5f3fc,
        size: 0.05,
        transparent: true,
        opacity: 0.95,
        blending: THREE.AdditiveBlending,
      });
      const weldSparks = new THREE.Points(weldSparkGeo, weldSparkMat);
      mainGroup.add(weldSparks);
      disposables.push({ geometry: weldSparkGeo, material: weldSparkMat });

      // 10. VÉHICULES / FLUX DE TRAFIC LUMINEUX TIMELAPSE
      const trafficCount = 70;
      const trafficGeo = new THREE.BufferGeometry();
      const trafficPos = new Float32Array(trafficCount * 3);
      const trafficColors = new Float32Array(trafficCount * 3);
      const trafficData: { angle: number; radius: number; speed: number }[] = [];

      const colWhite = new THREE.Color("#ffffff");
      const colRed = new THREE.Color("#ef4444");
      const colYellow = new THREE.Color("#facc15");

      for (let i = 0; i < trafficCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const radius = 3.6 + Math.random() * 0.9;
        const speed = (Math.random() * 0.015 + 0.008) * (Math.random() > 0.5 ? 1 : -1);

        trafficPos[i * 3] = Math.cos(angle) * radius;
        trafficPos[i * 3 + 1] = baseY + 0.02;
        trafficPos[i * 3 + 2] = Math.sin(angle) * radius;

        const c = speed > 0 ? colWhite : Math.random() > 0.4 ? colRed : colYellow;
        trafficColors[i * 3] = c.r;
        trafficColors[i * 3 + 1] = c.g;
        trafficColors[i * 3 + 2] = c.b;

        trafficData.push({ angle, radius, speed });
      }
      trafficGeo.setAttribute("position", new THREE.BufferAttribute(trafficPos, 3));
      trafficGeo.setAttribute("color", new THREE.BufferAttribute(trafficColors, 3));

      const trafficMat = new THREE.PointsMaterial({
        size: 0.06,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const trafficStream = new THREE.Points(trafficGeo, trafficMat);
      mainGroup.add(trafficStream);
      disposables.push({ geometry: trafficGeo, material: trafficMat });

      // 11. PARTICULES ATMOSPHÉRIQUES (Poussière dorée en lévitation)
      const dustCount = 220;
      const dustPos = new Float32Array(dustCount * 3);
      for (let i = 0; i < dustCount; i++) {
        dustPos[i * 3] = (Math.random() - 0.5) * 11;
        dustPos[i * 3 + 1] = baseY + Math.random() * 6.5;
        dustPos[i * 3 + 2] = (Math.random() - 0.5) * 8;
      }
      const dustGeo = new THREE.BufferGeometry();
      dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
      const dustMat = new THREE.PointsMaterial({
        color: 0x22c55e,
        size: 0.035,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const dustField = new THREE.Points(dustGeo, dustMat);
      mainGroup.add(dustField);
      disposables.push({ geometry: dustGeo, material: dustMat });

      // 12. PARALLAXE DE SOURIS SOUPLE
      let mouseX = 0;
      let mouseY = 0;
      let targetMouseX = 0;
      let targetMouseY = 0;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = mount.getBoundingClientRect();
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      };
      window.addEventListener("mousemove", handleMouseMove);

      // 13. BOUCLE VIDÉO CINÉMATIQUE CONTINUE (Drone Camera & Live World)
      let frameId: number;
      const clock = new THREE.Clock();

      const animate = () => {
        const t = clock.getElapsedTime();

        // --- A. TRAVELLING CAMÉRA CINÉMA EN CONTINU (Effet Drone / Vidéo 3D) ---
        const cameraOrbitRadius = 11.2;
        const cameraOrbitAngle = t * 0.12; // Déplacement panoramique régulier
        const cameraHeight = 2.4 + Math.sin(t * 0.25) * 1.1; // Montée et descente fluide

        targetMouseX += (mouseX * 1.5 - targetMouseX) * 0.03;
        targetMouseY += (mouseY * 0.8 - targetMouseY) * 0.03;

        camera.position.x = Math.sin(cameraOrbitAngle) * cameraOrbitRadius + targetMouseX;
        camera.position.z = Math.cos(cameraOrbitAngle) * cameraOrbitRadius;
        camera.position.y = cameraHeight + targetMouseY;
        camera.lookAt(0, 0.4, 0);

        // --- B. GRUE PRINCIPALE : MANUTENTION RÉALISTE COMPLÈTE ---
        jibPivot.rotation.y = Math.sin(t * 0.45) * 1.15 + 0.2; // Rotation flèche
        trolley.position.x = 1.8 + Math.sin(t * 0.7) * 1.1; // Chariot glisse d'avant en arrière
        const cableLength = 1.4 + Math.sin(t * 0.9) * 0.7; // Montée / descente du câble
        loadMesh.position.y = -cableLength;
        loadMesh.rotation.y = Math.sin(t * 0.8) * 0.4; // Balancement physique

        // Mise à jour de la ligne du câble
        const cablePositions = cable.geometry.attributes.position.array as Float32Array;
        cablePositions[4] = -cableLength;
        cable.geometry.attributes.position.needsUpdate = true;

        // --- C. SECONDE GRUE D'ARRIÈRE-PLAN ---
        jib2Pivot.rotation.y = -Math.cos(t * 0.35) * 0.9;

        // --- D. PROJECTEURS DE RECHERCHE DYNAMIQUES ---
        beam1.rotation.x = Math.sin(t * 0.8) * 0.35 + 0.2;
        beam1.rotation.z = Math.cos(t * 0.6) * 0.45 + Math.PI;
        beam2.rotation.x = Math.cos(t * 0.75) * 0.35 - 0.2;
        beam2.rotation.z = Math.sin(t * 0.55) * 0.45 + Math.PI;

        // --- E. ÉTINCELLES DE SOUDURE & FLASHES ---
        const isWelding = Math.sin(t * 7) > 0.15;
        weldPointLight.intensity = isWelding ? 2.5 + Math.random() * 3.0 : 0;
        weldSparkMat.opacity = isWelding ? 0.95 : 0.1;

        const sparkArr = weldSparkGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < weldSparkCount; i++) {
          const v = weldVelocities[i];
          v.life += 0.04;
          if (v.life > 1 || !isWelding) {
            sparkArr[i * 3] = -1.2;
            sparkArr[i * 3 + 1] = 1.6;
            sparkArr[i * 3 + 2] = 0.3;
            v.life = 0;
          } else {
            sparkArr[i * 3] += v.x;
            sparkArr[i * 3 + 1] += v.y - 0.035 * v.life; // Gravité
            sparkArr[i * 3 + 2] += v.z;
          }
        }
        weldSparkGeo.attributes.position.needsUpdate = true;

        // --- F. FLUX DE TRAFIC LUMINEUX AU SOL ---
        const trafficArr = trafficGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < trafficCount; i++) {
          const d = trafficData[i];
          d.angle += d.speed;
          trafficArr[i * 3] = Math.cos(d.angle) * d.radius;
          trafficArr[i * 3 + 2] = Math.sin(d.angle) * d.radius;
        }
        trafficGeo.attributes.position.needsUpdate = true;

        // --- G. BALAYAGE LASER HOLOGRAPHIQUE BIM ---
        scanPlane.position.y = baseY + 0.3 + ((Math.sin(t * 1.6) + 1) / 2) * 4.2;
        scanPlaneMat.opacity = 0.55 + Math.sin(t * 4.5) * 0.35;

        // --- H. PARTICULES AMBIANTES FLOTTANTES ---
        dustField.rotation.y = t * 0.0015;

        renderer.render(scene, camera);
        frameId = requestAnimationFrame(animate);
      };

      animate();

      // 14. RESPONSIVE
      const handleResize = () => {
        if (!mount) return;
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };
      window.addEventListener("resize", handleResize);

      // 15. NETTOYAGE
      return () => {
        cancelAnimationFrame(frameId);
        window.removeEventListener("resize", handleResize);
        window.removeEventListener("mousemove", handleMouseMove);

        disposables.forEach(({ geometry, material }) => {
          geometry.dispose();
          if (Array.isArray(material)) material.forEach((m) => m.dispose());
          else material.dispose();
        });

        renderer.dispose();
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
      };
    } catch (err) {
      console.error("HeroConstruction3D: échec du rendu Three.js", err);
    }
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[420px]"
      aria-hidden="true"
      role="presentation"
    />
  );
}
