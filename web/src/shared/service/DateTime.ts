import moment from "moment"

export const convertDateTimeToString = (dateTime: number) => {
  return moment(dateTime).format("YYYY.MM.DD")
}

export const convertTimestampToDateTimeFormat = (timestamp: number, format = "YYYY.MM.DD") => {
  return moment(timestamp).format(format)
}
