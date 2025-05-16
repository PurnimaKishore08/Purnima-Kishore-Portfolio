
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BlogPost } from "@/data/blogsData";

interface BlogCardProps {
  blog: BlogPost;
  index: number;
  onReadMore: () => void;
}

const BlogCard = ({ blog, index, onReadMore }: BlogCardProps) => {
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
            onClick={onReadMore}
          >
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
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default BlogCard;
