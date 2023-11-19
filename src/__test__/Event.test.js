import { render } from '@testing-library/react';
import Event from "../components/Event";
import mockData from "../mock-data";
import userEvent from '@testing-library/user-event';
import { getEvents, extractLocations } from '../api';

let mockEvent = mockData[0]
describe('<Event /> component', () => {
    let EventComponent

    beforeEach(() => {
        EventComponent = render(<Event event={mockEvent} />); //why do we need event={mockeEvent}?
    })

    test("renders event title with 'title' role", () => {
        expect(EventComponent.queryByText(mockEvent.summary)).toBeInTheDocument();
    });

    test("renders event start time", () => {
        expect(EventComponent.queryByText(mockEvent.start.dateTime)).toBeInTheDocument();
    });

    test("renders event location", () => {
        expect(EventComponent.queryByText(mockEvent.location)).toBeInTheDocument();
    });


    test("by default, event's details section is hidden", () => {
        const eventDOM = EventComponent.container.firstChild;
        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

    test("shows the details section when the user clicks on the 'show details' button", async () => {
        const user = userEvent.setup();
        const button = EventComponent.queryByText('Show Details');
        await user.click(button);
        const eventDom = EventComponent.container.firstChild;
        const details = eventDom.querySelector('.details');
        expect(details).toBeInTheDocument();
    });

    test("hides the details section when the user clicks on the 'show details' button", async () => {
        const button = EventComponent.queryByText('Show Details');
        const eventDOM = EventComponent.container.firstChild;
        await userEvent.click(button);

        const hideButton = EventComponent.queryByText('Hide Details');
        await userEvent.click(hideButton);

        const details = eventDOM.querySelector('.details');
        expect(details).not.toBeInTheDocument();
    });

});
