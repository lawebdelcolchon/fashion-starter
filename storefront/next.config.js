const path = require("path")
const checkEnvVariables = require("./check-env-variables")

checkEnvVariables()

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,

  experimental: {
    staticGenerationRetryCount: 3,
    staticGenerationMaxConcurrency: 1,
    serverActions: {} // ✅ Corrige el error "Expected object, received boolean"
  },

  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
      },
      {
        protocol: "https",
        hostname: "fashion-starter-demo.s3.eu-central-1.amazonaws.com",
      },
    ],
  },

  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname, "src")
    config.resolve.alias["@components"] = path.resolve(__dirname, "src/components")
    config.resolve.alias["@lib"] = path.resolve(__dirname, "src/lib")
    config.resolve.alias["@modules"] = path.resolve(__dirname, "src/modules")
    config.resolve.alias["@hooks"] = path.resolve(__dirname, "src/hooks") // ✅ alias necesario
    return config
  },
}

module.exports = nextConfig
