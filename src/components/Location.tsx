import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Dónde Trabajamos
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro centro de rescate y rehabilitación está ubicado en el corazón del bosque tropical
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="aspect-video rounded-2xl overflow-hidden bg-gray-200 mb-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251637.95196238213!2d-84.19453182031252!3d9.748916999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0e342c50d15b9%3A0xe6746a6a9f9c3e3!2sCosta%20Rica!5e0!3m2!1sen!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación del centro de rescate"
              ></iframe>
            </div>
            
            <div className="bg-emerald-50 rounded-2xl p-6">
              <h3 className="text-xl mb-4 text-gray-900">Áreas de Operación</h3>
              <p className="text-gray-600 mb-4">
                Nuestro centro principal está en la provincia de Limón, Costa Rica, rodeado de 50 hectáreas 
                de bosque tropical protegido. Además, colaboramos con reservas naturales y comunidades en:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Parque Nacional Tortuguero</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Reserva Biológica Hitoy Cerere</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Comunidades indígenas de la región Caribe</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1">•</span>
                  <span>Corredor Biológico del Caribe</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-2xl p-6">
              <h3 className="text-2xl mb-6 text-gray-900">Información de Contacto</h3>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Dirección</div>
                    <p className="text-gray-600">
                      Ruta 32, Km 87<br />
                      Limón, Costa Rica<br />
                      Apartado Postal 7050-1000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Teléfono</div>
                    <p className="text-gray-600">
                      +506 2750 0000<br />
                      Emergencias 24/7: +506 8888 0000
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Email</div>
                    <p className="text-gray-600">
                      info@fundacionperezosos.org<br />
                      rescate@fundacionperezosos.org
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div>
                    <div className="text-gray-900 mb-1">Horario de Visitas</div>
                    <p className="text-gray-600">
                      Lunes a Viernes: 9:00 AM - 4:00 PM<br />
                      Sábados: 9:00 AM - 2:00 PM<br />
                      <span className="text-sm italic">*Visitas con cita previa</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
              <h4 className="text-lg mb-2 text-gray-900">¿Encontraste un perezoso en peligro?</h4>
              <p className="text-gray-600 mb-4">
                Si encuentras un perezoso herido, huérfano o en peligro, llama a nuestra línea de emergencia inmediatamente. 
                Nuestro equipo está disponible 24/7 para responder a llamadas de rescate.
              </p>
              <a 
                href="tel:+50688880000"
                className="inline-block px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors"
              >
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
