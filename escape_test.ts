import { escape } from "./escape.ts";
import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";

const text = "test: &<>\"'";
const html = "test: &amp;&lt;&gt;&#34;&#39;";
assertEquals(escape(text), html);
