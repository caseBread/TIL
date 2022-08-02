const { multiplePath } = require("./index.js");



describe("복수 Path 요소 지원 생성자 Test", () => {
    describe("Window Test", () => {
      const strArr1 = multiplePath("C:\\home\\user\\boost\\camp\\challenge\\day17\\problem.md");
      test("1개로 나뉘는 경우", () => {
        expect(strArr1.length).toBe(1);
      });
  
      const strArr2 = multiplePath("C:\\home\\user\\boost\\camp.txt;C:\\challenge\\day17\\problem.md");
      test("여러개로 나뉘는 경우", () => {
        expect(strArr2.length).toBe(2);
      });
    });
  
    describe("Unix Test", () => {
      const strArr1 = multiplePath("/home/user/boost/camp/challenge/day17/problem.md");
      test("1개로 나뉘는 경우", () => {
        expect(strArr1.length).toBe(1);
      });
  
      const strArr2 = multiplePath("/home/user/boost/camp.md:/challenge/day17/problem.md");
      test("여러개로 나뉘는 경우", () => {
        expect(strArr2.length).toBe(2);
      })
    })
  })