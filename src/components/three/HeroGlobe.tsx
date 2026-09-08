import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function HeroGlobe() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // 1. SCENE, CAMERA & RENDERER
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    mount.appendChild(renderer.domElement);

    // Root Group
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // Initial tilt for cinematic perspective
    rootGroup.rotation.x = 0.22;
    rootGroup.rotation.z = -0.08;

    const globeRadius = 2.15;

    // 2. INNER CORE SPHERE (Glossy Deep Obsidian & Dark Navy)
    const coreGeo = new THREE.SphereGeometry(globeRadius - 0.04, 48, 48);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#050b1a"),
      roughness: 0.35,
      metalness: 0.8,
      transparent: true,
      opacity: 0.96,
    });
    const coreSphere = new THREE.Mesh(coreGeo, coreMat);
    rootGroup.add(coreSphere);

    // 3. ATMOSPHERIC GLOW SHELL
    const atmosphereGeo = new THREE.SphereGeometry(globeRadius + 0.08, 36, 36);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#2f5bd6"),
      transparent: true,
      opacity: 0.12,
      wireframe: true,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    rootGroup.add(atmosphere);

    // 4. CONTINENTAL DIGITAL POINT CLOUD (Fibonacci sphere distribution)
    const pointCount = 2400;
    const pointPositions = new Float32Array(pointCount * 3);
    const pointColors = new Float32Array(pointCount * 3);
    const pointSizes = new Float32Array(pointCount);

    const colorGreen = new THREE.Color("#22c55e");
    const colorBlue = new THREE.Color("#3b82f6");
    const colorCyan = new THREE.Color("#38bdf8");
    const colorGold = new THREE.Color("#fbbf24");
    const colorWhite = new THREE.Color("#ffffff");

    for (let i = 0; i < pointCount; i++) {
      // Golden Spiral distribution
      const phi = Math.acos(1 - (2 * (i + 0.5)) / pointCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;

      const r = globeRadius + (Math.random() > 0.88 ? 0.04 : 0.01);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pointPositions[i * 3] = x;
      pointPositions[i * 3 + 1] = y;
      pointPositions[i * 3 + 2] = z;

      // Color Palette based on position & probability
      const rand = Math.random();
      let pColor = colorBlue;
      if (rand > 0.8) pColor = colorGreen;
      else if (rand > 0.65) pColor = colorCyan;
      else if (rand > 0.55) pColor = colorGold;
      else if (rand > 0.45) pColor = colorWhite;

      pointColors[i * 3] = pColor.r;
      pointColors[i * 3 + 1] = pColor.g;
      pointColors[i * 3 + 2] = pColor.b;

      pointSizes[i] = Math.random() * 0.045 + 0.025;
    }

    const pointsGeo = new THREE.BufferGeometry();
    pointsGeo.setAttribute("position", new THREE.BufferAttribute(pointPositions, 3));
    pointsGeo.setAttribute("color", new THREE.BufferAttribute(pointColors, 3));

    const pointsMat = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending,
    });
    const pointCloud = new THREE.Points(pointsGeo, pointsMat);
    rootGroup.add(pointCloud);

    // 5. HELPER: LAT/LONG TO 3D VECTOR
    const latLonToVector3 = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    // Conakry, Guinea position (~9.5° N, -13.7° E)
    const guineaPos = latLonToVector3(9.5, -13.7, globeRadius);

    // 6. CONAKRY BEACON & PULSATING RADAR RINGS
    const beaconGeo = new THREE.SphereGeometry(0.07, 16, 16);
    const beaconMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#22c55e") });
    const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
    beaconMesh.position.copy(guineaPos);
    rootGroup.add(beaconMesh);

    // Light beam shooting outwards from Guinea
    const beamGeo = new THREE.CylinderGeometry(0.015, 0.03, 0.6, 12);
    const beamMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#4ade80"),
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });
    const beamMesh = new THREE.Mesh(beamGeo, beamMat);
    beamMesh.position.copy(guineaPos.clone().multiplyScalar(1.12));
    beamMesh.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), guineaPos.clone().normalize());
    rootGroup.add(beamMesh);

    // Radar rings
    const ringsCount = 3;
    const radarRings: { mesh: THREE.Mesh; mat: THREE.MeshBasicMaterial; delay: number }[] = [];
    const ringShapeGeo = new THREE.RingGeometry(0.08, 0.11, 32);

    for (let i = 0; i < ringsCount; i++) {
      const ringMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#22c55e"),
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
      });
      const ringMesh = new THREE.Mesh(ringShapeGeo, ringMat);
      ringMesh.position.copy(guineaPos.clone().multiplyScalar(1.01));
      ringMesh.lookAt(guineaPos.clone().multiplyScalar(2));
      rootGroup.add(ringMesh);
      radarRings.push({ mesh: ringMesh, mat: ringMat, delay: i * 0.45 });
    }

    // 7. CINEMATIC CONNECTION ARCS FROM GUINEA TO GLOBAL HUBS
    const globalHubs = [
      { name: "Paris", lat: 48.8, lon: 2.3 },
      { name: "Dubai", lat: 25.2, lon: 55.3 },
      { name: "New York", lat: 40.7, lon: -74.0 },
      { name: "Johannesburg", lat: -26.2, lon: 28.0 },
      { name: "Shanghai", lat: 31.2, lon: 121.5 },
      { name: "Dakar", lat: 14.7, lon: -17.4 },
    ];

    const arcCurves: { curve: THREE.QuadraticBezierCurve3; photon: THREE.Mesh }[] = [];

    globalHubs.forEach((hub) => {
      const destPos = latLonToVector3(hub.lat, hub.lon, globeRadius);

      // Hub Marker
      const hubGeo = new THREE.SphereGeometry(0.035, 12, 12);
      const hubMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#38bdf8") });
      const hubMesh = new THREE.Mesh(hubGeo, hubMat);
      hubMesh.position.copy(destPos);
      rootGroup.add(hubMesh);

      // Curved Arc Control Point (lifted up into space)
      const midPoint = new THREE.Vector3().addVectors(guineaPos, destPos).multiplyScalar(0.5);
      const distance = guineaPos.distanceTo(destPos);
      const elevation = Math.min(distance * 0.45, 1.2);
      const controlPoint = midPoint.clone().normalize().multiplyScalar(globeRadius + elevation);

      const curve = new THREE.QuadraticBezierCurve3(guineaPos, controlPoint, destPos);
      const curvePoints = curve.getPoints(50);
      const arcGeo = new THREE.BufferGeometry().setFromPoints(curvePoints);
      const arcMat = new THREE.LineBasicMaterial({
        color: new THREE.Color("#2f5bd6"),
        transparent: true,
        opacity: 0.4,
        blending: THREE.AdditiveBlending,
      });
      const arcLine = new THREE.Line(arcGeo, arcMat);
      rootGroup.add(arcLine);

      // Moving photon light along curve
      const photonGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const photonMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color("#4ade80"),
        blending: THREE.AdditiveBlending,
      });
      const photon = new THREE.Mesh(photonGeo, photonMat);
      rootGroup.add(photon);

      arcCurves.push({ curve, photon });
    });

    // 8. GYROSCOPIC HOLOGRAPHIC ORBITAL RINGS
    const orbit1Geo = new THREE.TorusGeometry(3.05, 0.012, 16, 120);
    const orbit1Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#2f5bd6"),
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const orbit1 = new THREE.Mesh(orbit1Geo, orbit1Mat);
    orbit1.rotation.x = Math.PI / 2.3;
    orbit1.rotation.y = Math.PI / 6;
    rootGroup.add(orbit1);

    const orbit2Geo = new THREE.TorusGeometry(3.3, 0.009, 16, 120);
    const orbit2Mat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#22c55e"),
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
    });
    const orbit2 = new THREE.Mesh(orbit2Geo, orbit2Mat);
    orbit2.rotation.x = Math.PI / 1.7;
    orbit2.rotation.y = -Math.PI / 5;
    rootGroup.add(orbit2);

    // Orbiting Satellites
    const sat1Geo = new THREE.SphereGeometry(0.06, 12, 12);
    const sat1Mat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#ffffff") });
    const satellite1 = new THREE.Mesh(sat1Geo, sat1Mat);
    rootGroup.add(satellite1);

    const sat2Geo = new THREE.SphereGeometry(0.045, 12, 12);
    const sat2Mat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#38bdf8") });
    const satellite2 = new THREE.Mesh(sat2Geo, sat2Mat);
    rootGroup.add(satellite2);

    // 9. BACKGROUND DUST & STARDUST PARTICLES
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 16;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 8 - 2;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPositions, 3));
    const starMat = new THREE.PointsMaterial({
      color: new THREE.Color("#93c5fd"),
      size: 0.03,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 10. DRAMATIC CINEMATIC LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const blueLight = new THREE.DirectionalLight(0x3b82f6, 3.5);
    blueLight.position.set(5, 4, 3);
    scene.add(blueLight);

    const greenLight = new THREE.DirectionalLight(0x22c55e, 2.5);
    greenLight.position.set(-5, -4, 2);
    scene.add(greenLight);

    const topRimLight = new THREE.PointLight(0x38bdf8, 2, 12);
    topRimLight.position.set(0, 5, 2);
    scene.add(topRimLight);

    // 11. SMOOTH MOUSE PARALLAX & DRAG CONTROLS
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isHovered = false;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = mount.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        isHovered = true;
        mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
        mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      } else {
        isHovered = false;
      }
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 12. ANIMATION LOOP
    let frameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth Rotation
      rootGroup.rotation.y += 0.0032;

      // Mouse Parallax Damping
      if (isHovered) {
        targetX += (mouseY * 0.45 - targetX) * 0.04;
        targetY += (mouseX * 0.45 - targetY) * 0.04;
      } else {
        targetX += (0 - targetX) * 0.02;
        targetY += (0 - targetY) * 0.02;
      }
      rootGroup.rotation.x = 0.22 + targetX;
      rootGroup.rotation.z = -0.08 + targetY * 0.5;

      // Cinematic floating breathing
      camera.position.y = Math.sin(elapsedTime * 0.8) * 0.08;
      camera.position.x = Math.cos(elapsedTime * 0.6) * 0.06;
      camera.lookAt(0, 0, 0);

      // Radar Wave Animation
      radarRings.forEach((ring) => {
        const t = (elapsedTime + ring.delay) % 1.5;
        const progress = t / 1.5;
        const scale = 1 + progress * 2.8;
        ring.mesh.scale.set(scale, scale, scale);
        ring.mat.opacity = (1 - progress) * 0.85;
      });

      // Beacon Pulsing
      const beaconScale = 1 + Math.sin(elapsedTime * 5) * 0.25;
      beaconMesh.scale.set(beaconScale, beaconScale, beaconScale);
      beamMesh.scale.y = 1 + Math.sin(elapsedTime * 4) * 0.2;

      // Photons Traveling along Connection Arcs
      arcCurves.forEach((item, idx) => {
        const speed = 0.35 + idx * 0.05;
        const t = (elapsedTime * speed) % 1;
        const pos = item.curve.getPoint(t);
        item.photon.position.copy(pos);
      });

      // Satellites Movement along Orbits
      const sat1Angle = elapsedTime * 0.9;
      satellite1.position.set(
        Math.cos(sat1Angle) * 3.05,
        Math.sin(sat1Angle) * 3.05 * Math.sin(Math.PI / 2.3),
        Math.sin(sat1Angle) * 3.05 * Math.cos(Math.PI / 2.3)
      );

      const sat2Angle = -elapsedTime * 0.7;
      satellite2.position.set(
        Math.cos(sat2Angle) * 3.3,
        Math.sin(sat2Angle) * 3.3 * Math.sin(Math.PI / 1.7),
        Math.sin(sat2Angle) * 3.3 * Math.cos(Math.PI / 1.7)
      );

      // Counter-rotating rings
      orbit1.rotation.z += 0.0018;
      orbit2.rotation.z -= 0.0022;

      // Subtle starfield twinkling
      starField.rotation.y = elapsedTime * 0.0008;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };

    animate();

    // 13. RESPONSIVE RESIZE
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // 14. CLEANUP
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);

      coreGeo.dispose();
      coreMat.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      pointsGeo.dispose();
      pointsMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
      beamGeo.dispose();
      beamMat.dispose();
      ringShapeGeo.dispose();
      radarRings.forEach((r) => r.mat.dispose());
      orbit1Geo.dispose();
      orbit1Mat.dispose();
      orbit2Geo.dispose();
      orbit2Mat.dispose();
      sat1Geo.dispose();
      sat1Mat.dispose();
      sat2Geo.dispose();
      sat2Mat.dispose();
      starGeo.dispose();
      starMat.dispose();

      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[420px] md:min-h-[520px] flex items-center justify-center">
      {/* Cinematic Ambient Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
        <div className="w-[320px] h-[320px] md:w-[460px] md:h-[460px] rounded-full bg-gradient-to-tr from-brand-blue/30 via-indigo-600/20 to-brand-green/30 blur-[90px] animate-pulse" />
      </div>

      {/* 3D Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full min-h-[420px] md:min-h-[520px] cursor-grab active:cursor-grabbing"
        aria-hidden="true"
        role="presentation"
      />

      {/* Floating Holographic Badge */}
      <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6 bg-navy-950/85 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-2xl flex items-center gap-3 shadow-2xl pointer-events-none">
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping" />
          <span className="absolute w-2 h-2 rounded-full bg-brand-green" />
        </div>
        <div>
          <p className="text-[11px] font-extrabold uppercase tracking-wider text-white">
            Hub Conakry
          </p>
          <p className="text-[10px] text-slate-300">Réseau International Actif</p>
        </div>
      </div>
    </div>
  );
}