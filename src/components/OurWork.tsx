import { ImageWithFallback } from './figma/ImageWithFallback';
import { Stethoscope, Home, GraduationCap } from 'lucide-react';

export function OurWork() {
  const workAreas = [
    {
      icon: Stethoscope,
      title: 'Rescate y Rehabilitación',
      description: 'Respondemos a llamadas de emergencia 24/7 para rescatar perezosos heridos, huérfanos o en peligro. Nuestro centro de rehabilitación cuenta con instalaciones especializadas donde los perezosos reciben atención veterinaria, nutrición adecuada y un ambiente seguro para recuperarse.',
      image: 'https://images.unsplash.com/photo-1727893252555-16c2074ae63f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG90aCUyMHRyZWUlMjBuYXR1cmV8ZW58MXx8fHwxNzY0MjQxMjYwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: Home,
      title: 'Reintroducción al Hábitat',
      description: 'Una vez rehabilitados, preparamos cuidadosamente a los perezosos para su retorno a la naturaleza. Monitoreamos cada liberación y seguimiento post-liberación para asegurar su adaptación exitosa. Trabajamos con reservas naturales para garantizar hábitats seguros.',
      image: 'https://images.unsplash.com/photo-1694835012663-15142cf9fac3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWluZm9yZXN0JTIwY2Fub3B5fGVufDF8fHx8MTc2NDIxMzU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      icon: GraduationCap,
      title: 'Educación y Concientización',
      description: 'Realizamos programas educativos en escuelas y comunidades para enseñar sobre la importancia de los perezosos en el ecosistema. Ofrecemos talleres de capacitación y recursos para ayudar a las personas a coexistir con la vida silvestre de manera armoniosa.',
      image: 'https://images.unsplash.com/photo-1649357067195-be0af95b9edc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkbGlmZSUyMHJlc2N1ZSUyMHRlYW18ZW58MXx8fHwxNzY0MjQxMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <section id="work" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Nuestro Trabajo
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestra misión abarca tres pilares fundamentales para la conservación de perezosos
          </p>
        </div>

        <div className="space-y-16">
          {workAreas.map((area, index) => {
            const Icon = area.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                <div className="flex-1">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                    <ImageWithFallback
                      src={area.image}
                      alt={area.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
                    <Icon className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl mb-4 text-gray-900">
                    {area.title}
                  </h3>
                  <p className="text-lg text-gray-600">
                    {area.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
