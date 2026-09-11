import Features from './components/props/features'; // Pastikan path ini benar sesuai struktur folder Anda
import Navbar from './components/props/navbar'; // Sesuaikan path sesuai lokasi file navbar.jsx Anda

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800 font-sans selection:bg-[#004D98] selection:text-white">
      
      {/* Aksen Garis Blaugrana di Atas */}
      <div className="h-2 w-full bg-gradient-to-r from-[#004D98] via-[#A50044] to-[#004D98]"></div>

      {/* Navigasi (menggunakan komponen Navbar dengan state) */}
      <Navbar />

      {/* Bagian Hero */}
      <main className="max-w-5xl mx-auto px-6 mt-20 mb-20 flex flex-col items-center text-center">
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[1px] bg-[#EDBB00]"></span>
          <span className="text-xs uppercase tracking-[0.3em] text-[#004D98] font-bold">
            Universitas Klabat • Informatics
          </span>
          <span className="w-8 h-[1px] bg-[#EDBB00]"></span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
          Més que un <span className="italic text-[#A50044]">developer.</span>
        </h1>

        <h1 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">
          Visca <span className="italic text-[#A50044]">Barca.</span>
        </h1>
        
        <p className="max-w-2xl text-lg text-slate-600 mb-12 font-light leading-relaxed">
          Bringing the vision of a playmaker to digital health services and system architecture. Orchestrating seamless network topologies and developing intelligent AI models with precision and creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="px-10 py-4 bg-[#004D98] text-white text-xs uppercase tracking-[0.2em] shadow-lg shadow-blue-900/20 hover:bg-[#003876] transition-all duration-300">
            View Projects
          </button>
          <button className="px-10 py-4 bg-transparent border border-[#A50044] text-[#A50044] text-xs uppercase tracking-[0.2em] hover:bg-[#A50044] hover:text-white transition-all duration-300">
            Let's Connect
          </button>
        </div>
      </main>

      {/* === MEMANGGIL KOMPONEN FEATURES DARI FOTO === */}
      {/* Komponen Features ini sudah berisi .map() untuk me-render data mahasiswa */}
      <Features />
      {/* ============================================== */}

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 text-center bg-white">
        <div className="w-12 h-12 mx-auto mb-4 bg-slate-100 rounded-full flex items-center justify-center">
          <span className="text-xs font-bold text-[#004D98]">FCB</span>
        </div>
        <p className="text-[10px] text-slate-400 tracking-[0.2em] uppercase font-semibold">
          © 2026 Juan Messi Septhian Tulengkey. Visca el Barça.
        </p>
      </footer>
      
    </div>
  );
}
