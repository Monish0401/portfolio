import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React/Next.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'Vue.js', level: 80 },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Python', level: 85 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'GraphQL', level: 80 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'AWS', level: 85 },
        { name: 'Docker', level: 80 },
        { name: 'Git', level: 95 },
        { name: 'CI/CD', level: 80 },
      ]
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB',
    'AWS', 'Java', 'Spring Boot', 'REST APIs', 'Tailwind CSS', 'Next.js',
    'Power BI', 'Express.js', 'Android Studio', 'Flutter', 'GitHub Actions', 'GitHub',
    'MySQL', 'EveBox', 'Sentinal One', 'Paloalto Panorama Next Gen Firewall', 'Wazuh',
    'Zabbix', 'Checkpoint Firewall', 'Linux'
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-6 text-center">{category.title}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: (categoryIndex * 0.2) + (skillIndex * 0.1), duration: 1 }}
                          viewport={{ once: true }}
                          className="bg-gradient-to-r from-primary to-primary/70 h-2 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Technologies I Work With</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Badge variant="secondary" className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors cursor-default">
                    {tech}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
