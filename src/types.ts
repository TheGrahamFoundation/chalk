/**
 * Chalk Spec — the canonical schema for mathematical visualizations.
 *
 * Gemini outputs this as JSON. The Chalk renderer parses it and delegates
 * to JSXGraph for rendering. This spec is the contract between the AI
 * and the visualization engine.
 */

export interface ChalkSpec {
  viewport: [number, number, number, number]; // [xmin, ymax, xmax, ymin] — JSXGraph boundingbox order
  elements: ChalkElement[];
  showAxis?: boolean;
  showGrid?: boolean;
}

export type ChalkElement =
  | ChalkPoint
  | ChalkSegment
  | ChalkLine
  | ChalkCircle
  | ChalkPolygon
  | ChalkAngle
  | ChalkFunctionGraph
  | ChalkText
  | ChalkArc;

export interface ChalkPoint {
  type: "point";
  coords: [number, number];
  label?: string;
  color?: string;
  fixed?: boolean;
  size?: number;
}

export interface ChalkSegment {
  type: "segment";
  from: [number, number];
  to: [number, number];
  color?: string;
  dash?: boolean;
  label?: string;
  width?: number;
}

export interface ChalkLine {
  type: "line";
  from: [number, number];
  to: [number, number];
  color?: string;
  dash?: boolean;
  label?: string;
}

export interface ChalkCircle {
  type: "circle";
  center: [number, number];
  radius: number;
  color?: string;
  dash?: boolean;
  label?: string;
  fillColor?: string;
  fillOpacity?: number;
}

export interface ChalkPolygon {
  type: "polygon";
  vertices: [number, number][];
  color?: string;
  fillColor?: string;
  fillOpacity?: number;
  label?: string;
}

export interface ChalkAngle {
  type: "angle";
  vertex: [number, number];
  from: [number, number];
  to: [number, number];
  label?: string;
  color?: string;
  radius?: number;
}

export interface ChalkFunctionGraph {
  type: "functiongraph";
  expression: string; // e.g. "Math.sin(x)", "x*x - 2*x + 1"
  domain?: [number, number];
  color?: string;
  label?: string;
  width?: number;
  dash?: boolean;
}

export interface ChalkText {
  type: "text";
  coords: [number, number];
  content: string;
  color?: string;
  fontSize?: number;
}

export interface ChalkArc {
  type: "arc";
  center: [number, number];
  radius: number;
  startAngle: number; // radians
  endAngle: number; // radians
  color?: string;
  label?: string;
}
