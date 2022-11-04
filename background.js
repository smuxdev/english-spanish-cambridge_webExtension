// Listen to "content-script" messages
browser.runtime.onMessage.addListener(openDictionary);

/*
Open a panel with the Cambridge dictionary spanish-english
*/
function openDictionary (selectedText) {
   var url = "https://dictionary.cambridge.org/dictionary/english-spanish/" + selectedText;

   let creating = browser.windows.create({
     url: url,
     type: "popup",
     height: 600,
     width: 400
   });
}