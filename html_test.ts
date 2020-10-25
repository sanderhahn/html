import { html } from "./html.ts";
import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";

assertEquals(html`<br>`.toString(), "<br>");
assertEquals(
  html`<div>${html`<span>${"R&D"}</span>`}</div>`.toString(),
  "<div><span>R&amp;D</span></div>",
);

const list = ["one", "with", `"escaping"`];
assertEquals(
  html`<ul>${list.map((item) => html`<li>${item}</li>`)}</ul>`.toString(),
  "<ul><li>one</li><li>with</li><li>&#34;escaping&#34;</li></ul>",
);

assertEquals(html`${html`>`}`.toString(), ">");
assertEquals(html`${[html`>`]}`.toString(), ">");
assertEquals(html`${[html`${">"}`]}`.toString(), "&gt;");
