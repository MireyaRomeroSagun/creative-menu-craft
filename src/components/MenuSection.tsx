import { LucideIcon } from "lucide-react";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

interface MenuItem { icon: LucideIcon; label: string; }
interface MenuSectionProps { title: string; items: MenuItem[]; index: number; }

const MenuSection = ({ title, items, index }: MenuSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.07, duration: 0.35 }}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="h-1 w-1 rounded-full bg-accent" />
      <h2 className="font-heading text-xs font-bold uppercase tracking-[0.15em] text-primary">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
      {items.map((item, i) => (
        <MenuCard key={item.label} icon={item.icon} label={item.label} index={i} />
      ))}
    </div>
  </motion.section>
);

export default MenuSection;
