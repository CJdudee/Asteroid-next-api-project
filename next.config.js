/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'ssd.jpl.nasa.gov',
                port: '',
                
            }
        ]
    },
    experimental: {
        serverActions: true
    }
}

module.exports = nextConfig
