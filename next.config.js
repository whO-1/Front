const path = require('path');

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://localhost:44398/api/:path*',
            },
        ];
    },
    sassOptions: {
        includePaths: [
            path.join(__dirname, 'styles'),
            path.join(__dirname, 'node_modules', 'bootstrap', 'scss'),
        ],
    },
    reactStrictMode: false,
    
};
  
module.exports = nextConfig;