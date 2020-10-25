# html

HTML escape/unescape inspired by [html](https://golang.org/pkg/html/) and html template literal inspired by `lit-html`.

### escape

Escape five html entities: <, >, &, ' and ".

```ts
import { escape } from "https://deno.land/x/html_escape/escape.ts";

console.log(escape(`"Fran & Freddie's Diner" <tasty@example.com>`));
// &#34;Fran &amp; Freddie&#39;s Diner&#34; &lt;tasty@example.com&gt;
```

### unescape

Unescape html entities to characters.

```ts
import { unescape } from "https://deno.land/x/html_escape/unescape.ts";

console.log(unescape("&quot;Fran &amp; Freddie&#39;s Diner&quot; &lt;tasty@example.com&gt;"));
// "Fran & Freddie's Diner" <tasty@example.com>
```

### html

Template literal to safely embed values inside html fragments.

```ts
import { html } from "https://deno.land/x/html_escape/html.ts";

const list = ["one", "with", `"escaping"`];
function li(value: string) {
  return html`<li>${value}</li>`;
}
const body = html`<ul>${list.map(li)}</ul>`;

console.log(body.toString());
// <ul><li>one</li><li>with</li><li>&#34;escaping&#34;</li></ul>
```
