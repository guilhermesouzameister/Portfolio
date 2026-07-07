import type { NextConfig } from "next";

/**
 * GitHub Pages configuration.
 *
 * Set the NEXT_PUBLIC_BASE_PATH env var to your repo name, e.g.:
 *   NEXT_PUBLIC_BASE_PATH=/my-portfolio
 *
 * Leave it empty (or unset) if you are deploying to a user/organization page
 * (https://<username>.github.io/) — that case uses the root path.
 *
 * On GitHub Pages this is set automatically by the deploy workflow below.
 */
const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGitHubActions && repo ? `/${repo}` : "";

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages
  output: "export",

  // GitHub Pages serves pre-rendered files; trailing slashes match the URL
  trailingSlash: true,

  // Required: next/font and next/image optimizations don't work on static hosts
  images: {
    unoptimized: true,
  },

  // Serve assets from the repo subpath when deployed under /<repo>
  basePath,
  assetPrefix: basePath || undefined,

  // The /_next/static folder must NOT be processed by Jekyll — handled by .nojekyll
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
