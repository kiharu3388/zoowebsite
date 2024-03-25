const btn = document.querySelector("button"); // Get the button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // The 'dipped' class in style.css changes the appearance on click
    btn.classList.toggle("dipped");
  };
}

// Open file when the link in the preview is clicked
let goto = (file, line) => {
  window.parent.postMessage(
    { type: "glitch/go-to-line", payload: { filePath: file, line: line } }, "*"
  );
};
// Get the file opening button from its class name
const filer = document.querySelectorAll(".fileopener");
filer.forEach((f) => {
  f.onclick = () => { goto(f.dataset.file, f.dataset.line); };
});


document.addEventListener('DOMContentLoaded', function () {
  tippy('.cap', {
    placement: 'right',
    animation: 'shift-toward-subtle',
    theme: 'light-border',
    duration: 200,
  });
});

document.addEventListener('DOMContentLoaded', function () {
  tippy('.cap2', {
    placement: 'bottom',
    animation: 'shift-toward-subtle',
    theme: 'light-border',
    duration: 200,
  });
});