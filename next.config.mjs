const isGithubPages = process.env.GITHUB_PAGES === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/church-oromo" : "",
  assetPrefix: isGithubPages ? "/church-oromo/" : "",
  images: {
    unoptimized: isGithubPages,
  },
};

export default nextConfig;
