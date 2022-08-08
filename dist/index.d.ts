/**
 * 对象的深度拷贝
 * 克隆所有JSON类型：Object Array Number String null
 * 附加支持：Date (复制) undefined (复制)
 * @param {Object|Array} o 待深度复制的对象
 */
export default function clone<T>(o: T): T;
