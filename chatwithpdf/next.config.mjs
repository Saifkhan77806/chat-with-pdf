/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: "pdf.ai",
          },
        ],
      },
};

export default nextConfig;
