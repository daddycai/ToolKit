/*
 * @Description: 测试
 * @Author: JserCai
 * @Date: 2022-04-13 10:32:04
 * @LastEditTime: 2022-04-13 10:58:26
 * @LastEditors: JserCai
 */
import { isArray, isEmpty, isNumber } from '../../src/index'

describe('判断是否为数组', () => {
    it('isArray({}) -> should return false', () => {
        expect(isArray({})).toBe(false)
    })
    it('isArray([]) -> should return true', () => {
        expect(isArray([])).toBe(true)
    })
})

describe('判断是否为空', () => {
    it('isEmpty(66) -> should return false', () => {
        expect(isEmpty(66)).toBe(false)
    })
    it('isEmpty(null) -> should return true 111', () => {
        expect(isEmpty(null)).toBe(true)
    })
    it('isEmpty(undefined) -> should return undefined', () => {
        expect(isEmpty(undefined)).toBe(true);
    })
    it('isEmpty("") -> should return ""', () => {
        expect(isEmpty("")).toBe(true)
    })
})

describe('判断是否为数字', () => {
    it('isNumber("35") -> should return false', () => {
        expect(isNumber('35')).toBe(false)
    })
    it('isNumber(345) -> should return true', () => {
        expect(isNumber(345)).toBe(true)
    })
})