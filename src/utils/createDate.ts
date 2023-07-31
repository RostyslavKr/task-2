export default function createDate(): string {
  const timeStamp: number = Date.now();
  const monthsNames: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date: Date = new Date(timeStamp);
  const month: number = date.getMonth();
  const createdDate: string =
    monthsNames[month] + " " + date.getDate() + "," + date.getFullYear();
  return createdDate;
}