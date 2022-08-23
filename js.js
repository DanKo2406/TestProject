let div = document.getElementById('div')
div.onclick = () => {
  let textarea = document.createElement('textarea')
  textarea.value = div.innerHTML
  textarea.onblur = () => {
    div.innerHTML = textarea.value
      textarea.replaceWith(div)
  }
  div.replaceWith(textarea)
  textarea.focus() 
}


document.addEventListener('DOMContentLoaded', () => alert("Загружено!"));

console.log("Hello, world!")