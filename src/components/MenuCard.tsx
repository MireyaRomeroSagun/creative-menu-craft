import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuCardProps {
  icon: LucideIcon;
  label: string;
  index: number;
}

const MenuCard = ({ icon: Icon, label, index }: MenuCardProps) => (
  <motion.button
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.03, duration: 0.25 }}
    whileHover={{ scale: 1.04 }}
    whileTap={{ scale: 0.97 }}
    className="group flex flex-col items-center gap-2.5 rounded-xl bg-card p-4 shadow-sm card-hover border border-border/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring/30"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/8 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
      <Icon className="h-6 w-6" />
    </div>
    <span className="text-xs font-medium text-center leading-tight text-foreground/80 group-hover:text-foreground">
      {label}
    </span>
  </motion.button>
);

export default MenuCard;
