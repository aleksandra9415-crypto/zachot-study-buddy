export const deckOutlineMock = [
  { id: "d1", title: "Управление проектной средой на производстве", kind: "title", bullets: [] as string[] },
  { id: "d2", title: "Цель и задачи работы", kind: "text", bullets: ["Определить границы проектной среды", "Разобрать роли участников", "Показать типичные сбои"] },
  { id: "d3", title: "Что такое проектная среда", kind: "text", bullets: ["Внутреннее окружение проекта", "Внешние ограничения", "Связь со структурой предприятия"] },
  { id: "d4", title: "Участники и их роли", kind: "text", bullets: ["Заказчик и спонсор", "Руководитель проекта", "Функциональные подразделения"] },
  { id: "d5", title: "Организационная структура", kind: "image", bullets: ["Функциональная", "Матричная", "Проектная"] },
  { id: "d6", title: "Планирование ресурсов", kind: "text", bullets: ["Люди и оборудование", "Календарный план", "Резервы"] },
  { id: "d7", title: "Управление сроками", kind: "image", bullets: ["Сетевой график", "Критический путь", "Буферы времени"] },
  { id: "d8", title: "Управление рисками", kind: "text", bullets: ["Выявление рисков", "Оценка вероятности", "План реагирования"] },
  { id: "d9", title: "Коммуникации в проекте", kind: "text", bullets: ["Регулярность отчётности", "Каналы связи", "Эскалация проблем"] },
  { id: "d10", title: "Инструменты и ПО", kind: "text", bullets: ["Планирование", "Учёт задач", "Документооборот"] },
  { id: "d11", title: "Типичные ошибки", kind: "text", bullets: ["Размытая ответственность", "План без резервов", "Отчётность ради отчётности"] },
  { id: "d12", title: "Выводы", kind: "text", bullets: ["Среда определяет управляемость", "Роли важнее инструментов", "Риски закладываются заранее"] },
];

export const deckSizes = [
  { id: "4:3",  label: "Стандарт (4:3)" },
  { id: "16:9", label: "Широкий (16:9)", active: true },
  { id: "a4",   label: "Для печати (A4)" },
];

export const deckLengths = [
  { id: "auto", label: "Авто" },
  { id: "8",    label: "8 слайдов" },
  { id: "12",   label: "12 слайдов" },
  { id: "16",   label: "16 слайдов" },
  { id: "20",   label: "20 слайдов" },
];

export const deckSettings = {
  density: [
    { id: "short", label: "Кратко — тезисы" },
    { id: "full",  label: "Подробно — с пояснениями" },
  ],
  extras: [
    { id: "title",  label: "Титульный слайд",        on: true },
    { id: "numbers", label: "Нумерация слайдов",     on: true },
    { id: "images", label: "Места под изображения",  on: true },
    { id: "sources", label: "Слайд со списком источников", on: false },
  ],
};

export const deckDesigns = [
  { id: "ai",       label: "AI-выбор",     bg: "#EEF3FF", ink: "#12333C", accent: "#FFC01E", special: true },
  { id: "light",    label: "Светлый",      bg: "#FFFFFF", ink: "#12333C", accent: "#0B7C8C" },
  { id: "dark",     label: "Тёмный",       bg: "#12333C", ink: "#FFFFFF", accent: "#FFC01E" },
  { id: "amber",    label: "Жёлтый",       bg: "#FFF6DC", ink: "#12333C", accent: "#FFC01E" },
  { id: "teal",     label: "Бирюзовый",    bg: "#E4F2F4", ink: "#12333C", accent: "#0B7C8C" },
  { id: "strict",   label: "Строгий",      bg: "#F5F7F9", ink: "#12333C", accent: "#6A8189" },
  { id: "contrast", label: "Контрастный",  bg: "#0B2831", ink: "#FFFFFF", accent: "#FF5C8A" },
  { id: "soft",     label: "Мягкий",       bg: "#FDF3E7", ink: "#12333C", accent: "#0B7C8C" },
  { id: "academic", label: "Академический", bg: "#FFFFFF", ink: "#12333C", accent: "#12333C" },
];

export const deckStages = [
  "Раскладываем текст по слайдам",
  "Подбираем схемы",
  "Применяем оформление",
];