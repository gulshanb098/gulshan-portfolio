export interface Themes {
  name: string;
  gradient: string;
  card: string;
  light: string;
  isDark: boolean;
}

export const allThemes: Themes[] = [
  {
    name: "slate",
    gradient: "from-slate-900 to-slate-800",
    card: "bg-slate-800 hover:bg-slate-700",
    light: "bg-slate-100 text-gray-900",
    isDark: true,
  },
  {
    name: "emerald",
    gradient: "from-emerald-900 to-emerald-800",
    card: "bg-emerald-800 hover:bg-emerald-700",
    light: "bg-emerald-100 text-gray-900",
    isDark: true,
  },
  {
    name: "rose",
    gradient: "from-rose-900 to-rose-800",
    card: "bg-rose-800 hover:bg-rose-700",
    light: "bg-rose-100 text-gray-900",
    isDark: true,
  },
  {
    name: "dark",
    gradient: "from-black to-gray-900",
    card: "bg-gray-900 hover:bg-gray-800",
    light: "bg-gray-100 text-gray-900",
    isDark: true,
  },
  {
    name: "zinc",
    gradient: "from-zinc-900 to-zinc-800",
    card: "bg-zinc-800 hover:bg-zinc-700",
    light: "bg-zinc-100 text-gray-900",
    isDark: true,
  },
  {
    name: "white",
    gradient: "from-white to-gray-100",
    card: "bg-white hover:bg-gray-100",
    light: "bg-white text-gray-900",
    isDark: false,
  },
];
