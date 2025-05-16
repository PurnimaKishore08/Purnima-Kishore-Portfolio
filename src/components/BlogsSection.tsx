
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

const BlogsSection = () => {
  const blogs = [
    {
      id: "blog-1",
      title: "Introduction to Neural Networks",
      excerpt: "Explore the fundamentals of neural networks and how they form the backbone of modern AI systems.",
      date: "June 15, 2023",
      readTime: "5 min read",
      link: "#",
    },
    {
      id: "blog-2",
      title: "Getting Started with TensorFlow",
      excerpt: "A step-by-step guide to setting up your first deep learning project using TensorFlow.",
      date: "August 20, 2023",
      readTime: "8 min read",
      link: "#",
    },
    {
      id: "blog-3",
      title: "Ethics in Artificial Intelligence",
      excerpt: "Examining the ethical considerations and challenges in developing responsible AI systems.",
      date: "October 5, 2023",
      readTime: "6 min read",
      link: "#",
    }
  ];

  return (
    <section id="blogs" className="section bg-portfolio-background py-16">
      <div className="container mx-auto">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Blogs
        </motion.h2>
        
        <motion.p 
          className="text-portfolio-text-muted text-center mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Insights, tutorials, and thoughts on AI, Machine Learning, and technology
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {blogs.map((blog, index) => (
            <BlogCard 
              key={blog.id}
              blog={blog}
              index={index}
            />
          ))}
        </div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Button 
            variant="outline"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
            asChild
          >
            <a href="#">View All Blog Posts</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link: string;
  };
  index: number;
}

const BlogCard = ({ blog, index }: BlogCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
    >
      <Card className="h-full hover:shadow-md transition-shadow bg-portfolio-container border-portfolio-container hover:border-portfolio-accent overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="h-4 w-4 text-portfolio-accent" />
            <CardDescription className="text-sm">{blog.date} · {blog.readTime}</CardDescription>
          </div>
          <CardTitle className="text-lg line-clamp-2">{blog.title}</CardTitle>
        </CardHeader>
        <CardContent className="pb-6">
          <p className="text-portfolio-text-muted line-clamp-3">
            {blog.excerpt}
          </p>
        </CardContent>
        <CardFooter className="pt-0">
          <Button 
            variant="link" 
            className="p-0 text-portfolio-accent hover:text-portfolio-accent/80 hover:no-underline"
            asChild
          >
            <a href={blog.link}>
              Read More
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="ml-1"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogsSection;
