import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';

const App = () => {
  const [events, setEvents] = useState([]);
  const [locations, SetLocations] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(39);
  const [currentCity, setCurrentCity] = useState("See all cities");

  const getAllEvents = async () => {
    const events = await getEvents()
    const AllLocations = extractLocations(events)
    SetLocations(AllLocations);
    setEvents(events);
  }

  const fetchData = async () => {
    const allEvents = await getEvents();
    const filteredEvents = currentCity === "See all cities" ?
      allEvents :
      allEvents.filter(event => event.location === currentCity)
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  useEffect(() => {
    getAllEvents()
    fetchData();
  }, [currentCity, currentNOE])

  return (
    <div className="App">
      <CitySearch allLocations={locations} setCurrentCity={setCurrentCity} />
      <NumberOfEvents eventsNumber={events.length} setCurrentNOE={setCurrentNOE} />
      <EventList events={events} />
    </div>
  );
}

export default App;
