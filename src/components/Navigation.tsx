
import { Link } from "react-router-dom";
import { Calendar, Home, Users, Video } from "lucide-react";
import { Button } from "./ui/button";

export const Navigation = () => {
  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <Video className="h-6 w-6 text-primary" />
            <span>LiveStream Pro</span>
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Home className="h-4 w-4" />
              Dashboard
            </Link>
            <Link to="/events" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Events
            </Link>
            <Link to="/speakers" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
              <Users className="h-4 w-4" />
              Speakers
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </nav>
  );
};
