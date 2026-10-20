function minimumRooms(meetings) {
  const starts = meetings.map((meeting) => meeting[0]).sort((a, b) => a - b);
  const ends = meetings.map((meeting) => meeting[1]).sort((a, b) => a - b);
  let i = 0;
  let j = 0;
  let rooms = 0;
  let maxRooms = 0;
  while (i < starts.length) {
    if (starts[i] < ends[j]) {
      rooms++;
      maxRooms = Math.max(maxRooms, rooms);
      i++;
    } else {
      rooms--;
      j++;
    }
  }
  return maxRooms;
}
console.log(minimumRooms(meetings));