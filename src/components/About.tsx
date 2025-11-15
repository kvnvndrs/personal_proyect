import { motion } from 'motion/react';
import { ShieldCheck, Code, Database, GitBranch, Award, Briefcase } from 'lucide-react';

export function About() {
  const skills = [
    {
      Icon: ShieldCheck,
      title: 'Seguridad de Datos',
      description: 'Implementación de medidas de protección, cifrado y cumplimiento normativo.',
    },
    {
      Icon: Code,
      title: 'DevSecOps',
      description: 'Integración de seguridad en el ciclo de vida del desarrollo.',
    },
    {
      Icon: Database,
      title: 'Gestión de Datos',
      description: 'Diseño y protección de arquitecturas de datos seguras y escalables.',
    },
    {
      Icon: GitBranch,
      title: 'CI/CD Seguro',
      description: 'Pipelines automatizados con controles de seguridad integrados.',
    },
  ];

  const experience = [
    {
      Icon: Briefcase,
      title: '5+ Años',
      subtitle: 'Experiencia',
    },
    {
      Icon: Award,
      title: '20+ Proyectos',
      subtitle: 'Completados',
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan-400 text-sm tracking-wider uppercase">Acerca de mí</span>
          <h2 className="mt-4 text-4xl sm:text-5xl text-white">
            Construyendo <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">sistemas seguros</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-300">
              Soy un ingeniero apasionado por la seguridad de la información y las prácticas DevSecOps, 
              con experiencia en la protección de sistemas críticos y datos sensibles.
            </p>
            <p className="text-lg text-slate-300">
              Mi enfoque se centra en integrar la seguridad desde las primeras etapas del desarrollo, 
              implementando controles automatizados y mejores prácticas que garantizan la protección 
              continua de las aplicaciones y la infraestructura.
            </p>
            <p className="text-lg text-slate-300">
              Especializado en compliance, gestión de vulnerabilidades, y la implementación de 
              arquitecturas de seguridad robustas en entornos cloud y on-premise.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 bg-slate-800/30 border border-slate-700/50 rounded-xl"
                >
                  <item.Icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <div className="text-2xl text-white mb-1">{item.title}</div>
                  <div className="text-slate-400">{item.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl backdrop-blur-sm hover:border-cyan-400/50 transition-colors group"
              >
                <div className="w-12 h-12 bg-cyan-400/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                  <skill.Icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl text-white mb-2">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
