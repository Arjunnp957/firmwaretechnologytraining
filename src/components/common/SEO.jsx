import { Helmet } from 'react-helmet-async'
import institute from '../../data/institute'

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/logo.svg',
  ogType = 'website',
}) {
  const pageTitle = title
    ? `${title} | ${institute.name}`
    : `${institute.name} | ${institute.tagline}`

  const pageDescription = description || institute.about
  const url = canonicalUrl ? `${institute.siteUrl}${canonicalUrl}` : institute.siteUrl

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: institute.name,
    description: institute.about,
    url: institute.siteUrl,
    telephone: institute.phone,
    email: institute.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: institute.address,
    },
  }

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

