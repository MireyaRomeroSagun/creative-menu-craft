import { motion } from "framer-motion";
import { Shield, Truck, HeartPulse } from "lucide-react";

const kpis = [
  { label: "External Quality", value: "98.80", icon: Shield, colorClass: "bg-kpi-green text-accent-foreground" },
  { label: "On Time Delivery", value: "98.00", icon: Truck, colorClass: "bg-accent text-accent-foreground" },
  { label: "Days w/o Accidents", value: "27", icon: HeartPulse, colorClass: "bg-kpi-blue text-accent-foreground" },
];

const KpiBar = () => (
  <div className="flex flex-wrap gap-3">
    {kpis.map((kpi, i) => (
      <motion.div
        key={kpi.label}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + i * 0.1 }}
        className={`${kpi.colorClass} flex items-center gap-2.5 rounded-lg px-4 py-2 shadow-sm`}
      >
        <kpi.icon className="h-4 w-4 opacity-90" />
        <div>
          <p className="text-[9px] font-semibold uppercase tracking-wider opacity-80">{kpi.label}</p>
          <p className="font-heading text-lg font-bold leading-none">{kpi.value}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default KpiBar;
