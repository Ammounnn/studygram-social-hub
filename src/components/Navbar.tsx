
import { Link } from "react-router-dom";
import { Bell, BookOpen, Home, MessageSquare, PlusSquare, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-edugram-purple-dark/10 backdrop-blur-md border-b border-border flex items-center justify-between px-4 py-2 h-14">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <BookOpen className="h-6 w-6 text-edugram-purple mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-edugram-purple to-edugram-blue bg-clip-text text-transparent">
            Edugram
          </span>
        </Link>
      </div>

      <div className="hidden md:flex items-center mx-auto max-w-xs w-full relative">
        <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search study materials, topics..."
          className="pl-8 bg-muted/80 border-none"
        />
      </div>

      <div className="flex items-center space-x-4">
        <Link to="/">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Home className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/messages">
          <Button variant="ghost" size="icon" className="rounded-full">
            <MessageSquare className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/create-post">
          <Button variant="ghost" size="icon" className="rounded-full">
            <PlusSquare className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/notifications">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
        </Link>
        <Link to="/profile">
          <Avatar className="h-8 w-8 border border-border">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback className="bg-edugram-purple text-primary-foreground">EM</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
