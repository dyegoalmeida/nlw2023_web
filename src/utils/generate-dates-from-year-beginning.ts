import dayjs from "dayjs";

export function generateDatesFromYearBeginning(){
  const firstOfTheYear = dayjs().startOf('year');
  const today = new Date();

  const dates = [];
  let compareDate = firstOfTheYear;

  while (compareDate.isBefore(today)){
    dates.push(compareDate.toDate());
    compareDate = compareDate.add(1, 'day');
  }
}