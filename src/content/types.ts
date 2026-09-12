export type Block =
  | { kind: 'p'; text: string }
  | { kind: 'list'; items: string[] }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'callout'; tone: 'info' | 'warning'; title?: string; text: string };

export interface Section {
  id: string;
  title: string;
  blocks: Block[];
}

export interface LegalDoc {
  title: string;
  subtitle: string;
  intro: string;
  sections: Section[];
}

export type Lang = 'vi' | 'en';
