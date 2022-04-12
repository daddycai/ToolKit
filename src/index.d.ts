/*
 * @Description: 声明文件
 * @Author: JserCai
 * @Date: 2022-04-12 15:30:13
 * @LastEditTime: 2022-04-12 15:31:16
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
}

declare module 'tool-kit' {
    export = ToolKit
}