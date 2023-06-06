import EventList from "../components/events/EventList";
import { getFeaturedEvents } from "../dumy-data";

const Home = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default Home;
