const log = console.log;

function Path(str) {
    this.str = str;
    this.whatFolder = this.str.includes("/") ? "/" : "\\";
}

Path.prototype.isError = function() {
    if (/[*?"<>|]/.test(this.str)) {
        throw 'Path에는 다음 문자를 사용할 수 없습니다.\n : * ? " < > |';
    }
}

Path.prototype.tokenizer = function() {
    
    const result = (this.str.includes("/")) ? this.str.split("/") : this.str.split("\\");
    result[0] = result[0] + this.whatFolder;
    return result;
}

Path.prototype.lexer = function(token) {
    const structure = {
        "root":token[0],
        "base":token[token.length-1],
        "ext":"."+token[token.length-1].split(".")[1],
        "name":token[token.length-1].split(".")[0],
        "lastDirectory":token[token.length-2],
        "components":token, // 맨처음 /추가 구현 필요
        "absoluteString":this.str,
    }
    return structure;
}

Path.prototype.stringfy = function() {
    this.isError();
    const token = this.tokenizer();
    const structure = this.lexer(token);
    return structure;
}

module.exports = { Path };