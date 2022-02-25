/**
 * 对象的深度拷贝
 * 克隆所有JSON类型：Object Array Number String null
 * 附加支持：Date (复制) undefined (复制)
 * @param {Object|Array} o 待深度复制的对象
 */
function clone(o) {
    if (typeof o !== 'object' || o === null)
        return o;
    if (o instanceof Date)
        return new Date(o);
    if (Array.isArray(o)) {
        const keys = Object.keys(o);
        const a2 = new Array(keys.length);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            a2[k] = clone(o[k]);
        }
        return a2;
    }
    const o2 = {};
    for (const k in o) {
        if (Object.hasOwnProperty.call(o, k) === false)
            continue;
        o2[k] = clone(o[k]);
    }
    return o2;
}

export { clone as default };
