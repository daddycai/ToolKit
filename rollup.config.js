/*
 * @Description: 打包配置
 * @Author: JserCai
 * @Date: 2022-04-12 15:29:07
 * @LastEditTime: 2022-04-13 14:06:41
 * @LastEditors: JserCai
 */
import resolve from 'rollup-plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
export default {
  input: './src/index.ts', // 入口文件
  output: [
    {
      format: 'cjs', // 打包为commonjs格式
      file: 'dist/tool-kit.cjs.js', // 打包后的文件路径名称
      name: 'toolkit' // 打包后的默认导出文件名称
    },
    {
      format: 'esm', // 打包为esm格式
      file: 'dist/tool-kit.esm.js',
      name: 'toolkit'
    },
    {
      format: 'umd', // 打包为umd通用格式
      file: 'dist/tool-kit.umd.js',
      name: 'toolkit',
      minifyInternalExports: true
    }
  ],
  plugins: [typescript({ tsconfig: './tsconfig.json' }), resolve()]
}