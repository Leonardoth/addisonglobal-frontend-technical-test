function getBets(): EventType[] {
  let result: EventType[] = [];
  fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then(res => res.json())
    .then(res => {
      result = res as EventType[];
    });

  return result;
}

export default getBets;
