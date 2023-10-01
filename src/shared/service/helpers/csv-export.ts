type DataItem = {
  [key: string]: string | Date
}

export const exportToCsv = (dataList: DataItem[], headers: string[], fields: string[], filename: string) => {
  const processRow = (row: DataItem) => {
    let finalVal = ""

    for (let j = 0; j < fields.length; j++) {
      let innerValue = row[fields[j]] === null ? "" : row[fields[j]].toString()
      if (row[fields[j]] instanceof Date) {
        innerValue = row[fields[j]].toLocaleString()
      }
      let result = innerValue.replace(/"/g, '""')
      if (result.search(/("|,|\n)/g) >= 0) {
        result = '"' + result + '"'
      }
      if (j > 0) {
        finalVal += ","
      }
      finalVal += result
    }

    return finalVal + "\n"
  }

  let csvFile = headers.join(",") + "\n"

  for (let i = 0; i < dataList.length; i++) {
    csvFile += processRow(dataList[i])
  }

  const blob = new Blob(["\uFEFF" + csvFile], { type: "text/csv;charset=utf-8;" })

  const link = document.createElement("a")
  if (link.download !== undefined) {
    // feature detection
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(blob)
    link.setAttribute("href", url)
    link.setAttribute("download", filename + ".csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }
}
