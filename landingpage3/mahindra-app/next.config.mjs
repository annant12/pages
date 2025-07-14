/** @type {import('next')
 * .NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "dealers-auto.mahindra.com",
            },
        ],
        unoptimized: true,
    },
};

export default nextConfig;
