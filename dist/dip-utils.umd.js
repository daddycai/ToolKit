(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.dutils = {}));
})(this, (function (exports) { 'use strict';

    /*
     * @Description: index
     * @Author: JserCai
     * @Date: 2022-04-12 15:29:41
     * @LastEditTime: 2022-04-12 15:29:42
     * @LastEditors: JserCai
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    exports.random = random;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
