
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Grid3X3, Bookmark, ImageIcon } from "lucide-react";
import { users, posts } from "@/data/mockData";

interface ProfileProps {
  username?: string; // Optional: if not provided, uses first user as default
}

const Profile = ({ username }: ProfileProps) => {
  // Find the user by username or use the first user as default
  const user = username
    ? users.find((u) => u.username === username) || users[0]
    : users[0];

  // Filter posts by the user
  const userPosts = posts.filter((post) => post.user.id === user.id);

  return (
    <div className="max-w-2xl mx-auto pt-16 pb-8 px-4">
      {/* Profile header */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8">
        <Avatar className="h-24 w-24 md:h-36 md:w-36 border-4 border-background">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="bg-edugram-purple text-primary-foreground text-3xl">
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>

        <div className="flex-1 text-center md:text-left">
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
            <h1 className="text-2xl font-bold">{user.name}</h1>
            <Button>Follow</Button>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mb-4">
            <div className="text-center">
              <span className="font-bold">{userPosts.length}</span>{" "}
              <span className="text-muted-foreground">posts</span>
            </div>
            <div className="text-center">
              <span className="font-bold">{user.followers}</span>{" "}
              <span className="text-muted-foreground">followers</span>
            </div>
            <div className="text-center">
              <span className="font-bold">{user.following}</span>{" "}
              <span className="text-muted-foreground">following</span>
            </div>
          </div>

          <div>
            <p className="font-medium">@{user.username}</p>
            <p className="text-sm text-muted-foreground">{user.subject}</p>
            <p className="mt-2">{user.bio}</p>
          </div>
        </div>
      </div>

      {/* Profile content tabs */}
      <Tabs defaultValue="posts" className="w-full">
        <TabsList className="w-full grid grid-cols-3">
          <TabsTrigger value="posts" className="flex items-center gap-2">
            <Grid3X3 className="h-4 w-4" />
            <span className="hidden md:inline">Posts</span>
          </TabsTrigger>
          <TabsTrigger value="saved" className="flex items-center gap-2">
            <Bookmark className="h-4 w-4" />
            <span className="hidden md:inline">Saved</span>
          </TabsTrigger>
          <TabsTrigger value="tagged" className="flex items-center gap-2">
            <ImageIcon className="h-4 w-4" />
            <span className="hidden md:inline">Tagged</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="mt-6">
          {userPosts.length > 0 ? (
            <div className="grid grid-cols-3 gap-1 md:gap-4">
              {userPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/posts/${post.id}`}
                  className="aspect-square relative group overflow-hidden bg-muted rounded-md"
                >
                  <img
                    src={post.image}
                    alt={`Post by ${user.name}`}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center space-x-4 text-white">
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          stroke="none"
                        >
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        <span className="ml-1">{post.likes}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                        <span className="ml-1">{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No posts yet</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="saved" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Saved posts will appear here</p>
          </div>
        </TabsContent>

        <TabsContent value="tagged" className="mt-6">
          <div className="text-center py-12">
            <p className="text-muted-foreground">Posts you're tagged in will appear here</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Profile;
