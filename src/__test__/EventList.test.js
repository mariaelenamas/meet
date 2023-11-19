import { render, within, waitFor } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';
import App from "../App";

describe('<EventList /> component', () => {
    let EventListComponent;

    let allEvents;

    beforeAll(async () => {
        allEvents = await getEvents();
    });

    beforeEach(async () => {
        EventListComponent = render(<EventList event={allEvents[0]} />);
    })

    // test('renders correct number of events', () => {
    //     EventListComponent.rerender(<EventList events={
    //         [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]
    //     } />);
    //     expect(EventListComponent.getAllByRole("listitem")).toHaveLength(4);
    // });

    test('renders correct number of events', async () => {
        const allEvents = await getEvents();
        EventListComponent.rerender(<EventList events={allEvents} />);
        expect(EventListComponent.getAllByRole("listitem")).toHaveLength(allEvents.length);
    });
});

describe('<EventList /> integration', () => {
    test('renders a list of 32 events when the app is mounted and rendered', async () => {
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;
        const EventListDOM = AppDOM.querySelector('#event-list');
        await waitFor(() => {
            const EventListItems = within(EventListDOM).queryAllByRole('listitem');
            expect(EventListItems.length).toBe(39);
        });
    });
});
