import { motion } from "framer-motion";
import { Shield, Truck, HeartPulse } from "lucide-react";

const kpis = [
  { label: "External Quality", value: "98.80", icon: Shield, colorClass: "bg-kpi-success text-kpi-success-foreground" },
  { label: "On Time Delivery", value: "98.00", icon: Truck, colorClass: "bg-kpi-warning text-kpi-warning-foreground" },
  { label: "Days Without Accidents", value: "27", icon: HeartPulse, colorClass: "bg-kpi-info text-kpi-info-foreground" },
];

const KpiBar = () => (
  <div className="flex flex-wrap gap-3">
    {kpis.map((kpi, i) => (
      <motion.div
        key={kpi.label}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.1 }}
        className={`${kpi.colorClass} flex items-center gap-2.5 rounded-lg px-4 py-2.5 shadow-sm`}
      >
        <kpi.icon className="h-4 w-4 opacity-90" />
        <div className="flex flex-col">
          <span className="text-[10px] font-medium uppercase tracking-wider opacity-85">{kpi.label}</span>
          <span className="text-lg font-bold font-heading leading-none">{kpi.value}</span>
        </div>
      </motion.div>
    ))}
  </div>
);

export default KpiBar;
