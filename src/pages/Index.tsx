import {
  Factory, ShoppingCart, HardHat, ClipboardList, ShieldCheck, Users, Building2, BarChart3,
  Award, TrendingUp, GitPullRequest, FolderOpen, Clock, UsersRound, Package, FileWarning, Gift,
  UserCircle, GraduationCap, ClipboardCheck, Phone, Mail, CalendarDays, Newspaper, Heart, PartyPopper, BookOpen,
  Calculator, HelpCircle, FileText,
  Video,
  Settings, Monitor, Link2, Headphones, Database, Cpu, ShoppingBag
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
      { icon: Newspaper, label: "Revista Informativa Semanal" },
      { icon: Heart, label: "PERSAL Culture" },
      { icon: PartyPopper, label: "Cumpleaños de Colaboradores" },
      { icon: BookOpen, label: "E-learning Options" },
    ],
  },
  {
    title: "Third-Party Integrated Applications",
    items: [
      { icon: Calculator, label: "Innova (Mexican Accounting)" },
      { icon: HelpCircle, label: "Innova Help Desk" },
      { icon: FileText, label: "Facturar en Línea (FEL)" },
    ],
  },
  {
    title: "Software Used for Business",
    items: [
      { icon: Video, label: "Webex" },
    ],
  },
  {
    title: "Technician Support",
    items: [
      { icon: Settings, label: "System Administration" },
      { icon: Monitor, label: "Software Installations Cockpit" },
      { icon: Link2, label: "System Integrations Cockpit" },
      { icon: Headphones, label: "Service Desk" },
      { icon: Database, label: "Master Data Cockpit" },
      { icon: ShoppingBag, label: "Procurement Cockpit" },
      { icon: Cpu, label: "Industry 4.0 Cockpit" },
    ],
  },
];

const Index = () => (
  <div className="min-h-screen bg-background">
    {/* Header */}
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-30 border-b border-border bg-card/80 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary font-heading text-sm font-extrabold text-primary-foreground">
            P
          </div>
          <div>
            <h1 className="font-heading text-base font-bold leading-tight text-foreground">
              Systems Integration (SI)
            </h1>
            <p className="text-[11px] text-muted-foreground">All in One 4.0 — PERSAL Manufacturing Solutions</p>
          </div>
        </div>
        <KpiBar />
      </div>
    </motion.header>

    {/* Instruction banner */}
    <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
      <div className="rounded-lg bg-primary/5 px-4 py-2 text-xs text-muted-foreground">
        Haz doble clic en un módulo para abrirlo
      </div>
    </div>

    {/* Main content */}
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-6 sm:px-6">
      {sections.map((section) => (
        <MenuSection key={section.title} title={section.title} items={section.items} />
      ))}
    </main>

    {/* Footer */}
    <footer className="border-t border-border bg-card/60 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <div>
          <p className="font-heading text-xs font-bold text-primary">MRS</p>
          <p className="text-[10px] text-muted-foreground">ANALISTA INT. SISTEMAS</p>
        </div>
        <p className="hidden text-center text-[11px] italic text-muted-foreground sm:block">
          "En Persal la colaboración eres tú y soy yo."
        </p>
        <p className="text-[10px] text-muted-foreground">Vers. 2.0.0.91</p>
      </div>
    </footer>
  </div>
);

export default Index;
