import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './imgfallback/ImageWithFallback';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'SDR Payload Commanding',
      description: "The SDR Payload Monitoring and Control Web Application allows real-time visualization of SDR payload data using React, Tailwind CSS, FastAPI, and MySQL. The app features an intuitive dashboard for easy monitoring, real-time data updates, and efficient data management. It's designed for seamless future integration with physical SDR hardware for direct interaction and control.",
      image: 'https://monish0401.github.io/Web-Designer/SDR.png',
      technologies: ['React', 'JavaScriptXML', 'TailWindCSS', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Python'],
      features: [
        'Real-time data visualization',
        'User-Friendly Dashboard',
        'FastAPI Back-End',
        'MySQL Database Integration',
        'Dark-Light Theme'
      ],
      liveUrl: 'https://monish0401.github.io/sdr_ui/',
      githubUrl: 'https://github.com/Monish0401/sdr_ui'
    },
    {
      title: 'CanvasFlow Blockcraft',
      description: 'CanvasFlow Blockcraft is an easy-to-use tool for creating responsive websites with minimal coding. It features a drag-and-drop builder, real-time preview, customizable components with Tailwind CSS, and export options for HTML, CSS, and JavaScript. Collaboration is seamless with real-time teamwork capabilities, making web design fast and efficient',
      image: 'https://monish0401.github.io/Web-Designer/Canvas.png',
      technologies: ['React ', 'TypeScript', 'Tailwind CSS', 'FastAPI', 'MySQL', 'SQLAlchemy', 'Python' ],
      features: [
        'Drag-and-Drop Page Builder',
        'Pre-built Templates',
        'Real-time Preview',
        'Customizable Components with Tailwind CSS',
        'Code Export and Download',
        'Real-Time Collaboration'
      ],
      liveUrl: 'https://monish0401.github.io/Web-Designer/',
      githubUrl: 'https://github.com/Monish0401/Web-Designer/'
    // },
    // {
    //   title: 'E-commerce Platform',
    //   description: 'A full-featured e-commerce platform with inventory management, payment processing, and advanced search capabilities.',
    //   image: 'Hx8MThttps://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fc1NjA0OTk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
    //   technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis'],
    //   features: [
    //     'Advanced product search',
    //     'Secure payment processing',
    //     'Inventory management',
    //     'Admin dashboard'
    //   ],
    //   liveUrl: '#',
    //   githubUrl: '#'
    // },
    // {
    //   title: 'Data Analytics Platform',
    //   description: 'A powerful data analytics platform that processes large datasets and provides actionable insights through interactive visualizations.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwOTEwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    //   technologies: ['Vue.js', 'Python', 'FastAPI', 'TensorFlow', 'AWS'],
    //   features: [
    //     'Big data processing',
    //     'Machine learning models',
    //     'Interactive charts',
    //     'API integration'
    //   ],
    //   liveUrl: '#',
    //   githubUrl: '#'
    }
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
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work and the technologies I've used to solve real-world problems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button onClick={()=>{window.open(project.liveUrl, '_blank', 'noopener,noreferrer');}} className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                    <button onClick={()=>{window.open(project.githubUrlUrl, '_blank');}} className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-primary mr-2 text-xs">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech) => (
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
    </section>
  );
}
