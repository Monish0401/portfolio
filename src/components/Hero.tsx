import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { unsplash_tool } from '../tools/unsplash';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Monish Chandrashekar
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mt-2">
              CyberSecurity Analyst|Full Stack Developer|Network Administration|Mobile App Developer
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-foreground/80 leading-relaxed max-w-lg"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specialized in React, Node.js, and cloud architecture with 1+ years of experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View My Work
            </button>
            <button className="border border-border px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
              Download CV
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-pulse"></div>
            <ImageWithFallback
              src="https://media.licdn.com/dms/image/v2/D5603AQGwxpG34mYbOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698284324065?e=2147483647&v=beta&t=bPLTayLnLa4ICXbt0pKfmoHZp_bere-MELjExhenuxY"
              alt="Monish C - Professional Headshot"
              className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
