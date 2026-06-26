export const useSiteStructuredData = () => {
  useHead({
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://www.gmmortera.com/#website',
              'url': 'https://www.gmmortera.com/',
              'name': 'Home - Gianfranco Mortera | Fullstack Engineer',
              'description': 'Create a portfolio description here.',
            },
            {
              '@type': 'Organization',
              '@id': 'https://www.gmmortera.com/#organization',
              'name': 'Gianfranco Mortera',
              'url': 'https://www.gmmortera.com/',
              'logo': {
                '@type': 'ImageObject',
                'url': 'https://www.gmmortera.com/android-chrome-512x512.png'
              }
            }
          ]
        })
      }
    ]
  })
}