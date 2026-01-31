"use client";

import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  Home,
  LayoutGrid,
  Settings as SettingsIcon,
  Plus,
  ChevronDown,
  LogOut,
  PanelLeftClose,
  PanelLeft,
} from "lucide-react";

// Types & Component Imports
import { Project } from "@/types";
import { NewProjectModal } from "@/component/dashboard/NewProjectModal";
import { StudioView } from "@/component/dashboard/StudioView";
import { ProjectsView } from "@/component/dashboard/ProjectsView";
import { SettingsView } from "@/component/dashboard/SettingsView";

const DashboardLayout = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNewProjectModalOpen, setIsNewProjectModalOpen] = useState(false);

  // --- STATE MANAGEMENT ---
  const [projects, setProjects] = useState<Project[]>([
    {
      id: "1",
      title: "Tech Review V2",
      date: "2h ago",
      status: "Draft",
      aspectRatio: "16:9",
    },
    {
      id: "2",
      title: "Vlog Thumbnail",
      date: "1d ago",
      status: "Done",
      aspectRatio: "9:16",
    },
  ]);
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const { data: session, status } = useSession();
  const router = useRouter();

  // --- HANDLERS ---
  const handleCreateProject = (newProject: Project) => {
    // 1. Add new project to the list
    setProjects([newProject, ...projects]);
    // 2. Set it as the active project for the editor
    setActiveProject(newProject);
    // 3. Switch view to Studio
    setActiveTab("Home");
  };

  const handleUpdateProject = (id: string, updates: Partial<Project>) => {
    // Update local list
    const updatedProjects = projects.map((p) =>
      p.id === id ? { ...p, ...updates } : p,
    );
    setProjects(updatedProjects);

    // Update active project object if it matches the one being edited
    if (activeProject && activeProject.id === id) {
      setActiveProject({ ...activeProject, ...updates });
    }
  };

  const handleSelectProject = (project: Project) => {
    setActiveProject(project);
    setActiveTab("Home");
  };

  // Auth Guard
  useEffect(() => {
    if (status === "unauthenticated") router.push("/login");
  }, [status, router]);

  if (status === "loading") {
    return (
      <div className="h-screen w-full bg-black flex flex-col items-center justify-center gap-4">
        <div className="w-8 h-8 rounded-full border border-zinc-800 border-t-zinc-200 animate-spin" />
      </div>
    );
  }

  if (status === "unauthenticated") return null;

  const navItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Projects", icon: <LayoutGrid size={18} /> },
    { name: "Settings", icon: <SettingsIcon size={18} /> },
  ];

  return (
    <div className="flex h-screen w-full bg-black text-zinc-100 font-sans antialiased overflow-hidden">
      <NewProjectModal
        isOpen={isNewProjectModalOpen}
        onClose={() => setIsNewProjectModalOpen(false)}
        onCreate={handleCreateProject}
      />

      {/* Sidebar */}
      <aside
        className={`${isSidebarCollapsed ? "w-16" : "w-64"} flex-shrink-0 border-r border-zinc-800 bg-zinc-950/50 flex flex-col justify-between transition-all duration-300 ease-in-out`}
      >
        <div>
          <div
            className={`h-14 flex items-center ${isSidebarCollapsed ? "justify-center" : "px-4"} border-b border-zinc-800/50 relative group/sidebar`}
          >
            {isSidebarCollapsed ? (
              <div
                className="h-6 w-6 rounded bg-zinc-100 flex items-center justify-center text-black text-[10px] font-bold cursor-pointer"
                onClick={() => setIsSidebarCollapsed(false)}
              >
                T
              </div>
            ) : (
              <button className="flex items-center gap-2 w-full text-left">
                <div className="h-5 w-5 rounded bg-zinc-100 flex items-center justify-center text-black text-[10px] font-bold">
                  T
                </div>
                <span className="text-sm font-medium flex-1">ThumbAI Team</span>
              </button>
            )}
            {!isSidebarCollapsed && (
              <button
                onClick={() => setIsSidebarCollapsed(true)}
                className="absolute right-2 p-1 text-zinc-600 hover:text-zinc-200 opacity-0 group-hover/sidebar:opacity-100 transition-opacity"
              >
                <PanelLeftClose size={14} />
              </button>
            )}
          </div>

          <nav className="p-2 space-y-1 mt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all ${
                  activeTab === item.name
                    ? "bg-zinc-900 text-zinc-100 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.05)]"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                } ${isSidebarCollapsed ? "justify-center px-0" : ""}`}
                title={isSidebarCollapsed ? item.name : undefined}
              >
                {item.icon}
                {!isSidebarCollapsed && (
                  <span className="font-medium">{item.name}</span>
                )}
              </button>
            ))}
          </nav>
        </div>

        <div
          className={`p-4 border-t border-zinc-800/50 bg-zinc-950 ${isSidebarCollapsed ? "flex justify-center" : ""}`}
        >
          {isSidebarCollapsed ? (
            <div
              className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden"
              title="Profile"
            >
              {session?.user?.image && (
                <img
                  src={session.user.image}
                  className="h-full w-full object-cover grayscale"
                />
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden">
                {session?.user?.image && (
                  <img
                    src={session.user.image}
                    className="h-full w-full object-cover grayscale"
                  />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-zinc-200 truncate">
                  {session?.user?.name}
                </p>
                <p className="text-[10px] text-zinc-500">Pro Plan</p>
              </div>
              <button
                onClick={() => signOut()}
                className="text-zinc-500 hover:text-red-400"
              >
                <LogOut size={14} />
              </button>
            </div>
          )}
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 bg-black">
        <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-black/50 backdrop-blur-md z-10">
          <div className="flex items-center gap-2 text-sm text-zinc-500">
            {isSidebarCollapsed && (
              <button
                onClick={() => setIsSidebarCollapsed(false)}
                className="mr-2 text-zinc-600 hover:text-zinc-300"
              >
                <PanelLeft size={16} />
              </button>
            )}
            <span>ThumbAI</span>
            <span className="text-zinc-800">/</span>
            <span className="text-zinc-200">{activeTab}</span>
            {activeTab === "Home" && activeProject && (
              <>
                <span className="text-zinc-800">/</span>
                <span className="text-zinc-400 max-w-[150px] truncate">
                  {activeProject.title}
                </span>
              </>
            )}
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsNewProjectModalOpen(true)}
              className="bg-zinc-100 text-black px-3 py-1.5 rounded-md text-xs font-bold hover:bg-zinc-300 flex items-center gap-2 transition-colors"
            >
              <Plus size={14} strokeWidth={3} /> NEW PROJECT
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          {activeTab === "Home" && (
            <StudioView
              activeProject={activeProject}
              onUpdateProject={handleUpdateProject}
            />
          )}
          {activeTab === "Projects" && (
            <ProjectsView
              projects={projects}
              onNewProject={() => setIsNewProjectModalOpen(true)}
              onSelectProject={handleSelectProject}
            />
          )}
          {activeTab === "Settings" && <SettingsView />}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
