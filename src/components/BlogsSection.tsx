
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { blogsData } from "@/data/blogsData";
import BlogCard from "./BlogCard";
import BlogModal from "./BlogModal";
import type { BlogPost } from "@/data/blogsData";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  const handleCloseModal = () => {
    setSelectedBlog(null);
  };

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
          {blogsData.slice(0, 4).map((blog, index) => (
            <BlogCard 
              key={blog.id}
              blog={blog}
              index={index}
              onReadMore={() => setSelectedBlog(blog)}
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
          <Link to="/blogs">
            <Button 
              variant="outline"
              className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
            >
              View All Blog Posts
            </Button>
          </Link>
        </motion.div>
      </div>

      <BlogModal 
        blog={selectedBlog}
        isOpen={!!selectedBlog}
        onClose={handleCloseModal}
      />
    </section>
  );
};

export default BlogsSection;
