RUI 是一套基础样式库



# 执行任务

```
$ gulp watch
```


# 文档预览

1. 克隆RUI
2. 切换到 gh-pages 分支

```bash
$ git clone git@gitlab.hotpu.cn:FED/RUI.git
$ git checkout gh-pages
```




# 使用

JS 中引入模块。未上传npm，目前不能使用，如果使用，使用方法

1. `$ git clone URL` 进入`cd rui` 。
2. 运行命令 `npm link` 添加软链，就相当于全局安装`rui`。
3. 进入要使用的项目 `npm link rui` 在该项目中进行添加软链，此时可以在项目中引用。

```js
var rui = require('rui'),
    stylus    = require('stylus');

function compile(str) {
  return stylus(str)
    .use(rui());
}
```

Stylus 中使用

```stylus
@import 'rui/variables'
@import 'rui/mixins'
@import 'rui/alerts'
```
