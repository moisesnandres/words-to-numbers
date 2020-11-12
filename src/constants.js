
export const UNIT = {
  zero: 0,
  cero: 0,
  first: 1,
  one: 1,
  uno: 1,
  second: 2,
  two: 2,
  dos: 2,
  third: 3,
  thirteenth: 13,
  thirteen: 13,
  trece: 13,
  three: 3,
  tres: 3,
  fourth: 4,
  fourteenth: 14,
  fourteen: 14,
  catorce: 14,
  four: 4,
  cuatro: 4,
  fifteenth: 15,
  fifteen: 15,
  quince: 15,
  fifth: 5,
  five: 5,
  cinco: 5,
  sixth: 6,
  sixteenth: 16,
  sixteen: 16,
  dieciséis: 16,
  dieciseis: 16,
  six: 6,
  seis: 6,
  seventeenth: 17,
  seventeen: 17,
  diecisiete: 17,
  seventh: 7,
  seven: 7,
  siete: 7,
  eighteenth: 18,
  eighteen: 18,
  dieciocho: 18,
  eighth: 8,
  eight: 8,
  ocho: 8,
  nineteenth: 19,
  nineteen: 19,
  diecinueve: 19,
  ninth: 9,
  nine: 9,
  nueve: 9,
  tenth: 10,
  ten: 10,
  diez: 10,
  eleventh: 11,
  eleven: 11,
  once: 11,
  twelfth: 12,
  twelve: 12,
  doce: 12
  // a: 1,
};

export const TEN = {
  twenty: 20,
  veinte: 20,
  twentieth: 20,
  thirty: 30,
  treinta: 30,
  thirtieth: 30,
  forty: 40,
  cuarenta: 40,
  fortieth: 40,
  fifty: 50,
  cincuenta: 50,
  fiftieth: 50,
  sixty: 60,
  sixtieth: 60,
  sesenta: 60,
  seventy: 70,
  seventieth: 70,
  setenta: 70,
  eighty: 80,
  eightieth: 80,
  ochenta: 80,
  ninety: 90,
  ninetieth: 90,
  noventa: 90
};

export const MAGNITUDE = {
  hundred: 100,
  hundredth: 100,
  thousand: 1000,
  million: 1000000,
  billion: 1000000000,
  trillion: 1000000000000,
  quadrillion: 1000000000000000,
  quintillion: 1000000000000000000,
  sextillion: 1000000000000000000000,
  septillion: 1000000000000000000000000,
  octillion: 1000000000000000000000000000,
  nonillion: 1000000000000000000000000000000,
  decillion: 1000000000000000000000000000000000,
};

export const NUMBER = { ...UNIT, ...TEN, ...MAGNITUDE };

export const UNIT_KEYS = Object.keys(UNIT);
export const TEN_KEYS = Object.keys(TEN);
export const MAGNITUDE_KEYS = Object.keys(MAGNITUDE);

export const NUMBER_WORDS = [ ...UNIT_KEYS, ...TEN_KEYS, ...MAGNITUDE_KEYS];

export const JOINERS = ['and', 'y'];
export const DECIMALS = ['point', 'dot'];

export const PUNCTUATION = [
  '.',
  ',',
  '\\',
  '#',
  '!',
  '$',
  '%',
  '^',
  '&',
  '/',
  '*',
  ';',
  ':',
  '{',
  '}',
  '=',
  '-',
  '_',
  '`',
  '~',
  '(',
  ')',
  ' ',
];

export const TOKEN_TYPE = {
  UNIT: 0,
  TEN: 1,
  MAGNITUDE: 2,
  DECIMAL: 3,
  HUNDRED: 4,
};

export const ALL_WORDS = [ ...NUMBER_WORDS, ...JOINERS, ...DECIMALS ];

export const BLACKLIST_SINGULAR_WORDS = ['a'];
