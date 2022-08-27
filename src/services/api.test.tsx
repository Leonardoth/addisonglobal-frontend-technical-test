import getBets from '../api';

test('Should return an array', async () => {
  const result = await getBets();
  expect(Array.isArray(result)).toEqual(true);
});
