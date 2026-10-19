// Product lines shown on the stall. Grades and origins are typical trade specs —
// confirm each one with JHS before going live.
export const groups = [
  {
    id: 'nuts',
    title: 'Nuts',
    cols: 3,
    items: [
      { name: 'Almonds', icon: 'almond', tint: 'yellow', grades: ['Nonpareil', '23/25', '25/27', '27/30', 'In-shell'], origin: 'Origins: USA (California), Australia' },
      { name: 'Cashew nuts', icon: 'cashew', tint: 'orange', grades: ['W180', 'W240', 'W320', 'W450', 'Splits'], origin: 'Origins: India, Vietnam, West Africa' },
      { name: 'Pistachios', icon: 'pista', tint: 'green', grades: ['Akbari', 'Ahmad Aghaei', 'Fandoghi', 'Kernels'], origin: 'Origins: Iran, USA, Türkiye' },
      { name: 'Walnuts', icon: 'walnut', tint: 'brass', grades: ['Light halves', 'Chandler in-shell', 'Quarters'], origin: 'Origins: Chile, USA' },
      { name: 'Hazelnuts', icon: 'hazel', tint: 'red', grades: ['Natural kernels', 'Roasted', '11–13 mm'], origin: 'Origin: Türkiye' },
      { name: 'Pine nuts', icon: 'pine', tint: 'yellow', grades: ['Chilgoza', 'Kernels'], origin: 'Origins: Afghanistan, Pakistan' },
    ],
  },
  {
    id: 'dry',
    title: 'Dry fruits',
    cols: 4,
    items: [
      { name: 'Dates', icon: 'date', tint: 'orange', grades: ['Medjool', 'Khalas', 'Sukkari'], origin: 'Origins: UAE, Saudi Arabia, Jordan' },
      { name: 'Dried figs', icon: 'fig', tint: 'green', grades: ['Lerida', 'Garland'], origin: 'Origins: Türkiye, Afghanistan' },
      { name: 'Raisins', icon: 'raisin', tint: 'yellow', grades: ['Golden', 'Green', 'Black'], origin: 'Origins: Afghanistan, Iran, India' },
      { name: 'Dried apricots', icon: 'apricot', tint: 'red', grades: ['Size 1–4', 'Sun-dried'], origin: 'Origin: Türkiye' },
    ],
  },
  {
    id: 'spice',
    title: 'Whole spices',
    cols: 4,
    items: [
      { name: 'Green cardamom', icon: 'cardamom', tint: 'yellow', grades: ['8 mm', '7–8 mm', '6–7 mm'], origin: 'Origins: India, Guatemala' },
      { name: 'Saffron', icon: 'saffron', tint: 'brass', grades: ['Super Negin', 'Sargol'], origin: 'Origin: Iran' },
      { name: 'Black pepper', icon: 'pepper', tint: 'orange', grades: ['550 G/L', '500 G/L'], origin: 'Origins: India, Vietnam' },
      { name: 'Cumin seeds', icon: 'cumin', tint: 'green', grades: ['Singapore 99%', 'Europe 99.5%'], origin: 'Origin: India' },
      { name: 'Cloves', icon: 'clove', tint: 'red', grades: ['Hand-picked', 'FAQ'], origin: 'Origins: Madagascar, Zanzibar' },
      { name: 'Cinnamon / cassia', icon: 'cinnamon', tint: 'yellow', grades: ['Ceylon C5', 'Cassia sticks'], origin: 'Origins: Sri Lanka, Indonesia' },
      { name: 'Star anise', icon: 'anise', tint: 'brass', grades: ['Autumn crop', 'Whole flower'], origin: 'Origins: Vietnam, China' },
      { name: 'Dried red chilli', icon: 'chilli', tint: 'green', grades: ['Teja S17', '334', 'Stemless'], origin: 'Origin: India' },
    ],
  },
]

export const ticker = [
  'CASHEW W180 · W240 · W320', 'ALMOND NONPAREIL 23/25', 'PISTACHIO AKBARI · FANDOGHI', 'WALNUT LIGHT HALVES',
  'GREEN CARDAMOM 8 MM', 'SAFFRON SUPER NEGIN', 'BLACK PEPPER 550 G/L', 'MEDJOOL DATES', 'STAR ANISE',
]

export const packing = ['22.68 kg carton', '25 kg bag', '50 kg bag', '1 kg pouch', '500 g pouch', '250 g pouch', 'Gift box', 'Not sure yet']

// Placeholders — replace with JHS's verified details.
export const contact = {
  whatsapp: '+971 XX XXX XXXX',
  email: 'sales@yourdomain.ae',
  office: '[Area, Emirate], United Arab Emirates',
  hours: 'Sat–Thu, 9:00–18:00',
  licence: '[licence no.]',
}
