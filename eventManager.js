const { Event } = require("./event");
const { objectMap } = require("./util");
const events = require("events");
const log = console.log;
const stringLength = 80;

const myEmitter = new events.EventEmitter();

class EventManager {
    static instance = null;
    constructor() {
        this.subscribers = {};
    }

    static sharedInstance() {
        if (this.instance === null) {
            this.instance = new EventManager();
        }
        return this.instance;
    }

    addSubscriber(subscriber, event, sender, handler) {
        myEmitter.on([event, sender], handler)
        const key = [event,sender];
        const value = [subscriber, handler];
        if (!this.subscribers[key]) {
            this.subscribers[key] = [];
        }
        this.subscribers[key].push(value);
    }

    add(subscriber, event, sender, handler) {
        myEmitter.on([event, sender], handler)
        const key = [event,sender];
        const value = [subscriber, handler];
        if (!this.subscribers[key]) {
            this.subscribers[key] = [];
        }
        this.subscribers[key].push(value);
    }

    postEvent_delay(event, keys, completed, delayTime) {
        if (completed) return;
        log(`\/\/ ${event.getSender()} post "${event.getName()}" by ${delayTime}ms delay`.padEnd(stringLength, '='))
        keys.forEach((key,i) => {
            if (this.subscribers[key]) {
                completed = new Promise((resolve,reject) => {
                    setTimeout(() => {
                        resolve(myEmitter.emit(key, event));
                    },delayTime);
                }); // handler의 parameter로 event
                // setTimeout으로 return값을 받을 수 있나..?
                // 근데 여기도 flag가 필요한가??
            }
        })
    }

    postEvent_async(event, keys, completed) {
        if (completed) return;
        log(`\/\/ ${event.getSender()} post "${event.getName()}" by asynchronize`.padEnd(stringLength, '='))
        keys.forEach((key,i) => {
            if (this.subscribers[key]) {
                completed = myEmitter.emit(key, event); // handler의 parameter로 event
                // 여기 flag 를 어따 써먹지..?
            }
        })
    }

    postEvent_sync(event, keys) {
        log(`\/\/ ${event.getSender()} post "${event.getName()}" by synchronize`.padEnd(stringLength, '='))
        keys.forEach((key,i) => {
            if (this.subscribers[key]) {
                this.subscribers[key].forEach((publisher,i) => {publisher[1](event)}) // call handler
            }
        })
    }

    postEvent(name, sender, userData, completed, delayTime) {
        const event = new Event(name, sender, userData); // create event
        const eventName = event.getName();
        const senderName = event.getSender();
        const userDataName = event.getUserData();
        const keys = [
            [ eventName, senderName ], [ "", senderName ],
            [ eventName, undefined ], [ "", undefined ],
        ]

        switch(arguments.length) {
            case 5 :
                this.postEvent_delay(event, keys, completed, delayTime);
                break;
            case 4 :
                this.postEvent_async(event, keys, completed);
                break;
            case 3 :
                this.postEvent_sync(event, keys);
                break;
            default :
                throw new Error("wrong parameter")
        }
    }

    async remove(subscriber) {
        for (const key in this.subscribers) {
            this.subscribers[key] = await this.subscribers[key].filter((x) => {
                return x[0] !== subscriber;
            })
            if (this.subscribers[key].length === 0) {
                delete this.subscribers[key]
            }
        }
        log(`\/\/ remove ${subscriber} `.padEnd(stringLength, '='))
    }

    stringify() {
        log(`// subscribers data `.padEnd(stringLength,"="))
        for (const subscriber in this.subscribers) {
            let [event, sender] = subscriber.split(",")
            if (sender === "") sender = undefined
            log(`// ${this.subscribers[subscriber][0][0]} : event name = "${event}", sender name = ${sender}`)
        }
    }
}

module.exports = { EventManager }