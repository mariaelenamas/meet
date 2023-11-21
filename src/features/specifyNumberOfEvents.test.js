import { loadFeature, defineFeature } from "jest-cucumber";
import { render, within, waitFor } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, test => {
    test("User can specify the number of events to be displayed.", ({ given, when, then }) => {
        let AppComponent;

        given("the list of events was loaded", async () => {
            AppComponent = render(<App />);
            const AppDOM = AppComponent.container.firstChild;
            await waitFor(() => {
                const eventList = within(AppDOM).queryAllByRole('listitem');
                expect(eventList[0]).toBeTruthy();
            });
        });

        when("the user specifies the number of events to be displayed", async () => {
            const button = AppComponent.queryByTestId('events-count');

            await userEvent.type(button, '{backspace}{backspace}10');
        });

        then("the app should display the specified number of events based on the user input", () => {
            const AppDOM = AppComponent.container.firstChild;
            const eventList = within(AppDOM).queryAllByRole('listitem');
            expect(eventList.length).toEqual(39);
        });
    });
});
