export interface BabySizeEntry {
  week: number;
  nameAr: string;
  nameEn: string;
  emoji: string;
  lengthCm: number;
  weightG: number;
}

/**
 * Week-by-week baby size comparisons.
 * Weeks 4–40, indices offset by 4 (index 0 = week 4).
 */
export const BABY_SIZE: Record<number, BabySizeEntry> = {
  4:  { week: 4,  nameAr: 'بذرة خشخاش',   nameEn: 'Poppy seed',    emoji: '🌱', lengthCm: 0.1,  weightG: 0 },
  5:  { week: 5,  nameAr: 'بذرة سمسم',    nameEn: 'Sesame seed',   emoji: '🫘', lengthCm: 0.2,  weightG: 0 },
  6:  { week: 6,  nameAr: 'عدسة',          nameEn: 'Lentil',        emoji: '🌿', lengthCm: 0.6,  weightG: 0 },
  7:  { week: 7,  nameAr: 'حبة توت',       nameEn: 'Blueberry',     emoji: '🫐', lengthCm: 1.0,  weightG: 1 },
  8:  { week: 8,  nameAr: 'حبة فاصوليا',  nameEn: 'Kidney bean',   emoji: '🫘', lengthCm: 1.6,  weightG: 1 },
  9:  { week: 9,  nameAr: 'حبة عنب',       nameEn: 'Grape',         emoji: '🍇', lengthCm: 2.3,  weightG: 2 },
  10: { week: 10, nameAr: 'حبة كمثرى',    nameEn: 'Kumquat',       emoji: '🍐', lengthCm: 3.1,  weightG: 4 },
  11: { week: 11, nameAr: 'تين',           nameEn: 'Fig',           emoji: '🫐', lengthCm: 4.1,  weightG: 7 },
  12: { week: 12, nameAr: 'ليمونة',        nameEn: 'Lime',          emoji: '🍋', lengthCm: 5.4,  weightG: 14 },
  13: { week: 13, nameAr: 'كيوي',          nameEn: 'Kiwi',          emoji: '🥝', lengthCm: 7.4,  weightG: 23 },
  14: { week: 14, nameAr: 'ليمون',         nameEn: 'Lemon',         emoji: '🍋', lengthCm: 8.7,  weightG: 43 },
  15: { week: 15, nameAr: 'تفاحة',         nameEn: 'Apple',         emoji: '🍎', lengthCm: 10.1, weightG: 70 },
  16: { week: 16, nameAr: 'أفوكادو',       nameEn: 'Avocado',       emoji: '🥑', lengthCm: 11.6, weightG: 100 },
  17: { week: 17, nameAr: 'كمثرى',         nameEn: 'Pear',          emoji: '🍐', lengthCm: 13.0, weightG: 140 },
  18: { week: 18, nameAr: 'فلفل حلو',     nameEn: 'Bell pepper',   emoji: '🫑', lengthCm: 14.2, weightG: 190 },
  19: { week: 19, nameAr: 'طماطم',         nameEn: 'Tomato',        emoji: '🍅', lengthCm: 15.3, weightG: 240 },
  20: { week: 20, nameAr: 'موزة',          nameEn: 'Banana',        emoji: '🍌', lengthCm: 16.4, weightG: 300 },
  21: { week: 21, nameAr: 'جزرة',          nameEn: 'Carrot',        emoji: '🥕', lengthCm: 26.7, weightG: 360 },
  22: { week: 22, nameAr: 'باذنجانة',      nameEn: 'Eggplant',      emoji: '🍆', lengthCm: 27.8, weightG: 430 },
  23: { week: 23, nameAr: 'أذن ذرة',       nameEn: 'Ear of corn',   emoji: '🌽', lengthCm: 28.9, weightG: 501 },
  24: { week: 24, nameAr: 'ذرة',           nameEn: 'Corn',          emoji: '🌽', lengthCm: 30.0, weightG: 600 },
  25: { week: 25, nameAr: 'باقة بروكلي',  nameEn: 'Broccoli',      emoji: '🥦', lengthCm: 34.6, weightG: 660 },
  26: { week: 26, nameAr: 'خس روماني',    nameEn: 'Romaine',       emoji: '🥬', lengthCm: 35.6, weightG: 760 },
  27: { week: 27, nameAr: 'قرنبيط',        nameEn: 'Cauliflower',   emoji: '🥦', lengthCm: 36.6, weightG: 875 },
  28: { week: 28, nameAr: 'باذنجان كبير', nameEn: 'Large eggplant',emoji: '🍆', lengthCm: 37.6, weightG: 1005 },
  29: { week: 29, nameAr: 'كوسة',          nameEn: 'Zucchini',      emoji: '🥒', lengthCm: 38.6, weightG: 1153 },
  30: { week: 30, nameAr: 'كرنب',          nameEn: 'Cabbage',       emoji: '🥬', lengthCm: 39.9, weightG: 1319 },
  31: { week: 31, nameAr: 'جوزة الهند',   nameEn: 'Coconut',       emoji: '🥥', lengthCm: 41.1, weightG: 1502 },
  32: { week: 32, nameAr: 'قرع',           nameEn: 'Squash',        emoji: '🎃', lengthCm: 42.4, weightG: 1702 },
  33: { week: 33, nameAr: 'أناناس',        nameEn: 'Pineapple',     emoji: '🍍', lengthCm: 43.7, weightG: 1918 },
  34: { week: 34, nameAr: 'شمام',          nameEn: 'Cantaloupe',    emoji: '🍈', lengthCm: 45.0, weightG: 2146 },
  35: { week: 35, nameAr: 'جوز الهند',    nameEn: 'Honeydew',      emoji: '🍈', lengthCm: 46.2, weightG: 2383 },
  36: { week: 36, nameAr: 'خس إيسبرغ',   nameEn: 'Iceberg',       emoji: '🥬', lengthCm: 47.4, weightG: 2622 },
  37: { week: 37, nameAr: 'سويسارد',      nameEn: 'Swiss chard',   emoji: '🌿', lengthCm: 48.6, weightG: 2859 },
  38: { week: 38, nameAr: 'كراث',          nameEn: 'Leek',          emoji: '🧅', lengthCm: 49.8, weightG: 3083 },
  39: { week: 39, nameAr: 'بطيخ صغير',   nameEn: 'Mini watermelon',emoji: '🍉', lengthCm: 50.7, weightG: 3288 },
  40: { week: 40, nameAr: 'بطيخة',        nameEn: 'Watermelon',    emoji: '🍉', lengthCm: 51.2, weightG: 3462 },
};

export function getBabySizeForWeek(week: number): BabySizeEntry {
  const clamped = Math.max(4, Math.min(40, week));
  return BABY_SIZE[clamped] ?? BABY_SIZE[20];
}
