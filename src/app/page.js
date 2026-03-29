"use client";
import React from 'react';

export default function AdminDashboard() {
  return (
    <div className="flex h-screen bg-slate-50 font-sans text-slate-900">
      {/* 侧边导航栏 - 天垠品牌 */}
      <aside className="w-72 bg-tianyin-blue text-white flex flex-col shadow-2xl">
        <div className="p-8 border-b border-white/10 text-center">
          <h1 className="text-2xl font-black tracking-tighter">TIANYIN</h1>
          <p className="text-[10px] opacity-60 uppercase tracking-widest mt-1">Management Portal</p>
        </div>
        
        <nav className="flex-1 px-4 py-8 space-y-2">
          <div className="text-[10px] px-6 text-white/40 uppercase font-bold mb-2">Main Menu</div>
          <button className="w-full text-left px-6 py-3 bg-white/10 rounded-xl font-bold">Navigation Setup</button>
          <button className="w-full text-left px-6 py-3 hover:bg-white/5 transition rounded-xl">Product Library</button>
          <button className="w-full text-left px-6 py-3 hover:bg-white/5 transition rounded-xl text-white/70 italic text-sm">PDF Asset Manager</button>
        </nav>

        <div className="p-6 border-t border-white/10 text-[10px] opacity-40 text-center">
          © 2026 TIANYIN TECHNOLOGY
        </div>
      </aside>

      {/* 主展示区 */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <header className="h-20 bg-white border-b px-10 flex justify-between items-center shadow-sm">
          <h2 className="text-lg font-bold text-slate-600 uppercase tracking-tight">Current Inventory</h2>
          <div className="flex items-center space-x-6">
            <div className="flex flex-col text-right">
              <span className="text-xs font-bold">Calvin Su</span>
              <span className="text-[10px] text-green-500 font-medium leading-none">● Online</span>
            </div>
            <button className="bg-tianyin-blue text-white px-6 py-2.5 rounded-full text-sm font-black hover:bg-blue-700 transition shadow-lg shadow-blue-200">
              + ADD PRODUCT
            </button>
          </div>
        </header>

        <section className="flex-1 p-10 overflow-y-auto">
          {/* 表格容器 */}
          <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-slate-400 text-[11px] uppercase tracking-widest border-b">
                  <th className="px-8 py-6 font-black">Model / Item</th>
                  <th className="px-8 py-6 font-black">Sub-Category</th>
                  <th className="px-8 py-6 font-black">Technical PDF</th>
                  <th className="px-8 py-6 text-right font-black">Operations</th>
                </tr>
              </thead>
              <tbody className="text-sm text-slate-600 divide-y divide-slate-50">
                <tr className="hover:bg-blue-50/20 transition group">
                  <td className="px-8 py-6 font-bold text-slate-800">145kV GIS Switchgear</td>
                  <td className="px-8 py-6 underline decoration-slate-200 underline-offset-4">Power Product / Switchgear</td>
                  <td className="px-8 py-6">
                    <span className="bg-blue-50 text-tianyin-blue px-3 py-1 rounded-full text-[11px] font-bold">elk_04_specs.pdf</span>
                  </td>
                  <td className="px-8 py-6 text-right space-x-4">
                    <button className="text-slate-400 hover:text-tianyin-blue font-bold">Edit</button>
                    <button className="text-slate-300 hover:text-red-500 font-bold">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}