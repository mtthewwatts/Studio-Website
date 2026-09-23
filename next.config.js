/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: GitHub Pages serves files only, no Next.js server.
  output: 'export',
  // Emit /projects/<slug>/index.html so Pages resolves directory URLs.
  trailingSlash: true,
  // The image optimizer needs a server, which Pages does not provide.
  images: { unoptimized: true },
};

module.exports = nextConfig;
