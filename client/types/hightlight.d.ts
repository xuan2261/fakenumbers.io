/**
 * Generate fake and valid numbers
 *
 * @see https://fakenumbers.io
 * @license https://fakenumbers.io/license
 * @copyright 2020 Nguyen Huu Phuoc <me@phuoc.ng>
 */

declare module 'highlight.js/lib/highlight' {
    interface HighlightResult {
        value: string;
    }

    function highlight(lang: string, code: string): HighlightResult;
    function registerLanguage(name: string, language: any): void;
}

declare module 'highlight.js/lib/languages/javascript' {}
declare module 'highlight.js/lib/languages/xml' {}
