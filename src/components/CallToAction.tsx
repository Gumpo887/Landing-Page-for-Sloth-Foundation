import { Heart, Users, HandHeart } from 'lucide-react';
import { useState } from 'react';

export function CallToAction() {
  const [email, setEmail] = useState('');

  function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get('email');
    console.log('Suscribir:', email);
    // Aquí: llamada fetch a tu API o servicio de newsletter
  }

  return (
    <section id="donate" className="py-20 px-6 md:px-12 bg-emerald-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-white">
            Únete a Nuestra Causa
          </h2>
          <p className="text-xl text-emerald-50 max-w-3xl mx-auto">
            Hay muchas formas de apoyar nuestro trabajo. Cada contribución hace la diferencia en la vida de un perezoso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Dona</h3>
            <p className="text-gray-600 mb-6">
              Tu donación ayuda a cubrir costos médicos, alimentación y cuidado de los perezosos rescatados.
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors w-full">
              Hacer una Donación
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Voluntariado</h3>
            <p className="text-gray-600 mb-6">
              Únete a nuestro equipo de voluntarios y participa directamente en el cuidado de los perezosos.
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors w-full">
              Ser Voluntario
            </button>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
              <HandHeart className="w-8 h-8 text-emerald-600" />
            </div>
            <h3 className="text-2xl mb-4 text-gray-900">Apadrina</h3>
            <p className="text-gray-600 mb-6">
              Apadrina un perezoso y recibe actualizaciones sobre su progreso y rehabilitación.
            </p>
            <button className="px-6 py-3 bg-emerald-500 text-white rounded-full hover:bg-emerald-600 transition-colors w-full">
              Apadrinar Ahora
            </button>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center">
          <h3 className="text-2xl mb-4 text-white">
            Suscríbete a Nuestro Boletín
          </h3>
          <p className="text-emerald-50 mb-6 max-w-2xl mx-auto">
            Recibe historias de rescate, actualizaciones sobre nuestro trabajo y consejos para ayudar a la conservación.
          </p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
          >
            <input
              type="email"
              name="email"
              placeholder="Tu correo electrónico"
              className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="px-8 py-3 bg-white text-emerald-600 rounded-full hover:bg-emerald-50 transition-colors"
            >
              Suscribirse
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
