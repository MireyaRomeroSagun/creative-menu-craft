import { motion } from "framer-motion";
import { Shield, Truck, HeartPulse } from "lucide-react";

const kpis = [
  { label: "External Quality", value: "98.80", icon: Shield, colorClass: "bg-kpi-green text-accent-foreground" },
  { label: "On Time Delivery", value: "98.00", icon: Truck, colorClass: "bg-accent text-accent-foreground" },
  { label: "Days w/o Accidents", value: "27", icon: HeartPulse, colorClass: "bg-kpi-blue text-accent-foreground" },
];

const KpiBar = () => (
  <div className="flex flex-wrap gap-2">
    {kpis.map((kpi, i) => (
      <motion.div
        key={kpi.label}
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 + i * 0.08 }}
        className={`${kpi.colorClass} flex items-center gap-2 rounded-md px-3 py-1.5`}
      >
        <kpi.icon className="h-3.5 w-3.5 opacity-90" />
        <div>
          <p className="text-[8px] font-semibold uppercase tracking-wider opacity-80">{kpi.label}</p>
          <p className="font-heading text-base font-bold leading-none">{kpi.value}</p>
        </div>
      </motion.div>
    ))}
  </div>
);

export default KpiBar;
