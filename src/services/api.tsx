function getBets(): any {
  return fetch('http://www.mocky.io/v2/59f08692310000b4130e9f71')
    .then(res => res.json())
    .then(res => {
      return res as EventType[];
    });
}

export default getBets;
