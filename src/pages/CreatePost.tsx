
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { ImagePlus } from "lucide-react";

const CreatePost = () => {
  const [caption, setCaption] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
        <h1 className="text-xl font-bold mb-4">Create New Post</h1>
        
        <div className="mb-4">
          {selectedImage ? (
            <div className="relative aspect-square rounded-md overflow-hidden bg-muted mb-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-full object-cover"
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-2 right-2"
                onClick={() => setSelectedImage(null)}
              >
                Remove
              </Button>
            </div>
          ) : (
            <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-md cursor-pointer bg-muted/50 hover:bg-muted/80 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <ImagePlus className="w-12 h-12 mb-3 text-muted-foreground" />
                <p className="mb-2 text-sm font-medium">Click to upload</p>
                <p className="text-xs text-muted-foreground">
                  SVG, PNG, JPG or GIF (Max 10MB)
                </p>
              </div>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          )}
        </div>
        
        <div className="mb-4">
          <label htmlFor="caption" className="block text-sm font-medium mb-1">
            Caption
          </label>
          <Textarea
            id="caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="Share your study notes, insights or questions..."
            className="resize-none"
            rows={4}
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="tags" className="block text-sm font-medium mb-1">
            Add Tags (separated by spaces)
          </label>
          <input
            id="tags"
            type="text"
            placeholder="math science studytips"
            className="w-full px-3 py-2 border rounded-md text-sm bg-background"
          />
        </div>
        
        <Button className="w-full" disabled={!selectedImage || !caption}>
          Share Post
        </Button>
      </div>
    </Layout>
  );
};

export default CreatePost;
