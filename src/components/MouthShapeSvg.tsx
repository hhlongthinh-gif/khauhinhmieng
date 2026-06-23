/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface MouthShapeSvgProps {
  mouthShapeId: string;
}

export const MouthShapeSvg: React.FC<MouthShapeSvgProps> = ({ mouthShapeId }) => {
  // We'll render both a Front View and a Side/Cutaway View to guide the user perfectly.
  // Below we define detailed vectors representing lips, teeth size, tongue positions, and airflow direction.

  let lipColor = '#F43F5E';      // Rose-500
  let tongueColor = '#FDA4AF';   // Rose-300
  let teethColor = '#FFFFFF';    // White
  let outlineColor = '#334155';   // Slate-700
  let airflowColor = '#06B6D4';  // Cyan-500

  // Standard properties for drawing
  let frontView: React.ReactNode = null;
  let sideView: React.ReactNode = null;
  let shapeTitle = 'Mô hình chuẩn';

  switch (mouthShapeId) {
    case 'sibilant-teeth-closed':
      shapeTitle = 'Răng khép - Môi hơi tròn (Sibilant)';
      // Front View: Lips rounded but narrow vertical gap. Dental arch visible and nearly closed.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-sibilant">
          {/* Face outline / chin indicator */}
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Teeth background black gap */}
          <path d="M 30,40 L 70,40 L 68,44 L 32,44 Z" fill="#1E293B" />
          {/* Upper Teeth */}
          <path d="M 32,38 L 68,38 L 66,40 L 34,40 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lower Teeth */}
          <path d="M 33,42 L 67,42 L 65,44 L 35,44 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips representing closed/narrow posture */}
          <path d="M 25,40 Q 50,22 75,40 Q 50,30 25,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 25,40 Q 50,58 75,40 Q 50,50 25,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          {/* Airflow arrows */}
          <path d="M 50,32 Q 50,40 50,48" stroke={airflowColor} strokeWidth="2.5" strokeDasharray="2,2" fill="none" markerEnd="url(#arrow)" />
        </svg>
      );
      // Side View: Tongue tip high towards but not touching the alveolar ridge. Teeth closed.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-sibilant">
          {/* Palate & Alveolar Ridge */}
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Teeth */}
          <rect x="51" y="38" width="3" height="6" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="47" width="3" height="6" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          {/* Lower Jaw line */}
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue Raised Close to the Alveolar Ridge */}
          <path d="M 20,55 Q 35,50 43,39 Q 47,38 46,45 Q 40,55 20,60 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips */}
          <path d="M 53,30 Q 58,28 60,37 Q 56,38 53,38 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 52,53 Q 57,55 59,48 Q 55,47 52,47 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Airflow arrow curving between teeth */}
          <path d="M 33,43 Q 48,40 57,43" stroke={airflowColor} strokeWidth="2" strokeDasharray="2,2" fill="none" />
        </svg>
      );
      break;

    case 'smiling-spread':
      shapeTitle = 'Môi dẹt căng rộng sang 2 bên (Smiling)';
      // Front View: Smiling lips spread flat, spacious horizontal width, narrow teeth gap.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-smiling">
          <path d="M 8,40 Q 50,85 92,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Dark oral cavity narrow gap */}
          <path d="M 20,40 Q 50,45 80,40 Q 50,48 20,40 Z" fill="#1E293B" />
          {/* Teeth chain */}
          <path d="M 25,40 Q 50,41 75,40" stroke={teethColor} strokeWidth="3" fill="none" />
          {/* Lips stretched wide left and right */}
          <path d="M 15,40 Q 50,15 85,40 Q 50,33 15,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 15,40 Q 50,65 85,40 Q 50,47 15,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side View: Tongue high and forward, lips pulled back tightly.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-smiling">
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="51" y="38" width="3" height="5" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="47" width="3" height="5" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue High Forward */}
          <path d="M 18,52 Q 32,46 47,38 Q 49,43 42,50 Q 30,58 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips thin and pulled back */}
          <path d="M 52,32 Q 54,30 55,36 Q 53,38 52,38 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 51,53 Q 53,54 54,49 Q 52,48 51,48 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
        </svg>
      );
      break;

    case 'closed-lips':
      shapeTitle = 'Môi khép kín hoàn toàn (Closed Lips)';
      // Front View: Closed horizontal line.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-closed">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Lips pressed totally together */}
          <path d="M 20,40 Q 50,22 80,40 L 20,40" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 20,40 Q 50,58 80,40 L 20,40" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          {/* Split indicator line */}
          <line x1="20" y1="40" x2="80" y2="40" stroke={outlineColor} strokeWidth="2" />
        </svg>
      );
      // Side/Cutaway View: Lips pressed together, air building up in the mouth chamber.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-closed">
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="50" y="36" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="49" y="45" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue relaxed */}
          <path d="M 18,55 Q 35,53 43,47 Q 45,51 38,55 Q 28,59 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips tightly blocked */}
          <path d="M 52,32 Q 58,35 52,43 Q 48,43 51,36 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 51,48 Q 57,44 52,53 Q 48,51 49,46 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Buildup arrows */}
          <path d="M 25,43 Q 38,42 45,42" stroke={airflowColor} strokeWidth="2.5" strokeDasharray="2,2" fill="none" />
          <circle cx="45" cy="42" r="2" fill={airflowColor} />
        </svg>
      );
      break;

    case 'tongue-between-teeth':
      shapeTitle = 'Đầu lưỡi kẹp nhẹ giữa Răng cửa (Th-blow)';
      // Front View: Tongue tip poking out, teeth visible.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-tongue-teeth">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Open oral space */}
          <path d="M 25,40 Q 50,56 75,40 Q 50,42 25,40 Z" fill="#1E293B" />
          {/* Upper teeth background */}
          <path d="M 28,34 L 72,34 L 70,38 L 30,38 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Tongue poking out between the dentures */}
          <path d="M 35,38 Q 50,50 65,38 L 62,43 Q 50,54 38,43 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1.2" />
          {/* Lower teeth background under tongue */}
          <path d="M 29,48 L 71,48 L 69,50 L 31,50 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips open */}
          <path d="M 20,40 Q 50,14 80,40 Q 50,30 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 20,40 Q 50,66 80,40 Q 50,50 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side View: Tongue tip protrudes between upper and lower dental arches.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-tongue-teeth">
          <path d="M 10,15 L 45,15 Q 55,20 52,35" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="51" y="33" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="45" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue extending forward between teeth */}
          <path d="M 18,52 Q 33,48 57,41 Q 57,44 48,49 Q 33,56 18,57 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips */}
          <path d="M 52,30 Q 58,26 62,33 Q 56,35 52,34 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 50,50 Q 56,52 58,45 Q 54,44 50,44 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Airflow escape */}
          <path d="M 30,46 Q 50,41 65,39" stroke={airflowColor} strokeWidth="2" strokeDasharray="2,1" fill="none" />
        </svg>
      );
      break;

    case 'neutral-relaxed':
      shapeTitle = 'Môi thư giãn - Há hé nhẹ (Neutral)';
      // Front View: Oval, moderate vertical separation, tongue relaxed on floor of mouth.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-neutral">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Mouth Cavity */}
          <path d="M 28,40 Q 50,52 72,40 Q 50,43 28,40 Z" fill="#1E293B" />
          {/* Upper teeth margin */}
          <path d="M 33,39 L 67,39 L 65,40.5 L 35,40.5 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Tongue peeping lazily */}
          <path d="M 38,44 Q 50,49 62,44 Q 50,47 38,44 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips */}
          <path d="M 24,40 Q 50,23 76,40 Q 50,33 24,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 24,40 Q 50,57 76,40 Q 50,47 24,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side View: Tongue flat, moderate mouth opening.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-neutral">
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="51" y="38" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="47" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue Resting Flat */}
          <path d="M 18,55 Q 32,53 43,49 Q 44,52 38,55 Q 28,58 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips relaxed, not rounded or spread */}
          <path d="M 52,32 Q 55,30 57,36 Q 53,38 52,38 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 50,53 Q 53,54 54,49 Q 52,48 50,48 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
        </svg>
      );
      break;

    case 'velar-contact':
      shapeTitle = 'Cuống lưỡi chạm nghẹn Vòm sau (Velar)';
      // Front View: Mouth open medium, tongue humped high up at the back.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-velar">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Dark throat area */}
          <path d="M 25,40 Q 50,60 75,40 Q 50,44 25,40 Z" fill="#1E293B" />
          {/* Humped tongue back there block view */}
          <path d="M 32,44 Q 50,38 68,44 Q 50,56 32,44 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips */}
          <path d="M 20,40 Q 50,20 80,40 Q 50,32 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 20,40 Q 50,60 80,40 Q 50,48 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side View: Back of the tongue raised right up to touch the soft palate (Velum) block air!
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-velar">
          {/* Soft Palate curve hanging low */}
          <path d="M 10,15 L 35,15 Q 43,18 43,30 Q 38,36 31,34" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="51" y="34" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="45" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Back of Tongue touching soft palate closely */}
          <path d="M 18,55 Q 31,48 38,31 Q 42,32 41,38 Q 38,51 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips */}
          <path d="M 52,28 Q 57,26 58,32 Q 54,34 52,34 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 50,49 Q 55,51 56,45 Q 52,44 50,44 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Air blockage indicator */}
          <path d="M 22,40 Q 28,34 32,32" stroke={airflowColor} strokeWidth="2" strokeDasharray="3,1" fill="none" />
          <line x1="32" y1="31" x2="36" y2="35" stroke="#EF4444" strokeWidth="2" />
          <line x1="36" y1="31" x2="32" y2="35" stroke="#EF4444" strokeWidth="2" />
        </svg>
      );
      break;

    case 'teeth-on-lip':
      shapeTitle = 'Răng cửa cắn nhẹ Môi dưới (Teeth-on-lip)';
      // Front View: Upper teeth clearly rest on bottom lip inside.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-teeth-lip">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Oral dark background */}
          <path d="M 25,40 Q 50,54 75,40 Q 50,41 25,40 Z" fill="#1E293B" />
          {/* Upper teeth protruding down over the cleft */}
          <path d="M 34,36 L 66,36 L 63,44 L 37,44 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <line x1="50" y1="36" x2="50" y2="44" stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips - lower lip is pressed flatly upwards against teeth */}
          <path d="M 20,40 Q 50,18 80,40 Q 50,30 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 20,40 Q 50,52 80,40 Q 50,44 20,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          {/* Squish indicators */}
          <path d="M 32,44 Q 50,42 68,44" stroke="#EF4444" strokeWidth="0.5" fill="none" />
        </svg>
      );
      // Side View: Top tooth biting upper rim of lower lip.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-teeth-lip">
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Top Tooth is forward */}
          <rect x="52" y="38" width="3.5" height="6.5" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 48,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue relaxed */}
          <path d="M 18,55 Q 32,53 42,48 M 18,58" stroke={outlineColor} strokeWidth="1" fill="none" />
          {/* Lips: Lower lip curved up under teeth */}
          <path d="M 52,31 Q 57,28 59,34 Q 55,36 52,36 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lower lip gets pressed inside! */}
          <path d="M 48,50 Q 57,48 53,42 Q 49,42 48,46 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Air blowing arrow */}
          <path d="M 33,45 Q 46,45 57,44" stroke={airflowColor} strokeWidth="2" strokeDasharray="3,1" fill="none" />
        </svg>
      );
      break;

    case 'open-wide':
      shapeTitle = 'Miệng há mở rộng đứng (Open Wide)';
      // Front View: Large vertical oval shape representing maximum jaw opening.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-wide">
          <path d="M 10,40 Q 50,95 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Large Oral cavern */}
          <path d="M 22,40 Q 50,75 78,40 Q 50,26 22,40 Z" fill="#1E293B" />
          {/* Upper teeth high up */}
          <path d="M 30,30 L 70,30 L 67,33 L 33,33 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lower teeth way down */}
          <path d="M 32,54 L 68,54 L 66,57 L 34,57 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Flat tongue at the floor */}
          <path d="M 30,48 Q 50,56 70,48 Q 50,66 30,48 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips stretched wide apart vertically */}
          <path d="M 18,40 Q 50,15 82,40 Q 50,23 18,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 18,40 Q 50,82 82,40 Q 50,68 18,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side View: Jaw dropped low, tongue flat down.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-wide">
          <path d="M 10,15 L 43,15 Q 52,18 48,34" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="47" y="34" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 45,74 Q 47,67 44,56" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="43" y="52" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          {/* Tongue pushed flat on floor */}
          <path d="M 18,58 Q 30,56 38,51 Q 40,54 36,58 Q 28,62 18,61 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips widely separated */}
          <path d="M 48,27 Q 54,23 55,29 Q 51,32 48,32 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 44,57 Q 50,60 49,54 Q 46,53 44,53 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          {/* Massive sound wave */}
          <path d="M 28,45 Q 38,44 48,43" stroke={airflowColor} strokeWidth="2.5" strokeDasharray="3,2" fill="none" />
        </svg>
      );
      break;

    case 'rounded-pursed':
      shapeTitle = 'Môi tròn căng chun nhỏ bật hơi (Rounded)';
      // Front View: Small circular mouth aperture.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-rounded">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Small circle inside */}
          <circle cx="50" cy="40" r="10" fill="#1E293B" stroke={outlineColor} strokeWidth="1" />
          {/* Ring representing pursed lips */}
          <path d="M 35,40 Q 50,22 65,40 Q 50,58 35,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="3" fillRule="evenodd" />
          <circle cx="50" cy="40" r="8" fill="#1E293B" />
          {/* Radiating sound lines */}
          <path d="M 30,30 Q 15,40 30,50" stroke={airflowColor} strokeWidth="1" fill="none" />
          <path d="M 70,30 Q 85,40 70,50" stroke={airflowColor} strokeWidth="1" fill="none" />
        </svg>
      );
      // Side View: Lips extended forward in funnel-like shape.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-rounded">
          <path d="M 10,15 L 45,15 Q 55,20 52,38" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="51" y="38" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="50" y="47" width="3" height="4" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue pushed deep in back */}
          <path d="M 18,55 Q 31,52 36,44 Q 38,48 33,54 Q 26,58 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Lips puckered OUTWARD */}
          <path d="M 52,32 Q 62,31 63,38 Q 57,41 52,38 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 50,53 Q 60,55 61,47 Q 55,44 50,47 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          {/* Directed column of air */}
          <path d="M 30,46 L 68,43" stroke={airflowColor} strokeWidth="2" strokeDasharray="3,1" fill="none" />
        </svg>
      );
      break;

    case 'alveolar-ridge-contact':
      shapeTitle = 'Đầu lưỡi ép dính Nướu răng trên (Alveolar Contact)';
      // Front view: Open mouth with tongue pulled straight up behind front teeth.
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-front-alveolar">
          <path d="M 10,40 Q 50,80 90,40" stroke="#CBD5E1" strokeWidth="2" fill="none" />
          {/* Oral Cavity */}
          <path d="M 24,40 Q 50,56 76,40 Q 50,41 24,40 Z" fill="#1E293B" />
          {/* Tongue tip lifted up in middle */}
          <path d="M 38,48 Q 50,30 62,48" stroke={tongueColor} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M 38,48 Q 50,30 62,48" stroke={outlineColor} strokeWidth="1" fill="none" strokeLinecap="round" />
          {/* Upper teeth visible */}
          <path d="M 30,38 L 70,38 L 67,40.5 L 33,40.5 Z" fill={teethColor} stroke={outlineColor} strokeWidth="0.5" />
          {/* Lips */}
          <path d="M 21,40 Q 50,18 79,40 Q 50,30 21,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
          <path d="M 21,40 Q 50,60 79,40 Q 50,48 21,40 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1.5" />
        </svg>
      );
      // Side view: L-shape tongue tip sticking right behind top front tooth root.
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full" id="svg-side-alveolar">
          {/* Plate & Alveolar Ridge */}
          <path d="M 10,15 L 45,15 Q 52,19 51,36" stroke={outlineColor} strokeWidth="2" fill="none" />
          <rect x="50" y="36" width="3" height="4.5" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <rect x="49" y="46" width="3" height="4.5" fill={teethColor} stroke={outlineColor} strokeWidth="0.8" />
          <path d="M 30,70 L 48,70 Q 50,60 49,53" stroke={outlineColor} strokeWidth="2" fill="none" />
          {/* Tongue lifted in concrete block-gate shape */}
          <path d="M 18,55 Q 31,52 41,50 Q 48,46 47,38 Q 44,40 43,47 Q 35,53 18,58 Z" fill={tongueColor} stroke={outlineColor} strokeWidth="1" />
          {/* Spark indicating contact point */}
          <circle cx="48" cy="38" r="2.5" fill="#EF4444" opacity="0.8" />
          {/* Lips */}
          <path d="M 51,30 Q 56,28 58,34 Q 54,35 51,35 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
          <path d="M 49,51 Q 54,53 55,47 Q 51,46 49,46 Z" fill={lipColor} stroke={outlineColor} strokeWidth="1" />
        </svg>
      );
      break;

    default:
      // Fallback
      frontView = (
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <circle cx="50" cy="40" r="15" fill={lipColor} stroke={outlineColor} strokeWidth="2" />
        </svg>
      );
      sideView = (
        <svg viewBox="0 0 100 80" className="w-full h-full">
          <circle cx="50" cy="40" r="15" fill={tongueColor} stroke={outlineColor} strokeWidth="2" />
        </svg>
      );
      break;
  }

  return (
    <div className="flex flex-col h-full justify-between" id="mouth-shape-svg-container">
      {/* Dynamic Header */}
      <div className="flex items-center gap-2 mb-3 px-3 py-1.5 bg-slate-100 rounded-lg border border-slate-200 shadow-sm" id="mouth-shape-header">
        <span className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse"></span>
        <span className="text-xs font-semibold text-slate-700 tracking-wide uppercase">{shapeTitle}</span>
      </div>

      {/* SVG Container */}
      <div className="grid grid-cols-2 gap-4 flex-1 items-center" id="mouth-shape-grids">
        {/* Front view card */}
        <div className="flex flex-col items-center bg-slate-50 rounded-xl p-3 border border-slate-150 relative group hover:shadow-md transition-all duration-300" id="card-front-view">
          <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-slate-100">Chính diện</span>
          <div className="w-full max-w-[140px] aspect-square flex items-center justify-center p-2">
            {frontView}
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1">Gửi gắm hình dáng môi</span>
        </div>

        {/* Side view card */}
        <div className="flex flex-col items-center bg-slate-50 rounded-xl p-3 border border-slate-150 relative group hover:shadow-md transition-all duration-300" id="card-side-view">
          <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest bg-white px-2 py-0.5 rounded border border-slate-100">Cắt nghiêng</span>
          <div className="w-full max-w-[140px] aspect-square flex items-center justify-center p-2">
            {sideView}
          </div>
          <span className="text-[11px] text-slate-500 font-medium mt-1">Đường đặt răng - lưỡi</span>
        </div>
      </div>

      {/* Colors legend */}
      <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 mt-4 text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg border border-slate-100" id="colors-legend">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded bg-rose-500 inline-block"></span>
          <span>Môi (Rose)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded bg-rose-300 inline-block"></span>
          <span>Lưỡi (Pink)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded bg-white border border-slate-300 inline-block"></span>
          <span>Răng (White)</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-2 rounded bg-cyan-500 inline-block"></span>
          <span>Đường hơi (Cyan)</span>
        </div>
      </div>

      {/* SVG Marker definition */}
      <svg className="absolute w-0 h-0">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill={airflowColor} />
          </marker>
        </defs>
      </svg>
    </div>
  );
};
