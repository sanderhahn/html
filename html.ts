import { escape } from "./escape.ts";

function render(arg: HTMLTemplateItem): string {
  if (arg === undefined || arg === null) {
    return "";
  }
  if (arg instanceof HTMLTemplate) {
    return arg.toString();
  } else if (arg instanceof Array) {
    let html = "";
    arg.forEach((arg) => {
      html += render(arg);
    });
    return html;
  }
  return escape(String(arg));
}

/**
 * HTMLTemplate preserves the structure of the template literal.
 */
class HTMLTemplate {
  #templates: readonly string[];
  #args: HTMLTemplateItem[];
  constructor(templates: readonly string[], args: HTMLTemplateItem[]) {
    this.#templates = templates;
    this.#args = args;
  }
  /**
   * Render to html
   */
  public toString(): string {
    let html = "";
    this.#templates.forEach((template, index) => {
      html += template;
      const arg = this.#args[index];
      html += render(arg);
    });
    return html;
  }
}

type HTMLTemplateItem = string | HTMLTemplate | HTMLTemplateItem[];

/**
 * Template literal to safely embed variables inside html fragments.
 * @param templates html fragments
 * @param args values to escape
 */
export function html(
  templates: TemplateStringsArray,
  ...args: HTMLTemplateItem[]
): HTMLTemplate {
  return new HTMLTemplate(templates.raw, args);
}
