const attendance = {}; // 객체로 바꿀것
const group = Array.from(Array(97), () => new Array()); // campId가 저장됨
let nowGroupNumber = 1;

const missionKeyword = {
  day1: "IDE, node",
  day2: "Linux, Shell",
  day3: "Crawling, LRU",
  day4: "Heap, Stack",
  day6: "XML, XPath",
  day7: "Object, Class",
  day8: "CountSet, Closure",
  day9: "Process, Thread",
  day11: "Path, UnitTest",
  day12: "Git, Objects",
  day13: "OSI, TCP/IP",
  day14: "HTTP, Request",
  day16: "Event, Async",
  day17: "Food, Delivery",
  day18: "SQL, Report",
  day19: "Network, Server",
};

module.exports = { attendance, group, nowGroupNumber, missionKeyword };
