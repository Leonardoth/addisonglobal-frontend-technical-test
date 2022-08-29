import { EventType } from '../types/types';
async function getBets(): Promise<EventType[]> {
  return await fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71').then(
    res => res.json()
  );
}

export default getBets;
