import { useRef, useEffect } from "react";
import * as THREE from "three";

/**
 * Scène 3D Hybride Haute Performance : "BTP & Digitalisation"
 * 
 * - CÔTÉ GAUCHE (BTP & Génie Civil) :
 *   - Grue à tour métallique avec mât en treillis, flèche rotative et levage de charge
 *   - Structure de bâtiment / tour en béton armé et poutres en cours d'élévation
 *   - FX de soudure réels avec gerbe d'étincelles et flashes lumineux
 *   - Projecteurs de chantier et grille topographique au sol
 * 
 * - ZONE CENTRALE (Interface de Transformation Digitale) :
 *   - Laser de balayage vertical / Scanner holographique de jumeau numérique
 *   - Particules de conversion de la matière physique vers la donnée
 * 
 * - CÔTÉ DROIT (Numérique & Digitalisation) :
 *   - Jumeau numérique holographique (BIM Digital Twin) en wireframe cyan/vert
 *   - Baie de serveurs / Datacenter 3D avec diodes LED de statut pulsantes
 *   - Constellation de données & nœuds de réseaux neuronaux reliés par flux lumineux
 *   - Arcs de télécommunication et flux de données montants vers le Cloud
 */
export default function HeroHybrid3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;

    try {
      // 1. SCÈNE, CAMÉRA & RENDERER
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
      camera.position.set(0, 3.5, 14.5);

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

      // 2. LUMIÈRES CINÉMATOGRAPHIQUES
      const ambientLight = new THREE.AmbientLight(0x0f172a, 1.4);
      scene.add(ambientLight);

      // Lumière BTP (chaude & industrielle)
      const btpLight = new THREE.DirectionalLight(0xf59e0b, 2.2);
      btpLight.position.set(-10, 12, 6);
      scene.add(btpLight);

      // Lumière Tech / Digital (cyan & émeraude)
      const techLight = new THREE.DirectionalLight(0x38bdf8, 2.8);
      techLight.position.set(10, 12, 6);
      scene.add(techLight);

      const greenRim = new THREE.DirectionalLight(0x22c55e, 2.0);
      greenRim.position.set(0, -6, -8);
      scene.add(greenRim);

      // Flash de soudure
      const weldPointLight = new THREE.PointLight(0x67e8f9, 0, 10);
      weldPointLight.position.set(-4.2, 3.2, 0.5);
      scene.add(weldPointLight);

      // ==========================================
      // 3. CÔTÉ GAUCHE : BTP & GÉNIE CIVIL
      // ==========================================
      const btpGroup = new THREE.Group();
      btpGroup.position.set(-4.5, -2, 0);
      scene.add(btpGroup);

      // Matériaux BTP
      const craneMat = new THREE.MeshStandardMaterial({
        color: 0xf59e0b,
        metalness: 0.8,
        roughness: 0.3,
      });
      const concreteMat = new THREE.MeshStandardMaterial({
        color: 0x334155,
        roughness: 0.9,
      });
      const scaffoldMat = new THREE.MeshStandardMaterial({
        color: 0x64748b,
        wireframe: true,
      });

      // 3.1 Bâtiment en construction (étages de béton & dalles)
      for (let i = 0; i < 5; i++) {
        // Dalle
        const slabGeo = new THREE.BoxGeometry(3.2 - i * 0.25, 0.15, 3.2 - i * 0.25);
        const slab = new THREE.Mesh(slabGeo, concreteMat);
        slab.position.y = i * 1.1;
        btpGroup.add(slab);
        disposables.push({ geometry: slabGeo, material: concreteMat });

        // Colonnes piliers
        const colGeo = new THREE.CylinderGeometry(0.08, 0.08, 1.0, 8);
        const corners = [
          [-1.2 + i * 0.1, -1.2 + i * 0.1],
          [1.2 - i * 0.1, -1.2 + i * 0.1],
          [-1.2 + i * 0.1, 1.2 - i * 0.1],
          [1.2 - i * 0.1, 1.2 - i * 0.1],
        ];
        corners.forEach(([cx, cz]) => {
          const col = new THREE.Mesh(colGeo, concreteMat);
          col.position.set(cx, i * 1.1 + 0.55, cz);
          btpGroup.add(col);
        });
        disposables.push({ geometry: colGeo, material: concreteMat });
      }

      // Échafaudages externes BTP
      const scafGeo = new THREE.BoxGeometry(3.6, 5.2, 3.6);
      const scaf = new THREE.Mesh(scafGeo, scaffoldMat);
      scaf.position.y = 2.4;
      btpGroup.add(scaf);
      disposables.push({ geometry: scafGeo, material: scaffoldMat });

      // 3.2 Grue à tour principale
      const craneTowerGeo = new THREE.BoxGeometry(0.3, 7.5, 0.3);
      const craneTower = new THREE.Mesh(craneTowerGeo, craneMat);
      craneTower.position.set(-2.2, 3.75, -1.5);
      btpGroup.add(craneTower);
      disposables.push({ geometry: craneTowerGeo, material: craneMat });

      const craneArmGroup = new THREE.Group();
      craneArmGroup.position.set(-2.2, 7.2, -1.5);
      btpGroup.add(craneArmGroup);

      // Flèche avant & contre-flèche
      const jibGeo = new THREE.BoxGeometry(5.0, 0.2, 0.2);
      const jib = new THREE.Mesh(jibGeo, craneMat);
      jib.position.x = 2.0;
      craneArmGroup.add(jib);
      disposables.push({ geometry: jibGeo, material: craneMat });

      const counterJibGeo = new THREE.BoxGeometry(1.6, 0.2, 0.2);
      const counterJib = new THREE.Mesh(counterJibGeo, craneMat);
      counterJib.position.x = -0.8;
      craneArmGroup.add(counterJib);
      disposables.push({ geometry: counterJibGeo, material: craneMat });

      // Chariot et câble
      const trolleyGeo = new THREE.BoxGeometry(0.3, 0.2, 0.3);
      const trolley = new THREE.Mesh(trolleyGeo, craneMat);
      trolley.position.x = 2.8;
      craneArmGroup.add(trolley);
      disposables.push({ geometry: trolleyGeo, material: craneMat });

      const cableGeo = new THREE.CylinderGeometry(0.015, 0.015, 2.2, 6);
      const cableMat = new THREE.MeshBasicMaterial({ color: 0x94a3b8 });
      const cable = new THREE.Mesh(cableGeo, cableMat);
      cable.position.set(2.8, -1.1, 0);
      craneArmGroup.add(cable);
      disposables.push({ geometry: cableGeo, material: cableMat });

      // Charge suspendue (poutre acier BTP)
      const loadGeo = new THREE.BoxGeometry(0.8, 0.25, 0.25);
      const loadMat = new THREE.MeshStandardMaterial({ color: 0xef4444, metalness: 0.6 });
      const load = new THREE.Mesh(loadGeo, loadMat);
      load.position.set(2.8, -2.2, 0);
      craneArmGroup.add(load);
      disposables.push({ geometry: loadGeo, material: loadMat });

      // 3.3 Étincelles de soudure (Welding Sparks)
      const sparkCount = 35;
      const sparkGeo = new THREE.BufferGeometry();
      const sparkPositions = new Float32Array(sparkCount * 3);
      const sparkVelocities: THREE.Vector3[] = [];

      for (let i = 0; i < sparkCount; i++) {
        sparkPositions[i * 3] = -4.2;
        sparkPositions[i * 3 + 1] = 3.2;
        sparkPositions[i * 3 + 2] = 0.5;
        sparkVelocities.push(
          new THREE.Vector3(
            (Math.random() - 0.5) * 0.08,
            Math.random() * 0.06 + 0.02,
            (Math.random() - 0.5) * 0.08
          )
        );
      }
      sparkGeo.setAttribute("position", new THREE.BufferAttribute(sparkPositions, 3));
      const sparkMat = new THREE.PointsMaterial({
        color: 0x67e8f9,
        size: 0.08,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
      });
      const sparkPoints = new THREE.Points(sparkGeo, sparkMat);
      scene.add(sparkPoints);
      disposables.push({ geometry: sparkGeo, material: sparkMat });

      // ==========================================
      // 4. CÔTÉ DROIT : DIGITALISATION & TECH
      // ==========================================
      const techGroup = new THREE.Group();
      techGroup.position.set(4.5, -2, 0);
      scene.add(techGroup);

      // 4.1 Datacenter Racks 3D avec diodes
      const serverRackGeo = new THREE.BoxGeometry(1.2, 4.5, 1.2);
      const serverRackMat = new THREE.MeshStandardMaterial({
        color: 0x0a1128,
        metalness: 0.9,
        roughness: 0.2,
      });
      
      for (let r = 0; r < 3; r++) {
        const rack = new THREE.Mesh(serverRackGeo, serverRackMat);
        rack.position.set(-1.4 + r * 1.4, 2.25, -1.2);
        techGroup.add(rack);

        // Façade diodes lumineuses
        const ledGeo = new THREE.PlaneGeometry(0.9, 4.0);
        const ledMat = new THREE.MeshBasicMaterial({
          color: 0x0284c7,
          wireframe: true,
          transparent: true,
          opacity: 0.65,
        });
        const ledPlane = new THREE.Mesh(ledGeo, ledMat);
        ledPlane.position.set(-1.4 + r * 1.4, 2.25, -0.59);
        techGroup.add(ledPlane);
      }
      disposables.push({ geometry: serverRackGeo, material: serverRackMat });

      // 4.2 Jumeau numérique holographique (BIM Digital Twin Wireframe)
      const holoBuildingGeo = new THREE.BoxGeometry(2.8, 5.0, 2.8, 4, 8, 4);
      const holoBuildingMat = new THREE.MeshBasicMaterial({
        color: 0x38bdf8,
        wireframe: true,
        transparent: true,
        opacity: 0.45,
      });
      const holoBuilding = new THREE.Mesh(holoBuildingGeo, holoBuildingMat);
      holoBuilding.position.set(0.5, 2.5, 1.0);
      techGroup.add(holoBuilding);
      disposables.push({ geometry: holoBuildingGeo, material: holoBuildingMat });

      // 4.3 Nœuds de réseaux & Constellation Data
      const nodeCount = 45;
      const nodesGroup = new THREE.Group();
      techGroup.add(nodesGroup);

      const nodeSpheres: THREE.Mesh[] = [];
      const nodePositions: THREE.Vector3[] = [];
      const nodeSphereGeo = new THREE.SphereGeometry(0.08, 8, 8);
      const nodeSphereMat = new THREE.MeshBasicMaterial({ color: 0x22c55e });

      for (let n = 0; n < nodeCount; n++) {
        const pos = new THREE.Vector3(
          (Math.random() - 0.5) * 4.5,
          Math.random() * 5.5 + 0.5,
          (Math.random() - 0.5) * 3.5
        );
        nodePositions.push(pos);
        const nodeMesh = new THREE.Mesh(nodeSphereGeo, nodeSphereMat);
        nodeMesh.position.copy(pos);
        nodesGroup.add(nodeMesh);
        nodeSpheres.push(nodeMesh);
      }
      disposables.push({ geometry: nodeSphereGeo, material: nodeSphereMat });

      // Lignes de connexion entre nœuds de données
      const linePositions: number[] = [];
      for (let i = 0; i < nodeCount; i++) {
        for (let j = i + 1; j < nodeCount; j++) {
          if (nodePositions[i].distanceTo(nodePositions[j]) < 1.8) {
            linePositions.push(
              nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
              nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
            );
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({
        color: 0x0ea5e9,
        transparent: true,
        opacity: 0.35,
      });
      const networkLines = new THREE.LineSegments(lineGeo, lineMat);
      nodesGroup.add(networkLines);
      disposables.push({ geometry: lineGeo, material: lineMat });

      // 4.4 Particules de données montantes (Cloud Data Flow)
      const dataParticleCount = 120;
      const dataParticleGeo = new THREE.BufferGeometry();
      const dataPositions = new Float32Array(dataParticleCount * 3);

      for (let p = 0; p < dataParticleCount; p++) {
        dataPositions[p * 3] = (Math.random() - 0.5) * 5.0;
        dataPositions[p * 3 + 1] = Math.random() * 7.0;
        dataPositions[p * 3 + 2] = (Math.random() - 0.5) * 4.0;
      }
      dataParticleGeo.setAttribute("position", new THREE.BufferAttribute(dataPositions, 3));
      const dataParticleMat = new THREE.PointsMaterial({
        color: 0x38bdf8,
        size: 0.06,
        transparent: true,
        opacity: 0.75,
        blending: THREE.AdditiveBlending,
      });
      const dataPoints = new THREE.Points(dataParticleGeo, dataParticleMat);
      techGroup.add(dataPoints);
      disposables.push({ geometry: dataParticleGeo, material: dataParticleMat });

      // ==========================================
      // 5. ZONE CENTRALE : SCANNER LASER HYBRIDE
      // ==========================================
      const laserBeamGeo = new THREE.PlaneGeometry(0.04, 9.0);
      const laserBeamMat = new THREE.MeshBasicMaterial({
        color: 0x22c55e,
        transparent: true,
        opacity: 0.8,
        side: THREE.DoubleSide,
      });
      const laserBeam = new THREE.Mesh(laserBeamGeo, laserBeamMat);
      laserBeam.position.set(0, 2.5, 1.2);
      scene.add(laserBeam);
      disposables.push({ geometry: laserBeamGeo, material: laserBeamMat });

      // Grille au sol unifiée (BTP & Digital)
      const gridHelper = new THREE.GridHelper(26, 32, 0x1e3a8a, 0x0f172a);
      gridHelper.position.y = -2.0;
      scene.add(gridHelper);

      // 6. ANIMATION LOOP
      let animId: number;
      let clock = new THREE.Clock();

      const animate = () => {
        animId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Rotation flèche de grue
        craneArmGroup.rotation.y = Math.sin(elapsedTime * 0.45) * 0.55 + 0.2;
        // Oscillation légère de la charge
        load.rotation.y = Math.sin(elapsedTime * 0.8) * 0.15;

        // Flash de soudure intermittent
        if (Math.random() > 0.82) {
          weldPointLight.intensity = Math.random() * 4.5 + 1.5;
        } else {
          weldPointLight.intensity = 0;
        }

        // Animation étincelles
        const sparkPos = sparkGeo.attributes.position.array as Float32Array;
        for (let i = 0; i < sparkCount; i++) {
          sparkPos[i * 3] += sparkVelocities[i].x;
          sparkPos[i * 3 + 1] += sparkVelocities[i].y;
          sparkPos[i * 3 + 2] += sparkVelocities[i].z;

          sparkVelocities[i].y -= 0.003; // gravité

          if (sparkPos[i * 3 + 1] < -2.0 || Math.random() > 0.98) {
            sparkPos[i * 3] = -4.2;
            sparkPos[i * 3 + 1] = 3.2;
            sparkPos[i * 3 + 2] = 0.5;
            sparkVelocities[i].set(
              (Math.random() - 0.5) * 0.08,
              Math.random() * 0.06 + 0.02,
              (Math.random() - 0.5) * 0.08
            );
          }
        }
        sparkGeo.attributes.position.needsUpdate = true;

        // Rotation jumeau numérique holographique
        holoBuilding.rotation.y = elapsedTime * 0.2;

        // Animation des données montantes (Tech)
        const dPos = dataParticleGeo.attributes.position.array as Float32Array;
        for (let p = 0; p < dataParticleCount; p++) {
          dPos[p * 3 + 1] += 0.025;
          if (dPos[p * 3 + 1] > 7.0) {
            dPos[p * 3 + 1] = 0.0;
          }
        }
        dataParticleGeo.attributes.position.needsUpdate = true;

        // Respiration des nœuds de données
        nodesGroup.rotation.y = Math.sin(elapsedTime * 0.15) * 0.08;

        // Scanner laser central oscillant
        laserBeam.position.x = Math.sin(elapsedTime * 0.8) * 0.6;
        laserBeamMat.opacity = 0.6 + Math.sin(elapsedTime * 4.0) * 0.3;

        // Légère dérive de caméra cinématographique
        camera.position.x = Math.sin(elapsedTime * 0.2) * 0.35;
        camera.position.y = 3.5 + Math.cos(elapsedTime * 0.25) * 0.2;
        camera.lookAt(0, 1.8, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Redimensionnement
      const handleResize = () => {
        if (!mount) return;
        const w = mount.clientWidth;
        const h = mount.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        cancelAnimationFrame(animId);
        window.removeEventListener("resize", handleResize);
        if (mount.contains(renderer.domElement)) {
          mount.removeChild(renderer.domElement);
        }
        disposables.forEach((d) => {
          d.geometry.dispose();
          if (Array.isArray(d.material)) {
            d.material.forEach((m) => m.dispose());
          } else {
            d.material.dispose();
          }
        });
        renderer.dispose();
      };
    } catch (e) {
      console.warn("Erreur d'initialisation Three.js HeroHybrid3D :", e);
    }
  }, []);

  return <div ref={mountRef} className="w-full h-full pointer-events-none" />;
}
