
import { Calendar, Mail, Phone, Video } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 font-semibold text-xl mb-4">
              <Video className="h-6 w-6 text-primary" />
              <span>LiveStream Pro</span>
            </div>
            <p className="text-gray-600 mb-4">
              Professional live streaming solutions for your events and conferences.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-gray-600 hover:text-gray-900">Home</Link>
              <Link to="/events" className="block text-gray-600 hover:text-gray-900">Events</Link>
              <Link to="/speakers" className="block text-gray-600 hover:text-gray-900">Speakers</Link>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Upcoming Events</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Digital Summit 2024</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>Tech Conference</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Mail className="h-4 w-4" />
                <span>contact@livestreampro.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t">
        <div className="container py-6 text-center text-sm text-gray-600">
          © 2024 LiveStream Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
