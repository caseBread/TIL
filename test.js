const { Path } = require("../path.js");



test("Window Path Test", () => {
    const path1 = new Path("C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md");
    expect(path1.stringfy()).toEqual({
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
      });
})

test("Unix Path Test", () => {
    const path2 = new Path("/home/user/boost/camp/challenge/day17/problem.md");
    expect(path2.stringfy()).toEqual({
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
      });
})