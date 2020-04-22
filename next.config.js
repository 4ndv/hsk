const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  webpack: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.resolve.alias['~'] = path.resolve(__dirname)

    return config
  }
})
