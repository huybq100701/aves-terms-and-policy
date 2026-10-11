/** A numbered (or bulleted, when `num` is omitted) clause, optionally with nested sub-clauses. */
export interface Clause {
  num?: string;
  title?: string;
  text?: string;
  sub?: Clause[];
}

export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'h3'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'clauses'; items: Clause[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'callout'; tone: 'info' | 'warning'; title?: string; text: string };

export interface Section {
  id: string;
  title: string;
  /** Groups consecutive sections under a part heading, e.g. "Phần A". */
  part?: string;
  blocks: Block[];
}

export interface LegalDoc {
  title: string;
  subtitle: string;
  intro: string;
  sections: Section[];
}

export type Lang = 'vi' | 'en';
