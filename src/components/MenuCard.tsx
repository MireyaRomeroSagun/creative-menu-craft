import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface MenuCardProps { icon: LucideIcon; label: string; description?: string; index: number; }

const MenuCard = ({ icon: Icon, label, description, index }: MenuCardProps) => (
  <motion.button
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.03, duration: 0.2 }}
    whileHover={{ y: -2, transition: { duration: 0.12 } }}
    whileTap={{ scale: 0.97 }}
    className="group flex items-center gap-3 rounded-lg bg-card p-3 border border-border/60 shadow-sm cursor-pointer
               text-left transition-all duration-200 hover:shadow-md hover:border-accent/50
               focus:outline-none focus-visible:ring-2 focus-visible:ring-ring w-full"
  >
    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/8 text-primary
                    transition-all duration-200 group-hover:bg-accent group-hover:text-accent-foreground">
      <Icon className="h-5 w-5" strokeWidth={1.8} />
    </div>
    <div className="min-w-0">
      <p className="text-sm font-medium text-foreground leading-tight truncate">{label}</p>
      {description && (
        <p className="text-[10px] text-muted-foreground leading-tight mt-0.5 truncate">{description}</p>
      )}
    </div>
  </motion.button>
);

export default MenuCard;
