const printSegment = (segment) => {
    log("<< Receiving");
    log(segment);
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
            printSegment(newSegment)
            await object.sending(this,newSegment);

        } else if (segment.sendingPocket === "DATA") {
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = segment.ackNumber;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment)
            await object.sending(this,newSegment);

        } else if (segment.sendingPocket === "ACK") {
            return;
        } else {
            throw new Error("wrong pocket name");
        }
    }
}