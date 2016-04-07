/*global FormData, XMLHttpRequest, FileList*/
let UploadService = (files, options) => {
  if (!options.url) {
    console.warn('UploadService: options must contain url')
    return
  }

  if (files && files instanceof FileList) {
    let formData = new FormData()
    formData.append('file', files[0])
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        if (options.onEnd) {
          options.onEnd()
        }
      }
    }

    xhr.open('POST', options.url, true)

    xhr.upload.onprogress = (e) => {
      if (options.onProgress) {
        let percentComplete = (e.loaded / e.total) * 100
        options.onProgress({percentComplete:percentComplete.toFixed(0)})
      }
    }

    xhr.send(formData)

  }
}

export default UploadService
