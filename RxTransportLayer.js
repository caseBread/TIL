const log = console.log;

const printSegment = (segment) => {
    log("<< Receiving");
    log(segment);
}

class ReceivingHost {
    constructor() {
        this.sendingPort = 10001;
        this.receivingPort = 8080;
        this.object = null;
    }

    setObject = (object) => {
        this.object = object;
    }

    rxPhysical = (hex) => {
        // hex to string
        let frame = ""
        for (let i = 0; i < hex.length; i+=2) {
            frame += String.fromCharCode(parseInt(hex.substr(i,2),16));
        }
        console.log(frame);
        this.rxDataLink(frame);
    }

    rxDataLink = (frame) => {
        const MAC = "3C:5A:B4:6F:EA:DC"
        const destinationMAC = frame.substr(1,17);
        const sendingMAC = frame.substr(18,17);
        if (MAC !== destinationMAC) return;
        const datagram = frame.substring(37,frame.length-1);
        console.log(datagram);
        this.rxNetwork(datagram);
    }

    rxNetwork = (datagram) => {
        const IP = "192.168.1.5"
        const destinationIP = datagram.substr(1,11);
        const sendIP = datagram.substr(12,11);
        if (IP !== destinationIP) return;
        const segment = datagram.substring(25,datagram.length-1);
        this.receiving(segment);
    }

    async receiving(segment) {

        if (segment.substr(1,3) === "SYN") {
            const newSegment = new Object();
            newSegment.sendingPocket = "SYN+ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = 100;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment)
            //await object.sending(this,newSegment);

        } else if (segment.substr(1,4) === "DATA") {
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = segment.ackNumber;
            newSegment.ackNumber = segment.sequenceNumber+1;
            newSegment.contentLength = 0;
            printSegment(newSegment)
            //await object.sending(this,newSegment);

        } else {
            throw new Error("wrong pocket name");
        }
    }
}

module.exports = { ReceivingHost }