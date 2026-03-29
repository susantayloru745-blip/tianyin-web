import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - 主视觉 */}
      <section className="relative h-[85vh] bg-slate-900 flex items-center overflow-hidden">
        {/* 背景图建议后期换成真实的变电站工程图 */}
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1600&q=80" 
            className="w-full h-full object-cover"
            alt="Power Grid"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-8">
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight uppercase">
              Proven Power<br />
              <span className="text-tianyin-blue italic">Industry Heritage.</span>
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed font-light">
              Leveraging decades of experience with ABB, Hitachi Energy, and Siemens to provide 
              world-class GIS, VCB, and Distribution Automation solutions from China to the World.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-tianyin-blue text-white px-10 py-4 font-black rounded-sm hover:bg-white hover:text-tianyin-blue transition-all">
                EXPLORE SOLUTIONS
              </button>
              <button className="border border-white/30 text-white px-10 py-4 font-black rounded-sm hover:bg-white/10 transition-all">
                DOWNLOAD CATALOGUE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 产品快速导航预览 */}
      <section id="products" className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h2 className="text-tianyin-blue font-black text-sm uppercase tracking-[0.3em] mb-4 text-center md:text-left">Our Portfolio</h2>
              <p className="text-4xl font-bold text-slate-800">Advanced Power Infrastructure</p>
            </div>
            <p className="text-slate-500 max-w-sm">Reliable, high-performance equipment tested under the most rigorous global standards.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-slate-200 border border-slate-200">
            {/* 产品占位卡片 */}
            {[
              {title: "GIS Switchgear", sub: "145kV - 1100kV Gas Insulated"},
              {title: "Vacuum Breakers", sub: "Indoor & Outdoor VCBs"},
              {title: "Distribution Automation", sub: "Smart Grid RTU & Controls"}
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-12 hover:bg-tianyin-blue hover:text-white transition-all group cursor-pointer">
                <div className="text-tianyin-blue group-hover:text-white mb-8 text-4xl font-light">0{idx+1}</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">{item.title}</h3>
                <p className="opacity-60 mb-10 text-sm font-medium">{item.sub}</p>
                <div className="font-black text-xs tracking-widest uppercase border-b-2 border-current inline-block pb-1">View Details →</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}