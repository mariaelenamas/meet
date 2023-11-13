import { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import './App.css';
import { extractLocations, getEvents } from './api';

const App = () => {
  const [locations, SetLocations] = useState([]);
  const getAllEvents = async () => {
    const events = await getEvents()
    const AllLocations = extractLocations(events)
    SetLocations(AllLocations);
  }

  useEffect(() => {
    getAllEvents()
  }, [])


  return (
    <div className="App">
      <CitySearch allLocations={locations} />
      <EventList />
    </div>
  );
}

export default App;
