
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/events',
        destination: 'https://localhost:44329/api/events',
      },
    ];
  },
    
    reactStrictMode: false
  };
  
module.exports = nextConfig;