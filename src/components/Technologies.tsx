import { motion } from 'motion/react';
import { 
  Shield, 
  Cloud, 
  Container, 
  Terminal, 
  Lock, 
  Activity,
  Database,
  GitBranch,
  Server,
  Eye,
  Layers,
  Code
} from 'lucide-react';

export function Technologies() {
  const categories = [
    {
      title: 'Seguridad',
      icon: Shield,
      color: 'from-cyan-500 to-blue-500',
      technologies: [
        { name: 'OWASP', icon: Shield },
        { name: 'Vault', icon: Lock },
        { name: 'Snyk', icon: Eye },
        { name: 'SonarQube', icon: Activity },
        { name: 'Nmap', icon: Terminal },
        { name: 'Burp Suite', icon: Shield },
      ],
    },
    {
      title: 'DevSecOps',
      icon: GitBranch,
      color: 'from-blue-500 to-purple-500',
      technologies: [
        { name: 'Jenkins', icon: GitBranch },
        { name: 'GitLab CI', icon: GitBranch },
        { name: 'GitHub Actions', icon: GitBranch },
        { name: 'Terraform', icon: Code },
        { name: 'Ansible', icon: Server },
        { name: 'ArgoCD', icon: GitBranch },
      ],
    },
    {
      title: 'Cloud & Containers',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      technologies: [
        { name: 'AWS', icon: Cloud },
        { name: 'Azure', icon: Cloud },
        { name: 'Docker', icon: Container },
        { name: 'Kubernetes', icon: Layers },
        { name: 'Istio', icon: Layers },
        { name: 'Helm', icon: Container },
      ],
    },
    {
      title: 'Monitoring & SIEM',
      icon: Activity,
      color: 'from-pink-500 to-red-500',
      technologies: [
        { name: 'ELK Stack', icon: Activity },
        { name: 'Splunk', icon: Activity },
        { name: 'Prometheus', icon: Activity },
        { name: 'Grafana', icon: Activity },
        { name: 'Datadog', icon: Activity },
        { name: 'Wazuh', icon: Eye },
      ],
    },
    {
      title: 'Bases de Datos',
      icon: Database,
      color: 'from-red-500 to-orange-500',
      technologies: [
        { name: 'PostgreSQL', icon: Database },
        { name: 'MongoDB', icon: Database },
        { name: 'Redis', icon: Database },
        { name: 'Elasticsearch', icon: Database },
        { name: 'DynamoDB', icon: Database },
        { name: 'MySQL', icon: Database },
      ],
    },
    {
      title: 'Lenguajes',
      icon: Code,
      color: 'from-orange-500 to-yellow-500',
      technologies: [
        { name: 'Python', icon: Code },
        { name: 'Go', icon: Code },
        { name: 'Bash', icon: Terminal },
        { name: 'JavaScript', icon: Code },
        { name: 'TypeScript', icon: Code },
        { name: 'Java', icon: Code },
      ],
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
          <span className="text-cyan-400 text-sm tracking-wider uppercase">Tecnologías</span>
          <h2 className="mt-4 text-4xl sm:text-5xl text-white">
            Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">tecnológico</span>
          </h2>
          <p className="mt-4 text-xl text-slate-400 max-w-3xl mx-auto">
            Herramientas y tecnologías especializadas en seguridad y DevSecOps
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="group"
            >
              <div className="relative h-full">
                {/* Gradient border on hover */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500`} />
                
                <div className="relative h-full p-6 bg-slate-900/90 backdrop-blur-sm border border-slate-700/50 rounded-2xl">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${category.color} rounded-lg flex items-center justify-center`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl text-white">{category.title}</h3>
                  </div>

                  {/* Technologies Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.technologies.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-2 p-3 bg-slate-800/50 border border-slate-700/50 rounded-lg hover:border-cyan-400/50 transition-all cursor-pointer"
                      >
                        <tech.icon className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-sm text-slate-300">{tech.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl text-white text-center mb-8">Certificaciones</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'CISSP',
              'CEH',
              'AWS Security',
              'Kubernetes CKS',
            ].map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-4 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-xl text-center hover:border-cyan-400/50 transition-all cursor-pointer"
              >
                <Shield className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <span className="text-sm text-slate-300">{cert}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl">
            <h3 className="text-2xl text-white mb-4">¿Listo para colaborar?</h3>
            <p className="text-slate-400 mb-6 max-w-md">
              Construyamos juntos soluciones seguras y resilientes para tu organización
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
            >
              Contáctame
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
