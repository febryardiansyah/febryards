"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * Hero particle field — a Three.js starfield that drifts behind the hero
 * text and shifts with a subtle mouse parallax.
 *
 * - Colors pulled from the site's CSS variables (theme-aware).
 * - Respects prefers-reduced-motion (renders one static frame, no loop).
 * - Fewer particles on small screens for performance.
 * - Fully cleaned up on unmount.
 */
export default function Hero3D() {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.innerWidth < 640;

    const cssVar = (name: string, fallback: string) => {
      const val = getComputedStyle(document.documentElement)
        .getPropertyValue(name)
        .trim();
      return val || fallback;
    };

    const accent = new THREE.Color(cssVar("--color-accent", "#f5a623"));
    const accent2 = new THREE.Color(cssVar("--color-accent-2", "#ff6b6b"));
    const accent3 = new THREE.Color(cssVar("--color-accent-3", "#8b5cf6"));
    const muted = new THREE.Color(cssVar("--color-muted", "#94a3b8"));
    const fg = new THREE.Color(cssVar("--color-fg", "#e5e7eb"));

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100,
    );
    camera.position.set(0, 0, 12);

    // ── Point cloud ────────────────────────────────────────────────
    const count = isMobile ? 350 : 850;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const palette = [accent, accent2, accent3, muted, fg];

    for (let i = 0; i < count; i++) {
      // Scatter points in a sphere-ish cloud with depth variance.
      const r = 3 + Math.pow(Math.random(), 0.7) * 7;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.7;
      positions[i * 3 + 2] = r * Math.cos(phi) * 0.6;

      const c = palette[Math.floor(Math.random() * palette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.045 : 0.06,
      vertexColors: true,
      transparent: true,
      opacity: 0.9,
      depthWrite: false,
      sizeAttenuation: true,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    // ── Mouse parallax ─────────────────────────────────────────────
    const mouse = { x: 0, y: 0 };
    const eased = { x: 0, y: 0 };

    const onPointer = (e: PointerEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onPointer, { passive: true });

    const clock = new THREE.Clock();

    const animate = () => {
      const dt = Math.min(clock.getDelta(), 0.05);
      const t = clock.elapsedTime;

      // Gentle rotation + vertical drift.
      points.rotation.y += dt * 0.02;
      points.rotation.x = Math.sin(t * 0.05) * 0.04;
      points.position.y = Math.sin(t * 0.15) * 0.3;

      // Eased camera parallax.
      eased.x += (mouse.x - eased.x) * 0.035;
      eased.y += (mouse.y - eased.y) * 0.035;
      camera.position.x = eased.x * 1.4;
      camera.position.y = eased.y * 0.9;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };

    // ── Resize ─────────────────────────────────────────────────────
    const resize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(mount);
    window.addEventListener("resize", resize);

    // ── Run ────────────────────────────────────────────────────────
    let raf = 0;
    if (reduceMotion) {
      // Static single frame — no animation loop.
      renderer.render(scene, camera);
    } else {
      const loop = () => {
        animate();
        raf = requestAnimationFrame(loop);
      };
      loop();
    }

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    />
  );
}
