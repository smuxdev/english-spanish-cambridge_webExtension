/*
Read selected text and call to the background
*/
function copySelection(evt) {
  let selectedText = window.getSelection().toString().trim();

  if (selectedText) {
    console.log(">> " + selectedText);

    let icon = document.createElement("p");
    icon["id"] = "smx-icon-dic";
    icon.innerHTML = " &spades; ";
    icon.style.position = "absolute";
    icon.style.zIndex = "9999";
    icon.style.top = (evt.pageY + 12) + "px";
    icon.style.left = evt.pageX + "px";
    icon.style.border = "solid grey 1px";
    icon.style.background = "rgb(255, 187, 187)";
    icon.style.opacity = "50%";
    icon.style.borderRadius ="10px";
    icon.style.cursor = "pointer";

    document.body.appendChild(icon);

    icon.addEventListener("click", function() {
      browser.runtime.sendMessage(selectedText);
      icon.remove();
    });

  }
}

/*
Add copySelection() as a listener to dblclick events.
*/
document.addEventListener("dblclick", copySelection);
document.addEventListener("click", function() {
  if(document.getElementById("smx-icon-dic")) {
    document.getElementById("smx-icon-dic").remove();
  }
});