import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Header / Navbar */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wider text-amber-500 hover:text-amber-400 transition-colors">
            <span className="text-2xl">⚡</span> GRACEHUB
          </Link>
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
            <Link href="#elden-ring" className="hover:text-amber-400 transition-colors">Elden Ring</Link>
            <Link href="/herramientas/build-planner" className="hover:text-amber-400 transition-colors">Build Planner</Link>
            <Link href="/proximamente" className="hover:text-amber-400 transition-colors">Futuros Juegos</Link>
          </nav>
          <div>
            <Link href="/herramientas/build-planner" className="bg-amber-600 hover:bg-amber-500 text-slate-950 font-semibold px-4 py-2 rounded-lg text-sm transition-all shadow-lg shadow-amber-600/20">
              Crear Build
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden border-b border-slate-800/50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950 -z-10" />
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-4 border border-amber-500/20">
            Base de datos interactiva & Optimización
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-100 mb-6">
            El centro definitivo para tus aventuras <span className="text-amber-500">Soulslike</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Explora bases de datos estructuradas, planifica builds optimizadas con enlaces compartibles y descubre guías técnicas diseñadas para la comunidad.
          </p>

          {/* Búsqueda Global MVP */}
          <div className="max-w-xl mx-auto relative mb-8">
            <input 
              type="text" 
              placeholder="Buscar armas, jefes, talismanes o cenizas de guerra..." 
              className="w-full bg-slate-900/90 border border-slate-700/80 rounded-xl px-5 py-4 pl-12 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-amber-500/80 focus:ring-2 focus:ring-amber-500/20 shadow-2xl transition-all"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </section>

      {/* Sección Elden Ring Core Hub */}
      <section id="elden-ring" className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
              <span className="text-amber-500">Elden Ring</span> Base de Datos
            </h2>
            <p className="text-slate-400 text-sm mt-1">Herramientas y catálogos optimizados para Las Tierras Intermedias.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              ⚔️
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">Build Planner</h3>
            <p className="text-slate-400 text-sm mb-4">Calcula estadísticas, niveles, escalado de atributos e inventario completo con URL dinámica.</p>
            <Link href="/herramientas/build-planner" className="text-amber-500 font-semibold text-sm hover:underline flex items-center gap-1">
              Abrir herramienta →
            </Link>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              🛡️
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">Catálogo de Armas y Objetos</h3>
            <p className="text-slate-400 text-sm mb-4">Filtra por requisitos de stats, tipos de daño físico/mágico y afinidades de ceniza de guerra.</p>
            <span className="text-slate-500 font-semibold text-sm">En actualización continua</span>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-amber-500/40 transition-all hover:-translate-y-1 group">
            <div className="w-12 h-12 bg-amber-500/10 rounded-lg flex items-center justify-center text-amber-500 mb-4 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
              👑
            </div>
            <h3 className="text-lg font-bold text-slate-200 mb-2">Jefes & Rutas de Mapa</h3>
            <p className="text-slate-400 text-sm mb-4">Debilidades elementales, drops clave y secuenciación recomendada para completar el juego.</p>
            <span className="text-slate-500 font-semibold text-sm">En actualización continua</span>
          </div>
        </div>
      </section>

      {/* Sección Futuros Juegos (Pipeline Multijuego) */}
      <section className="bg-slate-900/40 border-t border-slate-800/80 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-slate-100">Próximas Integraciones</h2>
            <p className="text-slate-400 text-sm mt-2">Arquitectura preparada para soportar la franquicia completa sin reestructuraciones.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Dark Souls III', 'Bloodborne', 'Sekiro', 'Lies of P'].map((game) => (
              <div key={game} className="bg-slate-950 border border-slate-800/80 rounded-lg p-4 opacity-75 hover:opacity-100 transition-opacity">
                <p className="font-semibold text-slate-300 text-sm">{game}</p>
                <span className="text-xs text-amber-500/80 font-mono mt-1 block">Próximamente</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-xs text-slate-500">
        <p>© GraceHub MVP — Plataforma no oficial de consulta para juegos Soulslike.</p>
      </footer>
    </main>
  );
}