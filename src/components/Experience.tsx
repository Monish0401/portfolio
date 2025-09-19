import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';

export function Experience() {
  const experiences = [
    {
      title: 'Trainee Engineer',
      company: 'Bharat Electronics Limited',
      period: '2024 - Present',
      location: 'Visakhapatnam, India',
      description: 'At BEL, I helped design and implement a workforce management system while working with hardware teams to integrate embedded modules, building skills in system design, CI/CD, and automated testing. At ISRO (SAC, Ahmedabad), I contributed to the GSAT-6 satellite project, gaining hands-on experience in embedded environments, Linux debugging, and hardware-software integration. As a SOC Analyst at AIIMS Hospital, I focused on Linux monitoring, network analysis, and OS-level troubleshooting, strengthening my expertise in system reliability and embedded development.',
      achievements: [
        'At AIIMS Hospital (Delhi) as a SOC Analyst, I worked on strengthening the cybersecurity posture of the organization. My role included Linux system monitoring, performing network analysis, and OS-level process troubleshooting to detect and mitigate threats. This position sharpened my problem-solving skills and gave me hands-on exposure to ensuring system reliability and security—skills that also translate effectively into embedded development and system-level engineering.',
        'During my time at Bharat Electronics Limited (BEL), I was part of a team responsible for designing and implementing a high-performance workforce management system. My work not only involved developing the core software solution but also required close collaboration with the hardware teams to ensure smooth integration with embedded modules. This project helped me gain practical experience in system design, building and managing CI/CD pipelines, and setting up automated testing frameworks to maintain reliability and efficiency across deployments.',
        'Later as a Software Developer and providing IT Infrastructure at ISRO (SAC, Ahmedabad), I had the opportunity to contribute to the GSAT-6 satellite project. Here, my responsibilities spanned working within embedded system environments, performing Linux debugging, and handling various aspects of hardware-software integration to support satellite communication systems. This experience deepened my understanding of working with mission-critical systems where reliability and precision are crucial.'
      ],
      technologies: ['React','Node.js','Java','Spring Boot','PostgreSQL','Android Studio','Flutter','Svelte.js','MongoDB','Express.js','Git','GitHub','Docker','PowerBI',
                    'Palo Alto Panorama Firewall','Suricata','Evebox','Sentinal One','VirusTotal','Checkpoint Firewall','Wazuh','Network Adminstration','IT Infrastructure']
    }
    
  ];

  return (
    <section className="py-20 px-4 bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <Card className="md:ml-20 p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                      <h4 className="text-lg font-medium text-foreground">{exp.company}</h4>
                      <p className="text-muted-foreground">{exp.location}</p>
                    </div>
                    <Badge variant="outline" className="mt-2 md:mt-0 w-fit">
                      {exp.period}
                    </Badge>
                  </div>
                  
                  <p className="text-foreground/80 mb-4 leading-relaxed">
                    {exp.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-medium mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="text-sm text-foreground/80 flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h5 className="font-medium mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
