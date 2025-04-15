
import { Link } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { users, suggestedUsers, studyTopics } from "@/data/mockData";

const Sidebar = () => {
  // Use the first user as the current user
  const currentUser = users[0];

  return (
    <div className="w-full max-w-xs hidden lg:block">
      <div className="fixed h-screen w-full max-w-xs pt-20 pb-6 px-4 overflow-y-auto">
        {/* Current user profile summary */}
        <div className="flex items-center space-x-3 mb-6">
          <Avatar className="h-12 w-12">
            <AvatarImage src={currentUser.avatar} alt={currentUser.name} />
            <AvatarFallback className="bg-edugram-purple text-primary-foreground">
              {currentUser.name.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <Link to="/profile" className="text-sm font-medium hover:underline truncate block">
              {currentUser.name}
            </Link>
            <p className="text-xs text-muted-foreground truncate">@{currentUser.username}</p>
          </div>
        </div>

        {/* Study topics */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Popular Study Topics</h3>
          <div className="flex flex-wrap gap-2">
            {studyTopics.slice(0, 8).map((topic) => (
              <Link
                key={topic}
                to={`/topics/${topic.toLowerCase().replace(" ", "-")}`}
                className="px-3 py-1 text-xs rounded-full bg-accent text-accent-foreground hover:bg-edugram-purple hover:text-white transition-colors"
              >
                {topic}
              </Link>
            ))}
            <Button variant="link" size="sm" className="text-xs p-0 h-auto">
              See All
            </Button>
          </div>
        </div>

        {/* Suggested users to follow */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium">Suggested Study Partners</h3>
            <Button variant="link" size="sm" className="text-xs p-0 h-auto">
              See All
            </Button>
          </div>
          <div className="space-y-3">
            {suggestedUsers.map((user) => (
              <div key={user.id} className="flex items-center justify-between">
                <Link to={`/profile/${user.username}`} className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback className="bg-edugram-purple text-primary-foreground">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{user.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{user.subject}</p>
                  </div>
                </Link>
                <Button size="sm" variant="outline" className="text-xs h-7">
                  Follow
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Footer links */}
        <div className="mt-8 text-xs text-muted-foreground space-x-2">
          <Link to="/about" className="hover:underline">About</Link>
          <span>•</span>
          <Link to="/help" className="hover:underline">Help</Link>
          <span>•</span>
          <Link to="/privacy" className="hover:underline">Privacy</Link>
          <span>•</span>
          <Link to="/terms" className="hover:underline">Terms</Link>
          <p className="mt-2">© 2023 Edugram</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
