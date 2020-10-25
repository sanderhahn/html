import { unescape } from "./unescape.ts";
import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";

const text = "test: &<>\"'";
const html = "test: &amp;&lt;&gt;&#34;&#39;";
assertEquals(unescape(html), text);
assertEquals(unescape("&aacute;&#225;&#xE1;"), "ááá");
assertEquals(unescape("&copy;"), "©");

// Entities can be without semicolon:
// https://mathiasbynens.be/notes/ambiguous-ampersands
assertEquals(unescape("&copy"), "©");
assertEquals(unescape("&#225"), "á");
assertEquals(unescape("&#xE1"), "á");
assertEquals(unescape("foo &amp bar"), "foo & bar");
assertEquals(unescape(`<a href="some?param&param">`), `<a href="some?param&param">`);
