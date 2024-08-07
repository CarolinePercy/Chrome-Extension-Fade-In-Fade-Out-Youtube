const extensions = 'https://developer.chrome.com/docs/extensions'
const webstore = 'https://developer.chrome.com/docs/webstore'

chrome.runtime.onInstalled.addListener(() => {
    console.log("Installing...");
    chrome.action.setBadgeText({
      text: "OFF",
    });
  });


chrome.action.onClicked.addListener(async (tab) => {
    console.log("Click!");

      // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
      const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
      // Next state will always be the opposite
      const nextState = prevState === 'ON' ? 'OFF' : 'ON'
  
      // Set the action badge to the next state
      await chrome.action.setBadgeText({
        tabId: tab.id,
        text: nextState,
      });
  
      if (nextState === "ON")
      {
      }

      else if (nextState === "OFF") 
      {
      }
});