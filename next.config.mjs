/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pinimg.com',
                // pathname: '/564x/*',
            }
        ],
    },

};

export default nextConfig;
