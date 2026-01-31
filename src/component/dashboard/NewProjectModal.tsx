import React, { useState } from "react";
import { X } from "lucide-react";
import { Project } from "@/types";

interface NewProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (project: Project) => void;
}

export const NewProjectModal = ({
  isOpen,
  onClose,
  onCreate,
}: NewProjectModalProps) => {
  const [title, setTitle] = useState("");
  const [aspectRatio, setAspectRatio] = useState("16:9");

  if (!isOpen) return null;

  const handleCreate = () => {
    if (!title) return;

    const newProject: Project = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      date: "Just now",
      status: "Draft",
      aspectRatio,
      prompt: "",
    };

    onCreate(newProject);
    setTitle(""); // Reset
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="text-sm font-medium text-zinc-100">
            Create New Project
          </h3>
          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-zinc-200"
          >
            <X size={16} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-400">
              Project Name
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Tech Review Q3"
              autoFocus
              className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600 focus:ring-1 focus:ring-zinc-600 transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-medium text-zinc-400">
              Aspect Ratio
            </label>
            <div className="grid grid-cols-3 gap-2">
              {["16:9", "9:16", "1:1"].map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setAspectRatio(ratio)}
                  className={`px-3 py-2 rounded-md border text-xs transition-all text-center ${
                    aspectRatio === ratio
                      ? "bg-zinc-100 text-black border-zinc-100 font-medium"
                      : "bg-zinc-900/30 text-zinc-400 border-zinc-800 hover:text-zinc-200"
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="p-4 border-t border-zinc-800 bg-zinc-900/20 flex justify-end gap-2 rounded-b-xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-zinc-200"
          >
            Cancel
          </button>
          <button
            onClick={handleCreate}
            disabled={!title}
            className="px-4 py-2 bg-zinc-100 hover:bg-white text-black text-xs font-bold rounded-md disabled:opacity-50 transition-colors"
          >
            Create Project
          </button>
        </div>
      </div>
    </div>
  );
};
