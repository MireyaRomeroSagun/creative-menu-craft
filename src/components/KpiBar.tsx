import { motion } from "framer-motion";
import { Shield, Truck, HeartPulse } from "lucide-react";

const kpis = [
  { label: "External Quality", value: "98.80", icon: Shield, color: "text-kpi-green", glow: "glow-primary" },
  { label: "On Time Delivery", value: "98.00", icon: Truck, color: "text-kpi-amber", glow: "glow-accent" },
  { label: "Days w/o Accidents", value: "27", icon: HeartPulse, color: "text-kpi-blue", glow: "" },
];

const KpiBar = () => (
  <div className="flex flex-wrap gap-4">
    {kpis.map((kpi, i) => (
      <motion.div
        key={kpi.label}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 + i * 0.1 }}
        className={`glass-card rounded-xl px-5 py-3 ${kpi.glow}`}
      >
        <div className="flex items-center gap-3">
          <kpi.icon className={`h-5 w-5 ${kpi.color}`} />
          <div>
            <p className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{kpi.label}</p>
            <p className={`font-heading text-xl font-bold ${kpi.color}`}>{kpi.value}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
);

export default KpiBar;
