import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const BlogsSection = () => {
  const blogs = [
    {
      id: "blog-1",
      title: "My Journey into AIML - Why I Chose It and What I've Learned So Far",
      excerpt: "Explore my personal journey into the world of Artificial Intelligence and Machine Learning, including why I chose this path and the valuable lessons I've learned along the way.",
      date: "May 16, 2025",
      readTime: "7 min read",
      link: "#",
      fullContent: `
## 🚀 My Journey into AIML – Why I Chose It and What I've Learned So Far

Artificial Intelligence and Machine Learning (AIML) were once just buzzwords to me—terms I'd hear in sci-fi movies or tech talks. But today, they've become a meaningful part of my academic and career journey. Artificial Intelligence (AI) and Machine Learning (ML) have been transforming industries, from healthcare to finance, and even creative fields like art and music. As an AIML student, I've grown from being curious about how machines "think" to actively building models that make predictions, classify images, and even understand text.

In this post, I'd like to share why I chose this field, how I started, and what I've learned so far. If you're a beginner or someone considering this path, I hope this gives you some insight and encouragement!

## 🌟 Why I Chose AIML

There are many reasons why students choose AIML—job prospects, innovation, and curiosity, to name a few. For me, it was a mix of curiosity and impact. I was fascinated by how AI is transforming industries—from healthcare and finance to e-commerce and entertainment. I wanted to be part of that change.

The idea of building machines that can learn, adapt, and even "understand" data felt like magic. I asked myself: What if I could build something that helps people make smarter decisions, detect fraud, or even save lives? That thought was powerful enough to push me into the world of AI and ML.

## 📘 How I Got Started

I started with the basics: Python programming, linear algebra, and probability. I remember being overwhelmed at first, especially with terms like gradient descent and loss functions. But I took it one step at a time.

### Here's how I structured my learning:

- **Python**: Started with the basics using free resources like W3Schools and Codecademy.
- **Math for ML**: Khan Academy and 3Blue1Brown's videos were lifesavers.
- **Courses**: I took the famous Andrew Ng's Machine Learning Course on Coursera and started participating in beginner-friendly Kaggle competitions.

## 🔧 Tools and Technologies I've Used

As I progressed, I got comfortable with several tools and libraries:

- **NumPy & Pandas**: For data manipulation
- **Matplotlib & Seaborn**: For visualization
- **Scikit-Learn**: My go-to for building ML models
- **Jupyter Notebook**: For experimenting with code
- **Kaggle**: For practicing and learning from others' notebooks

Later, I started learning about deep learning with TensorFlow and Keras, and ventured into NLP using tools like NLTK and spaCy.

## Key Lessons & Challenges

### 1. Data is King
A well-performing model is only as good as the data it's trained on. I learned the importance of data cleaning, preprocessing, and augmentation the hard way!

### 2. Experimentation is Essential
Not every model will work on the first try. Hyperparameter tuning, trying different architectures, and debugging errors are all part of the process.

### 3. Ethics Matter
AI can have biases if not trained carefully. Understanding fairness, accountability, and transparency in AI is crucial.

### 4. The Field Moves Fast
Staying updated with research papers (arXiv, Google Scholar) and industry trends is a must.

## 🙌 Final Thoughts

Every small breakthrough—whether fixing a bug or improving model accuracy—feels like a victory. If you're just starting, remember: everyone begins somewhere. The field of AI and ML can seem intimidating at first, but with consistent effort, things start to make sense. Don't be afraid to ask questions, experiment, and fail forward.

Are you also learning AIML? What's your experience been like? Let's connect and learn together! 🚀
      `
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

  const [selectedBlog, setSelectedBlog] = useState<typeof blogs[0] | null>(null);

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
          <Button 
            variant="outline"
            className="border-portfolio-accent text-portfolio-accent hover:bg-portfolio-accent hover:text-white"
            asChild
          >
            <a href="#">View All Blog Posts</a>
          </Button>
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

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    readTime: string;
    link: string;
    fullContent?: string;
  };
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

export default BlogsSection;
