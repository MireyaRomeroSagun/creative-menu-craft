import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuCardProps {
  icon: LucideIcon;
  label: string;
  index: number;
}

const MenuCard = ({ icon: Icon, label, index }: MenuCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.04, duration: 0.3, ease: "easeOut" }}
    whileHover={{ y: -4, transition: { duration: 0.15 } }}
    whileTap={{ scale: 0.96 }}
    className="group relative flex flex-col items-center gap-3 rounded-xl glass-surface p-5 cursor-pointer
               transition-colors duration-200 hover:border-primary/40 hover:bg-card/50
               focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  >
    <div className="relative">
      <div className="absolute inset-0 rounded-lg bg-primary/10 blur-lg opacity-0 transition-opacity group-hover:opacity-100" />
      <div className="relative flex h-11 w-11 items-center justify-center rounded-lg bg-secondary text-muted-foreground
                      transition-all duration-200 group-hover:bg-primary/15 group-hover:text-primary">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
    </div>
    <span className="text-[11px] font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
      {label}
    </span>
  </motion.button>
);

export default MenuCard;
