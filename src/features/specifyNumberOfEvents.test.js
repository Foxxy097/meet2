import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {

    test('When user hasn’t specified a number, 32 is the default number', ({ given, when, then }) => {
        given('a user has not chosen how many events to see on one page', () => {

        });

        when('the user opens the page', () => {

        });

        then('they will see 32 events by default' , ( ) => {

        });
    });

    test('User can change the number of events they want to see', ({ given, when, then }) => {
        given('the user wants to change the number of events on a page', () => {

        });

        when('they click the dropdown', () => {

        });

        then('they will be able to choose the number of events they can see at once', () => {

        });
    });

});