"use client";
import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase/client';

export default function FullAdminPanel() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [view, setView] = useState('products'); // 'products' 或 'categories'

  // 表单状态
  const [newCat, setNewCat] = useState({ name: '', parent_id: null });
  const [newProd, setNewProd] = useState({ name: '', category_id: '', brief: '', pdf: '' });

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const { data: cats } = await supabase.from('product_categories').select('*').order('sort_order');
    const { data: prods } = await supabase.from('products').select(`*, product_categories(name)`);
    setCategories(cats || []);
    setProducts(prods || []);
  }

  // 逻辑：添加分类
  const addCategory = async (e) => {
    e.preventDefault();
    const { error } = await supabase.from('product_categories').insert([newCat]);
    if (!error) { setNewCat({ name: '', parent_id: null }); loadData(); alert("Category Added!"); }
  };

  // 逻辑：添加产品
  const addProduct = async (e) => {
    e.preventDefault();
    if (!newProd.category_id) return alert("Please select a category first!");
    const { error } = await supabase.from('products').insert([{
      name: newProd.name,
      category_id: newProd.category_id,
      brief_intro: newProd.brief,
      pdf_url: newProd.pdf
    }]);
    if (!error) { setNewProd({ name: '', category_id: '', brief: '', pdf: '' }); loadData(); alert("Product Saved!"); }
  };

  return (
    <div className="flex h-screen bg-[#f8fafc]">
      {/* 侧边栏 */}
      <aside className="w-72 bg-tianyin-blue text-white p-8 flex flex-col shadow-2xl">
        <h1 className="text-2xl font-black italic mb-10">TIANYIN ADMIN</h1>
        <nav className="space-y-4 flex-1">
          <button onClick={() => setView('categories')} className={`w-full text-left p-3 rounded-lg font-bold transition ${view === 'categories' ? 'bg-white/20' : 'hover:bg-white/5'}`}>📁 Category Setup</button>
          <button onClick={() => setView('products')} className={`w-full text-left p-3 rounded-lg font-bold transition ${view === 'products' ? 'bg-white/20' : 'hover:bg-white/5'}`}>🛡️ Product Library</button>
        </nav>
        <div className="text-[10px] opacity-40">System Version 2026.03</div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto p-10">
        
        {/* 情况 1：分类管理界面 */}
        {view === 'categories' && (
          <div className="max-w-4xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Manage Categories</h2>
            <form onSubmit={addCategory} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex gap-4 mb-8">
              <input value={newCat.name} onChange={e => setNewCat({...newCat, name: e.target.value})} placeholder="New Category Name (e.g. Switchgear)" className="flex-1 border p-3 rounded-xl outline-tianyin-blue" required />
              <select onChange={e => setNewCat({...newCat, parent_id: e.target.value || null})} className="border p-3 rounded-xl bg-slate-50">
                <option value="">Set as Main Menu</option>
                {categories.filter(c => !c.parent_id).map(c => <option key={c.id} value={c.id}>Under: {c.name}</option>)}
              </select>
              <button className="bg-tianyin-blue text-white px-8 py-3 rounded-xl font-bold">+ Create</button>
            </form>
            <div className="grid grid-cols-2 gap-4">
               {categories.map(c => (
                 <div key={c.id} className="bg-white p-4 rounded-xl border border-slate-100 flex justify-between items-center">
                   <span className={c.parent_id ? "ml-6 text-slate-500" : "font-black text-tianyin-blue"}>{c.parent_id ? "↳ " : "■ "}{c.name}</span>
                   <button className="text-xs text-red-400 hover:text-red-600 font-bold uppercase">Delete</button>
                 </div>
               ))}
            </div>
          </div>
        )}

        {/* 情况 2：产品管理界面 */}
        {view === 'products' && (
          <div className="max-w-5xl">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">Product Inventory</h2>
            {/* 添加产品表单 */}
            <form onSubmit={addProduct} className="bg-white p-8 rounded-3xl shadow-lg border border-slate-200 grid grid-cols-2 gap-4 mb-10">
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400">MODEL NAME</label>
                <input value={newProd.name} onChange={e => setNewProd({...newProd, name: e.target.value})} placeholder="e.g. 145kV GIS" className="border p-3 rounded-xl outline-tianyin-blue" required />
              </div>
              <div className="col-span-1 flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400">ASSIGN TO CATEGORY</label>
                <select value={newProd.category_id} onChange={e => setNewProd({...newProd, category_id: e.target.value})} className="border p-3 rounded-xl bg-slate-50" required>
                  <option value="">-- Choose Category --</option>
                  {categories.map(c => <option key={c.id} value={c.id}>{c.name}</option>)}
                </select>
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400">BRIEF INTRODUCTION</label>
                <textarea value={newProd.brief} onChange={e => setNewProd({...newProd, brief: e.target.value})} placeholder="Describe features..." className="border p-3 rounded-xl h-24 outline-tianyin-blue" />
              </div>
              <div className="col-span-2 flex flex-col gap-2">
                <label className="text-xs font-black text-slate-400">PDF CATALOGUE URL (OSS LINK)</label>
                <input value={newProd.pdf} onChange={e => setNewProd({...newProd, pdf: e.target.value})} placeholder="https://oss-tianyin.com/spec.pdf" className="border p-3 rounded-xl outline-tianyin-blue" />
              </div>
              <button className="col-span-2 bg-tianyin-blue text-white py-4 rounded-xl font-black shadow-lg shadow-blue-200 mt-2 hover:bg-blue-700 transition">+ SAVE TO GLOBAL PORTFOLIO</button>
            </form>

            {/* 产品列表 */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-slate-50 text-[10px] uppercase font-black text-slate-400 border-b">
                  <tr><th className="p-5">Product Model</th><th className="p-5">Category</th><th className="p-5">PDF Status</th></tr>
                </thead>
                <tbody className="text-sm">
                  {products.map(p => (
                    <tr key={p.id} className="border-b border-slate-50 hover:bg-slate-50 transition">
                      <td className="p-5 font-bold">{p.name}</td>
                      <td className="p-5 text-slate-500 font-medium">{p.product_categories?.name || 'Unassigned'}</td>
                      <td className="p-5"><span className={`px-3 py-1 rounded-full text-[10px] font-black ${p.pdf_url ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'}`}>{p.pdf_url ? 'LINK READY' : 'NO PDF'}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}