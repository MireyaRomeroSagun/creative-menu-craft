import { LucideIcon } from "lucide-react";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

interface MenuItem { icon: LucideIcon; label: string; description?: string; }
interface MenuSectionProps { title: string; items: MenuItem[]; id: string; }

const MenuSection = ({ title, items, id }: MenuSectionProps) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className="scroll-mt-20"
  >
    <div className="mb-3 flex items-center gap-3">
      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
      <h2 className="font-heading text-sm font-bold text-primary">
        {title}
      </h2>
      <div className="h-px flex-1 bg-border" />
    </div>
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <MenuCard key={item.label} icon={item.icon} label={item.label} description={item.description} index={i} />
      ))}
    </div>
  </motion.section>
);

export default MenuSection;
