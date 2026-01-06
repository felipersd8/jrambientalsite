import { Helmet } from 'react-helmet-async';
import { config } from '../config';

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
}

export function SEO({ title, description, canonical }: SEOProps) {
  const fullUrl = `${config.site.url}${canonical}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
}
