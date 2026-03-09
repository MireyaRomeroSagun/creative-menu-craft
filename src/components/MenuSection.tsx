import { LucideIcon } from "lucide-react";
import MenuCard from "./MenuCard";
import { motion } from "framer-motion";

interface MenuItem {
  icon: LucideIcon;
  label: string;
}

interface MenuSectionProps {
  title: string;
  items: MenuItem[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35 }}
    className="space-y-3"
  >
    <h2 className="font-heading text-sm font-semibold uppercase tracking-wider text-section-header">
      {title}
    </h2>
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
      {items.map((item, i) => (
        <MenuCard key={item.label} icon={item.icon} label={item.label} index={i} />
      ))}
    </div>
  </motion.section>
);

export default MenuSection;
