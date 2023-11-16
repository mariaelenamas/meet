import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import './App.css';


const App = () => {
  const [locations, SetLocations] = useState([]);
  const [events, setEvents] = useState([]);

  const getAllEvents = async () => {
    const events = await getEvents()
    const AllLocations = extractLocations(events)
    SetLocations(AllLocations);
    setEvents(events);
  }

  useEffect(() => {
    getAllEvents()
  }, [])


  return (
    <div className="App">
      <CitySearch allLocations={locations} />
      <EventList events={events} />
      <NumberOfEvents eventsNumber={events.legnth} />
    </div>
  );
}

export default App;
