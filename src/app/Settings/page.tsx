"use client";

import React, { useState } from "react";
import { User, CreditCard, Users, Shield, Check, Trash2 } from "lucide-react";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  const tabs = [
    { name: "Profile", icon: <User size={16} /> },
    { name: "Billing", icon: <CreditCard size={16} /> },
    { name: "Team", icon: <Users size={16} /> },
    { name: "Security", icon: <Shield size={16} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto py-12 px-6 lg:px-8 bg-black min-h-screen text-zinc-100 font-sans">
      <div className="mb-10">
        <h1 className="text-3xl font-medium tracking-tight">Settings</h1>
        <p className="text-zinc-500 mt-2">
          Manage your account and preferences.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* SETTINGS SIDEBAR */}
        <nav className="w-full lg:w-64 flex-shrink-0 space-y-1">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.name
                  ? "bg-zinc-900 text-zinc-100"
                  : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </nav>

        {/* SETTINGS CONTENT */}
        <div className="flex-1 max-w-2xl space-y-12">
          {/* Section: Public Profile */}
          <section className="space-y-6">
            <div className="pb-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium">Public Profile</h2>
              <p className="text-sm text-zinc-500">
                This will be displayed on your shared projects.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-20 w-20 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-xl font-medium text-zinc-400">
                JD
              </div>
              <div className="space-y-2">
                <button className="px-4 py-2 bg-zinc-100 text-zinc-950 rounded-md text-sm font-medium hover:bg-zinc-200 transition-colors">
                  Change Avatar
                </button>
                <p className="text-xs text-zinc-600">
                  JPG, GIF or PNG. 1MB max.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">
                  Username
                </label>
                <div className="flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-zinc-800 bg-zinc-900 text-zinc-500 text-sm">
                    thumbai.com/
                  </span>
                  <input
                    type="text"
                    defaultValue="johndoe"
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Content creator and filmmaker."
                  className="block w-full px-3 py-2 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-100 text-sm focus:outline-none focus:ring-1 focus:ring-zinc-700 focus:border-zinc-700"
                />
                <p className="text-xs text-zinc-500">
                  Brief description for your profile.
                </p>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-zinc-100 text-zinc-950 rounded-md text-sm font-medium hover:bg-zinc-300 transition-colors">
                <Check size={16} />
                Save Changes
              </button>
            </div>
          </section>

          {/* Section: Danger Zone */}
          <section className="space-y-6 pt-10 border-t border-zinc-800">
            <div className="pb-4">
              <h2 className="text-lg font-medium text-red-500">Danger Zone</h2>
              <p className="text-sm text-zinc-500">
                Irreversible actions for your account.
              </p>
            </div>

            <div className="border border-red-900/30 rounded-lg p-6 bg-red-950/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-200">
                  Delete Account
                </h3>
                <p className="text-sm text-zinc-500 mt-1">
                  Permanently delete your account and all of your content.
                </p>
              </div>
              <button className="px-4 py-2 bg-red-500/10 text-red-500 border border-red-500/20 rounded-md text-sm font-medium hover:bg-red-500/20 transition-colors">
                Delete Account
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Settings;
