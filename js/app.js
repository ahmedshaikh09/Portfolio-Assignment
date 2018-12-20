if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js')
    .then(() => {
        console.log("Service Worker Installed");
    })
    .catch(() => {
        console.log("Service Worker Did Not Install");
    })
}