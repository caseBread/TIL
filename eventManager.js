const { Event } = require("./event");
const { objectMap } = require("./util");
const log = console.log;
const stringLength = 80;
class EventManager {
    constructor() {
        this.sharedInstance();
    }

    sharedInstance() {
        if (!this.publishers) {
            this.publishers = {};
        }
        return this.publishers;
    }

    add(subscriber, event, sender, handler) {
        const key = [event,sender];
        const value = [subscriber, handler];
        if (!this.publishers[key]) {
            this.publishers[key] = [];
        }
        this.publishers[key].push(value);
    }

    subscribeHandler(event) {
        const eventName = event.getName();
        const senderName = event.getSender();
        const userDataName = event.getUserData();
        const keys = [
            [ eventName, senderName ],
            [ "", senderName ],
            [ eventName, undefined ],
            [ "", undefined ],
        ]

        log(`\/\/ ${senderName} post "${eventName}" `.padEnd(stringLength, '='))
        keys.forEach((key,i) => {
            if (this.publishers[key]) {
                this.publishers[key].forEach((publisher,i) => {
                    log(`${publisher[0]}: ${eventName} event from ${senderName} userData = ${userDataName}`);
                })
                

            }
        })
        
    }

    postEvent(name, sender, userData) {
        const event = new Event(name, sender, userData);
        this.subscribeHandler(event);
    }

    remove(subscriber) {
        for (const key in this.publishers) {
            this.publishers[key] = this.publishers[key].filter((x) => {
                return x[0] !== subscriber;
            })
        }
        log(`\/\/ remove ${subscriber} `.padEnd(stringLength, '='))
    }

    stringify() {
        // 수정 필요
        return JSON.stringify(this.publishers);
    }
}

module.exports = { EventManager }