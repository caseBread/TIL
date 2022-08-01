const { Path } = require("./path.js");



test("Window Path Test", () => {
  const str = "C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md";
  const strArr = str.match(/^[A-Z]:[^:*?"<>|]*|[^:*?"<>|]+/gm)
  const result = strArr.map((x) => {
    const path = new Path(x);
    return path.stringfy();
  })
    expect(result).toEqual([{
        root: 'C:\\',
        base: 'problem.md',
        ext: '.md',
        name: 'problem',
        lastDirectory: 'day17',
        components: [
          'C:\\',
          'home',
          'user',
          'boost',
          'camp',
          'challenge',
          'day17',
          'problem.md'
        ],
        absoluteString: 'C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md'
      }]);
})

test("Unix Path Test", () => {
  const str = "/home/user/boost/camp/challenge/day17/problem.md";
  const strArr = str.match(/^[A-Z]:[^:*?"<>|]*|[^:*?"<>|]+/gm)
  const result = strArr.map((x) => {
    const path = new Path(x);
    return path.stringfy();
  })
    expect(result).toEqual([{
        root: '/',
        base: 'problem.md',
        ext: '.md',
        name: 'problem',
        lastDirectory: 'day17',
        components: [
          '/',     'home',
          'user',  'boost',
          'camp',  'challenge',
          'day17', 'problem.md'
        ],
        absoluteString: '/home/user/boost/camp/challenge/day17/problem.md'
      }]);
})