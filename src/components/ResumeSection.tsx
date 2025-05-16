import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
const ResumeSection = () => {
  return <section id="resume" className="section bg-portfolio-background py-16">
      <div className="container mx-auto">
        
        
        

        <motion.div className="flex flex-col items-center justify-center gap-8" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5,
        delay: 0.2
      }}>
          
        </motion.div>
      </div>
    </section>;
};
export default ResumeSection;