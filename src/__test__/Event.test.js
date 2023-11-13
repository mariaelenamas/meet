import { render } from '@testing-library/react';
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from '@testing-library/user-event';
import { getEvents, extractLocations } from '../api';

describe('<Event /> component', () => {
    let EventComponent
    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />); //why do we need event={mockeEvent}?
    })

    test("renders event title with 'title' role", () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    });

    test("renders event start time", () => {
        expect(EventComponent.queryByText(mockEvent.created)).toBeInTheDocument();
    });

    test("renders event location", () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    });

    const eventDom = EventComponent.container.firstChild; //why event dom?
    const details = eventDom.querySelector('.details');
    expect(details).toBeInTheDocument();

    test("by default, event's details section is hidden", () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test("shows the details section when the user clicks on the 'show details' button", () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    });

    test("hides the details section when the user clicks on the 'show details' button", () => {
        const button = EventComponent.queryByText('Show Details');
        expect(button).toBeInTheDocument();
    });

});
