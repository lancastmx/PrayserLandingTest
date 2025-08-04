/*
================================================================================
 ARCHIVO: src/app/pages/contructor-landing-pages/models/landing-page.models.ts
================================================================================
Este archivo es la única fuente de verdad para las interfaces de datos.
*/

// Modelo base para todos los elementos del canvas.
export interface BaseElement {
  id: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  zIndex: number;
}

// Unión discriminada que representa cualquier elemento posible en el canvas.
export type LandingElement =
  | HeaderElement
  | ImageElement
  | TextElement
  | ButtonElement
  | DividerElement;

// --- DEFINICIÓN DE CADA ELEMENTO ---

export interface HeaderElement extends BaseElement {
  type: 'header';
  text: string;
  level: 1 | 2 | 3;
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
  size?: 'text-sm' | 'text-base' | 'text-lg';
  width?: number;
}

export interface ButtonElement extends BaseElement {
  type: 'button';
  label: string;
  color?: string;
  action?: () => void;
}

export interface DividerElement extends BaseElement {
  type: 'divider';
  width?: number;
}

// --- INTERFAZ PARA LAS PLANTILLAS ---

// Describe la estructura de una plantilla, que contiene un array de datos de elementos.
// Los datos de la plantilla no incluyen id ni zIndex, ya que se generan al cargarse.
export interface Template {
  id: string;
  name: string;
  data: Omit<LandingElement, 'id' | 'zIndex'>[];
}