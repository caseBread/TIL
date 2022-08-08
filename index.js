const { EventManager } = require("./eventManager");
const { Worker, isMainThread, parentPort } = require("worker_threads");
const log = console.log;


const CreateInstance = EventManager.sharedInstance();

const main = () => {
    const event = EventManager.sharedInstance();
    event.stringify();

    event.postEvent("ModelDataChanged", "albumModel", {"data":"abc"})
    event.postEvent("ViewUpdated", "albumView", {"view": "xxx"})
    
    event.remove("subscriberD");
    event.postEvent("AllDataChanged", "dummy", {})
}

const worker = () => {
    const event = EventManager.sharedInstance();
    event.postEvent("DidShakeMotion", "albumController", {"from": "blue"})
    event.postEvent("AllDataChanged", "dummy", {})
}

(() => {
    const event = EventManager.sharedInstance();
    event.add("subscriberA","ModelDataChanged", "albumModel", () => {})
    event.add("subscriberB", "", "albumView", () => {})
    event.add("subscriberC","DidShakeMotion", "albumController", () => {})
    event.add("subscriberC","AllDataChanged", undefined, () => {})
    event.add("subscriberD","", undefined, () => {})

    if (isMainThread) {
        main();
        const workerThread = new Worker(__filename);
    } else {
        worker();
    }
})()








