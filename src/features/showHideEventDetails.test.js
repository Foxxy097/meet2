import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {

    test('An event element is collapsed by default', ({ given, when, then }) => {
        given('a user in on the main page', () => {

        });

        when('event handel is not clicked', () => {

        });

        then('the event details will be collapsedt', () => {

        });
    });

    test('User can expand an event to see its details', ({ given, when, then }) => {
        given('a user would like details on an event', () => {

        });

        when('the user clicks on event', () => {

        });

        then('the event details expand', () => {

        });
    });
    test('User can collapse an event to hide its details', ({ given, when, then }) => {
        given('a user found the details they needed and want to move on', () => {

        });

        when('the user clicks on an expanded event', () => {

        });

        then('the event will collapse to see less details', () => {

        });
    });


});