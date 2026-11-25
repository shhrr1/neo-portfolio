"use client";

import { useEffect, useRef } from "react";

const WIDTH = 78;
const HEIGHT = 84;
const PIXEL = 3;
const SPEED = 58;
const FRAME_DURATION = 150;

function drawMascot(context: CanvasRenderingContext2D, frame: number) {
  const pixel = (
    x: number,
    y: number,
    width: number,
    height: number,
    color: string
  ) => {
    context.fillStyle = color;
    context.fillRect(x * PIXEL, y * PIXEL, width * PIXEL, height * PIXEL);
  };

  const outline = "#11151d";
  const armor = "#343c49";
  const armorLight = "#566170";
  const armorDark = "#242a34";
  const violet = "#9b6cff";
  const green = "#83ff77";
  const step = frame === 0 ? -1 : 1;

  pixel(8 + step, 19, 4, 5, outline);
  pixel(9 + step, 20, 2, 4, armor);
  pixel(7 + step * 2, 23, 5, 2, outline);
  pixel(8 + step * 2, 23, 3, 1, armorLight);

  pixel(15 - step, 19, 4, 5, outline);
  pixel(16 - step, 20, 2, 4, armor);
  pixel(15 - step * 2, 23, 5, 2, outline);
  pixel(16 - step * 2, 23, 3, 1, armorLight);

  pixel(8, 0, 2, 1, violet);
  pixel(8, 1, 1, 1, violet);
  pixel(18, 0, 2, 1, violet);
  pixel(19, 1, 1, 1, violet);

  pixel(3, 12, 5, 4, outline);
  pixel(4, 12, 3, 3, armorLight);
  pixel(4, 15 + frame, 2, 4, armorDark);
  pixel(18, 12, 5, 4, outline);
  pixel(19, 12, 3, 3, armorLight);
  pixel(20, 15 - frame, 2, 4, armorDark);

  pixel(6, 10, 14, 10, outline);
  pixel(7, 11, 12, 7, armor);
  pixel(8, 11, 10, 1, armorLight);
  pixel(9, 13, 8, 4, armorDark);
  pixel(11, 14, 4, 2, green);
  pixel(12, 14, 2, 2, "#c2ff8f");
  pixel(9, 18, 8, 1, armorLight);

  pixel(6, 2, 14, 1, outline);
  pixel(5, 3, 16, 6, outline);
  pixel(6, 3, 14, 5, armor);
  pixel(8, 4, 10, 3, armorDark);
  pixel(8, 5, 3, 1, green);
  pixel(15, 5, 3, 1, green);
  pixel(9, 6, 1, 1, "#d0ffad");
  pixel(16, 6, 1, 1, "#d0ffad");
  pixel(8, 7, 10, 1, outline);
}

export default function WalkingMascot() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      throw new Error("Walking mascot canvas was not mounted.");
    }

    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not create a 2D context for the walking mascot.");
    }

    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = WIDTH * pixelRatio;
    canvas.height = HEIGHT * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
    context.imageSmoothingEnabled = false;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let position = 0;
    let lastTime = 0;
    let frameTime = 0;
    let frame = 0;
    let animationFrame = 0;

    const animate = (time: number) => {
      const delta = lastTime === 0 ? 0 : Math.min(time - lastTime, 50);
      lastTime = time;

      if (!pausedRef.current && !reducedMotion.matches) {
        position += (SPEED * delta) / 1000;
        if (position > window.innerWidth) {
          position = -WIDTH;
        }
        canvas.style.transform = `translateX(${position}px)`;

        frameTime += delta;
        if (frameTime >= FRAME_DURATION) {
          frame = (frame + 1) % 2;
          frameTime = 0;
        }
      }

      context.clearRect(0, 0, WIDTH, HEIGHT);
      drawMascot(context, frame);
      animationFrame = window.requestAnimationFrame(animate);
    };

    animationFrame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 bottom-0 z-40 h-24 overflow-hidden pointer-events-none select-none"
    >
      <canvas
        ref={canvasRef}
        className="absolute bottom-0 left-0 pointer-events-auto cursor-pointer will-change-transform"
        style={{ width: WIDTH, height: HEIGHT }}
        onPointerEnter={() => {
          pausedRef.current = true;
        }}
        onPointerLeave={() => {
          pausedRef.current = false;
        }}
      />
    </div>
  );
}
