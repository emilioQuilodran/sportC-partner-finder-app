require('dotenv').config();

const nextConfig = {
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  env: {
      PORT : process.env.PORT,
      MONGODB_URI_PROD: process.env.MONGODB_URI_PROD,
      MONGODB_URI : process.env.MONGODB_URI
  }
}

module.exports = nextConfig
