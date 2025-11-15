import { motion } from 'motion/react';
import { Shield, Lock, Eye, Server, ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      Icon: Shield,
      title: 'Security Audit Platform',
      description: 'Plataforma automatizada para auditorías de seguridad con análisis de vulnerabilidades en tiempo real y generación de informes de compliance.',
      tags: ['Python', 'Docker', 'Kubernetes', 'AWS'],
      color: 'from-cyan-500 to-blue-500',
    },
    {
      Icon: Lock,
      title: 'Zero Trust Network',
      description: 'Implementación de arquitectura Zero Trust con autenticación multifactor, microsegmentación y monitoreo continuo de accesos.',
      tags: ['Terraform', 'Azure', 'Identity Management', 'SIEM'],
      color: 'from-blue-500 to-purple-500',
    },
    {
      Icon: Server,
      title: 'DevSecOps Pipeline',
      description: 'Pipeline CI/CD completo con análisis de seguridad estático y dinámico, escaneo de contenedores y políticas de compliance automatizadas.',
      tags: ['Jenkins', 'GitLab CI', 'SonarQube', 'Trivy'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      Icon: Eye,
      title: 'Threat Detection System',
      description: 'Sistema de detección de amenazas basado en machine learning para identificar patrones anómalos y respuesta automatizada a incidentes.',
      tags: ['Python', 'ELK Stack', 'Machine Learning', 'API'],
      color: 'from-pink-500 to-red-500',
    },
    {
      Icon: Lock,
      title: 'Data Encryption Service',
      description: 'Servicio de cifrado de extremo a extremo para datos en reposo y en tránsito, con gestión de claves y rotación automatizada.',
      tags: ['Go', 'Vault', 'HSM', 'Cryptography'],
      color: 'from-cyan-500 to-teal-500',
    },
    {
      Icon: Shield,
      title: 'Compliance Dashboard',
      description: 'Dashboard centralizado para monitoreo de compliance con GDPR, ISO 27001 y SOC 2, con alertas en tiempo real y reportes automatizados.',
      tags: ['React', 'Node.js', 'PostgreSQL', 'GraphQL'],
      color: 'from-teal-500 to-green-500',
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
          <span className="text-cyan-400 text-sm tracking-wider uppercase">Proyectos</span>
          <h2 className="mt-4 text-4xl sm:text-5xl text-white">
            Soluciones de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">seguridad</span>
          </h2>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
            Proyectos destacados en seguridad de datos, DevSecOps y protección de infraestructura
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Gradient border effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
              
              <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-transparent transition-colors">
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${project.color} rounded-xl flex items-center justify-center mb-4`}>
                  <project.Icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-500 transition-all">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-slate-800/50 border border-slate-700/50 rounded-full text-xs text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-slate-700/50">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver más
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-300 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
