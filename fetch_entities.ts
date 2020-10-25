// Source: https://html.spec.whatwg.org/entities.json
// Inspiration: https://github.com/golang/go/blob/master/src/html/entity.go

type Entities = { [entity: string]: Spec };
interface Spec {
  characters: string;
}

const response = await fetch("https://html.spec.whatwg.org/entities.json");
const entities: Entities = await response.json();

const entityMap: { [entity: string]: string } = {};
for (const [entity, spec] of Object.entries(entities)) {
  entityMap[entity.substr(1)] = spec.characters;
}

const code = `// Generated code: do not edit!
export const entity: { [entity: string]: string } = ${
  JSON.stringify(entityMap, null, 2)
}`;
Deno.writeTextFileSync("./entity.ts", code);
