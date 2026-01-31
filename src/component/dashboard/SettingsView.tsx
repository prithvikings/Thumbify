import React, { useState } from "react";
import { User, CreditCard, Users, Shield } from "lucide-react";
import { BillingView } from "./BillingView";

export const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("Profile");
  const tabs = [
    { name: "Profile", icon: <User size={14} /> },
    { name: "Billing", icon: <CreditCard size={14} /> },
    { name: "Team", icon: <Users size={14} /> },
    { name: "Security", icon: <Shield size={14} /> },
  ];

  return (
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-12 h-full animate-in fade-in slide-in-from-bottom-2 duration-500">
      <nav className="w-full lg:w-48 flex-shrink-0 space-y-1">
        {tabs.map((tab) => (
          <button
            key={tab.name}
            onClick={() => setActiveTab(tab.name)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === tab.name
                ? "bg-zinc-900 text-zinc-100 shadow-[inset_0px_1px_0px_0px_rgba(255,255,255,0.05)]"
                : "text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900/50"
            }`}
          >
            {tab.icon}
            {tab.name}
          </button>
        ))}
      </nav>

      <div className="flex-1 min-w-0">
        {activeTab === "Billing" && <BillingView />}

        {activeTab === "Profile" && (
          <div className="space-y-6 max-w-xl">
            <div className="pb-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium text-zinc-100">
                Public Profile
              </h2>
              <p className="text-sm text-zinc-500">
                Manage how you appear to others.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center text-zinc-400 font-medium">
                JD
              </div>
              <button className="px-3 py-1.5 bg-zinc-100 text-black text-xs font-bold rounded hover:bg-zinc-300 transition-colors">
                Change Avatar
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">
                  Username
                </label>
                <input
                  type="text"
                  defaultValue="johndoe"
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-700 transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-medium text-zinc-400">Bio</label>
                <textarea
                  rows={3}
                  defaultValue="Content creator."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-700 transition-colors"
                />
              </div>
            </div>
          </div>
        )}

        {/* TEAM (Placeholder) */}
        {activeTab === "Team" && (
          <div className="max-w-xl border border-zinc-800 border-dashed rounded-xl bg-zinc-900/20 p-12 flex flex-col items-center justify-center text-center space-y-4">
            <div className="p-4 bg-zinc-900 rounded-full border border-zinc-800">
              <Users className="text-zinc-500" size={24} />
            </div>
            <div>
              <h2 className="text-lg font-medium text-zinc-200">
                Team Collaboration
              </h2>
              <p className="text-sm text-zinc-500 mt-1 max-w-xs mx-auto">
                Inviting members and managing roles is coming in the next
                update.
              </p>
            </div>
            <button
              disabled
              className="px-4 py-2 bg-zinc-800 text-zinc-500 text-xs font-medium rounded cursor-not-allowed"
            >
              Invite Members (Coming Soon)
            </button>
          </div>
        )}

        {/* SECURITY */}
        {activeTab === "Security" && (
          <div className="space-y-8 max-w-xl">
            <div className="pb-4 border-b border-zinc-800">
              <h2 className="text-lg font-medium text-zinc-100">Security</h2>
              <p className="text-sm text-zinc-500">
                Protect your account and data.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-zinc-200">Password</p>
                  <p className="text-xs text-zinc-500">
                    Last changed 3 months ago
                  </p>
                </div>
                <button className="text-xs border border-zinc-800 px-3 py-1.5 rounded hover:bg-zinc-900 text-zinc-300 transition-colors">
                  Change Password
                </button>
              </div>

              <div className="pt-6 border-t border-zinc-800 flex items-start justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-zinc-200 flex items-center gap-2">
                    Two-Factor Authentication
                    <span className="px-1.5 py-0.5 bg-green-900/30 text-green-400 text-[10px] rounded border border-green-900/50">
                      ENABLED
                    </span>
                  </p>
                  <p className="text-xs text-zinc-500">
                    Secure your account with 2FA.
                  </p>
                </div>
                <button className="text-xs border border-zinc-800 px-3 py-1.5 rounded hover:bg-zinc-900 text-red-400 hover:text-red-300 transition-colors">
                  Disable
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
