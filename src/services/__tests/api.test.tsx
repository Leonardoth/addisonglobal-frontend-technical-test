import getBets from '../api';

test('Should return an array of EventType', () => {
  const result = async () => await getBets();
  expect(result.length).not.toEqual(undefined);
});
