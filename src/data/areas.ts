import type { LucideIcon } from "lucide-react";
import {
  Target,
  Globe,
  MessageSquare,
  Share2,
  TrendingUp,
  Calculator,
  Briefcase,
  GitBranch,
  Layers,
  Zap,
  Apple,
  Heart,
  HeartPulse,
  Users,
  HelpingHand,
  BookOpen,
  GraduationCap,
  Award,
  Lightbulb,
} from "lucide-react";

// Importar imágenes desde src/assets para que Vite las procese
// con el base path correcto en GitHub Pages
import bgAzul from "../assets/imagen-bg-azul.jpeg";
import bgGris from "../assets/imagen-bg-gris.jpeg";
import bgVerde from "../assets/image-bg-verde.jpeg";
import bgNaranja from "../assets/imagen-bg-naranja.jpeg";

import fotoAndres from "../assets/foto-andres.jpeg";
import fotoCeferino from "../assets/foto-ceferino.jpeg";
import fotoDoris from "../assets/foto-doris.jpeg";
import fotoDamian from "../assets/foto-damian.jpeg";

export interface FocusArea {
  icon: LucideIcon;
  name: string;
}

export interface Referent {
  name: string;
  title: string;
  image: string;
  quote: string;
}

export interface AreaConfig {
  id: string;
  label: string;
  tagline: string;
  headline: string;
  body: string;
  bgImage: string;
  bgColor: string;
  overlayColor: string;
  focusAreas: FocusArea[];
  referent: Referent;
}

export const AREAS: AreaConfig[] = [
  {
    id: "estrategia",
    label: "Estrategia",
    tagline: "CONVERTIMOS OBJETIVOS EN PLANES ACCIONABLES.",
    headline: "LAS MARCAS FUERTES NACEN DE ESTRATEGIAS CLARAS.",
    body: "ANALIZAMOS CADA PROYECTO PARA DETECTAR OPORTUNIDADES, ORDENAR OBJETIVOS Y CONSTRUIR UN CAMINO CLARO.",
    bgImage: bgAzul.src,
    bgColor: "#1e2a3a",
    overlayColor: "#1e2a3a",
    focusAreas: [
      { icon: Globe, name: "Lic. en Marketing" },
      { icon: MessageSquare, name: "Comunicación" },
      { icon: Target, name: "Branding" },
      { icon: Share2, name: "Redes" },
      { icon: TrendingUp, name: "Desarrollo comercial" },
    ],
    referent: {
      name: "Gallo Andrés",
      title: "Diplomado en Ecommerce y marketing digital",
      image: fotoAndres.src,
      quote: "CREAMOS ESTRATEGIAS CON VISIÓN Y PROPÓSITO.",
    },
  },
  {
    id: "procesos",
    label: "Procesos",
    tagline: "ORDENAMOS Y OPTIMIZAMOS LA OPERACIÓN.",
    headline: "ORDENAMOS EL PRESENTE PARA POTENCIAR EL CRECIMIENTO.",
    body: "OPTIMIZAMOS LA FORMA DE TRABAJAR PARA MEJORAR ORGANIZACIÓN, EFICIENCIA Y RESULTADOS.",
    bgImage: bgGris.src,
    bgColor: "#2b2b2b",
    overlayColor: "#2b2b2b",
    focusAreas: [
      { icon: Calculator, name: "Contador" },
      { icon: Briefcase, name: "Administración" },
      { icon: GitBranch, name: "Gestión" },
      { icon: Layers, name: "Organización interna" },
      { icon: Zap, name: "Optimización" },
    ],
    referent: {
      name: "Rivero Ceferino",
      title:
        "Contador, licenciado en administración naval y especialista en sindicatura concursal",
      image: fotoCeferino.src,
      quote: "ORGANIZACIÓN Y EFICIENCIA PARA IMPULSAR RESULTADOS.",
    },
  },
  {
    id: "personas",
    label: "Personas",
    tagline: "POTENCIAMOS EQUIPOS, LIDERAZGO Y CULTURA.",
    headline: "LAS EMPRESAS CRECEN CUANDO LAS PERSONAS EVOLUCIONAN.",
    body: "CREEMOS QUE EL CRECIMIENTO REAL COMIENZA PONIENDO A LAS PERSONAS EN EL CENTRO.",
    bgImage: bgVerde.src,
    bgColor: "#6b8f7a",
    overlayColor: "#6b8f7a",
    focusAreas: [
      { icon: Apple, name: "Nutricionista" },
      { icon: HeartPulse, name: "Bienestar" },
      { icon: Heart, name: "Salud" },
      { icon: Users, name: "Recursos humanos" },
      { icon: HelpingHand, name: "Acompañamiento" },
    ],
    referent: {
      name: "Doris Vega Céspedes",
      title: "Licenciada en nutrición y antropometrista internacional ISAK",
      image: fotoDoris.src,
      quote:
        "ACOMPAÑANDO PROCESOS DE SALUD CON UN ENFOQUE HUMANO, PERSONALIZADO Y SOSTENIBLE.",
    },
  },
  {
    id: "transformacion",
    label: "Transformación",
    tagline: "IMPULSAMOS CAMBIOS SOSTENIBLES Y MEDIBLES.",
    headline: "INNOVAR ES ADAPTARSE ANTES QUE EL RESTO.",
    body: "ACOMPAÑAMOS CAMBIOS SOSTENIBLES QUE GENEREN IMPACTO REAL EN CADA PROYECTO.",
    bgImage: bgNaranja.src,
    bgColor: "#c47a5a",
    overlayColor: "#c47a5a",
    focusAreas: [
      { icon: BookOpen, name: "Educación" },
      { icon: GraduationCap, name: "Formación" },
      { icon: Award, name: "Capacitaciones" },
      { icon: Briefcase, name: "Desarrollo profesional" },
      { icon: Lightbulb, name: "Innovación" },
    ],
    referent: {
      name: "D'Ambrosio Damian",
      title:
        "Diplomado universitario en gestión, diseño e innovación educativa",
      image: fotoDamian.src,
      quote: "CAPACITAR ES TRANSFORMAR EL FUTURO.",
    },
  },
];
