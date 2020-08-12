export const toNum = function(num, toInt) {
    if (typeof (num) !== "number") {
        num = parseFloat(num);
    }
    if (isNaN(num)) {
        num = 0;
    }
    if (toInt) {
        num = Math.round(num);
    }
    return num;
};

export const toList = function(data) {
    if (typeof(data) === "undefined") {
        return [];
    }
    if (data instanceof Array) {
        return data;
    }
    return [data];
};

export const token = function(len, pre = "") {
    let str = Math.random().toString().substr(2);
    if (len) {
        str = str.substr(0, toNum(len));
    }
    return pre + str;
};


export default {
    toNum,
    toList,
    token
};
