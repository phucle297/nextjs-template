import FooterLanguage from 'data/greeting/footer'

const footer = [
  {
    id: 1,
    name: FooterLanguage?.about,
    link: '/about',
    childs: [
      { childId: 2, name: FooterLanguage?.leadWithLof, link: '/' },
      { childId: 3, name: FooterLanguage?.maltoGangz, link: '/' }
    ]
  },
  {
    id: 4,
    name: FooterLanguage?.products,
    link: '/products',
    childs: [
      { childId: 5, name: FooterLanguage?.fruitMilk, link: '/' },
      { childId: 6, name: FooterLanguage?.barleyMilk, link: '/' },
      { childId: 7, name: FooterLanguage?.drinkYogurt, link: '/' }
    ]
  },
  {
    id: 8,
    name: FooterLanguage?.programs,
    link: 'programs',
    childs: [
      {
        childId: 9,
        name: FooterLanguage?.vocationalGuidance,
        link: 'http://www.huongnghieplwl.edu.vn/'
      },
      {
        childId: 10,
        name: FooterLanguage?.flashmob,
        link: 'http://www.flashmob.huongnghieplwl.edu.vn/'
      },
      {
        childId: 11,
        name: FooterLanguage?.debates,
        link: 'http://www.scholarcup.huongnghieplwl.edu.vn/'
      },
      { childId: 12, name: 'Marathon', link: '/' }
    ]
  },
  {
    id: 13,
    name: FooterLanguage?.info,
    link: '/info',
    childs: [
      {
        childId: 14,
        name: FooterLanguage?.contact,
        link: '/contact'
      },
      {
        childId: 10,
        name: FooterLanguage?.TermsConditions,
        link: '/'
      },
      { childId: 11, name: FooterLanguage?.privacyPolicy, link: '/' },
      { childId: 12, name: FooterLanguage?.media, link: '/media' },
      { childId: 14, name: FooterLanguage?.fAQs, link: '/' }
    ]
  }
]
export default footer
