const nextConfig = {
    images: {
      remotePatterns: [
        { hostname: 'www.naijanews.com' },
        { hostname: 'another-domain.com' },
        { hostname: 'yet-another-domain.com' },
        // Add more domain patterns here
      ],
    },
    // ... rest of your Next.js config
  }
  
  module.exports = nextConfig;
  