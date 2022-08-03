const { network } = require("./networkLayer");

const log = console.log;

const printSegment = (segment) => {
    log(">> Sending")
    log(segment);
}

class SendingHost {
    constructor(data) {
        this.data = data;
        this.sendingPort = 10001;
        this.receivingPort = 8080;
    }

    async sending(object, segment) {
        if (segment.sendingPocket === null) {
            const newSegment = new Object();
            newSegment.sendingPocket = "SYN";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = 10;
            newSegment.ackNumber = null;
            newSegment.contentLength = 0;
            printSegment(newSegment)

            const segmentToList = Object.values(newSegment);
            network("["+segmentToList.join(",")+"]");
            //await object.receiving(this,newSegment);

        } else if (segment.sendingPocket === "SYN+ACK") {
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = segment.ackNumber;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment)

            const segmentToList = Object.values(newSegment);
            network("["+segmentToList.join(",")+"]");
            //await object.receiving(this,newSegment);

            newSegment.sendingPocket = "DATA";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = 112;
            newSegment.ackNumber = null;
            newSegment.data = this.data.shift();
            newSegment.contentLength = newSegment.data.length;
            printSegment(newSegment, true)

            const segmentToList2 = Object.values(newSegment);
            network("["+segmentToList2.join(",")+"]");
            //await object.receiving(this,newSegment);

        } else if (segment.sendingPocket === "ACK" && this.data.length !== 0) {
            const newSegment = new Object();
            newSegment.sendingPocket = "DATA";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = segment.ackNumber;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.data = this.data.shift();
            newSegment.contentLength = newSegment.data.length;
            printSegment(newSegment)

            const segmentToList = Object.values(newSegment);
            network("["+segmentToList.join(",")+"]");
            //await object.receiving(this,newSegment);

        } else if (segment.sendingPocket === "ACK" && this.data.length === 0) {
            return;

        } else {
            throw new Error("wrong pocket name");
        }
    }
}

class ReceivingHost {
    constructor() {
        this.sendingPort = 10001;
        this.receivingPort = 8080;
    }

    async receiving(object, segment) {
        if (segment.sendingPocket === "SYN") {
            const newSegment = new Object();
            newSegment.sendingPocket = "SYN+ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = 100;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment, false)
            await object.sending(this,newSegment);

        } else if (segment.sendingPocket === "DATA") {
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = segment.ackNumber;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment, false)
            await object.sending(this,newSegment);

        } else if (segment.sendingPocket === "ACK") {
            return;
        } else {
            throw new Error("wrong pocket name");
        }
    }
}


const transport = (message) => {
    const data = []
    for (let i = 0; i < message.length; i+=100) {
        data.push(message.substr(i,100));
    }
    log(">> data: ",data); 
    const segment = {
        sendingPocket: null,
        sourcePort: null,
        destinationPort: null,
        sequenceNumber: null,
        ackNumber: null,
        contentLength: 0,
        data: data,
    }

    const sendingHost = new SendingHost(data);
    const receivingHost = new ReceivingHost();

    sendingHost.sending(receivingHost, segment);
     
}

module.exports = { transport }