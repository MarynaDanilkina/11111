export const getTimeAgo = (minutes: number) => {
  const days = Math.floor(minutes / (60 * 24));
  const hours = Math.floor((minutes % (60 * 24)) / 60);
  const mins = minutes % 60;

  const getDeclension = (
    number: number,
    nominative: string,
    genitiveSingular: string,
    genitivePlural: string
  ) => {
    if (number % 10 === 1 && number % 100 !== 11) {
      return nominative;
    } else if (
      [2, 3, 4].includes(number % 10) &&
      ![12, 13, 14].includes(number % 100)
    ) {
      return genitiveSingular;
    } else {
      return genitivePlural;
    }
  };

  const minutesDeclension = getDeclension(mins, "минуту", "минуты", "минут");
  const hoursDeclension = getDeclension(hours, "час", "часа", "часов");
  const daysDeclension = getDeclension(days, "день", "дня", "дней");

  if (days > 0) {
    if (hours > 0 && mins > 0) {
      return `${days} ${daysDeclension}, ${hours} ${hoursDeclension} и ${mins} ${minutesDeclension} назад`;
    } else if (hours > 0) {
      return `${days} ${daysDeclension} и ${hours} ${hoursDeclension} назад`;
    } else if (mins > 0) {
      return `${days} ${daysDeclension} и ${mins} ${minutesDeclension} назад`;
    } else {
      return `${days} ${daysDeclension} назад`;
    }
  } else if (hours > 0) {
    if (mins > 0) {
      return `${hours} ${hoursDeclension} и ${mins} ${minutesDeclension} назад`;
    } else {
      return `${hours} ${hoursDeclension} назад`;
    }
  } else {
    return `${mins} ${minutesDeclension} назад`;
  }
};
