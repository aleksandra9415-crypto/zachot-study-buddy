export type SeoToolPage = {
  slug: string;            // адрес страницы
  h1: string;              // заголовок = поисковый запрос
  subtitle: string;        // подзаголовок под H1
  metaTitle: string;
  metaDescription: string; // до 160 символов
  inputPlaceholder: string;
  inputCta: string;        // подпись главной кнопки
  targetApp: string;       // куда ведёт форма: /app/text, /app/task...
  bullets: { label: string; anchor: string }[]; // якорные преимущества
  presets?: string[];      // примеры тем под формой
  showResultDemo?: boolean; // показывать ли блок с результатом
  seo: {
    id: string;
    heading: string;       // H2
    paragraphs: string[];
    list?: string[];       // маркированный список после абзацев
  }[];
  faq: { q: string; a: string }[]; // уходит в JSON-LD FAQPage
  neighbors: { label: string; to: string }[]; // хаб ссылок на соседние страницы
};
