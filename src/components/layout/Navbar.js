"use client";
import React, { useState } from 'react';

const menuData = [
  {
    title: "Products & Solution",
    subMenus: [
      {
        head: "Power Product",
        items: ["Switchgear", "Apparatus", "Distribution Automation", "Transformer", "Components: Insulators, Capacitor, CaA, CT/VT"]
      },
      {
        head: "Solutions",
        items: ["Distribution Automation", "Digital: Arc detection", "Prefabricated GIS IGA", "E-house"]
      },
      { head: "Industry Product", items: [] },
      { head: "Automation Product", items: [] },
      { head: "Special Tool", items: [] }
    ]
  },
  { title: "Service & Consulting", subMenus: [] },
  { title: "Markets", subMenus: [] },
  { title: "About Us", subMenus: [] },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-slate-100 shadow-sm font-sans" 
         onMouseLeave={() => setActiveMenu(null)}>
      
      {/* 主导航条 */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-2xl font-black text-tianyin-blue tracking-tighter italic">TIANYIN</span>
          <div className="hidden lg:flex ml-12 space-x-8">
            {menuData.map((menu, idx) => (
              <div 
                key={idx} 
                className="relative h-20 flex items-center cursor-pointer group"
                onMouseEnter={() => setActiveMenu(menu.title)}
              >
                <span className={`text-sm font-bold uppercase tracking-tight transition-colors ${activeMenu === menu.title ? 'text-tianyin-blue' : 'text-slate-600'}`}>
                  {menu.title}
                </span>
                {/* 底部蓝条指示器 */}
                <div className={`absolute bottom-0 left-0 w-full h-1 bg-tianyin-blue transition-transform duration-300 ${activeMenu === menu.title ? 'scale-x-100' : 'scale-x-0'}`}></div>
              </div>
            ))}
          </div>
        </div>

        <button className="bg-tianyin-blue text-white px-7 py-2.5 rounded-full text-xs font-black hover:bg-tianyin-dark transition shadow-lg shadow-blue-100">
          CONTACT US
        </button>
      </div>

      {/* 巨型子菜单面板 (Mega Menu) */}
      <div className={`absolute left-0 w-full bg-slate-50 border-b border-slate-200 transition-all duration-300 overflow-hidden ${activeMenu === "Products & Solution" ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-10 py-12 grid grid-cols-5 gap-8">
          {menuData[0].subMenus.map((sub, sIdx) => (
            <div key={sIdx} className="space-y-4">
              <h4 className="text-xs font-black text-tianyin-blue uppercase tracking-[0.2em] border-b pb-2 border-slate-200">
                {sub.head}
              </h4>
              <ul className="space-y-2">
                {sub.items.map((item, iIdx) => (
                  <li key={iIdx} className="text-[13px] text-slate-500 hover:text-tianyin-blue cursor-pointer transition font-medium">
                    {item}
                  </li>
                ))}
                {sub.items.length === 0 && <li className="text-[11px] text-slate-300 italic">View Categories →</li>}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}