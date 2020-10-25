import { entity } from "./entity.ts";

/**
 * Unescape entities like "&lt;" to become "<".
 * It unescapes a larger range of entities than escape escapes.
 * For example "&aacute;" unescapes to "á", as does "&#225;" and "&#xE1;".
 * @param html value to unescape
 */
export function unescape(html: string): string {
  return html.replaceAll(
    /&#x[0-9a-fA-F]+;?|&#[0-9]+;?|&[A-Za-z0-9]+;?/g,
    (match) => {
      if (match[1] === "#") {
        if (match[2] === "x") {
          const hex = match.substring(3);
          return String.fromCharCode(parseInt(hex, 16));
        }
        const dec = match.substring(2);
        return String.fromCharCode(parseInt(dec));
      }
      const name = match.substring(1);
      if (entity[name] !== undefined) {
        return entity[name];
      }
      // unable to unescape
      return match;
    },
  );
}
