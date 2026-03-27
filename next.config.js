const repoName = "muqeet-portfolio";
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true";
const hasCustomDomain = Boolean(process.env.CUSTOM_DOMAIN);
const useProjectBasePath = isGithubPagesBuild && !hasCustomDomain;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true
  },
  basePath: useProjectBasePath ? `/${repoName}` : "",
  assetPrefix: useProjectBasePath ? `/${repoName}/` : ""
};

module.exports = nextConfig;
