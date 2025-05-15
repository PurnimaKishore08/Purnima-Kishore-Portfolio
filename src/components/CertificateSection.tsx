
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge, GraduationCap, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const CertificateSection = () => {
  const certificates = [
    {
      id: "coursera-python",
      title: "Python for Data Science, AI & Development",
      issuer: "Coursera (IBM)",
      date: "June 2023",
      credentialId: "XE49RI61JPSP",
      verificationUrl: "https://www.coursera.org/account/accomplishments/verify/XE49RI61JPSP",
      category: "data-science",
      icon: <FileText className="h-5 w-5 text-portfolio-accent" />
    },
    {
      id: "aws-code-whisperer",
      title: "AWS Code Whisperer Workshop",
      issuer: "AWS",
      date: "January 2024",
      verificationUrl: "https://drive.google.com/file/d/19cEkkir3ztSdymEthC_hh1jyBL_T3OGI/view?usp=sharing",
      category: "cloud",
      icon: <Badge className="h-5 w-5 text-portfolio-accent" />
    },
    {
      id: "generative-ai",
      title: "Generative AI Masterclass",
      issuer: "OpenWeaver",
      date: "October 2023",
      verificationUrl: "https://drive.google.com/file/d/1CrgL9VJ3E8YoOwbNuGAnGALXzPd4Z-Wd/view?usp=sharing",
      category: "ai",
      icon: <GraduationCap className="h-5 w-5 text-portfolio-accent" />
    }
  ];

  const fadeInAnimation = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  return (
    <section id="certificates" className="section bg-portfolio-background">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title text-center"
          {...fadeInAnimation}
          transition={{ duration: 0.5 }}
        >
          Certificates
        </motion.h2>
        
        <motion.p 
          className="text-portfolio-text-muted text-center mb-10 max-w-2xl mx-auto"
          {...fadeInAnimation}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Continuous learning and professional development through recognized certifications
        </motion.p>

        <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="data-science">Data Science</TabsTrigger>
            <TabsTrigger value="ai">AI</TabsTrigger>
            <TabsTrigger value="cloud">Cloud</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certificates.map((cert, index) => (
                <CertificateCard 
                  key={cert.id} 
                  certificate={cert} 
                  index={index}
                />
              ))}
            </div>
          </TabsContent>
          
          {["data-science", "ai", "cloud"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates
                  .filter(cert => cert.category === category)
                  .map((cert, index) => (
                    <CertificateCard 
                      key={cert.id} 
                      certificate={cert} 
                      index={index}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

interface CertificateCardProps {
  certificate: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId?: string;
    verificationUrl: string;
    category: string;
    icon: React.ReactNode;
  };
  index: number;
}

const CertificateCard = ({ certificate, index }: CertificateCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-portfolio-container border-portfolio-container hover:border-portfolio-accent transition-all duration-300">
        <CardHeader className="pb-3">
          <div className="flex items-center gap-2 mb-2">
            {certificate.icon}
            <CardTitle className="text-lg">{certificate.title}</CardTitle>
          </div>
          <CardDescription>{certificate.issuer}</CardDescription>
        </CardHeader>
        <CardContent className="pb-2">
          <p className="text-sm text-portfolio-text-muted">
            {certificate.date}
            {certificate.credentialId && (
              <>
                <br />
                <span className="text-xs">Credential ID: {certificate.credentialId}</span>
              </>
            )}
          </p>
        </CardContent>
        <CardFooter>
          <Button 
            variant="outline" 
            size="sm" 
            className="text-portfolio-accent border-portfolio-accent hover:bg-portfolio-accent hover:text-portfolio-background"
            asChild
          >
            <a 
              href={certificate.verificationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Verify Certificate
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default CertificateSection;
