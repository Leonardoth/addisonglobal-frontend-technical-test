import Event from './Event';
import { MockMarket } from '../../utils/testMocks';

describe('<Event/>', () => {
  const eventMock = {
    id: 'Event1',
    name: 'Mock Event',
    markets: [MockMarket],
  };

  it('Mounts', () => {
    cy.mountWithProviders(<Event {...eventMock} />);
  });

  it('Displays Event Name', () => {
    cy.mountWithProviders(<Event {...eventMock} />);
    cy.get('[data-cy=EventName]').should('have.text', eventMock.name);
  });
});
