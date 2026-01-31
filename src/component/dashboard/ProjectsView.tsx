import React from "react";
import { Search, LayoutGrid, MoreHorizontal, Plus } from "lucide-react";
import { Project } from "@/types";

interface ProjectsViewProps {
  projects: Project[];
  onNewProject: () => void;
  onSelectProject: (project: Project) => void;
}

export const ProjectsView = ({
  projects,
  onNewProject,
  onSelectProject,
}: ProjectsViewProps) => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-medium tracking-tight text-zinc-100">
            Projects
          </h1>
          <p className="text-zinc-500 text-sm mt-1">
            Manage your generation library.
          </p>
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-1.5 h-4 w-4 text-zinc-500" />
          <input
            className="pl-9 h-8 w-64 bg-zinc-900 border border-zinc-800 rounded-md text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-700"
            placeholder="Search projects..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map((p) => (
          <div
            key={p.id}
            onClick={() => onSelectProject(p)}
            className="group rounded-xl border border-zinc-800 bg-zinc-950/50 overflow-hidden hover:border-zinc-700 transition-all cursor-pointer"
          >
            <div className="aspect-video bg-zinc-900 w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
              <div className="absolute inset-0 flex items-center justify-center text-zinc-800 group-hover:text-zinc-700 transition-colors">
                <LayoutGrid size={32} strokeWidth={1} />
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-sm font-medium text-zinc-200 truncate pr-2">
                  {p.title}
                </h3>
                <button
                  className="text-zinc-600 hover:text-zinc-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  <MoreHorizontal size={14} />
                </button>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-zinc-500 font-mono">{p.date}</span>
                <span
                  className={`px-1.5 py-0.5 rounded text-[10px] font-medium border ${p.status === "Done" ? "bg-green-500/10 text-green-500 border-green-500/20" : "bg-zinc-800 text-zinc-400 border-zinc-700"}`}
                >
                  {p.status}
                </span>
              </div>
            </div>
          </div>
        ))}

        <button
          onClick={onNewProject}
          className="rounded-xl border border-zinc-800 border-dashed bg-zinc-900/20 flex flex-col items-center justify-center gap-3 hover:bg-zinc-900/40 hover:border-zinc-700 transition-all h-full min-h-[200px] text-zinc-500 hover:text-zinc-300"
        >
          <div className="p-3 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-zinc-600 transition-colors">
            <Plus size={20} />
          </div>
          <span className="text-sm font-medium">Create New</span>
        </button>
      </div>
    </div>
  );
};
