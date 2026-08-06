"use client";

import React, { useEffect, useRef } from "react";
import { Renderer, Camera, Transform, Mesh, Program, Cylinder } from "ogl";

export interface PrismProps {
  animationType?: "rotate" | "float" | "pulse" | "wave" | string;
  timeScale?: number;
  height?: number;
  baseWidth?: number;
  scale?: number;
  hueShift?: number;
  colorFrequency?: number;
  noise?: number;
  glow?: number;
  className?: string;
}

export default function Prism({
  animationType = "rotate",
  timeScale = 0.5,
  height = 3.5,
  baseWidth = 5.5,
  scale = 3.6,
  hueShift = 0,
  colorFrequency = 1,
  noise = 0,
  glow = 1,
  className = "",
}: PrismProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const heightPx = container.clientHeight || window.innerHeight;

    // Initialize OGL Renderer
    const renderer = new Renderer({ antialias: true, alpha: true });
    const gl = renderer.gl;
    renderer.setSize(width, heightPx);
    renderer.dpr = Math.min(window.devicePixelRatio, 2);
    container.appendChild(gl.canvas);

    // Camera setup
    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 10);

    // Scene Graph
    const scene = new Transform();

    // Create 3-sided Cylinder (Triangular Prism)
    const geometry = new Cylinder(gl, {
      radiusTop: baseWidth * 0.4,
      radiusBottom: baseWidth * 0.6,
      height: height,
      radialSegments: 3,
      heightSegments: 8,
    });

    const vertexShader = `
      attribute vec3 position;
      attribute vec3 normal;
      attribute vec2 uv;

      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform mat3 normalMatrix;

      uniform float uTime;
      uniform float uScale;
      uniform float uNoise;
      uniform float uHeight;

      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vPosition;

      // Simple noise generator for vertex displacement
      float sinNoise(vec3 p) {
        return sin(p.x * 2.0 + uTime) * cos(p.y * 2.0 + uTime) * sin(p.z * 2.0 + uTime);
      }

      void main() {
        vNormal = normalize(normalMatrix * normal);
        vUv = uv;

        vec3 pos = position * uScale * 0.3;

        if (uNoise > 0.0) {
          pos += normal * sinNoise(pos) * uNoise * 0.2;
        }

        vPosition = pos;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `;

    const fragmentShader = `
      precision highp float;

      uniform float uTime;
      uniform float uHueShift;
      uniform float uColorFreq;
      uniform float uGlow;
      varying vec3 vNormal;
      varying vec2 vUv;
      varying vec3 vPosition;

      // Cosine based palette generators by Inigo Quilez
      vec3 palette( in float t, in vec3 a, in vec3 b, in vec3 c, in vec3 d ) {
        return a + b*cos( 6.28318*(c*t+d) );
      }

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = vec3(0.0, 0.0, 1.0);

        // Fresnel reflection / edge glow calculation
        float fresnel = pow(1.0 - max(0.0, dot(normal, viewDir)), 2.0);

        float t = vUv.y * uColorFreq + uTime * 0.2 + uHueShift;

        // Radiant Prismatic Color Palette
        vec3 a = vec3(0.5, 0.5, 0.5);
        vec3 b = vec3(0.5, 0.5, 0.5);
        vec3 c = vec3(1.0, 1.0, 1.0);
        vec3 d = vec3(0.0, 0.33, 0.67);

        vec3 color = palette(t, a, b, c, d);

        // Combine surface shading with vibrant edge glow
        vec3 finalColor = mix(color * 0.6, color * 1.8 * uGlow, fresnel);

        gl_FragColor = vec4(finalColor, 0.85);
      }
    `;

    const program = new Program(gl, {
      vertex: vertexShader,
      fragment: fragmentShader,
      uniforms: {
        uTime: { value: 0 },
        uScale: { value: scale },
        uHeight: { value: height },
        uHueShift: { value: hueShift },
        uColorFreq: { value: colorFrequency },
        uNoise: { value: noise },
        uGlow: { value: glow },
      },
      transparent: true,
      cullFace: false,
    });

    const mesh = new Mesh(gl, { geometry, program });
    mesh.setParent(scene);

    let animationFrameId: number;
    let startTime = performance.now();

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      renderer.setSize(newW, newH);
      camera.perspective({ aspect: newW / newH });
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      const elapsed = (performance.now() - startTime) / 1000;
      const time = elapsed * timeScale;

      program.uniforms.uTime.value = time;

      // Apply dynamic animation types
      if (animationType === "rotate") {
        mesh.rotation.y = time * 0.8;
        mesh.rotation.x = Math.sin(time * 0.5) * 0.3;
        mesh.rotation.z = Math.cos(time * 0.4) * 0.2;
      } else if (animationType === "float") {
        mesh.position.y = Math.sin(time * 1.5) * 0.4;
        mesh.rotation.y = time * 0.5;
      } else if (animationType === "wave") {
        mesh.rotation.y = time * 0.6;
        mesh.rotation.z = Math.sin(time * 2.0) * 0.4;
      } else {
        mesh.rotation.y = time * 0.5;
      }

      renderer.render({ scene, camera });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (gl.canvas && container.contains(gl.canvas)) {
        container.removeChild(gl.canvas);
      }
    };
  }, [
    animationType,
    timeScale,
    height,
    baseWidth,
    scale,
    hueShift,
    colorFrequency,
    noise,
    glow,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full absolute inset-0 pointer-events-auto ${className}`}
    />
  );
}
