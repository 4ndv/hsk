const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  assetPrefix: process.env.BASE_URL || '',
  env: {
    base: process.env.BASE_URL || ''
  },
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['~'] = path.resolve(__dirname)

    return config
  }
})
