interface PageStructuredDataOptions {
  type: string
  id: string
  url: string
  name: string
  description: string
  isPartOf: string
  publisher: string
  image?: string
}

const DEFAULT_OG_IMAGE = "https://www.gmmortera.com/og-image.png"

export const usePageStructuredData = (options: PageStructuredDataOptions) => {
  const ogImage = options.image || DEFAULT_OG_IMAGE

  useSeoMeta({
    title: options.name,
    description: options.description,
    ogTitle: options.name,
    ogDescription: options.description,
    ogUrl: options.url,
    ogImage,
    ogImageAlt: options.name,
    twitterTitle: options.name,
    twitterDescription: options.description,
    twitterImage: ogImage,
  })

  useHead({
    link: [
      { rel: "canonical", href: options.url }
    ],
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
