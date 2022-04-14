(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.toolkit = {}));
})(this, (function (exports) { 'use strict';

    /*
     * @Description: 基本常用工具函数
     * @Author: JserCai
     * @Date: 2022-04-13 10:08:08
     * @LastEditTime: 2022-04-13 10:08:09
     * @LastEditors: JserCai
     */
    /**
     * 生成数字范围内的随机数
     * @param min 最小数字
     * @param max 最大数字
     * @returns number类型
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    /**
     * 生成uuid
     * @returns string 类型 df2367fb-1d9d-4bc5-8bbc-55a1166a2e5d
     */
    function uuid() {
        var s = [];
        var hexDigits = '0123456789abcdef';
        for (var i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = '4';
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
        s[8] = s[13] = s[18] = s[23] = '-';
        var uuid = s.join('');
        return uuid;
    }

    /*
     * @Description: 判断是否（逻辑）相关工具函数
     * @Author: JserCai
     * @Date: 2022-04-13 10:16:55
     * @LastEditTime: 2022-04-13 11:01:08
     * @LastEditors: JserCai
     */
    /**
     * 判断是否为数组
     * @param input 任意值对象
     * @returns boolean
     */
    function isArray(input) {
        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
    }
    /**
     * 判断是否为空
     * @param input 任意值对象
     * @returns boolean
     */
    function isEmpty(input) {
        return typeof input === 'undefined' || input === null || input === '';
    }
    /**
     * 判断是否为数字
     * @param input 任意对象值
     * @returns boolean
     */
    function isNumber(input) {
        return input instanceof Number || Object.prototype.toString.call(input) === '[object Number]';
    }

    exports.isArray = isArray;
    exports.isEmpty = isEmpty;
    exports.isNumber = isNumber;
    exports.random = random;
    exports.uuid = uuid;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
