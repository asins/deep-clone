"use strict";
/**
 * 对象的深度拷贝
 * 克隆所有JSON类型：Object Array Number String null
 * 附加支持：Date (复制) undefined (复制)
 * @param {Object|Array} o 待深度复制的对象
 */
exports.__esModule = true;
function clone(o) {
    if (typeof o !== 'object' || o === null)
        return o;
    if (o instanceof Date)
        return new Date(o);
    if (Array.isArray(o))
        return cloneArray(o, clone);
    var o2 = {};
    for (var k in o) {
        if (Object.hasOwnProperty.call(o, k) === false)
            continue;
        var cur = o[k];
        if (typeof cur !== 'object' || cur === null) {
            o2[k] = cur;
        }
        else if (cur instanceof Date) {
            o2[k] = new Date(cur);
        }
        else {
            o2[k] = clone(cur);
        }
    }
    return o2;
}
exports["default"] = clone;
function cloneArray(a, fn) {
    var keys = Object.keys(a);
    var a2 = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var cur = a[k];
        if (typeof cur !== 'object' || cur === null) {
            a2[k] = cur;
        }
        else if (cur instanceof Date) {
            a2[k] = new Date(cur);
        }
        else {
            a2[k] = fn(cur);
        }
    }
    return a2;
}
