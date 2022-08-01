const log = console.log;

function Path(str) {
    this.isError(str);
    this.str = str;
    this.token = this.tokenizer(str);
}

Path.prototype.absoluteString = function() {
    const Token = [ ...this.token ];

    const whatFolder = this.str.includes("/") ? "/" : "\\";
    Token[0] = Token[0].replace(whatFolder,"");
    return Token.join(whatFolder);
}

Path.prototype.getToken = function() {
    return this.token;
}

Path.prototype.stringfy = function() {
    const structure = this.parser(this.token);
    return structure;
}



Path.prototype.isError = function(str) {
    if (/[*?"<>|]/.test(str)) {
        throw '입력오류 : Path에는 다음 문자를 사용할 수 없습니다.\n : * ? " < > |';
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
        "components":token, 
    }
    return structure;
}


Path.prototype.appendComponents = function(component) {
    this.token.splice(this.token.length-1,0,component);
}

Path.prototype.deleteLastComponent = function() {
    this.token.splice(this.token.length-2,1);
}

Path.prototype.relative = function(to) {
    // 좀더 함수형으로 수정 필요
    const whatFolder = this.str.includes("/") ? "/" : "\\";
    const toToken = this.tokenizer(to);
    let cnt = 0;
    for (let i = 0; i < this.token.length; i++) {
        if (this.token[i] !== toToken[i]) {
            break; 
        }
        cnt++;
    }
    let result = (whatFolder+"..").repeat((this.token.length-1)-cnt).substring(1);
    for (let i = cnt; i < toToken.length; i++) {
        result += whatFolder+toToken[i];
    }
    return result;
    
}

module.exports = { Path };