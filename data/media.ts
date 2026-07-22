export type InstallationMedia = {
  id: string;
  src: string;
  thumb: string;
  category: "Residential" | "Agricultural" | "Ground mount" | "Installation";
  alt: string;
};

export const installationMedia: InstallationMedia[] = [
  { id: "calgary-aerial", src: "/media/installations/calgary-aerial.webp", thumb: "/media/installations/calgary-aerial-thumb.webp", category: "Residential", alt: "Aerial view of a residential rooftop solar array spanning several roof planes" },
  { id: "multi-roof-home", src: "/media/installations/multi-roof-home.webp", thumb: "/media/installations/multi-roof-home-thumb.webp", category: "Residential", alt: "Solar panels installed across multiple roof levels of a detached home" },
  { id: "ground-mount", src: "/media/installations/ground-mount.webp", thumb: "/media/installations/ground-mount-thumb.webp", category: "Ground mount", alt: "Long ground-mounted solar array installed across an open rural field" },
  { id: "installer-at-work", src: "/media/installations/installer-at-work.webp", thumb: "/media/installations/installer-at-work-thumb.webp", category: "Installation", alt: "Solar installer working beside panels on a shingled residential roof" },
  { id: "suburban-home", src: "/media/installations/suburban-home.webp", thumb: "/media/installations/suburban-home-thumb.webp", category: "Residential", alt: "Two-storey home with a rooftop solar array across the upper roof" },
  { id: "metal-roof", src: "/media/installations/metal-roof-installation.webp", thumb: "/media/installations/metal-roof-installation-thumb.webp", category: "Agricultural", alt: "Installers securing a large solar array on a light metal roof" },
  { id: "residential-aerial", src: "/media/installations/residential-aerial.webp", thumb: "/media/installations/residential-aerial-thumb.webp", category: "Residential", alt: "Top-down aerial view of two solar arrays on a residential roof" },
  { id: "rural-rooftop", src: "/media/installations/rural-rooftop.webp", thumb: "/media/installations/rural-rooftop-thumb.webp", category: "Agricultural", alt: "Wide solar array installed on a rural single-storey building" },
  { id: "red-roof", src: "/media/installations/red-roof-home.webp", thumb: "/media/installations/red-roof-home-thumb.webp", category: "Residential", alt: "Black solar panels installed above a red metal residential roof" },
  { id: "system-equipment", src: "/media/installations/system-equipment.webp", thumb: "/media/installations/system-equipment-thumb.webp", category: "Installation", alt: "Exterior solar electrical equipment mounted below a rooftop array" },
  { id: "winter-rooftop", src: "/media/installations/winter-rooftop.webp", thumb: "/media/installations/winter-rooftop-thumb.webp", category: "Residential", alt: "Dark rooftop solar panels photographed during an overcast Alberta winter" },
  { id: "roof-close", src: "/media/installations/roof-array-close.webp", thumb: "/media/installations/roof-array-close-thumb.webp", category: "Residential", alt: "Close view along a large black solar array on a shingled roof" },
  { id: "panel-detail", src: "/media/installations/panel-detail.webp", thumb: "/media/installations/panel-detail-thumb.webp", category: "Installation", alt: "Close-up view of black solar panels, mounting rails and roof clearances" },
  { id: "brick-home", src: "/media/installations/brick-home-array.webp", thumb: "/media/installations/brick-home-array-thumb.webp", category: "Residential", alt: "Single row of black solar panels installed on a brick home's rear roof" },
];

export const installationVideos = [
  { src: "/media/videos/installation-detail.mp4", poster: "/media/installations/ground-mount.webp", title: "Ground-mounted solar array", description: "A field-level view along a completed ground-mounted solar array.", vertical: true },
  { src: "/media/videos/rooftop-installation.mp4", poster: "/media/installations/calgary-aerial.webp", title: "Residential rooftop from above", description: "An aerial pass over a completed multi-plane rooftop installation.", vertical: false },
] as const;
