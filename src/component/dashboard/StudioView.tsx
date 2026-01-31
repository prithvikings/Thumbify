import React, { useState, useEffect } from "react";
import {
  Loader2,
  Plus,
  LayoutGrid,
  Pencil,
  Check,
  RefreshCw,
  Download,
  Trash2,
  Maximize2,
  Sparkles,
} from "lucide-react";
import { Project } from "@/types";

interface StudioViewProps {
  activeProject: Project | null;
  onUpdateProject: (id: string, updates: Partial<Project>) => void;
}

export const StudioView = ({
  activeProject,
  onUpdateProject,
}: StudioViewProps) => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEditingTitle, setIsEditingTitle] = useState(false);
  const [editTitleValue, setEditTitleValue] = useState("");

  // 1. STATE FOR STYLE
  const [selectedStyle, setSelectedStyle] = useState("Cinematic");

  // 2. DEFINE AVAILABLE STYLES
  const styles = [
    { name: "Cinematic", id: "Cinematic", desc: "High contrast, photoreal" },
    { name: "Anime", id: "Anime", desc: "Vibrant, cel-shaded" },
    { name: "3D Render", id: "3D Render", desc: "Octane render, 3D" },
    { name: "Minimalist", id: "Minimalist", desc: "Clean lines, flat" },
  ];

  // Sync state with active project
  useEffect(() => {
    if (activeProject) {
      setEditTitleValue(activeProject.title);
      setPrompt(activeProject.prompt || "");
    } else {
      setEditTitleValue("Untitled Project");
      setPrompt("");
    }
  }, [activeProject]);

  const handleTitleSave = () => {
    if (activeProject && editTitleValue.trim() !== "") {
      onUpdateProject(activeProject.id, { title: editTitleValue });
    }
    setIsEditingTitle(false);
  };

  const handlePromptChange = (val: string) => {
    setPrompt(val);
    if (activeProject) {
      onUpdateProject(activeProject.id, { prompt: val });
    }
  };

  // --- GENERATION LOGIC ---
  const handleGenerate = async () => {
    if (!activeProject || !prompt) return;

    setIsGenerating(true);
    onUpdateProject(activeProject.id, { status: "Processing" });

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt,
          aspectRatio: activeProject.aspectRatio,
          style: selectedStyle, // Passing the selected style
        }),
      });

      const data = await response.json();

      if (data.success && data.imageUrl) {
        onUpdateProject(activeProject.id, {
          status: "Done",
          imageUrl: data.imageUrl,
        });
      } else {
        throw new Error(data.error || "Generation failed");
      }
    } catch (error) {
      console.error(error);
      onUpdateProject(activeProject.id, { status: "Failed" });
      alert("Failed to generate image. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = () => {
    if (!activeProject?.imageUrl) return;
    const link = document.createElement("a");
    link.href = activeProject.imageUrl;
    link.download = `${activeProject.title.replace(/\s+/g, "_")}_thumbnail.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleClear = () => {
    if (!activeProject) return;
    if (confirm("Are you sure you want to clear this generation?")) {
      onUpdateProject(activeProject.id, {
        imageUrl: undefined,
        status: "Draft",
      });
    }
  };

  if (!activeProject) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-zinc-500 animate-in fade-in">
        <LayoutGrid size={48} strokeWidth={1} className="mb-4 opacity-50" />
        <p>Select or create a project to start generating.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto h-full flex flex-col lg:flex-row gap-8 animate-in fade-in duration-700">
      {/* LEFT PANE: CONTROLS */}
      <div className="w-full lg:w-96 flex flex-col gap-6">
        <div>
          {/* Header Section */}
          <div className="flex items-center gap-2 group h-8">
            {isEditingTitle ? (
              <div className="flex items-center gap-2 w-full animate-in fade-in duration-200">
                <input
                  value={editTitleValue}
                  onChange={(e) => setEditTitleValue(e.target.value)}
                  onBlur={handleTitleSave}
                  onKeyDown={(e) => e.key === "Enter" && handleTitleSave()}
                  autoFocus
                  className="bg-zinc-900 border border-zinc-700 text-zinc-100 text-xl font-medium px-2 py-0.5 rounded w-full focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
                <button
                  onClick={handleTitleSave}
                  className="text-zinc-400 hover:text-green-400"
                >
                  <Check size={16} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2 w-full">
                <h2
                  className="text-xl font-medium tracking-tight text-zinc-100 truncate flex-1"
                  title={editTitleValue}
                >
                  {editTitleValue}
                </h2>
                <button
                  onClick={() => setIsEditingTitle(true)}
                  className="text-zinc-600 hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Pencil size={12} />
                </button>
              </div>
            )}
          </div>

          {/* Metadata Badges */}
          <div className="flex gap-3 mt-1">
            <p className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest border border-zinc-800 px-1.5 py-0.5 rounded">
              {activeProject.aspectRatio}
            </p>
            <p
              className={`text-[10px] font-mono uppercase tracking-widest border px-1.5 py-0.5 rounded ${
                activeProject.status === "Done"
                  ? "border-green-900 text-green-500 bg-green-900/10"
                  : "border-zinc-800 text-zinc-500"
              }`}
            >
              {activeProject.status}
            </p>
          </div>
        </div>

        {/* 3. STYLE SELECTOR UI (Added Here) */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
              Aesthetic Model
            </label>
            <Sparkles size={12} className="text-zinc-600" />
          </div>
          <div className="grid grid-cols-2 gap-2">
            {styles.map((style) => (
              <button
                key={style.id}
                onClick={() => setSelectedStyle(style.id)}
                className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all duration-200 ${
                  selectedStyle === style.id
                    ? "bg-zinc-100 border-zinc-100 text-black shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                    : "bg-zinc-900/30 border-zinc-800 text-zinc-400 hover:border-zinc-700 hover:bg-zinc-900"
                }`}
              >
                <span className="text-xs font-bold">{style.name}</span>
                <span
                  className={`text-[10px] mt-0.5 ${selectedStyle === style.id ? "text-zinc-600" : "text-zinc-600"}`}
                >
                  {style.desc}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Prompt Input */}
        <div className="space-y-3">
          <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
            Prompt
          </label>
          <div className="relative">
            <textarea
              value={prompt}
              onChange={(e) => handlePromptChange(e.target.value)}
              placeholder="Describe your video content in detail..."
              disabled={isGenerating}
              className="w-full h-32 bg-zinc-900/30 border border-zinc-800 rounded-xl p-4 text-sm text-zinc-200 placeholder:text-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-600 focus:border-zinc-600 transition-all resize-none disabled:opacity-50"
            />
            <div className="absolute bottom-3 right-3 text-[10px] text-zinc-600 font-mono">
              {prompt.length} chars
            </div>
          </div>
        </div>

        {/* Action Button */}
        <button
          onClick={handleGenerate}
          disabled={!prompt || isGenerating}
          className="w-full py-3 bg-zinc-100 text-black rounded-xl font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
        >
          {isGenerating ? (
            <Loader2 size={14} className="animate-spin" />
          ) : (
            <RefreshCw size={14} strokeWidth={3} />
          )}
          <span>
            {activeProject.status === "Done" ? "Regenerate" : "Generate"}
          </span>
        </button>
      </div>

      {/* RIGHT PANE: VISUALIZER */}
      <div className="flex-1 min-h-[500px] bg-zinc-950/50 border border-zinc-800 border-dashed rounded-2xl flex items-center justify-center relative overflow-hidden group/canvas">
        {/* Loading State */}
        {isGenerating && (
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md z-20 flex flex-col items-center justify-center gap-6">
            <div className="w-64 h-1 bg-zinc-900 rounded-full overflow-hidden">
              <div className="h-full bg-zinc-100 w-1/2 animate-[shimmer_1s_infinite]" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-xs font-medium text-zinc-200">
                AI is thinking...
              </p>
              <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                Synthesizing Pixels
              </p>
            </div>
          </div>
        )}

        {/* Display Image */}
        {activeProject.imageUrl ? (
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <img
              src={activeProject.imageUrl}
              alt="Generated Thumbnail"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-zinc-800"
            />

            {/* Hover Actions */}
            <div className="absolute top-6 right-6 flex gap-2 opacity-0 group-hover/canvas:opacity-100 transition-all duration-300 translate-y-2 group-hover/canvas:translate-y-0">
              <button
                onClick={handleDownload}
                className="p-2 bg-black/50 backdrop-blur border border-zinc-700 rounded-md text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
                title="Download 4K"
              >
                <Download size={16} />
              </button>
              <button
                onClick={() => window.open(activeProject.imageUrl, "_blank")}
                className="p-2 bg-black/50 backdrop-blur border border-zinc-700 rounded-md text-zinc-200 hover:bg-zinc-800 hover:text-white transition-colors"
                title="View Fullscreen"
              >
                <Maximize2 size={16} />
              </button>
              <button
                onClick={handleClear}
                className="p-2 bg-black/50 backdrop-blur border border-zinc-700 rounded-md text-red-400 hover:bg-red-900/30 hover:border-red-800 transition-colors"
                title="Delete"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ) : (
          /* Empty State */
          <div className="text-zinc-700 flex flex-col items-center gap-4">
            <div className="p-6 rounded-full bg-zinc-900/30 border border-zinc-800/50">
              <LayoutGrid size={32} strokeWidth={1} />
            </div>
            <div className="text-center">
              <p className="text-sm font-medium text-zinc-500">Canvas Empty</p>
              <p className="text-xs text-zinc-700 mt-1 max-w-xs">
                Enter a prompt on the left to generate your first high-fidelity
                thumbnail.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
