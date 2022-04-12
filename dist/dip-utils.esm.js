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

export { random };
