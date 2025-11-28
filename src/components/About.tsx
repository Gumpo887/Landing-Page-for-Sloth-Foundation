import { Heart, Shield, Leaf, Users } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Heart,
      title: 'Amor por la Vida Silvestre',
      description: 'Cada perezoso que rescatamos recibe atención individualizada y cuidado amoroso'
    },
    {
      icon: Shield,
      title: 'Protección del Hábitat',
      description: 'Trabajamos para preservar y restaurar los bosques tropicales que son su hogar'
    },
    {
      icon: Leaf,
      title: 'Conservación Sostenible',
      description: 'Promovemos prácticas que aseguran el futuro de estas especies'
    },
    {
      icon: Users,
      title: 'Educación Comunitaria',
      description: 'Involucramos a las comunidades locales en esfuerzos de conservación'
    }
  ];

  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Quiénes Somos
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fundación Perezosos es una organización sin fines de lucro dedicada a la protección, 
            rescate y rehabilitación de perezosos en América Central. Desde 2015, hemos rescatado 
            más de 500 perezosos, ayudándolos a recuperarse y regresar a su hábitat natural.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-xl mb-3 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20 text-center">
          <div className="p-8 bg-emerald-50 rounded-2xl">
            <div className="text-4xl text-emerald-600 mb-2">500+</div>
            <div className="text-gray-700">Perezosos Rescatados</div>
          </div>
          <div className="p-8 bg-emerald-50 rounded-2xl">
            <div className="text-4xl text-emerald-600 mb-2">85%</div>
            <div className="text-gray-700">Tasa de Éxito</div>
          </div>
          <div className="p-8 bg-emerald-50 rounded-2xl">
            <div className="text-4xl text-emerald-600 mb-2">10</div>
            <div className="text-gray-700">Años de Experiencia</div>
          </div>
        </div>
      </div>
    </section>
  );
}
