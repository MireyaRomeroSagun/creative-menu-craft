import { LucideIcon } from "lucide-react";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

interface MenuItem { icon: LucideIcon; label: string; }
interface MenuSectionProps { title: string; items: MenuItem[]; index: number; }

const MenuSection = ({ title, items, index }: MenuSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.08, duration: 0.4 }}
  >
    <div className="mb-4 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-primary/30 to-transparent" />
      <h2 className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-primary whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px flex-1 bg-gradient-to-l from-primary/30 to-transparent" />
    </div>
    <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 xl:grid-cols-8">
      {items.map((item, i) => (
        <MenuCard key={item.label} icon={item.icon} label={item.label} index={i} />
      ))}
    </div>
  </motion.section>
);

export default MenuSection;
