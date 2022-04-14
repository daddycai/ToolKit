<h1 align="center">前端常用函数工具包</h1>

<p align="center">汇总常用函数工具包</p>

<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/daddycai/ToolKit" />
    <img src="https://img.shields.io/github/languages/top/daddycai/ToolKit?style=flat-square&color=green"  alt="GitHub top language" />
    <img src="https://img.shields.io/badge/dynamic/json?color=green&label=github&query=%24.data.totalSubs&url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3Dgithub%26queryKey%3Ddaddycai&style=flat-square&logo=github" />
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/daddycai/ToolKit?color=yellow">
</p>

---

## 简介

前端项目开发中，会经常使用一些工具函数，随着项目数量的增多、工具函数的增多，在每个项目里面都维护一个 util.js 会带来不少的麻烦，所以还是维护一个工具函数包，希望大家也一并 commit!

## 安装使用

### 1. 安装包使用方式

安装

```shell
# npm
npm install @jsercai/tool-kit -S

# yarn
yarn add @jsercai/tool-kit -S
```

ESM 导入使用

```js
import { random } from '@jsercai/tool-kit'
console.log(random(1, 10))
```

RequireJS 导入使用

```js
const { random } = require('@jsercai/tool-kit')
console.log(random(1, 10))
```

### 2. 网页 script 直接引入使用方式

直接拷贝 dist 下的 tool-kit-umd.js 到项目里面，可直接引用

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <script src="/dist/tool-kit-umd.js"></script>
    <script>
      console.log(dutils.random(1, 10))
    </script>
  </body>
</html>
```

## 函数概览

```js
  /**
   * 生成数字范围内的随机数
   * @param min 最小数字
   * @param max 最大数字
   * @returns number类型
   */
  export function random(min: number, max: number): number
  /**
   * 时间字符串转换为时间戳
   * @param dateStr 字符串格式为 2017-02-10 18:20:30
   * 注意：此处月、日、时分秒、必须为2位数字，否则报错
   * @returns 时间戳
   */
```
