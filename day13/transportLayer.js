const { APR } = require("./APR");
const { rxSession } = require("./rxSessionLayer");


const log = console.log;

const printSegment = (segment, isSend) => {
    (isSend) ? log(">> Sending") : log("<< Receiving")
    log(segment);
}

class Host {
    constructor(data = "", ip1, ip2) {
        this.data = data;
        this.sendingPort = 10001;
        this.receivingPort = 8080;
        this.object = null;
        this.sendIp = ip1;
        this.receiveIp = ip2
    }

    setObject(object) {
        this.otherObject = object
    }

    network = (segment) => {
        const sendIP = "192.168.1.5";
        const receiveIP = "192.168.1.9";
        const datagram = "{"+sendIP+","+receiveIP+","+segment+"}";
        this.dataLink(datagram);
    }

    rxNetwork = (datagram) => {
        const IP = "192.168.1.5"
        const destinationIP = datagram.substr(1,11);
        const sendIP = datagram.substr(12,11);
        if (IP !== destinationIP) return;
        const segment = datagram.substring(25,datagram.length-1);
        log("================= 수신 네트워크계층 ======================");
        log(segment);
        this.sending(segment);
    }

    dataLink = (datagram) => {
        const [ sendIP, receiveIP ] = [ datagram.substr(1,11), datagram.substr(13,11) ];
        const frame = "("+APR[receiveIP]+","+APR[sendIP]+","+datagram+")";
        this.physical(frame);
    }

    rxDataLink = (frame) => {
        const MAC = APR["192.168.1.9"]
        const destinationMAC = frame.substr(1,17);
        const sendingMAC = frame.substr(18,17);
        if (MAC !== destinationMAC) return;
        const datagram = frame.substring(37,frame.length-1);
        log("================= 수신 데이터링크계층 ======================");
        log(datagram)
        this.rxNetwork(datagram);
    }

    physical = (frame) => {
        let hex = ""
        for (let i = 0; i < frame.length; i++) {
            let convertCharToHex = ""
            if (frame[i] === '\r') {
                convertCharToHex = "0D"
            } else if (frame[i] === '\n') {
                convertCharToHex = "0A"
            } else if (frame[i] === '\t') {
                convertCharToHex = "09"
            } else {
                convertCharToHex = frame.charCodeAt(i).toString(16)
            }
            hex += convertCharToHex; // 문자 => 16진수
        }
        this.otherObject.rxPhysical(hex);
    }

    rxPhysical = (hex) => {
        // hex to string
        let frame = ""
        for (let i = 0; i < hex.length; i+=2) {
            frame += String.fromCharCode(parseInt(hex.substr(i,2),16));
        }
        log("================= 수신 물리계층 ======================");
        log(frame)
        this.rxDataLink(frame);
    }

    async sending(segment) {
        const segmentArr = segment.replace(/[\[\]]/g,"").split(",");
        if (segment === "") { 
            const newSegment = new Object();
            newSegment.sendingPocket = "SYN";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = 10;
            newSegment.ackNumber = null;
            newSegment.contentLength = 0;
            printSegment(newSegment, true)

            const segmentToList = Object.values(newSegment);
            this.network("["+segmentToList.join(",")+"]");

        } else if (segment.substr(1,7) === "SYN+ACK") {
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = Number(segmentArr[4]);
            newSegment.ackNumber = Number(segmentArr[3])+1;
            newSegment.contentLength = 0;
            printSegment(newSegment, true) // 프린트만해줘

            newSegment.sendingPocket = "DATA";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = 112;
            newSegment.ackNumber = null;
            const data = this.data.shift();
            newSegment.contentLength = data.length;
            newSegment.data = data;
            
            printSegment(newSegment, true)

            const segmentToList = Object.values(newSegment);
            this.network("["+segmentToList.join(",")+"]");

        } else if (segment.substr(1,3) === "SYN") {
            const newSegment = new Object();
            newSegment.sendingPocket = "SYN+ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = 100;
            newSegment.ackNumber = Number(segmentArr[3])+1;
            newSegment.contentLength = 0;
            printSegment(newSegment, false)
            const segmentToList = Object.values(newSegment);
            this.network("["+segmentToList.join(",")+"]");

        }  else if (segment.substr(1,4) === "DATA") {23
            this.data += segmentArr[segmentArr.length-1];
            const newSegment = new Object();
            newSegment.sendingPocket = "ACK";
            newSegment.sourcePort = this.receivingPort;
            newSegment.destinationPort = this.sendingPort;
            newSegment.sequenceNumber = Number(segmentArr[4]);;
            newSegment.ackNumber = Number(segmentArr[3])+1;
            newSegment.contentLength = 0;
            printSegment(newSegment, false)

            const segmentToList = Object.values(newSegment);
            this.network("["+segmentToList.join(",")+"]");

        } else if (segment.substr(1,3) === "ACK" && this.data.length !== 0) {
            const newSegment = new Object();
            newSegment.sendingPocket = "DATA";
            newSegment.sourcePort = this.sendingPort;
            newSegment.destinationPort = this.receivingPort;
            newSegment.sequenceNumber = Number(segmentArr[4]);;
            newSegment.ackNumber = Number(segmentArr[3])+1;
            const data = this.data.shift();
            newSegment.contentLength = data.length;
            newSegment.data = data;
            
            printSegment(newSegment, true)

            const segmentToList = Object.values(newSegment);
            this.network("["+segmentToList.join(",")+"]");

        } else if (segment.substr(1,3) === "ACK" && this.data.length === 0) {
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
    const segment = "";

    const sendingHost = new Host(data, "192.168.1.5", "192.168.1.9");
    const receivingHost = new Host("", "192.168.1.5", "192.168.1.9");
    sendingHost.setObject(receivingHost);
    receivingHost.setObject(sendingHost);
    sendingHost.sending(segment);
    rxSession(receivingHost.data);
}

module.exports = { transport }