/**
 * Escapes special characters like '<' to become '&lt;'.
 * Only escapes five such characters: <, >, &, ' and ".
 * @param text value to escape
 */
export function escape(text: string): string {
  const entity: { [char: string]: string } = {
    "<": "&lt;",
    ">": "&gt;",
    "&": "&amp;",
    "'": "&#39;", // "&#39;" is shorter than "&apos;"
    "\"": "&#34;", // "&#34;" is shorter than "&quot;"
  };
  return text.replaceAll(/[&<>"']/g, (char) => {
    return entity[char];
  });
}
