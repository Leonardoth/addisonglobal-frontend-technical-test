/** The response type of the API call */
type ResponseType = EventsType[];

/** Event Entity */
type EventType = {
  id: string;
  name: string;
  markets: MarketType[];
};

/** Market Entity */
type MarketType = {
  id: string;
  name: string;
  selections: SelectionType[];
};

/** Selection Entity */
type SelectionType = {
  id: string;
  name: string;
  price: number;
};

export { EventType, MarketType, SelectionType, ResponseType };
