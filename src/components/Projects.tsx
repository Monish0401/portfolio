// import { motion } from 'motion/react';
// import { Card } from './ui/card';
// import { Badge } from './ui/badge';
// import { ImageWithFallback } from './figma/ImageWithFallback';
// import { ExternalLink, Github } from 'lucide-react';

// export function Projects() {
//   const projects = [
//     {
//       title: 'Enterprise Dashboard',
//       description: 'A comprehensive analytics dashboard for enterprise clients with real-time data visualization, custom reporting, and team collaboration features.',
//       image: 'https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYxMjExMjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
//       technologies: ['React', 'TypeScript', 'D3.js', 'Node.js', 'PostgreSQL'],
//       features: [
//         'Real-time data visualization',
//         'Custom report builder',
//         'Team collaboration tools',
//         'Mobile responsive design'
//       ],
//       liveUrl: '#',
//       githubUrl: '#'
//     },
//     {
//       title: 'Mobile Banking App',
//       description: 'A secure and intuitive mobile banking application with biometric authentication, budget tracking, and investment portfolio management.',
//       image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzU2MDU3NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080',
//       technologies: ['React Native', 'Redux', 'Node.js', 'MongoDB', 'JWT'],
//       features: [
//         'Biometric authentication',
//         'Budget tracking & analytics',
//         'Investment portfolio',
//         'Push notifications'
//       ],
//       liveUrl: '#',
//       githubUrl: '#'
//     },
//     {
//       title: 'E-commerce Platform',
//       description: 'A full-featured e-commerce platform with inventory management, payment processing, and advanced search capabilities.',
//       image: 'https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc1NjA0OTk4MHww&ixlib=rb-4.1.0&q=80&w=1080',
//       technologies: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL', 'Redis'],
//       features: [
//         'Advanced product search',
//         'Secure payment processing',
//         'Inventory management',
//         'Admin dashboard'
//       ],
//       liveUrl: '#',
//       githubUrl: '#'
//     },
//     {
//       title: 'Data Analytics Platform',
//       description: 'A powerful data analytics platform that processes large datasets and provides actionable insights through interactive visualizations.',
//       image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbiUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NTYwOTEwOTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
//       technologies: ['Vue.js', 'Python', 'FastAPI', 'TensorFlow', 'AWS'],
//       features: [
//         'Big data processing',
//         'Machine learning models',
//         'Interactive charts',
//         'API integration'
//       ],
//       liveUrl: '#',
//       githubUrl: '#'
//     }
//   ];

//   return (
//     <section className="py-20 px-4">
//       <div className="max-w-6xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 50 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             A showcase of my recent work and the technologies I've used to solve real-world problems
//           </p>
//         </motion.div>

//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.2, duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col">
//                 <div className="relative overflow-hidden">
//                   <ImageWithFallback
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
//                       <ExternalLink className="w-4 h-4" />
//                     </button>
//                     <button className="p-2 bg-background/90 rounded-full hover:bg-background transition-colors">
//                       <Github className="w-4 h-4" />
//                     </button>
//                   </div>
//                 </div>
                
//                 <div className="p-6 flex-1 flex flex-col">
//                   <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
//                   <p className="text-foreground/80 mb-4 flex-1">{project.description}</p>
                  
//                   <div className="mb-4">
//                     <h4 className="font-medium mb-2 text-sm">Key Features:</h4>
//                     <ul className="text-sm text-foreground/70 space-y-1">
//                       {project.features.map((feature, i) => (
//                         <li key={i} className="flex items-start">
//                           <span className="text-primary mr-2 text-xs">•</span>
//                           {feature}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
                  
//                   <div className="flex flex-wrap gap-2 mt-auto">
//                     {project.technologies.map((tech) => (
//                       <Badge key={tech} variant="secondary" className="text-xs">
//                         {tech}
//                       </Badge>
//                     ))}
//                   </div>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
