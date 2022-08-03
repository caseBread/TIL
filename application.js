function Application(from,to,title,file) {
    this.from = from;
    this.to = to;
    this.title = title;
    this.file = file;
}

Application.prototype.getBundle = () => {
    const tempBundle = [
        `From: ${this.from}\r\n`,
        `To: ${this.to}\r\n`,
        `Title: ${this.title}\r\n`,
        `\r\n`,
        `${this.file}`
    ]
    return tempBundle.join();
}