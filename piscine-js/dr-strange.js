function addWeek(date) {
    const DAYS = [
      'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday',
      'secondMonday', 'secondTuesday', 'secondWednesday', 'secondThursday', 'secondFriday', 'secondSaturday', 'secondSunday'
    ];
    const EPOCH = new Date('0001-01-01');
    const daysSinceEpoch = Math.floor((date - EPOCH) / (1000 * 60 * 60 * 24))
    return DAYS[daysSinceEpoch % 14];
  }
  function timeTravel(date) {
   // let newDate = new Date(date)
    date.date.setHours(date.hour)
    date.date.setMinutes(date.minute)
    date.date.setSeconds(date.second)
    return  date.date
  }

