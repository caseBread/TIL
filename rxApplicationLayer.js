const log = console.log;

const rxApplication = (message) => {
    message.splice(3,1);
    log("================= 수신 응용계층 ======================")
    log(JSON.stringify(message.join("\n")));
}

module.exports = { rxApplication }