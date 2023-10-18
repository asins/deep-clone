/**
 * 对象的深度拷贝
 * 克隆所有JSON类型：Object Array Number String null
 * 附加支持：Date (复制) undefined (复制)
 * @param {Object|Array} o 待深度复制的对象
 */
function clone(o) {
    let res;
    if (typeof o !== 'object' || o === null)
        res = o;
    else if (o instanceof Date)
        res = new Date(o);
    else if (Array.isArray(o))
        res = cloneArray(o, clone);
    else if (o instanceof Map)
        res = new Map(cloneArray(Array.from(o), clone));
    else if (o instanceof Set)
        res = new Set(cloneArray(Array.from(o), clone));
    else if (ArrayBuffer.isView(o))
        res = o.slice(0);
    else if (typeof Element !== "undefined" && o instanceof Element)
        res = o;
    else {
        res = {};
        for (var k in o) {
            if (Object.hasOwnProperty.call(o, k) === false)
                continue;
            // @ts-ignore Object类型转为T类型
            res[k] = clone(o[k]);
        }
    }
    return res;
}
function cloneArray(a, fn) {
    var keys = Object.keys(a);
    var a2 = new Array(keys.length);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        a2[k] = fn(a[k]);
    }
    // @ts-ignore Array类型转为T类型
    return a2;
}

export { clone as default };
