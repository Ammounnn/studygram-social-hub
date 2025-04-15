
import { useState } from "react";
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bookmark, Heart, MessageCircle, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface PostProps {
  id: string;
  user: {
    id: string;
    name: string;
    username: string;
    avatar: string;
  };
  image: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  subject?: string;
  tags?: string[];
}

const Post = ({
  id,
  user,
  image,
  caption,
  likes: initialLikes,
  comments,
  timestamp,
  subject,
  tags = [],
}: PostProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);
  const [isSaved, setIsSaved] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
  };

  return (
    <div className="bg-white dark:bg-zinc-900 border border-border rounded-lg overflow-hidden mb-6 animate-fade-in">
      {/* Post Header */}
      <div className="flex items-center justify-between p-3">
        <Link to={`/profile/${user.username}`} className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-edugram-purple text-primary-foreground">
              {user.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-medium">{user.name}</p>
            <p className="text-xs text-muted-foreground">{subject || "Student"}</p>
          </div>
        </Link>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <span className="sr-only">More options</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4"
          >
            <circle cx="12" cy="12" r="1" />
            <circle cx="12" cy="5" r="1" />
            <circle cx="12" cy="19" r="1" />
          </svg>
        </Button>
      </div>

      {/* Post Image */}
      <div className="relative aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={`Post by ${user.name}`}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>

      {/* Post Actions */}
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Button
              onClick={handleLike}
              variant="ghost"
              size="icon"
              className="h-9 w-9 rounded-full"
            >
              <Heart
                className={cn(
                  "h-5 w-5",
                  isLiked && "fill-red-500 text-red-500 animate-heart-beat"
                )}
              />
              <span className="sr-only">Like</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <MessageCircle className="h-5 w-5" />
              <span className="sr-only">Comment</span>
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
              <Share2 className="h-5 w-5" />
              <span className="sr-only">Share</span>
            </Button>
          </div>
          <Button
            onClick={() => setIsSaved(!isSaved)}
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full"
          >
            <Bookmark
              className={cn("h-5 w-5", isSaved && "fill-edugram-purple text-edugram-purple")}
            />
            <span className="sr-only">Save</span>
          </Button>
        </div>

        {/* Likes */}
        <div className="mt-1">
          <p className="text-sm font-medium">{likes.toLocaleString()} likes</p>
        </div>

        {/* Caption */}
        <div className="mt-1">
          <p className="text-sm">
            <Link to={`/profile/${user.username}`} className="font-medium">
              {user.username}
            </Link>{" "}
            {caption}
          </p>
        </div>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-1 flex flex-wrap gap-1">
            {tags.map((tag) => (
              <Link
                key={tag}
                to={`/explore/tags/${tag}`}
                className="text-xs text-edugram-purple hover:text-edugram-purple-dark"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Comments link */}
        <Button variant="link" className="p-0 h-auto text-muted-foreground text-xs mt-1">
          View all {comments} comments
        </Button>

        {/* Timestamp */}
        <p className="text-xs text-muted-foreground mt-1">{timestamp}</p>
      </div>
    </div>
  );
};

export default Post;
