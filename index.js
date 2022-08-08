const { EventManager } = require("./eventManager");

const log = console.log;

const event = new EventManager();



const main = () => {
    event.add("PublisherA","ModelDataChanged", "albumModel", () => {})
    event.add("PublisherB", "", "albumView", () => {})
    event.add("PublisherC","DidShakeMotion", "albumController", () => {})
    event.add("PublisherC","AllDataChanged", undefined, () => {})
    event.add("PublisherD","", undefined, () => {})

    event.stringify();

    event.postEvent("ModelDataChanged", "albumModel", {"data":"abc"})
    event.postEvent("ViewUpdated", "albumView", {"view": "xxx"})
    event.postEvent("DidShakeMotion", "albumController", {"from": "blue"})
    event.postEvent("AllDataChanged", "dummy", {})

    event.remove("PublisherD");
    event.postEvent("AllDataChanged", "dummy", {})
}

main();