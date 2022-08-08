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

    postEvent() {
        
    }

    remove() {

    }

    stringify() {

    }
}