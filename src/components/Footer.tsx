import { Heart, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-8 h-8 fill-emerald-400 text-emerald-400" />
              <span className="text-xl">Fundación Perezosos</span>
            </div>
            <p className="text-gray-400 mb-4">
              Dedicados al rescate, rehabilitación y conservación de perezosos desde 2015.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4">Sobre Nosotros</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-emerald-400 transition-colors">Quiénes Somos</a></li>
              <li><a href="#work" className="hover:text-emerald-400 transition-colors">Nuestro Trabajo</a></li>
              <li><a href="#team" className="hover:text-emerald-400 transition-colors">Equipo</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Historias de Éxito</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Involucrarte</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#donate" className="hover:text-emerald-400 transition-colors">Donar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Voluntariado</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Apadrinar</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>+506 2750 0000</li>
              <li>info@fundacionperezosos.org</li>
              <li>Limón, Costa Rica</li>
              <li><a href="#location" className="hover:text-emerald-400 transition-colors">Ver Ubicación</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Fundación Perezosos. Todos los derechos reservados.</p>
          <p className="mt-2">
            <a href="#" className="hover:text-emerald-400 transition-colors">Política de Privacidad</a>
            {' • '}
            <a href="#" className="hover:text-emerald-400 transition-colors">Términos de Uso</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
