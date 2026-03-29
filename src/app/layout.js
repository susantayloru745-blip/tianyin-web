import "./globals.css";
import Navbar from "@/components/layout/Navbar"; // 引入新组件

export const metadata = {
  title: "TianYin Technology | Global Power & Energy Solutions",
  description: "Specializing in High Voltage GIS, VCB, and Switchgear solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-white text-slate-900">
        <Navbar /> {/* 使用新导航栏 */}
        <main className="pt-20">
          {children}
        </main>
        {/* 页脚保持不变... */}
        <footer className="bg-slate-900 text-white py-20 px-6">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm">
            <div><h3 className="text-xl font-black mb-6">TIANYIN</h3><p className="opacity-50 text-xs">Empowering global infrastructure.</p></div>
            <div><h4 className="font-bold mb-6 text-tianyin-blue uppercase">Headquarters</h4><p className="opacity-60">Xiamen / Hong Kong</p></div>
            <div><h4 className="font-bold mb-6 text-tianyin-blue uppercase">Contact</h4><p className="font-bold">calvin.su@xmtytech.com</p></div>
          </div>
        </footer>
      </body>
    </html>
  );
}