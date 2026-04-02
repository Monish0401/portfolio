import { motion } from 'motion/react';
import { ImageWithFallback } from './imgfallback/ImageWithFallback';
import { unsplash_tool } from '../tools/unsplash';

export function Hero() {
  // Function to handle smooth scrolling to the experience section
  const scrollToWork = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Direct download link for your Google Drive file
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1qBZJcFTnBYiXqJ0N6BRwPjqBldtLV77h'; 
    
    // Open in a new tab to trigger the download immediately
    window.open(cvUrl, '_blank');
  };

  // Function to handle CV download
  //const handleDownloadCV = () => {
    // 1. Place your PDF file in the 'public' folder of your project
    // 2. Rename it to 'cv.pdf' or update the path below
    //const cvUrl = 'https://drive.google.com/uc?export=download&id=1qBZJcFTnBYiXqJ0N6BRwPjqBldtLV77h/'; 
   // const link = document.createElement('a');
    //link.href = cvUrl;
   // link.download = 'Monish_C_CV.pdf'; // The name the file will have when downloaded
  //  document.body.appendChild(link);
   // link.click();
  //  document.body.removeChild(link);
 // };
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
            <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Monish Chandrashekar
            </h1>
            <h2 className="text-1xl md:text-1xl text-muted-foreground mt-2">
              CyberSecurity Analyst | Full Stack Developer | Network Administration | Mobile App Developer
            </h2>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-foreground/80 leading-relaxed max-w-lg"
          >
            Passionate about creating exceptional digital experiences with modern technologies. 
            Specialized in React, Node.js, and cloud architecture with 2+ years of experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex gap-4"
          >
            <button onClick={scrollToWork} className="bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              View My Work
            </button>
            <button onClick={handleDownloadCV} className="border border-border px-8 py-3 rounded-lg hover:bg-secondary transition-colors">
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
            {/* <ImageWithFallback 
              src="https://media.licdn.com/dms/image/v2/D5603AQGwxpG34mYbOA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1698284324065?e=2147483647&v=beta&t=bPLTayLnLa4ICXbt0pKfmoHZp_bere-MELjExhenuxY"
              alt="Monish C - Professional Headshot"
              className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl relative z-10"
            /> */}
            <ImageWithFallback
              src="https://lh3.googleusercontent.com/a/ACg8ocK5he34bYCAfDuNjAdLpSSJ0nW57mBx2ZaIcxh-2ua1kIdWV8E=s288-c-no" 
              alt="Monish C - Professional Headshot"
              className="w-80 h-80 rounded-full object-cover border-4 border-background shadow-2xl relative z-10"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
