/*
================================================================================
 ARCHIVO: src/app/pages/contructor-landing-pages/models/landing-page.models.ts
================================================================================
*/

// Modelo base para todos los elementos del canvas
export interface BaseElement {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  zIndex: number; // 0 = fondo, valores mayores = capas arriba
}

// Unión discriminada para todos los tipos de elementos posibles
export type LandingElement =
  | HeaderElement
  | ImageElement
  | TextElement
  | ButtonElement
  | DividerElement;

// Definición de cada tipo de elemento que hereda de BaseElement
export interface HeaderElement extends BaseElement {
  type: 'header';
  text: string;
  level: 1 | 2 | 3; // Nivel de encabezado (h1, h2, h3)
  color?: string;
  fontFamily?: string;
}

export interface ImageElement extends BaseElement {
  type: 'image';
  src: string;
  alt?: string;
  rounded?: boolean;
  shadow?: boolean;
}

export interface TextElement extends BaseElement {
  type: 'text';
  content: string;
  color?: string;
  size?: 'text-sm' | 'text-base' | 'text-lg'; // Tamaños de fuente de Tailwind
  width?: number;
}

export interface ButtonElement extends BaseElement {
  type: 'button';
  label: string;
  color?: string; // Clases de color de Tailwind, ej: 'bg-sky-500 text-white'
  action?: () => void;
}

export interface DividerElement extends BaseElement {
  type: 'divider';
  width?: number;
}

