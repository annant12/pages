/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        domains: ["preprod.myspotlight.co"], // ✅ allow external image domain
    },
};

export default nextConfig;
