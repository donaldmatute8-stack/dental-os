import React from 'react';
import { CheckCircle, Phone, Calendar, Shield, Zap, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">D</div>
          <span className="text-xl font-bold tracking-tight text-slate-800">Dental OS</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#features" className="hover:text-blue-600 transition-colors">Características</a>
          <a href="#about" className="hover:text-blue-600 transition-colors">Nosotros</a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">Contacto</a>
        </div>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg">
          Agendar Cita
        </button>
      </nav>

      {/* Hero Section */}
      <header className="relative px-6 py-20 max-w-7xl mx-auto w-full text-center md:text-left flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
            La Gestión de tu <span className="text-blue-600">Clínica Dental</span>, Simplificada.
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-2xl leading-relaxed">
            Dental OS es el sistema operativo integral diseñado para odontólogos modernos. Optimiza tu agenda, gestiona pacientes y haz crecer tu práctica con tecnología de vanguardia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-xl">
              Empezar Ahora
            </button>
            <button className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
              Ver Demo
            </button>
          </div>
        </div>
        <div className="flex-1 w-full max-w-md aspect-square bg-blue-100 rounded-3xl overflow-hidden relative shadow-2xl border-8 border-white">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-transparent"></div>
          <div className="flex items-center justify-center h-full text-blue-500">
             <span className="text-sm font-medium uppercase tracking-widest opacity-50">[Imagen de Dashboard Dental OS]</span>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Todo lo que necesitas en un solo lugar</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Elimina el papeleo y los errores de agenda. Una plataforma robusta para una atención excepcional.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Calendar className="w-6 h-6" />} 
              title="Agenda Inteligente" 
              description="Sincronización en tiempo real, recordatorios automáticos vía WhatsApp y gestión de huecos libres." 
            />
            <FeatureCard 
              icon={<Shield className="w-6 h-6" />} 
              title="Historial Clínico Digital" 
              description="Acceso instantáneo a radiografías, fichas médicas y evolución del paciente desde cualquier dispositivo." 
            />
            <FeatureCard 
              icon={<Zap className="w-6 h-6" />} 
              title="Pagos y Facturación" 
              description="Integración con pasarelas de pago, control de presupuestos y facturación electrónica automatizada." 
            />
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto w-full">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-12 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="flex-1 z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Únete a cientos de clínicas que ya están transformando su gestión.
            </h2>
            <div className="flex items-center gap-4 mb-8">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <span className="font-semibold text-blue-100">Calificación 4.9/5 basada en 200+ reseñas</span>
            </div>
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-lg">
              Solicitar Acceso Anticipado
            </button>
          </div>
          <div className="flex-1 z-10 grid grid-cols-2 gap-4">
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <p className="text-3xl font-bold">+40%</p>
              <p className="text-blue-100 text-sm">Aumento en eficiencia</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
              <p className="text-3xl font-bold">-30%</p>
              <p className="text-blue-100 text-sm">Cancelaciones de citas</p>
            </div>
            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 col-span-2">
              <p className="text-lg font-semibold">"La mejor inversión que hemos hecho este año."</p>
              <p className="text-blue-100 text-xs mt-2">— Dr. Alejandro Ruiz, Clínica Dental Centro</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 border-t border-slate-200 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm">D</div>
            <span className="text-lg font-bold text-slate-800">Dental OS</span>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 Dental OS. Todos los derechos reservados.
          </div>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-blue-600 transition-colors">Términos</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Privacidad</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-3xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-slate-600 leading-relaxed">{description}</p>
    </div>
  );
}
