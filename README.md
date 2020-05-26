# SL-UI框架  一个Vue UI框架
[![Build Status](https://travis-ci.org/luoshushu/SL-UI.svg?branch=master)](https://travis-ci.org/luoshushu/SL-UI)
## 介绍


## 开始使用
  1、添加css样式
  使用本框架前，请在css中开启border-box
  ```
  *,*::before,*::after{box-sizing:border-box;}
  ```
  IE 8及以上浏览器都支持此样式

  设置默认颜色等变量（后续优化，修改）
  ```
    :root {
      --button-height: 32px;
      --font-size: 16px;
      --button-bg: white;
      --button-active-bg: #eee;
      --border-radius: 4px;
      --color: #333;
      --border-color: #999;
      --border-color-hover: #666;
    }
  ```
  IE 15及以上浏览器都支持此样式

2、安装 sl-ui
```
npm i -S  sl-ui
```
3、引入
```
import {Button,ButtonGroup,Icon} from 'sl-ui'
import 'sl-ui/dist/index.css'
export default {
  components: {
    'sl-button':Button,
    ButtonGroup,
    Icon
  }
}
```


## 文档
 ### 已完成组件
 - [x] 按钮Button
 - [x] 输入框Input
 - [x] 图标Icon
 - [x] 网格布局Row/Col
 - [x] 吐司Toast
 - [x] 标签页Tabs
## 提问
## 变更记录
## 联系方式
## 贡献代码