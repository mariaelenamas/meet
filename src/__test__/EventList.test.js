import { render } from '@testing-library/react';
import { getEvents } from '../api';
import EventList from '../components/EventList';

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