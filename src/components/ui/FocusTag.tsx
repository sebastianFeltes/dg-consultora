import type { LucideIcon } from "lucide-react";

interface FocusTagProps {
  icon: LucideIcon;
  name: string;
}

/**
 * Pill-shaped tag with icon and label.
 * Used inside area sections to display focus competencies.
 */
export default function FocusTag({ icon: Icon, name }: FocusTagProps) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-white/95 hover:bg-white/10 transition-colors duration-200">
      <Icon size={14} className="opacity-70" />
      <span>{name}</span>
    </div>
  );
}
