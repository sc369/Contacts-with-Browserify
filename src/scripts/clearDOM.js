const output = document.querySelector(".output")
const clearDOM = () => {
  while (output.firstChild) {
    console.log(output.firstChild)
    output.removeChild(output.firstChild)

  }
}

export default clearDOM