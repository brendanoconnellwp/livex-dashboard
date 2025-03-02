
import { DashboardHeader } from "@/components/DashboardHeader";
import { EventCard } from "@/components/EventCard";
import { StatsCard } from "@/components/StatsCard";
import { Calendar, Users, Video, Globe } from "lucide-react";

const Index = () => {
  // Sample data - in a real app, this would come from your backend
  const events = [
    {
      title: "Annual Tech Conference 2024",
      date: "March 15, 2024",
      attendees: 1200,
      vimeoUrl: "https://vimeo.com/example",
      speaker: "Jane Smith",
      imageUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80",
    },
    {
      title: "Digital Marketing Summit",
      date: "April 2, 2024",
      attendees: 800,
      vimeoUrl: "https://vimeo.com/example2",
      speaker: "John Doe",
      imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80",
    },
    {
      title: "Leadership Workshop",
      date: "April 10, 2024",
      attendees: 500,
      vimeoUrl: "https://vimeo.com/example3",
      speaker: "Sarah Johnson",
      imageUrl: "https://images.unsplash.com/photo-1475721027785-f74ec9c409d7?q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardHeader />
      <main className="container py-6 animate-fade-in">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <StatsCard
            title="Total Events"
            value="24"
            icon={Calendar}
            trend={12}
          />
          <StatsCard
            title="Total Attendees"
            value="3.2K"
            icon={Users}
            trend={8}
          />
          <StatsCard
            title="Live Streams"
            value="18"
            icon={Video}
            trend={15}
          />
          <StatsCard
            title="Countries Reached"
            value="42"
            icon={Globe}
            trend={5}
          />
        </div>

        <h2 className="text-2xl font-semibold mb-6">Upcoming Events</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
