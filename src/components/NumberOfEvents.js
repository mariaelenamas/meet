import { useState } from "react";

const NumberOfEvents = ({ eventsNumber }) => {
    const [number, setNumber] = useState(eventsNumber ? eventsNumber : 32)
    return (
        <div id="events-count">
            <p>Select Number of Events</p>
            <input
                type="text"
                defaultValue="32"

                data-testid="events-count"
            />
        </div>
    );
    ;
}

export default NumberOfEvents;