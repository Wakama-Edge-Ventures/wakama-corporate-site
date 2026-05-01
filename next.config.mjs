import createNextIntlPlugin from "next-intl/plugin";
import {dirname} from "node:path";
import {fileURLToPath} from "node:url";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");
const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: projectRoot,
};

export default withNextIntl(nextConfig);
