import { escape } from "./escape.ts";

function render(arg: any): string {
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
export class HTMLTemplate {
  #templates: readonly string[];
  #args: any[];
  constructor(templates: readonly string[], args: any[]) {
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

/**
 * Template literal to safely embed variables inside html fragments.
 * @param templates html fragments
 * @param args values to escape
 */
export function html(
  templates: TemplateStringsArray,
  ...args: any
): HTMLTemplate {
  return new HTMLTemplate(templates.raw, args);
}
