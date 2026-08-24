import graduation from "@/assets/work-graduation.jpg";
import wikimedia from "@/assets/work-wikimedia.jpg";
import identity from "@/assets/work-identity.png";
import render3d from "@/assets/work-3d.jpg";
import motion from "@/assets/work-motion.jpg";
import editorial from "@/assets/work-editorial.jpg";

export type Project = {
  slug: string;
  index: string;
  quote?: string;
  title: string;
  subtitle: string;
  client: string;
  role: string;
  year: string;
  description: string;
  image: string;
  imageAlt: string;
  palette: string[];
  paletteNote?: string;
  layout: "image-left" | "image-right";
  tags: string[];
};

export const projects: Project[] = [
  {
    slug: "sampai-finish",
    index: "01",
    quote: "“Sampai Finish”",
    title: "STSRD VISI Graduation 2023",
    subtitle: "Key Visual Design",
    client: "STSRD VISI Yogyakarta",
    role: "Illustrator",
    year: "2023",
    description:
      "Key visual illustration for STSRD VISI Yogyakarta Graduation 2023, developed as the main campaign visual and applied across invitations, ID cards, banners, and promotional assets to create a warm, story-driven graduation identity.",
    image: graduation,
    imageAlt:
      "Flat illustration of three graduates leaping through a blue sky past a finish-line ribbon",
    palette: ["#e5493f", "#f08322", "#f6d635", "#79c8f2", "#1f9c8b", "#2f3e59"],
    layout: "image-left",
    tags: ["Key Visual", "Campaign", "Illustration"],
  },
  {
    slug: "wikimedian",
    index: "02",
    title: "Wikimedian Illustration",
    subtitle: "Community Campaign Asset",
    client: "Wikimedia Indonesia",
    role: "Illustrator",
    year: "2024",
    description:
      "Flat illustration for Wikimedia Indonesia inspired by research, journalism, culture, and digital collaboration. Designed as part of Wikipedia branding for social media and campaign assets.",
    image: wikimedia,
    imageAlt:
      "Three people riding a long tandem bicycle together with colourful ribbons behind them",
    palette: [
      "#d9584f",
      "#e8c85a",
      "#e8e3da",
      "#b9bfc4",
      "#2f9e6f",
      "#4fae8a",
      "#cfe6dc",
      "#e7f0ec",
      "#6c7280",
      "#d5d5cf",
    ],
    paletteNote:
      "The color palette is based on the primary colors of the Wikimedia logo and its extended variations, ensuring consistency with the brand identity. This illustration is intended for use in social media content and Wikimedia branding purposes.",
    layout: "image-left",
    tags: ["Editorial", "Flat Vector", "Social"],
  },
  {
    slug: "watu-gendong",
    index: "03",
    title: "Watu Gendong Visual Identity Design",
    subtitle: "Logo & Brand System",
    client: "Pokdarwis Beji Tourism Village",
    role: "Logo & Visual Identity Designer",
    year: "2024",
    description:
      "Designed as the visual identity for Watu Gendong Tourism Village in Beji, Gunungkidul, this logo reflects the essence of local nature. The project focuses on strengthening destination branding, building brand awareness, and supporting tourism promotion through regional potential.",
    image: identity,
    imageAlt: "Logo mark of boulders under a green hill with a handwritten wordmark",
    palette: ["#2f3230", "#7a3d1c", "#7c8226", "#e08b1c", "#d9e04a", "#79cfa1"],
    layout: "image-right",
    tags: ["Logo", "Visual Identity", "Branding"],
  },
  {
    slug: "loop-storyboard",
    index: "04",
    title: "Stay In The Loop",
    subtitle: "Explainer Storyboard & Motion Direction",
    client: "Loop — Team Chat App",
    role: "Art Director & Motion Designer",
    year: "2025",
    description:
      "A twelve-frame storyboard and animation direction for a product explainer. Built around a single friendly protagonist, the boards define pacing, camera moves, and the teal–coral system that carries into the final 2D animation.",
    image: motion,
    imageAlt: "Twelve-panel storyboard for an animated explainer video in teal and coral",
    palette: ["#1f9d8f", "#5fc3b6", "#cfe8e3", "#f2795c", "#f6b45c", "#16283c"],
    layout: "image-left",
    tags: ["Motion Design", "Storyboard", "2D Animation"],
  },
  {
    slug: "cozy-room",
    index: "05",
    title: "Cozy Room Study",
    subtitle: "Stylized 3D Look Development",
    client: "Personal Exploration",
    role: "3D Artist & Lighting",
    year: "2025",
    description:
      "A stylized isometric diorama exploring soft clay materials, warm practical lighting, and cinematic framing. Part of an ongoing study into translating my 2D illustration language into 3D environments.",
    image: render3d,
    imageAlt: "Stylized 3D isometric cozy room with desk, plants and warm window light",
    palette: ["#2a1c16", "#8c4a2a", "#d98b4a", "#e8c188", "#7d9b57", "#e2705a"],
    layout: "image-right",
    tags: ["3D", "Look Dev", "Lighting"],
  },
  {
    slug: "pasar-kuliner",
    index: "06",
    title: "Pasar Kuliner",
    subtitle: "Editorial Illustration Series",
    client: "Self-initiated / Culture Series",
    role: "Illustrator & Art Director",
    year: "2026",
    description:
      "An editorial series documenting Indonesian street-food culture at golden hour. Dense crowd staging, hand-lettered signage, and a terracotta–teal palette build a scene you can almost hear.",
    image: editorial,
    imageAlt: "Illustration of a busy Indonesian street food market at golden hour",
    palette: ["#f2a52c", "#e3762f", "#a8452a", "#1f6f6a", "#0f4442", "#f0e0c0"],
    layout: "image-left",
    tags: ["Editorial", "Culture", "Illustration"],
  },
];

export const concepts = [
  {
    letter: "A",
    label: "Toss the cap",
    note: "Group celebration, static camera, low narrative payoff.",
  },
  {
    letter: "B",
    label: "Cross the finish",
    note: "Selected — motion, conflict, and a clear finish-line metaphor.",
  },
  {
    letter: "C",
    label: "Climb the peak",
    note: "Strong symbolism but reads heavy for a graduation campaign.",
  },
];

export const tools = [
  "Photoshop",
  "Illustrator",
  "After Effects",
  "Premiere Pro",
  "Procreate",
  "Clip Studio Paint",
  "Blender 3D",
  "Figma",
];

export const services = [
  {
    title: "Illustration",
    body: "Key visuals, editorial spreads, and character-led scenes built to carry a whole campaign.",
    items: ["Key visual", "Editorial", "Character design"],
  },
  {
    title: "Motion & Animation",
    body: "Storyboards, animatics, and 2D animation shaped in real animation-studio pipelines.",
    items: ["Storyboard", "2D animation", "Animatic"],
  },
  {
    title: "Visual Identity",
    body: "Logos and brand systems for places, communities, and small institutions.",
    items: ["Logo", "Brand system", "Guidelines"],
  },
  {
    title: "3D & Cinematics",
    body: "Stylized 3D environments, look development, and lighting for cinematic frames.",
    items: ["Look dev", "Lighting", "Diorama"],
  },
];

export const stats = [
  { value: "6+", label: "Years designing" },
  { value: "80+", label: "Projects delivered" },
  { value: "12", label: "Studio clients" },
  { value: "2026", label: "Portfolio edition" },
];
