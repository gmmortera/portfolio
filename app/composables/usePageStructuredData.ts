interface PageStructuredDataOptions {
  type: string
  id: string
  url: string
  name: string
  description: string
  isPartOf: string
  publisher: string
}

export const usePageStructuredData = (options: PageStructuredDataOptions) => {
  useHead({
    title: options.name,
    script: [
      {
        type: "application/ld+json",
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': options.type,
              '@id': options.id,
              'url': options.url,
              'name': options.name,
              'description': options.description,
              'isPartOf': { '@id': options.isPartOf },
              'publisher': { '@id': options.publisher }
            }
          ]
        })
      }
    ]
  })
}
