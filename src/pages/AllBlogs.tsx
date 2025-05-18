
import { useState } from "react";
import { motion } from "framer-motion";
import BlogCard from "@/components/BlogCard";
import { blogsData, BlogPost } from "@/data/blogsData";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const AllBlogs = () => {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <div className="min-h-screen bg-portfolio-background text-portfolio-text">
      <Navbar />
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            My Blog Posts
          </motion.h1>
          
          <motion.p 
            className="text-xl text-portfolio-text-muted text-center mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights, tutorials, and thoughts on AI, Machine Learning, and technology
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {blogsData.map((blog, index) => (
              <BlogCard 
                key={blog.id}
                blog={blog}
                index={index}
                onReadMore={() => setSelectedBlog(blog)}
              />
            ))}
          </div>
        </div>
      </section>
      <Footer />
      
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
      
      {/* Back to top button */}
      <button
        onClick={() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-portfolio-accent text-portfolio-background flex items-center justify-center shadow-lg hover:-translate-y-1 transition-transform"
        aria-label="Back to top"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default AllBlogs;
