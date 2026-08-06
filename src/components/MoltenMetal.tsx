"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export interface MoltenMetalProps {
  color1?: string;
  color2?: string;
  color3?: string;
  speed?: number;
  scale?: number;
  detail?: number;
  glow?: number;
  coreSize?: number;
  swirl?: number;
  fold?: number;
  blackPoint?: number;
  brightness?: number;
  colorMode?: string;
  grain?: boolean;
  grainIntensity?: number;
  mouseInteraction?: boolean;
  mouseStrength?: number;
  opacity?: number;
  className?: string;
}

export default function MoltenMetal({
  color1 = "#5227FF",
  color2 = "#FF9FFC",
  color3 = "#FFFFFF",
  speed = 0.35,
  scale = 4,
  detail = 3,
  glow = 1.6,
  coreSize = 0.1,
  swirl = 1,
  fold = -0.2,
  blackPoint = 0.05,
  brightness = 1.3,
  grain = true,
  grainIntensity = 0.05,
  mouseInteraction = true,
  mouseStrength = 0.3,
  opacity = 1,
  className = "",
}: MoltenMetalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
    
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const c1 = new THREE.Color(color1);
    const c2 = new THREE.Color(color2);
    const c3 = new THREE.Color(color3);

    const uniforms = {
      u_time: { value: 0 },
      u_resolution: { value: new THREE.Vector2(width, height) },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_color1: { value: c1 },
      u_color2: { value: c2 },
      u_color3: { value: c3 },
      u_speed: { value: speed },
      u_scale: { value: scale },
      u_detail: { value: detail },
      u_glow: { value: glow },
      u_coreSize: { value: coreSize },
      u_swirl: { value: swirl },
      u_fold: { value: fold },
      u_blackPoint: { value: blackPoint },
      u_brightness: { value: brightness },
      u_grain: { value: grain ? 1.0 : 0.0 },
      u_grainIntensity: { value: grainIntensity },
      u_mouseStrength: { value: mouseInteraction ? mouseStrength : 0.0 },
      u_opacity: { value: opacity },
    };

    const vertexShader = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `;

    const fragmentShader = `
      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform vec3 u_color3;
      uniform float u_speed;
      uniform float u_scale;
      uniform float u_detail;
      uniform float u_glow;
      uniform float u_coreSize;
      uniform float u_swirl;
      uniform float u_fold;
      uniform float u_blackPoint;
      uniform float u_brightness;
      uniform float u_grain;
      uniform float u_grainIntensity;
      uniform float u_mouseStrength;
      uniform float u_opacity;
      varying vec2 vUv;

      // Simplex noise functions
      vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
      vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

      float snoise(vec2 v) {
        const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                           -0.577350269189626, 0.024390243902439);
        vec2 i  = floor(v + dot(v, C.yy) );
        vec2 x0 = v -   i + dot(i, C.xx);
        vec2 i1;
        i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;
        i = mod289(i);
        vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
        + i.x + vec3(0.0, i1.x, 1.0 ));
        vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
        m = m*m ;
        m = m*m ;
        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 ox = floor(x + 0.5);
        vec3 a0 = x - ox;
        m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
        vec3 g;
        g.x  = a0.x  * x0.x  + h.x  * x0.y;
        g.yz = a0.yz * x12.xz + h.yz * x12.yw;
        return 130.0 * dot(m, g);
      }

      float fbm(vec2 st) {
        float value = 0.0;
        float amplitude = 0.5;
        vec2 shift = vec2(100.0);
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 4; i++) {
          if (float(i) >= u_detail) break;
          value += amplitude * snoise(st);
          st = rot * st * 2.0 + shift;
          amplitude *= 0.5;
        }
        return value;
      }

      float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
      }

      void main() {
        vec2 st = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
        
        // Mouse offset distortion
        vec2 m = (u_mouse - 0.5) * u_mouseStrength;
        st += m;

        float t = u_time * u_speed * 0.5;
        
        vec2 q = vec2(0.0);
        q.x = fbm(st * u_scale + vec2(t * 0.2, t * 0.3));
        q.y = fbm(st * u_scale + vec2(t * 0.3, t * 0.1));

        vec2 r = vec2(0.0);
        r.x = fbm(st * u_scale + u_swirl * q + vec2(1.7, 9.2) + 0.15 * t);
        r.y = fbm(st * u_scale + u_swirl * q + vec2(8.3, 2.8) + 0.126 * t);

        float f = fbm(st * u_scale + r + u_fold);

        // Calculate glowing liquid metallic color blending
        float n = clamp((f * f * u_glow) + (u_coreSize * f), 0.0, 1.0);
        
        vec3 col = mix(u_color1, u_color2, clamp(length(q), 0.0, 1.0));
        col = mix(col, u_color3, clamp(length(r.x), 0.0, 1.0) * n);
        
        col *= u_brightness;
        col = max(col - vec3(u_blackPoint), vec3(0.0));

        if (u_grain > 0.5) {
          float g = (random(st + u_time) - 0.5) * u_grainIntensity;
          col += vec3(g);
        }

        gl_FragColor = vec4(col, u_opacity);
      }
    `;

    const material = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      transparent: true,
    });

    const geometry = new THREE.PlaneGeometry(2, 2);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    let animationFrameId: number;
    let startTime = performance.now();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = 1.0 - (e.clientY - rect.top) / rect.height;
      uniforms.u_mouse.value.set(x, y);
    };

    if (mouseInteraction) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    const handleResize = () => {
      if (!container) return;
      const newW = container.clientWidth || window.innerWidth;
      const newH = container.clientHeight || window.innerHeight;
      renderer.setSize(newW, newH);
      uniforms.u_resolution.value.set(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    const animate = () => {
      const elapsedTime = (performance.now() - startTime) / 1000;
      uniforms.u_time.value = elapsedTime;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (mouseInteraction) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [
    color1,
    color2,
    color3,
    speed,
    scale,
    detail,
    glow,
    coreSize,
    swirl,
    fold,
    blackPoint,
    brightness,
    grain,
    grainIntensity,
    mouseInteraction,
    mouseStrength,
    opacity,
  ]);

  return (
    <div
      ref={containerRef}
      className={`w-full h-full absolute inset-0 pointer-events-auto ${className}`}
    />
  );
}
