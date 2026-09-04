export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://dharsanportfolio.vercel.app/sitemap.xml',
  };
}