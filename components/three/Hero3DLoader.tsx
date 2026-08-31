"use client";

import dynamic from "next/dynamic";

/**
 * Client-side lazy loader for the Three.js hero scene.
 * `ssr: false` is only allowed inside a Client Component, so the heavy
 * three.js bundle never blocks server-render or initial paint.
 */
const Hero3D = dynamic(() => import("@/components/three/Hero3D"), {
  ssr: false,
  loading: () => null,
});

export function Hero3DLoader() {
  return <Hero3D />;
}
