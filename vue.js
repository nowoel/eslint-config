/**
 * Copyright (c) 2019-2020 August
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

const { join } = require('path');

/**
 * ESLint configuration for Vue and JavaScript
 */
module.exports = {
  parserOptions: { parser: 'babel-eslint' },
  extends: join(__dirname, 'index.js'),
  plugins: ['vue'],
  parser: 'vue-eslint-parser',
  rules: {
    'vue/no-async-in-computed-properties': 'error',
    'vue/no-shared-component-data': 'warn',
    'vue/no-unused-components': 'error',
    'vue/no-template-key': 'error',
    'vue/no-unused-vars': 'error'
  }
};