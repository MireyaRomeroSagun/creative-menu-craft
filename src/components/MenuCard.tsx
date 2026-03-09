import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuCardProps { icon: LucideIcon; label: string; index: number; }

const MenuCard = ({ icon: Icon, label, index }: MenuCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.035, duration: 0.25 }}
    whileHover={{ y: -3, transition: { duration: 0.15 } }}
    whileTap={{ scale: 0.97 }}
    className="group flex flex-col items-center gap-2.5 rounded-xl bg-card p-4 border border-border/60 shadow-sm cursor-pointer
               transition-all duration-200 hover:shadow-md hover:border-accent/50
               focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/8 text-primary
                    transition-all duration-200 group-hover:bg-accent group-hover:text-accent-foreground group-hover:shadow-sm">
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </div>
    <span className="text-[11px] font-medium text-center leading-tight text-muted-foreground group-hover:text-foreground transition-colors">
      {label}
    </span>
  </motion.button>
);

export default MenuCard;
