export function Icon({ name, className = "" }: { name: string; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    sun: <><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.42-1.42M17.66 6.34l1.41-1.41"/></>,
    home: <><path d="m3 11 9-8 9 8"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    building: <><path d="M4 21V5h10v16M14 9h6v12M8 9h2M8 13h2M8 17h2M17 13h1M17 17h1"/></>,
    leaf: <><path d="M20 4c-8 0-14 4-14 10 0 2 1 4 3 5 6-1 10-5 11-15Z"/><path d="M4 21c2-6 6-10 12-13"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    map: <><path d="M12 21s7-5 7-12a7 7 0 1 0-14 0c0 7 7 12 7 12Z"/><circle cx="12" cy="9" r="2"/></>,
    shield: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-4"/></>,
    upload: <><path d="M12 16V4M7 9l5-5 5 5"/><path d="M5 20h14"/></>,
    clipboard: <><rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V2h6v2M8 10h8M8 14h5"/><path d="m14 18 2 2 4-4"/></>,
    chart: <><path d="M4 19V5M4 19h16"/><path d="m7 15 4-4 3 2 5-6"/></>,
    files: <><path d="M8 3h8l3 3v13H8z"/><path d="M5 7H3v14h12v-2M11 11h5M11 15h5"/></>,
    search: <><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6M7 10h6M10 7v6"/></>,
    ruler: <><path d="m4 17 13-13 3 3L7 20H4z"/><path d="m12 9 3 3M9 12l2 2M15 6l3 3"/></>,
    wrench: <><path d="M14 7a5 5 0 0 0-7 6L2 18l4 4 5-5a5 5 0 0 0 6-7l-3 3-3-3z"/></>,
    power: <><path d="M12 2v10"/><path d="M7.8 5.8a8 8 0 1 0 8.4 0"/></>,
  };
  return <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{paths[name] ?? paths.sun}</svg>;
}
