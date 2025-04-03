import createNextIntlPlugin from 'next-intl/plugin';
import withPlaiceholder from '@plaiceholder/next'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'en0ulmbyhcg7petd.public.blob.vercel-storage.com'
        }
      ]
    }
  }
 
const withNextIntl = createNextIntlPlugin();
export default withPlaiceholder(withNextIntl(nextConfig))