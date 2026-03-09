import {
  Factory, ShoppingCart, HardHat, ClipboardList, ShieldCheck, Users, Building2, BarChart3,
  Award, TrendingUp, GitPullRequest, FolderOpen, Clock, UsersRound, Package, FileWarning, Gift,
  UserCircle, GraduationCap, ClipboardCheck, Phone, Mail, CalendarDays, Newspaper, Heart, PartyPopper, BookOpen,
  Calculator, HelpCircle, FileText,
  Video,
  Settings, Monitor, Link2, Headphones, Database, Cpu, ShoppingBag,
  Zap
} from "lucide-react";
import KpiBar from "@/components/KpiBar";
import MenuSection from "@/components/MenuSection";
import { motion } from "framer-motion";

const sections = [
  {
    title: "APS ERP: Automated Production System",
    items: [
      { icon: Factory, label: "Production Control" },
      { icon: ShoppingCart, label: "Purchasing" },
      { icon: HardHat, label: "Engineering" },
      { icon: ClipboardList, label: "Inventory Control" },
      { icon: ShieldCheck, label: "Quality" },
      { icon: Users, label: "Human Resources" },
      { icon: Building2, label: "Fixed Assets" },
      { icon: BarChart3, label: "Visual Analytics" },
    ],
  },
  {
    title: "Important Business Information",
    items: [
      { icon: Award, label: "Quality Management System" },
      { icon: TrendingUp, label: "Key Performance Indicators" },
      { icon: GitPullRequest, label: "Engineering Change Order" },
      { icon: FolderOpen, label: "Clients Folder" },
      { icon: Clock, label: "My Time Check" },
      { icon: UsersRound, label: "Users / Departments" },
      { icon: Package, label: "Inventory Counts Cockpit" },
      { icon: FileWarning, label: "Acciones Correctivas" },
      { icon: Gift, label: "Work Benefits" },
    ],
  },
  {
    title: "Collaboration Services",
    items: [
      { icon: UserCircle, label: "Human Resources Portal" },
      { icon: GraduationCap, label: "My Trainings" },
      { icon: ClipboardCheck, label: "My Surveys" },
      { icon: Phone, label: "Phone Directory" },
      { icon: Mail, label: "Update Outlook Contacts" },
      { icon: CalendarDays, label: "Training Room Calendar" },
      { icon: Newspaper, label: "Revista Informativa" },
      { icon: Heart, label: "PERSAL Culture" },
      { icon: PartyPopper, label: "Cumpleaños" },
      { icon: BookOpen, label: "E-learning" },
    ],
  },
  {
    title: "Third-Party Applications",
    items: [
      { icon: Calculator, label: "Innova Accounting" },
      { icon: HelpCircle, label: "Innova Help Desk" },
      { icon: FileText, label: "Facturar en Línea" },
    ],
  },
  {
    title: "Business Software",
    items: [
      { icon: Video, label: "Webex" },
    ],
  },
  {
    title: "Technician Support",
    items: [
      { icon: Settings, label: "System Admin" },
      { icon: Monitor, label: "Software Installations" },
      { icon: Link2, label: "System Integrations" },
      { icon: Headphones, label: "Service Desk" },
      { icon: Database, label: "Master Data" },
      { icon: ShoppingBag, label: "Procurement" },
      { icon: Cpu, label: "Industry 4.0" },
    ],
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Header — azul marino */}
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-primary shadow-md"
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent shadow-sm">
            <Zap className="h-5 w-5 text-accent-foreground" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="font-heading text-lg font-bold tracking-tight text-primary-foreground">
              PERSAL <span className="text-accent">SI</span>
            </h1>
            <p className="text-[11px] font-medium text-primary-foreground/70 tracking-wide">
              All in One 4.0 — Manufacturing Solutions
            </p>
          </div>
        </div>
        <KpiBar />
      </div>
    </motion.header>

    {/* Accent bar */}
    <div className="h-1 bg-accent" />

    {/* Main */}
    <main className="mx-auto max-w-[1400px] space-y-9 px-6 py-8">
      {sections.map((section, i) => (
        <MenuSection key={section.title} title={section.title} items={section.items} index={i} />
      ))}
    </main>

    {/* Footer */}
    <footer className="bg-primary mt-6">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-accent" />
          <div>
            <p className="font-heading text-xs font-bold text-primary-foreground">MRS</p>
            <p className="text-[10px] text-primary-foreground/60">Analista Int. Sistemas</p>
          </div>
        </div>
        <p className="hidden text-[11px] italic text-primary-foreground/60 sm:block">
          "En Persal la colaboración eres tú y soy yo."
        </p>
        <p className="text-[10px] font-medium text-primary-foreground/60">v2.0.0.91</p>
      </div>
    </footer>
  </div>
);

export default Index;
