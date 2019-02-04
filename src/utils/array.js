/*
 * @Author: sillyy
 * @Date: 2019-02-03 01:47:36
 * @LastEditors: sillyy
 * @LastEditTime: 2019-02-04 23:23:40
 * @Description: 数组公共方法
 */
class UArray {
  /**
   * 判断数组中是否存在基本数据类型
   * @param {array} arr 数组
   * @param {any} value 筛选值-基本数据类型
   * @return {boolean} true 或 false
   */
  isExistOfBase(arr, value) {
    return arr.includes(value)
  }

  /**
   * 判断数组中是否存在复杂数据类型
   * @param {array} arr 数组
   * @param {any} value 筛选值-复杂数据类型
   * @return {boolean} true 或 false
   */
  isExistOfComplex(arr, value) {
    for (let item of arr) {
      if (!item instanceof Object) continue
      let entries = Object.entries(value)
      let isExist = entries.every(v => item[v[0]] === v[1])
      if (!isExist) continue
      return true
    }
    return false
  }
  /**
   * 获取特定值(基本数据类型)的索引
   * @param {array} arr 数组
   * @param {any} value 值-基本数据类型
   * @return {number} 索引
   */
  getIndexOfBase(arr, value) {
      return arr.indexOf(value)
  }
  /**
   * 获取特定值(复杂数据类型)的索引
   * @param {array} arr 数组
   * @param {any} value 值-复杂数据类型
   * @return {number} 索引
   */
  getIndexOfComplex(arr, value) {
    let idx = -1
    for(var i = 0, j = arr.length; i < j; i++ ){
      if (!arr[i] instanceof Object) continue
      let entries = Object.entries(value)
      let isExist = entries.every(v => arr[i][v[0]] === v[1])
      if (!isExist) continue
      return i
    }
    return -1
  }
}
module.exports = UArray
