// Text for /privacy/ and /terms/. Written for how this site actually works: no accounts,
// no analytics, no cookies, and the quote form only opens WhatsApp or email on the visitor's device.
// Have JHS's legal adviser review before relying on it.
import { contact } from './data.js'

const updated = '26 October 2026'
const reach = `email ${contact.email}, call ${contact.phones.join(' or ')}, or write to us at ${contact.office}`

export const legal = {
  privacy: {
    title: 'Privacy Policy',
    updated,
    intro: `This policy explains what personal information ${contact.legalName} ("JHS", "we", "us") collects through www.jhstrade.net, how we use it and the choices you have. It is written with the UAE Personal Data Protection Law (Federal Decree-Law No. 45 of 2021) in mind.`,
    sections: [
      ['Who we are', [
        `${contact.legalName} is a wholesale trading company based in ${contact.office}, trade licence no. ${contact.licence}. We are responsible for the personal information described in this policy.`,
      ]],
      ['What we collect', [
        'Browsing this website does not require you to give us any personal information. We do not run analytics or advertising trackers, and this website does not set cookies.',
        'If you contact us, we receive what you choose to send: typically your name, company, phone number, email address, delivery location and the details of your enquiry. The quote form on this website does not send anything to us by itself. It prepares a message on your device, which you then send to us through WhatsApp or your own email app.',
        'Like any website, our hosting provider automatically records technical data when pages are requested, such as IP address, browser type and the time of the request, to deliver the site and keep it secure.',
      ]],
      ['How we use it', [
        'We use your information to reply to enquiries, prepare quotations, process and deliver orders, issue invoices and trade documents, and keep records that UAE law requires us to keep. We do not sell your personal information, and we do not use it for marketing you have not asked for.',
      ]],
      ['Who we share it with', [
        'We share information only as far as needed to serve you: with logistics, customs and inspection providers handling your order, with our banks and professional advisers, and with authorities where the law requires it.',
        'Messages you send us travel through the service you choose (for example WhatsApp or your email provider), under that provider’s own terms. This website loads fonts from Google Fonts, which means your browser connects to Google’s servers when you open a page.',
      ]],
      ['How long we keep it', [
        'We keep enquiry correspondence for as long as it is useful for our business relationship, and order and accounting records for the period required by UAE law. After that we delete or anonymise it.',
      ]],
      ['Your rights', [
        `You can ask us for a copy of the personal information we hold about you, ask us to correct or delete it, or object to how we use it. To do so, ${reach}. We will reply within a reasonable time and in any case within the period the law requires.`,
      ]],
      ['Security', [
        'We take reasonable technical and organisational measures to protect the information you send us. No method of transmission over the internet is completely secure, so please do not send payment card details or passwords to us by WhatsApp or email.',
      ]],
      ['Changes to this policy', [
        'We may update this policy from time to time. The latest version will always be on this page, with the date it was last updated.',
      ]],
      ['Contact', [
        `For any question about this policy, ${reach}.`,
      ]],
    ],
  },
  terms: {
    title: 'Terms & Conditions',
    updated,
    intro: `These terms apply to your use of www.jhstrade.net, operated by ${contact.legalName} ("JHS", "we", "us"). By using this website you agree to them. If you do not agree, please do not use the website.`,
    sections: [
      ['About us', [
        `${contact.legalName} is a wholesale trading company based in ${contact.office}, trade licence no. ${contact.licence}.`,
      ]],
      ['Product information', [
        'Product names, grades, sizes, origins and packing shown on this website describe our typical range and are for general information. They are not an offer to sell. Availability, specifications and origins can change with season and supply, and will be confirmed in writing for each order.',
        'Product drawings and descriptions are illustrative. Where it matters to you, ask for a spec sheet or a sample before ordering.',
      ]],
      ['Quotations and orders', [
        'Prices are given only in a written quotation. A quotation is valid for the period stated on it and is subject to stock availability.',
        'An order is binding only when we confirm it in writing, for example by a proforma invoice or sales confirmation. The terms in that document (including price, quantity, payment, delivery terms and inspection) take priority over these website terms.',
      ]],
      ['Delivery and risk', [
        'Delivery terms, timing and the point at which risk passes to you are those agreed in the order confirmation. Delivery dates are estimates unless we expressly agree a fixed date in writing.',
      ]],
      ['Use of this website', [
        'You may browse this website and share links to it. You must not misuse it, attempt to gain unauthorised access to it, or copy its content for commercial use without our written permission.',
        'The JHS name and logo, and the text, drawings and design of this website, belong to us or our licensors.',
      ]],
      ['Links to other services', [
        'This website links to third-party services such as WhatsApp and email. We are not responsible for their content, availability or how they handle your information.',
      ]],
      ['Liability', [
        'We take care to keep this website accurate and available, but we do not guarantee that it is complete, current or free of errors. To the extent permitted by law, we are not liable for any loss arising from reliance on website content. Our liability for products we supply is governed by the relevant order confirmation and by UAE law. Nothing in these terms limits liability that cannot be limited under UAE law.',
      ]],
      ['Changes', [
        'We may update these terms from time to time. The version on this page, with its last-updated date, applies from the time it is published.',
      ]],
      ['Governing law', [
        'These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Ras Al Khaimah. The courts of Ras Al Khaimah have jurisdiction over any dispute arising from them.',
      ]],
      ['Contact', [
        `For any question about these terms, ${reach}.`,
      ]],
    ],
  },
}
