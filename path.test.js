const { Path } = require("./path.js");






describe("Path 생성 Test", () => {


  // 에러 케이스가 아닐 경우 오류 발생
  test("Error Test : Path에 허용되지 않는 특수문자가 있는 경우", () => {
    try {
      new Path ("/a/a/a?a.md");
      expect(false).toBe(true); // 위에서 catch되지 않는다면 강제 오류 발생
    } catch (err) {
      expect(err).toEqual('입력오류 : Path에는 다음 문자를 사용할 수 없습니다.\n : * ? " < > |');
    }
  })

  test("Error Test : 필수항목이 없는경우 (Window)", () => {
    try {
      new Path ("\\home\\user\\boost.md");
      expect(false).toBe(true);
    } catch (err) {
      expect(err).toEqual('입력오류 : 절대경로가 아닙니다.');
    }
  })

  test("Error Test : 필수항목이 없는경우 (Unix)", () => {
    try {
      new Path ("home/user/boost/camp/challenge/day17/base/problem.md");
      expect(false).toBe(true);
    } catch (err) {
      expect(err).toEqual('입력오류 : 절대경로가 아닙니다.');
    }
  })

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

