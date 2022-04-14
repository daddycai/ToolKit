/*
 * @Description: 声明命名空间名称、模块
 * @Author: JserCai
 * @Date: 2022-04-12 15:30:13
 * @LastEditTime: 2022-04-13 10:29:09
 * @LastEditors: JserCai
 */
declare namespace ToolKit {
    /**
     * 生成数字范围内的随机数
     * @param min 最小数字
     * @param max 最大数字
     * @returns number类型
     */
    export function random(min: number, max: number): number
    /**
     * 生成uuid
     * @returns string 类型 df2367fb-1d9d-4bc5-8bbc-55a1166a2e5d
     */
    export function uuid(): string
    /**
     * 判断是否为数组
     * @param input 任意值对象
     * @returns boolean
     */
    export function isArray(input: any) : boolean
    /**
     * 判断是否为空
     * @param input 任意值对象
     * @returns boolean
     */
    export function isEmpty(input: any): boolean
    /**
     * 判断是否为数字
     * @param input 任意值对象
     * @returns boolean
     */
    export function isNumber(input: any) : boolean
}

declare module 'tool-kit' {
    export = ToolKit
}