import { motion } from 'motion/react';
import { Card } from './ui/card';

export function About() {
  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '5+', label: 'Projects Completed' },
    { number: '5+', label: 'Happy Clients' },
    { number: '15+', label: 'Technologies' },
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A dynamic tech enthusiast with passion for software development, cybersecurity, and IT infrastructure. 
            With hands-on experience in full-stack web development, SOC Level One Analyst and Network Administration, 
            I thrive on building innovative solutions and securing digital landscapes. 
            Whether it’s crafting high-performances web applications fortifying cybersecurity defences, or optimizing IT infrastructure, 
            I bring dedication, expertise. and a problem-solving mindset to every challenge.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Started as a self-taught developer, I quickly fell in love with the problem-solving 
                aspect of programming. My curiosity led me to explore various technologies, from 
                frontend frameworks to backend architectures and cloud platforms.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, I specialize in building scalable web applications using modern technologies 
                like React, TypeScript, Node.js, and cloud services. I believe in writing clean, 
                maintainable code and following best practices.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-3">What I Value</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• Clean, maintainable code</li>
                <li>• User-centered design</li>
                <li>• Continuous learning</li>
                <li>• Team collaboration</li>
                <li>• Performance optimization</li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 bg-card/50 backdrop-blur">
              <h4 className="text-lg font-semibold mb-4">Quick Stats</h4>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
