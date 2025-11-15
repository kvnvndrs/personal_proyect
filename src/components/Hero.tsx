import { motion } from 'motion/react';
import { Shield, Lock, Terminal, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const floatingIcons = [
    { Icon: Shield, delay: 0, x: -20, y: -20 },
    { Icon: Lock, delay: 0.2, x: 20, y: -30 },
    { Icon: Terminal, delay: 0.4, x: -30, y: 20 },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm">
                Seguridad de Datos • DevSecOps
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl text-white"
            >
              Protegiendo el{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                futuro digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-400"
            >
              Ingeniero especializado en seguridad de datos y prácticas DevSecOps, 
              construyendo sistemas seguros y resilientes desde el código hasta la producción.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                Ver Proyectos
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('acerca')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-3 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-400 hover:text-cyan-400 transition-colors"
              >
                Conocer más
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 pt-4"
            >
              {[
                { Icon: Github, href: '#' },
                { Icon: Linkedin, href: '#' },
                { Icon: Mail, href: '#' },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-12 h-12 rounded-lg bg-slate-800/50 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Center Shield */}
              <motion.div
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="relative"
              >
                <div className="w-48 h-48 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  <Shield className="w-24 h-24 text-white" />
                </div>
              </motion.div>

              {/* Floating Icons */}
              {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.5, 1, 0.5],
                    y: [y, y - 20, y],
                    x: [x, x + 10, x],
                  }}
                  transition={{
                    duration: 3,
                    delay,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute"
                  style={{
                    top: `${50 + y}%`,
                    left: `${50 + x}%`,
                  }}
                >
                  <div className="w-16 h-16 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                </motion.div>
              ))}

              {/* Orbiting rings */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-cyan-400/20 rounded-full"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 20 + i * 5,
                      repeat: Infinity,
                      ease: 'linear',
                    },
                    scale: {
                      duration: 3,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    },
                  }}
                  style={{
                    width: `${300 + i * 60}px`,
                    height: `${300 + i * 60}px`,
                    margin: 'auto',
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
