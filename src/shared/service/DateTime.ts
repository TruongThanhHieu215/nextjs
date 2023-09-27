import dayjs from "dayjs"

export const convertDateTimeToString = (dateTime: number) => {
  return dayjs(dateTime).format("YYYY.MM.DD")
}

export const convertTimestampToDateTimeFormat = (timestamp: number, format = "YYYY.MM.DD") => {
  return dayjs(timestamp).format(format)
}
