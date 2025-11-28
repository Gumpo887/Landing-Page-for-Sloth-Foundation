import { Mail, Linkedin } from 'lucide-react';

export function Team() {
  const teamMembers = [
    {
      name: 'Dra. María Rodríguez',
      role: 'Directora Fundadora y Veterinaria',
      bio: 'Veterinaria especializada en fauna silvestre con 15 años de experiencia. Pionera en técnicas de rehabilitación de perezosos en América Central.',
      email: 'maria@fundacionperezosos.org',
      initials: 'MR',
      color: 'bg-emerald-500'
    },
    {
      name: 'Dr. Carlos Méndez',
      role: 'Director de Conservación',
      bio: 'Biólogo especializado en ecología tropical. Lidera nuestros programas de reintroducción y monitoreo de hábitat.',
      email: 'carlos@fundacionperezosos.org',
      initials: 'CM',
      color: 'bg-teal-500'
    },
    {
      name: 'Ana Sofía Torres',
      role: 'Coordinadora de Rescate',
      bio: 'Experta en manejo de fauna con certificación en primeros auxilios para animales silvestres. Coordina todas las operaciones de rescate de emergencia.',
      email: 'ana@fundacionperezosos.org',
      initials: 'AT',
      color: 'bg-green-500'
    },
    {
      name: 'Dr. Luis Hernández',
      role: 'Veterinario Residente',
      bio: 'Especialista en medicina de animales exóticos. Responsable del cuidado médico diario de los perezosos en rehabilitación.',
      email: 'luis@fundacionperezosos.org',
      initials: 'LH',
      color: 'bg-lime-500'
    },
    {
      name: 'Patricia Vargas',
      role: 'Coordinadora de Educación',
      bio: 'Educadora ambiental dedicada a crear conciencia sobre la conservación. Desarrolla programas escolares y comunitarios.',
      email: 'patricia@fundacionperezosos.org',
      initials: 'PV',
      color: 'bg-emerald-600'
    },
    {
      name: 'Jorge Santamaría',
      role: 'Gerente de Operaciones',
      bio: 'Administrador con experiencia en ONGs. Gestiona las operaciones diarias y la logística del centro de rescate.',
      email: 'jorge@fundacionperezosos.org',
      initials: 'JS',
      color: 'bg-teal-600'
    }
  ];

  return (
    <section id="team" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6 text-gray-900">
            Nuestro Equipo
          </h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un grupo apasionado de profesionales dedicados a hacer la diferencia
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-shadow">
              <div className={`w-20 h-20 ${member.color} rounded-full flex items-center justify-center text-white text-2xl mb-4`}>
                {member.initials}
              </div>
              <h3 className="text-xl mb-1 text-gray-900">
                {member.name}
              </h3>
              <div className="text-emerald-600 mb-4">
                {member.role}
              </div>
              <p className="text-gray-600 mb-4">
                {member.bio}
              </p>
              <div className="flex gap-3 pt-4 border-t border-gray-100">
                <a 
                  href={`mailto:${member.email}`}
                  className="text-gray-400 hover:text-emerald-600 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="text-gray-400 hover:text-emerald-600 transition-colors"
                  aria-label={`LinkedIn ${member.name}`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
