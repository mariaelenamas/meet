import { render, waitFor, within } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';

describe('<App /> component', () => {
    let AppDOM;
    beforeEach(() => {
        AppDOM = render(<App />).container.firstChild;
    })

    test('renders list of events', () => {
        expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
    });

    test('render CitySearch', () => {
        expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
    });

    test('number of events displayed updates based on user input', async () => {
        const user = userEvent.setup();
        const AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
            const NumberOfEventsDOM = AppDOM.querySelector('#events-count');
            expect(NumberOfEventsDOM).toBeInTheDocument();
        });

        const NumberOfEventsDOM = AppDOM.querySelector('#events-count');
        const NumberOfEventsInput = within(NumberOfEventsDOM).queryByRole('textbox');

        await user.type(NumberOfEventsInput, '{backspace}{backspace}5');

        const EventListDOM = AppDOM.querySelector('#event-list');
        const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');
        expect(allRenderedEventItems.length).toEqual(39);
    });
});
