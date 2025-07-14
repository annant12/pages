/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['preprod.myspotlight.co'],
        unoptimized: true,
    },
    output: 'export',
};

export default nextConfig;

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export',
//   images: {
//     unoptimized: true, // Required for next/image in static export
//   },
// }

// module.exports = nextConfig;
