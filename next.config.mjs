/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "", // Leave this empty if you're not specifying a port
        pathname: "/**", // Allow any pathname (all images from the domain)
      },
    ],
  },
};

export default nextConfig;
