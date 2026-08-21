'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BuildPlanner() {
  const [vigor, setVigor] = useState(10);
  const [mente, setMente] = useState(10);
  const [aguante, setAguante] = useState(10);
  const [fuerza, setFuerza] = useState(10);
  const [destreza, setDestreza] = useState(10);

  const nivelTotal = vigor + mente + aguante + fuerza + destreza - 40;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-6">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="text-amber-500 text-sm hover:underline mb-6 inline-block">
          ← Volver a GraceHub
        </Link>
        <h1 className="text-3xl font-bold mb-2 text-slate-100">Elden Ring Build Planner</h1>
        <p className="text-slate-400 mb-8 text-sm">Ajusta tus atributos para calcular tu nivel relativo de personaje.</p>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 shadow-xl space-y-6">
          <div className="flex justify-between items-center border-b border-slate-800 pb-4">
            <span className="text-lg font-semibold text-slate-300">Nivel Estimado:</span>
            <span className="text-3xl font-extrabold text-amber-500">{nivelTotal > 0 ? nivelTotal : 1}</span>
          </div>

          <div className="space-y-4">
            {[
              { label: 'Vigor', value: vigor, setter: setVigor },
              { label: 'Mente', value: mente, setter: setMente },
              { label: 'Aguante', value: aguante, setter: setAguante },
              { label: 'Fuerza', value: fuerza, setter: setFuerza },
              { label: 'Destreza', value: destreza, setter: setDestreza },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center justify-between bg-slate-950 p-3 rounded-lg border border-slate-800">
                <span className="font-medium text-slate-300">{stat.label}</span>
                <div className="flex items-center gap-3">
                  <button 
                    onClick={() => stat.setter(Math.max(10, stat.value - 1))}
                    className="w-8 h-8 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold transition-colors"
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-mono text-amber-400 font-bold">{stat.value}</span>
                  <button 
                    onClick={() => stat.setter(Math.min(99, stat.value + 1))}
                    className="w-8 h-8 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded font-bold transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}