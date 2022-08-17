const { EventManager } = require("./eventManager");
const { Worker, isMainThread, parentPort } = require("worker_threads");
const log = console.log;


const CreateInstance = EventManager.sharedInstance();

const main = async () => {
    const event = EventManager.sharedInstance();
    event.stringify();
    log();
    
    event.postEvent("ModelDataChanged", "albumModel", {"data":"abc"});
    log();
    event.postEvent("ViewUpdated", "albumView", {"view":"abc"});
    log();
    event.postEvent("DidShakeMotion", "albumController", {"from":"blue"});
    log();
    event.postEvent("AllDataChanged", "dummy", {});
    log();
    await event.remove("subscriberD");
    event.postEvent("AllDataChanged", "dummy", {});
    log();

    
}

const worker = () => {
    const event = EventManager.sharedInstance();
    event.postEvent("DidShakeMotion", "albumController", {"from": "blue"})
    event.postEvent("AllDataChanged", "dummy", {})
}

(() => {
    const event = EventManager.sharedInstance();

    event.add("subscriberA","ModelDataChanged", "albumModel", (publishedEvent) => {
        log(`subscriberA : ${publishedEvent.getName()} event from ${publishedEvent.getSender()} userData = ${publishedEvent.getUserData()}`);
        return flag = true;
    })
    event.add("subscriberB", "", "albumView", (publishedEvent) => {
        log(`subscriberB : ${publishedEvent.getName()} event from ${publishedEvent.getSender()} userData = ${publishedEvent.getUserData()}`);
        return flag = true;
    })
    event.add("subscriberC","DidShakeMotion", "albumController", (publishedEvent) => {
        log(`subscriberC : ${publishedEvent.getName()} event from ${publishedEvent.getSender()} userData = ${publishedEvent.getUserData()}`);
        return flag = true;
    })
    event.add("subscriberC","AllDataChanged", undefined, (publishedEvent) => {
        log(`subscriberC : ${publishedEvent.getName()} event from ${publishedEvent.getSender()} userData = ${publishedEvent.getUserData()}`);
        return flag = true;

    })
    event.add("subscriberD","", undefined, (publishedEvent) => {
        log(`subscriberD : ${publishedEvent.getName()} event from ${publishedEvent.getSender()} userData = ${publishedEvent.getUserData()}`);
        return flag = true;
    })

    if (isMainThread) {
        const workerThread = new Worker(__filename);
        main();
    } else {
        worker();
    }
})()








