/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['example.io'],
  },
  // i18n: {
  //   locales: ["en", "ru", "uz"],
  //   defaultLocale: 'ru',
  //   localeDetection: false
  // },
  // async rewrites() {
  //   return [
  //     //rus
  //     {
  //       source: '/o-nas',
  //       destination: '/about',
  //       locale: false
  //     },
  //     {
  //       source: '/default/blog',
  //       destination: '/blog',
  //       locale: false
  //     },
  //     {
  //       source: '/default/kontakty',
  //       destination: '/contacts',
  //       locale: false
  //     },
  //     {
  //       source: '/default/faq',
  //       destination: '/faq',
  //       locale: false
  //     },
  //     {
  //       source: '/default/stacionar',
  //       destination: '/hospital',
  //       locale: false
  //     },
  //     {
  //       source: '/default/doctora',
  //       destination: '/ourdoctors',
  //       locale: false
  //     },
  //     {
  //       source: '/default/doctora/:slug',
  //       destination: '/ourdoctors/:slug',
  //       locale: false
  //     },
  //     {
  //       source: '/default/prays-list',
  //       destination: '/prices',
  //       locale: false
  //     },
  //     {
  //       source: '/default/reviews',
  //       destination: '/reviews',
  //       locale: false
  //     },
  //     {
  //       source: '/default/uslugi',
  //       destination: '/services',
  //       locale: false
  //     },
  //     {
  //       source: '/default/uslugi/:slug',
  //       destination: '/services/:slug',
  //       locale: false
  //     },
  //     //uzbek
  //     {
  //       source: '/uz/biz-haqimizda',
  //       destination: '/uz/about',
  //       locale: false
  //     }, {
  //       source: '/uz/mahsulotlar/:id',
  //       destination: '/uz/product/:id',
  //       locale: false
  //     }, {
  //       source: '/uz/kontaktlar',
  //       destination: '/uz/contacts',
  //       locale: false
  //     }, {
  //       source: '/uz/faq',
  //       destination: '/uz/faq',
  //       locale: false
  //     }, {
  //       source: '/uz/kasalxona',
  //       destination: '/uz/hospital',
  //       locale: false
  //     }, {
  //       source: '/uz/shifokorlar',
  //       destination: '/uz/ourdoctors',
  //       locale: false
  //     }, {
  //       source: '/uz/shifokorlar/:slug',
  //       destination: '/uz/ourdoctors/:slug',
  //       locale: false
  //     }, {
  //       source: '/uz/narxlar-jadvali',
  //       destination: '/uz/prices',
  //       locale: false
  //     }, {
  //       source: '/uz/sharhlar',
  //       destination: '/uz/reviews',
  //       locale: false
  //     }, {
  //       source: '/uz/xizmatlar',
  //       destination: '/uz/services',
  //       locale: false
  //     },
  //     {
  //       source: '/uz/xizmatlar/:slug',
  //       destination: '/uz/services/:slug',
  //       locale: false
  //     },

  //     //english
  //     {
  //       source: '/en/about',
  //       destination: '/about',
  //       locale: false
  //     }, {
  //       source: '/en/blog',
  //       destination: '/en/blog',
  //       locale: false
  //     }, {
  //       source: '/en/contacts',
  //       destination: '/en/contacts',
  //       locale: false
  //     }, {
  //       source: '/en/faq',
  //       destination: '/en/faq',
  //       locale: false
  //     }, {
  //       source: '/en/hospital',
  //       destination: '/en/hospital',
  //       locale: false
  //     }, {
  //       source: '/en/ourdoctors',
  //       destination: '/en/ourdoctors',
  //       locale: false
  //     }, {
  //       source: '/en/prices',
  //       destination: '/en/prices',
  //       locale: false
  //     }, {
  //       source: '/en/reviews',
  //       destination: '/en/reviews',
  //       locale: false
  //     }, {
  //       source: '/en/services',
  //       destination: '/en/services',
  //       locale: false
  //     },
  //     {
  //       source: '/en/services/:slug',
  //       destination: '/en/services/:slug',
  //       locale: false
  //     },
  //   ]
  // }
}

module.exports = nextConfig
