# html

HTML escape and unescape inspired by [html](https://golang.org/pkg/html/).

### escape

Escape five html entities: <, >, &, ' and ".

```ts
import { escape } from "https://deno.land/x/html_escape/escape.ts"
console.log(escape(`"Fran & Freddie's Diner" <tasty@example.com>`));
// &#34;Fran &amp; Freddie&#39;s Diner&#34; &lt;tasty@example.com&gt;
```

### unescape

Unescape html entities to characters.

```ts
import { unescape } from "https://deno.land/x/html_escape/unescape.ts"
console.log(unescape("&quot;Fran &amp; Freddie&#39;s Diner&quot; &lt;tasty@example.com&gt;"));
// "Fran & Freddie's Diner" <tasty@example.com>
```
