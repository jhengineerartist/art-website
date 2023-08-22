/** @type {import('next').NextConfig} */
const nextConfig = {
    // time in seconds of no pages generating during static
    // generation before timing out
    staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
