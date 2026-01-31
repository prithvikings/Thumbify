import React from "react";
import { Zap, CreditCard, Download } from "lucide-react";

export const BillingView = () => {
  const credits = { used: 450, total: 1000 };
  const usagePercentage = (credits.used / credits.total) * 100;

  const invoices = [
    { id: "INV-001", date: "Oct 01, 2023", amount: "$29.00", status: "Paid" },
    { id: "INV-002", date: "Sep 01, 2023", amount: "$29.00", status: "Paid" },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div>
        <h2 className="text-lg font-medium text-zinc-100">
          Infrastructure Usage
        </h2>
        <p className="text-sm text-zinc-500">Real-time capacity metering.</p>
      </div>

      <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-950/50 space-y-4">
        <div className="flex justify-between items-end">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-sm text-zinc-300">
              <Zap size={14} className="text-zinc-500" />
              <span>Generation Credits</span>
            </div>
            <p className="text-[10px] text-zinc-600 font-mono uppercase tracking-wider">
              Resets Nov 01
            </p>
          </div>
          <div className="text-right font-mono">
            <span className="text-xl text-zinc-100">{credits.used}</span>
            <span className="text-sm text-zinc-600">/{credits.total}</span>
          </div>
        </div>

        <div className="relative h-1.5 w-full bg-zinc-900 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-zinc-100 transition-all duration-1000"
            style={{ width: `${usagePercentage}%` }}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 relative overflow-hidden group">
          <div className="relative z-10 space-y-4">
            <div className="inline-flex items-center gap-2 px-2 py-1 rounded bg-zinc-900 border border-zinc-800 text-[10px] font-mono text-green-400">
              <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              ACTIVE
            </div>
            <div>
              <h3 className="text-2xl font-medium text-zinc-100">Pro Plan</h3>
              <p className="text-zinc-500 text-sm">$29/mo billed monthly</p>
            </div>
          </div>
        </div>

        <div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-zinc-900 rounded border border-zinc-800 text-zinc-400">
              <CreditCard size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-200">•••• 4242</p>
              <p className="text-xs text-zinc-500">Exp 12/24</p>
            </div>
          </div>
          <button className="text-xs bg-zinc-100 text-black px-3 py-1.5 rounded hover:bg-zinc-200 font-medium font-mono uppercase tracking-wide">
            Update
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 mb-3 ml-1">
          Recent Invoices
        </h3>
        <div className="border border-zinc-800 rounded-lg overflow-hidden">
          <table className="w-full text-left text-sm">
            <tbody className="divide-y divide-zinc-800 bg-zinc-950/30">
              {invoices.map((inv) => (
                <tr
                  key={inv.id}
                  className="group hover:bg-zinc-900/50 transition-colors"
                >
                  <td className="px-4 py-3 font-mono text-zinc-500 text-xs">
                    {inv.id}
                  </td>
                  <td className="px-4 py-3 text-zinc-300">{inv.date}</td>
                  <td className="px-4 py-3 text-zinc-300">{inv.amount}</td>
                  <td className="px-4 py-3 text-right">
                    <button className="text-zinc-500 hover:text-zinc-200">
                      <Download size={14} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
