export type LibraryWork = {
  slug: string;
  title: string;
  kind: string;
  subject: string;
  subjectSlug: string;
  chars: number;
  pages: number;
  updated: string;
  intro: string;
  sections: {
    id: string;
    title: string;
    paragraphs: string[];
  }[];
  sources: string[];
};

export type LibraryRelated = {
  slug: string;
  title: string;
  kind: string;
  subject: string;
  subjectSlug: string;
};
