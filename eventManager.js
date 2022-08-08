const { Event } = require("./event");
const log = console.log;

class EventManager {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.listeners = {};
    }

    add(subscriber, event, sender, handler) {
        const key = [event,sender];
        const value = [subscriber, handler];
        if (!this.listeners[key]) {
            this.listeners[key] = [];
        }
        this.listeners[key].push(value);
    }

    printEvent(subscriber, eventName, sender, userData) {
        log(`${subscriber}: ${eventName} event from ${sender} userData = ${userData}`);
    }

    subscribeHandler(event) {
        const eventName = event.getName();
        const senderName = event.getSender();
        const keys = [
            [ eventName, senderName ],
            [ "", senderName ],
            [ eventName, undefined ],
            [ "", undefined ],
        ]
        keys.forEach((key,i) => {
            if (this.listeners[key]) {
                this.printEvent(this.listeners[key][0], eventName, senderName, this.listeners[key][1]);

            }
        })
    }

    postEvent(name, sender, userData) {
        const event = new Event(name, sender, userData);
        this.subscribeHandler(event);
    }

    remove(subscriber) {
        for (const key in this.listeners) {
            if (this.listeners[key][0] === subscriber) {
                delete this.listeners[key];
            }
        }
    }

    stringify() {

    }
}