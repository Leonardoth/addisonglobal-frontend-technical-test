/// <reference types="cypress" />

import { click } from '@testing-library/user-event/dist/click';

/* 
When the page loads, you should fetch the data to render the event list. 

Each event must contain the event name and a list of markets associated with that event. 

For each of those markets, its name should be displayed alongside a button for each associated selection. 

Please see the screens section for more details.

Please be aware that an event may have 0 markets and in that case, the event should be ignored (not displayed). 

For the purpose of this exercise, you can consider that every market has at least one selection.

When a selection on the event list is clicked, 
it should change its color to green. Also, you should add it on the betslip by displaying its name, price and a remove button.

When the remove button for a selection in the betslip is clicked, the selection should be removed from the betslip, and the corresponding button on the event list should switch to its default color. The same behaviour should apply when a user clicks on a previously added selection (green button) on the event list.

*/

beforeEach(() => {
  cy.visit('http://localhost:3000/');
});

describe('First View', () => {
  it('Page Loads', () => {});

  it('Betslip should be closed', () => {
    cy.get('[data-cy=Betslip]').should('not.be.visible');
  });

  it('Should not have any bets at start', () => {
    cy.get('[data-cy=Betslip]')
      .get('[data-cy=Betslip-Bet]')
      .should('have.length', 0);
  });

  it('For every Event, there should be at least one market', () => {
    cy.get('[data-cy=Event]').each($el => {
      cy.wrap($el).get('[data-cy=Market]');
    });
  });
});

describe('Making Bet', () => {
  it('Should add one bet to betslip and remove it', () => {
    // Get first bet available
    cy.get('[data-cy=Selection]').first().as('firstSelection');
    // add bet
    cy.get('@firstSelection').click();
    // Notification should say that a new bet was added
    cy.get('[data-cy=Notification]').contains('Bet Added');

    // The Bet should show on Betslip
    cy.get('[data-cy=Betslip-Open').click();
    cy.get('[data-cy=Betslip]')
      .get('[data-cy=Betslip-Bet]')
      .should('have.length', 1);

    // Clicking on it again should remove the bet
    cy.get('@firstSelection').click();
    // Notification should say that a bet was removed
    cy.get('[data-cy=Notification]').contains('Removed Bet');

    cy.get('[data-cy=Betslip]')
      .get('[data-cy=Betslip-Bet]')
      .should('have.length', 0);
  });

  it('');
});
