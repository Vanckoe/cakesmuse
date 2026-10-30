import {
  artFacts,
  cakeFacts,
  sourceCard,
  type ProductFacts,
  type SourceCard,
} from "./product-facts";

export type Product = {
  id: string;
  name: string;
  image: string;
  description: string;
  weight: string;
  price: number | null;
  unit: string;
  variants?: { label: string; price: number }[];
  sourceCard?: SourceCard;
  facts?: ProductFacts;
};
export const categories = [
  "Арт-десерты",
  "Мини-бокс",
  "Бенто",
  "Пирожные",
  "Торты",
] as const;
export type Category = (typeof categories)[number];
export const flavors = [
  "Кофе–пекан–шоколад",
  "Фундучно-молочный",
  "Фисташка–малина",
  "Вишня с двойным шоколадом",
  "Манго–маракуйя",
  "Пломбир с земляникой и малиной",
];
export const products: Record<Category, Product[]> = {
  "Арт-десерты": [
    {
      id: "mango",
      name: "Манго",
      image: "mango",
      description:
        "Манговый крем-ганаш и фруктовая начинка в шоколадном корпусе.",
      weight: "140 г",
      price: 4500,
      unit: "/ шт.",
    },
    {
      id: "raspberry",
      name: "Малина",
      image: "raspberry",
      description: "Ванильный крем-ганаш и насыщенная малиновая начинка.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "pistachio",
      name: "Фисташка",
      image: "pistachio",
      description: "Фисташковые кремы, пралине и бисквит с хрустящим слоем.",
      weight: "140 г",
      price: 4200,
      unit: "/ шт.",
    },
    {
      id: "coconut",
      name: "Кокос",
      image: "coconut",
      description:
        "Кокосовый крем-ганаш, гель и хрустящий слой под шоколадной оболочкой.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "coffee",
      name: "Кофейное зерно",
      image: "coffee",
      description:
        "Кофейный мусс, кофейно-шоколадная карамель и кекс с хрустящим слоем.",
      weight: "90 / 180 г",
      price: 4200,
      unit: "/ шт.",
      variants: [
        { label: "180 г", price: 4200 },
        { label: "90 г", price: 2200 },
      ],
    },
    {
      id: "blueberry",
      name: "Голубика",
      image: "blueberry",
      description: "Сырный крем-ганаш и гель из голубики в шоколадном корпусе.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "vanilla",
      name: "Ваниль",
      image: "vanilla",
      description:
        "Ванильный крем-ганаш и хрустящий слой с миндальным пралине.",
      weight: "100 г",
      price: 4000,
      unit: "/ шт.",
    },
    {
      id: "cherry",
      name: "Вишня",
      image: "cherry",
      description: "Шоколадный ганаш с корицей и вишнёвый гель.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "strawberry",
      name: "Клубника",
      image: "strawberry",
      description: "Клубничный крем-ганаш и клубничный гель.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "passionfruit",
      name: "Маракуйя",
      image: "passionfruit",
      description: "Экзотический ганаш с яркой начинкой из маракуйи.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "apricot",
      name: "Абрикос",
      image: "apricot",
      description:
        "Абрикосовый крем-ганаш и фруктовый гель в шоколадном корпусе.",
      weight: "100 г",
      price: 3000,
      unit: "/ шт.",
    },
    {
      id: "peanut",
      name: "Арахис",
      image: "peanut",
      description:
        "Ганаш на маскарпоне, арахисовое пралине, вафельная крошка и карамель.",
      weight: "100 г",
      price: null,
      unit: "/ шт.",
    },
    {
      id: "pecan",
      name: "Пекан",
      image: "pecan",
      description: "Брауни с пеканом, сливочный ореховый крем и карамель.",
      weight: "120 г",
      price: 4000,
      unit: "/ шт.",
    },
  ].map((item) => ({
    ...item,
    image: `cards/${item.id}`,
    sourceCard: sourceCard(item.id),
    facts: artFacts[item.id],
  })),
  "Мини-бокс": [
    {
      id: "mini-box",
      name: "Десять маленьких открытий",
      image: "mini-box",
      description:
        "Малина, абрикос, банан, кокос, голубика, фисташка, манго, клубника, маракуйя и лимон. Десять мини-десертов в одной коробке.",
      weight: "10 мини-десертов · 10 вкусов",
      price: 12999,
      unit: "/ бокс",
    },
  ],
  Бенто: [
    {
      id: "bento",
      name: "Ваш маленький праздник",
      image: "cards/bento",
      sourceCard: sourceCard("bento", "bento"),
      description:
        "Муссовый бенто на 2–3 персоны. Фундучно-молочный, вишня с двойным шоколадом или пломбир с земляникой. Форму и надпись обсудим при заказе.",
      weight: "400–450 г · 2–3 персоны",
      price: 12000,
      unit: "/ торт",
    },
  ],
  Пирожные: [
    {
      id: "pastries",
      name: "Муссовые пирожные",
      image: "pastries",
      description:
        "Самурай, дюна, облако, кубик, сердце и роза. Шесть форм и вкусов для вашего набора с надписью. На фото — пример оформления.",
      weight: "Набор с надписью",
      price: 10150,
      unit: "/ набор",
      variants: [
        { label: "3 пирожных", price: 10150 },
        { label: "4 пирожных", price: 12750 },
        { label: "6 пирожных", price: 17950 },
      ],
    },
  ],
  Торты: flavors.map((flavor, i) => ({
    id: `cake-${i}`,
    name: flavor,
    image: `cards/cake-${i}`,
    sourceCard: sourceCard(`cake-${i}`, "cake"),
    facts: cakeFacts[i],
    description: cakeFacts[i].layers.join(" · ") + ".",
    weight: "1 кг · 7–9 персон",
    price: 21000,
    unit: "/ кг",
  })),
};
export const formatPrice = (price: number) =>
  new Intl.NumberFormat("ru-RU").format(price) + " ₸";
