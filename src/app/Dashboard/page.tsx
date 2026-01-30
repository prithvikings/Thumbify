"use client";

import React, { useState } from "react";
import {
  Home,
  LayoutGrid,
  Settings,
  Plus,
  Bell,
  Search,
  ChevronDown,
  LogOut,
  Command,
  CreditCard,
  User,
  PanelLeftClose,
} from "lucide-react";
import Link from "next/link";

const DashboardLayout = ({ children }: { children?: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState("Home");

  const navItems = [
    { name: "Home", icon: <Home size={18} /> },
    { name: "Projects", icon: <LayoutGrid size={18} /> },
    { name: "Settings", icon: <Settings size={18} /> },
  ];

  return (
    <div className="flex h-screen w-full bg-black text-zinc-100 font-sans antialiased overflow-hidden">
      {/* SIDEBAR */}
      <aside className="w-64 flex-shrink-0 border-r border-zinc-800 bg-zinc-950/50 flex flex-col justify-between">
        <div>
          {/* Team Switcher (Top Left) */}
          <div className="h-14 flex items-center px-4 border-b border-zinc-800/50">
            <button className="flex items-center gap-2 text-sm font-medium hover:bg-zinc-900 py-1.5 px-2 -ml-2 rounded-md transition-colors w-full text-left group">
              <div className="h-5 w-5 rounded bg-zinc-100 flex items-center justify-center text-black text-[10px] font-bold">
                T
              </div>
              <span className="flex-1 truncate">ThumbAI Team</span>
              <ChevronDown className="h-4 w-4 text-zinc-500 group-hover:text-zinc-300" />
            </button>
          </div>

          {/* Navigation */}
          <div className="p-2 space-y-1 mt-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => setActiveTab(item.name)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-all duration-200 ${
                  activeTab === item.name
                    ? "bg-zinc-900 text-zinc-100 shadow-inner shadow-black/20"
                    : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
                }`}
              >
                {item.icon}
                <span>{item.name}</span>
                {/* Keyboard Shortcut Hint (Linear Style) */}
                {item.name === "Home" && (
                  <span className="ml-auto text-[10px] font-mono text-zinc-600 border border-zinc-800 rounded px-1.5 py-0.5">
                    G H
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* "Favorites" or "Recent" Section */}
          <div className="mt-8 px-4">
            <h3 className="text-[10px] uppercase tracking-widest text-zinc-600 font-semibold mb-2">
              Recent Projects
            </h3>
            <div className="space-y-1">
              {["MrBeast Style v2", "Tech Review Intro", "Vlog Thumbnail"].map(
                (project, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 py-1.5 text-sm text-zinc-500 hover:text-zinc-300 cursor-pointer group"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-zinc-800 group-hover:bg-zinc-600 transition-colors" />
                    {project}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* User Profile (Bottom Sidebar) */}
        <div className="p-4 border-t border-zinc-800/50">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-zinc-800 flex items-center justify-center text-xs font-medium">
              JD
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-zinc-500 truncate">Free Plan</p>
            </div>
            <Settings className="h-4 w-4 text-zinc-600 hover:text-zinc-300 cursor-pointer" />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col min-w-0 bg-black">
        {/* TOPBAR */}
        <header className="h-14 border-b border-zinc-800 flex items-center justify-between px-6 bg-black/50 backdrop-blur-sm z-10">
          {/* Breadcrumbs / Page Title */}
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="hover:text-zinc-300 cursor-pointer">ThumbAI</span>
            <span className="text-zinc-700">/</span>
            <span className="text-zinc-200">{activeTab}</span>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="hidden md:flex items-center gap-2 bg-zinc-900/50 border border-zinc-800 px-3 py-1.5 rounded-md text-sm text-zinc-500 hover:border-zinc-700 transition-colors cursor-text group w-64">
              <Search size={14} className="group-hover:text-zinc-400" />
              <span>Search...</span>
              <div className="ml-auto flex gap-1">
                <span className="text-[10px] bg-zinc-800 px-1.5 rounded border border-zinc-700">
                  ⌘
                </span>
                <span className="text-[10px] bg-zinc-800 px-1.5 rounded border border-zinc-700">
                  K
                </span>
              </div>
            </div>

            {/* Notification Bell */}
            <button className="relative text-zinc-500 hover:text-zinc-200 transition-colors">
              <Bell size={18} />
              <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-black" />
            </button>

            {/* Primary Action Button */}
            <button className="bg-zinc-100 text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-zinc-300 transition-colors flex items-center gap-2">
              <Plus size={16} />
              <span>New Project</span>
            </button>
          </div>
        </header>

        {/* SCROLLABLE CONTENT */}
        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          {children || <DashboardHome />}
        </div>
      </main>
    </div>
  );
};

// Placeholder for the "Home" content to visualize the layout
const DashboardHome = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-medium tracking-tight mb-8 text-zinc-100">
        Overview
      </h1>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          {
            label: "Total Projects",
            value: "12",
            icon: <LayoutGrid className="text-zinc-500" />,
          },
          {
            label: "Credits Left",
            value: "450",
            icon: <CreditCard className="text-zinc-500" />,
          },
          {
            label: "Active Team",
            value: "3",
            icon: <User className="text-zinc-500" />,
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm text-zinc-500">{stat.label}</span>
              {stat.icon}
            </div>
            <div className="text-3xl font-semibold text-zinc-100">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Content Area */}
      <div className="rounded-2xl border border-zinc-800 border-dashed bg-zinc-900/10 h-96 flex flex-col items-center justify-center text-zinc-500">
        <div className="w-16 h-16 bg-zinc-900 rounded-2xl flex items-center justify-center mb-4 border border-zinc-800">
          <Plus className="text-zinc-400" />
        </div>
        <p>No active generations.</p>
        <button className="mt-4 text-sm text-zinc-300 hover:underline">
          Create your first thumbnail
        </button>
      </div>
    </div>
  );
};

export default DashboardLayout;
