import React, { RefObject } from "react"

interface UploadFileService {
  extension: {
    image: string[]
    pdf: string[]
    excel: string[]
  }
  getBase64Default: (file: File) => Promise<unknown>
  getFileDetails: (file: File) => Promise<{ base64: string; name: string; extension: string }>
  fileInputRef: RefObject<HTMLInputElement>
  handleImageClick: () => void
}

export const UploadFileService: UploadFileService = {
  extension: {
    image: ["jpg", "jpeg", "png"],
    pdf: ["pdf"],
    excel: ["csv", "xlsx", "xls"],
  },
  getBase64Default: (file: File) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    }),
  getFileDetails: async (file: File) => {
    const base64 = (await UploadFileService.getBase64Default(file)) as string
    const base64_cover = base64.slice(base64.toString().indexOf("64,") + 3, base64.toString().length)
    const name = file.name.slice(0, file.name.lastIndexOf(".")) || ""
    const extension = file.name.split(".").pop() ?? ""
    return { base64: base64, name, extension, base64_cover }
  },
  fileInputRef: React.createRef<HTMLInputElement>(),
  handleImageClick: () => {
    if (UploadFileService.fileInputRef.current) {
      UploadFileService.fileInputRef.current.click()
    }
  },
}

export default UploadFileService
