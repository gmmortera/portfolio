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
              'name': 'Gianfranco Mortera | Full-stack Engineer',
              'description': 'Gianfranco Mortera — frontend engineer by day, pixel artist by night. Building for the web from Cebu, PH, and currently learning game dev.',
              'publisher': { '@id': 'https://www.gmmortera.com/#person' }
            },
            {
              '@type': 'Person',
              '@id': 'https://www.gmmortera.com/#person',
              'name': 'Gianfranco Mortera',
              'url': 'https://www.gmmortera.com/',
              'jobTitle': 'Frontend Engineer',
              'image': 'https://www.gmmortera.com/og-image.png',
              'sameAs': [
                'https://github.com/gmmortera',
                'https://www.linkedin.com/in/gianfranco-mortera-93a494282'
              ]
            }
          ]
        })
      }
    ]
  })
}
