const { Path } = require("./path.js");


describe("Path 생성 Test", () => {
  describe("Window Test", () => {
    const path = new Path("C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md");
    test("tokenizer Test", () => {
      expect(path.getToken())
        .toEqual([
        "C:\\", "home", "user", "boost", "camp",
        "challenge", "day17", "problem.md",
      ]);
    });

    test("parser Test", () => {
      expect(path.stringfy())
        .toEqual({
        "root": "C:\\",
        "base": "problem.md",
        "ext": ".md",
        "name": "problem",
        "lastDirectory": "day17",
        "components": [
          "C:\\", "home", "user", "boost", "camp", 
          "challenge", "day17", "problem.md",
        ],
      });
    });

    test("appendComponent Test", () => {
      path.appendComponents("base");
      expect(path.absoluteString())
        .toEqual("C:\\home\\user\\boost\\camp\\challenge\\day17\\base\\problem.md");
    });

    test("deleteLastComponent Test", () => {
      path.deleteLastComponent();
      expect(path.absoluteString())
        .toEqual("C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md")
    })

    test("relative Test", () => {
      expect(path.relative("C:\\home\\user\\boost\\camp\\membership\\gagosipda.md"))
        .toEqual("..\\..\\membership\\gagosipda.md");   
    })
  });


  describe("Unix Test", () => {
    const path = new Path("/home/user/boost/camp/challenge/day17/problem.md");
    test("tokenizer Test", () => {
      expect(path.getToken())
        .toEqual([
          "/", "home", "user", "boost", "camp",
          "challenge", "day17", "problem.md",
        ]);
    });

    test("parser Test", () => {
      expect(path.stringfy())
        .toEqual({
          "base": "problem.md", 
          "components": [
            "/", "home", "user", "boost", "camp", 
            "challenge", "day17", "problem.md"
          ], 
          "ext": ".md", 
          "lastDirectory": "day17", 
          "name": "problem", 
          "root": "/"
        });
    });

    test("appendComponent Test", () => {
      path.appendComponents("base");
      expect(path.absoluteString())
        .toEqual("/home/user/boost/camp/challenge/day17/base/problem.md");
    });

    test("deleteLastComponent Test", () => {
      path.deleteLastComponent();
      expect(path.absoluteString())
        .toEqual("/home/user/boost/camp/challenge/day17/problem.md")
    })

    test("relative Test", () => {
      expect(path.relative("/home/user/boost/camp/membership/gagosipda.md"))
        .toEqual("../../membership/gagosipda.md");   
    })
  })

});

