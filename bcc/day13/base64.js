function incodeBase64(str) {
    const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  
    let i = 0;
    const len = str.length;
    let c1, c2, c3, e1, e2, e3, e4; 
    const result = [];
   
    while (i < len) {
      c1 = str.charCodeAt(i++);
      c2 = str.charCodeAt(i++);
      c3 = str.charCodeAt(i++);
     
      e1 = c1 >> 2;
      e2 = ((c1 & 3) << 4) | (c2 >> 4);
      e3 = ((c2 & 15) << 2) | (c3 >> 6);
      e4 = c3 & 63;
     
      if (isNaN(c2)) {
        e3 = 64;
        e4 = 64;
      } else if (isNaN(c3)) {
        e4 = 64;
      }

      result.push(e1, e2, e3, e4);
    }

    return result.map(function (e) { return key.charAt(e); }).join('');
}

function decodeBase64(str) {
    const key = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let output = "";
    let chr1, chr2, chr3;
    let enc1, enc2, enc3, enc4;
    let i = 0;
    str = str.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (i < str.length) {
        enc1 = key.indexOf(str.charAt(i++));
        enc2 = key.indexOf(str.charAt(i++));
        enc3 = key.indexOf(str.charAt(i++));
        enc4 = key.indexOf(str.charAt(i++));
        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;
        output = output + String.fromCharCode(chr1);
        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);

        }
    }
    return output
}

module.exports = { incodeBase64, decodeBase64 }