class Event {
    #name;
    #sender;
    #userData;
    
    constructor (name, sender, userData) {
        this.#name = name;
        this.#sender = sender;
        this.#userData = userData;
    }

    getName() {
        return this.#name;
    }
    
    getSender() {
        return this.#sender;
    }

    getUserData() {
        return this.#userData;
    }
}