const repoName = "muqeet-portfolio";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true
  },
  basePath: isGithubPagesBuild ? `/${repoName}` : "",
  assetPrefix: isGithubPagesBuild ? `/${repoName}/` : ""
};

module.exports = nextConfig;
