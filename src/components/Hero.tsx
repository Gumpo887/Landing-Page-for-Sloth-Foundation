import { Heart, ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1656847496791-1211205cbc76?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90aCUyMHdpbGRsaWZlfGVufDF8fHx8MTc2NDI0MTIzNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Perezoso en su hábitat natural"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      <nav className="relative z-10 flex items-center justify-between px-6 py-6 md:px-12">
        <div className="flex items-center gap-2 text-white">
          <Heart className="w-8 h-8 fill-emerald-400 text-emerald-400" />
          <span className="text-xl">Fundación Perezosos</span>
        </div>
        <div className="hidden md:flex gap-8 text-white">
          <a href="#about" className="hover:text-emerald-400 transition-colors">Nosotros</a>
          <a href="#work" className="hover:text-emerald-400 transition-colors">Nuestro Trabajo</a>
          <a href="#team" className="hover:text-emerald-400 transition-colors">Equipo</a>
          <a href="#location" className="hover:text-emerald-400 transition-colors">Ubicación</a>
          <a href="#donate" className="hover:text-emerald-400 transition-colors">Donar</a>
        </div>
      </nav>

      <div className="relative z-10 h-[calc(100vh-88px)] flex flex-col items-center justify-center text-center px-6">
        <h1 className="text-white text-5xl md:text-7xl mb-6 max-w-4xl">
          Salvando Perezosos, Un Abrazo a la Vez
        </h1>
        <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl">
          Dedicados al rescate, rehabilitación y conservación de perezosos en su hábitat natural
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href="#donate" 
            className="px-8 py-4 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
          >
            Apoya Nuestra Causa
          </a>
          <button 
            onClick={scrollToAbout}
            className="px-8 py-4 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/20"
          >
            Conoce Más
          </button>
        </div>
        <button 
          onClick={scrollToAbout}
          className="absolute bottom-12 animate-bounce text-white"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
