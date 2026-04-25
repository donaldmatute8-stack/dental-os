import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 bg-white shadow-sm">
        <div className="text-2xl font-bold text-blue-600">Dental OS</div>
        <div className="hidden md:flex space-x-8 font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition">Características</a>
          <a href="#about" className="hover:text-blue-600 transition">Sobre Nosotros</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contacto</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
          Agendar Demo
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative px-8 py-20 md:py-32 text-center max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-6">
          Gestiona tu clínica dental <span className="text-blue-600">con inteligencia</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          La plataforma todo-en-uno que optimiza tus citas, expedientes clínicos y administración, permitiéndote enfocarte en lo que realmente importa: tus pacientes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-blue-700 transition shadow-lg shadow-blue-200">
            Comenzar Ahora
          </button>
          <button className="bg-white border border-slate-200 text-slate-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-slate-50 transition">
            Ver Planes
          </button>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="px-8 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Potencia tu flujo de trabajo</h2>
            <p className="text-slate-600 max-w-xl mx-auto">Herramientas diseñadas específicamente para el entorno odontológico moderno.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Agenda Inteligente', desc: 'Sincronización automática y recordatorios preventivos para reducir cancelaciones.', icon: '📅' },
              { title: 'Expedientes Digitales', desc: 'Historiales clínicos completos, odontogramas digitales y carga de radiografías.', icon: '🦷' },
              { title: 'Gestión Financiera', desc: 'Facturación automatizada, control de pagos y reportes de ingresos en tiempo real.', icon: '💰' },
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl border border-slate-100 bg-slate-50 hover:border-blue-300 transition-all group">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 bg-slate-900 text-slate-400 text-center">
        <div className="text-xl font-bold text-white mb-4">Dental OS</div>
        <p className="mb-8">© 2026 Dental OS. Todos los derechos reservados.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-white transition">Términos</a>
          <a href="#" className="hover:text-white transition">Privacidad</a>
        </div>
      </footer>
    </div>
  );
}
