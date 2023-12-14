/*
 * 📜 @augu/eslint-config: Shareable ESLint configuration for my projects
 * Copyright (c) 2019-2024 Noel Towa <cutie@floofy.dev>
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

import { hasOwnProperty } from '@noelware/utils';
import type { Linter } from 'eslint';

export default async function vue(): Promise<Linter.FlatConfig> {
    const [parser, plugin] = await Promise.all([
        import('vue-eslint-parser').then((m) => (hasOwnProperty(m, 'default') ? m.default : m)),
        import('eslint-plugin-vue').then((m) => (hasOwnProperty(m, 'default') ? m.default : m))
    ]);

    return {
        ignores: ['index.html'],
        languageOptions: {
            parser: parser as any,
            sourceType: 'module'
        },
        plugins: {
            vue: plugin
        },
        rules: {
            ...plugin.configs['vue3-recommended'].rules,

            'vue/singleline-html-element-content-newline': 'off',
            'vue/multi-word-component-names': 'off',
            'vue/no-multiple-template-root': 'off', // we're using vue 3, so this doesn't matter
            'vue/max-attributes-per-line': 'off',
            'vue/html-self-closing': 'off',
            'vue/html-indent': ['error', 4]
        }
    } satisfies Linter.FlatConfig;
}
