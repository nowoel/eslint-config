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

/** Options for the Astro configuration for `@augu/eslint-config`. */
export interface Options {
    /**
     * Enables the use of TypeScript inside of Astro files.
     * @default 'false'
     */
    typescript?: boolean;
}

export default async function astro({ typescript }: Options = {}): Promise<Linter.FlatConfig> {
    const [plugin, parser] = await Promise.all([
        await import('eslint-plugin-astro'),
        await import('astro-eslint-parser')
    ]).then(([plugin, parser]) => [
        hasOwnProperty(plugin, 'default') ? plugin.default : plugin,
        hasOwnProperty(parser, 'default') ? parser.default : parser
    ]);

    return {
        files: ['**/*.astro'],
        languageOptions: {
            parser: parser as any,
            sourceType: 'module',
            parserOptions:
                typescript !== undefined && typescript
                    ? {
                          parser: await import('@typescript-eslint/parser').then((m) =>
                              hasOwnProperty(m, 'default') ? m.default : m
                          ),
                          sourceType: 'module'
                      }
                    : undefined
        },
        plugins: {
            astro: plugin as any
        },

        // @ts-ignore
        rules: plugin.configs.recommended.rules
    };
}
