const output = document.querySelector(".output")
const clearDOM = () => {
  while (output.firstChild) {
    output.removeChild(output.firstChild)

  }
}

export default clearDOM