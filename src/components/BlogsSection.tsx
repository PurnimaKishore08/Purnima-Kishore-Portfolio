
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { blogsData } from "@/data/blogsData";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/data/blogsData";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

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
          {blogsData.slice(0, 3).map((blog, index) => (
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

      {/* Blog Post Dialog */}
      <Dialog open={!!selectedBlog} onOpenChange={(open) => !open && setSelectedBlog(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedBlog && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold">{selectedBlog.title}</DialogTitle>
                <DialogDescription className="flex items-center gap-2 text-sm mt-2">
                  <span className="text-portfolio-accent">{selectedBlog.date}</span>
                  <span>•</span>
                  <span>{selectedBlog.readTime}</span>
                </DialogDescription>
              </DialogHeader>
              <Separator className="my-4" />
              <div className="prose prose-invert max-w-none">
                {selectedBlog.fullContent ? (
                  <div 
                    className="space-y-4 text-portfolio-text"
                    dangerouslySetInnerHTML={{ 
                      __html: selectedBlog.fullContent
                        .replace(/## (.*)/g, '<h2 class="text-xl font-bold text-portfolio-accent mt-6 mb-3">$1</h2>')
                        .replace(/### (.*)/g, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/- (.*)/g, '<li class="ml-6 list-disc">$1</li>')
                        .split('\n\n').join('</p><p>')
                    }} 
                  />
                ) : (
                  <p>This blog post is coming soon!</p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default BlogsSection;
