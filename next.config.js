/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withPlugins = require('next-compose-plugins');
const withReactSvg = require('next-react-svg');
const withImages = require('next-images');
const withSvgr = require('@svgr/webpack')
const path = require('path');

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}
