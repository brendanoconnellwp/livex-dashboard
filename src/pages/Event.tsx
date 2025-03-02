
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/StatsCard";
import { Users, Clock, Video, Calendar } from "lucide-react";
import { useParams } from "react-router-dom";

const Event = () => {
  // In a real app, this would fetch from your backend
  const { id } = useParams();
  const event = {
    title: "Annual Tech Conference 2024",
    date: "March 15, 2024",
    attendees: 1200,
    vimeoUrl: "https://player.vimeo.com/video/824804225",
    speaker: "Jane Smith",
    imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80",
    description: "Join us for our flagship tech conference where industry leaders share insights about the latest developments in technology, AI, and digital transformation.",
    duration: "8 hours",
    location: "Virtual Event",
    speakers: [
      {
        name: "Jane Smith",
        role: "AI Research Director",
        company: "Tech Innovations Inc",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80",
        bio: "Dr. Jane Smith leads groundbreaking research in artificial intelligence and machine learning."
      },
      {
        name: "John Doe",
        role: "Chief Technology Officer",
        company: "Future Systems",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80",
        bio: "John Doe brings 15 years of experience in scaling technology companies and building innovative solutions."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-12">
      <div className="bg-white border-b">
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
          <p className="text-gray-600 mb-6">{event.description}</p>
          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <StatsCard
              title="Total Attendees"
              value={event.attendees}
              icon={Users}
              trend={8}
            />
            <StatsCard
              title="Duration"
              value={event.duration}
              icon={Clock}
            />
            <StatsCard
              title="Format"
              value="Live Stream"
              icon={Video}
            />
            <StatsCard
              title="Date"
              value={event.date}
              icon={Calendar}
            />
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-lg shadow">
              <div className="aspect-video">
                <iframe
                  src={event.vimeoUrl}
                  className="w-full h-full rounded-t-lg"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">About this Event</h2>
                <p className="text-gray-600">{event.description}</p>
                <div className="mt-6 flex gap-4">
                  <Button>Register Now</Button>
                  <Button variant="outline">Share Event</Button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-6">Featured Speakers</h2>
              <div className="space-y-6">
                {event.speakers.map((speaker) => (
                  <div key={speaker.name} className="flex gap-4">
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold">{speaker.name}</h3>
                      <p className="text-sm text-gray-600">{speaker.role}</p>
                      <p className="text-sm text-gray-600">{speaker.company}</p>
                      <p className="mt-2 text-sm">{speaker.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold mb-4">Event Details</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Date</p>
                    <p className="text-sm text-gray-600">{event.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-sm text-gray-600">{event.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="h-5 w-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Format</p>
                    <p className="text-sm text-gray-600">{event.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
