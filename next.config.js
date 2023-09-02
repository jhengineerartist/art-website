/** @type {import('next').NextConfig} */
const nextConfig = {
    // time in seconds of no pages generating during static
    // generation before timing out
    staticPageGenerationTimeout: 120,
    images: {
        domains: ["firebasestorage.googleapis.com"],
    },
};

module.exports = nextConfig;
