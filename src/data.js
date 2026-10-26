// Product categories. Each one gets its own page at #/products/<id>.
// Product names, grades and origins follow the supplier's (BetterGrow) published range —
// confirm each line with JHS before going live.
// Item fields: name (unique across all categories), icon (a drawing in index.html, optional),
// origin, grades (chips), note (optional extra line), group (optional sub-heading on the page).
export const groups = [
  {
    id: 'nuts',
    title: 'Nuts',
    icon: 'cashew',
    blurb: 'Almonds, cashews, pistachios, walnuts, hazelnuts and more, across multiple origins, grades and sizes.',
    intro: 'Raw nuts for importers, wholesalers, roasters, bakeries and retailers. Every line is quoted by origin, grade and count, so you can compare offers like for like.',
    facts: [
      ['Origins', 'USA, India, Vietnam, Tanzania, Türkiye, Australia, Brazil, Afghanistan and more'],
      ['Formats', 'Whole, shelled, in-shell, kernels, blanched, skin-on, halves'],
      ['Packing', 'Bulk cartons, 22.68 kg cartons, retail packs on request'],
    ],
    items: [
      { name: 'Almonds', icon: 'almond', grades: ['Nonpareil', 'Independence', '18/20', '23/25', '25/27', '27/30', '30/32'], origin: 'Origin: USA' },
      { name: 'Almonds Mamra', icon: 'almond', grades: ['Whole', 'Premium'], origin: 'Origin: Afghanistan' },
      { name: 'Brazil nuts', grades: ['Whole kernels'], origin: 'Origin: Brazil' },
      { name: 'Cashews', icon: 'cashew', grades: ['W180', 'W210', 'W240', 'W320', 'W450', 'Splits', 'Pieces'], origin: 'Origins: India, Vietnam, Tanzania' },
      { name: 'Hazelnuts', icon: 'hazel', grades: ['Natural kernels', 'Blanched'], origin: 'Origin: Türkiye' },
      { name: 'Macadamia', grades: ['Whole kernels', 'Halves'], origin: 'Origin: Australia' },
      { name: 'Peanuts', grades: ['Blanched', 'Skin-on', 'In-shell'], origin: 'Origins: India, China, Argentina' },
      { name: 'Pecans', grades: ['Halves', 'Pieces'], origin: 'Origin: USA' },
      { name: 'Pine nuts', icon: 'pine', grades: ['Kernels', 'In-shell'], origin: 'Origins: Pakistan, Türkiye' },
      { name: 'Pistachios', icon: 'pista', grades: ['18/20', '21/25', '22/24', 'Medium', 'Jumbo', 'Super Jumbo', 'Kernels'], origin: 'Origin: USA' },
      { name: 'Walnuts', icon: 'walnut', grades: ['Light Chandler', 'Jumbo', 'Premium', 'Regular', 'Halves'], origin: 'Origins: USA, Chile' },
    ],
  },
  {
    id: 'roasted-nuts',
    title: 'Roasted, flavoured & coated nuts',
    icon: 'almond',
    blurb: 'Roasted, salted, flavoured and coated nuts and seeds for retail, foodservice and snacking.',
    intro: 'Ready-to-eat nuts and seeds in classic and regional flavours, for supermarkets, cafés, hotels and snack brands. Try a single carton first, then scale to bulk.',
    facts: [
      ['Flavours', 'Salted, BBQ, cheese, chilli, lemon & salt, zaatar, smoked and more'],
      ['Sizes', 'Medium, Large, Jumbo and Premium, depending on the nut'],
      ['Packing', 'Single cartons for testing, bulk cartons, retail packs'],
    ],
    items: [
      { group: 'Roasted nuts', name: 'Roasted almonds', icon: 'almond', grades: ['Salted', 'Smoked', 'BBQ', 'Cheese', 'Chilli', 'Lemon & salted'], note: 'Sizes: Medium · Jumbo' },
      { group: 'Roasted nuts', name: 'Roasted cashews', icon: 'cashew', grades: ['Salted', 'BBQ', 'Black pepper', 'Caramel & sesame', 'Cheese', 'Parmesan', 'Chilli', 'Zaatar'], note: 'Sizes: Medium · Jumbo · Premium' },
      { group: 'Roasted nuts', name: 'Roasted pistachios', icon: 'pista', grades: ['Salted', 'Crystal salt', 'Lemon & salted', 'BBQ & salted', 'Salted & cheese'], note: 'Sizes: Medium · Large · Jumbo · Premium' },
      { group: 'Roasted nuts', name: 'Roasted hazelnuts', icon: 'hazel', grades: ['Salted'] },
      { group: 'Roasted nuts', name: 'Roasted peanuts', grades: ['Salted', 'Masala'] },
      { group: 'Roasted nuts', name: 'Flavoured pecans', grades: ['Vanilla'] },
      { group: 'Roasted nuts', name: 'Roasted walnuts', icon: 'walnut', grades: ['Roasted'] },
      { group: 'Roasted nuts', name: 'Roasted mixed nuts', grades: ['Salted'] },
      { group: 'Coated nuts', name: 'Coated cashews', icon: 'cashew', grades: ['BBQ', 'Cheese', 'Chilli'], note: 'Krikri-style crunchy coating' },
      { group: 'Coated nuts', name: 'Coated peanuts', grades: ['BBQ', 'Cheese', 'Chilli', 'Tomato ketchup'], note: 'Krikri-style crunchy coating' },
      { group: 'Roasted seeds', name: 'Egyptian watermelon seeds', grades: ['Salted', 'Lemon & salted', 'BBQ'] },
      { group: 'Roasted seeds', name: 'Roasted pumpkin seeds', grades: ['Salted', 'Lemon & salted', 'BBQ'] },
      { group: 'Roasted seeds', name: 'Roasted squash seeds', grades: ['Salted', 'Lemon & salted'] },
      { group: 'Roasted seeds', name: 'Roasted sunflower seeds', grades: ['Salted', 'BBQ & salted'] },
    ],
  },
  {
    id: 'processed-nuts',
    title: 'Processed nuts & nut ingredients',
    icon: 'pista',
    blurb: 'Diced, sliced, slivered and powdered nuts and seed kernels for bakery, confectionery and HoReCa.',
    intro: 'Cut and milled nut ingredients for bakeries, confectioners, ice-cream makers, food manufacturers and hotel kitchens. Tell us the cut and the end use and we will match the spec.',
    facts: [
      ['Origins', 'USA, India, Vietnam, China'],
      ['Formats', 'Diced, chopped, sliced, flaked, slivered, split, powder, pieces'],
      ['Used in', 'Bakery, confectionery, desserts, dairy, HoReCa'],
    ],
    items: [
      { name: 'Almond cuts & powder', icon: 'almond', grades: ['Diced', 'Chopped', 'Blanched', 'Sliced', 'Flakes', 'Slivered', 'Split', 'Powder'], origin: 'Origin: USA' },
      { name: 'Cashew pieces & splits', icon: 'cashew', grades: ['LP', 'LP Premium', 'LWP', 'SSP', 'Splits', 'Selected pieces'], origin: 'Origins: India, Vietnam' },
      { name: 'Pistachio powder & slivers', icon: 'pista', grades: ['Powder', 'Slivered'], origin: 'Origin: USA' },
      { name: 'Pumpkin seed kernels', grades: ['Whole kernels'], origin: 'Origin: China' },
      { name: 'Sunflower seed kernels', grades: ['Whole kernels'], origin: 'Origin: China' },
    ],
  },
  {
    id: 'dried-fruits',
    title: 'Dried fruits',
    icon: 'fig',
    blurb: 'Raisins, apricots, figs, prunes, berries, coconut and dehydrated fruit for bulk and retail.',
    intro: 'Dried and dehydrated fruit for wholesale, retail packing, bakeries and food manufacturing, sourced from the origins each fruit is best known for.',
    facts: [
      ['Origins', 'Türkiye, USA, Canada, Chile, Argentina, France, Indonesia, Thailand and more'],
      ['Formats', 'Whole, pitted, unpitted, flakes, powder, chips, slices, cubes'],
      ['Packing', 'Bulk cartons, retail-ready packs on request'],
    ],
    items: [
      { name: 'Raisins', icon: 'raisin', grades: ['Black', 'Golden', 'Green', 'Red'], note: 'Sizes: Jumbo · Medium', origin: 'Origins: selected origins' },
      { name: 'Dried apricots', icon: 'apricot', grades: ['Size 0', 'Size 1', 'Whole', 'Pitted'], origin: 'Origin: Türkiye' },
      { name: 'Dried figs', icon: 'fig', grades: ['Size 3', 'Size 4', 'Size 5', 'Size 6'], origin: 'Origin: Türkiye' },
      { name: 'Prunes', grades: ['Pitted', 'Unpitted'], origin: 'Origins: USA, Chile, Argentina, France, Moldova' },
      { name: 'Dried cranberries', grades: ['Sweetened'], origin: 'Origin: USA' },
      { name: 'Dried blueberries', grades: ['Whole'], origin: 'Origins: Canada, USA' },
      { name: 'Coconut', grades: ['Whole', 'Flakes', 'Powder', 'Chips'], origin: 'Origin: Indonesia' },
      { name: 'Dehydrated fruits', grades: ['Apple', 'Kiwi', 'Mango', 'Papaya', 'Pineapple', 'Strawberry'], note: 'Sliced or cubed', origin: 'Origin: Thailand' },
    ],
  },
  {
    id: 'dates',
    title: 'Dates',
    icon: 'date',
    blurb: 'Medjool, Ajwa, Khalas, Sukkari and other dates for retail, hospitality, gifting and ingredients.',
    intro: 'Gulf and Levant date varieties for supermarkets, hotels, caterers, gifting and bakeries. Sizes, grades and formats are confirmed per variety and per order.',
    facts: [
      ['Origins', 'Saudi Arabia, UAE, Jordan, Palestine, Pakistan'],
      ['Grades & sizes', 'Standard, Premium · Medium, Large, Jumbo'],
      ['Formats', 'Whole, pitted, diced · bulk, catering, retail and gift packs'],
    ],
    items: [
      { name: 'Medjool dates', icon: 'date', grades: ['Medium', 'Large', 'Jumbo'], note: 'Premium variety for retail, gifting and hotels', origin: 'Origins: Jordan, Palestine' },
      { name: 'Ajwa dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Well-known Madinah variety', origin: 'Origin: Saudi Arabia' },
      { name: 'Khudri dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Versatile everyday variety', origin: 'Origin: Saudi Arabia' },
      { name: 'Khalas dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Familiar Gulf variety', origin: 'Origins: UAE, Saudi Arabia' },
      { name: 'Sagai dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Two-tone variety for retail and gifting', origin: 'Origin: Saudi Arabia' },
      { name: 'Mabroom dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Firm texture, premium retail', origin: 'Origin: Saudi Arabia' },
      { name: 'Sukkari dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Soft and naturally sweet', origin: 'Origin: Saudi Arabia' },
      { name: 'Safawi dates', icon: 'date', grades: ['Standard', 'Premium'], note: 'Dark, soft variety', origin: 'Origin: Saudi Arabia' },
    ],
  },
  {
    id: 'spices',
    title: 'Spices & herbs',
    icon: 'chilli',
    blurb: 'Whole and ground spices, herbs, seeds and blends: red chilli, turmeric, cardamom, saffron and more.',
    intro: 'Whole spices, ground spices, culinary seeds, herbs and blends for wholesalers, restaurants, spice packers and food manufacturers.',
    facts: [
      ['Origins', 'India, Vietnam, Indonesia, Türkiye, Spain, Afghanistan'],
      ['Formats', 'Whole, crushed, ground / powder, blends'],
      ['Packing', '25 kg bags, cartons, retail packs on request'],
    ],
    items: [
      { group: 'Whole & ground spices', name: 'Red chilli', icon: 'chilli', grades: ['Whole Kashmiri', 'Round', 'Crushed', 'Red chilli powder', 'Kashmiri powder', 'Cayenne powder'], origin: 'Origin: India' },
      { group: 'Whole & ground spices', name: 'Turmeric', icon: 'turmeric', grades: ['Fingers', 'Whole', 'Powder'], origin: 'Origin: India' },
      { group: 'Whole & ground spices', name: 'Cardamom', icon: 'cardamom', grades: ['Green', 'Black', '7 mm', '7.5 mm', '8 mm'], origin: 'Origin: India' },
      { group: 'Whole & ground spices', name: 'Black pepper', icon: 'pepper', grades: ['Whole', 'Crushed', 'Powder'], origin: 'Origin: Vietnam' },
      { group: 'Whole & ground spices', name: 'Cumin', icon: 'cumin', grades: ['Whole', 'Powder'], origin: 'Origin: India' },
      { group: 'Whole & ground spices', name: 'Coriander', grades: ['Whole', 'Powder'], origin: 'Origin: India' },
      { group: 'Whole & ground spices', name: 'Cloves', icon: 'clove', grades: ['Whole', 'Powder'], origin: 'Origin: Indonesia' },
      { group: 'Whole & ground spices', name: 'Cinnamon', icon: 'cinnamon', grades: ['Whole', 'Powder'], origin: 'Origins: Indonesia, Vietnam' },
      { group: 'Whole & ground spices', name: 'Cassia', icon: 'cinnamon', grades: ['Whole', 'Split', 'Stick', 'Tube', 'Veera'], origin: 'Origin: Vietnam' },
      { group: 'Whole & ground spices', name: 'Star anise', icon: 'anise', grades: ['Whole'], origin: 'Origin: Vietnam' },
      { group: 'Whole & ground spices', name: 'Nutmeg', grades: ['Whole'], origin: 'Origin: on request' },
      { group: 'Whole & ground spices', name: 'Paprika', grades: ['Powder'], origin: 'Origin: on request' },
      { group: 'Whole & ground spices', name: 'Saffron', icon: 'saffron', grades: ['Threads'], origin: 'Origins: Spain, Afghanistan' },
      { group: 'Whole & ground spices', name: 'Dried lemon', grades: ['Yellow', 'Black'], origin: 'Origin: India' },
      { group: 'Culinary seeds', name: 'Fennel seeds', grades: ['Whole'], origin: 'Origin: India' },
      { group: 'Culinary seeds', name: 'Fenugreek seeds', grades: ['Whole'], origin: 'Origin: India' },
      { group: 'Culinary seeds', name: 'Shahi jeera', grades: ['Whole'], origin: 'Origin: India' },
      { group: 'Culinary seeds', name: 'Black seeds', grades: ['Whole'], origin: 'Origin: on request' },
      { group: 'Culinary seeds', name: 'Basil / sabja seeds', grades: ['Big', 'Medium'], origin: 'Origin: on request' },
      { group: 'Herbs & blends', name: 'Bay leaves', grades: ['Whole'], origin: 'Origin: India' },
      { group: 'Herbs & blends', name: 'Oregano', grades: ['Dried'], origin: 'Origin: on request' },
      { group: 'Herbs & blends', name: 'Sumac', grades: ['Ground'], origin: 'Origin: Türkiye' },
      { group: 'Herbs & blends', name: 'Zaatar', grades: ['Jordanian style', 'Lebanese style'], origin: 'Origin: on request' },
      { group: 'Herbs & blends', name: 'Garam masala', grades: ['Powder', 'Whole-spice mix'], origin: 'Origin: India' },
    ],
  },
  {
    id: 'seeds-pulses-grains',
    title: 'Seeds, pulses & grains',
    icon: 'cumin',
    blurb: 'Beans, chickpeas, lentils, grains, quinoa, semolina, chia, flax and sesame.',
    intro: 'Staple seeds, pulses and grains for wholesalers, retailers, restaurants and food production, quoted by origin and calibre where it applies.',
    facts: [
      ['Origins', 'India, Mexico, Canada, Argentina, Bolivia, Egypt, China'],
      ['Specs', 'Calibre for chickpeas · type and colour for sesame and beans'],
      ['Packing', '25 kg and 50 kg bags, retail packs on request'],
    ],
    items: [
      { group: 'Seeds', name: 'Chia seeds', grades: ['Black'], origin: 'Origin: Mexico' },
      { group: 'Seeds', name: 'Flax seeds', grades: ['Brown'], origin: 'Origin: India' },
      { group: 'Seeds', name: 'Sesame seeds', grades: ['White', 'Black', 'Hulled', 'Roasted'], origin: 'Origin: India' },
      { group: 'Pulses', name: 'Chickpeas', grades: ['9 mm', '12 mm', '14 mm'], origin: 'Origins: India, Mexico' },
      { group: 'Pulses', name: 'Beans', grades: ['Red kidney', 'White', 'Broad / fava', 'Black-eyed'], origin: 'Origins: selected origins' },
      { group: 'Pulses', name: 'Lentils & dals', grades: ['Masoor', 'Moong', 'Toor', 'Chana dal'], origin: 'Origins: Canada, India' },
      { group: 'Pulses', name: 'Masoor whole', grades: ['Whole'], origin: 'Origins: selected origins' },
      { group: 'Pulses', name: 'Moong whole', grades: ['Whole'], origin: 'Origin: India' },
      { group: 'Grains', name: 'Grains', grades: ['Hab hareesh', 'Brown bulgur', 'Fine bulgur', 'Freekeh'], origin: 'Origins: selected origins' },
      { group: 'Grains', name: 'Quinoa', grades: ['White'], origin: 'Origin: Bolivia' },
      { group: 'Grains', name: 'Semolina', grades: ['Fine', 'Coarse'], origin: 'Origin: India' },
      { group: 'Grains', name: 'Popcorn', grades: ['Kernels'], origin: 'Origin: Argentina' },
    ],
  },
]

export const categoryHref = (id) => `#/products/${id}`

export const packing = ['22.68 kg carton', '25 kg bag', '50 kg bag', '1 kg pouch', '500 g pouch', '250 g pouch', 'Gift box', 'Not sure yet']

// Verified by JHS: phones, email, office, domain. Still placeholders (highlighted on the page): hours, licence.
export const contact = {
  phones: ['+971 50 9799 153', '+971 50 9799 152'],
  whatsapp: '+971 50 9799 153',
  email: 'sales@jhstrade.net',
  office: 'Al Hamra Industrial Zone, Ras Al Khaimah, UAE',
  hours: 'Sat–Thu, 9:00–18:00',
  licence: '[licence no.]',
  site: 'https://jhstrade.net',
}

const digits = (n) => n.replace(/\D/g, '')
export const telHref = (n) => `tel:+${digits(n)}`
export const waHref = (text) => `https://wa.me/${digits(contact.whatsapp)}${text ? `?text=${encodeURIComponent(text)}` : ''}`
export const mailHref = (subject, body) =>
  `mailto:${contact.email}${subject ? `?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body || '')}` : ''}`
