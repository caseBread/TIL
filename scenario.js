const { EventManager } = require("./eventManager");
const log = console.log;



const main = async () => {
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

    
    

    // delay
    event.postEvent("ViewUpdated", "albumView", {"view": "xxx"}, false, 3000);
    log();

    // async
    event.postEvent("AllDataChanged", "dummy", {}, false);
    log();

    // sync
    event.postEvent("ModelDataChanged", "albumModel", {"data":"abc"});
    log();

    // async
    await event.postEvent("AllDataChanged", "dummy", {}, false);
    log();

    // async && completed flag = true
    event.postEvent("AllDataChanged", "dummy", {}, true);
    log();

}

main();