
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { BlogPost } from "@/data/blogsData";

interface BlogModalProps {
  blog: BlogPost | null;
  isOpen: boolean;
  onClose: () => void;
}

const BlogModal = ({ blog, isOpen, onClose }: BlogModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        {blog && (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{blog.title}</DialogTitle>
              <DialogDescription className="flex items-center gap-2 text-sm mt-2">
                <span className="text-portfolio-accent">{blog.date}</span>
              </DialogDescription>
            </DialogHeader>
            <Separator className="my-4" />
            <div className="prose prose-invert max-w-none">
              {blog.fullContent ? (
                <div 
                  className="space-y-4 text-portfolio-text"
                  dangerouslySetInnerHTML={{ 
                    __html: blog.fullContent
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
  );
};

export default BlogModal;
