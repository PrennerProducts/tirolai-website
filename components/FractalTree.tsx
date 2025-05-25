// 'use client';

// import dynamic from 'next/dynamic';
// import { useEffect, useState } from 'react';
// import parse from 'svg-path-parser';
// import type p5Types from 'p5';
// import type { Command, ParsedCommand } from 'svg-path-parser';

// const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
//   ssr: false,
// });

// export default function AnimatedLogoDraw() {
//   const [pathPoints, setPathPoints] = useState<{ x: number; y: number }[]>([]);
//   const [drawingProgress, setDrawingProgress] = useState(0);

//   const canvasWidth = 1800;
//   const canvasHeight = 1400;

//   useEffect(() => {
//     async function fetchPath() {
//       const res = await fetch('/globe.svg');
//       const text = await res.text();
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(text, 'image/svg+xml');

//       const paths = Array.from(doc.querySelectorAll('path'));
//       let allPoints: { x: number; y: number }[] = [];

//       // Type Guard für Befehle mit x/y
//       const isXYCommand = (
//         cmd: ParsedCommand
//       ): cmd is ParsedCommand & { x: number; y: number } => {
//         return (
//           typeof (cmd as ParsedCommand).x === 'number' &&
//           typeof (cmd as ParsedCommand).y === 'number'
//         );
//       };

//       for (const path of paths) {
//         const d = path.getAttribute('d');
//         if (d) {
//           const commands = parse(d);
//           const points = commands
//             .filter(isXYCommand)
//             .map((cmd) => ({ x: cmd.x, y: cmd.y }));
//           allPoints = allPoints.concat(points);
//         }
//       }

//       if (allPoints.length > 0) {
//         const minX = Math.min(...allPoints.map((p) => p.x));
//         const minY = Math.min(...allPoints.map((p) => p.y));
//         const maxX = Math.max(...allPoints.map((p) => p.x));
//         const maxY = Math.max(...allPoints.map((p) => p.y));

//         const scale =
//           Math.min(canvasWidth / (maxX - minX), canvasHeight / (maxY - minY)) *
//           0.9;

//         const offsetX = (canvasWidth - (maxX - minX) * scale) / 2;
//         const offsetY = (canvasHeight - (maxY - minY) * scale) / 2;

//         const normalized = allPoints.map((p) => ({
//           x: (p.x - minX) * scale + offsetX,
//           y: (p.y - minY) * scale + offsetY,
//         }));

//         setPathPoints(normalized);
//       }
//     }

//     fetchPath();
//   }, []);

//   const setup = (p5: p5Types, canvasParentRef: Element) => {
//     p5.createCanvas(canvasWidth, canvasHeight).parent(canvasParentRef);
//     p5.stroke(0, 255, 255);
//     p5.noFill();
//   };

//   const draw = (p5: p5Types) => {
//     p5.background(0);
//     p5.beginShape();

//     const maxPoints = Math.floor(
//       p5.map(drawingProgress, 0, 1, 0, pathPoints.length)
//     );

//     for (let i = 0; i < maxPoints; i++) {
//       const pt = pathPoints[i];
//       p5.vertex(pt.x, pt.y);
//     }

//     p5.endShape();

//     if (drawingProgress < 1) {
//       setDrawingProgress((prev) => Math.min(1, prev + 0.005));
//     }
//   };

//   return <Sketch setup={setup} draw={draw} />;
// }
