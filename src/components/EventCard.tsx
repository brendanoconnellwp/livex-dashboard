import { Calendar, Users, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface EventCardProps {
  title: string;
  date: string;
  attendees: number;
  vimeoUrl: string;
  speaker: string;
  imageUrl: string;
}

export const EventCard = ({
  title,
  date,
  attendees,
  vimeoUrl,
  speaker,
  imageUrl,
}: EventCardProps) => {
  return (
    <Link to={`/event/${encodeURIComponent(title)}`} className="block">
      <Card className="overflow-hidden transition-all hover:shadow-lg animate-fade-up">
        <div className="aspect-video relative overflow-hidden bg-gray-100">
          <img
            src={imageUrl}
            alt={title}
            className="object-cover w-full h-full transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Calendar className="h-4 w-4" />
              <span>{date}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Users className="h-4 w-4" />
              <span>{attendees} attendees</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Video className="h-4 w-4" />
              <a
                href={vimeoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Watch Stream
              </a>
            </div>
            <div className="pt-2">
              <span className="text-sm font-medium">Speaker:</span>
              <p className="text-sm text-gray-600">{speaker}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};
