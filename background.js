// Listen to "content-script" messages
browser.runtime.onMessage.addListener(openDictionary);

function onCreated(windowInfo) {
  browser.windows.onFocusChanged.addListener(e =>
    browser.windows.remove(windowInfo.id)
  );
}

function onError(error) {
  console.log(`Error: ${error}`);
}

/*
Open a panel with the Cambridge dictionary spanish-english
*/
function openDictionary (selectedText) {

  if(selectedText) {
     var url = "https://dictionary.cambridge.org/dictionary/english-spanish/" + selectedText;

     let windowDic = browser.windows.create({
       url: url,
       type: "popup",
       height: 600,
       width: 400
     });

    windowDic.then(onCreated, onError);

  }

}

