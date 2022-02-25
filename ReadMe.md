# 对象的深度拷贝

 支持克隆所有JSON类型：Object Array Number String null
 附加支持：Date (复制) undefined (复制)
 入参 {Object|Array} o 待深度复制的对象

## Types

clones all JSON types:
- Object
- Array
- Number
- String
- null

With additional support for:
- Date (copied)
- undefined (copied)
- Buffer (copied)
- TypedArray (copied)
- Map (copied)
- Set (copied)
- Function (referenced)
- AsyncFunction (referenced)
- GeneratorFunction (referenced)
- arguments (copied to a normal object)

## 构建最终产物

执行以下命令安装构建前的依赖
```bash
npm install
```

执行以下命令可在`dist`目录中构建出最终文件，也提供TypeScript的语义文件。
```bash
npm run build
```

## 使用
使用很简单，此版本更多是为了提供npm包为项目使用
```typescript
import deepClone from '@asins/deep-clone';

const obj = {
    str: 'This is a string1.',
    arr: [1, 2, 3, {a: 4}],
    obj2: {
        str2: 'This is a string2.',
        obj3: {b: 5, c: [6, 7]},
    }
};
const newObj = deepClone(obj);

console.log(newObj.arr === obj.arr); // false
obj.obj2.str2 = 'string2 changed';
console.log(newObj.obj2.str2); // This is a string2.
```

## 性能测试

```bash
> npm run bench
benchDeepClone*100: 488.153ms // 首次执行
benchJsonParseJsonStringify*100: 2.155s
benchDeepClone*100: 427.873ms // 快速二次执行
benchJsonParseJsonStringify*100: 2.115s
```

## 声明
仓库修改自 [rfdc](https://github.com/davidmarkclements/rfdc)
只用于Web端的简单版本。