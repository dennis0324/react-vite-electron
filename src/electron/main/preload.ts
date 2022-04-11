export {}
const { ipcRenderer, contextBridge} = require('electron');
window.addEventListener('load',() => {
  console.log("load")
  ipcRenderer.send('MainPageLoad',"");

})
contextBridge.exposeInMainWorld('electron',{
  notificationApi : {
    sendNotification(message:string){
      console.log(message)
      ipcRenderer.send('notify',message);
    },
  }
})

ipcRenderer.on("indexDataSend",(evt:any,message:string) => {
  console.log(message);
  
})