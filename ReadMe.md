# 对象的深度拷贝

 支持克隆所有JSON类型：Object Array Number String null
 附加支持：Date (复制) undefined (复制)
 入参 {Object|Array} o 待深度复制的对象

## 构建最终产物

执行以下命令安装构建前的依赖
```bash
npm install
```

执行以下命令可在`dist`目录中构建出最终文件，也提供TypeScript的语义文件。
```bash
npm run build
```

仓库修改自 [rfdc](https://github.com/davidmarkclements/rfdc)
只用于Web端的简单版本。