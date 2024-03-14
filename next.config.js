/** @type {import('next').NextConfig} */
const nextConfig = {
    headers() {
        return [
            {
                source: '/(.*)?',
                headers: [
                    {
                        key: 'X-Frame-Options',
                        value: 'ALLOW-FROM *'
                    }
                ]
            }
        ]
    },
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
