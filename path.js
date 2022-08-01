const log = console.log;

function Path(str) {
    this.str = str;
}

Path.prototype.isError = function() {
    if (/[*?"<>|]/.test(this.str)) {
        throw 'Path에는 다음 문자를 사용할 수 없습니다.\n : * ? " < > |';
    }
}

Path.prototype.tokenizer = function(str) {
    
    const result = (str.includes("/")) ? str.split("/") : str.split("\\");
    const whatFolder = str.includes("/") ? "/" : "\\";
    result[0] = result[0] + whatFolder;
    return result;
}

Path.prototype.parser = function(token) {
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
    const token = this.tokenizer(this.str);
    const structure = this.parser(token);
    return structure;
}

Path.prototype.appendComponents = function(component) {
    this.token.splice(this.token.length-1,0,component);
}

Path.prototype.deleteLastComponent = function() {
    this.token.splice(this.tokwn.length-2,1);
}

Path.prototype.relative = function(to) {
    // 좀더 함수형으로 수정 필요
    const toToken = this.tokenizer(to);
    const thisToken = this.tokenizer(this.str);
    let cnt = 0;
    for (let i = 0; i < thisToken.length; i++) {
        if (thisToken[i] !== toToken[i]) {
            break; 
        }
        cnt++;
    }
    let result = "/..".repeat(thisToken.length-cnt).substring(1);
    for (let i = cnt; i < toToken.length; i++) {
        result += "/"+toToken[i];
    }
    return result;
    
}

module.exports = { Path };