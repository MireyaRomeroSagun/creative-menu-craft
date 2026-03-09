import {
  Factory, ShoppingCart, HardHat, ClipboardList, ShieldCheck, Users, Building2, BarChart3,
  Award, TrendingUp, GitPullRequest, FolderOpen, Clock, UsersRound, Package, FileWarning, Gift,
  UserCircle, GraduationCap, ClipboardCheck, Phone, Mail, CalendarDays, Newspaper, Heart, PartyPopper, BookOpen,
  Calculator, HelpCircle, FileText,
  Video,
  Settings, Monitor, Link2, Headphones, Database, Cpu, ShoppingBag,
  Zap, Search, ChevronRight
} from "lucide-react";
import KpiBar from "@/components/KpiBar";
import MenuSection from "@/components/MenuSection";
import { useState, useMemo, useRef } from "react";
import { motion } from "framer-motion";

const sections = [
  {
    id: "erp",
    title: "APS ERP: Sistema de Producción",
    icon: Factory,
    items: [
      { icon: Factory, label: "Production Control", description: "Gestión y control de producción" },
      { icon: ShoppingCart, label: "Purchasing", description: "Órdenes de compra y proveedores" },
      { icon: HardHat, label: "Engineering", description: "Ingeniería y diseño técnico" },
      { icon: ClipboardList, label: "Inventory Control", description: "Control de inventarios" },
      { icon: ShieldCheck, label: "Quality", description: "Gestión de calidad" },
      { icon: Users, label: "Human Resources", description: "Recursos humanos" },
      { icon: Building2, label: "Fixed Assets", description: "Activos fijos" },
      { icon: BarChart3, label: "Visual Analytics", description: "Análisis visual de datos" },
    ],
  },
  {
    id: "business",
    title: "Información de Negocio",
    icon: TrendingUp,
    items: [
      { icon: Award, label: "Quality Management System", description: "Sistema de gestión de calidad (QMS)" },
      { icon: TrendingUp, label: "Key Performance Indicators", description: "Indicadores clave de rendimiento" },
      { icon: GitPullRequest, label: "Engineering Change Order", description: "Órdenes de cambio (ECO)" },
      { icon: FolderOpen, label: "Clients Folder", description: "Carpeta de clientes" },
      { icon: Clock, label: "My Time Check", description: "Control de asistencia" },
      { icon: UsersRound, label: "Users / Departments", description: "Directorio de usuarios" },
      { icon: Package, label: "Inventory Counts Cockpit", description: "Conteos de inventario" },
      { icon: FileWarning, label: "Acciones Correctivas", description: "Gestión de acciones correctivas" },
      { icon: Gift, label: "Work Benefits", description: "Beneficios laborales" },
    ],
  },
  {
    id: "collaboration",
    title: "Servicios de Colaboración",
    icon: Heart,
    items: [
      { icon: UserCircle, label: "Human Resources Portal", description: "Portal de recursos humanos" },
      { icon: GraduationCap, label: "My Trainings", description: "Mis capacitaciones" },
      { icon: ClipboardCheck, label: "My Surveys", description: "Mis encuestas" },
      { icon: Phone, label: "Phone Directory", description: "Directorio telefónico" },
      { icon: Mail, label: "Update Outlook Contacts", description: "Actualizar contactos Outlook" },
      { icon: CalendarDays, label: "Training Room Calendar", description: "Calendario de sala de capacitación" },
      { icon: Newspaper, label: "Revista Informativa", description: "Revista semanal informativa" },
      { icon: Heart, label: "PERSAL Culture", description: "Cultura organizacional" },
      { icon: PartyPopper, label: "Cumpleaños", description: "Cumpleaños de colaboradores" },
      { icon: BookOpen, label: "E-learning", description: "Opciones de aprendizaje en línea" },
    ],
  },
  {
    id: "thirdparty",
    title: "Aplicaciones de Terceros",
    icon: Link2,
    items: [
      { icon: Calculator, label: "Innova Accounting", description: "Contabilidad mexicana (Innova)" },
      { icon: HelpCircle, label: "Innova Help Desk", description: "Mesa de ayuda Innova" },
      { icon: FileText, label: "Facturar en Línea", description: "Facturación electrónica (FEL)" },
    ],
  },
  {
    id: "software",
    title: "Software de Negocio",
    icon: Monitor,
    items: [
      { icon: Video, label: "Webex", description: "Videoconferencias Cisco Webex" },
    ],
  },
  {
    id: "support",
    title: "Soporte Técnico",
    icon: Headphones,
    items: [
      { icon: Settings, label: "System Admin", description: "Administración del sistema" },
      { icon: Monitor, label: "Software Installations", description: "Cockpit de instalaciones" },
      { icon: Link2, label: "System Integrations", description: "Integraciones de sistemas" },
      { icon: Headphones, label: "Service Desk", description: "Mesa de servicio" },
      { icon: Database, label: "Master Data", description: "Datos maestros" },
      { icon: ShoppingBag, label: "Procurement", description: "Cockpit de compras" },
      { icon: Cpu, label: "Industry 4.0", description: "Cockpit Industria 4.0" },
    ],
  },
];

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeSection, setActiveSection] = useState("erp");
  const mainRef = useRef<HTMLDivElement>(null);

  const filteredSections = useMemo(() => {
    if (!search.trim()) return sections;
    const q = search.toLowerCase();
    return sections
      .map((s) => ({
        ...s,
        items: s.items.filter(
          (item) =>
            item.label.toLowerCase().includes(q) ||
            (item.description && item.description.toLowerCase().includes(q))
        ),
      }))
      .filter((s) => s.items.length > 0);
  }, [search]);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-primary shadow-md z-20 relative"
      >
        <div className="flex items-center justify-between px-5 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
              <Zap className="h-4 w-4 text-accent-foreground" strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="font-heading text-base font-bold text-primary-foreground">
                PERSAL <span className="text-accent">SI</span>
              </h1>
              <p className="text-[10px] text-primary-foreground/60">All in One 4.0</p>
            </div>
          </div>
          <KpiBar />
        </div>
        <div className="h-0.5 bg-accent" />
      </motion.header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="hidden md:flex w-56 shrink-0 flex-col border-r border-border bg-card">
          {/* Search */}
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar módulo..."
                className="w-full rounded-md border border-input bg-background py-2 pl-8 pr-3 text-xs text-foreground
                           placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 overflow-y-auto p-2 space-y-0.5">
            {sections.map((section) => {
              const SIcon = section.icon;
              const isActive = activeSection === section.id;
              return (
                <button
                  key={section.id}
                  onClick={() => scrollTo(section.id)}
                  className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2.5 text-left text-xs font-medium transition-all
                    ${isActive
                      ? "bg-primary/10 text-primary border-l-2 border-primary"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground border-l-2 border-transparent"
                    }`}
                >
                  <SIcon className="h-4 w-4 shrink-0" />
                  <span className="truncate leading-tight">{section.title}</span>
                  {isActive && <ChevronRight className="h-3 w-3 ml-auto shrink-0 text-primary" />}
                </button>
              );
            })}
          </nav>

          {/* Sidebar footer */}
          <div className="p-3 border-t border-border">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-primary flex items-center justify-center">
                <span className="text-[10px] font-bold text-primary-foreground">MR</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">MRS</p>
                <p className="text-[9px] text-muted-foreground">Analista Int. Sistemas</p>
              </div>
            </div>
          </div>
        </aside>

        {/* Mobile search */}
        <div className="md:hidden sticky top-0 z-10 bg-background border-b border-border p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar módulo..."
              className="w-full rounded-md border border-input bg-card py-2 pl-8 pr-3 text-xs text-foreground
                         placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
        </div>

        {/* Main content */}
        <main ref={mainRef} className="flex-1 overflow-y-auto">
          <div className="max-w-5xl space-y-8 px-5 py-6">
            {search.trim() && (
              <p className="text-xs text-muted-foreground">
                {filteredSections.reduce((n, s) => n + s.items.length, 0)} resultados para "{search}"
              </p>
            )}
            {filteredSections.map((section) => (
              <MenuSection key={section.id} id={section.id} title={section.title} items={section.items} />
            ))}
            {filteredSections.length === 0 && (
              <div className="py-20 text-center">
                <Search className="mx-auto h-10 w-10 text-muted-foreground/30 mb-3" />
                <p className="text-sm text-muted-foreground">No se encontraron módulos</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
